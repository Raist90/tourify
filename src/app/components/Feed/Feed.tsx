import { FeedArtistsList, FeedHeader } from './partials'
import { FeedProps } from '.'
import { SearchBar } from '@/components/SearchBar'

export const Feed: React.FC<FeedProps> = ({ header, tours, keyword }) => {
  return (
    <>
      <section className='text-center grid gap-6'>
        <FeedHeader header={header} />

        <SearchBar className='text-black inline-flex mx-auto' />

        <FeedArtistsList tours={tours} keyword={keyword || ''} />
      </section>
    </>
  )
}
