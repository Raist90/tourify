import { Artist } from '@/app/types'
import { LayoutOptionType } from '../..'
import { ActionsPanel } from './partials'
import Image from 'next/image'

type ArtistsListProps = {
  artists: Artist[]
  gridLayout: LayoutOptionType['key']
}

export const FeedArtistsList = (props: ArtistsListProps) => {
  const { artists, gridLayout } = props
  const gridWidth =
    gridLayout === 'grid-cols-1' ? 'lg:w-1/2 lg:mx-auto' : 'w-full'
  return (
    <section className={`grid ${gridLayout} gap-4 text-left ${gridWidth}`}>
      {artists.map((artist) => (
        /** @todo Make this an `ArtistCard` component */
        <article
          className='grid gap-2 hover:border hover:m-[-1px]'
          key={artist.id}
        >
          <div className='grid gird-rows-2 gap-2'>
            <h3>{artist.name}</h3>
            <p className='text-xs'>{artist.bio}</p>
          </div>
          {artist.tours.map((tour) => (
            <div className='grid gap-2' key={tour.tourId}>
              <h4>{tour.tourName}</h4>
              <div className='grid grid-cols-2 text-xs'>
                <span>{tour.tourDate}</span>
                <div className='grid grid-cols-1 text-right'>
                  <span>
                    {tour.tourCity}, {tour.tourCountry}
                  </span>
                </div>
              </div>

              {/** @todo Put this on a separate `component` */}
              <div className='relative w-full h-[300px]'>
                <Image
                  className='object-cover'
                  src={artist.cover}
                  alt={artist.name}
                  fill={true}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  quality={75}
                  placeholder='blur'
                  blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
                />
              </div>

              <ActionsPanel />
            </div>
          ))}
          {artist.featured && (
            <span className='text-xs font-bold text-yellow-500'>
              Sponsorizzato
            </span>
          )}
        </article>
      ))}
    </section>
  )
}
