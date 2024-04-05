import { createClient } from '@/helpers/serverHelpers'
import { redirect } from 'next/navigation'

export const getUser = async () => {
  const supabase = createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  /**
   * @todo What should we do in this case? Maybe render a component that
   *   explains you need to login in order to access this page
   */
  if (error || !user) {
    redirect('/error')
  }

  return user
}
