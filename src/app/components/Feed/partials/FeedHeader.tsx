import type { FeedType } from '@/types'
import type { ComponentType } from 'react'

type FeedHeaderProps = {
  header: FeedType['header']
}

export const FeedHeader: ComponentType<FeedHeaderProps> = ({ header }) => {
  return (
    <header>
      <h2 className='text-2xl'>{header.title}</h2>
      <p>{header.text}</p>
    </header>
  )
}
