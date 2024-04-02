import { FeedArtistsList, FeedHeader, FeedNotFound } from './partials'
import { FeedProps } from '.'
import { SearchBar } from '@/components/SearchBar'
import { api } from '@/trpc/server'

export const Feed: React.FC<FeedProps> = async ({ header, keyword }) => {
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
