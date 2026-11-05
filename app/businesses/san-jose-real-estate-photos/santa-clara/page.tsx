import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Check, Mail, Plus } from 'lucide-react';
import { SjrepMinidocPlayer } from '@/components/businesses/sjrep-minidoc-player';
import {
  SJREP,
  SJREP_MINIDOCS,
  SJREP_ROUTES,
  type SjrepFaq,
  sjrepMetadata,
  sjrepStructuredData,
} from '@/lib/san-jose-real-estate-photos';

const slug = 'santa-clara';
const description =
  'Professional real estate photography in Santa Clara, CA. Explore HDR photos, drone photography, 3D virtual tours, property videos and floor plans.';

const pageMetadata = sjrepMetadata(
  'Santa Clara',
  slug,
  description,
  '/san-jose-real-estate-photos/san-miguel-02.webp',
);
const pageTitle = 'Real Estate Photography Santa Clara, CA | San Jose Real Estate Photos';
export const metadata = {
  ...pageMetadata,
  title: pageTitle,
  openGraph: { ...pageMetadata.openGraph, title: pageTitle },
  twitter: { ...pageMetadata.twitter, title: pageTitle },
};

const services = [
  {
    title: 'Residential Real Estate Photography',
    use: 'Show the character of every room.',
    paragraphs: [
      'Professional residential real estate photography helps homeowners, real estate agents, and property sellers present homes with clear, attractive images.',
      'Coverage can include living rooms, kitchens, bedrooms, bathrooms, entryways, exterior elevations, and outdoor entertainment spaces.',
      'Careful composition highlights important architectural features while maintaining a natural representation of the property.',
      'For homeowners and agents seeking property photography in Santa Clara, CA, professional images provide essential visual material for MLS listings, property websites, brochures, and digital advertising.',
      'A thoughtfully organized photo gallery allows prospective buyers to explore the property in a logical sequence.',
    ],
  },
  {
    title: 'Commercial Real Estate Photography',
    use: 'Present the space with clarity and purpose.',
    paragraphs: [
      'Commercial real estate photography focuses on the details that matter to prospective tenants, investors, business owners, and property managers.',
      'San Jose Real Estate Photos provides commercial interior and exterior photography for offices, retail properties, industrial spaces, multifamily buildings, and other commercial assignments.',
      'Effective commercial property photography in Santa Clara can highlight building entrances, office layouts, common areas, parking facilities, architectural features, and surrounding property context.',
      "A well-planned photo collection makes commercial marketing materials more informative and helps viewers assess a property's suitability before arranging a visit.",
    ],
  },
  {
    title: 'HDR Real Estate Photography',
    use: 'Balanced lighting. Natural detail. Clearer interiors.',
    paragraphs: [
      'HDR real estate photography combines exposures to better represent areas with different brightness levels, such as a sunlit window and a darker interior.',
      'This technique helps preserve detail across highlights and shadows while maintaining a consistent visual appearance.',
      'Professional HDR photography is particularly useful for open-plan living spaces, rooms with large windows, architectural interiors, and properties featuring distinctive natural lighting.',
      'Each image should emphasize accurate presentation, balanced contrast, and clearly visible architectural details.',
      'For real estate agents seeking professional listing photographs, HDR photography provides a versatile foundation for property marketing.',
    ],
  },
  {
    title: 'Drone Photography for Real Estate',
    use: 'Show the property in its wider setting.',
    paragraphs: [
      'Ground-level photography reveals the building, while aerial images can show how a property relates to its surrounding environment.',
      'Professional real estate drone photography in Santa Clara can provide elevated views of exterior architecture, landscaped grounds, property boundaries, parking areas, and nearby surroundings.',
      "Aerial images are particularly useful when location, outdoor space, site access, or overall building scale contributes to the listing's appeal.",
      'Drone video can also complement a cinematic property tour by introducing the building from an elevated perspective.',
      'All aerial photography must be planned around weather, airspace regulations, necessary authorizations, and safe operating conditions.',
    ],
  },
  {
    title: '3D Virtual Property Tours',
    use: 'Let visitors explore before they arrive.',
    paragraphs: [
      "Interactive 3D virtual property tours offer an additional way to understand a home's layout and room connections without an immediate in-person appointment.",
      'San Jose Real Estate Photos offers Zillow 3D Home Tours and iGUIDE options for properties requiring a more detailed interactive presentation.',
      'A 3D experience can help prospective buyers and tenants explore different areas of the property at their own pace.',
      'For agents interested in real estate photography with 3D tours, combining photographs and interactive walkthroughs provides both curated visual highlights and a more exploratory viewing experience.',
      'Confirm the selected tour platform, available features, hosting arrangements, and floor plan requirements before booking.',
    ],
  },
  {
    title: 'Real Estate Floor Plans',
    use: 'Make the layout easy to understand.',
    paragraphs: [
      'Photographs show how a room looks. Floor plans help explain how the entire property is organized.',
      'Professional real estate floor plans illustrate room relationships, circulation routes, entrances, and the overall arrangement of interior spaces.',
      'Interactive plans can complement virtual tours, while measured floor plans provide additional documentation for buyers, tenants, and commercial decision-makers.',
      'For residential properties, a floor plan helps viewers understand how bedrooms, kitchens, living areas, and outdoor spaces connect.',
      'For commercial buildings, measured plans may support leasing presentations, space planning, and property documentation.',
      'Floor plan formats and measurement inclusions should be confirmed for each assignment.',
    ],
  },
  {
    title: 'Real Estate Videography',
    use: 'Create a guided experience through the property.',
    paragraphs: [
      'Professional real estate videography introduces motion, pacing, and visual storytelling into property marketing.',
      'A cinematic property video can communicate how a home flows from one room to another while drawing attention to important design features.',
      'Video is also useful for commercial property presentations, agent-led tours, and promotional campaigns.',
      'San Jose Real Estate Photos offers cinematic listing videos, guided story tours, and shorter social media formats.',
      'Before filming, identify the target audience, important rooms, preferred video style, and intended publishing platforms.',
      'A carefully planned video complements traditional photography rather than simply repeating the same views.',
    ],
  },
  {
    title: 'Virtual Staging Services',
    use: 'Help viewers imagine a furnished space.',
    paragraphs: [
      'Vacant rooms can sometimes make it difficult for prospective buyers to visualize furniture placement or understand the intended use of an area.',
      'Virtual staging adds digital furniture and decorative elements to suitable property images, creating a visual concept of how a space might be arranged.',
      'San Jose Real Estate Photos also offers presentation edits such as virtual decluttering and twilight-style photography.',
      'These tools can support residential property marketing when used appropriately.',
      'Digitally staged images should be clearly identified, and edits should not misrepresent permanent features, property conditions, or items included in a sale.',
    ],
  },
  {
    title: 'Real Estate Listing Websites & Marketing Media',
    use: 'Bring every marketing asset together.',
    paragraphs: [
      'A dedicated real estate listing website creates a central location for presenting property photographs, cinematic videos, virtual tours, floor plans, and approved listing information.',
      'Instead of distributing disconnected media files, agents can guide interested visitors toward a more organized presentation.',
      'San Jose Real Estate Photos also provides social media reels, agent-focused content, and listing marketing support.',
      'A coordinated media package can help maintain consistent visual messaging across a property website, social platforms, marketing emails, and other listing channels.',
      'The appropriate combination depends on the property, audience, and marketing objectives.',
    ],
  },
];

