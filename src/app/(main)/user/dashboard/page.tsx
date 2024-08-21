'use server'
import { getUserTours } from '@/app/api/supabase'
import { Dashboard } from '@/components/Dashboard'
import { createClient } from '@/helpers/serverHelpers'
import { getSession, getUser } from '@/supabase/helpers'
import type { Tour } from '@/types'
import { redirect } from 'next/navigation'

const UserPage = async () => {
  const session = await getSession()

  /**
   * @todo This will do for now but better to show a component that says you
   *   should be logged in to use the dashboard
   */
  if (!session) {
    redirect('/login')
  }

  const supabase = createClient()
  const { id, email } = (await getUser(supabase)) || {}

  let tours: Tour[]

  /**
   * @todo Format this data with a dedicated formatter and parse it with `Zod`.
   *   This should happen directly inside `getUserTours` function
   */
  if (id) {
    tours = (await getUserTours(id)) as Tour[]
  } else tours = []

  /**
   * @todo Create a `Dashboard` component. It will be probably a good idea to
   *   nest User components inside a `User` folder. Also, create a
   *   `UserFeedList` always inside `User` component list
   */
  return <Dashboard email={email} tours={tours} />
}

export default UserPage
