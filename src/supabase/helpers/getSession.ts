import { createClient } from '@/helpers/serverHelpers'

export const getSession = async () => {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const session = !!user

  return session
}