const faqs: SjrepFaq[] = [
  {
    q: 'What real estate photography services are available in Santa Clara?',
    a: 'San Jose Real Estate Photos offers residential and commercial photography, HDR listing images, drone photography, property videos, Zillow 3D tours, iGUIDE options, measured floor plans, and listing marketing assets.\n\nServices can be booked individually or combined through available packages. The appropriate selection depends on the property type, size, and intended use of the finished media.',
  },
  {
    q: 'How do I choose the best real estate photography services in Santa Clara?',
    a: "Start by reviewing the photographer's portfolio, image quality, service offerings, booking process, and current delivery terms.\n\nLook for accurate interior photography, balanced lighting, consistent editing, and experience with the type of property you plan to market.\n\nThe best choice is a provider whose experience, deliverables, communication, and pricing align with your property's requirements.",
  },
  {
    q: 'What is included in real estate photography packages in Santa Clara?',
    a: 'Package inclusions depend on the selected service level.\n\nSan Jose Real Estate Photos offers residential packages ranging from essential listing media to broader marketing systems with photos, videos, aerial coverage, 3D tours, floor plans, and additional launch materials.\n\nPricing can vary according to square footage and selected services. Review the current package details before booking.',
  },
  {
    q: 'Do I need drone photography for my real estate listing?',
    a: "Drone photography can be useful when a property's location, exterior setting, landscape, parking, or overall site arrangement is important to its presentation.\n\nIt is often considered for larger residential properties and commercial buildings.\n\nNot every listing requires aerial imagery. Flight availability also depends on weather, airspace restrictions, authorization requirements, and safety considerations.",
  },
  {
    q: 'Can I book real estate photography with 3D tours and floor plans?',
    a: 'Yes. Photography, interactive 3D tours, and floor plans can be combined as part of a property media package.\n\nZillow 3D offers an interactive viewing experience, while iGUIDE provides additional measured documentation options.\n\nConfirm the tour platform and required deliverables when scheduling your shoot.',
  },
  {
    q: 'Are commercial real estate photography services available in Santa Clara?',
    a: 'Yes. Commercial real estate media services are available for offices, retail locations, industrial properties, multifamily buildings, and other commercial assignments.\n\nCoverage may include exterior photography, interior photography, drone imagery, measured floor plans, and interactive 3D documentation.\n\nCustom project requirements should be discussed before booking.',
  },
  {
    q: 'Can virtual staging be added to my property photographs?',
    a: 'Virtual staging and other presentation edits may be available as additional services.\n\nVirtual staging is often used for vacant or lightly furnished properties to illustrate potential furniture arrangements.\n\nChoose appropriate source photographs and ensure digitally altered images are accurately labeled and comply with applicable listing rules.',
  },
  {
    q: 'How should I prepare my property, and when will the final media be ready?',
    a: 'Before the appointment, clean the property, organize visible spaces, coordinate access, and identify the rooms or features that should receive particular attention.\n\nPublished scheduling terms identify standard turnaround periods for photographs and other media, but the confirmed delivery time depends on the services ordered and any requested edits.\n\nShare your listing launch deadline during booking so that expectations are clear.',
  },
  {
    q: 'Can I find a real estate photographer near me in San Jose, Sunnyvale, or Silicon Valley?',
    a: "San Jose Real Estate Photos serves Santa Clara and surrounding South Bay and Silicon Valley communities.\n\nThe business's portfolio includes work in Sunnyvale, Los Altos, and other nearby markets.\n\nIf you're searching for real estate photography in San Jose, real estate photography in Sunnyvale, or a real estate photographer in Silicon Valley, provide your property address to confirm scheduling, service availability, and any applicable travel requirements.",
  },
];

