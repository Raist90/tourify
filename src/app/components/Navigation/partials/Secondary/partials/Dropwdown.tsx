'use client'
import { useAuthHandlers } from '@/helpers/clientHelpers'
import { Menu } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import type { Session } from 'next-auth'

/** @todo Fix these hardcoded values */
const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
]

export const Dropwdown = ({ session }: { session: Session | null }) => {
  const { handleGithubLogin, handleLogout } = useAuthHandlers()

  return (
    <div className='inline-flex gap-6'>
      {!session && <button onClick={handleGithubLogin}>Sign in</button>}

      <Menu as='nav' className='relative'>
        {session && (
          <>
            <Menu.Button className='inline-flex gap-1'>
              My Account <ChevronDown />
            </Menu.Button>
            <Menu.Items className='border border-neutral-400 bg-black absolute mt-3 w-52 left-0 flex flex-col items-baseline gap-1 p-4'>
              {links.map((link) => (
                <Menu.Item key={link.href}>
                  {({ active }) => (
                    <a href={link.href} className={`${active && 'underline'}`}>
                      {link.label}
                    </a>
                  )}
                </Menu.Item>
              ))}
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={`${active && 'underline'}`}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  )
}
