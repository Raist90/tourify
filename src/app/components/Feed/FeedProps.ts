import { Artist, FeedType } from '@/types'

export type FeedProps = {
  artists: Artist[]
  header: FeedType['header']
}

/** `FeedLayoutOptions` types */
export type LayoutOptionType = {
  key: 'grid-cols-1' | 'grid-cols-2' | 'grid-cols-3'
  title: string
  icon: JSX.Element
}
