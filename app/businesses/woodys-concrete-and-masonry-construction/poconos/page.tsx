import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import {
  Phone,
  Mail,
  MapPin,
  Mountain,
  TreePine,
  Snowflake,
  Star,
  ExternalLink,
  Quote,
  Sun,
  Footprints,
  Truck,
  Layers,
  Home,
  Blocks,
  Armchair,
  CalendarClock,
} from 'lucide-react';

const SITE_URL = 'https://nearbybizfinder.com/businesses/woodys-concrete-and-masonry-construction/poconos/';
const YELP_URL = 'https://www.yelp.com/biz/woodys-concrete-and-masonry-construction-danielsville';
const MAP_URL = 'https://share.google/LBZYC9Gu6L94fqEoe';
const PHONE = '(610) 751-2928';
const PHONE_HREF = 'tel:+16107512928';
const EMAIL = 'woodysconcrete321@gmail.com';
const WEBSITE = 'https://www.woodysconcrete321.com/';

export const metadata: Metadata = {
  title: "Concrete Contractor Poconos, PA | Woody's Concrete & Masonry",
  description:
    "Concrete & masonry for the Pocono Mountains — retaining walls, foundations, footings, patios & excavation for cabins, lake homes & sloped lots. Serving Mount Pocono, Stroudsburg & Tobyhanna.",
  alternates: {
    canonical: '/businesses/woodys-concrete-and-masonry-construction/poconos/',
  },
  keywords: [
    'concrete contractor Poconos PA',
    'retaining wall contractor Poconos',
    'foundation contractor Mount Pocono',
    'concrete footings Poconos mountain home',
    'masonry contractor Stroudsburg PA',
    'excavation contractor Poconos',
    'cabin foundation contractor PA',
    'concrete patio Pocono Mountains',
    'sloped lot retaining wall Poconos',
    'porch builder Tobyhanna PA',
  ],
  openGraph: {
    title: "Concrete Contractor Poconos, PA | Woody's Concrete & Masonry",
    description: 'Retaining walls, foundations, footings, patios and excavation built for mountain and lakefront properties across the Poconos.',
    images: ['https://images.pexels.com/photos/7161537/pexels-photo-7161537.jpeg'],
    url: SITE_URL,
    type: 'website',
    siteName: 'NearbyBizFinder',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Concrete Contractor Poconos, PA | Woody's Concrete & Masonry",
    description: 'Retaining walls, foundations, footings, patios and excavation for the Pocono Mountains.',
    images: ['https://images.pexels.com/photos/7161537/pexels-photo-7161537.jpeg'],
  },
  robots: { index: true, follow: true },
};

const serviceAreas = ['Mount Pocono, PA', 'Stroudsburg, PA', 'East Stroudsburg, PA', 'Tobyhanna, PA', 'Tannersville, PA', 'Pocono Lake, PA', 'Hawley, PA'];

const services = [
  { title: 'Retaining Walls', desc: 'The backbone of building on a mountain lot — engineered walls that hold back slope, stop erosion, and create level, usable ground.', icon: Blocks },
  { title: 'Foundations', desc: 'Foundation walls for cabins, additions and seasonal homes, poured to handle the frost cycles that come with elevation.', icon: Home },
  { title: 'Concrete Footings', desc: 'Footings sized and depth-checked for mountain frost lines, so decks, porches and additions stay solid through hard winters.', icon: Layers },
  { title: 'Excavation', desc: 'Steep, wooded, rocky lots need careful excavation. We grade and dig with the terrain, not against it.', icon: Truck },
  { title: 'Patios', desc: 'Concrete patios built to take in the mountain view, poured with the drainage a sloped lot demands.', icon: Sun },
  { title: 'Sidewalks & Walkways', desc: 'Walkways that stay sure-footed through wet leaves, snowmelt, and everything a Pocono season brings.', icon: Footprints },
  { title: 'Porches', desc: 'Concrete porch pads and steps for cabins and mountain homes, from a simple stoop to a full covered entry.', icon: Armchair },
];

