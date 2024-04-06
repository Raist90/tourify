import { getUserTours } from '@/app/api/supabase'
import { TourCard } from '@/app/components/TourCard'
import { getUser } from '@/supabase/helpers'

const UserPage = async () => {
  const user = await getUser()

  /** @todo We will use this `id` to access `tours` table */
  const { id, email } = user

  /**
   * @todo Format this data with a dedicated formatter and parse it with `Zod`.
   *   This should happen directly inside `getUserTours` function
   */
  const tours = await getUserTours()

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
