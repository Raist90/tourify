import { Feed } from '@/app/components'
import { api } from '@/trpc/server'

type SearchPageProps = {
  searchParams: {
    query: string
  }
}

/** @todo Don't forget to properly type this */
const SearchPage: React.FC<SearchPageProps> = async ({ searchParams }) => {
  const keyword = searchParams.query
  const tours = await api.musicEvents.bySearch.query({ keyword })
  const header = {
    title: 'Test',
    text: 'Test',
  }
  return <Feed tours={tours} header={header} keyword={keyword} />
}

export default SearchPage
