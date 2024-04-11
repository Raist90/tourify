import { Feed } from '@/components'

type PageParamsType = {
  searchParams: {
    query: string
  }
}

const SearchPage = async ({ searchParams }: PageParamsType) => {
  const { query: keyword = '' } = searchParams

  const header = {
    title: keyword || 'all',
    text: `All available results for the query "${keyword || 'all'}"`,
  }
  return <Feed header={header} keyword={keyword} />
}

export default SearchPage
