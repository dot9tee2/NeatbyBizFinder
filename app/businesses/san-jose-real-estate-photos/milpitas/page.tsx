import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Film,
  Layers3,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Plane,
  ScanLine,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { SjrepMinidocPlayer } from '@/components/businesses/sjrep-minidoc-player';
import {
  SJREP,
  SJREP_MINIDOCS,
  SJREP_ROUTES,
  sjrepMetadata,
  sjrepStructuredData,
  type SjrepFaq,
} from '@/lib/san-jose-real-estate-photos';

const slug = 'milpitas';
const description =
  'Real Estate Photography Milpitas for listings, homes and commercial spaces. Explore HDR photos, video, drone imagery, 3D tours and floor plans with SJREP.';

const pageMetadata = sjrepMetadata(
  'Milpitas',
  slug,
  description,
  '/san-jose-real-estate-photos/woodridge-exterior.webp',
);
const pageTitle = 'Real Estate Photography Milpitas | SJREP';
export const metadata = {
  ...pageMetadata,
  title: pageTitle,
  openGraph: { ...pageMetadata.openGraph, title: pageTitle },
  twitter: { ...pageMetadata.twitter, title: pageTitle },
};

const services = [
  {
    icon: Camera,
    title: 'HDR Real Estate Photography',
    body: 'Show interior and exterior spaces with clear, balanced listing images. Plan the essential rooms, outdoor areas and standout details before the appointment so the photographs answer the questions buyers are likely to have.',
  },
  {
    icon: Film,
    title: 'Property Films and Story Tours',
    body: 'Introduce the home through cinematic real estate videography or discuss an agent-guided story tour. Choose the story, featured spaces and on-camera plan before filming, with the intended viewing platform in mind.',
  },
  {
    icon: Plane,
    title: 'Drone Photography and Video',
    body: 'Add aerial photography for real estate when the property and location benefit from a wider perspective. Drone photos and video depend on the address, airspace, weather, permissions and safe operating conditions.',
  },
  {
    icon: ScanLine,
    title: '3D Virtual Tours and Floor Plans',
    body: 'Give prospective buyers an interactive way to explore the layout with 3D tours and floor plans. Ask about Zillow 3D and the iGUIDE upgrade when measured plans or dimensions are important to your listing.',
  },
  {
    icon: Monitor,
    title: 'Custom Property Websites',
    body: 'Present property photographs, video and listing information in a dedicated online destination. Confirm which assets and contact details should appear, then use the property link across your listing and launch materials.',
  },
  {
    icon: Smartphone,
    title: 'Reels and Agent Content',
    body: 'Create vertical reels, agent introductions and property-focused social content for your next launch. Agree on the message, people appearing on camera and target platforms so filming supports your presentation.',
  },
  {
    icon: Sparkles,
    title: 'Virtual Staging and Image Edits',
    body: 'Virtual staging, twilight edits and decluttering can help selected images communicate a space. Identify the photographs that need editing and disclose virtual changes appropriately wherever the finished media is published.',
  },
  {
    icon: Layers3,
    title: 'Listing Launch Marketing',
    body: 'Coordinate listing media with neighborhood features, property content and a clear publication plan. Provide accurate property details, agent branding and the intended schedule before production begins.',
  },
];

