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
  'Plan your Milpitas listing with HDR photos, video, drone, 3D tours, floor plans and marketing from San Jose Real Estate Photos. Book residential or commercial media.';

export const metadata = sjrepMetadata(
  'Milpitas',
  slug,
  description,
  '/san-jose-real-estate-photos/woodridge-exterior.webp',
);

const services = [
  {
    icon: Camera,
    title: 'HDR photography',
    body: 'Give buyers a clear view of the property through interior and exterior listing photographs. Plan the essential rooms, outdoor spaces and details in advance, so the shoot reflects the spaces you need to explain.',
  },
  {
    icon: Film,
    title: 'Property films & story tours',
    body: 'Use a cinematic property film to introduce the home in motion, or discuss an agent-guided story tour. Choose the story, featured spaces and on-camera involvement before filming, with the intended viewing channel in mind.',
  },
  {
    icon: Plane,
    title: 'Drone photos & video',
    body: 'Add an aerial perspective when it helps communicate the property and its surroundings. Photography and video clips are available; the final flight plan depends on the address, conditions, permissions and safe operation on the day.',
  },
  {
    icon: ScanLine,
    title: '3D tours & floor plans',
    body: 'Help viewers explore the layout through Zillow 3D and interactive plans. Discuss an iGUIDE upgrade when measured plans and dimensions matter. Confirm the selected tour system, deliverables and measurement needs when you order.',
  },
  {
    icon: Monitor,
    title: 'Custom property websites',
    body: 'Bring photographs, films and property information into a dedicated listing destination. Decide which assets and contact details belong on the site, then use the property link consistently across your launch materials and conversations.',
  },
  {
    icon: Smartphone,
    title: 'Reels & agent content',
    body: 'Create vertical social reels, agent introductions and property-focused content for your launch. Discuss who will appear, the message and the intended platforms, so the filming plan accounts for both the property and your presentation.',
  },
  {
    icon: Sparkles,
    title: 'Virtual presentation edits',
    body: 'Virtual twilight, staging and decluttering can support selected images. Agree which photographs need edits and how the finished versions will be used. Keep original images available and identify virtual changes appropriately wherever the media is published.',
  },
  {
    icon: Layers3,
    title: 'Listing launch marketing',
    body: 'Extend the shoot into a coordinated launch with listing-marketing support and neighborhood features. Review the actual materials in your chosen package and supply accurate property information, agent branding and the publication schedule before production begins.',
  },
];

const faqs: SjrepFaq[] = [
  {
    q: 'Can I book a property shoot in Milpitas?',
    a: 'Yes. Milpitas is part of the confirmed service area. San Jose Real Estate Photos works around San Jose with an approximately 10-mile service area and flexibility. Share the exact property address, access arrangements and preferred date so Thomas can confirm the visit and the services you need.',
  },
  {
    q: 'What does a MiniDoc add to a Milpitas listing launch?',
    a: 'A MiniDoc turns the listing into a short documentary, with the home, its surroundings and the people behind it on camera. It gives your launch a story to share on the property website, YouTube and social channels. Send an inquiry with the address and launch date so Thomas can plan the interviews, filming time and delivery with you.',
  },
  {
    q: 'Should I book individual services or a launch package?',
    a: 'Start with your publication plan. Individual services suit a defined requirement, while a package can coordinate several listing assets. The current lineup includes Launchpad Lite, Launchpad Essential, Social Agent and Launchpad Pro. Compare the live inclusions, property-size selection and optional upgrades on the official pricing page before choosing.',
  },
  {
    q: 'What is the difference between Zillow 3D and iGUIDE?',
    a: 'The residential service page lists Zillow 3D tours and interactive floor plans, with Zillow 3D included in every residential package. iGUIDE is an upgrade with measured plans and dimensions. Tell Thomas what you need to show or measure, then confirm the system and final files in your order.',
  },
  {
    q: 'How soon will I receive the photographs and other media?',
    a: 'The published terms state photograph delivery by 2pm the next business day, with video and 3D delivery within 2–3 business days. Plan your launch around the relevant deliverables and confirm the schedule when booking. Ask about rush options before assuming every asset will arrive with the photographs.',
  },
  {
    q: 'What should I prepare before the appointment?',
    a: 'Follow the official pre-shoot checklist: declutter rooms, prepare lighting, clear exterior areas, secure pets and arrange access in advance. For video, the checklist calls for occupants to be off-site and fans and screens to be off. Share entry instructions and any building or property restrictions before the shoot.',
  },
  {
    q: 'Can you photograph a commercial property or document a project?',
    a: 'Yes. The commercial offering includes interior and exterior photography, aerial coverage, commercial iGUIDE, measured plans and construction-progress documentation. Custom and recurring work can be discussed. Use the Commercial path in the booking system and explain the site, intended audience, access limits and documentation schedule.',
  },
  {
    q: 'Is Social Launchpad included in a property shoot?',
    a: 'Social Launchpad is a separate ongoing agent-content option. It includes topic research, scripting, teleprompter recording, editing, captions and delivery. Optional distribution and batch filming are separate services. A listing shoot may include selected reels or agent content, so confirm those deliverables independently from an ongoing content plan.',
  },
  {
    q: 'What should I confirm about drone work, changes and usage rights?',
    a: 'Confirm aerial suitability for the exact address, along with access, weather considerations and the shoot scope. The published terms describe cancellation and rescheduling requirements, potential additional charges and licensed client usage after payment. Read the current terms before ordering, and discuss any unusual usage or scheduling need directly with Thomas.',
  },
];

