import { getUserTours } from '@/app/api/supabase'
import { TourCard } from '@/components/TourCard'
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
  return (
    <section>
      <div>User Dashboard</div>
      <p>{email}</p>
      <div
        className={`grid grid-cols-1 gap-4 text-start md:grid-cols-3 xl:grid-cols-4`}
      >
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  )
}

export default UserPage
