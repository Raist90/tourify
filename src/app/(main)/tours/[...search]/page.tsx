import { getMusicEvents } from '@/app/api/ticketmaster'
import { Feed } from '@/app/components'

const SearchPage = async ({ searchParams }) => {
  const keyword = searchParams.query
  const tours = await getMusicEvents(keyword)
  const header = {
    title: 'Test',
    text: 'Test',
  }
  return <Feed tours={tours} header={header} />
}

export default SearchPage
