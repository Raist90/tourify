import { FeedType } from '@/types'

type FeedHeaderProps = {
  header: FeedType['header']
}

export const FeedHeader = (props: FeedHeaderProps) => {
  const { header } = props
  return (
    <header>
      <h2 className='text-2xl'>{header.title}</h2>
      <p>{header.text}</p>
    </header>
  )
}
