import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowRight,
  Camera,
  Film,
  ScanLine,
  Plane,
  LayoutTemplate,
  Smartphone,
  WandSparkles,
  Megaphone,
  Phone,
  Mail,
  Play,
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

const slug = 'san-jose';
const description =
  'Real Estate Photography San Jose: Showcase properties with photos, video, drone imagery & 3D tours. SJREP helps agents present listings beautifully.';

const pageMetadata = sjrepMetadata(
  'San Jose',
  slug,
  description,
  '/san-jose-real-estate-photos/deodara-exterior.webp',
);
const pageTitle = 'Real Estate Photography San Jose | SJREP';
export const metadata = {
  ...pageMetadata,
  title: pageTitle,
  openGraph: { ...pageMetadata.openGraph, title: pageTitle },
  twitter: { ...pageMetadata.twitter, title: pageTitle },
};

const services = [
  {
    n: '01',
    icon: Camera,
    title: 'HDR listing photography',
    body: 'Give buyers a clear first look at the property, from the exterior approach to its most important rooms. HDR real estate photography creates a coordinated set of interior and exterior images. Share the features you want highlighted before the shoot, such as a renovated kitchen, flexible living space or outdoor area.',
  },
  {
    n: '02',
    icon: Film,
    title: 'Cinematic property video',
    body: 'A real estate video connects the spaces introduced in still photographs. Choose a cinematic property film for movement and atmosphere, or discuss an agent-guided tour when your explanation adds useful context. Plan the route, key features and any spoken introduction before filming.',
  },
  {
    n: '03',
    icon: Plane,
    title: 'Drone photography & video',
    body: "Aerial real estate photography can show the property's exterior layout, grounds and relationship to nearby surroundings. Share the address and desired views when booking. Flight availability depends on airspace, weather and safe operating conditions; discuss a ground-level alternative if a flight is not possible.",
  },
  {
    n: '04',
    icon: ScanLine,
    title: '3D tours & floor plans',
    body: 'Let viewers explore the layout after the first impression. The residential service includes Zillow 3D tours with its packages and offers iGUIDE upgrades with measured plans and dimensions. Compare the tour format, measurement needs and intended use before selecting an option, especially for a multi-level property or commercial space.',
  },
  {
    n: '05',
    icon: LayoutTemplate,
    title: 'Custom property websites',
    body: 'Bring property photos, video, tours and listing details together in a dedicated presentation. A custom property website gives agents one destination to share in emails, social posts and printed materials. Provide approved property information and contact details for a consistent launch.',
  },
  {
    n: '06',
    icon: Smartphone,
    title: 'Social reels & agent content',
    body: 'Short vertical property reels and agent introductions are designed for social viewing, rather than replacing a full listing film. Choose the features to highlight, decide who will appear on camera and confirm the intended platforms and deliverables before recording.',
  },
  {
    n: '07',
    icon: WandSparkles,
    title: 'Virtual presentation',
    body: 'Virtual staging, decluttering and twilight edits can help present a room or exterior in a different way. Agree on the images and requested changes before editing. Keep original photographs available and identify altered imagery wherever listing platforms or advertising rules require it.',
  },
  {
    n: '08',
    icon: Megaphone,
    title: 'Listing-launch marketing',
    body: 'Plan how your listing media will be shared after the shoot. Discuss launch materials, neighborhood details and marketing support so you know which assets are included and which are optional. Match the deliverables to your channels, timeline and accurate property information.',
  },
];