const preparation = [
  {
    label: '01 / PROPERTY ACCESS',
    title: 'Coordinate the photography appointment.',
    paragraphs: [
      'Make sure the photographer can access every area included in the shoot. For occupied residential properties, coordinate the appointment with homeowners or tenants in advance.',
      'For condominiums, apartments, and commercial buildings, arrange parking instructions, entry codes, elevator access, and any required permissions.',
      'Identify restricted spaces, building regulations, or special requirements before the appointment. Clear communication helps make the photography session more organized and reduces unnecessary interruptions.',
    ],
  },
  {
    label: '02 / PROPERTY PRESENTATION',
    title: 'Prepare the space for professional photography.',
    paragraphs: [
      'Small preparation details can significantly influence the final appearance of real estate photographs.',
      'Organize furniture, remove unnecessary items from countertops, clean windows, and make sure the primary living spaces are ready to photograph.',
      'For exterior photography, tidy landscaping and remove vehicles or temporary objects that obstruct important views.',
      'Commercial spaces should have accessible entrances, organized work areas, and appropriately prepared common spaces.',
      "Professional photography aims to present the property's actual features clearly and attractively, without creating misleading expectations.",
    ],
  },
  {
    label: '03 / MEDIA DELIVERY',
    title: 'Plan your listing launch.',
    paragraphs: [
      'Real estate photography is often one component of a larger property marketing schedule.',
      'Before the shoot, determine when photographs, videos, 3D tours, and supporting materials will be needed.',
      'If your launch includes virtual staging, cinematic video, or additional marketing edits, confirm the production and delivery schedule for each item.',
      'Coordinate the completion of your media with your MLS listing, property website, social media announcements, and marketing materials.',
      'A planned handoff helps ensure your property is ready to be presented consistently across different channels.',
    ],
  },
];

