import { getUser } from '@/supabase/helpers'

const UserPage = async () => {
  const user = await getUser()

  /** @todo We will use this `id` to access `tours` table */
  const { id, email } = user

  /**
   * @todo Create a `Dashboard` component. It will be probably a good idea to
   *   nest User components inside a `User` folder
   */
  return (
    <section>
      <div>User Dashboard</div>
      <p>{email}</p>
    </section>
  )
}

export default UserPage