const faqs = [
  {
    q: 'Do you pour concrete during Pocono winters?',
    a: 'Concrete needs the right temperature to cure properly, so our pouring season generally runs spring through fall in the mountains. We plan excavation and prep work around the calendar and recommend booking early — good weather windows fill up fast at elevation.',
  },
  {
    q: 'How deep do footings need to be for a Pocono mountain home?',
    a: "Elevation and exposure mean the frost line in parts of Monroe and Pike County can run deeper than in the valley below. We check local requirements for your specific township and pour footings to that depth, with rebar reinforcement, so they hold through freeze-thaw cycles.",
  },
  {
    q: 'Can you build retaining walls on steep, wooded lots?',
    a: "Yes — it's a big part of what we do up here. We assess the grade, plan drainage behind the wall so water doesn't build up and push it out, and choose between segmental block or poured concrete depending on the slope and soil.",
  },
  {
    q: 'Do you work on seasonal or lake homes with limited access?',
    a: 'We do. Narrow driveways, tree cover, and limited equipment access are common on Pocono lake and cabin properties. We plan logistics — including material staging and smaller equipment where needed — before the first shovel goes in the ground.',
  },
  {
    q: "What's different about pouring concrete at higher elevation?",
    a: 'Temperature swings faster, curing takes longer to plan around, and rocky or uneven ground is far more common than in the valley. We adjust mix, timing, and site prep accordingly rather than using a one-size-fits-all approach.',
  },
  {
    q: 'Do you provide free estimates for Pocono properties?',
    a: 'Yes, including properties in Mount Pocono, Stroudsburg, Tobyhanna, Tannersville, Pocono Lake and Hawley. We visit the site, walk the terrain with you, and provide a written quote at no cost.',
  },
  {
    q: 'Are you licensed to work in Monroe and Pike County?',
    a: "Yes, Woody's Concrete and Masonry Construction is a licensed Pennsylvania contractor and takes on projects throughout the Poconos in addition to our home base in the Lehigh Valley.",
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'GeneralContractor'],
  name: "Woody's Concrete and Masonry Construction",
  description: 'Concrete and masonry contractor serving the Pocono Mountains — retaining walls, foundations, footings, patios, excavation and porches for cabins, lake homes and sloped lots.',
  url: SITE_URL,
  image: 'https://images.pexels.com/photos/7161537/pexels-photo-7161537.jpeg',
  telephone: PHONE,
  email: EMAIL,
  sameAs: [YELP_URL, WEBSITE],
  hasMap: MAP_URL,
  areaServed: serviceAreas.map((a) => ({ '@type': 'City', name: a })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Concrete & Masonry Services — Poconos',
    itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.desc } })),
  },
};

const breadcrumbStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbybizfinder.com/' },
    { '@type': 'ListItem', position: 2, name: 'Businesses', item: 'https://nearbybizfinder.com/businesses/' },
    { '@type': 'ListItem', position: 3, name: "Woody's Concrete and Masonry Construction", item: 'https://nearbybizfinder.com/businesses/woodys-concrete-and-masonry-construction/' },
    { '@type': 'ListItem', position: 4, name: 'Poconos', item: SITE_URL },
  ],
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function WoodysConcretePoconosPage() {
  return (
    <div className="min-h-screen bg-[#0e1a13] text-[#eee7d8]">
      <Script id="business-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Script id="breadcrumb-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Script id="faq-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      {/* Minimal bespoke top bar */}
      <header className="sticky top-0 z-50 bg-[#0e1a13]/95 backdrop-blur border-b border-[#2a4030]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/businesses/woodys-concrete-and-masonry-construction/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#8a5a2e] flex items-center justify-center">
              <Mountain className="h-5 w-5 text-[#0e1a13]" />
            </div>
            <span className="text-sm sm:text-base font-semibold tracking-wide text-[#eee7d8]">Woody's Concrete &amp; Masonry — Poconos</span>
          </Link>
          <a href={PHONE_HREF} className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#c98f4a] hover:text-[#e0aa66] transition-colors">
            <Phone className="h-4 w-4" />{PHONE}
          </a>
        </div>
      </header>

      {/* Breadcrumb, minimal text style */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 text-xs text-[#8ba088]">
        <Link href="/" className="hover:text-[#eee7d8]">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/businesses/" className="hover:text-[#eee7d8]">Businesses</Link>
        <span className="mx-2">/</span>
        <Link href="/businesses/woodys-concrete-and-masonry-construction/" className="hover:text-[#eee7d8]">Woody's Concrete &amp; Masonry</Link>
        <span className="mx-2">/</span>
        <span className="text-[#eee7d8]">Poconos</span>
      </div>

      {/* Split hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-14 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c98f4a] mb-6">
              <TreePine className="h-4 w-4" /> Serving the Pocono Mountains
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6 text-[#f5f0e6]">
              Concrete &amp; Masonry<br /><span className="text-[#c98f4a]">Built to Hold the Mountain</span>
            </h1>
            <p className="text-lg text-[#c4d1c1] leading-relaxed mb-8 max-w-xl">
              Steep lots, rocky ground, and hard winters call for a different approach. Woody's Concrete and Masonry Construction builds retaining walls, foundations, footings and patios engineered for the terrain around Mount Pocono, Stroudsburg, Tobyhanna and Hawley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#c98f4a] hover:bg-[#b57e3c] text-[#0e1a13] font-bold px-8" asChild>
                <a href={PHONE_HREF}><Phone className="h-5 w-5 mr-2" />Call {PHONE}</a>
              </Button>
              <Button size="lg" variant="outline" className="border-[#c98f4a] text-[#eee7d8] hover:bg-[#c98f4a]/10 px-8" asChild>
                <a href={YELP_URL} target="_blank" rel="noopener noreferrer"><Star className="h-5 w-5 mr-2" />Yelp Reviews</a>
              </Button>
            </div>
          </div>
          <div className="relative h-80 sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border-2 border-[#2a4030]">
            <Image src="https://images.pexels.com/photos/7161537/pexels-photo-7161537.jpeg" alt="Log cabin home in a snowy Pocono-style forest" fill priority quality={85} className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1a13]/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Diagonal divider into dark timber band */}
      <div className="relative">
        <div
          className="h-16 sm:h-24 bg-[#16281c]"
          style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}
        />
      </div>

      {/* Building season callout — unique to this page */}
      <div className="bg-[#16281c] py-14 sm:py-20 border-y border-[#2a4030]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-[#0e1a13] border border-[#c98f4a]/40 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-full bg-[#c98f4a]/15 flex items-center justify-center flex-shrink-0">
              <CalendarClock className="h-7 w-7 text-[#c98f4a]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f5f0e6] mb-2">Mind the Mountain Building Season</h2>
              <p className="text-[#c4d1c1] leading-relaxed">
                Concrete needs stable temperatures to cure right, which narrows the pour season at elevation to roughly spring through fall. Between weather-dependent scheduling and limited-access lake and cabin lots, Pocono projects fill up faster than you'd expect — homeowners who call ahead of the season get first pick of dates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us — asymmetric numbered list */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f5f0e6] mb-6">Why the Poconos Trust Woody's</h2>
            <p className="text-[#c4d1c1] leading-relaxed mb-8">
              Mountain terrain punishes shortcuts. Everything from how deep we dig to when we schedule a pour is built around the way this region actually behaves.
            </p>
            <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden border border-[#2a4030]">
              <Image src="https://images.pexels.com/photos/5708937/pexels-photo-5708937.jpeg" alt="Wooden home nestled in the mountains" fill quality={85} className="object-cover" />
            </div>
          </div>
          <div className="space-y-8">
            {[
              { n: '01', t: 'Mountain & Slope Experience', d: 'Steep grades and rocky ground are the norm here, not the exception — our excavation and wall-building work with the terrain instead of fighting it.' },
              { n: '02', t: 'Seasonal Scheduling Know-How', d: 'We plan around the short mountain pour season so your project starts and cures on solid, weather-appropriate timing.' },
              { n: '03', t: 'Frost-Depth Engineered Footings', d: 'Footings are checked against township requirements for your elevation, not just poured to a generic valley depth.' },
              { n: '04', t: 'Licensed PA Contractor', d: 'The same licensed crew that serves the Lehigh Valley, bringing that standard of work up the mountain.' },
            ].map((item) => (
              <div key={item.n} className="flex gap-6 pb-8 border-b border-[#2a4030] last:border-0">
                <span className="text-4xl font-extrabold text-[#2a4030]">{item.n}</span>
                <div>
                  <h3 className="text-lg font-bold text-[#f5f0e6] mb-1">{item.t}</h3>
                  <p className="text-sm text-[#c4d1c1] leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services — alternating full-width stacked blocks */}
      <div className="bg-[#16281c] py-16 sm:py-24 border-y border-[#2a4030]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f5f0e6] mb-4 text-center">Services for Mountain &amp; Lakefront Properties</h2>
          <p className="text-[#c4d1c1] text-center max-w-2xl mx-auto mb-14">Retaining walls lead the list up here for a reason — but here's everything we pour across the Poconos.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-[#0e1a13] border border-[#2a4030] rounded-2xl p-7 hover:border-[#c98f4a]/60 transition-colors">
                <div className="w-11 h-11 rounded-lg bg-[#c98f4a]/15 flex items-center justify-center mb-5">
                  <s.icon className="h-5 w-5 text-[#c98f4a]" />
                </div>
                <h3 className="text-lg font-bold text-[#f5f0e6] mb-2">{s.title}</h3>
                <p className="text-sm text-[#c4d1c1] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Retaining wall deep-dive with image */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-[#2a4030] order-2 lg:order-1">
            <Image src="https://images.pexels.com/photos/9899881/pexels-photo-9899881.jpeg" alt="Stone steps and wall beside a mountain home" fill quality={85} className="object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c98f4a] mb-4">
              <Mountain className="h-4 w-4" /> Signature Poconos Service
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f5f0e6] mb-5">Retaining Walls That Actually Hold</h2>
            <p className="text-[#c4d1c1] leading-relaxed mb-4">
              A retaining wall on a Pocono lot is doing real structural work — holding back saturated soil on a slope, protecting a foundation below it, or turning an unusable hillside into a level yard. We grade the site, build in proper drainage behind the wall so hydrostatic pressure doesn't push it out over time, and choose segmental block or poured concrete based on the grade.
            </p>
            <p className="text-[#c4d1c1] leading-relaxed">
              This isn't decorative garden edging — it's engineered for what a Pocono winter and spring thaw put a hillside through.
            </p>
          </div>
        </div>
      </div>

      {/* Vertical timeline process */}
      <div className="bg-[#16281c] py-16 sm:py-24 border-y border-[#2a4030]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f5f0e6] mb-14 text-center">From First Call to Finished Pour</h2>
          <div className="max-w-2xl mx-auto relative pl-10">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[#2a4030]" />
            {[
              { t: 'Site Walk & Estimate', d: 'We walk the property with you — slope, access, tree line — and give a free written quote based on what we see.' },
              { t: 'Season & Access Planning', d: "We schedule around the mountain's weather window and plan equipment access for tighter cabin and lake lots." },
              { t: 'Excavation & Drainage', d: 'Grading, drainage planning, and forming happen before any concrete touches the ground.' },
              { t: 'Pour, Cure & Walkthrough', d: 'We pour to depth and spec, then walk the finished work with you and cover cure-time care.' },
            ].map((step, i) => (
              <div key={i} className="relative mb-10 last:mb-0">
                <div className="absolute -left-10 top-1 w-8 h-8 rounded-full bg-[#c98f4a] text-[#0e1a13] font-bold text-sm flex items-center justify-center">{i + 1}</div>
                <h3 className="text-lg font-bold text-[#f5f0e6] mb-1">{step.t}</h3>
                <p className="text-sm text-[#c4d1c1] leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Owner quote — dark pull quote treatment */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto border-l-4 border-[#c98f4a] pl-8">
          <Quote className="h-8 w-8 text-[#c98f4a] mb-4" />
          <p className="text-2xl sm:text-3xl font-semibold text-[#f5f0e6] leading-snug mb-5">
            "We don't just get in to get the job done. We work closely with homeowners to know exactly what they want, and we pay attention to the minor details."
          </p>
          <p className="text-[#8ba088] font-medium mb-6">— Woody B., Owner</p>
          <a href={YELP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#c98f4a] font-semibold hover:text-[#e0aa66] transition-colors">
            Read homeowner reviews on Yelp <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-[#16281c] py-16 sm:py-24 border-y border-[#2a4030]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f5f0e6] mb-10 text-center">The Terrain We Build On</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { src: 'https://images.pexels.com/photos/7161537/pexels-photo-7161537.jpeg', alt: 'Cabin in a snowy forest' },
              { src: 'https://images.pexels.com/photos/28677184/pexels-photo-28677184.jpeg', alt: 'Alpine landscape with mountain cabin' },
              { src: 'https://images.pexels.com/photos/9899881/pexels-photo-9899881.jpeg', alt: 'Stone stairs beside a wooden mountain home' },
              { src: 'https://images.pexels.com/photos/27789438/pexels-photo-27789438.jpeg', alt: 'Stone houses in a mountain setting' },
              { src: 'https://images.pexels.com/photos/6915593/pexels-photo-6915593.jpeg', alt: 'Aerial view of a construction site' },
              { src: 'https://images.pexels.com/photos/1724896/pexels-photo-1724896.jpeg', alt: 'Road through a pine forest' },
            ].map((img, i) => (
              <div key={i} className="relative h-40 sm:h-52 rounded-xl overflow-hidden border border-[#2a4030]">
                <Image src={img.src} alt={img.alt} fill quality={75} className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local area chips */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Snowflake className="h-8 w-8 text-[#c98f4a] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#f5f0e6] mb-4">Serving the Pocono Mountains</h2>
          <p className="text-[#c4d1c1] leading-relaxed mb-6">
            From Mount Pocono down to Hawley, we take on foundation, retaining wall and excavation work that most valley contractors turn away.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {serviceAreas.map((area) => (
              <span key={area} className="text-xs font-medium bg-[#16281c] border border-[#2a4030] rounded-full px-3 py-1.5 text-[#c4d1c1]">{area}</span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#c98f4a] hover:text-[#e0aa66]"><MapPin className="h-4 w-4" />View on Google Maps</a>
            <a href={WEBSITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#c98f4a] hover:text-[#e0aa66]"><ExternalLink className="h-4 w-4" />Visit Our Website</a>
          </div>
        </div>
      </div>

      {/* FAQ — accordion */}
      <div className="bg-[#16281c] py-16 sm:py-24 border-y border-[#2a4030]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f5f0e6] mb-10 text-center">Poconos FAQs</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-[#2a4030]">
                  <AccordionTrigger className="text-left text-[#f5f0e6] hover:no-underline text-base sm:text-lg font-semibold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#c4d1c1] leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Cross-link to Lehigh Valley */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <Link href="/businesses/woodys-concrete-and-masonry-construction/" className="block bg-[#16281c] border border-[#2a4030] rounded-2xl p-8 hover:border-[#c98f4a]/60 transition-colors group">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-[#f5f0e6] mb-1 group-hover:text-[#c98f4a] transition-colors">Also Serving the Lehigh Valley</h3>
              <p className="text-[#c4d1c1] text-sm">Patios, sidewalks, foundations and porches for homeowners in Danielsville, Bethlehem, Allentown &amp; Easton.</p>
            </div>
            <span className="text-[#c98f4a] font-semibold whitespace-nowrap">View Lehigh Valley Service Area →</span>
          </div>
        </Link>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-28">
        <div className="bg-[#c98f4a] rounded-2xl p-8 sm:p-14 text-center text-[#0e1a13] shadow-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5">Book Your Spot This Season</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Mountain pour windows fill up early. Call {PHONE} for a free estimate anywhere in the Poconos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-[#0e1a13] text-[#f5f0e6] hover:bg-[#16281c] px-8 font-bold" asChild>
              <a href={PHONE_HREF}><Phone className="h-5 w-5 mr-2" />Call {PHONE}</a>
            </Button>
            <Button size="lg" variant="outline" className="border-[#0e1a13] text-[#0e1a13] hover:bg-[#0e1a13]/10 px-8" asChild>
              <a href={`mailto:${EMAIL}`}><Mail className="h-5 w-5 mr-2" />Email Us</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bespoke footer */}
      <footer className="bg-[#0a140d] border-t border-[#2a4030] pt-14 pb-28 sm:pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#8a5a2e] flex items-center justify-center">
                  <Mountain className="h-5 w-5 text-[#0e1a13]" />
                </div>
                <span className="font-semibold text-[#f5f0e6]">Woody's Concrete &amp; Masonry</span>
              </div>
              <p className="text-sm text-[#8ba088] leading-relaxed">Licensed concrete &amp; masonry contractor based in Danielsville, PA, serving the Pocono Mountains and the Lehigh Valley.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#c98f4a] mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-[#c4d1c1]">
                <li><a href={PHONE_HREF} className="hover:text-[#f5f0e6]">{PHONE}</a></li>
                <li><a href={`mailto:${EMAIL}`} className="hover:text-[#f5f0e6]">{EMAIL}</a></li>
                <li><a href={WEBSITE} target="_blank" rel="noopener noreferrer" className="hover:text-[#f5f0e6]">woodysconcrete321.com</a></li>
                <li><a href={YELP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#f5f0e6]">Yelp Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#c98f4a] mb-4">Service Areas</h4>
              <ul className="space-y-2 text-sm text-[#c4d1c1]">
                {serviceAreas.slice(0, 5).map((a) => <li key={a}>{a}</li>)}
              </ul>
              <Link href="/businesses/woodys-concrete-and-masonry-construction/" className="inline-block mt-4 text-sm font-semibold text-[#c98f4a] hover:text-[#e0aa66]">
                See Lehigh Valley service area →
              </Link>
            </div>
          </div>
          <div className="border-t border-[#2a4030] mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#8ba088]">
            <span>Powered by NearbyBizFinder</span>
            <div className="flex gap-6">
              <Link href="/privacy/" className="hover:text-[#f5f0e6]">Privacy Policy</Link>
              <Link href="/terms/" className="hover:text-[#f5f0e6]">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky mobile call bar — unique to this page */}
      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden bg-[#c98f4a] border-t border-[#0e1a13]/20">
        <a href={PHONE_HREF} className="flex items-center justify-center gap-2 py-4 font-bold text-[#0e1a13]">
          <Phone className="h-5 w-5" /> Call {PHONE} for a Free Estimate
        </a>
      </div>
    </div>
  );
}
