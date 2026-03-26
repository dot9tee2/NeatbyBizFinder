import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    metadataBase: new URL('https://nearbybizfinder.com'),
    title: 'A&J Locksmith Wichita KS | 24/7 Emergency Locksmith (316) 869-3892',
    description:
        'A&J Locksmith — Wichita\'s fastest 24/7 locksmith. Car lockouts, key replacement, lock rekeying, smart locks & roadside assistance. Avg 14-min response. Serving Wichita, Derby, Andover & Maize. Call (316) 869-3892.',
    alternates: {
        canonical: '/businesses/a&j-locksmith/',
    },
    keywords: [
        'locksmith Wichita KS',
        'locksmith near me Wichita',
        '24/7 locksmith Wichita',
        'emergency locksmith Wichita KS',
        'car lockout Wichita',
        'car lockout Derby KS',
        'car lockout Andover KS',
        'automotive locksmith Wichita',
        'residential locksmith Wichita KS',
        'commercial locksmith Wichita',
        'key replacement Wichita KS',
        'lock rekeying Wichita',
        'smart lock installation Wichita',
        'roadside assistance Wichita KS',
        'locksmith Wichita 24 hour',
        'locksmith Derby KS',
        'locksmith Andover KS',
        'locksmith Maize KS',
        'locksmith Goddard KS',
        'locksmith Haysville KS',
        'A&J Locksmith',
        'A&J Mobile Locksmith Wichita',
        'how much does a locksmith cost Wichita',
        'locked out of car Wichita',
        'locked out of house Wichita',
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
        title: 'A&J Locksmith Wichita KS | 24/7 Emergency (316) 869-3892',
        description:
            'Wichita\'s fastest 24/7 locksmith — car lockouts, key fob replacement, rekeying, smart locks & roadside help. Avg 14-min response. Serving Wichita, Derby, Andover, Maize & surrounding cities. Call now.',
        siteName: 'NearbyBizFinder',
        locale: 'en_US',
        images: [
            {
                url: '/aj-locksmith/logo.png',
                width: 800,
                height: 600,
                alt: 'A&J Locksmith Wichita KS',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'A&J Locksmith Wichita KS | 24/7 Emergency (316) 869-3892',
        description:
            'Fastest locksmith in Wichita, KS. 14-min avg response. Car lockouts, key replacement, rekeying & roadside help — 24/7 across Wichita, Derby, Andover & Maize.',
    },
    other: {
        'geo.region': 'US-KS',
        'geo.placename': 'Wichita, Kansas',
        'geo.position': '37.6872;-97.3301',
        ICBM: '37.6872, -97.3301',
    },
};

export default function AJLocksmithLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* LocalBusiness structured data — additional site-wide schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Locksmith",
                        "name": "A&J Mobile Locksmith",
                        "alternateName": "A&J Locksmith Wichita",
                        "url": "https://nearbybizfinder.com/businesses/a&j-locksmith/",
                        "telephone": "+13168693892",
                        "email": "info@ajlocksmith.com",
                        "logo": "https://nearbybizfinder.com/aj-locksmith/logo.png",
                        "image": "https://nearbybizfinder.com/aj-locksmith/logo.png",
                        "description": "A&J Locksmith provides 24/7 emergency locksmith services in Wichita, KS. Specializing in car lockouts, key replacement, lock rekeying, smart lock installation, and roadside assistance. Serving Wichita, Derby, Andover, Maize, Goddard, and Haysville.",
                        "foundingDate": "2018",
                        "priceRange": "$$",
                        "currenciesAccepted": "USD",
                        "paymentAccepted": "Cash, Credit Card",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Wichita",
                            "addressRegion": "KS",
                            "postalCode": "67202",
                            "addressCountry": "US"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 37.6872,
                            "longitude": -97.3301
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": 5.0,
                            "reviewCount": 500,
                            "bestRating": "5",
                            "worstRating": "1"
                        },
                        "sameAs": [
                            "https://www.yelp.com/biz/a-j-mobile-locksmith-wichita"
                        ]
                    })
                }}
            />
            {children}
        </>
    );
}
