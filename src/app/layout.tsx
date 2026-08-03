import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Geist_Mono, Bricolage_Grotesque, Inter } from 'next/font/google'
import './globals.css'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage-grotesque',
  subsets: ['latin']
})

const inter = Inter({
  weight: '500',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Mariia Melnikova',
  description: 'Frontend Developer CV'
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${geistMono.variable} ${bricolageGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  )
}
