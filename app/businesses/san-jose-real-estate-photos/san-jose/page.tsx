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
  Check,
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
  'San Jose real estate photography, cinematic video, drone, 3D tours, floor plans and listing marketing. Plan a residential or commercial shoot with Thomas.';

const pageMetadata = sjrepMetadata(
  'San Jose',
  slug,
  description,
  '/san-jose-real-estate-photos/deodara-exterior.webp',
);
const pageTitle = 'San Jose Real Estate Photography, Video & 3D | SJREP';
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
    label: 'The first impression',
    body: 'Give buyers a clear first look at the property, from the approach to its most important rooms. HDR photography brings interior and exterior views into a coordinated listing set. Share the features that deserve attention before the shoot: a renovated kitchen, a flexible room, outdoor living or an unusual connection between spaces.',
  },
  {
    n: '02',
    icon: Film,
    title: 'Cinematic property video',
    label: 'The story in motion',
    body: 'A property film connects the spaces that still images introduce. Choose a cinematic tour for atmosphere and movement, or discuss an agent-guided story tour when your explanation adds context. Plan the route, key features and any spoken introduction ahead of time so the finished film has a clear narrative.',
  },
  {
    n: '03',
    icon: Plane,
    title: 'Drone photography & video',
    label: 'The wider perspective',
    body: 'Aerial stills and clips can explain a lot, exterior layout or the relationship between a building and its surroundings. Discuss the views you need when booking. Flight feasibility depends on the specific address, airspace, weather and safe operating conditions; an aerial request should always include a practical alternative if flight is unavailable.',
  },
  {
    n: '04',
    icon: ScanLine,
    title: '3D tours & floor plans',
    label: 'The space, understood',
    body: 'Let viewers explore the layout after the first impression. The residential service includes Zillow 3D tours with its packages and offers iGUIDE upgrades with measured plans and dimensions. Compare the tour format, measurement needs and intended use before selecting an option, especially for a multi-level property or commercial space.',
  },
  {
    n: '05',
    icon: LayoutTemplate,
    title: 'Custom property websites',
    label: 'One destination for the listing',
    body: 'Bring photography, film, tours and property information into a dedicated presentation. A property website gives your campaign a destination to share in emails, social posts and printed material. Provide the approved description, feature list and agent contact details so the page tells the same story as the rest of your launch.',
  },
  {
    n: '06',
    icon: Smartphone,
    title: 'Social reels & agent content',
    label: 'A story made for the feed',
    body: 'Vertical property reels and agent introductions serve a different viewing experience from a full listing film. Decide which features lead the reel, who will appear on camera and where it will be posted. Agent-focused content can introduce your approach as well as the property; confirm each format and deliverable in the booking.',
  },
  {
    n: '07',
    icon: WandSparkles,
    title: 'Virtual presentation',
    label: 'Help viewers see the possibilities',
    body: 'Virtual staging, decluttering and twilight edits can support a presentation when an empty room or a daytime exterior needs another treatment. Agree on the selected images and the intended changes first. Keep original photographs available and clearly identify altered imagery wherever your listing platform or marketing use requires it.',
  },
  {
    n: '08',
    icon: Megaphone,
    title: 'Listing-launch marketing',
    label: 'Put the assets to work',
    body: 'A strong media set needs a plan for release. Discuss neighborhood features, launch materials and marketing support alongside the shoot so you know which assets are included and which are add-ons. Match the work to your channels and timeline, with accurate property information and a consistent way for interested viewers to contact you.',
  },
];

