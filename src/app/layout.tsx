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

const SITE_URL = 'https://lnik-cv.netlify.app'
const SITE_NAME = 'Mariia Melnikova'
const TITLE = 'Mariia Melnikova – Frontend Developer CV'
const DESCRIPTION =
  'Frontend Developer portfolio and CV of Mariia Melnikova: work experience, skills and React, Next.js and Vue projects. Get in touch or view the full CV.'
const OG_DESCRIPTION =
  'Frontend Developer CV of Mariia Melnikova: React, Next.js, Vue with TypeScript projects, skills and experience.'
const OG_IMAGE = `${SITE_URL}/preview.png`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: SITE_URL
  },
  openGraph: {
    title: TITLE,
    description: OG_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: TITLE
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE]
  }
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
