import { getFeed, getHomepage } from '@/helpers/serverHelpers'
import { artists } from '@/api'
import { Feed } from '@/components'
import { FeedType } from '@/types'

const HomePage = async () => {
  const { header }: Awaited<FeedType> = await getFeed()
  const { title } = await getHomepage()

  return (
    <>
      <Feed artists={artists} header={header} />
    </>
  )
}

export default HomePage
