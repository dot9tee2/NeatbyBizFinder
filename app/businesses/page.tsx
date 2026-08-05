import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, Building2, MapPin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BusinessDirectory from '@/components/businesses/business-directory';
import {
  BUSINESS_CATEGORIES,
  BUSINESS_LISTINGS,
  TOTAL_LANDING_PAGES,
} from '@/lib/businesses-manifest';

const SITE_URL = 'https://nearbybizfinder.com/businesses/';

export const metadata: Metadata = {
  title: 'Local Business Directory | NearbyBizFinder',
  description:
    'Browse every business featured on NearbyBizFinder — vetted local contractors and service providers across the U.S., from appliance repair and electrical to concrete, turf, and cleaning.',
  keywords:
    'local business directory, home service contractors, find local businesses, service providers near me, NearbyBizFinder businesses',
  robots: 'index, follow',
  alternates: { canonical: '/businesses/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'NearbyBizFinder',
    title: 'Local Business Directory | NearbyBizFinder',
    description:
      'Every business featured on NearbyBizFinder — browse trusted local contractors and service providers by category and city.',
    images: [{ url: '/og-homepage.png', width: 1200, height: 630, alt: 'NearbyBizFinder business directory' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Business Directory | NearbyBizFinder',
    description: 'Browse trusted local contractors and service providers by category and city.',
    images: ['/logo.png'],
  },
};

const stateCount = new Set(
  BUSINESS_LISTINGS.flatMap((business) => [
    business.location,
    ...(business.locations ?? []).map((location) => location.label),
  ]).map((label) => label.split(',').pop()?.trim())
).size;

export default function BusinessesPage() {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Local Business Directory',
    url: SITE_URL,
    description:
      'Every business featured on NearbyBizFinder — trusted local contractors and service providers across the U.S.',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: BUSINESS_LISTINGS.length,
      itemListElement: BUSINESS_LISTINGS.map((business, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: business.name,
        url: `https://nearbybizfinder.com/businesses/${business.slug}/`,
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbybizfinder.com/' },
      { '@type': 'ListItem', position: 2, name: 'Businesses', item: SITE_URL },
    ],
  };

  const stats = [
    { value: BUSINESS_LISTINGS.length, label: 'Businesses listed' },
    { value: TOTAL_LANDING_PAGES, label: 'Service-area pages' },
    { value: BUSINESS_CATEGORIES.length, label: 'Categories' },
    { value: stateCount, label: 'States covered' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Script id="ld-json-businesses-collection" type="application/ld+json">
        {JSON.stringify(itemListJsonLd)}
      </Script>
      <Script id="ld-json-businesses-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-900 py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black opacity-80" />

        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-gray-300">Businesses</span>
          </nav>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span>{BUSINESS_LISTINGS.length} businesses and counting</span>
          </div>

          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
            Every business,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              one directory
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Browse the local contractors and service providers featured on NearbyBizFinder. Every listing links
            straight to a full page with services, service areas, and how to get in touch.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-gray-50 py-8 dark:border-gray-800 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</span>
                  <span className="mt-1 block text-sm text-gray-500 dark:text-gray-400">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <BusinessDirectory businesses={BUSINESS_LISTINGS} categories={BUSINESS_CATEGORIES} />

      {/* CTA */}
      <section className="border-t bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/15">
            <Building2 className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          </div>
          <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">Want your business here?</h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-600 dark:text-gray-400">
            We build dedicated landing pages for local businesses — built for search, built to convert. Tell us
            about yours and we&apos;ll take it from there.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact/">
              <Button size="lg" className="gap-2">
                Add your business
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/about/">
              <Button size="lg" variant="outline" className="gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                How it works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
