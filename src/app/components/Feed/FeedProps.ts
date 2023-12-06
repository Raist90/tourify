import { FeedType, Tour } from '@/types'

export type FeedProps = {
  tours: Tour[]
  header: FeedType['header']
}

/** `FeedLayoutOptions` types */
export type LayoutOptionType = {
  key: 'grid-cols-1' | 'grid-cols-2' | 'grid-cols-3'
  title: string
  icon: JSX.Element
}
