import { getUserTours } from '@/app/api/supabase'
import { TourCard } from '@/components/TourCard'
import { createClient } from '@/helpers/serverHelpers'
import { getUser } from '@/supabase/helpers'
import type { Tour } from '@/types'

const UserPage = async () => {
  const supabase = createClient()
  const user = await getUser(supabase)

  /** @todo We will use this `id` to access `tours` table */
  const { id, email } = user

  /**
   * @todo Format this data with a dedicated formatter and parse it with `Zod`.
   *   This should happen directly inside `getUserTours` function
   */
  const tours = (await getUserTours(supabase)) as Tour[]

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
