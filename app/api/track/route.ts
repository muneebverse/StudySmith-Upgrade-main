 HEAD
// app/api/track/route.ts
//
// Public order lookup. Uses the admin (service role) client deliberately —
// see the note in sql/03_rls_policies.sql for why this is NOT a public RLS
// policy. This route is the only door into the leads table for anonymous
// visitors, and it only ever returns a tiny, safe slice of the row:
// status + updated_at. Never the name, contact, message, or anything else.

import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const order_id = searchParams.get('order_id')?.trim().toUpperCase()

  if (!order_id) {
    return NextResponse.json(
      { error: 'Order ID is required.' },
      { status: 400 }
    )
  }

  const supabase = createAdminClient()

  const { data, error } = await supabase
    .from('leads')
    .select('status, updated_at, service_interested')
    .eq('order_id', order_id)
    .maybeSingle()

  if (error) {
    console.error('Track lookup error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }

  if (!data) {
    return NextResponse.json(
      { error: 'No order found with that ID. Please check and try again.' },
      { status: 404 }
    )
  }

  return NextResponse.json(data)

// app/api/track/route.ts
//
// Public order lookup. Uses the admin (service role) client deliberately —
// see the note in sql/03_rls_policies.sql for why this is NOT a public RLS
// policy. This route is the only door into the leads table for anonymous
// visitors, and it only ever returns a tiny, safe slice of the row:
// status + updated_at. Never the name, contact, message, or anything else.

import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-admin'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const order_id = searchParams.get('order_id')?.trim().toUpperCase()

  if (!order_id) {
    return NextResponse.json(
      { error: 'Order ID is required.' },
      { status: 400 }
    )
  }

  const supabase = createAdminClient()

  const { data, error } = await supabase
    .from('leads')
    .select('status, updated_at, service_interested')
    .eq('order_id', order_id)
    .maybeSingle()

  if (error) {
    console.error('Track lookup error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }

  if (!data) {
    return NextResponse.json(
      { error: 'No order found with that ID. Please check and try again.' },
      { status: 404 }
    )
  }

  return NextResponse.json(data)
 212ff91cb5bebd3c6e32e92634b5af34127456a5
}