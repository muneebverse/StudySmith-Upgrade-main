// lib/supabase-admin.ts
//
// !! SERVER-SIDE ONLY !!
// Never import this file in a "use client" component or anything that
// ships to the browser. It uses the SUPABASE_SERVICE_ROLE_KEY, which
// bypasses RLS entirely — anyone with this key can read/write everything.
//
// Used for: the /api/track route (public order_id lookup, one row only)
// and the /api/leads route (inserting + reading back the row to email you).
//
// The service role key goes in .env.local as SUPABASE_SERVICE_ROLE_KEY
// (no NEXT_PUBLIC_ prefix — that prefix is what makes a var browser-visible,
// so this must never have it).

import { createClient } from '@supabase/supabase-js'

export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  )
}