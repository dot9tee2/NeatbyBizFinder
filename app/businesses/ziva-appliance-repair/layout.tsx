import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    metadataBase: new URL('https://nearbybizfinder.com'),
    title: 'Ziva Appliance Repair | McKinney TX | Expert Residential Appliance Service',
    description:
        'Professional appliance repair in McKinney, TX and a 35-mile radius. Specializing in garbage disposal, dishwashers, refrigerators, ovens, washers & dryers. Call (972) 904-5655.',
    alternates: {
        canonical: '/businesses/ziva-appliance-repair/',
    },
    keywords: [
        'appliance repair McKinney TX',
        'garbage disposal repair McKinney',
        'dishwasher repair McKinney TX',
        'refrigerator repair McKinney',
        'oven repair McKinney TX',
        'washer dryer repair McKinney',
        'appliance repair 75071',
        'residential appliance repair DFW',
        'appliance repair Frisco TX',
        'appliance repair Allen TX',
        'kitchen appliance repair McKinney',
        'appliance technician McKinney TX',
    ],
    openGraph: {
        type: 'website',
        url: 'https://nearbybizfinder.com/businesses/ziva-appliance-repair/',
        title: 'Ziva Appliance Repair | McKinney TX | Expert Residential Appliance Service',
        description:
            'Expert residential appliance repair in McKinney, TX. Serving a 35-mile radius. Garbage disposals, dishwashers, fridges, ovens, washers & dryers. Call (972) 904-5655.',
        siteName: 'NearbyBizFinder',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ziva Appliance Repair | McKinney TX',
        description:
            'Residential appliance repair in McKinney, TX — garbage disposals, dishwashers, refrigerators, ovens, washers & dryers. 35-mile service radius.',
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
        'geo.region': 'US-TX',
        'geo.placename': 'McKinney',
        'geo.position': '33.1972;-96.6397',
        ICBM: '33.1972, -96.6397',
    },
}

export default function ZivaApplianceRepairLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}