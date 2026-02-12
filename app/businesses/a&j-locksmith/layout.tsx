import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    metadataBase: new URL('https://nearbybizfinder.com'),
    title: 'A&J Locksmith | 24/7 Locksmith Services in Wichita, KS',
    description:
        'A&J Locksmith provides 24/7 residential, commercial, and automotive locksmith services in Wichita, KS. Car lockouts, key replacements, lock rekeying, smart locks & roadside assistance. Call (316) 869-3892.',
    alternates: {
        canonical: '/businesses/a&j-locksmith/',
    },
    keywords: [
        'locksmith Wichita KS',
        '24/7 locksmith Wichita',
        'car lockout Wichita',
        'automotive locksmith Wichita',
        'residential locksmith Wichita KS',
        'commercial locksmith Wichita',
        'key replacement Wichita',
        'lock rekeying Wichita',
        'smart lock installation Wichita',
        'roadside assistance Wichita KS',
        'emergency locksmith Wichita',
        'A&J Locksmith',
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
        url: 'https://nearbybizfinder.com/businesses/a&j-locksmith/',
        title: 'A&J Locksmith | 24/7 Locksmith Services in Wichita, KS',
        description:
            'Professional 24/7 locksmith services in Wichita, KS. Residential, commercial, automotive lockouts, key fob replacements, and roadside assistance. Call (316) 869-3892.',
        siteName: 'NearbyBizFinder',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'A&J Locksmith | 24/7 Locksmith Services in Wichita, KS',
        description:
            'Trusted locksmith in Wichita, KS. Car lockouts, key replacements, smart locks, and 24/7 emergency services across a 60-mile service area.',
    },
    other: {
        'geo.region': 'US-KS',
        'geo.placename': 'Wichita',
        'geo.position': '37.6872;-97.3301',
        ICBM: '37.6872, -97.3301',
    },
};

export default function AJLocksmithLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
