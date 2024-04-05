import { createClient } from '@/helpers/serverHelpers'
import { Dropwdown } from './partials'

export const NavigationSecondaryComponent = async () => {
  /**
   * @todo Figure out what to do with this. Probably it's best to create a
   *   `getSession` helper inside a `supabase` directory
   */
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const session = !!user

  return <Dropwdown session={session} />
}
