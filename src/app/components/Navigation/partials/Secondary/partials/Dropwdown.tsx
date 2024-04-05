'use client'
import { createClient } from '@/helpers/clientHelpers'
import { Menu } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'

type DropdownProps = {
  session: boolean
}

/** @todo Fix these hardcoded values */
const links = [
  { href: '/user/dashboard', label: 'Dashboard' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
]

export const Dropwdown = ({ session }: DropdownProps) => {
  const { push, refresh } = useRouter()

  const supabase = createClient()

  /**
   * @todo We should make `handleLogin` and `handleLogout` available in a
   *   `context` like `useGlobal`
   */
  const handleLogin = () => {
    push('/login')
  }

  /**
   * @todo A litte bit ugly but seems to work right now. It would be nice to
   *   double-check it
   */
  const handleLogout = async () => {
    await supabase.auth.signOut().then(refresh)
  }

  return (
    <div className='inline-flex gap-6'>
      {!session && <button onClick={handleLogin}>Sign in</button>}

      <Menu as='nav' className='relative'>
        {session && (
          <>
            <Menu.Button className='inline-flex gap-1'>
              My Account <ChevronDown />
            </Menu.Button>
            <Menu.Items className='absolute left-0 mt-3 flex w-52 flex-col items-baseline gap-1 border border-neutral-400 bg-black p-4'>
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
