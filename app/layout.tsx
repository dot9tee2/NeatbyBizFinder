import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import ConditionalLayout from '@/components/layout/conditional-layout';
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
        url: '/logo.png',
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
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className={inter.className}>
        <Script id="ld-json-organization" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'NearbyBizFinder',
            url: 'https://nearbybizfinder.com/',
            logo: 'https://nearbybizfinder.com/logo.png',
            areaServed: 'US',
          })}
        </Script>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}