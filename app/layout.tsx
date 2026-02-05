import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { StructuredData } from '@/components/structured-data'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  preload: true,
  adjustFontFallback: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://thedecoder.in'),
  title: {
    default: 'The Decoder — Fix Indian English Communication | Professional Protocols for Global Success',
    template: '%s | The Decoder',
  },
  description: '10 research-backed communication protocols preventing ₹20,000-50,000 monthly losses for Indian professionals working with US/global clients. Copy-paste templates, decision trees, and AI-optimized frameworks included.',
  keywords: [
    'Indian English communication',
    'professional communication protocols',
    'freelancer templates India',
    'remote work communication',
    'US client communication',
    'business English India',
    'communication training',
    'client retention strategies',
    'proposal writing India',
    'email templates professionals'
  ],
  authors: [{ name: 'The Decoder Team', url: 'https://thedecoder.in' }],
  creator: 'The Decoder',
  publisher: 'The Decoder',
  applicationName: 'The Decoder',
  generator: 'Next.js 16',
  
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': 'https://thedecoder.in',
      'en-US': 'https://thedecoder.in',
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://thedecoder.in',
    siteName: 'The Decoder',
    title: 'The Decoder — Stop Losing Clients to Communication Gaps',
    description: '10 protocols preventing ₹20K-50K monthly losses. AI-optimized communication frameworks for Indian freelancers.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Decoder - Professional Communication Protocols for Indian Professionals',
        type: 'image/jpeg',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'The Decoder — Fix Indian English Communication',
    description: '10 protocols preventing ₹20K-50K monthly losses. Templates for Indian freelancers.',
    images: ['/twitter-image.jpg'],
    creator: '@thedecoder_in',
    site: '@thedecoder_in',
  },
  
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
  
  verification: {
    google: 'your-google-verification-code',
    other: {
      me: ['hello@thedecoder.in'],
    },
  },
  
  category: 'Business & Professional Services',
  classification: 'Communication Training, Professional Development, SaaS',
  
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en-IN" 
      className={`${inter.variable} ${playfair.variable}`}
      dir="ltr"
    >
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload Critical Assets */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://rzp.io" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ea580c" />
        
        {/* MS Application */}
        <meta name="msapplication-TileColor" content="#ea580c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* AI/LLM Optimization Tags */}
        <meta name="ai-content-type" content="educational product" />
        <meta name="ai-target-audience" content="Indian professionals, freelancers, remote workers" />
        <meta name="ai-key-entities" content="communication protocols, Indian English, US clients, freelancer templates" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  )
}