const faqs: SjrepFaq[] = [
  {
    q: 'Can I book a real estate photography session in Milpitas?',
    a: 'Yes. Send the property address, preferred date and services you need. SJREP can confirm scheduling, access arrangements and any travel requirements for your Milpitas property.',
  },
  {
    q: 'What is included in real estate photography services?',
    a: 'Services may include HDR interior and exterior photos, property films, drone imagery, 3D tours, floor plans, property websites and agent content. Available packages and individual deliverables vary, so confirm the current options before ordering.',
  },
  {
    q: 'Can I book residential and commercial property photography?',
    a: 'Yes. Residential and commercial media can be discussed based on the property, intended audience and required coverage. For commercial or recurring documentation, share site access details, restrictions and the project schedule.',
  },
  {
    q: 'Do you offer drone photography for real estate in Milpitas?',
    a: 'Aerial photography and video may be available when the address, airspace, weather, permissions and operating conditions allow. Share the exact property address so suitability can be reviewed before the shoot.',
  },
  {
    q: 'Are 3D virtual tours and floor plans available?',
    a: 'SJREP lists Zillow 3D tours and interactive floor plans, with iGUIDE available as an upgrade for measured plans and dimensions. Confirm the selected system and final deliverables when placing your order.',
  },
  {
    q: 'How soon will I receive the photos and videos?',
    a: 'Published terms specify photographs by 2 p.m. the next business day and video or 3D media within 2–3 business days. Confirm your deadline and any rush request when booking.',
  },
  {
    q: 'Can virtual staging be added to listing photos?',
    a: 'Virtual staging, twilight edits and decluttering can be discussed for selected images. Identify the photographs that need edits and make sure virtual changes are represented appropriately when the images are published.',
  },
  {
    q: 'What should I prepare before the property shoot?',
    a: 'Declutter rooms, prepare lighting, clear exterior areas, secure pets and arrange access. For video, plan for occupants to be off-site and fans and screens to be off. Review the official checklist before the appointment.',
  },
  {
    q: 'Is Social Launchpad part of a standard property shoot?',
    a: 'No. Social Launchpad is a separate ongoing agent-content option. Selected reels or agent content may be discussed for a property launch, but confirm those deliverables separately from an ongoing content plan.',
  },
  {
    q: 'What should I know before booking drone work?',
    a: 'Drone suitability depends on the exact address, airspace, weather, permissions and safe operating conditions. Confirm the shoot scope and review current booking, cancellation, rescheduling and usage terms before ordering.',
  },
];

const comparison = [
  {
    number: '01',
    label: 'Show the Property',
    assets: 'HDR photography + a property film',
    body: 'Use bright, balanced listing photographs for the first impression and a film to show how the rooms connect. Prioritize the features buyers should notice instead of adding formats without a clear purpose.',
  },
  {
    number: '02',
    label: 'Explain the Layout',
    assets: '3D virtual tour + floor plan',
    body: 'Help viewers understand room flow and the relationship between spaces. If measured dimensions matter, ask about iGUIDE and confirm the plan type and tour deliverables before booking.',
  },
  {
    number: '03',
    label: 'Prepare the Launch',
    assets: 'Property website + reels + marketing',
    body: 'Bring the listing assets together on a dedicated property destination, then prepare supporting content for the channels you plan to use. Confirm agent details, launch timing and required materials in advance.',
  },
];

