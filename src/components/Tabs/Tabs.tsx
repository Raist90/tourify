'use client'
import { isArray } from '@/helpers/predicates'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type TabsProps = {
  links: {
    path: string
    label: string
    url: string
  }[]
}

/** @todo Double check accessibility and semantic of this one */
export const Tabs = ({ links }: TabsProps) => {
  /**
   * @todo Const isActive = boolean. Use `usePathName` to check this one so that
   *   the right tab is highlighted
   */
  const path = usePathname()

  return (
    <div>
      {isArray(links) &&
        links.map((links) => {
          const { label, url } = links
          return (
            <Link href={url} key={label}>
              {label}
            </Link>
          )
        })}
    </div>
  )
}
