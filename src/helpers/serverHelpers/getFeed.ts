import { feedQuery } from '@/app/api'
import { api } from '@/trpc/server'
import type { FeedType } from '@/types'

export const getFeed = async () => {
  const feedData: Awaited<FeedType> = await api.feed.byQuery.query({
    query: feedQuery,
  })
  return feedData
}
