import { getServerSession } from 'next-auth'
import { Dropwdown } from './partials'

export const NavigationSecondaryComponent = async () => {
  const session = await getServerSession()
  return <Dropwdown session={session} />
}
