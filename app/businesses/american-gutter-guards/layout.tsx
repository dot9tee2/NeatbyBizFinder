import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nearbybizfinder.com'),
  title: 'Gutter Guard Installation & Service – American Gutter Guards | No More Clogs',
  description:
    'Avoid overflowing gutters and costly damage. Expert gutter guard installation across Chesapeake, VA. Free inspection, fast turnaround, and satisfaction guarantee. Call (757) 559-8051.',
  alternates: {
    canonical: '/businesses/american-gutter-guards/',
  },
  keywords: [
    'gutter guard service',
    'gutter protection',
    'leaf guard installation',
    'gutter guard installation chesapeake va',
    'prevent clogged gutters',
    'gutter cleaning alternative',
    'gutter cleaning chesapeake va',
    'gutter installation chesapeake va'
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
    url: 'https://nearbybizfinder.com/businesses/american-gutter-guards/',
    title: 'American Gutter Guards – Chesapeake’s Gutter Guard & Cleaning Experts',
    description:
      'Stop cleaning gutters. Get professional gutter guard installation, gutter cleaning, and seamless gutter installs in Chesapeake, VA. Free inspection and guarantee.',
    siteName: 'NearbyBizFinder',
    locale: 'en_US',
    images: [
      {
        url: 'https://nearbybizfinder.com/american-gutter-guards/hero.png',
        alt: 'Metal mesh gutter guard installed on a roof in Chesapeake, VA',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'American Gutter Guards | Chesapeake VA Gutter Guard & Cleaning',
    description:
      'Avoid overflowing gutters. Expert gutter guard installation, cleaning and seamless gutters in Chesapeake, VA. Free inspection. Call (757) 559-8051.',
    images: ['https://nearbybizfinder.com/american-gutter-guards/hero.png'],
  },
  other: {
    'geo.region': 'US-VA',
    'geo.placename': 'Chesapeake',
    'geo.position': '36.7682;-76.2875',
    ICBM: '36.7682, -76.2875',
  },
};

export default function AmericanGutterGuardsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


