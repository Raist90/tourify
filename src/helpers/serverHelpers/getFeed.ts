import { feedQuery } from '@/api'
import type { FeedType } from '@/types'
import { api } from '@/trpc/server'

export const getFeed = async () => {
  const feedData: Awaited<FeedType> = await api.feed.byQuery.query({
    query: feedQuery,
  })
  return feedData
}
