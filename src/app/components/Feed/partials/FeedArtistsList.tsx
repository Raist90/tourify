import { Artist } from '@/app/types'

type ArtistsListProps = {
  artists: Artist[]
}

export const FeedArtistsList = (props: ArtistsListProps) => {
  const { artists } = props
  return (
    <section className='grid grid-cols-3 gap-4 text-left'>
      {artists.map((artist) => (
        <article className='border grid gap-2' key={artist.id}>
          <div className='border'>
            <h3 className='text-center'>{artist.name}</h3>
            <p className='text-xs'>{artist.bio}</p>
          </div>
          {artist.tours.map((tour) => (
            <div className='grid gap-2' key={tour.tourId}>
              <h4>{tour.tourName}</h4>
              <div className='border grid grid-cols-3'>
                <span>{tour.tourDate}</span>
                <span>{tour.tourCity}</span>
                <span>{tour.tourCountry}</span>
              </div>
            </div>
          ))}
        </article>
      ))}
    </section>
  )
}