const faqs: SjrepFaq[] = [
  {
    q: 'What is a MiniDoc, and how is it different from a listing film?',
    a: 'A listing film shows a property in motion. A MiniDoc adds a story around the home, seller, agent and neighborhood, edited as a short documentary. Published examples run about six and eleven minutes. MiniDocs are inquiry-only, so plan the story, people on camera and filming time with Thomas before booking.',
  },
  {
    q: 'What should I book for a San Jose property listing?',
    a: 'Start with the property type, size and launch date. Photography introduces the rooms, video connects the spaces, and a 3D tour or floor plan helps viewers understand the layout. Add aerial coverage, a property website or social content when it supports a specific marketing goal. Confirm package details and upgrades in the booking flow.',
  },
  {
    q: 'Are Zillow 3D tours and iGUIDE the same service?',
    a: 'No. They are separate options. The residential page lists Zillow 3D tours with its packages and offers iGUIDE upgrades with measured plans and dimensions. Tell Thomas whether you need an interactive walkthrough, dimensional information or both, and confirm the selected deliverables before booking.',
  },
  {
    q: 'Can you photograph occupied homes, condos and commercial properties?',
    a: 'SJREP offers residential and commercial media. For an occupied home, arrange rooms and clear the shooting route. For a condo, provide building access, parking details and any shared-area permissions. For commercial work, identify the spaces, access hours, people who may appear and any documentation requirements.',
  },
  {
    q: 'Is drone photography available at every San Jose address?',
    a: "No. Aerial work depends on the property's airspace, weather, visibility, access and safe operating conditions. Send the exact address and describe the views you want before the appointment. If a flight is unavailable, discuss ground-level exterior photography or another suitable option.",
  },
  {
    q: 'When will I receive the finished photos and videos?',
    a: 'Published terms state that photos are delivered by 2 p.m. the next business day, while video and 3D files are delivered within two to three business days. Confirm timing for combined orders, special edits or rush requests with Thomas before booking.',
  },
  {
    q: 'How should I prepare for a real estate video shoot?',
    a: 'Prepare the filming route, switch off fans and screens, and follow the pre-shoot checklist for occupant arrangements. If an agent introduction is planned, agree on the message, length and location in advance. A short, clear introduction works best when the property footage provides the visual detail.',
  },
  {
    q: 'Does listing photography include ongoing social media management?',
    a: 'No. Ongoing agent content is a separate Social Launchpad service. It includes topic research, scripting, Riverside teleprompter recording, editing, captions and delivery. Optional distribution and batch filming are separate options. Confirm the program scope through a strategy call.',
  },
  {
    q: 'Which areas do you serve outside San Jose?',
    a: 'SJREP serves the South Bay and Silicon Valley, including San Jose, Santa Clara and Milpitas. Send the property address to confirm availability and travel requirements. For schedule changes, review the published booking terms for cancellation, rescheduling, access and return visits.',
  },
];

const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b576]';
const goldButton = `inline-flex min-h-12 items-center justify-center gap-3 bg-[#d8b576] px-6 py-3 text-sm font-bold text-[#101827] transition-colors hover:bg-[#ebc98d] ${focus}`;
const outlineButton = `inline-flex min-h-12 items-center justify-center gap-3 border border-white/45 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 ${focus}`;

