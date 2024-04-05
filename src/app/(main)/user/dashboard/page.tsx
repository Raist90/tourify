import { createClient } from '@/helpers/serverHelpers'
import { redirect } from 'next/navigation'

const UserPage = async () => {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  /**
   * @todo What should we do in this case? Maybe render a component that
   *   explains you need to login in order to access this page
   */
  if (!user) redirect('/login')

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
