import { feedQuery } from '@/app/api'
import { client } from '../../sanity/lib'
import { FeedType } from '@/app/types'

export const getFeed = async () => {
  const sanityClient = client
  const feedData: Awaited<FeedType> = await sanityClient.fetch(feedQuery)
  return feedData
}
