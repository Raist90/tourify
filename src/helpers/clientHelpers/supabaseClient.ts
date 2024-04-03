import { CLIENT_ENV } from '@/app/env/client'
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    CLIENT_ENV.NEXT_PUBLIC_SUPABASE_URL,
    CLIENT_ENV.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  )
}
