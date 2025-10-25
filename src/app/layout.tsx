import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

// Suppress hydration warnings
const suppressHydrationWarning = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== 'undefined') {
            window.__supressHydrationWarning = true;
          }
        `
      }}
    />
  )
}

export const metadata: Metadata = {
  title: 'MrForty - Luxury Tourism & Travel Agency',
  description: 'Experience luxury travel with MrForty. Premium hotels, exclusive tours, and personalized travel experiences in Turkey and beyond.',
  keywords: 'luxury travel, turkey tourism, hotels, tours, travel agency, istanbul, cappadocia, antalya',
  authors: [{ name: 'Seyfettin KIRK' }],
  creator: 'MrForty',
  publisher: 'MrForty',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mrforty.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'tr-TR': '/tr',
      'ar-SA': '/ar',
    },
  },
  openGraph: {
    title: 'MrForty - Luxury Tourism & Travel Agency',
    description: 'Experience luxury travel with MrForty. Premium hotels, exclusive tours, and personalized travel experiences.',
    url: 'https://mrforty.com',
    siteName: 'MrForty',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MrForty - Luxury Tourism',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MrForty - Luxury Tourism & Travel Agency',
    description: 'Experience luxury travel with MrForty. Premium hotels, exclusive tours, and personalized travel experiences.',
    images: ['/twitter-image.jpg'],
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
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {suppressHydrationWarning()}
        <div id="root" className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <div id="modal-root" />
        <div id="toast-root" />
      </body>
    </html>
  )
}