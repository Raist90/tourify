'use client'
import type { Tour } from '@/types'
import { TourCard } from '@/app/components/TourCard'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/trpc/react'
import { Spinner } from '@/app/components/Spinner'

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

  const handleScroll = useCallback(async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return
    }
    setIsLoading(true)
    setPage(page + 1)
    if (!loadedTours) return
    setList([...list, ...loadedTours])
    setIsLoading(false)
  }, [isLoading, list, loadedTours, page])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      <section
        className={`grid xl:grid-cols-4 gap-4 text-start grid-cols-1 md:grid-cols-3`}
      >
        {list &&
          list.length &&
          list.map((tour) => <TourCard key={tour.id} tour={tour} />)}
      </section>

      {isLoading && status !== 'error' && <Spinner />}

      {status === 'error' && (
        <p className='text-center'>
          No more events to show for the current query.
        </p>
      )}
    </>
  )
}
