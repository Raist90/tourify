'use client'
import { FeedArtistsList, FeedHeader, FeedLayoutOptions } from './partials'
import { useEffect, useState } from 'react'
import { useWindowSize } from '@/helpers/clientHelpers'
import { FeedProps, LayoutOptionType } from '.'

export const Feed = (props: FeedProps) => {
  const { artists, header } = props
  const [layoutOption, setLayoutOption] =
    useState<LayoutOptionType['key']>('grid-cols-1')

  const [width] = useWindowSize()

  useEffect(() => {
    /** @todo Create a `breakpoints` object */
    const isMobile = width < 1024 ? true : false
    /** @todo The only problem with this is that `layoutOption` will always return `grid-cols-1` after resizing from mobile to tablet or desktop */
    setLayoutOption(isMobile ? 'grid-cols-1' : layoutOption)
  }, [layoutOption, width])

  const handleLayoutChange = (option: LayoutOptionType['key']) => () => {
    setLayoutOption(option)
  }

  return (
    <section className='text-center'>
      <FeedHeader header={header} />

      <FeedLayoutOptions
        onLayoutChange={handleLayoutChange}
        focus={layoutOption}
      />

      <FeedArtistsList artists={artists} gridLayout={layoutOption} />
    </section>
  )
}
