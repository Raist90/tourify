import type { FeedType } from '@/types'

type FeedHeaderProps = {
  header: FeedType['header']
}

export const FeedHeader: React.FC<FeedHeaderProps> = ({ header }) => {
  return (
    <header>
      <h2 className='text-2xl'>{header.title}</h2>
      <p>{header.text}</p>
    </header>
  )
}
