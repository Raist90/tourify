'use client'
import { Artist, FeedType } from '@/app/types'
import { FeedArtistsList, FeedHeader, FeedLayoutOptions } from './partials'
import { useEffect, useState } from 'react'
import { useWindowSize } from '@/helpers'

type FeedProps = {
  artists: Artist[]
  header: FeedType['header']
}

export const Feed = (props: FeedProps) => {
  const { artists, header } = props
  const [layoutOption, setLayoutOption] = useState('grid-cols-1')

  const [width] = useWindowSize()

  useEffect(() => {
    const isMobile = width < 640 ? true : false
    /** @todo The only problem with this is that `layoutOption` will always return `grid-cols-1` after resizing from mobile to tablet or desktop */
    setLayoutOption(isMobile ? 'grid-cols-1' : layoutOption)
  }, [layoutOption, width])

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
