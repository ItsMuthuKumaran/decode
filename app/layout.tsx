import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
}

export const metadata: Metadata = {
  title: {
    default: 'The Decoder | Professional Communication Protocols for Indian Freelancers',
    template: '%s | The Decoder'
  },
  description: 'Stop losing clients to "Kindly Revert". 10 research-backed communication protocols preventing ₹20,000-50,000 monthly losses for Indian professionals working with global clients.',
  keywords: ['communication protocols', 'freelancer tips', 'client communication', 'Indian professionals', 'global clients', 'business English', 'email etiquette'],
  authors: [{ name: 'The Decoder Team' }],
  creator: 'The Decoder',
  publisher: 'The Decoder',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://decoder.pro',
    siteName: 'The Decoder',
    title: 'The Decoder | Professional Communication Protocols',
    description: 'Stop losing clients to "Kindly Revert". Research-backed protocols for Indian professionals.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Decoder - Communication Protocols'
      }
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'The Decoder | Professional Communication Protocols',
    description: 'Stop losing clients to "Kindly Revert". Research-backed protocols for Indian professionals.',
    images: ['/og-image.jpg'],
    creator: '@thedecoder',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification
  verification: {
    google: 'your-google-verification-code',
  },

  // Alternates
  alternates: {
    canonical: 'https://decoder.pro',
  },

  // Category
  category: 'business',
}

// JSON-LD Schema for GEO (Generative Engine Optimization)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'The Decoder Communication Protocols',
  image: 'https://decoder.pro/og-image.jpg',
  description: '10 research-backed communication protocols preventing monthly losses for Indian professionals working with global clients.',
  sku: 'DECODER-001',
  brand: {
    '@type': 'Brand',
    name: 'The Decoder'
  },
  offers: {
    '@type': 'Offer',
    url: 'https://rzp.io/l/decoder',
    priceCurrency: 'INR',
    price: '199',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'The Decoder'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '500'
  },
  faq: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this only for developers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, any Indian professional with global clients: designers, writers, consultants, support teams.'
        }
      },
      {
        '@type': 'Question',
        name: 'How quickly will I see results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most see improved response rates within the first week.'
        }
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="color-scheme" content="light dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900 selection:bg-orange-100 selection:text-orange-900">
        {children}
      </body>
    </html>
  )
}