import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Check, Plus } from 'lucide-react';
import {
  SJREP,
  SJREP_ROUTES,
  type SjrepFaq,
  sjrepMetadata,
  sjrepStructuredData,
} from '@/lib/san-jose-real-estate-photos';

const slug = 'real-estate-media-santa-clara-ca';
const description =
  'Real estate photography, films, drone, 3D tours, floor plans and listing marketing in Santa Clara, CA. Plan residential or commercial media with Thomas.';

export const metadata = sjrepMetadata(
  'Santa Clara',
  slug,
  description,
  '/san-jose-real-estate-photos/san-miguel-02.webp',
);

const services = [
  {
    title: 'HDR photography',
    use: 'The complete visual record',
    text: 'Build the listing around interior and exterior photographs that show room connections, finishes and usable outdoor space. Identify the priority rooms before the shoot so the photo sequence introduces the property clearly, from its approach to its most useful details.',
  },
  {
    title: 'Cinematic property films',
    use: 'Movement, scale and atmosphere',
    text: 'A property film gives viewers a guided progression through the home or commercial space. Choose a cinematic tour or discuss an agent-guided story tour. Share the features to explain, your preferred speaking role and where the finished film will be published.',
  },
  {
    title: 'Drone photos & video',
    use: 'A wider view of the property',
    text: 'Aerial images can connect the building, grounds and surrounding context in a way ground-level coverage cannot. Ask for stills, clips or both. Discuss flight suitability during booking; weather, airspace and safe operating conditions affect whether aerial capture can proceed.',
  },
  {
    title: 'Interactive 3D tours',
    use: 'Explore before the appointment',
    text: 'Zillow 3D tours help prospective visitors move through the layout remotely. The residential service page lists Zillow 3D with every package, while iGUIDE is an upgrade. Confirm the selected tour platform, hosting and deliverables so the experience fits your listing channels.',
  },
  {
    title: 'Floor plans & dimensions',
    use: 'Make the layout legible',
    text: 'Floor plans help viewers understand room relationships that photographs alone may leave unclear. Zillow interactive plans and iGUIDE measured plans serve different needs. Explain whether your priority is buyer orientation, documented dimensions or commercial space planning, then confirm the appropriate plan scope.',
  },
  {
    title: 'Custom property websites',
    use: 'One place for the presentation',
    text: 'Bring photography, film, tour links and property information into a dedicated listing destination. Prepare the address, approved description, agent details and contact path before launch. Discuss branded or other required versions and how the website will connect with your existing marketing.',
  },
  {
    title: 'Social reels & agent content',
    use: 'Introduce the listing in a feed',
    text: 'Vertical reels and agent introductions give a property a format suited to social viewing. Plan the opening idea, features and any on-camera delivery before filming. Confirm orientation and edit scope; a property reel, agent introduction and longer guided tour are separate creative choices.',
  },
  {
    title: 'Virtual presentation edits',
    use: 'Show a considered possibility',
    text: 'Virtual staging, decluttering and twilight edits offer different ways to present a photograph. Select the images and purpose with Thomas, and keep edited versions identifiable when publishing. Digital changes should support a clear presentation without obscuring the property’s actual condition or included features.',
  },
  {
    title: 'Listing-launch marketing',
    use: 'Put the assets to work',
    text: 'Neighborhood features and listing marketing support can extend the shoot into a more coordinated launch. Share your audience, announcement date and intended channels. Confirm which launch assets, copy or marketing add-ons belong in your order and which publishing steps your team will handle.',
  },
];

