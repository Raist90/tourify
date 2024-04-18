import type { SupabaseClient } from '@supabase/supabase-js'
import { dbErrorHandler } from './dbErrorHandler'

export const getUser = async (supabase: SupabaseClient) => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  /**
   * @todo What should we do in this case? Maybe render a component that
   *   explains you need to login in order to access this page
   */
  if (error) {
    dbErrorHandler(error)
  }

  return user
}
