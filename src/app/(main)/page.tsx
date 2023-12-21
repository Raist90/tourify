import { getFeed, getHomepage } from '@/helpers/serverHelpers'
import { Feed } from '@/components'
import { FeedType } from '@/types'

const HomePage = async () => {
  const { header }: Awaited<FeedType> = await getFeed()
  const { title } = await getHomepage()

  return (
    <>
      <Feed header={header} keyword='' />
    </>
  )
}

export default HomePage
