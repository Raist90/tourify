'use client'
import { FeedArtistsList, FeedHeader } from './partials'
import { FeedProps } from '.'
import type { ComponentType } from 'react'
import { SearchBar } from '@/components/SearchBar'

export const Feed: ComponentType<FeedProps> = ({ header, tours }) => {
  return (
    <>
      <section className='text-center grid gap-6'>
        <FeedHeader header={header} />

        <SearchBar className='text-black inline-flex mx-auto' />

        <FeedArtistsList tours={tours} />
      </section>
    </>
  )
}
