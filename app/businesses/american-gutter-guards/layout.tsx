import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nearbybizfinder.com'),
  title: 'American Gutter Services - Gutter Guard Installation and Cleaning in Chesapeake VA',
  description:
    'Looking for a reliable gutter guard installation, gutter cleaning or full gutter installtion in Chesapeake, VA?. American Gutter Guards Services delivers top-quality work, competitive pricing and local expertise to protect your home from water damage.',
  alternates: {
    canonical: '/businesses/american-gutter-guards/',
  },
  keywords: [
    'gutter guard installation chesapeake VA',
    'gutter cleaning chesapeake VA',
    'gutter installation chesapeake VA',
    'gutter installation chesapeake virginia',
    'seamless gutter installation chesapeake',
    'gutter maintenance cheaspeake VA',
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
    title: 'American Gutter Services - Chesapeake’s Gutter Experts',
    description:
      'From gutter cleaning and guard installation to complete gutter systems, American Gutter Services is Chesapeake, Virginia’s trusted local provider focused on quality and customer satisfaction.',
    siteName: 'NearbyBizFinder',
    locale: 'en_US',
    images: [
      {
        url: 'https://nearbybizfinder.com/american-gutter-guards/hero-image.png',
        alt: 'American Gutter Guards team providing professional gutter installation services',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'American Gutter Services | Chesapeake VA Gutter Guard & Cleaning',
    description:
      'Protect your Chesapeake home with professional gutter guard installation, cleaning and full system installation by American Gutter Services. Get a free estimate today!',
    images: ['https://nearbybizfinder.com/american-gutter-guards/hero-image.png'],
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


