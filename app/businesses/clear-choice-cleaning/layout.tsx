import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nearbybizfinder.com'),
  title: 'Clear Choice Cleaning | Professional Cleaning Services in Las Vegas, NV',
  description:
    'Clear Choice Cleaning provides professional residential and commercial cleaning in Las Vegas, NV. Eco-friendly products, experienced cleaners, flexible scheduling, free estimates.',
  alternates: {
    canonical: '/businesses/clear-choice-cleaning/',
  },
  keywords: [
    'cleaning services Las Vegas',
    'house cleaning Las Vegas NV',
    'office cleaning Las Vegas',
    'eco-friendly cleaning Las Vegas',
    'residential cleaning Las Vegas',
    'commercial cleaning Las Vegas',
    'move out cleaning Las Vegas',
    'deep cleaning Las Vegas'
  ],
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
  openGraph: {
    type: 'website',
    url: 'https://nearbybizfinder.com/businesses/clear-choice-cleaning/',
    title: 'Clear Choice Cleaning | Professional Cleaning Services in Las Vegas, NV',
    description:
      'Professional residential and commercial cleaning in Las Vegas. Eco-friendly, reliable, and flexible scheduling. Get a free estimate today.',
    siteName: 'NearbyBizFinder',
    locale: 'en_US',
    images: [
      {
        url: 'https://nearbybizfinder.com/clear-choice-cleaning/hero-image.png',
        alt: 'Clear Choice Cleaning team providing professional cleaning services',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clear Choice Cleaning | Professional Cleaning Services in Las Vegas, NV',
    description:
      'Residential and commercial cleaning in Las Vegas using eco-friendly products. Experienced team and flexible scheduling.',
    images: ['https://nearbybizfinder.com/clear-choice-cleaning/hero-image.png'],
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Las Vegas',
    'geo.position': '36.1699;-115.1398',
    ICBM: '36.1699, -115.1398',
  },
};

export default function ClearChoiceCleaningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


