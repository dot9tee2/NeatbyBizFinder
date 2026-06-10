import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nearbybizfinder.com'),
  title: "Daniel's Garage Doors | San Bernardino & Riverside | Expert Repair",
  description:
    'Professional residential garage door repair and installation serving San Bernardino, Riverside, and a 30-mile radius. Fast, reliable service. Call (909) 913-7483.',
  alternates: {
    canonical: '/businesses/daniels-garage-doors/',
  },
  keywords: [
    'garage door repair San Bernardino',
    'garage door installation San Bernardino',
    'garage door spring repair San Bernardino',
    'garage door repair Riverside',
    'garage door opener installation',
    'residential garage doors',
    "Daniel's Garage Doors San Bernardino",
    'garage door service near me',
  ],
  openGraph: {
    type: 'website',
    url: 'https://nearbybizfinder.com/businesses/daniels-garage-doors/',
    title: "Daniel's Garage Doors | Expert Repair in San Bernardino",
    description:
      'Expert residential garage door repair in San Bernardino and Riverside. Serving a 30-mile radius. Call Daniel at (909) 913-7483 for prompt service.',
    siteName: 'NearbyBizFinder',
    locale: 'en_US',
    images: [
      {
        url: '/daniels-garage-doors/hero-garage.png',
        width: 1200,
        height: 630,
        alt: "Daniel's Garage Doors - Premium Residential Service",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Daniel's Garage Doors | San Bernardino",
    description:
      'Residential garage door repair and installation in San Bernardino and Riverside. 30-mile service radius. Fast, honest, reliable.',
    images: ['/daniels-garage-doors/hero-garage.png'],
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
    'geo.region': 'US-CA',
    'geo.placename': 'San Bernardino',
    'geo.position': '34.1083;-117.2898',
    ICBM: '34.1083, -117.2898',
  },
};

export default function DanielsGarageDoorsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'HomeAndConstructionBusiness',
              name: "Daniel's Garage Doors",
              url: 'https://nearbybizfinder.com/businesses/daniels-garage-doors/',
              telephone: '+19099137483',
              email: 'mezapablo77@gmail.com',
              image: 'https://nearbybizfinder.com/daniels-garage-doors/hero-garage.png',
              description:
                "Daniel's Garage Doors provides expert residential garage door repair, spring replacement, and new installations in San Bernardino, Riverside, and a 30-mile surrounding radius. Professional, honest, and reliable service.",
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'San Bernardino',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 34.1083,
                longitude: -117.2898,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '07:00',
                closes: '19:00',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'San Bernardino',
                },
                {
                  '@type': 'City',
                  name: 'Riverside',
                },
              ],
              sameAs: ['https://www.yelp.com/biz/daniel-s-garage-doors-san-bernardino'],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How much does it cost to repair a garage door in San Bernardino?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Repair costs vary depending on the issue, ranging from a simple sensor alignment to a full torsion spring replacement. We provide transparent, upfront quotes before any work begins.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you offer same-day garage door repair?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, whenever possible. A broken garage door is a security risk, so we prioritize emergency and same-day repair requests across Riverside and San Bernardino.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I know if my garage door spring is broken?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You might hear a loud bang from the garage, the door will feel extremely heavy to lift manually, or you may visually see a gap in the coils of the spring above the door.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Should I repair or replace my old garage door?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'If the door is constantly breaking down, has severe cosmetic damage, or lacks modern safety features, replacement is often more cost-effective. However, many issues can be fixed with affordable repairs.',
                  },
                },
              ],
            },
          ]),
        }}
      />
      {children}
    </>
  );
}
