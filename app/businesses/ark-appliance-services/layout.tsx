import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nearbybizfinder.com'),
  title: 'Appliance Repair in Mandarin, FL | Ark Appliance Services',
  description:
    'Local appliance repair in Mandarin, FL. Refrigerators, washers, dryers, ovens & dishwashers fixed by insured techs. Mon–Sat. Call (215) 316-3924.',
  alternates: {
    canonical: '/businesses/ark-appliance-services/',
  },
  keywords: [
    'appliance repair Mandarin FL',
    'refrigerator repair Mandarin',
    'washer dryer repair Mandarin FL',
    'oven repair Mandarin Jacksonville',
    'dishwasher repair 32257',
    'appliance repair Jacksonville FL',
    'appliance repair 32223',
    'appliance repair 32258',
    'Ark Appliance Services',
    'microwave repair Mandarin FL',
  ],
  openGraph: {
    type: 'website',
    url: 'https://nearbybizfinder.com/businesses/ark-appliance-services/',
    title: 'Appliance Repair in Mandarin, FL | Ark Appliance Services',
    description:
      'Refrigerators, washers, dryers, ovens, ranges, dishwashers & microwaves repaired by local, insured techs across Mandarin, FL (32257, 32223, 32258).',
    siteName: 'NearbyBizFinder',
    locale: 'en_US',
    images: ['https://images.pexels.com/photos/34734504/pexels-photo-34734504.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appliance Repair in Mandarin, FL | Ark Appliance Services',
    description:
      'Local appliance repair for Mandarin homeowners — refrigerators, washers, dryers, ovens, dishwashers & microwaves.',
    images: ['https://images.pexels.com/photos/34734504/pexels-photo-34734504.jpeg'],
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
    'geo.region': 'US-FL',
    'geo.placename': 'Mandarin, Jacksonville',
    'geo.position': '30.1588;-81.6238',
    ICBM: '30.1588, -81.6238',
  },
};

export default function ArkApplianceServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
