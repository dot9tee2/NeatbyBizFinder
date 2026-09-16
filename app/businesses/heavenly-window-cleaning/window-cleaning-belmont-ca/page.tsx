import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {
  ArrowUpRight,
  Check,
  Droplets,
  Eye,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Sun,
} from 'lucide-react';

const canonicalUrl =
  'https://nearbybizfinder.com/businesses/heavenly-window-cleaning/window-cleaning-belmont-ca/';
const originalSite = 'https://heavenlywindowcleaning.com/';
const phoneHref = 'tel:+16506363621';

export const metadata: Metadata = {
  title: 'Window Cleaning Belmont CA | Heavenly Window Cleaning',
  description:
    'Window cleaning in Belmont, CA for hillside homes, Bay-view glass and upper stories. Interior, exterior, screens and tracks. Call 650-636-3621.',
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Window Cleaning in Belmont, CA | Heavenly Window Cleaning',
    description:
      'A Belmont-focused guide to cleaner glass, safer upper-story access and a complete interior and exterior window service.',
    type: 'website',
    url: canonicalUrl,
    siteName: 'NearbyBizFinder',
  },
};

const faqs = [
  {
    q: 'What is included in a full window cleaning visit?',
    a: 'The full service can include interior and exterior glass, screens, tracks, window sills and frames. Confirm the exact scope when you request your quote so every pane and add-on is accounted for before the visit.',
  },
  {
    q: 'Can upper-story windows on a Belmont hillside home be cleaned?',
    a: 'Yes. Heavenly Window Cleaning uses up-to-date professional equipment, including water-fed pole methods where the property and access make them appropriate. The crew assesses slope, planting, rooflines and safe working positions before deciding how to reach the glass.',
  },
  {
    q: 'How often should Belmont windows be professionally cleaned?',
    a: 'Twice a year is a practical starting point for many homes. Properties with heavy tree cover, sprinkler overspray, exposed Bay views or more airborne dust may benefit from a third visit, while sheltered glass may need less frequent service.',
  },
  {
    q: 'Do you offer exterior-only window cleaning?',
    a: 'Yes. Heavenly offers an exterior-only option as well as a more complete interior-and-exterior package. Screen cleaning is listed with the exterior package on the company website; frames, sills and tracks can be discussed when quoting.',
  },
  {
    q: 'Do I need to be home during the appointment?',
    a: 'Someone should be available for interior work. Exterior-only service may be possible without you at home if the crew has safe access, gates are unlocked and pets are secured. Confirm those details directly when scheduling.',
  },
  {
    q: 'How do I get a quote for window cleaning in Belmont?',
    a: 'Call 650-636-3621 or use the quote request on Heavenly Window Cleaning’s official website. Share the number of stories, approximate pane count, whether you want interior and exterior service, and any access concerns around the home.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: 'Window Cleaning in Belmont, CA | Heavenly Window Cleaning',
      description:
        'Professional interior and exterior window cleaning for Belmont hillside homes, view glass and multi-story properties.',
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
      name: 'Window Cleaning in Belmont, California',
      serviceType: 'Residential and commercial window cleaning',
      url: canonicalUrl,
      areaServed: {
        '@type': 'City',
        name: 'Belmont',
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
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://nearbybizfinder.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Businesses',
          item: 'https://nearbybizfinder.com/businesses/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Window Cleaning Belmont CA',
          item: canonicalUrl,
        },
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

const included = [
  {
    title: 'Glass, inside and out',
    body: 'Choose exterior-only service or a complete clean that covers both sides of the pane. Edges are detailed so lines do not remain where a squeegee pass ends.',
    icon: Sparkles,
  },
  {
    title: 'Screens and tracks',
    body: 'Screens can hold dust in front of freshly cleaned glass. Tracks collect grit that affects both appearance and how smoothly sliders operate.',
    icon: ShieldCheck,
  },
  {
    title: 'Frames and sills',
    body: 'The finish reads as one complete window, not a clean pane surrounded by overlooked dirt. Confirm the selected package and add-ons in your quote.',
    icon: Eye,
  },
  {
    title: 'Upper-story access',
    body: 'Where the site calls for it, purified-water pole work can reach high exterior glass from the ground and reduce the need to place ladders against awkward slopes.',
    icon: Droplets,
  },
];

const process = [
  ['01', 'Describe the property', 'Share the story count, approximate pane count, service level and any steep or restricted sides of the home.'],
  ['02', 'Confirm the scope', 'The quote should distinguish exterior-only work from interior glass, screens, tracks, frames and sills.'],
  ['03', 'Protect and clean', 'The crew selects hand tools or water-fed equipment to suit the glass and access, while taking care around floors, furnishings and planting.'],
  ['04', 'Review the finish', 'Check the glass in natural light and raise anything that needs another pass before the crew packs up.'],
];

export default function WindowCleaningBelmontPage() {
  return (
    <div className="min-h-screen bg-[#f4f9ff] text-[#0b2440]">
      <a
        href="#main-content"
        className="sr-only z-50 bg-white px-4 py-3 text-sm font-semibold focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>

      <Script
        id="heavenly-belmont-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="border-b border-[#cce3f7] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href={originalSite} className="flex items-center gap-3" aria-label="Visit Heavenly Window Cleaning">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0e63b5] text-white">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="hidden text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#37719f] sm:block">
                Family owned
              </span>
              <span className="block text-sm font-extrabold tracking-tight text-[#0b2440] sm:text-lg">
                Heavenly Window Cleaning
              </span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href={phoneHref}
              className="hidden rounded-full border border-[#9dc9eb] px-5 py-2.5 text-sm font-bold text-[#0e63b5] sm:inline-flex"
            >
              (650) 636-3621
            </a>
            <a
              href={`${originalSite}contact-us`}
              className="ml-auto inline-flex items-center gap-2 rounded-full bg-[#ffcb45] px-4 py-2.5 text-sm font-extrabold text-[#182536] sm:px-5"
            >
              Free quote
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="overflow-hidden bg-[linear-gradient(135deg,#f4f9ff_0%,#e4f4ff_60%,#c8eaff_100%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-7 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:px-8 lg:pb-20 lg:pt-10">
            <div>
              <nav aria-label="Breadcrumb" className="mb-10 text-sm font-semibold text-[#4b6d8d]">
                <Link href="/">NearbyBizFinder</Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <Link href="/businesses/">Businesses</Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <span aria-current="page" className="text-[#0b2440]">Belmont window cleaning</span>
              </nav>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#9dc9eb] bg-white/80 px-4 py-2 text-sm font-bold text-[#0e63b5]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Belmont, California · San Mateo County
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] text-[#071d33] sm:text-6xl lg:text-7xl">
                Window cleaning made for Belmont’s hills.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#315675] sm:text-xl">
                Clear Bay views, careful interior detailing and practical access for upper-story glass. Heavenly Window Cleaning serves Belmont homes with exterior-only and full interior-and-exterior options.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`${originalSite}contact-us`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0e63b5] px-7 py-3.5 font-extrabold text-white"
                >
                  Request a free quote
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#0e63b5] bg-white px-7 py-3.5 font-extrabold text-[#0e63b5]"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call 650-636-3621
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-[#234b6d]" aria-label="Business highlights">
                {['Family owned', 'Free estimates', 'Residential & commercial'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#0e63b5]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-[34rem] lg:mx-0 lg:ml-auto">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-[10px] border-white bg-[#b7dcf5] shadow-[0_24px_70px_rgba(15,72,119,0.18)]">
                <Image
                  src="/heavenly-window-cleaning/belmont-window-cleaning-hero.webp"
                  alt="Heavenly Window Cleaning technician using a water-fed pole on upper-story windows"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 43vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-3 max-w-[16rem] rounded-2xl bg-[#071d33] p-5 text-white shadow-xl sm:-left-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8ed1ff]">The Belmont difference</p>
                <p className="mt-2 text-base font-bold leading-6">Steep grades and view-facing glass call for an access plan, not a one-size-fits-all ladder setup.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#0e63b5]">Local context</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] text-[#071d33] sm:text-5xl">
                The glass changes as Belmont climbs.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-[#405f78]">
              <p>
                Belmont rises quickly from the El Camino Real corridor into western hillside neighborhoods. On the ground, that often means the most important windows—the east-facing panes that open the home to a Bay view—sit above a slope, a lower roof, a planted bed or a drop in grade. Reaching them safely is part of the service, not an afterthought.
              </p>
              <p>
                Housing varies just as much. Antique Forest and Carlmont contain many mid-century and post-war homes, while Belmont Woods, Hallmark and the higher hills include larger properties and broad expanses of glass. A divided-light window, a sliding door and a tall picture window do not take the same time or tools, so a useful quote starts with the actual panes and access rather than square footage alone.
              </p>
              <p>
                Tree pollen, dust through the dry season and sprinkler overspray all leave different residue. A routine clean can remove ordinary buildup; mineral spotting that has repeatedly dried in direct sun may need separate restoration. Heavenly’s approach is to assess what is on the glass and explain the difference before promising a result.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#cce3f7] bg-[#edf7ff] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#0e63b5]">Choose the right scope</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-[#071d33] sm:text-5xl">More than a quick pass over the glass.</h2>
              <p className="mt-5 text-lg leading-8 text-[#405f78]">Build the visit around what your home actually needs. These items can be included or discussed when Heavenly prepares the quote.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {included.map((item) => (
                <article key={item.title} className="rounded-3xl border border-[#b8daf3] bg-white p-7 shadow-[0_10px_30px_rgba(16,84,135,0.06)]">
                  <item.icon className="h-7 w-7 text-[#0e63b5]" strokeWidth={2} aria-hidden="true" />
                  <h3 className="mt-6 text-xl font-extrabold text-[#071d33]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#4b6880]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#071d33] py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#133b5d]">
              <Image
                src="/heavenly-window-cleaning/belmont-water-fed-pole.webp"
                alt="Heavenly Window Cleaning technician reaching exterior glass from the ground with a water-fed pole"
                fill
                sizes="(max-width: 1024px) 90vw, 46vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#78c8ff]">A clear four-step visit</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">From pane count to final walk-through.</h2>
              <div className="mt-10 space-y-8">
                {process.map(([number, title, body]) => (
                  <div key={number} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-white/20 pt-6">
                    <span className="text-2xl font-black text-[#78c8ff]">{number}</span>
                    <div>
                      <h3 className="text-xl font-extrabold">{title}</h3>
                      <p className="mt-2 leading-7 text-[#c2d8e8]">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#0e63b5]">What clean changes</p>
                <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] text-[#071d33] sm:text-5xl">You should notice the view—not the pane.</h2>
                <p className="mt-6 text-lg leading-8 text-[#405f78]">
                  Window cleaning is most visible where sunlight and dark reflections expose haze, fingerprints and fine residue. Large sliding doors and picture windows make that difference especially obvious. The goal is not a temporary shine at the center of the glass; it is a consistent finish across the pane, edges and surrounding details included in your scope.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ['01', 'Natural light', 'Less film between the room and the daylight.'],
                    ['02', 'Clear sightlines', 'A cleaner view across Belmont and toward the Bay.'],
                    ['03', 'Finished details', 'Screens and tracks no longer undermine clean glass.'],
                  ].map(([n, title, body]) => (
                    <div key={n} className="border-l-4 border-[#ffcb45] pl-4">
                      <span className="text-xs font-black text-[#0e63b5]">{n}</span>
                      <h3 className="mt-1 font-extrabold text-[#071d33]">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#567086]">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-[#cce3f7] bg-[#e7f4fd] p-3">
                <Image
                  src="/heavenly-window-cleaning/belmont-before-after.webp"
                  alt="Before and after view through a professionally cleaned sliding glass door"
                  width={1200}
                  height={896}
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="h-auto w-full rounded-[1.4rem]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#eaf5fd] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#0e63b5]">Belmont service coverage</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-[#071d33]">From the flats to the western hills.</h2>
              <p className="mt-5 text-lg leading-8 text-[#405f78]">
                Heavenly Window Cleaning serves homes and businesses across Belmont, including the varied access conditions found around these neighborhoods.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {['Antique Forest', 'Carlmont', 'Belmont Woods', 'Hallmark', 'Belmont Hills', 'El Camino Real corridor'].map((area) => (
                  <span key={area} className="rounded-full border border-[#a9d0ec] bg-white px-4 py-2 text-sm font-bold text-[#234b6d]">{area}</span>
                ))}
              </div>
            </div>
            <aside className="rounded-[2rem] bg-[#ffcb45] p-8 text-[#17283a] sm:p-10">
              <Sun className="h-9 w-9" aria-hidden="true" />
              <h3 className="mt-6 text-3xl font-black tracking-tight">Preparing for a smoother visit</h3>
              <ul className="mt-6 space-y-4 leading-7">
                {[
                  'Move fragile objects away from interior sills and note any alarm sensors on windows.',
                  'Unlock gates and call out steep side yards, delicate planting or limited driveway access.',
                  'Secure pets and tell the crew which doors must remain closed.',
                  'Point out known scratches, failed seals or old mineral spotting during the walk-through.',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#0e63b5]">Common questions</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-[#071d33] sm:text-5xl">Belmont window cleaning FAQ</h2>
            </div>
            <div className="mt-12 divide-y divide-[#cce3f7] border-y border-[#cce3f7]">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-extrabold text-[#071d33] marker:content-none">
                    {faq.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e6f3fc] text-[#0e63b5]" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 leading-7 text-[#4b6880]">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0e63b5] py-16 text-white sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#bfe6ff]">Ready when your view is not</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.035em] sm:text-5xl">Ask Heavenly for a Belmont window cleaning quote.</h2>
              <p className="mt-4 text-lg leading-8 text-[#d9efff]">The quote and booking happen directly with Heavenly Window Cleaning on its official site.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
              <a href={`${originalSite}contact-us`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ffcb45] px-7 py-3.5 font-extrabold text-[#17283a]">
                Get a free quote <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href={phoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/60 px-7 py-3.5 font-extrabold text-white">
                <Phone className="h-5 w-5" aria-hidden="true" /> 650-636-3621
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#071d33] py-10 text-[#bfd2e2]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
          <div>
            <p className="font-extrabold text-white">Heavenly Window Cleaning</p>
            <p className="mt-2 max-w-md text-sm leading-6">Family-owned window, gutter and solar panel cleaning across the San Francisco Peninsula.</p>
          </div>
          <div className="space-y-3 text-sm">
            <a href={phoneHref} className="flex items-center gap-2 text-white"><Phone className="h-4 w-4" aria-hidden="true" />650-636-3621</a>
            <a href="mailto:info@heavenlywindowcleaning.com" className="flex items-center gap-2 text-white"><Mail className="h-4 w-4" aria-hidden="true" />info@heavenlywindowcleaning.com</a>
          </div>
          <div className="space-y-3 text-sm lg:text-right">
            <a href={originalSite} className="block font-bold text-white">Visit the official website ↗</a>
            <Link href="/businesses/heavenly-window-cleaning/gutter-cleaning-emerald-hills-ca/" className="block font-bold text-[#8ed1ff]">Gutter cleaning in Emerald Hills</Link>
            <Link href="/businesses/" className="block">Browse local businesses</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
