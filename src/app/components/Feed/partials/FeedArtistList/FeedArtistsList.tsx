'use client'
import type { TicketmasterResponseType, Tour } from '@/types'
import { TourCard } from '@/app/components/TourCard'
import type { ComponentType } from 'react'
import { useState } from 'react'
import { api } from '@/trpc/react'
import { ticketmasterFormatter } from '@/app/api/ticketmaster/ticketmasterFormatter'

type ArtistsListProps = {
  tours: Tour[]
}

/** @todo I need to rewrite this completely by fetching data only clientside */
export const FeedArtistsList: ComponentType<ArtistsListProps> = ({ tours }) => {
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [list, setList] = useState<Tour[]>(tours)

  const moreTours = api.musicEvents.bySearch.useQuery({
    keyword: '',
    page,
  })

  const handleLoadMore = async () => {
    setIsLoading(true)
    setPage(page + 1)
    const {
      _embedded: { events },
    } = moreTours.data as TicketmasterResponseType
    const loadedTours = ticketmasterFormatter(events)
    setList([...list, ...loadedTours])
    setIsLoading(false)
  }

  return (
    <>
      <section
        className={`grid xl:grid-cols-4 gap-4 text-start grid-cols-1 md:grid-cols-3`}
      >
        {list.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </section>

      <div className='text-center'>
        <button
          aria-busy={isLoading}
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          Load More
        </button>
      </div>
    </>
  )
}
