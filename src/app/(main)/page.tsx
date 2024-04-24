import { Feed } from '@/components/Feed'
import { getFeed, getHomepage } from '@/helpers/serverHelpers'
import { FeedType } from '@/types'

const HomePage = async () => {
  const { header }: Awaited<FeedType> = await getFeed()
  const { title } = await getHomepage()

  return <Feed header={header} keyword='' />
}

export default HomePage
