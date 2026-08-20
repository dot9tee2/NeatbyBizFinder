import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nearbybizfinder.com'),
  title: 'Foundation Repair & Renovation in North Little Rock, AR | S&V Renovations',
  description:
    'S&V Renovations, LLC — foundation repair, drainage, kitchen/bath remodeling, painting & drywall in North Little Rock, AR. Licensed, insured, free estimates. Call (501) 960-1352.',
  alternates: {
    canonical: '/businesses/sv-renovations/',
  },
  keywords: [
    'foundation repair North Little Rock',
    'house leveling North Little Rock AR',
    'french drain installation North Little Rock',
    'home renovation North Little Rock AR',
    'kitchen remodeling North Little Rock',
    'bathroom remodeling North Little Rock AR',
    'painting contractor North Little Rock',
    'drywall repair North Little Rock AR',
    'S&V Renovations',
    'foundation repair Pulaski County',
    'foundation repair 72118',
  ],
  openGraph: {
    type: 'website',
    url: 'https://nearbybizfinder.com/businesses/sv-renovations/',
    title: 'Foundation Repair & Renovation in North Little Rock, AR | S&V Renovations',
    description:
      'Foundation repair, house leveling, drainage, kitchen/bath remodeling, painting and drywall for North Little Rock homeowners — licensed, insured, free estimates.',
    siteName: 'NearbyBizFinder',
    locale: 'en_US',
    images: ['https://images.pexels.com/photos/29735767/pexels-photo-29735767.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundation Repair & Renovation in North Little Rock, AR | S&V Renovations',
    description:
      'Foundation repair, drainage, kitchen/bath remodeling, painting & drywall for North Little Rock homeowners.',
    images: ['https://images.pexels.com/photos/29735767/pexels-photo-29735767.jpeg'],
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
    'geo.placename': 'North Little Rock, AR',
    'geo.position': '34.7695;-92.2671',
    ICBM: '34.7695, -92.2671',
  },
};

export default function SVRenovationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
