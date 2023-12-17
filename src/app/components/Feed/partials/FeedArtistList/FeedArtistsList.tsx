import Image from 'next/image'
import { Tour } from '@/types'
import { LayoutOptionType } from '../..'
import { ActionsPanel } from './partials'

type ArtistsListProps = {
  tours: Tour[]
  gridLayout: LayoutOptionType['key']
}

export const FeedArtistsList = (props: ArtistsListProps) => {
  const { tours, gridLayout } = props
  const gridWidth =
    gridLayout === 'grid-cols-1' ? 'lg:w-1/2 lg:mx-auto' : 'w-full'
  return (
    <section className={`grid ${gridLayout} gap-4 text-left ${gridWidth}`}>
      {tours.map((tour) => (
        /** @todo Make this an `ArtistCard` component */
        <article
          className='grid gap-2 self-end hover:border hover:m-[-1px]'
          key={tour.id}
        >
          <div className='grid gap-2' key={tour.id}>
            <h3>{tour.name}</h3>
            {Array.isArray(tour.date) && tour.date.length > 1 ? (
              <div className='grid grid-cols-2 text-xs'>
                <div className='grid'>
                  {tour.date.map((date, index) => (
                    <span key={index + 2}>{date}</span>
                  ))}
                </div>
                <div className='grid text-right'>
                  {Array.isArray(tour.city) &&
                    tour.city.length > 1 &&
                    tour.city.map((city, index) => (
                      <span key={index + 2}>
                        {city}
                        {tour.country[index] && `, ${tour.country[index]}`}
                      </span>
                    ))}
                </div>
              </div>
            ) : (
              <div className='grid grid-cols-2 text-xs'>
                <span>{tour.date}</span>
                <div className='grid grid-cols-1 text-right'>
                  <span>
                    {tour.city}, {tour.country}
                  </span>
                </div>
              </div>
            )}

            {/** @todo Put this on a separate `component` */}
            <div className='relative w-full h-[300px]'>
              <Image
                className='object-cover'
                src={tour.cover}
                alt={tour.name}
                fill={true}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                quality={75}
                placeholder='blur'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
              />
            </div>

            <ActionsPanel />
          </div>

          {tour.featured && (
            <span className='text-xs font-bold text-yellow-500'>
              Sponsorizzato
            </span>
          )}
        </article>
      ))}
    </section>
  )
}
