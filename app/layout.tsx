import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nearbybizfinder.com/'),
  title: 'NearbyBizFinder - Discover Local Businesses Near You',
  description: 'Find and connect with the best local businesses in your area. Search restaurants, shops, services, and more with ratings, reviews, and detailed information.',
  keywords: 'local business, restaurant finder, business directory, nearby shops, local services, business search',
  authors: [{ name: 'NearbyBizFinder' }],
  creator: 'NearbyBizFinder',
  publisher: 'NearbyBizFinder',
  robots: 'index, follow',
  verification: {
    google: 'JwYWRfckSsqwaL8YA-cZNf9JIcQE_K6TUALW-4PXsmY',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': 'https://nearbybizfinder.com/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nearbybizfinder.com/',
    siteName: 'NearbyBizFinder',
    title: 'NearbyBizFinder - Discover Local Businesses Near You',
    description: 'Find and connect with the best local businesses in your area. Search restaurants, shops, services, and more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NearbyBizFinder - Local Business Discovery Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nearbybizfinder',
    creator: '@nearbybizfinder',
    title: 'NearbyBizFinder - Discover Local Businesses Near You',
    description: 'Find and connect with the best local businesses in your area.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#2563eb',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Script id="ld-json-organization" type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'NearbyBizFinder',
              url: 'https://nearbybizfinder.com/',
              logo: 'https://nearbybizfinder.com/og-image.jpg',
              areaServed: 'US',
            })}
          </Script>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}