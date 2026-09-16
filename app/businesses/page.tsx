import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  Compass,
  MapPin,
  Search,
  Sparkles,
} from 'lucide-react';
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
    'Browse local contractors and service providers by business name, service, or city. Explore dedicated profiles and location-specific service pages.',
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
      'Find local contractors and service providers through detailed business and service-area profiles.',
    images: [{ url: '/og-homepage.png', width: 1200, height: 630, alt: 'NearbyBizFinder business directory' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Business Directory | NearbyBizFinder',
    description: 'Browse local contractors and service providers by service and city.',
    images: ['/logo.png'],
  },
};

const stateCount = new Set(
  BUSINESS_LISTINGS.flatMap((business) => [
    business.location,
    ...(business.locations ?? []).map((location) => location.label),
  ]).map((label) => label.split(',').pop()?.trim())
).size;

const popularCategories = [
  'Appliance & HVAC',
  'Cleaning',
  'Concrete & Flooring',
  'Electrical',
  'Landscaping & Turf',
  'Window & Gutter Cleaning',
];

export default function BusinessesPage() {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Local Business Directory',
    url: SITE_URL,
    description:
      'Local contractors and service providers with dedicated business and service-area pages.',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: BUSINESS_LISTINGS.length,
      itemListElement: BUSINESS_LISTINGS.map((business, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: business.name,
        url: `https://nearbybizfinder.com/businesses/${business.route ?? business.slug}/`,
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
    { value: BUSINESS_LISTINGS.length, label: 'Businesses' },
    { value: TOTAL_LANDING_PAGES, label: 'Local pages' },
    { value: BUSINESS_CATEGORIES.length, label: 'Service categories' },
    { value: stateCount, label: 'States represented' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Script id="ld-json-businesses-collection" type="application/ld+json">
        {JSON.stringify(itemListJsonLd)}
      </Script>
      <Script id="ld-json-businesses-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>

      <section className="overflow-hidden bg-[#07162d] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-5 pb-16 pt-8 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-10">
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2 text-slate-600" aria-hidden="true">/</span>
              <span className="text-slate-200" aria-current="page">Businesses</span>
            </nav>

            <div className="mt-14 inline-flex items-center gap-2 border border-blue-400/40 bg-blue-400/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-200">
              <Compass className="h-4 w-4" aria-hidden="true" />
              The complete directory
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Find the local specialist for the job.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Search detailed local business profiles by service or city. Compare what each company does, explore its dedicated service areas, and contact the provider directly.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#directory" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#ffd159] px-7 py-3.5 font-extrabold text-[#07162d]">
                Search the directory
                <ArrowDown className="h-5 w-5" aria-hidden="true" />
              </a>
              <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center gap-2 border border-slate-500 px-7 py-3.5 font-extrabold text-white hover:border-white">
                List your business
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>

            <ul className="mt-9 grid gap-3 text-sm font-bold text-slate-300 sm:grid-cols-3" aria-label="Directory benefits">
              {['Search by service', 'Explore local pages', 'Contact businesses directly'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#ffd159]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 bg-[#0d2242] px-5 py-12 lg:border-l lg:border-t-0 lg:px-10 lg:py-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">Directory at a glance</p>
            <dl className="mt-6 grid grid-cols-2 border-l border-t border-white/15">
              {stats.map((stat) => (
                <div key={stat.label} className="border-b border-r border-white/15 p-6 sm:p-7">
                  <dd className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{stat.value}</dd>
                  <dt className="mt-2 text-sm font-bold text-slate-400">{stat.label}</dt>
                </div>
              ))}
            </dl>

            <div className="mt-8 border border-white/15 bg-[#10294e] p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center bg-blue-500 text-white">
                  <Search className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-extrabold text-white">Popular service categories</p>
                  <p className="text-sm text-slate-400">A quick view of what is listed</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {popularCategories.map((category) => (
                  <a key={category} href="#directory" className="border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-slate-200 hover:border-blue-300 hover:text-white">
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-cyan-200 bg-[#e8faff] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:px-8">
          <div className="relative aspect-[16/10] overflow-hidden border-[8px] border-white bg-cyan-100 shadow-[0_20px_45px_rgba(15,85,110,0.14)]">
            <Image
              src="/heavenly-window-cleaning/belmont-water-fed-pole.webp"
              alt="Heavenly Window Cleaning technician cleaning upper-story glass with a water-fed pole"
              fill
              sizes="(max-width: 1024px) 90vw, 38vw"
              className="object-cover object-center"
            />
            <span className="absolute left-4 top-4 bg-[#07162d] px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
              Recently added
            </span>
          </div>

          <div className="lg:pl-5">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-800">Featured local business</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#07162d] sm:text-5xl">Heavenly Window Cleaning</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              A family-owned Peninsula business with two focused local guides: window cleaning for Belmont’s hillside homes and gutter cleaning for wooded Emerald Hills properties.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <Link href="/businesses/heavenly-window-cleaning/window-cleaning-belmont-ca/" className="flex items-center justify-between gap-4 border border-cyan-300 bg-white p-4 font-extrabold text-[#07162d] hover:border-cyan-700">
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-cyan-800">Window cleaning</span>
                  <span className="mt-1 block">Belmont, CA</span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-cyan-800" aria-hidden="true" />
              </Link>
              <Link href="/businesses/heavenly-window-cleaning/gutter-cleaning-emerald-hills-ca/" className="flex items-center justify-between gap-4 border border-cyan-300 bg-white p-4 font-extrabold text-[#07162d] hover:border-cyan-700">
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-cyan-800">Gutter cleaning</span>
                  <span className="mt-1 block">Emerald Hills, CA</span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-cyan-800" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BusinessDirectory businesses={BUSINESS_LISTINGS} categories={BUSINESS_CATEGORIES} />

      <section className="bg-[#ffd159] py-16 text-[#07162d] sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-9 px-5 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em]">
              <Building2 className="h-5 w-5" aria-hidden="true" />
              For local business owners
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Give customers a clearer way to find you.</h2>
            <p className="mt-4 text-lg leading-8 text-[#293849]">
              NearbyBizFinder creates dedicated business and service-area pages with useful local detail, direct contact paths and search-friendly structure.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#07162d] px-7 py-3.5 font-extrabold text-white">
              Add your business
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link href="/about/" className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-[#07162d] px-7 py-3.5 font-extrabold text-[#07162d]">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              How it works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
