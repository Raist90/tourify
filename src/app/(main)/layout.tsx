import { getNavigation } from '@/helpers/serverHelpers'
import { TRPCReactProvider } from '@/trpc/react'
import { headers } from 'next/headers'
import { Navigation } from '../components'
import { NavigationType } from '../components/Navigation/NavigationProps'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {
    navigation: { primary },
  }: Awaited<NavigationType> = await getNavigation()
  return (
    <main className='grid gap-6'>
      <Navigation>
        <Navigation.Primary navigationItems={primary} />
      </Navigation>
      <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
    </main>
  )
}
