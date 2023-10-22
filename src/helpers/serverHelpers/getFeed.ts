import { feedQuery } from '@/app/api'
import type { FeedType } from '@/app/types'
import { api } from '@/trpc/server'

export const getFeed = async () => {
  const feedData: Awaited<FeedType> = await api.feed.byQuery.query({
    query: feedQuery,
  })
  return feedData
}