const faqs: SjrepFaq[] = [
  {
    q: 'What is a MiniDoc, and how is it different from a listing film?',
    a: 'A listing film shows the property in motion. A MiniDoc, or listing mini-documentary, adds the story: the seller, the agent, the neighborhood and the reasons the home matters, edited into a short documentary. The published Whitehaven and Glenview examples run about six and eleven minutes. MiniDocs are inquiry-only: plan the story, the people on camera and the filming time with Thomas first, with delivery timing agreed at booking.',
  },
  {
    q: 'What should I book for a San Jose listing?',
    a: 'Start with the property size, type and launch date, then choose the media that explains it best. Photography introduces the rooms; video connects them; a 3D tour and floor plan help viewers understand the layout. Add aerial coverage, a property website or social content for a specific marketing purpose. Confirm package inclusions and upgrades in the current booking flow.',
  },
  {
    q: 'Are Zillow 3D and iGUIDE the same service?',
    a: 'They are separate options. The official residential page lists Zillow 3D with every package and offers iGUIDE upgrades with measured plans and dimensions. Tell Thomas whether you need an interactive walkthrough, dimensional information or both. Confirm the selected system, deliverable format and any measurement requirements before booking rather than assuming all tours include the same plans.',
  },
  {
    q: 'Can you photograph occupied homes, condos and commercial spaces?',
    a: 'The business offers residential and commercial media. For an occupied home, arrange the rooms and clear the shooting route before arrival. For a condo, provide building access, parking and any shared-area permissions. Commercial projects should identify the spaces to cover, hours of access, people who may appear and whether ongoing construction or documentation is involved.',
  },
  {
    q: 'Is drone coverage possible at every San Jose address?',
    a: 'No address should be treated as a guaranteed flight. Aerial work depends on airspace, weather, visibility, access and safe operating conditions. Send the exact property address and describe the shots you want before the appointment. Discuss ground-level exterior coverage or another presentation option if the requested aerial footage cannot be captured.',
  },
  {
    q: 'When should I expect the finished files?',
    a: 'The published terms state photo delivery by 2pm the next business day and video or 3D delivery within two to three business days. Confirm your selected products and intended launch date with Thomas, particularly for combined orders, special edits or rush requests. Allow time to review the media and complete your listing materials before publication.',
  },
  {
    q: 'How do I prepare for a video shoot or an agent introduction?',
    a: 'Prepare the whole filming route, switch off fans and screens, and arrange for occupants to be off-site for property video as directed by the checklist. For an agent segment, agree on the message, length and location in advance. Rehearse the key points without trying to describe every room; let the property footage carry the visual detail.',
  },
  {
    q: 'Does listing media include ongoing social management?',
    a: 'Recurring agent content is a distinct Social Launchpad service. It includes topic research, scripting, Riverside teleprompter recording, editing, captions and delivery. Optional distribution and batch filming are separate options. Discuss the ongoing plan through the strategy-call path; do not assume that a one-property shoot includes a monthly content program or posting service.',
  },
  {
    q: 'How far from San Jose can I book, and what if plans change?',
    a: 'Serving the South Bay and Silicon Valley, including San Jose, Santa Clara and Milpitas. Send the property address to confirm scheduling and any travel requirements. If your property or schedule changes, contact Thomas promptly and review the official terms for cancellation, rescheduling, access and return-visit policies before relying on a new appointment.',
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
              <h1 className="mt-6 font-serif text-[3.4rem] leading-[1.04] tracking-[-0.035em] sm:text-7xl lg:text-[5.6rem]">
                Every property
                <br />
                has a story.
                <br />
                <span className="text-[#e5c58f]">Make yours visible.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#e1e5eb]">
                Real estate photography, cinematic video, drone, 3D tours and marketing for San Jose
                listings. Build a complete presentation with Thomas at San Jose Real Estate Photos,
                from the first image to the launch.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={SJREP.booking} className={goldButton}>
                  Plan & book your shoot <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
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
                  Featured offer · MiniDocs
                </p>
                <h2
                  id="minidocs-heading"
                  className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl"
                >
                  The story behind
                  <br />
                  <span className="text-[#e5c58f]">the listing.</span>
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-8 text-[#c6ceda]">
                <p>
                  A MiniDoc is a short listing documentary that goes beyond the walkthrough. It
                  brings together the home, its neighborhood, the people connected to it and the
                  agent bringing it to market, so viewers remember the property and the story behind
                  it.
                </p>
                <p className="text-base leading-7">
                  Use it as the centerpiece of a launch: on the property website, YouTube, social
                  channels and in seller conversations. The story, interviews and filming time are
                  planned with Thomas before the shoot.
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
                A complete listing presentation
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Make the space clear.
                <br />
                Make the launch coherent.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-[#45505f]">
              <p>
                A buyer may find your San Jose listing through a photo gallery, a short reel or a
                shared property link. Each should lead to a useful understanding of the same home.
                Plan the photography, motion, walkthrough and marketing together so the features you
                highlight carry through every format.
              </p>
              <p>
                Start with the property and the audience. An occupied home needs a preparation plan;
                a condo needs access coordination; a commercial space may need measured
                documentation and repeat visits. Thomas offers media for these different briefs,
                with the scope agreed before the appointment.
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
                  The media collection
                </p>
                <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                  Eight ways to tell
                  <br />
                  the property’s story.
                </h2>
              </div>
              <p className="max-w-sm leading-7 text-[#b9c3d2]">
                Choose the mix around your listing. Confirm the included products, optional upgrades
                and final formats in your order.
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
                    <div className="mb-3 flex items-center gap-3 text-[#d8b576]">
                      <service.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
                        {service.label}
                      </p>
                    </div>
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
                  Portfolio / Still & moving
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                  See how the formats
                  <br />
                  work together.
                </h2>
              </div>
              <p className="max-w-lg leading-7 text-[#c6ceda] lg:ml-auto">
                Explore genuine work from the business’s portfolio. These examples show its visual
                approach; the captions identify the source properties so you can compare photography
                and film with a clear reference.
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
                    1941 Deodara Drive{' '}
                    <span className="block font-sans text-xs text-[#b9c3d2]">
                      Los Altos · Portfolio photography & film
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
                      Portfolio photography & story tour
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
                  The San Jose shoot brief
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                  Good planning
                  <br />
                  starts before
                  <br />
                  the camera arrives.
                </h2>
                <p className="mt-6 leading-7 text-[#45505f]">
                  Serving the South Bay and Silicon Valley, including San Jose, Santa Clara and
                  Milpitas. Send the property address to confirm scheduling and any travel
                  requirements.
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
                  <h3 className="font-serif text-2xl">Residential: match the media to the home</h3>
                  <p className="mt-3 leading-7 text-[#45505f]">
                    For a detached home, identify the exterior angles, living spaces and outdoor
                    features that explain daily use. For a townhome or condo, show how floors
                    connect and arrange entry through gates, elevators or shared corridors. Tell
                    Thomas which areas are private, occupied or excluded, and secure approval for
                    shared amenities before putting them in the shot list.
                  </p>
                </article>
                <article className="border-t border-[#c6c1b7] pt-6">
                  <h3 className="font-serif text-2xl">Commercial: define the purpose first</h3>
                  <p className="mt-3 leading-7 text-[#45505f]">
                    A broker’s listing, an owner’s property record and a contractor’s progress
                    report need different coverage. Commercial services include interiors,
                    exteriors, aerial media, iGUIDE, measured plans and construction documentation.
                    Specify the audience, usable rooms, operational restrictions and repeat-visit
                    needs; confirm whether the output is for marketing, comparison over time or
                    another agreed purpose.
                  </p>
                </article>
                <article className="border-t border-[#c6c1b7] pt-6">
                  <h3 className="font-serif text-2xl">Choose a package by deliverables</h3>
                  <p className="mt-3 leading-7 text-[#45505f]">
                    Use the current pricing page to compare packages for the property’s size. Write
                    down the photographs, tour, plan, video versions and launch assets you need,
                    then check them against the order. Ask about optional edits and formats before
                    purchasing. A defined media list makes a quote more useful than choosing a
                    package name alone.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d8b576]">
              From brief to launch
            </p>
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
              Four steps. One considered presentation.
            </h2>
            <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  '01',
                  'Share the brief',
                  'Send the address, approximate size, residential or commercial use, preferred date and launch deadline. Describe access, occupied areas and the features you want to communicate.',
                ],
                [
                  '02',
                  'Prepare the property',
                  'Declutter surfaces, arrange rooms, check lighting, clear exterior views and secure pets. For video, follow the off-site occupancy guidance and turn off fans and screens. Use the official checklist.',
                ],
                [
                  '03',
                  'Capture the complete scope',
                  'Provide entry instructions and a reachable contact. Have the property ready at the agreed time. Review any access or weather changes with Thomas so the shoot can follow the confirmed scope.',
                ],
                [
                  '04',
                  'Review & release',
                  'Published terms state photos by 2pm the next business day, with video and 3D within two to three business days. Confirm the schedule, review the deliverables and check property information before launch.',
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
                Beyond one listing
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Keep your expertise
                <br />
                in the conversation.
              </h2>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Social Launchpad for ongoing agent content</h3>
              <p className="mt-4 leading-7 text-[#c6ceda]">
                Build a recurring content routine around your knowledge as an agent. Social
                Launchpad covers topic research, scripting, Riverside teleprompter recording,
                editing, captions and delivery. Optional distribution and batch filming can be
                discussed separately. This is an ongoing content program, with its own scope and
                booking conversation alongside your property shoots.
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
              <p className="text-xs font-bold uppercase tracking-[0.23em] text-[#765723]">
                Before you book
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Useful answers
                <br />
                for your next
                <br />
                San Jose shoot.
              </h2>
              <p className="mt-6 leading-7 text-[#45505f]">
                Have a specific brief? Talk through it with Thomas before finalizing the order.
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
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d8b576]">
                Your next listing starts here
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
                Let’s make the property
                <br />
                <span className="text-[#d8b576]">worth a closer look.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c6ceda]">
                Choose Residential or Commercial in the official booking flow, or contact Thomas
                with your address, media needs and target date.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={SJREP.booking} className={goldButton}>
                  Book real estate media <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a href={SJREP.phoneHref} className={outlineButton}>
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call 408-483-0688
                </a>
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm text-[#b9c3d2]">
                <Check className="h-4 w-4 text-[#d8b576]" aria-hidden="true" /> Booking and project
                arrangements are handled directly by the business.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/20 bg-[#09111d] py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 lg:grid-cols-[1.1fr_1.2fr_0.8fr] lg:px-10">
          <div>
            <p className="font-serif text-xl text-[#e5c58f]">San Jose Real Estate Photos</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[#b9c3d2]">
              Property photography, film, tours and marketing for San Jose and nearby communities.
            </p>
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
