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
  const header = {
    title: 'Test',
    text: 'Test',
  }
  return <Feed header={header} keyword={keyword} />
}

export default SearchPage