const packages = [
  {
    title: 'A clear residential listing',
    paragraphs: [
      'For residential properties, begin with professional HDR interior and exterior photographs.',
      "Complement the image collection with an interactive 3D walkthrough and a floor plan to help potential buyers understand the home's layout.",
      'Additional drone photography or cinematic video may be appropriate when the location, exterior setting, or property features benefit from wider visual coverage.',
    ],
  },
  {
    title: 'A comprehensive listing launch',
    paragraphs: [
      'For agents planning a more extensive marketing campaign, combine listing photography with professional video, aerial coverage, virtual tours, and short-form social content.',
      'A custom listing website can organize these assets into one destination.',
      'Agent-focused reels or guided property tours can also introduce a more personal element to the campaign.',
    ],
  },
  {
    title: 'A commercial property presentation',
    paragraphs: [
      'Commercial projects often require a different approach from residential listings.',
      "Prioritize interior and exterior photography, site context, building access, parking areas, and floor plan documentation according to the project's marketing goals.",
      'For large buildings or more complex assignments, measured floor plans, 3D walkthroughs, and aerial imagery can provide additional context.',
      'Custom commercial quotes allow the photography scope to be tailored to the property.',
    ],
  },
];

const projects = [
  {
    image: 'san-miguel-02.webp',
    alt: 'Open-plan kitchen and dining room at San Miguel Avenue in Sunnyvale',
    title: 'San Miguel Avenue, Sunnyvale',
    summary:
      'Residential listing photography featuring bright interiors, connected living areas, and thoughtfully composed room photographs.',
  },
  {
    image: 'montecito-03.webp',
    alt: 'Open living and dining room at Montecito Vista Drive',
    title: 'Montecito Vista Drive',
    summary:
      'Professional condominium photography highlighting interior spaces, architectural details, and the overall property layout.',
  },
  {
    image: 'deodara-exterior.webp',
    alt: 'Twilight backyard at Deodara Drive in Los Altos',
    title: 'Deodara Drive, Los Altos',
    summary:
      'Premium real estate photography and property marketing visuals designed to present a distinctive residential listing.',
  },
];