export default function SanJoseRealEstateMediaPage() {
  return (
    <div className="min-h-screen bg-[#0d1523] text-[#f5f1e9] selection:bg-[#d8b576] selection:text-[#101827]">
      <a
        href="#main-content"
        className={`sr-only z-50 bg-[#d8b576] px-5 py-3 font-bold text-[#101827] focus:not-sr-only focus:absolute focus:left-4 focus:top-4 ${focus}`}
      >
        Skip to main content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sjrepStructuredData('San Jose', slug, description, faqs)).replace(
            /</g,
            '\u003c',
          ),
        }}
      />

      <header className="border-b border-white/15 bg-[#0d1523]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-5 px-5 py-5 lg:px-10">
          <a
            href={SJREP.site}
            aria-label="San Jose Real Estate Photos official website"
            className={`flex min-w-0 items-center gap-3 ${focus}`}
          >
            <Image
              src="/san-jose-real-estate-photos/logo.png"
              width={280}
              height={70}
              alt="San Jose Real Estate Photos"
              className="h-auto w-56 object-contain sm:w-64"
            />
          </a>
          <nav
            aria-label="Main navigation"
            className="flex w-full flex-wrap items-center gap-x-6 gap-y-3 text-sm md:w-auto"
          >
            <a href="#minidocs" className={`text-[#e4e8ee] hover:text-[#d8b576] ${focus}`}>
              MiniDocs
            </a>
            <a href="#services" className={`text-[#e4e8ee] hover:text-[#d8b576] ${focus}`}>
              Services
            </a>
            <a href="#work" className={`text-[#e4e8ee] hover:text-[#d8b576] ${focus}`}>
              The work
            </a>
            <a href="#planning" className={`text-[#e4e8ee] hover:text-[#d8b576] ${focus}`}>
              Plan your shoot
            </a>
            <a href={SJREP.booking} className={`${goldButton} ml-auto`}>
              Book a shoot <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="relative isolate overflow-hidden bg-[#131d2b]">
          <Image
            src="/san-jose-real-estate-photos/deodara-exterior.webp"
            alt="House and backyard lawn at twilight, 1941 Deodara Drive in Los Altos, photographed by San Jose Real Estate Photos"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,12,22,0.93)_0%,rgba(5,12,22,0.75)_42%,rgba(5,12,22,0.28)_100%)]" />
          <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-7 sm:pb-16 lg:px-10 lg:pb-20">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs text-[#d6dce5] sm:text-sm"
            >
              <Link href="/" className={focus}>
                NearbyBizFinder
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/businesses/" className={focus}>
                Businesses
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">San Jose real estate media</span>
            </nav>
            <div className="max-w-3xl pb-14 pt-20 sm:pt-24 lg:pt-28">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e5c58f] sm:text-sm">
                San Jose, California · Residential & commercial
              </p>
              <h1 className="mt-6 font-serif text-4xl leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                Professional Real Estate Photography{' '}
                <span className="text-[#e5c58f]">in San Jose</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#e1e5eb]">
                Showcase San Jose properties with real estate photography, video, drone imagery and
                3D tours. SJREP helps agents create clear listing media for homes and commercial
                spaces, from the first photo to launch day.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={SJREP.booking} className={goldButton}>
                  Plan & book your real estate shoot{' '}
                  <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                </a>
                <a href={SJREP.phoneHref} className={outlineButton}>
                  <Phone className="h-4 w-4" aria-hidden="true" /> 408-483-0688
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 border-t border-white/25 pt-5 text-xs text-[#e1e5eb] sm:flex-row sm:items-end sm:text-sm">
              <p>Photography / Film / Aerial / 3D / Floor plans / Marketing</p>
              <p className="sm:text-right">Portfolio image: 1941 Deodara Drive, Los Altos</p>
            </div>
          </div>
        </section>

        <section
          id="minidocs"
          aria-labelledby="minidocs-heading"
          className="scroll-mt-6 border-t border-[#d8b576]/35 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d8b576]">
                  MiniDocs
                </p>
                <h2
                  id="minidocs-heading"
                  className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl"
                >
                  A Story <span className="text-[#e5c58f]">Worth Remembering</span>
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-8 text-[#c6ceda]">
                <p>
                  A MiniDoc is a short property documentary that brings together the home, its
                  setting, the people connected to it and the agent presenting it. It gives viewers
                  more context than a standard walkthrough and helps make the listing memorable.
                </p>
                <p className="text-base leading-7">
                  Use a MiniDoc as a feature of your property launch across a dedicated website,
                  YouTube, social media and seller presentations. Thomas plans the story, interview
                  approach and filming time with you before the shoot.
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8">
              {SJREP_MINIDOCS.map((video) => (
                <figure key={video.youtubeId}>
                  <SjrepMinidocPlayer
                    video={video}
                    sizes="(max-width: 768px) 90vw, 45vw"
                    buttonClassName="bg-[#d8b576] text-[#101827]"
                    frameClassName="ring-1 ring-white/15 [&_button:focus-visible]:outline [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-[-6px] [&_button:focus-visible]:outline-[#d8b576]"
                  />
                  <figcaption className="mt-5">
                    <p className="font-serif text-2xl">
                      {video.title}
                      <span className="block font-sans text-xs uppercase tracking-[0.2em] text-[#d8b576]">
                        {video.place} · {video.length}
                      </span>
                    </p>
                    <p className="mt-3 leading-7 text-[#b9c3d2]">{video.summary}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-3 border-t border-white/20 pt-8 sm:flex-row sm:items-center">
              <a href={SJREP.minidocInquiry} className={goldButton}>
                <Mail className="h-4 w-4" aria-hidden="true" /> Ask about a MiniDoc
              </a>
              <a href={SJREP.booking} className={outlineButton}>
                Book a shoot <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={SJREP.phoneHref}
                className={`inline-flex items-center gap-2 px-2 py-3 text-sm text-[#e5c58f] sm:ml-auto ${focus}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> Or call Thomas: 408-483-0688
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e9] py-16 text-[#101827] sm:py-24 [&_a:focus-visible]:!outline-[#765723]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.23em] text-[#765723]">
                Listing presentation
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                One Clear Story Across Every Listing Format
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-[#45505f]">
              <p>
                Buyers may discover a San Jose property through listing photos, a short video or a
                shared property link. Coordinate photography, video, tours and marketing so every
                format presents the same home clearly and consistently.
              </p>
              <p>
                Start with the property, its audience and your launch goals. An occupied home may
                need a preparation plan, a condo may require access coordination, and a commercial
                property may need measured documentation or repeat visits. Confirm the scope before
                the appointment.
              </p>
              <a
                href={SJREP.pricing}
                className={`inline-flex items-center gap-3 text-sm font-bold text-[#765723] underline underline-offset-4 ${focus}`}
              >
                Explore current packages & pricing{' '}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-6 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d8b576]">
                  Real estate media services
                </p>
                <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                  Real Estate Media Services for Every Property
                </h2>
              </div>
              <p className="max-w-sm leading-7 text-[#b9c3d2]">
                Choose the media that fits your listing. Confirm package inclusions, optional
                upgrades and final file formats in the booking process.
              </p>
            </div>
            <div className="mt-12 border-t border-white/20">
              {services.map((service) => (
                <article
                  key={service.n}
                  className="grid gap-4 border-b border-white/20 py-7 sm:grid-cols-[3rem_1fr] lg:grid-cols-[3rem_0.95fr_1.25fr] lg:gap-8 lg:py-9"
                >
                  <span className="pt-1 text-sm text-[#d8b576]">{service.n}</span>
                  <div>
                    <service.icon
                      className="mb-3 h-5 w-5 text-[#d8b576]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <h3 className="font-serif text-2xl sm:text-3xl">{service.title}</h3>
                  </div>
                  <p className="leading-7 text-[#c6ceda] sm:col-start-2 lg:col-start-auto">
                    {service.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-6 bg-[#172234] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="grid gap-7 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d8b576]">
                  Portfolio
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                  Explore Real Estate Photography & Video Examples
                </h2>
              </div>
              <p className="max-w-lg leading-7 text-[#c6ceda] lg:ml-auto">
                View selected work from the SJREP portfolio to see how photography, video and aerial
                formats can work together. Property captions identify the example locations and help
                you understand the type of presentation created for each listing.
              </p>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
              <figure>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0d1523]">
                  <Image
                    src="/san-jose-real-estate-photos/deodara-exterior.webp"
                    alt="Twilight backyard and house at 1941 Deodara Drive, Los Altos"
                    fill
                    sizes="(max-width: 768px) 90vw, 53vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-serif text-xl">
                    1941 Deodara Drive, Los Altos{' '}
                    <span className="block font-sans text-xs text-[#b9c3d2]">
                      Property photography & film
                    </span>
                  </span>
                  <a
                    href="https://vimeo.com/1178113867"
                    className={`inline-flex items-center gap-2 text-sm font-semibold text-[#e5c58f] ${focus}`}
                  >
                    <Play className="h-4 w-4" aria-hidden="true" /> Watch the film{' '}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </figcaption>
              </figure>
              <figure>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0d1523]">
                  <Image
                    src="/san-jose-real-estate-photos/woodridge-exterior.webp"
                    alt="Aerial photograph of the house and swimming pool at 6 Woodridge Court"
                    fill
                    sizes="(max-width: 768px) 90vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-serif text-xl">
                    6 Woodridge Court{' '}
                    <span className="block font-sans text-xs text-[#b9c3d2]">
                      Aerial photography & property story tour
                    </span>
                  </span>
                  <a
                    href="https://vimeo.com/1170025772"
                    className={`inline-flex items-center gap-2 text-sm font-semibold text-[#e5c58f] ${focus}`}
                  >
                    <Play className="h-4 w-4" aria-hidden="true" /> Watch the tour{' '}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="mt-9 flex flex-col justify-between gap-5 border-t border-white/20 pt-6 sm:flex-row">
              <a
                href="#minidocs"
                className={`inline-flex items-center gap-3 text-sm font-semibold text-[#e5c58f] ${focus}`}
              >
                <Play className="h-4 w-4" aria-hidden="true" /> Watch the Whitehaven & Glenview
                MiniDocs <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={SJREP.portfolio}
                className={`inline-flex items-center gap-3 text-sm ${focus}`}
              >
                Explore the full portfolio <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section
          id="planning"
          className="scroll-mt-6 bg-[#f5f1e9] py-16 text-[#101827] sm:py-24 [&_a:focus-visible]:!outline-[#765723]"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.23em] text-[#765723]">
                  Local service area
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                  Real Estate Photography Across the South Bay
                </h2>
                <p className="mt-6 leading-7 text-[#45505f]">
                  SJREP serves the South Bay and Silicon Valley, including San Jose, Santa Clara and
                  Milpitas. Share the property address, preferred date and media requirements to
                  confirm availability, scheduling and any travel arrangements.
                </p>
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-[#765723]">
                  <Link
                    href={SJREP_ROUTES.santaClara}
                    className={`underline underline-offset-4 ${focus}`}
                  >
                    Santa Clara media
                  </Link>
                  <Link
                    href={SJREP_ROUTES.milpitas}
                    className={`underline underline-offset-4 ${focus}`}
                  >
                    Milpitas media
                  </Link>
                </div>
              </div>
              <div className="space-y-7">
                <article className="border-t border-[#c6c1b7] pt-6">
                  <h3 className="font-serif text-2xl">
                    Residential Photography: Plan Around the Home
                  </h3>
                  <p className="mt-3 leading-7 text-[#45505f]">
                    For a detached home, identify the exterior angles, living spaces and outdoor
                    features that help buyers understand the property. For a townhome or condo, plan
                    how to show connected floors and arrange access through gates, elevators or
                    shared corridors. Note occupied or private areas and obtain permission for
                    shared amenities.
                  </p>
                </article>
                <article className="border-t border-[#c6c1b7] pt-6">
                  <h3 className="font-serif text-2xl">
                    Commercial Property Photography: Define the Brief
                  </h3>
                  <p className="mt-3 leading-7 text-[#45505f]">
                    Commercial listings, owner records and construction progress reports require
                    different types of coverage. Projects may include interiors, exteriors, aerial
                    media, iGUIDE, measured plans and progress documentation. Explain the intended
                    audience, access limits, spaces to photograph and any repeat-visit requirements.
                  </p>
                </article>
                <article className="border-t border-[#c6c1b7] pt-6">
                  <h3 className="font-serif text-2xl">Choose a Package by Its Deliverables</h3>
                  <p className="mt-3 leading-7 text-[#45505f]">
                    Compare current packages against the property&apos;s size and the media you
                    need. List the photos, video versions, tour, floor plan and launch assets
                    required, then confirm each item in the order. Ask about optional edits and
                    formats before purchasing so the quote reflects your actual project.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d8b576]">
              Booking process
            </p>
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
              A Clear Process From Brief to Listing Launch
            </h2>
            <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  '01',
                  'Share the Property Brief',
                  'Send the property address, approximate size, residential or commercial use, preferred date and launch deadline. Include access details, occupied areas and the features you want the media to communicate.',
                ],
                [
                  '02',
                  'Prepare the Property',
                  'Clear surfaces, arrange rooms, check lighting and tidy exterior views before the appointment. Secure pets and follow the pre-shoot checklist. For video, review occupancy guidance and switch off fans and screens where requested.',
                ],
                [
                  '03',
                  'Capture the Agreed Media',
                  'Provide entry instructions and a reachable contact for shoot day. Have the property ready at the confirmed time and review access or weather changes with Thomas so the session follows the agreed scope.',
                ],
                [
                  '04',
                  'Review and Release the Files',
                  'Published terms state that photos are delivered by 2 p.m. the next business day, while video and 3D deliverables take two to three business days. Confirm timing for your selected products, review the files and check property details before launch.',
                ],
              ].map(([n, title, body]) => (
                <article key={n} className="border-t border-white/25 pt-6">
                  <span className="font-serif text-3xl text-[#d8b576]">{n}</span>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#c6ceda]">{body}</p>
                </article>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#e5c58f]">
              <a href={SJREP.checklist} className={`underline underline-offset-4 ${focus}`}>
                Read the pre-shoot checklist
              </a>
              <a href={SJREP.terms} className={`underline underline-offset-4 ${focus}`}>
                Review booking & delivery terms
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8b576]/35 bg-[#172234] py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d8b576]">
                Ongoing agent content
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Keep Your Real Estate Expertise in View
              </h2>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Social Launchpad for Ongoing Agent Content</h3>
              <p className="mt-4 leading-7 text-[#c6ceda]">
                Build a repeatable content routine around your knowledge as a real estate agent.
                Social Launchpad includes topic research, scripting, Riverside teleprompter
                recording, editing, captions and delivery. Optional distribution and batch filming
                can be discussed separately from individual property shoots.
              </p>
              <div className="mt-6 flex flex-wrap gap-5">
                <a href={SJREP.socialStrategyCall} className={goldButton}>
                  Book a content strategy call{' '}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={SJREP.socialLaunchpad}
                  className={`inline-flex items-center gap-2 text-sm text-[#e5c58f] ${focus}`}
                >
                  Explore Social Launchpad <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e9] py-16 text-[#101827] sm:py-24 [&_a:focus-visible]:!outline-[#765723] [&_summary:focus-visible]:!outline-[#765723]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:px-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.23em] text-[#765723]">FAQs</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Real Estate Photography FAQs
              </h2>
              <p className="mt-6 leading-7 text-[#45505f]">
                Have a specific property or launch brief? Review these answers and contact Thomas to
                confirm the right services, schedule and deliverables.
              </p>
              <a
                href={SJREP.emailHref}
                className={`mt-6 inline-flex items-center gap-3 font-semibold text-[#765723] ${focus}`}
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> Email your project details
              </a>
            </div>
            <div className="border-t border-[#c6c1b7]">
              {faqs.map((faq) => (
                <details key={faq.q} className="group border-b border-[#c6c1b7] py-6">
                  <summary
                    className={`flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold marker:content-none ${focus}`}
                  >
                    <span>{faq.q}</span>
                    <span
                      className="mt-0.5 shrink-0 text-[#765723] group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pt-4 leading-7 text-[#45505f]">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="max-w-4xl">
              <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
                Make Your Next <span className="text-[#d8b576]">Property Listing Stand Out</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c6ceda]">
                Choose Residential or Commercial in the booking flow, or contact Thomas with the
                property address, media requirements and target launch date. Confirm the package,
                schedule and deliverables before placing your order.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={SJREP.booking} className={goldButton}>
                  Book real estate media <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a href={SJREP.phoneHref} className={outlineButton}>
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call 408-483-0688
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/20 bg-[#09111d] py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 lg:grid-cols-[1.1fr_1.2fr_0.8fr] lg:px-10">
          <div>
            <p className="font-serif text-xl text-[#e5c58f]">San Jose Real Estate Photos</p>
            <a
              href={SJREP.gbp}
              className={`mt-4 inline-block text-sm underline underline-offset-4 ${focus}`}
            >
              View the Google business profile
            </a>
          </div>
          <div className="min-w-0 space-y-4 text-sm">
            <a href={SJREP.phoneHref} className={`flex w-fit items-center gap-3 ${focus}`}>
              <Phone className="h-4 w-4 shrink-0 text-[#d8b576]" aria-hidden="true" /> 408-483-0688
            </a>
            <a href={SJREP.emailHref} className={`flex min-w-0 items-start gap-3 ${focus}`}>
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#d8b576]" aria-hidden="true" />
              <span className="break-all">{SJREP.email}</span>
            </a>
            <a
              href={SJREP.site}
              className={`inline-flex items-center gap-2 text-[#e5c58f] ${focus}`}
            >
              Official website <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <nav aria-label="Related pages" className="space-y-3 text-sm">
            <Link href={SJREP_ROUTES.santaClara} className={`block ${focus}`}>
              Real estate media in Santa Clara
            </Link>
            <Link href={SJREP_ROUTES.milpitas} className={`block ${focus}`}>
              Real estate media in Milpitas
            </Link>
            <Link href="/businesses/" className={`block text-[#b9c3d2] ${focus}`}>
              Browse local businesses
            </Link>
            <div className="flex gap-5 pt-2 text-xs text-[#b9c3d2]">
              <a href={SJREP.terms} className={focus}>
                Terms
              </a>
              <a href={SJREP.privacy} className={focus}>
                Privacy
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
