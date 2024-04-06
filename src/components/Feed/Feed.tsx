import { SearchBar } from '@/components/SearchBar'
import { api } from '@/trpc/server'
import type { FeedProps } from '.'
import { FeedArtistsList, FeedHeader, FeedNotFound } from './partials'

export const Feed = async ({ header, keyword }: FeedProps) => {
  const { totalPages, tours } = await api.musicEvents.bySearch.query({
    keyword,
  })

  return (
    <>
      <section className='grid gap-6 text-center'>
        <FeedHeader header={header} />

        <SearchBar className='mx-auto inline-flex text-black' />

        {!tours.length && <FeedNotFound />}

        {tours.length > 0 && (
          <FeedArtistsList
            totalPages={totalPages}
            tours={tours}
            keyword={keyword}
          />
        )}
      </section>
    </>
  )
}
