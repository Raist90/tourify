import {
  addTour,
  deleteTour,
  getProfile,
  getUserTours,
} from '@/app/api/supabase'
import { Feed } from '@/components'
import { DBActionsProvider } from '@/contexts'
import { createClient, getFeed, getHomepage } from '@/helpers/serverHelpers'
import { FeedType } from '@/types'

const HomePage = async () => {
  const { header }: Awaited<FeedType> = await getFeed()
  const { title } = await getHomepage()

  const supabase = createClient()
  const userTours = await getUserTours(supabase)
  const userToursIds = userTours.map((tour) => tour.id)

  const actions = {
    addTour,
    getProfile,
    userToursIds,
    deleteTour,
  }

  return (
    <DBActionsProvider actions={actions}>
      <Feed header={header} keyword='' />
    </DBActionsProvider>
  )
}

export default HomePage
