import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nearbybizfinder.com'),
  title: 'Foundation Repair & Drainage in Hot Springs, AR | S&V Renovations',
  description:
    'S&V Renovations serves Hot Springs & Garland County, AR — foundation repair, French drains and drainage for hillside lots, plus remodeling and painting. Licensed & insured. Call (501) 960-1352.',
  alternates: {
    canonical: '/businesses/sv-renovations/hot-springs/',
  },
  keywords: [
    'foundation repair Hot Springs AR',
    'drainage installation Hot Springs',
    'French drain Hot Springs Arkansas',
    'retaining wall Hot Springs AR',
    'home renovation Hot Springs AR',
    'kitchen remodeling Hot Springs',
    'bathroom remodeling Hot Springs AR',
    'painting contractor Hot Springs AR',
    'S&V Renovations',
    'foundation repair Garland County',
    'Lake Hamilton drainage',
  ],
  openGraph: {
    type: 'website',
    url: 'https://nearbybizfinder.com/businesses/sv-renovations/hot-springs/',
    title: 'Foundation Repair & Drainage in Hot Springs, AR | S&V Renovations',
    description:
      'Foundation repair, French drains and drainage built for Hot Springs’ hillside lots, plus kitchen/bath remodeling, painting and drywall.',
    siteName: 'NearbyBizFinder',
    locale: 'en_US',
    images: ['https://images.pexels.com/photos/14077116/pexels-photo-14077116.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundation Repair & Drainage in Hot Springs, AR | S&V Renovations',
    description:
      'Foundation repair, drainage and renovation built for Hot Springs’ hillside terrain.',
    images: ['https://images.pexels.com/photos/14077116/pexels-photo-14077116.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  other: {
    'geo.region': 'US-AR',
    'geo.placename': 'Hot Springs, AR',
    'geo.position': '34.5037;-93.0552',
    ICBM: '34.5037, -93.0552',
  },
};

export default function SVRenovationsHotSpringsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
