import { Artist } from '@/app/types'

type ArtistsListProps = {
  artists: Artist[]
  layout: string
}

export const FeedArtistsList = (props: ArtistsListProps) => {
  const { artists, layout } = props
  return (
    <section className={`grid ${layout} gap-4 text-left`}>
      {artists.map((artist) => (
        /** @todo Make this an `ArtistCard` component */
        <article className='border grid gap-2' key={artist.id}>
          <div className='border'>
            <h3 className='text-center'>{artist.name} </h3>
            <p className='text-xs'>{artist.bio}</p>
          </div>
          {artist.tours.map((tour) => (
            <div className='grid gap-2 text-center' key={tour.tourId}>
              <h4>{tour.tourName}</h4>
              <div className='border grid grid-cols-3'>
                <span>{tour.tourDate}</span>
                <span>{tour.tourCity}</span>
                <span>{tour.tourCountry}</span>
              </div>
            </div>
          ))}
          {artist.featured && (
            <span className='border text-xs font-bold'>Sponsorizzato</span>
          )}
        </article>
      ))}
    </section>
  )
}