export default function MilpitasRealEstateMediaPage() {
  return (
    <div className="min-h-screen bg-[#f8f4eb] text-[#203f34] [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#a44730] [&_summary:focus-visible]:outline [&_summary:focus-visible]:outline-2 [&_summary:focus-visible]:outline-offset-4 [&_summary:focus-visible]:outline-[#a44730]">
      <a
        href="#main-content"
        className="sr-only z-50 rounded-xl bg-white px-5 py-3 font-bold focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sjrepStructuredData('Milpitas', slug, description, faqs)).replace(
            /</g,
            '\\u003c',
          ),
        }}
      />

      <header className="border-b border-[#203f34]/15">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 lg:px-8">
          <a
            href={SJREP.site}
            className="flex min-w-0 items-center gap-3"
            aria-label="San Jose Real Estate Photos official website"
          >
            <Image
              src="/san-jose-real-estate-photos/logo.png"
              alt=""
              width={58}
              height={58}
              className="h-12 w-12 shrink-0 rounded-xl bg-[#203f34] object-contain p-1.5"
            />
            <span className="max-w-[12rem] text-sm font-bold leading-5 sm:max-w-none sm:text-base">
              San Jose
              <br className="sm:hidden" /> Real Estate Photos
            </span>
          </a>
          <a
            href={SJREP.booking}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#203f34] px-5 py-3 text-sm font-bold text-white"
          >
            Book a shoot <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <nav
          aria-label="Milpitas page navigation"
          className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-2 px-5 pb-4 text-sm font-semibold lg:px-8"
        >
          <a href="#minidocs">MiniDocs</a>
          <a href="#services">Services</a>
          <a href="#work">The work</a>
          <a href="#planning">Shoot planning</a>
          <a href={SJREP.phoneHref} className="ml-auto inline-flex items-center gap-2">
            <Phone className="h-4 w-4" aria-hidden="true" />
            408-483-0688
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="mx-auto max-w-7xl px-5 pb-14 pt-7 lg:px-8 lg:pb-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap gap-x-2 gap-y-1 text-xs font-medium text-[#596b60] sm:text-sm"
          >
            <Link href="/">NearbyBizFinder</Link>
            <span aria-hidden="true">/</span>
            <Link href="/businesses/">Businesses</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Milpitas real estate media</span>
          </nav>
          <div className="mt-9 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
            <div className="lg:pt-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#203f34]/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Milpitas, California
              </p>
              <h1 className="mt-6 font-serif text-5xl leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                Real Estate Photography in Milpitas,{' '}
                <span className="text-[#a44730]">Made to Move Listings</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#526459]">
                Present every property with clear, compelling media. SJREP brings real estate
                photography, property films, drone imagery, 3D tours and floor plans together to
                help Milpitas agents prepare listings for launch.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={SJREP.booking}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#a44730] px-6 py-3.5 font-bold text-white"
                >
                  Plan &amp; Book Your Shoot <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={SJREP.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#203f34]/35 px-6 py-3.5 font-bold"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Talk to Thomas
                </a>
              </div>
              <a href="#brief" className="mt-9 inline-flex items-center gap-3 text-sm font-bold">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-[#203f34]/25">
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </span>
                Start with the property
              </a>
            </div>
            <div>
              <figure>
                <div className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] rounded-tl-[5rem] bg-[#ded9ce] sm:aspect-[4/3] lg:aspect-[1/1]">
                  <Image
                    src="/san-jose-real-estate-photos/woodridge-exterior.webp"
                    alt="Aerial photograph of the house and pool at 6 Woodridge Court"
                    fill
                    priority
                    sizes="(max-width: 1024px) 94vw, 48vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 text-xs text-[#596b60]">
                  <span>Portfolio example · 6 Woodridge Court</span>
                  <a href={SJREP.portfolio} className="font-bold text-[#203f34]">
                    Explore the portfolio ↗
                  </a>
                </figcaption>
              </figure>
              <aside
                id="brief"
                className="relative mt-6 scroll-mt-6 rounded-[2rem] bg-[#203f34] p-7 text-[#f8f4eb] lg:-ml-12 lg:mt-7 lg:mr-10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6bf9d]">
                  Your starting brief
                </p>
                <h2 className="mt-3 font-serif text-2xl">
                  Start With the Property. Build the Right Media Plan.
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#d4ded5]">
                  Every listing has a different story to tell. Share the address, property type,
                  size, access details and launch goals so the shoot can focus on the spaces,
                  features and information your audience needs.
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    ['01', 'The property', 'Home type, size, key features and access.'],
                    ['02', 'The audience', 'Buyers, tenants, investors or your next client.'],
                    ['03', 'The launch', 'Deliverables, platforms and preferred timing.'],
                  ].map(([number, title, body]) => (
                    <div key={number}>
                      <p className="font-serif text-3xl text-[#e6bf9d]">{number}</p>
                      <h3 className="mt-2 font-bold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#d4ded5]">{body}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section
          id="minidocs"
          aria-labelledby="minidocs-heading"
          className="mx-auto max-w-7xl scroll-mt-6 px-5 pb-16 lg:px-8 sm:pb-20"
        >
          <div className="rounded-[2.5rem] bg-[#203f34] p-6 text-[#f8f4eb] sm:p-10 lg:p-12 [&_a:focus-visible]:!outline-[#f8f4eb]">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-14">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-[#a44730] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
                  <Film className="h-4 w-4" aria-hidden="true" />
                  Featured storytelling
                </p>
                <h2
                  id="minidocs-heading"
                  className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl"
                >
                  Give Your Milpitas Listing a{' '}
                  <span className="text-[#e6bf9d]">Story Worth Sharing</span>
                </h2>
              </div>
              <p className="leading-8 text-[#d4ded5]">
                A MiniDoc is a short documentary built around a property and the people connected to
                it. Go beyond a standard walkthrough with the home, its setting and the people
                behind the sale brought together in a story agents can share across listing and
                social channels.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {SJREP_MINIDOCS.map((video) => (
                <figure key={video.youtubeId} className="rounded-[2rem] bg-[#2a4a3f] p-3">
                  <SjrepMinidocPlayer
                    video={video}
                    sizes="(max-width: 768px) 90vw, 44vw"
                    buttonClassName="bg-[#edcfb8] text-[#203f34]"
                    frameClassName="rounded-[1.5rem] [&_button:focus-visible]:outline [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-[-6px] [&_button:focus-visible]:outline-[#f8f4eb]"
                  />
                  <figcaption className="px-3 pb-3 pt-5">
                    <p className="text-lg font-bold">
                      {video.title} · {video.place}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#d4ded5]">{video.summary}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={SJREP.minidocInquiry}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#edcfb8] px-6 py-3.5 font-bold text-[#203f34]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> Ask About a MiniDoc
              </a>
              <a
                href={SJREP.booking}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#d4ded5]/40 px-6 py-3.5 font-bold"
              >
                Book a shoot <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={SJREP.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-2 py-3 text-sm font-bold text-[#e6bf9d] sm:ml-auto"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> 408-483-0688
              </a>
            </div>
          </div>
        </section>

        <section id="choose" className="border-y border-[#203f34]/15 bg-[#eaece3] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a44730]">
                Choose by purpose
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                One Property. A Clear Plan for Every Format.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#526459]">
                Choose media around the story you need to tell. These combinations are starting
                points; final deliverables and package inclusions are confirmed when you place your
                order.
              </p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {comparison.map((item) => (
                <article key={item.number} className="rounded-[2rem] bg-[#fdfbf6] p-7 sm:p-8">
                  <p className="font-serif text-4xl text-[#a44730]">{item.number}</p>
                  <h3 className="mt-6 text-2xl font-bold">{item.label}</h3>
                  <p className="mt-3 border-t border-[#203f34]/15 pt-4 text-sm font-bold">
                    {item.assets}
                  </p>
                  <p className="mt-4 leading-7 text-[#526459]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 sm:py-20">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a44730]">
                The complete service menu
              </p>
              <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
                Real Estate Photography and Media Services in Milpitas
              </h2>
              <p className="mt-5 leading-8 text-[#526459]">
                Build a complete view of your listing with services selected for the property, your
                audience and your marketing plan. Discuss the required coverage and confirm current
                package details before ordering.
              </p>
            </div>
            <a
              href={SJREP.pricing}
              className="inline-flex items-center gap-2 self-start rounded-full border border-[#203f34]/30 px-5 py-3 text-sm font-bold lg:self-auto"
            >
              Current packages & pricing <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-[1.75rem] border border-[#203f34]/15 bg-[#fffdf8] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eaece3]">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-serif text-lg text-[#a44730]">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold leading-7">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#526459]">{service.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="work"
          className="bg-[#203f34] py-16 text-[#f8f4eb] sm:py-20 [&_a:focus-visible]:!outline-[#f8f4eb]"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-7 lg:grid-cols-[1fr_0.7fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e6bf9d]">
                  See the work
                </p>
                <h2 className="mt-4 max-w-xl font-serif text-4xl tracking-tight sm:text-5xl">
                  Explore Real Property Photography. Plan Your Own.
                </h2>
              </div>
              <div className="lg:self-end">
                <p className="leading-7 text-[#d4ded5]">
                  Review photographs, films and reels from the SJREP portfolio to understand the
                  available style and coverage. Examples may feature projects across the wider
                  service area; discuss the specific media your Milpitas property needs.
                </p>
                <a
                  href={SJREP.portfolio}
                  className="mt-5 inline-flex items-center gap-2 font-bold text-[#e6bf9d]"
                >
                  Explore More Photographs, Films and Reels{' '}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-[1.25fr_0.75fr]">
              <figure className="rounded-[2rem] bg-[#2a4a3f] p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/san-jose-real-estate-photos/montecito-03.webp"
                    alt="Living and dining space from the 73 Montecito Vista Drive portfolio gallery"
                    fill
                    sizes="(max-width: 768px) 94vw, 60vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-2 pb-1 pt-4 text-sm text-[#d4ded5]">
                  73 Montecito Vista Drive · portfolio gallery
                </figcaption>
              </figure>
              <figure className="rounded-[2rem] bg-[#2a4a3f] p-3 md:mt-12">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] md:aspect-[1/1]">
                  <Image
                    src="/san-jose-real-estate-photos/san-miguel-03.webp"
                    alt="Backyard lawn at 786 San Miguel Avenue in Sunnyvale"
                    fill
                    sizes="(max-width: 768px) 94vw, 36vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-2 pb-1 pt-4 text-sm text-[#d4ded5]">
                  786 San Miguel Avenue · Sunnyvale
                </figcaption>
              </figure>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://vimeo.com/1170025772"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d4ded5]/40 px-5 py-3 text-sm font-bold"
              >
                <Film className="h-4 w-4" aria-hidden="true" />
                Watch the Woodridge story tour{' '}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://vimeo.com/1178114313"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d4ded5]/40 px-5 py-3 text-sm font-bold"
              >
                <Smartphone className="h-4 w-4" aria-hidden="true" />
                Watch the Woodridge reel <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 sm:py-20">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2.5rem] border border-[#203f34]/20 p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a44730]">
                Residential
              </p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
                Make Every Home Easier to Explore
              </h2>
              <p className="mt-5 leading-8 text-[#526459]">
                From houses and condos to townhomes, residential real estate photography should make
                the rooms, exterior features and layout easy to understand. Share access
                instructions, occupied spaces and must-capture details before the shoot. Add video,
                3D tours or virtual staging when they support the listing.
              </p>
              <p className="mt-4 leading-8 text-[#526459]">
                Choose a current Launchpad package or discuss individual services. Package scope and
                pricing can vary by property and selected upgrades, so review the live options
                before booking.
              </p>
              <a href={SJREP.booking} className="mt-6 inline-flex items-center gap-2 font-bold">
                Book Residential Media <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
            <article className="rounded-[2.5rem] bg-[#eaece3] p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a44730]">
                Commercial
              </p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
                Show the Space, Its Features and Its Purpose
              </h2>
              <p className="mt-5 leading-8 text-[#526459]">
                Commercial real estate photography can support brokers, owners, builders,
                contractors and asset managers. Discuss interior and exterior images, aerial
                coverage, commercial iGUIDE or measured floor plans based on the site and the
                information your audience needs.
              </p>
              <p className="mt-4 leading-8 text-[#526459]">
                For construction progress or recurring documentation, define the areas, visit
                schedule, site restrictions and project contact in advance. Use the Commercial
                booking path to outline the scope.
              </p>
              <a href={SJREP.booking} className="mt-6 inline-flex items-center gap-2 font-bold">
                Discuss Commercial Coverage <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 sm:pb-20">
          <div className="grid overflow-hidden rounded-[2.5rem] bg-[#edcfb8] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#763924]">
                From listing to launch
              </p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
                Give Every Finished Asset a Clear Destination
              </h2>
              <p className="mt-5 leading-8 text-[#4f5548]">
                Photography, video, 3D tours and a property website work best when they support one
                publication plan. Prepare listing details, agent contact information and brand
                assets, then decide which channels need full property coverage and which need a
                short introduction.
              </p>
              <p className="mt-4 leading-8 text-[#4f5548]">
                Discuss listing-launch marketing, neighborhood features, reels and agent
                introductions. Keep the deliverables aligned with your launch date and the materials
                you intend to publish.
              </p>
            </div>
            <aside className="bg-[#a44730] p-8 text-white sm:p-10 [&_a:focus-visible]:!outline-[#f8f4eb]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f4dccc]">
                An ongoing option
              </p>
              <h3 className="mt-4 font-serif text-3xl tracking-tight">
                Social Launchpad for Ongoing Agent Content
              </h3>
              <p className="mt-5 leading-8 text-[#f8e8dc]">
                For agents who need content beyond a single property, Social Launchpad is a separate
                ongoing option that can include topic research, scripting, teleprompter recording,
                editing, captions and delivery. Confirm the plan scope, batch-filming options and
                any distribution needs directly.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4 text-sm font-bold">
                <a href={SJREP.socialLaunchpad} className="inline-flex items-center gap-2">
                  Explore Social Launchpad <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={SJREP.socialStrategyCall} className="inline-flex items-center gap-2">
                  Book a strategy call <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section id="planning" className="border-y border-[#203f34]/15 bg-[#fffdf8] py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a44730]">
                Plan your appointment
              </p>
              <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
                Prepare the Brief Before Shoot Day
              </h2>
              <p className="mt-5 leading-8 text-[#526459]">
                Set the appointment with your listing deadline and finished-media schedule in mind.
                Confirm the property, selected services, access and preparation requirements before
                coordinating occupants, cleaners and launch activity.
              </p>
              <a
                href={SJREP.checklist}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#203f34]/30 px-5 py-3 text-sm font-bold"
              >
                Read the Pre-Shoot Checklist <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="space-y-7">
              {[
                [
                  '01',
                  'Confirm the Brief and Access',
                  'Send the property address, size, selected services and preferred date. Include entry instructions, parking, building rules and must-capture areas. For agent video, agree on the message and on-camera plan before the appointment.',
                ],
                [
                  '02',
                  'Prepare the Rooms and Exterior',
                  'Declutter rooms, arrange lighting, clear outdoor areas and secure pets by following the official pre-shoot checklist. For video appointments, plan for occupants to be off-site and fans and screens to be switched off.',
                ],
                [
                  '03',
                  'Plan for the Finished Media',
                  'Published terms specify photographs by 2 p.m. the next business day and video or 3D media within 2–3 business days. Confirm the required deadline, rush options, payment terms and usage details when booking.',
                ],
              ].map(([number, title, body]) => (
                <article
                  key={number}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-[#203f34]/20 pt-6 sm:grid-cols-[3.5rem_1fr]"
                >
                  <span className="font-serif text-3xl text-[#a44730]">{number}</span>
                  <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-3 leading-7 text-[#526459]">{body}</p>
                  </div>
                </article>
              ))}
              <a href={SJREP.terms} className="inline-flex items-center gap-2 text-sm font-bold">
                Read the current booking & usage terms{' '}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="flex flex-col gap-7 rounded-[2rem] border border-[#203f34]/20 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a44730]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Milpitas service coverage
              </p>
              <h2 className="mt-3 font-serif text-3xl">
                Share the Property Address. Confirm the Shoot Plan.
              </h2>
              <p className="mt-4 leading-7 text-[#526459]">
                SJREP serves Milpitas and the wider South Bay and Silicon Valley area, including San
                Jose and Santa Clara. Send the property address to confirm availability, scheduling
                and any travel requirements, especially for aerial work or multi-visit projects.
              </p>
            </div>
            <a
              href={SJREP.emailHref}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#203f34] px-6 py-3.5 font-bold text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Send Your Property Brief
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-16 sm:pb-20 lg:px-8">
          <div className="mb-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a44730]">
              Before you book
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
              Milpitas Real Estate Photography FAQs
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-[#203f34]/20 bg-[#fffdf8] px-6 py-5 sm:px-7"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-bold leading-7 marker:content-none sm:text-lg">
                  <span>{faq.q}</span>
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#eaece3] text-xl group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pt-4 leading-7 text-[#526459]">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
            <a href={SJREP.pricing}>Current service pricing ↗</a>
            <a href={SJREP.checklist}>Preparation checklist ↗</a>
            <a href={SJREP.terms}>Booking terms ↗</a>
          </div>
        </section>

        <section className="bg-[#203f34] py-16 text-[#f8f4eb] sm:py-20 [&_a:focus-visible]:!outline-[#f8f4eb]">
          <div className="mx-auto grid max-w-7xl gap-9 px-5 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e6bf9d]">
                Your next listing starts here
              </p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl">
                Ready to Plan Your Milpitas Property Media?
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-[#d4ded5]">
                Book a residential or commercial property shoot, or contact Thomas to discuss the
                photography, video, drone coverage and listing media that fit your property and
                launch schedule.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={SJREP.booking}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#edcfb8] px-6 py-4 font-bold text-[#203f34]"
              >
                Book a Property Shoot <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={SJREP.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#d4ded5]/40 px-6 py-4 font-bold"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call 408-483-0688
              </a>
              <a
                href={SJREP.emailHref}
                className="break-all py-2 text-center text-sm font-semibold text-[#e6bf9d]"
              >
                info@sanjoserealestatephotos.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#18372d] py-10 text-[#d4ded5] [&_a:focus-visible]:!outline-[#f8f4eb]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr] lg:px-8">
          <div>
            <p className="font-bold text-[#f8f4eb]">San Jose Real Estate Photos</p>
            <p className="mt-3 max-w-sm text-sm leading-6">
              Property media and listing-launch support for Milpitas and the wider San Jose service
              area.
            </p>
            <a href={SJREP.site} className="mt-4 inline-block text-sm font-bold text-[#e6bf9d]">
              Official business website ↗
            </a>
          </div>
          <nav aria-label="Related city pages" className="space-y-3 text-sm">
            <p className="font-bold text-[#f8f4eb]">Explore nearby city pages</p>
            <Link href={SJREP_ROUTES.sanJose} className="block">
              Real estate media in San Jose
            </Link>
            <Link href={SJREP_ROUTES.santaClara} className="block">
              Real estate media in Santa Clara
            </Link>
            <Link href="/businesses/" className="block">
              Browse local businesses
            </Link>
          </nav>
          <div className="space-y-3 text-sm">
            <a href={SJREP.phoneHref} className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              408-483-0688
            </a>
            <a href={SJREP.emailHref} className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="min-w-0 break-all">info@sanjoserealestatephotos.com</span>
            </a>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href={SJREP.gbp}>Google business profile ↗</a>
              <a href={SJREP.privacy}>Privacy policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
