import { artists, feedQuery } from './api'
import { Feed } from './components'
import { FeedType } from './types'
import { api } from '@/trpc/server'

const HomePage = async () => {
  const { header }: Awaited<FeedType> = await api.feed.byQuery.query({
    query: feedQuery,
  })

  return (
    <div>
      <div>Home Page</div>
      <Feed artists={artists} header={header} />
    </div>
  )
}

export default HomePage
