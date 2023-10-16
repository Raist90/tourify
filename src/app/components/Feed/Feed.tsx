import { Artist, FeedType } from '@/app/types'
import { FeedArtistsList, FeedHeader } from './partials'

type FeedProps = {
  artists: Artist[]
  header: FeedType['header']
}

export const Feed = (props: FeedProps) => {
  const { artists, header } = props

  return (
    <section className='border text-center'>
      <FeedHeader header={header} />

      <FeedArtistsList artists={artists} />
    </section>
  )
}
