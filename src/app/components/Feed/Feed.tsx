'use client'
import { FeedArtistsList, FeedHeader } from './partials'
import { FeedProps } from '.'
import type { ComponentType } from 'react'

export const Feed: ComponentType<FeedProps> = ({ header, tours }) => {
  return (
    <section className='text-center grid gap-6'>
      <FeedHeader header={header} />

      <FeedArtistsList tours={tours} />
    </section>
  )
}
