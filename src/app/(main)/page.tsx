import { getFeed, getHomepage } from '@/helpers/serverHelpers'
import { Feed } from '@/components'
import { FeedType } from '@/types'
import { api } from '@/trpc/server'

const HomePage = async () => {
  const { header }: Awaited<FeedType> = await getFeed()
  const { title } = await getHomepage()
  const tours = await api.musicEvents.bySearch.query({
    keyword: '',
  })

  return (
    <>
      <Feed tours={tours} header={header} />
    </>
  )
}

export default HomePage
