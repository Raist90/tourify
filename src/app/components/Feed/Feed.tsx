'use client'
import { Artist, FeedType } from '@/app/types'
import { FeedArtistsList, FeedHeader, FeedLayoutOptions } from './partials'
import { useState } from 'react'

type FeedProps = {
  artists: Artist[]
  header: FeedType['header']
}

export const Feed = (props: FeedProps) => {
  const { artists, header } = props
  const [layoutOption, setLayoutOption] = useState('grid-cols-3')

  const handleLayoutChange = (option: string) => () => {
    setLayoutOption(option)
  }

  return (
    <section className='border text-center'>
      <FeedHeader header={header} />

      <FeedLayoutOptions onLayoutChange={handleLayoutChange} />

      <FeedArtistsList artists={artists} layout={layoutOption} />
    </section>
  )
}
