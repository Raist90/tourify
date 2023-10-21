import { Artist } from '@/app/types'
import { LayoutOptionType } from '..'

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
        <article className='border grid gap-2' key={artist.id}>
          <div className='border'>
            <h3
              className={
                gridLayout === 'grid-cols-1' ? 'lg:text-left' : 'text-center'
              }
            >
              {artist.name}{' '}
            </h3>
            <p className='text-xs'>{artist.bio}</p>
          </div>
          {artist.tours.map((tour) => (
            <div className='grid gap-2' key={tour.tourId}>
              <h4>{tour.tourName}</h4>
              <div className='border grid grid-cols-2 text-xs'>
                <span>{tour.tourDate}</span>
                <div className='grid grid-cols-1'>
                  <span>
                    {tour.tourCity}, {tour.tourCountry}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {artist.featured && (
            <span className='border text-xs font-bold text-yellow-300'>
              Sponsorizzato
            </span>
          )}
        </article>
      ))}
    </section>
  )
}
