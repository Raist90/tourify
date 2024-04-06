'use client'
import { Spinner } from '@/components/Spinner'
import { TourCard } from '@/components/TourCard'
import { api } from '@/trpc/react'
import type { Tour } from '@/types'
import { useCallback, useEffect, useState } from 'react'

type ArtistsListProps = {
  totalPages: number
  tours: Tour[]
  keyword: string
}

export const FeedArtistsList = ({
  totalPages,
  tours,
  keyword,
}: ArtistsListProps) => {
  const [page, setPage] = useState(1)
  const [list, setList] = useState<Tour[]>(tours)
  const isLastPage = page === totalPages

  const { data, refetch, isFetching } = api.musicEvents.bySearch.useQuery(
    {
      keyword: keyword || '',
      page,
    },
    // we disable it initially because first results will be fetched serverside, then we store the next page result clientside and we render it only when the user scrolls to the bottom of the page, then we load next page in advance. In this way we get rid of loading times entirely
    { enabled: false },
  )
  const { tours: loadedTours } = data || {}

  useEffect(() => {
    if (!isLastPage) refetch()
  }, [isLastPage, page, refetch, totalPages])

  const handleScroll = useCallback(async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching ||
      isLastPage
    ) {
      return
    }
    setPage(page + 1)
    if (!loadedTours) return
    setList([...list, ...loadedTours])
  }, [isFetching, isLastPage, list, loadedTours, page])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      <section
        className={`grid grid-cols-1 gap-4 text-start md:grid-cols-3 xl:grid-cols-4`}
      >
        {list &&
          list.length &&
          list.map((tour) => <TourCard key={tour.id} tour={tour} />)}
      </section>

      {isFetching && <Spinner />}

      {isLastPage && (
        <p className='text-center'>
          No more events to show for the current query.
        </p>
      )}
    </>
  )
}
