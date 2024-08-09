import './globals.css'

import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Dream Structure',
    default: 'Dream Structure',
  },
  description: 'Your dream structure starts here.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialised`}>{children}</body>
    </html>
  )
}
