import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pineflux.com'),
  title: {
    template: '%s | Pineflux',
    default: 'Pineflux | Custom software for small businesses',
  },
  description:
    'Pineflux is a founder-led software studio in Seattle building business applications, integrations, and ecommerce for small businesses and entrepreneurs.',
  openGraph: {
    type: 'website',
    siteName: 'Pineflux',
    url: 'https://pineflux.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Pineflux',
  url: 'https://pineflux.com',
  email: 'hello@pineflux.com',
  description:
    'Founder-led software studio building business applications, systems integrations, ecommerce, and websites for small businesses and entrepreneurs.',
  founder: {
    '@type': 'Person',
    name: 'Travis Hayes',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Seattle',
    addressRegion: 'WA',
    addressCountry: 'US',
  },
  areaServed: 'United States',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
