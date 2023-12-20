import { FeedType, Tour } from '@/types'

export type FeedProps = {
  tours: Tour[]
  header: FeedType['header']
  keyword?: string
}
