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
      <section className='text-center grid gap-6'>
        <FeedHeader header={header} />

        <SearchBar className='text-black inline-flex mx-auto' />

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
