import { isArray } from '@/helpers/predicates'
import Link from 'next/link'
import type { NavigationType } from './NavigationProps'
import { NavigationSecondaryComponent } from './partials'

export const NavigationComponent = ({
  children,
}: {
  children: React.ReactNode
}) => {
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
        {isArray(navigationItems) &&
          navigationItems.map((item) => (
            <li key={item.id}>
              <Link tabIndex={0} href={`/${item.href}`}>
                {item.label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export const Navigation = Object.assign(NavigationComponent, {
  Primary: NavigationPrimaryComponent,
  Secondary: NavigationSecondaryComponent,
})
