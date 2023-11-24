import Link from 'next/link'
import type { NavigationType } from './NavigationProps'
import { NavigationSecondaryComponent } from './partials'

export const NavigationComponent = ({
  children,
}: {
  children: React.ReactNode
}) => {
  /** @todo Change this style to grid-cols-2 when you're ready to implement `secondary` navigation */
  return <div className='grid grid-cols-2'>{children}</div>
}

export const NavigationPrimaryComponent = ({
  navigationItems,
}: {
  navigationItems: NavigationType['navigation']['primary']
}) => {
  return (
    <nav>
      <ul className='inline-flex gap-6'>
        {navigationItems &&
          navigationItems.map((item) => (
            <li key={item.id}>
              <Link tabIndex={0} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export const Navigation = Object.assign(NavigationComponent, {
  /** @description This is the `Primary` navigation of the Webapp
   *
   * @todo Data should come from `Sanity`
   *
   * @example <Navigation.Primary />
   */
  Primary: NavigationPrimaryComponent,
  /** @description This is the `Secondary` navigation of the Webapp
   *
   * @example <Navigation.Secondary />
   */
  Secondary: NavigationSecondaryComponent,
})
