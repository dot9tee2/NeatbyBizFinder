import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {
  ArrowRight,
  Camera,
  Check,
  CircleAlert,
  Droplets,
  ExternalLink,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Shield,
} from 'lucide-react';

const canonicalUrl =
  'https://nearbybizfinder.com/businesses/heavenly-window-cleaning/gutter-cleaning-emerald-hills-ca/';
const originalSite = 'https://heavenlywindowcleaning.com/';
const phoneHref = 'tel:+16506363621';

export const metadata: Metadata = {
  title: 'Gutter Cleaning Emerald Hills CA | Heavenly',
  description:
    'Gutter cleaning in Emerald Hills, CA with hand-cleared debris, downspout flow checks, visual inspection and tidy cleanup for wooded hillside homes. 650-636-3621.',
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Gutter Cleaning in Emerald Hills, CA | Heavenly Window Cleaning',
    description:
      'A locally focused gutter service for tree-covered Emerald Hills homes, with hand clearing, downspout checks and a practical roofline report.',
    type: 'website',
    url: canonicalUrl,
    siteName: 'NearbyBizFinder',
  },
};

const faqs = [
  {
    q: 'When should gutters be cleaned in Emerald Hills?',
    a: 'A late-autumn clean before sustained winter rain is the most useful baseline. Homes directly under mature redwood, oak or other heavy canopy may need a second inspection or cleaning because debris can continue to accumulate after the first pass.',
  },
  {
    q: 'Does the service include downspouts?',
    a: 'Yes. Heavenly’s stated gutter process includes flushing downspouts and confirming that water reaches the outlet. Clearing the visible trough without checking the vertical run can leave a hidden blockage in place.',
  },
  {
    q: 'What happens to the debris removed from the gutters?',
    a: 'Debris is removed by hand, bagged and taken away rather than blown over the roof or dropped into planting. The ground below the work area is tidied before the visit is complete.',
  },
  {
    q: 'Will I be told if the crew sees a gutter problem?',
    a: 'The service includes a visual check for conditions such as standing water, sagging runs, separated seams or loose fasteners. Heavenly can report what is visible and share photos, but gutter installation and structural roof repairs are separate trades.',
  },
  {
    q: 'Can every roof be accessed?',
    a: 'No responsible company can promise that before seeing the property. Roof pitch, surface condition, height, slope below the eaves, power lines and ladder placement all affect the method. Heavenly assesses the roofline and works only from positions the crew considers safe.',
  },
  {
    q: 'How can I request an Emerald Hills gutter cleaning quote?',
    a: 'Call 650-636-3621 or contact Heavenly Window Cleaning through its official website. Include your address, number of stories, known trouble spots and whether the home sits directly under heavy tree cover.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: 'Gutter Cleaning in Emerald Hills, CA | Heavenly Window Cleaning',
      description:
        'Hand-cleared gutters, downspout flow checks and visual roofline reporting for tree-covered homes in Emerald Hills, California.',
      isPartOf: {
        '@type': 'WebSite',
        name: 'NearbyBizFinder',
        url: 'https://nearbybizfinder.com/',
      },
      about: { '@id': `${canonicalUrl}#service` },
    },
    {
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: 'Gutter Cleaning in Emerald Hills, California',
      serviceType: 'Residential gutter cleaning and downspout flow checking',
      url: canonicalUrl,
      areaServed: {
        '@type': 'Place',
        name: 'Emerald Hills, California',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'San Mateo County, California',
        },
      },
      provider: {
        '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
        name: 'Heavenly Window Cleaning',
        url: originalSite,
        telephone: '+1-650-636-3621',
        email: 'info@heavenlywindowcleaning.com',
        areaServed: 'San Francisco Peninsula, California',
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: originalSite,
        description: 'Free estimates are available directly from the provider.',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbybizfinder.com/' },
        { '@type': 'ListItem', position: 2, name: 'Businesses', item: 'https://nearbybizfinder.com/businesses/' },
        { '@type': 'ListItem', position: 3, name: 'Gutter Cleaning Emerald Hills CA', item: canonicalUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
};

const inspectionItems = [
  ['Debris load', 'Leaves, needles, seed pods and compacted organic material are removed by hand.'],
  ['Downspout flow', 'Water is run through the vertical line and watched at the outlet instead of assuming it is open.'],
  ['Standing water', 'A wet low spot can point to a sagging run or poor pitch that cleaning alone will not correct.'],
  ['Visible condition', 'Loose fasteners, separated seams and obvious damage are noted so you can decide what to do next.'],
];

export default function GutterCleaningEmeraldHillsPage() {
  return (
    <div className="min-h-screen bg-[#efe9d8] text-[#1e2c24]">
      <a
        href="#main-content"
        className="sr-only z-50 bg-[#fffaf0] px-4 py-3 text-sm font-bold focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>

      <Script
        id="heavenly-emerald-hills-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="bg-[#13281d] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 lg:px-8">
          <a href={originalSite} className="flex items-center gap-3" aria-label="Visit Heavenly Window Cleaning">
            <span className="grid h-11 w-11 place-items-center border border-[#d6aa55] bg-[#203b2c]">
              <Leaf className="h-5 w-5 text-[#e4bd6b]" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-serif text-xl font-bold tracking-tight">Heavenly Window Cleaning</span>
              <span className="block text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#b9c7bc]">Peninsula exterior care</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a href={phoneHref} className="hidden items-center gap-2 text-sm font-bold text-[#f5e7c8] sm:inline-flex">
              <Phone className="h-4 w-4" aria-hidden="true" />
              650-636-3621
            </a>
            <a href={`${originalSite}contact-us`} className="inline-flex items-center gap-2 border border-[#e4bd6b] bg-[#e4bd6b] px-5 py-3 text-sm font-black text-[#13281d]">
              Request service
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="bg-[#193225] text-white">
          <div className="mx-auto max-w-7xl px-5 pb-8 pt-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-[#bdcbbf]">
              <Link href="/" className="font-semibold">NearbyBizFinder</Link>
              <span className="mx-2 text-[#718676]" aria-hidden="true">/</span>
              <Link href="/businesses/" className="font-semibold">Businesses</Link>
              <span className="mx-2 text-[#718676]" aria-hidden="true">/</span>
              <span aria-current="page" className="text-white">Emerald Hills gutter cleaning</span>
            </nav>
          </div>

          <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center px-5 pb-16 pt-8 lg:px-8 lg:pb-20 lg:pr-14 lg:pt-14">
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-[#e4bd6b]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Emerald Hills, CA
              </div>
              <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.02] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
                Clear the gutter before the rain finds the blockage.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d8e0da] sm:text-xl">
                Gutter cleaning for wooded Emerald Hills properties: debris removed by hand, downspouts checked for flow, visible trouble reported and the ground left tidy.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={`${originalSite}contact-us`} className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#e4bd6b] px-7 py-3.5 font-black text-[#13281d]">
                  Get a free estimate
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={phoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#8fa294] px-7 py-3.5 font-black text-white">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call 650-636-3621
                </a>
              </div>
              <p className="mt-6 text-sm leading-6 text-[#aebdb1]">Family owned · Free estimates · Serving the San Francisco Peninsula</p>
            </div>

            <div className="relative min-h-[28rem] overflow-hidden border-t border-[#496352] lg:min-h-[44rem] lg:border-l lg:border-t-0">
              <Image
                src="/heavenly-window-cleaning/emerald-hills-gutter-cleaning.webp"
                alt="Leaf debris packed into a roof gutter above a hillside neighborhood"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(10,27,18,0.92))] px-6 pb-7 pt-28 sm:px-10">
                <p className="max-w-2xl font-serif text-2xl font-bold leading-8 text-white">Tree cover is part of Emerald Hills’ character. It is also a year-round source of needles, leaves and organic material at the roofline.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#cabea1] bg-[#efe9d8] py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#7d5b1d]">Field note 01</p>
              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-[#193225] sm:text-5xl">Why Emerald Hills gutters fill differently.</h2>
            </div>
            <div className="grid gap-6 text-lg leading-8 text-[#405348] md:grid-cols-2">
              <p>
                Emerald Hills is an unincorporated hillside community between Redwood City and Woodside, known for winding roads, detached homes and dense tree cover. Rooflines sit beneath mature canopy, and many homes have sloped side yards or multiple levels that change where a ladder can be placed safely.
              </p>
              <p>
                Redwood needles and smaller organic debris can settle into a dense mat rather than a loose pile. Oak leaves and other broad debris can bridge across the gutter, then trap finer material underneath. Once that mass gets wet, it holds water against the metal and sends overflow over the edge instead of through the downspout.
              </p>
              <p>
                The practical issue is not simply whether the gutter looks full from the driveway. A clear-looking section can still feed into a blocked outlet, and one low spot can retain standing water after the rest has drained. That is why the service should check the full path from trough to outlet.
              </p>
              <p>
                Cleaning cannot correct a separated seam, an incorrectly pitched run or a damaged downspout. It can expose those conditions, show whether water is moving and give you a clearer basis for deciding when a gutter or roofing specialist is needed.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf0] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="bg-[#203b2c] p-8 text-white sm:p-10">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e4bd6b]">The service scope</p>
                <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">Clear. Flush. Observe. Report.</h2>
                <p className="mt-6 text-lg leading-8 text-[#ced9d1]">A useful gutter visit does more than move leaves from one place to another. Each step confirms something about how the drainage path is working.</p>
                <a href={`${originalSite}contact-us`} className="mt-8 inline-flex items-center gap-2 border-b border-[#e4bd6b] pb-1 font-black text-[#f5d78f]">
                  Ask Heavenly about your roofline
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <div className="grid border-l border-t border-[#d8cfb8] sm:grid-cols-2">
                {inspectionItems.map(([title, body], index) => {
                  const Icon = [Leaf, Droplets, CircleAlert, Camera][index];
                  return (
                    <article key={title} className="border-b border-r border-[#d8cfb8] p-7 sm:p-8">
                      <div className="flex items-center justify-between gap-5">
                        <Icon className="h-7 w-7 text-[#8b641d]" aria-hidden="true" />
                        <span className="font-mono text-sm font-bold text-[#9c927b]">0{index + 1}</span>
                      </div>
                      <h3 className="mt-8 font-serif text-2xl font-bold text-[#193225]">{title}</h3>
                      <p className="mt-3 leading-7 text-[#53645a]">{body}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e1dbc9] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#7d5b1d]">Field note 02</p>
              <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#193225] sm:text-5xl">What happens during the visit.</h2>
            </div>
            <ol className="mt-12 grid gap-px overflow-hidden border border-[#b8ad91] bg-[#b8ad91] md:grid-cols-4">
              {[
                ['Assess', 'Height, roof pitch, surface condition, ground slope and tree load determine the safe approach.'],
                ['Clear', 'Organic material is lifted out by hand and bagged instead of being scattered across the roof or beds.'],
                ['Test', 'Water is run through each accessible downspout until flow is confirmed at the lower outlet.'],
                ['Report', 'Visible standing water, sagging, open seams or loose fasteners are documented for the homeowner.'],
              ].map(([title, body], index) => (
                <li key={title} className="bg-[#f8f2e4] p-7 sm:p-8">
                  <span className="font-mono text-sm font-black text-[#8b641d]">STEP 0{index + 1}</span>
                  <h3 className="mt-5 font-serif text-2xl font-bold text-[#193225]">{title}</h3>
                  <p className="mt-3 leading-7 text-[#53645a]">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#fffaf0] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#7d5b1d]">A practical schedule</p>
              <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#193225] sm:text-5xl">Time the clean around debris and rain—not a generic calendar.</h2>
              <div className="mt-9 space-y-8">
                <div className="grid gap-4 border-t border-[#cabea1] pt-6 sm:grid-cols-[9rem_1fr]">
                  <h3 className="font-serif text-xl font-bold text-[#193225]">Late autumn</h3>
                  <p className="leading-7 text-[#53645a]">The most valuable baseline visit: remove accumulated dry-season debris before the wetter winter pattern puts the system under load.</p>
                </div>
                <div className="grid gap-4 border-t border-[#cabea1] pt-6 sm:grid-cols-[9rem_1fr]">
                  <h3 className="font-serif text-xl font-bold text-[#193225]">Mid-season</h3>
                  <p className="leading-7 text-[#53645a]">Worth considering where a roof sits directly beneath redwoods or other trees that continue dropping after the first clean, or after a storm exposes overflow.</p>
                </div>
                <div className="grid gap-4 border-t border-[#cabea1] pt-6 sm:grid-cols-[9rem_1fr]">
                  <h3 className="font-serif text-xl font-bold text-[#193225]">Before work</h3>
                  <p className="leading-7 text-[#53645a]">If roof, fascia or exterior painting is planned, clear drainage first so the contractor can see the existing condition instead of working around packed material.</p>
                </div>
              </div>
            </div>
            <aside className="border-2 border-[#193225] bg-[#f1e6cb] p-8 sm:p-10">
              <CircleAlert className="h-9 w-9 text-[#8b641d]" aria-hidden="true" />
              <h3 className="mt-6 font-serif text-3xl font-bold text-[#193225]">Clues the system needs attention</h3>
              <ul className="mt-7 space-y-4 leading-7 text-[#405348]">
                {[
                  'Water spilling over one section while nearby sections drain normally',
                  'Plants, moss or visible compacted debris growing above the gutter edge',
                  'A downspout that stays dry during rain or discharges slowly after it stops',
                  'Staining on fascia, siding or paving directly below an overflow point',
                  'A gutter run that holds water on a dry day or pulls away from the fascia',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-[#6c5a2b]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="bg-[#193225] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e4bd6b]">Know the boundary</p>
                <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl">Cleaning reveals problems. It does not turn them into a different trade.</h2>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="border border-[#526a59] bg-[#203b2c] p-7">
                  <Shield className="h-7 w-7 text-[#e4bd6b]" aria-hidden="true" />
                  <h3 className="mt-5 font-serif text-2xl font-bold">Within the cleaning scope</h3>
                  <p className="mt-3 leading-7 text-[#cbd6cd]">Hand clearing, accessible downspout flushing, a visual condition check, photos of visible concerns and cleanup below the work area.</p>
                </div>
                <div className="border border-[#526a59] bg-[#203b2c] p-7">
                  <CircleAlert className="h-7 w-7 text-[#e4bd6b]" aria-hidden="true" />
                  <h3 className="mt-5 font-serif text-2xl font-bold">Usually another specialist</h3>
                  <p className="mt-3 leading-7 text-[#cbd6cd]">Gutter replacement, correcting structural pitch, roof repair, fascia replacement, extensive moss treatment or work from an unsafe roof surface.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efe9d8] py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="border-b-2 border-[#193225] pb-7">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#7d5b1d]">Questions from homeowners</p>
              <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#193225] sm:text-5xl">Emerald Hills gutter cleaning FAQ</h2>
            </div>
            <div>
              {faqs.map((faq, index) => (
                <details key={faq.q} className="border-b border-[#bdb196] py-6">
                  <summary className="grid cursor-pointer list-none grid-cols-[2.5rem_1fr_auto] items-start gap-4 font-serif text-xl font-bold text-[#193225] marker:content-none">
                    <span className="font-mono text-sm font-black text-[#8b641d]">0{index + 1}</span>
                    <span>{faq.q}</span>
                    <span className="font-sans text-2xl font-normal text-[#8b641d]" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-3xl pl-[4.1rem] pt-4 leading-7 text-[#53645a]">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#d8aa52] py-16 text-[#13281d] sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-9 px-5 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.24em]">Before the next heavy rain</p>
              <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl">Get the drainage path checked from gutter to outlet.</h2>
              <p className="mt-4 text-lg leading-8 text-[#304737]">Contact Heavenly Window Cleaning directly for an Emerald Hills estimate and scheduling.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={`${originalSite}contact-us`} className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#13281d] px-7 py-3.5 font-black text-white">
                Request a free estimate
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={phoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-[#13281d] px-7 py-3.5 font-black text-[#13281d]">
                <Phone className="h-5 w-5" aria-hidden="true" />
                650-636-3621
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#101e16] py-10 text-[#b8c5bb]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
          <div>
            <p className="font-serif text-xl font-bold text-white">Heavenly Window Cleaning</p>
            <p className="mt-2 max-w-md text-sm leading-6">Family-owned window, gutter and solar panel cleaning across the San Francisco Peninsula.</p>
          </div>
          <div className="space-y-3 text-sm">
            <a href={phoneHref} className="flex items-center gap-2 text-white"><Phone className="h-4 w-4" aria-hidden="true" />650-636-3621</a>
            <a href="mailto:info@heavenlywindowcleaning.com" className="flex items-center gap-2 text-white"><Mail className="h-4 w-4" aria-hidden="true" />info@heavenlywindowcleaning.com</a>
          </div>
          <div className="space-y-3 text-sm lg:text-right">
            <a href={originalSite} className="block font-bold text-[#f0d596]">Visit the official website ↗</a>
            <Link href="/businesses/heavenly-window-cleaning/window-cleaning-belmont-ca/" className="block font-bold text-white">Window cleaning in Belmont</Link>
            <Link href="/businesses/" className="block">Browse local businesses</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
