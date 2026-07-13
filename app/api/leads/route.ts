// app/api/leads/route.ts
//
// Handles POST from the public /request form.
// Uses the admin client (service role) because inserting needs to happen
// reliably even though the anon "insert leads" RLS policy would also allow
// this — using the admin client here lets us also read the row back
// immediately (to email you) and retry cleanly on order_id collisions
// without fighting RLS on the SELECT side.

import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase-admin';
import { generateOrderId } from '@/lib/order-id';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, contact, service_interested, message } = body;

  // Basic server-side validation — never trust client-side validation alone,
  // since anyone can call this endpoint directly with curl/Postman.
  if (!name?.trim() || !contact?.trim()) {
    return NextResponse.json(
      { error: 'Name and contact are required.' },
      { status: 400 }
    );
  }

  const supabase = createAdminClient();

  // Retry loop for the astronomically unlikely case of an order_id collision.
  // 5 attempts is overkill for a 6-char/33-symbol space, but it's free insurance.
  let lead = null;
  let lastError = null;

  for (let attempt = 0; attempt < 5; attempt++) {
    const order_id = generateOrderId();

    const { data, error } = await supabase
      .from('leads')
      .insert({
        order_id,
        name: name.trim(),
        contact: contact.trim(),
        service_interested: service_interested?.trim() || null,
        message: message?.trim() || null,
      })
      .select()
      .single();

    if (!error) {
      lead = data;
      break;
    }

    // Only retry on a unique constraint violation (order_id collision).
    // Any other error (bad data, connection issue) should fail immediately
    // rather than retrying blindly.
    if (error.code !== '23505') {
      lastError = error;
      break;
    }

    lastError = error;
  }

  if (!lead) {
    console.error('Failed to create lead:', lastError);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }

  // Fire the email notification but don't let a failure here break the
  // response to the client — they already have their order_id, that's
  // what matters most. Email is a "nice to have you find out fast" layer.
  try {
    await sendLeadNotification(lead);
  } catch (err) {
    console.error('Failed to send lead notification email:', err);
  }

  return NextResponse.json({ order_id: lead.order_id });
}

async function sendLeadNotification(lead: {
  order_id: string;
  name: string;
  contact: string;
  service_interested: string | null;
  message: string | null;
}) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not set — skipping email notification.');
    return;
  }

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'StudySmith <notifications@studysmith.online>',
      to: process.env.ADMIN_NOTIFICATION_EMAIL,
      subject: `New lead: ${lead.name} (${lead.order_id})`,
      html: `
        <h2>New request received</h2>
        <p><strong>Order ID:</strong> ${lead.order_id}</p>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Contact:</strong> ${lead.contact}</p>
        <p><strong>Service:</strong> ${lead.service_interested || '—'}</p>
        <p><strong>Message:</strong> ${lead.message || '—'}</p>
      `,
    }),
  });
}