const comparison = [
  {
    number: '01',
    label: 'Show the property',
    assets: 'HDR photos + a property film',
    body: 'Use still images for an easy first look and a film when movement helps explain the spaces. Specify the features you want to feature rather than adding every available format automatically.',
  },
  {
    number: '02',
    label: 'Explain the layout',
    assets: '3D tour + the right floor plan',
    body: 'Give viewers a way to investigate how rooms connect. If dimensions are important to your purpose, discuss measured plans and the iGUIDE option before selecting a tour or package.',
  },
  {
    number: '03',
    label: 'Prepare the launch',
    assets: 'Property website + reels + marketing',
    body: 'Choose a destination for the complete listing and supporting content for the channels you will use. Agree on the launch sequence, agent details and required materials before the shoot.',
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
                Real estate media.
                <br />
                <span className="text-[#a44730]">Ready for your Milpitas launch.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#526459]">
                A useful listing starts with a clear plan. Bring photography, films, aerials, 3D
                tours, floor plans and marketing together around the property you are presenting and
                the audience you want to reach.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={SJREP.booking}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#a44730] px-6 py-3.5 font-bold text-white"
                >
                  Plan & book your shoot <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={SJREP.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#203f34]/35 px-6 py-3.5 font-bold"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Talk to Thomas
                </a>
              </div>
              <p className="mt-5 text-sm leading-6 text-[#526459]">
                Residential listings, commercial spaces and agent content.
                <br />
                Book directly with San Jose Real Estate Photos.
              </p>
              <a href="#choose" className="mt-9 inline-flex items-center gap-3 text-sm font-bold">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-[#203f34]/25">
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </span>
                Start with what you need to show
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
              <aside className="relative mt-6 rounded-[2rem] bg-[#203f34] p-7 text-[#f8f4eb] lg:-ml-12 lg:mt-7 lg:mr-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6bf9d]">
                  Your starting brief
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    ['01', 'The address', 'Property type, size and access.'],
                    ['02', 'The audience', 'Buyers, tenants or your next client.'],
                    ['03', 'The launch', 'Channels, deliverables and timing.'],
                  ].map(([number, title, body]) => (
                    <div key={number}>
                      <p className="font-serif text-3xl text-[#e6bf9d]">{number}</p>
                      <h2 className="mt-2 font-bold">{title}</h2>
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
                  Featured: MiniDocs
                </p>
                <h2
                  id="minidocs-heading"
                  className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl"
                >
                  Give your listing
                  <br />
                  <span className="text-[#e6bf9d]">a story worth sharing.</span>
                </h2>
              </div>
              <p className="leading-8 text-[#d4ded5]">
                A MiniDoc is a short documentary about the listing. It goes beyond the walkthrough
                to show the home, the area around it and the people behind the sale, from a
                long-time owner to the agent preparing the launch.
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
                <Mail className="h-4 w-4" aria-hidden="true" /> Ask about a MiniDoc
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
                One property. Several ways to understand it.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#526459]">
                The right mix follows your brief. These combinations are starting points for a
                conversation, with the final inclusions confirmed in your order.
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
                Build a complete view of the listing.
              </h2>
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
                  Look at the spaces.
                  <br />
                  Then picture your own brief.
                </h2>
              </div>
              <div className="lg:self-end">
                <p className="leading-7 text-[#d4ded5]">
                  Explore genuine photographs from the business portfolio, then discuss the style
                  and coverage your Milpitas property needs. Captions identify the published
                  project; these examples illustrate the work available across the wider area.
                </p>
                <a
                  href={SJREP.portfolio}
                  className="mt-5 inline-flex items-center gap-2 font-bold text-[#e6bf9d]"
                >
                  More photographs, films & reels{' '}
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
                Make the home easy to explore.
              </h2>
              <p className="mt-5 leading-8 text-[#526459]">
                Start with the rooms, exterior features and layout that need to be understood. For a
                home, condo or townhome, share access instructions and tell Thomas about occupied
                rooms, shared areas or spaces that must be included. Add agent content or virtual
                edits where they serve the launch.
              </p>
              <p className="mt-4 leading-8 text-[#526459]">
                Choose from Launchpad Lite, Launchpad Essential, Social Agent and Launchpad Pro, or
                discuss individual services. Package scope and pricing vary with the property; check
                the current selection and upgrades before booking.
              </p>
              <a href={SJREP.booking} className="mt-6 inline-flex items-center gap-2 font-bold">
                Book residential media <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
            <article className="rounded-[2.5rem] bg-[#eaece3] p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a44730]">
                Commercial
              </p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
                Document the space and its purpose.
              </h2>
              <p className="mt-5 leading-8 text-[#526459]">
                Commercial media supports brokers, owners, builders, contractors and asset managers.
                Interior and exterior photography, aerial coverage, commercial iGUIDE and measured
                plans can be discussed around the site’s use and the information your audience
                needs.
              </p>
              <p className="mt-4 leading-8 text-[#526459]">
                For construction progress or recurring documentation, define the areas to capture,
                visit schedule and project contact. Supply site restrictions and access requirements
                early. The booking system has a separate Commercial path for this work.
              </p>
              <a href={SJREP.booking} className="mt-6 inline-flex items-center gap-2 font-bold">
                Discuss commercial coverage <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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
                Give every finished asset a place to go.
              </h2>
              <p className="mt-5 leading-8 text-[#4f5548]">
                Photographs, video, tours and a property website work best with a publication plan.
                Bring your listing details, agent contact information and brand assets, then decide
                which channels need complete property coverage and which need a short introduction.
              </p>
              <p className="mt-4 leading-8 text-[#4f5548]">
                Discuss listing-launch marketing, neighborhood features and the reels or agent
                introductions you want produced. Keep the deliverable list specific: the selected
                property-shoot assets should match your launch date and the materials you will
                actually publish.
              </p>
            </div>
            <aside className="bg-[#a44730] p-8 text-white sm:p-10 [&_a:focus-visible]:!outline-[#f8f4eb]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f4dccc]">
                An ongoing option
              </p>
              <h3 className="mt-4 font-serif text-3xl tracking-tight">Social Launchpad</h3>
              <p className="mt-5 leading-8 text-[#f8e8dc]">
                For an agent who needs content beyond a single listing, Social Launchpad offers
                topic research, scripting, teleprompter recording, editing, captions and delivery.
                Review this as a separate ongoing plan. Optional distribution and batch filming have
                their own scope.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4 text-sm font-bold">
                <a href={SJREP.socialLaunchpad} className="inline-flex items-center gap-2">
                  Explore the program <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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
                Plan the appointment
              </p>
              <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
                A little preparation makes the brief clearer.
              </h2>
              <p className="mt-5 leading-8 text-[#526459]">
                Set the shoot date with the finished-media schedule in mind. Confirm the property
                and your selected services before coordinating cleaners, occupants, access and the
                listing launch.
              </p>
              <a
                href={SJREP.checklist}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#203f34]/30 px-5 py-3 text-sm font-bold"
              >
                Read the pre-shoot checklist <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="space-y-7">
              {[
                [
                  '01',
                  'Confirm the brief and access',
                  'Send the address, property size, selected services and preferred date. Identify entry instructions, parking, building rules and any rooms or exterior features that must be captured. For agent video, agree on the message and on-camera plan.',
                ],
                [
                  '02',
                  'Prepare the rooms and exterior',
                  'Use the official checklist to declutter, arrange lighting, remove distractions and clear the exterior. Secure pets. The video checklist asks for occupants to be off-site and fans and screens to be off; organize those details ahead of the visit.',
                ],
                [
                  '03',
                  'Allow time for the complete delivery',
                  'The published terms specify photographs by 2pm the next business day and video/3D within 2–3 business days. Confirm your deadline and any rush request when booking. Review the terms for payment, changes and client usage before ordering.',
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
              <h2 className="mt-3 font-serif text-3xl">Share the address. Confirm the plan.</h2>
              <p className="mt-4 leading-7 text-[#526459]">
                Plan your Milpitas shoot with Thomas. Service also covers San Jose and Santa Clara,
                with a flexible area of approximately 10 miles around San Jose. Send the property’s
                exact address to discuss scheduling, travel and any site-specific requirements,
                especially when aerial work or multiple visits are part of the brief.
              </p>
            </div>
            <a
              href={SJREP.emailHref}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#203f34] px-6 py-3.5 font-bold text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Send your property brief
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-16 sm:pb-20 lg:px-8">
          <div className="mb-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a44730]">
              Before you book
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
              Milpitas real estate media FAQ
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
                Bring the property.
                <br />
                Let’s plan the media.
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-[#d4ded5]">
                Book your Milpitas residential or commercial shoot directly, or contact Thomas to
                work through the services, access and launch schedule.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={SJREP.booking}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#edcfb8] px-6 py-4 font-bold text-[#203f34]"
              >
                Book a property shoot <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
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
