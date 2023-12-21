import { FeedArtistsList, FeedHeader } from './partials'
import { FeedProps } from '.'
import { SearchBar } from '@/components/SearchBar'
import { api } from '@/trpc/server'

export const Feed: React.FC<FeedProps> = async ({ header, keyword }) => {
  const tours = await api.musicEvents.bySearch.query({ keyword })

  if (!tours) return null

  return (
    <>
      <section className='text-center grid gap-6'>
        <FeedHeader header={header} />

        <SearchBar className='text-black inline-flex mx-auto' />

        <FeedArtistsList tours={tours} keyword={keyword} />
      </section>
    </>
  )
}
