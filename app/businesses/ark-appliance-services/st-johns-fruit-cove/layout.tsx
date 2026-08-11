import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nearbybizfinder.com'),
  title: 'Appliance Repair St. Johns & Fruit Cove, FL | Ark Appliance',
  description:
    'Appliance repair in St. Johns & Fruit Cove (32259). Fridge, washer, dryer, oven & dishwasher repair by local insured techs. Mon–Sat. Call (215) 316-3924.',
  alternates: {
    canonical: '/businesses/ark-appliance-services/st-johns-fruit-cove/',
  },
  keywords: [
    'appliance repair St. Johns FL',
    'appliance repair Fruit Cove FL',
    'appliance repair 32259',
    'refrigerator repair Julington Creek',
    'washer dryer repair RiverTown',
    'oven repair Durbin Crossing',
    'dishwasher repair Switzerland FL',
    'appliance repair Nocatee',
    'Ark Appliance Services',
  ],
  openGraph: {
    type: 'website',
    url: 'https://nearbybizfinder.com/businesses/ark-appliance-services/st-johns-fruit-cove/',
    title: 'Appliance Repair St. Johns & Fruit Cove, FL | Ark Appliance',
    description:
      'Refrigerator, washer, dryer, oven, dishwasher & microwave repair for St. Johns & Fruit Cove homeowners (32259) by local, insured techs.',
    siteName: 'NearbyBizFinder',
    locale: 'en_US',
    images: ['https://images.pexels.com/photos/36777559/pexels-photo-36777559.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appliance Repair St. Johns & Fruit Cove, FL | Ark Appliance',
    description:
      'Local appliance repair for St. Johns & Fruit Cove — refrigerators, washers, dryers, ovens, dishwashers & microwaves.',
    images: ['https://images.pexels.com/photos/36777559/pexels-photo-36777559.jpeg'],
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
    'geo.placename': 'St. Johns / Fruit Cove',
    'geo.position': '30.0932;-81.6668',
    ICBM: '30.0932, -81.6668',
  },
};

export default function ArkStJohnsFruitCoveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