const faqs: SjrepFaq[] = [
  {
    q: 'Can I book photography alone, or do I need a package?',
    a: 'The official pricing page lists individual services as well as residential packages. Photography alone may suit a simple brief; a package can combine the media needed for a broader launch. Send the property size and requested deliverables to Thomas, and review the current order before choosing.',
  },
  {
    q: 'Is Santa Clara inside the service area?',
    a: 'Santa Clara is part of the business’s stated coverage, alongside San Jose and Milpitas. The approximately 10-mile radius around San Jose is a flexible planning estimate. Share the exact shoot address so Thomas can confirm scheduling, access and any travel considerations for that property.',
  },
  {
    q: 'How should I arrange a shoot in an occupied home or shared building?',
    a: 'Agree on access with the occupant and arrange keys, parking, entry codes and any building permissions before the appointment. Tell Thomas about lifts, reserved amenities and restricted areas. The published checklist asks occupants to be off-site for video shoots, so plan a suitable window with everyone involved.',
  },
  {
    q: 'What is the difference between Zillow 3D and iGUIDE?',
    a: 'The residential offering lists Zillow 3D and interactive floor plans, with iGUIDE available as an upgrade for measured plans and dimensions. Choose according to how viewers need to explore or understand the space. Confirm the current platform features, measurement scope and hosting terms directly when ordering.',
  },
  {
    q: 'When will the finished photos, video and 3D tour be ready?',
    a: 'The published terms state photo delivery by 2pm the next business day and video or 3D delivery within 2–3 business days. Discuss your go-live date before booking and confirm timing for your chosen edits and extras. Ask about rush options if the usual schedule does not fit.',
  },
  {
    q: 'Do you photograph commercial properties as well?',
    a: 'Yes. Commercial services include interior and exterior photography, aerial coverage, iGUIDE, measured plans and construction progress documentation. Use the Commercial booking path or discuss a custom brief with Thomas. Specify the spaces, intended audience, access restrictions and whether the work is one visit or recurring documentation.',
  },
  {
    q: 'Can I add drone coverage or virtual staging after selecting a package?',
    a: 'Discuss add-ons before the shoot so the capture plan and quote include the right inputs. Aerial work depends on operating conditions, and virtual edits need suitable source photographs. Confirm the selected images, edit purpose and delivery date; availability or inclusion should not be assumed from a package name.',
  },
  {
    q: 'Who handles publishing and usage of the finished media?',
    a: 'Confirm the handoff and publishing responsibilities in your order, especially for property websites and marketing add-ons. The published terms retain copyright with the provider and license client usage after payment. Read the current terms for your intended use and ask about uses beyond the agreed listing or project scope.',
  },
];

const button =
  'inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 text-sm font-bold transition-colors';
const eyebrow = 'text-xs font-bold uppercase tracking-[0.2em] text-[#136e69]';
const body = 'text-base leading-7 text-[#4d5c64]';

export default function SantaClaraRealEstateMediaPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans text-[#182c36] selection:bg-[#c9e4de] [&_a]:focus-visible:outline [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-[#14756f] [&_summary]:focus-visible:outline [&_summary]:focus-visible:outline-2 [&_summary]:focus-visible:outline-offset-4 [&_summary]:focus-visible:outline-[#14756f]">
      <a
        href="#main-content"
        className="sr-only z-50 bg-white px-5 py-4 font-bold focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            sjrepStructuredData('Santa Clara', slug, description, faqs),
          ).replace(/</g, '\\u003c'),
        }}
      />

      <header className="border-b border-[#d8dfdb] bg-[#faf9f5]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-5 px-5 py-5 sm:px-8">
          <a
            href={SJREP.site}
            className="flex items-center gap-3"
            aria-label="San Jose Real Estate Photos official website"
          >
            <span className="block shrink-0 bg-[#182c36] px-3 py-2">
              <Image
                src="/san-jose-real-estate-photos/logo.png"
                alt=""
                width={200}
                height={50}
                className="h-8 w-32 object-contain sm:h-10 sm:w-40"
              />
            </span>
          </a>
          <nav
            aria-label="Page navigation"
            className="order-3 flex w-full items-center gap-6 border-t border-[#d8dfdb] pt-4 text-sm font-semibold md:order-none md:w-auto md:border-0 md:pt-0"
          >
            <a href="#services" className="hover:text-[#136e69]">
              Services
            </a>
            <a href="#planning" className="hover:text-[#136e69]">
              Shoot planning
            </a>
            <a href="#questions" className="hover:text-[#136e69]">
              FAQs
            </a>
          </nav>
          <a
            href={SJREP.booking}
            className={`${button} bg-[#136e69] text-white hover:bg-[#0c5753]`}
          >
            Book a shoot <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-6 sm:px-8 lg:pb-24">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap gap-x-2 gap-y-1 text-xs leading-6 text-[#58676e]"
          >
            <Link href="/">NearbyBizFinder</Link>
            <span aria-hidden="true">/</span>
            <Link href="/businesses/">Businesses</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Santa Clara real estate media</span>
          </nav>
          <div className="grid gap-12 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14 lg:pt-16">
            <div>
              <p className={eyebrow}>Property media / Santa Clara, CA</p>
              <h1 className="mt-5 max-w-xl text-[clamp(2.8rem,5vw,4.5rem)] font-semibold leading-[1.04] tracking-[-0.065em]">
                A clearer view.
                <br />
                <span className="text-[#136e69]">A complete listing.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#4d5c64]">
                Real estate photography and videography in Santa Clara, with drone coverage, 3D
                tours, floor plans and the marketing pieces that carry a property from capture to
                launch.
              </p>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#4d5c64]">
                Work with Thomas at San Jose Real Estate Photos to assemble the right presentation
                for a home, commercial space or agent-led listing. Start with what the viewer needs
                to understand, then choose the media that explains it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SJREP.booking}
                  className={`${button} bg-[#182c36] text-white hover:bg-[#136e69]`}
                >
                  Plan your shoot <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={SJREP.phoneHref}
                  className={`${button} border border-[#aebbb8] hover:bg-white`}
                >
                  {SJREP.phone}
                </a>
              </div>
              <a
                href="#services"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#136e69]"
              >
                Explore the full media menu <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="relative">
              <div className="mb-3 flex justify-between border-t border-[#aebbb8] pt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#58676e]">
                <span>Selected provider portfolio</span>
                <span>01 — 03</span>
              </div>
              <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
                <figure className="row-span-2">
                  <div className="relative h-full min-h-[340px] overflow-hidden bg-[#e2e8e3] sm:min-h-[460px]">
                    <Image
                      src="/san-jose-real-estate-photos/san-miguel-02.webp"
                      alt="Open-plan kitchen and dining room at San Miguel Avenue in Sunnyvale"
                      fill
                      priority
                      sizes="(min-width: 1024px) 340px, 60vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
                <figure className="relative min-h-[163px] overflow-hidden bg-[#e2e8e3] sm:min-h-[223px]">
                  <Image
                    src="/san-jose-real-estate-photos/san-miguel-01.webp"
                    alt="Bright bedroom at the San Miguel Avenue property in Sunnyvale"
                    fill
                    sizes="(min-width: 1024px) 225px, 40vw"
                    className="object-cover"
                  />
                </figure>
                <figure className="relative min-h-[163px] overflow-hidden bg-[#e2e8e3] sm:min-h-[223px]">
                  <Image
                    src="/san-jose-real-estate-photos/montecito-03.webp"
                    alt="Open living and dining room at the provider’s Montecito Vista Drive portfolio property"
                    fill
                    sizes="(min-width: 1024px) 225px, 40vw"
                    className="object-cover"
                  />
                </figure>
              </div>
              <p className="mt-3 text-xs leading-5 text-[#58676e]">
                Portfolio examples: San Miguel Avenue, Sunnyvale, and Montecito Vista Drive.{' '}
                <a href={SJREP.portfolio} className="font-semibold underline underline-offset-4">
                  View the complete portfolio
                </a>
              </p>
            </div>
          </div>
        </section>

        <section id="planning" className="scroll-mt-6 border-y border-[#d8dfdb] bg-[#eef3ef]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className={eyebrow}>Before the camera arrives</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                  Good media starts
                  <br className="hidden sm:block" /> with a good brief.
                </h2>
              </div>
              <p className={`${body} max-w-2xl`}>
                For a Santa Clara shoot, send the address, approximate square footage, property type
                and intended launch date. Explain what matters: a connected living area, a refreshed
                kitchen, outdoor use, office circulation or tenant-ready space. These priorities
                guide the capture plan and help separate essential deliverables from optional
                additions.
              </p>
            </div>
            <div className="mt-10 grid gap-8 border-t border-[#c8d4cd] pt-8 md:grid-cols-3">
              <article>
                <p className="text-xs font-bold tracking-[0.18em] text-[#136e69]">01 / ACCESS</p>
                <h3 className="mt-3 text-xl font-semibold">Coordinate the visit</h3>
                <p className={`${body} mt-3`}>
                  For an occupied property, agree on a clear appointment window with the residents.
                  For a condominium, office or shared building, arrange entry codes, parking, lift
                  access and permissions for common areas. Identify any spaces that must stay
                  private. Tell Thomas about security procedures or limited access before the
                  booking is finalized.
                </p>
              </article>
              <article>
                <p className="text-xs font-bold tracking-[0.18em] text-[#136e69]">
                  02 / PRESENTATION
                </p>
                <h3 className="mt-3 text-xl font-semibold">Prepare the actual space</h3>
                <p className={`${body} mt-3`}>
                  Clear counters and floor paths, tidy visible storage, check lighting and move
                  vehicles away from the intended exterior views. Secure pets and finish cleaning
                  before arrival. For video, the checklist calls for occupants off-site, with fans
                  and screens off. Use the business’s room-by-room checklist to prepare the whole
                  property consistently.
                </p>
              </article>
              <article>
                <p className="text-xs font-bold tracking-[0.18em] text-[#136e69]">03 / HANDOFF</p>
                <h3 className="mt-3 text-xl font-semibold">Plan the release</h3>
                <p className={`${body} mt-3`}>
                  Allow time to receive, review and publish the ordered assets. The terms list
                  photos by 2pm the next business day and video or 3D within 2–3 business days.
                  Confirm the schedule for your order, including virtual edits and launch extras.
                  Flag a deadline early and ask about available rush options.
                </p>
              </article>
            </div>
            <a
              href={SJREP.checklist}
              className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#136e69] underline underline-offset-4"
            >
              Open the pre-shoot checklist <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-7xl scroll-mt-6 px-5 py-16 sm:px-8 lg:py-24"
        >
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className={eyebrow}>The media inventory</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Every format has a job.
              </h2>
            </div>
            <p className={`${body} max-w-md`}>
              Combine services around your audience and launch plan. Confirm quantities, formats and
              inclusions with Thomas before the shoot.
            </p>
          </div>
          <div className="border-t-2 border-[#182c36]">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="grid gap-4 border-b border-[#d8dfdb] py-7 md:grid-cols-[2rem_1fr_1.65fr] md:gap-7 lg:grid-cols-[2rem_1fr_1.75fr]"
              >
                <span className="text-xs font-bold tracking-widest text-[#136e69]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{service.title}</h3>
                  <p className="mt-2 text-sm text-[#136e69]">{service.use}</p>
                </div>
                <p className={body}>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#d8dfdb] bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-20">
            <div>
              <p className={eyebrow}>Scope first. Package second.</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Choose for the property,
                <br />
                not just the package name.
              </h2>
              <p className={`${body} mt-6`}>
                The current residential lineup includes Launchpad Lite, Launchpad Essential, Social
                Agent and Launchpad Pro, alongside individual services. Pricing depends on property
                size and your selections. Compare the current inclusions and confirm which tour,
                film, aerial or marketing elements are included, optional or quoted separately.
              </p>
              <a
                href={SJREP.pricing}
                className={`${button} mt-7 border border-[#aebbb8] hover:bg-[#eef3ef]`}
              >
                Review current packages & pricing{' '}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="border-l-2 border-[#136e69] pl-6 sm:pl-8">
              {[
                [
                  'A clear residential listing',
                  'Start with the required photo coverage and a tour that explains the layout. Add a plan, film or aerial view where it answers a specific buyer question.',
                ],
                [
                  'An agent-led launch',
                  'Plan the property media and your on-camera story together. Discuss reels, an introduction, a dedicated website and the marketing pieces needed for launch day.',
                ],
                [
                  'A commercial assignment',
                  'Use the Commercial booking path for interiors, exteriors, aerials, iGUIDE or measured plans. For construction progress or recurring documentation, define the visit schedule and reporting views in a custom brief.',
                ],
              ].map(([title, text]) => (
                <article
                  key={title}
                  className="border-b border-[#d8dfdb] py-5 first:pt-0 last:border-0 last:pb-0"
                >
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className={`${body} mt-2`}>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e2e8e3]">
                <Image
                  src="/san-jose-real-estate-photos/deodara-exterior.webp"
                  alt="Twilight backyard photography at Deodara Drive in Los Altos"
                  fill
                  sizes="(min-width: 1024px) 620px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-[#58676e]">
                <span>Portfolio / Deodara Drive, Los Altos</span>
                <a href={SJREP.portfolio} className="font-semibold underline underline-offset-4">
                  Explore photos, films & reels
                </a>
              </figcaption>
            </figure>
            <div>
              <p className={eyebrow}>Beyond the listing</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Keep your agent voice
                <br />
                in the conversation.
              </h2>
              <p className={`${body} mt-6`}>
                Social Launchpad is a separate ongoing content service for agents who want a regular
                presence between property launches. It covers topic research, scripting, Riverside
                teleprompter recording, editing, captions and delivery. Optional distribution and
                batch filming can be discussed separately.
              </p>
              <p className={`${body} mt-4`}>
                Use a strategy call to explain your audience, topics and recording routine. A
                recurring agent-content plan has a different brief from a single listing reel;
                confirm the monthly scope and publishing responsibilities before you begin.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4 text-sm font-bold">
                <a
                  href={SJREP.socialStrategyCall}
                  className="inline-flex items-center gap-2 text-[#136e69] underline underline-offset-4"
                >
                  Book a strategy call <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={SJREP.socialLaunchpad} className="underline underline-offset-4">
                  See Social Launchpad
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="questions" className="scroll-mt-6 border-y border-[#d8dfdb] bg-[#eef3ef]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:py-20">
            <div>
              <p className={eyebrow}>Useful answers</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Before you book.
              </h2>
              <p className={`${body} mt-5`}>
                These details help you scope a Santa Clara appointment. For property-specific
                requirements, contact Thomas directly.
              </p>
              <a
                href={SJREP.emailHref}
                className="mt-5 block break-all text-sm font-bold text-[#136e69] underline underline-offset-4"
              >
                {SJREP.email}
              </a>
            </div>
            <div className="border-t border-[#b8c9c1]">
              {faqs.map((faq) => (
                <details key={faq.q} className="group border-b border-[#b8c9c1]">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-base font-semibold leading-6 [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <Plus
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#136e69] transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className={`${body} pb-6 pr-6`}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#182c36] text-[#faf9f5] [&_a:focus-visible]:!outline-[#faf9f5]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20 lg:py-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a2d4c9]">
                Your next property / Santa Clara
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Tell Thomas what
                <br />
                you’re bringing to market.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#d0dcd9]">
                Share the address, size, access plan and target release date. Choose Residential or
                Commercial in the booking portal, then confirm your media scope and current terms.
                Coverage includes Santa Clara, San Jose and Milpitas, with an approximate, flexible
                10-mile area around San Jose.
              </p>
              <a
                href={SJREP.booking}
                className={`${button} mt-8 bg-[#b8dfd3] text-[#182c36] hover:bg-white`}
              >
                Open shoot booking <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="border-t border-[#4c636a] pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a2d4c9]">
                Direct contact
              </p>
              <a
                href={SJREP.phoneHref}
                className="mt-5 block text-2xl font-semibold tracking-tight hover:text-[#a2d4c9]"
              >
                {SJREP.phone}
              </a>
              <a
                href={SJREP.emailHref}
                className="mt-4 block break-all text-base underline underline-offset-4 hover:text-[#a2d4c9]"
              >
                {SJREP.email}
              </a>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#d0dcd9]">
                <a href={SJREP.site} className="underline underline-offset-4">
                  Official website
                </a>
                <a href={SJREP.gbp} className="underline underline-offset-4">
                  Google business profile
                </a>
              </div>
              <p className="mt-7 flex items-start gap-2 text-sm leading-6 text-[#d0dcd9]">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#a2d4c9]" aria-hidden="true" />
                Residential media, commercial assignments and ongoing agent content.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-[#d8dfdb] pb-6 sm:flex-row">
          <p className="text-sm font-semibold">
            San Jose Real Estate Photos
            <br />
            <span className="mt-1 block text-xs font-normal text-[#58676e]">
              Property media for Santa Clara, California
            </span>
          </p>
          <nav
            aria-label="Other service areas"
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"
          >
            <Link href={SJREP_ROUTES.sanJose} className="hover:text-[#136e69]">
              San Jose
            </Link>
            <span aria-current="page" className="text-[#136e69]">
              Santa Clara
            </span>
            <Link href={SJREP_ROUTES.milpitas} className="hover:text-[#136e69]">
              Milpitas
            </Link>
          </nav>
        </div>
        <div className="mt-5 flex flex-wrap justify-between gap-4 text-xs leading-5 text-[#58676e]">
          <Link href="/businesses/" className="underline underline-offset-4">
            Listed on NearbyBizFinder
          </Link>
          <div className="flex gap-5">
            <a href={SJREP.terms} className="underline underline-offset-4">
              Booking terms
            </a>
            <a href={SJREP.privacy} className="underline underline-offset-4">
              Privacy policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