const videoCaptions = [
  {
    title: 'Whitehaven Court, Silver Creek, San Jose',
    summary:
      'A property documentary exploring the home, its location, and the lifestyle connected to the surrounding community.',
  },
  {
    title: 'Glenview Avenue, Cupertino',
    summary:
      "A story-focused property film incorporating the home's history and the perspectives of people involved in its sale.",
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
            <a href="#minidocs" className="hover:text-[#136e69]">
              MiniDocs
            </a>
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
                Real Estate Photography <span className="text-[#136e69]">in Santa Clara, CA</span>
              </h1>
              <p className="mt-5 max-w-xl text-xl font-semibold leading-8 text-[#4d5c64]">
                Make every space worth a second look.
              </p>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#4d5c64]">
                A great property presentation begins with photographs that help people understand
                what makes a space special. San Jose Real Estate Photos provides real estate
                photography services in Santa Clara, combining professional interior and exterior
                photography with cinematic videos, drone coverage, interactive 3D tours, and floor
                plans.
              </p>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#4d5c64]">
                Whether you&apos;re marketing a residential home, preparing a commercial property
                for leasing, or creating a complete real estate listing campaign, the right visuals
                can make your property easier to explore and more engaging to potential buyers and
                tenants.
              </p>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#4d5c64]">
                Work with a professional real estate photographer in Santa Clara, CA who understands
                the importance of composition, natural lighting, accurate room presentation, and
                consistent visual storytelling. From the first exterior photograph to the final
                property tour, each asset should contribute to a clear and compelling listing.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SJREP.booking}
                  className={`${button} bg-[#182c36] text-white hover:bg-[#136e69]`}
                >
                  Book a Property Shoot <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={SJREP.phoneHref}
                  className={`${button} border border-[#aebbb8] hover:bg-white`}
                >
                  Call: {SJREP.phone}
                </a>
              </div>
              <a
                href="#services"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#136e69]"
              >
                Explore Residential and Commercial Real Estate Media Services{' '}
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="relative">
              <div className="mb-3 flex justify-between border-t border-[#aebbb8] pt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#58676e]">
                <span>Selected real estate photography portfolio</span>
                <span>01–03</span>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {projects.map((project, index) => (
                  <figure key={project.image} className={index === 0 ? 'sm:col-span-2' : undefined}>
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#e2e8e3]">
                      <Image
                        src={'/san-jose-real-estate-photos/' + project.image}
                        alt={project.alt}
                        fill
                        priority={index === 0}
                        sizes={
                          index === 0
                            ? '(min-width: 1024px) 560px, 94vw'
                            : '(min-width: 640px) 46vw, 94vw'
                        }
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm leading-6 text-[#58676e]">
                      <span className="block font-semibold text-[#182c36]">
                        {String(index + 1).padStart(2, '0')} — {project.title}
                      </span>
                      {project.summary}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p className="mt-3 text-xs leading-5 text-[#58676e]">
                <a href={SJREP.portfolio} className="font-semibold underline underline-offset-4">
                  Explore the Complete Photography Portfolio
                </a>
              </p>
            </div>
          </div>
        </section>

        <section
          id="minidocs"
          aria-labelledby="minidocs-heading"
          className="scroll-mt-6 bg-[#182c36] text-[#faf9f5] [&_a:focus-visible]:!outline-[#faf9f5]"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-24">
            <div className="lg:self-start">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a2d4c9]">
                Featured / Real estate videography &amp; storytelling
              </p>
              <h2
                id="minidocs-heading"
                className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl"
              >
                A property is more than its photographs.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#d0dcd9]">
                Bring the listing to life through motion and perspective.
              </p>
              <p className="mt-4 text-base leading-7 text-[#d0dcd9]">
                Photography introduces a property, but carefully produced video can help viewers
                understand how its spaces connect, how natural light moves through the rooms, and
                what makes the surrounding setting distinctive.
              </p>
              <p className="mt-4 text-base leading-7 text-[#d0dcd9]">
                Through professional real estate videography, San Jose Real Estate Photos creates
                property films, agent-guided tours, and listing documentaries that bring another
                dimension to real estate marketing.
              </p>
              <p className="mt-4 text-base leading-7 text-[#d0dcd9]">
                A cinematic walkthrough can lead viewers from the front entrance into the main
                living spaces, transition toward outdoor amenities, and provide a stronger sense of
                the property&apos;s design.
              </p>
              <p className="mt-4 text-base leading-7 text-[#d0dcd9]">
                For listings that deserve more personal storytelling, MiniDocs offer a
                documentary-style approach that can incorporate the property&apos;s history,
                neighborhood, and people involved in bringing it to market.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[#d0dcd9]">
                {[
                  'Cinematic property videos for residential and commercial marketing.',
                  'Agent-guided walkthroughs and property storytelling.',
                  'Drone footage and interior video combined into a cohesive presentation.',
                  'Short-form video content for social media and listing promotions.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#a2d4c9]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SJREP.minidocInquiry}
                  className={`${button} bg-[#b8dfd3] text-[#182c36] hover:bg-white`}
                >
                  <Mail className="h-4 w-4" aria-hidden="true" /> Discuss Your Property Video
                </a>
                <a
                  href={SJREP.booking}
                  className={`${button} border border-[#4c636a] hover:bg-white/10`}
                >
                  Book a shoot <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-5 text-sm text-[#d0dcd9]">
                Prefer to talk it through?{' '}
                <a href={SJREP.phoneHref} className="font-semibold underline underline-offset-4">
                  Call {SJREP.phone}
                </a>
              </p>
            </div>
            <div className="space-y-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a2d4c9]">
                Featured video projects
              </p>
              {SJREP_MINIDOCS.map((video, index) => (
                <figure key={video.youtubeId}>
                  <SjrepMinidocPlayer
                    video={video}
                    sizes="(min-width: 1024px) 680px, 92vw"
                    buttonClassName="bg-[#b8dfd3] text-[#182c36]"
                    frameClassName="[&_button:focus-visible]:outline [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-[-6px] [&_button:focus-visible]:outline-[#faf9f5]"
                  />
                  <figcaption className="mt-4 grid gap-2 border-t border-[#4c636a] pt-4 sm:grid-cols-[2.5rem_1fr]">
                    <span className="text-xs font-bold tracking-widest text-[#a2d4c9]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span className="block text-lg font-semibold">
                        {videoCaptions[index].title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-[#d0dcd9]">
                        {videoCaptions[index].summary} {video.length}.
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="planning" className="scroll-mt-6 border-y border-[#d8dfdb] bg-[#eef3ef]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className={eyebrow}>Before the photography session</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                  A better photo shoot begins before the camera arrives.
                </h2>
              </div>
              <div className="max-w-2xl space-y-3">
                <p className={body}>
                  Preparation plays an important role in professional real estate listing
                  photography in Santa Clara. A clean, accessible, well-presented property allows
                  the photographer to concentrate on capturing the rooms, architectural features,
                  and exterior areas that matter most.
                </p>
                <p className={body}>
                  Before scheduling your appointment, share the property address, approximate square
                  footage, building type, and preferred listing launch date. Mention any distinctive
                  amenities or spaces that require particular attention.
                </p>
              </div>
            </div>
            <div className="mt-10 grid gap-8 border-t border-[#c8d4cd] pt-8 md:grid-cols-3">
              {preparation.map((step) => (
                <article key={step.label}>
                  <p className="text-xs font-bold tracking-[0.18em] text-[#136e69]">{step.label}</p>
                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                  <div className="mt-3 space-y-3">
                    {step.paragraphs.map((text) => (
                      <p key={text} className={body}>
                        {text}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
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
              <p className={eyebrow}>The real estate media inventory</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Every property deserves the right perspective.
              </h2>
            </div>
            <div className="max-w-md space-y-3">
              <p className={body}>
                San Jose Real Estate Photos offers residential and commercial real estate media
                services throughout Santa Clara and surrounding Silicon Valley communities.
              </p>
              <p className={body}>
                Choose individual services or combine complementary formats to create a more
                complete property presentation.
              </p>
            </div>
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
                <div className="space-y-3">
                  {service.paragraphs.map((text) => (
                    <p key={text} className={body}>
                      {text}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#d8dfdb] bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-20">
            <div>
              <p className={eyebrow}>Real estate photography packages / Santa Clara</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Choose the media that fits your property.
              </h2>
              <div className="mt-6 space-y-3">
                <p className={body}>A thoughtful package begins with the listing&apos;s needs.</p>
                <p className={body}>
                  Not every property requires identical photography or marketing coverage.
                </p>
                <p className={body}>
                  A smaller residential listing may benefit from professional HDR photographs, a 3D
                  walkthrough, and a floor plan. A larger home may call for cinematic video, drone
                  imagery, and a more comprehensive launch presentation.
                </p>
                <p className={body}>
                  San Jose Real Estate Photos provides several residential package options,
                  including Listing Launchpad Lite, Listing Launchpad Essential, Listing Launchpad
                  Social Agent, and Listing Launchpad Pro.
                </p>
                <p className={body}>
                  Individual services and custom commercial media options are also available.
                </p>
                <p className={body}>
                  The right real estate photography package in Santa Clara depends on property size,
                  media requirements, and the intended marketing approach.
                </p>
              </div>
              <a
                href={SJREP.pricing}
                className={`${button} mt-7 border border-[#aebbb8] hover:bg-[#eef3ef]`}
              >
                Review Current Packages and Pricing{' '}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="border-l-2 border-[#136e69] pl-6 sm:pl-8">
              {packages.map(({ title, paragraphs }) => (
                <article
                  key={title}
                  className="border-b border-[#d8dfdb] py-5 first:pt-0 last:border-0 last:pb-0"
                >
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <div className="mt-2 space-y-3">
                    {paragraphs.map((text) => (
                      <p key={text} className={body}>
                        {text}
                      </p>
                    ))}
                  </div>
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
                  src="/san-jose-real-estate-photos/san-miguel-01.webp"
                  alt="Bright bedroom at the San Miguel Avenue property in Sunnyvale"
                  fill
                  sizes="(min-width: 1024px) 620px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-[#58676e]">
                <span>Portfolio / San Miguel Avenue, Sunnyvale</span>
                <a href={SJREP.portfolio} className="font-semibold underline underline-offset-4">
                  Explore photos, films & reels
                </a>
              </figcaption>
            </figure>
            <div>
              <p className={eyebrow}>Beyond the property listing</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Give your real estate marketing a consistent visual identity.
              </h2>
              <div className="mt-6 space-y-3">
                <p className={body}>
                  A single property shoot can provide media for more than one marketing channel.
                </p>
                <p className={body}>
                  Professional photographs can support websites, brochures, social announcements,
                  and agent presentations. Cinematic videos and short-form reels can introduce
                  listings in formats suited to different online audiences.
                </p>
                <p className={body}>
                  For real estate professionals working throughout Santa Clara and Silicon Valley,
                  consistent visual presentation is also an opportunity to develop recognizable
                  agent branding.
                </p>
                <p className={body}>
                  San Jose Real Estate Photos offers social and agent-content services for
                  professionals seeking marketing material beyond individual property launches.
                </p>
                <p className={body}>
                  The Social Launchpad service can include content research, scripting, recording,
                  editing, captions, and prepared media assets, depending on the agreed scope.
                </p>
                <p className={body}>
                  Property marketing and ongoing agent branding serve different purposes, so each
                  should have a clear content plan.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4 text-sm font-bold">
                <a
                  href={SJREP.socialStrategyCall}
                  className="inline-flex items-center gap-2 text-[#136e69] underline underline-offset-4"
                >
                  Book a strategy call <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={SJREP.socialLaunchpad} className="underline underline-offset-4">
                  Explore Agent Marketing and Media Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="questions" className="scroll-mt-6 border-y border-[#d8dfdb] bg-[#eef3ef]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:py-20">
            <div>
              <p className={eyebrow}>Frequently asked questions</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Everything you should know before booking.
              </h2>
              <p className={`${body} mt-5`}>
                These answers address common questions about professional real estate photography
                services in Santa Clara, California.
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
                  <div className="space-y-3 pb-6 pr-6">
                    {faq.a.split('\n\n').map((text) => (
                      <p key={text} className={body}>
                        {text}
                      </p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#182c36] text-[#faf9f5] [&_a:focus-visible]:!outline-[#faf9f5]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20 lg:py-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a2d4c9]">
                Your next property / Santa Clara, California
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Your property has a story. Present it with purpose.
              </h2>
              <div className="mt-6 max-w-xl space-y-3 text-base leading-7 text-[#d0dcd9]">
                <p>
                  Professional real estate photography is about more than producing attractive
                  images. It helps potential buyers and tenants understand the property, explore
                  important features, and decide whether they want to learn more.
                </p>
                <p>
                  From residential real estate photography and commercial property coverage to HDR
                  photography, drone imagery, cinematic video, 3D virtual tours, and floor plans,
                  San Jose Real Estate Photos brings together the visual elements needed for a
                  coordinated property presentation.
                </p>
                <p>
                  Whether you&apos;re preparing a home for sale, promoting a commercial space, or
                  organizing a complete listing campaign, begin by sharing your property&apos;s
                  address, square footage, preferred timeline, and media requirements.
                </p>
                <p>
                  Build a photography plan around the property and the people you want to reach.
                </p>
              </div>
              <a
                href={SJREP.booking}
                className={`${button} mt-8 bg-[#b8dfd3] text-[#182c36] hover:bg-white`}
              >
                Book Your Real Estate Photography Session{' '}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="border-t border-[#4c636a] pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a2d4c9]">
                Direct Contact
              </p>
              <p className="mt-4 font-semibold">{SJREP.name}</p>
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
                <a href={SJREP.site} className="break-all underline underline-offset-4">
                  {SJREP.site}
                </a>
                <a href={SJREP.gbp} className="underline underline-offset-4">
                  Google business profile
                </a>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#d0dcd9]">
                Service Area: Santa Clara, San Jose, Sunnyvale, and surrounding Silicon Valley
                communities, subject to scheduling confirmation.
              </p>
              <p className="mt-4 text-sm leading-6 text-[#d0dcd9]">
                Services: Residential Photography | Commercial Photography | HDR Photography | Drone
                Photography | Real Estate Videography | 3D Tours | Floor Plans | Virtual Staging |
                Property Marketing
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
              Professional Real Estate Photography &amp; Media Services — Santa Clara, CA
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
