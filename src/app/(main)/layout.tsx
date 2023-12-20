import { getNavigation } from '@/helpers/serverHelpers'
import { Navigation } from '@/components'
import { NavigationType } from '@/components/Navigation/NavigationProps'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {
    navigation: { primary },
  }: Awaited<NavigationType> = await getNavigation()
  return (
    <main className='grid'>
      <Navigation>
        <Navigation.Primary navigationItems={primary} />
        <Navigation.Secondary />
      </Navigation>
      {children}
    </main>
  )
}
