// lib/supabase-browser.ts
// Use this in Client Components ("use client" files) — login form, admin forms, etc.
// Uses the anon key — safe to expose, RLS policies restrict what it can actually do.

import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}