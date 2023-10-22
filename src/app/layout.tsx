import './globals.css'
import type { Metadata } from 'next'
import { DM_Mono } from 'next/font/google'

const dmMono = DM_Mono({ weight: '400', style: 'normal', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${dmMono.className} text-white bg-neutral-950`}>
        {children}
      </body>
    </html>
  )
}
