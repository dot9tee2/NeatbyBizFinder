import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nearbybizfinder.com'),
  title: 'Foundation & Renovation Contractor in Conway, AR | S&V Renovations',
  description:
    'S&V Renovations serves Conway & Faulkner County, AR — new-construction foundations, French drains, kitchen/bath remodeling, painting and drywall. Licensed & insured. Call (501) 960-1352.',
  alternates: {
    canonical: '/businesses/sv-renovations/conway/',
  },
  keywords: [
    'foundation contractor Conway AR',
    'new construction foundation Conway',
    'French drain Conway Arkansas',
    'home renovation Conway AR',
    'kitchen remodeling Conway AR',
    'bathroom remodeling Conway Arkansas',
    'painting contractor Conway AR',
    'drywall repair Conway',
    'S&V Renovations',
    'foundation repair Faulkner County',
    'contractor near University of Central Arkansas',
  ],
  openGraph: {
    type: 'website',
    url: 'https://nearbybizfinder.com/businesses/sv-renovations/conway/',
    title: 'Foundation & Renovation Contractor in Conway, AR | S&V Renovations',
    description:
      'New-construction foundations, drainage, kitchen/bath remodeling, painting and drywall for Arkansas’s fastest-growing city.',
    siteName: 'NearbyBizFinder',
    locale: 'en_US',
    images: ['https://images.pexels.com/photos/28490242/pexels-photo-28490242.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundation & Renovation Contractor in Conway, AR | S&V Renovations',
    description:
      'Foundation and renovation services built for Conway’s new subdivisions and established neighborhoods alike.',
    images: ['https://images.pexels.com/photos/28490242/pexels-photo-28490242.jpeg'],
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
    'geo.placename': 'Conway, AR',
    'geo.position': '35.0887;-92.4421',
    ICBM: '35.0887, -92.4421',
  },
};

export default function SVRenovationsConwayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
