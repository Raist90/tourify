import { getFeed, getHomepage } from '@/helpers/serverHelpers'
import { Feed } from '@/components'
import { FeedType } from '@/types'
import { getMusicEvents } from '../api/ticketmaster'

const HomePage = async () => {
  const { header }: Awaited<FeedType> = await getFeed()
  const { title } = await getHomepage()
  const tours = await getMusicEvents()

  return (
    <>
      <Feed tours={tours} header={header} />
    </>
  )
}

export default HomePage
