import { getSession } from '@/supabase/helpers'
import { Dropwdown } from './partials'

export const NavigationSecondaryComponent = async () => {
  const session = await getSession()

  return <Dropwdown session={session} />
}
