import { getFeed } from '@/helpers'
import { artists } from './api'
import { Feed } from './components'
import { FeedType } from './types'

const HomePage = async () => {
  const { header }: FeedType = await getFeed()

  return (
    <div>
      <div>Home Page</div>
      <Feed artists={artists} header={header} />
    </div>
  )
}

export default HomePage
