import { Tour } from '@/types'
import { TourCard } from '@/app/components/TourCard'
import type { ComponentType } from 'react'

type ArtistsListProps = {
  tours: Tour[]
}

export const FeedArtistsList: ComponentType<ArtistsListProps> = ({ tours }) => {
  return (
    <section
      className={`grid xl:grid-cols-4 gap-4 text-start grid-cols-1 md:grid-cols-3`}
    >
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </section>
  )
}
