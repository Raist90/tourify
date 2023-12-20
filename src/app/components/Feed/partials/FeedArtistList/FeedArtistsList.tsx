'use client'
import type { Tour } from '@/types'
import { TourCard } from '@/app/components/TourCard'
import { useEffect, useState } from 'react'
import { api } from '@/trpc/react'

type ArtistsListProps = {
  tours: Tour[]
  keyword: string
}

/** @todo I need to make sure we don't fetch the first set of tours clientside because they are already available serverside */
export const FeedArtistsList: React.FC<ArtistsListProps> = ({
  tours,
  keyword,
}) => {
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [list, setList] = useState<Tour[]>(tours)

  const {
    data: loadedTours,
    refetch,
    status,
  } = api.musicEvents.bySearch.useQuery(
    {
      keyword: keyword || '',
      page,
    },
    { enabled: false },
  )

  useEffect(() => {
    refetch()
  }, [page, refetch])

  const handleLoadMore = async () => {
    setIsLoading(true)
    setPage(page + 1)
    if (!loadedTours) return
    setList([...list, ...loadedTours])
    setIsLoading(false)
  }

  return (
    <>
      <section
        className={`grid xl:grid-cols-4 gap-4 text-start grid-cols-1 md:grid-cols-3`}
      >
        {list &&
          list.length &&
          list.map((tour) => <TourCard key={tour.id} tour={tour} />)}
      </section>
      {!list && (
        <div className='w-full mx-auto'>
          <p>No results found</p>
        </div>
      )}
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
