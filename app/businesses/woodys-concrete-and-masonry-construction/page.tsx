import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Award,
  Shield,
  ShieldCheck,
  Clock3,
  Quote,
  Sun,
  Footprints,
  Truck,
  Layers,
  Building2,
  Blocks,
  Armchair,
  Car,
  Star,
  ExternalLink,
} from 'lucide-react';
import BusinessHeader from '@/components/business-landing/business-header';
import BusinessFooter from '@/components/business-landing/business-footer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const SITE_URL = 'https://nearbybizfinder.com/businesses/woodys-concrete-and-masonry-construction/';
const YELP_URL = 'https://www.yelp.com/biz/woodys-concrete-and-masonry-construction-danielsville';
const MAP_URL = 'https://share.google/LBZYC9Gu6L94fqEoe';
const HIC_SEARCH_URL = 'https://hicsearch.attorneygeneral.gov/';
const HIC_NUMBER = '131444';

export const metadata: Metadata = {
  title: 'Concrete & Masonry Contractor | Bath, PA & Lehigh Valley',
  description:
    'Family-owned concrete & masonry contractor in Bath, PA serving Danielsville, the Lehigh Valley & Poconos. Patios, walls, foundations & footings. Free estimates.',
  alternates: {
    canonical: '/businesses/woodys-concrete-and-masonry-construction/',
  },
  keywords: [
    'concrete contractor Bath PA',
    'concrete contractor Lehigh Valley PA',
    'concrete patio Lehigh Valley',
    'retaining wall contractor Lehigh Valley PA',
    'concrete foundation contractor Northampton County',
    'masonry contractor Danielsville PA',
    'stamped concrete patio Lehigh Valley',
    'concrete footings contractor PA',
    'porch builder Lehigh Valley PA',
    'excavation contractor Lehigh Valley',
    'sidewalk installation Bethlehem PA',
    "Woody's Concrete and Masonry Construction",
  ],
  openGraph: {
    title: 'Concrete & Masonry Contractor | Bath, PA & Lehigh Valley',
    description:
      'Patios, sidewalks, retaining walls, foundations, footings & porches for Lehigh Valley and Poconos homeowners. Free estimates, honest pricing.',
    images: ['/woodys-concrete-and-masonry-construction/lehigh-valley/hero.webp'],
    url: SITE_URL,
    type: 'website',
    siteName: 'NearbyBizFinder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concrete & Masonry Contractor | Bath, PA & Lehigh Valley',
    description: 'Patios, retaining walls, foundations, footings & porches for Lehigh Valley homeowners.',
    images: ['/woodys-concrete-and-masonry-construction/lehigh-valley/hero.webp'],
  },
  robots: { index: true, follow: true },
};

export default function WoodysConcreteMasonryPage() {
  const businessData = {
    name: "Woody's Concrete and Masonry Construction",
    category: 'Concrete & Masonry Contractor',
    priceRange: '$$',
    phone: '(610) 751-2928',
    phoneHref: 'tel:+16107512928',
    email: 'woodysconcrete321@gmail.com',
    website: 'https://www.woodysconcrete321.com/',
    featuredImage: '/woodys-concrete-and-masonry-construction/lehigh-valley/hero.webp',
    description:
      "Family-owned concrete and masonry contractor based in Bath, PA (PA HIC #131444), serving Danielsville, the Lehigh Valley and the Poconos with patios, sidewalks, retaining walls, foundations, footings, excavation and porches.",
    streetAddress: '3053 Mountain View Dr',
    city: 'Bath',
    state: 'PA',
    zipCode: '18014',
  };

  const serviceAreas = [
    'Danielsville, PA',
    'Bath, PA',
    'Allentown, PA',
    'Bethlehem, PA',
    'Whitehall, PA',
    'Coplay, PA',
    'Catasauqua, PA',
    'Northampton, PA',
    'Kutztown, PA',
    'Lehighton, PA',
    'Palmerton, PA',
    'Effort, PA',
    'Brodheadsville, PA',
  ];

  const services = [
    {
      title: 'Patios',
      description: 'Broom-finished or stamped concrete patios built for Lehigh Valley backyards, from cookout-ready slabs to decorative outdoor living spaces.',
      icon: Sun,
      features: ['Stamped & Broom Finishes', 'Proper Drainage Slope', '4000 PSI Mix', 'Custom Sizing'],
    },
    {
      title: 'Driveway Installation',
      description: 'Concrete driveways poured to hold up against daily vehicle weight and Lehigh Valley freeze-thaw cycles.',
      icon: Car,
      features: ['Reinforced for Vehicle Loads', 'Proper Base Compaction', 'Control Joint Placement', 'Broom or Exposed Aggregate Finish'],
    },
    {
      title: 'Sidewalks & Walkways',
      description: 'Code-compliant sidewalks and garden walkways poured to hold up against Northampton County freeze-thaw cycles.',
      icon: Footprints,
      features: ['Municipal Spec Compliant', 'Control Joints', 'Slip-Resistant Finish', 'Clean Edging'],
    },
    {
      title: 'Excavation',
      description: 'Grading and excavation done right before a single yard of concrete is poured, so every project starts on solid ground.',
      icon: Truck,
      features: ['Site Grading', 'Drainage Planning', 'Debris Removal', 'Utility-Aware Digging'],
    },
    {
      title: 'Concrete Footings',
      description: 'Footings poured to local depth and reinforcement requirements so decks, additions, porches and walls stay put for decades.',
      icon: Layers,
      features: ['Frost-Depth Poured', 'Rebar Reinforced', 'Deck & Addition Ready', 'Inspection-Ready Forms'],
    },
    {
      title: 'Foundations',
      description: 'Residential foundation work for additions, garages and outbuildings, built with the same care as a full home foundation.',
      icon: Building2,
      features: ['Poured Foundation Walls', 'Waterproofing Options', 'Steel Reinforcement', 'Garage & Addition Footers'],
    },
    {
      title: 'Retaining Walls',
      description: 'Segmental and poured retaining walls that hold back sloped Lehigh Valley yards and steeper Poconos terrain while adding usable, level space.',
      icon: Blocks,
      features: ['Erosion Control', 'Drainage Backfill', 'Block or Poured Options', 'Engineered for Grade'],
    },
    {
      title: 'Porches',
      description: 'Concrete porch pads and steps built to match your home, from simple stoops to full covered-porch foundations.',
      icon: Armchair,
      features: ['Broom or Stamped Finish', 'Matching Steps', 'Proper Footings', 'Railing-Ready Edges'],
    },
  ];

  const whyChooseUs = [
    {
      title: 'Hands-On Craftsmanship',
      description: '"We don\'t just get in to get the job done. We work closely with homeowners to know exactly what they want, and we pay attention to the minor details." — Woody B., Owner',
      icon: Award,
    },
    {
      title: 'Based in Bath, Rooted in Northampton County',
      description: "We know the soil, the frost line, and the neighborhoods across the Lehigh Valley, Danielsville, and out to Monroe County — because we've been pouring in them, not just marketing to them.",
      icon: MapPin,
    },
    {
      title: 'PA-Registered Home Improvement Contractor',
      description: `HIC #${HIC_NUMBER}, fully insured, with every project pulled to code and permitted correctly for its township.`,
      icon: Shield,
    },
    {
      title: 'Free, No-Pressure Estimates',
      description: "A straightforward, honest quote before any work begins, so you know exactly what you're paying for.",
      icon: Clock3,
    },
  ];

  const faqs: { q: string; a: string; link?: { text: string; href: string } }[] = [
    {
      q: 'How much does a concrete patio cost in the Lehigh Valley?',
      a: 'Lehigh Valley homeowners typically budget somewhere in the $14–$25 per square foot range for a poured concrete patio, depending on size, site access, drainage needs, and whether you choose a plain broom finish or a decorative stamped pattern. We provide a firm, itemized quote after seeing the site in person.',
    },
    {
      q: 'Do you provide free estimates?',
      a: "Yes. Woody visits the property, talks through what you're picturing, and provides a written estimate at no cost and with no pressure to sign on the spot.",
    },
    {
      q: 'Are you licensed and insured?',
      a: `Yes — Woody's Concrete and Masonry Construction is a PA-registered Home Improvement Contractor (HIC #${HIC_NUMBER}) carrying general liability insurance. You can verify our registration directly through the PA Attorney General's HIC search tool.`,
      link: { text: "PA Attorney General's HIC search tool", href: HIC_SEARCH_URL },
    },
    {
      q: "What's the difference between stamped and standard concrete?",
      a: "Standard concrete gets a broom or smooth trowel finish and is the most budget-friendly option. Stamped concrete is textured and colored to mimic flagstone, slate, or brick, and costs more due to the extra labor and materials, but it's a popular upgrade for patios and porches in the Lehigh Valley.",
    },
    {
      q: 'How deep do footings need to be poured in Northampton County?',
      a: "Footings need to be poured below the local frost line so freeze-thaw cycles don't heave the concrete — in our region that typically means a minimum depth in the 30–36 inch range, deeper in higher-elevation Poconos townships. We confirm the exact spec and pull permits before pouring so your footings pass inspection the first time.",
    },
    {
      q: 'How long does a typical patio or driveway project take?',
      a: "Most residential patios, driveways and walkways are excavated, formed, and poured within 1–3 days, with an additional 3–7 days of cure time before heavy use. Larger foundation or retaining wall projects take longer depending on scope — we'll walk you through a realistic timeline during your estimate.",
    },
    {
      q: 'Do you handle the excavation, or just the concrete pour?',
      a: 'We handle both. Grading and excavation are part of nearly every job we take on, since a patio, footing, or retaining wall is only as good as the ground it sits on.',
    },
    {
      q: 'Do you take on Poconos or lakefront foundation and grading work?',
      a: "Yes — mountain and lakefront properties often need more grading and drainage planning than a typical valley lot, and we plan for it from the first site visit.",
    },
    {
      q: 'What areas do you serve?',
      a: "We're based in Bath, PA and most active in Danielsville, and we regularly work throughout Allentown, Bethlehem, Whitehall, Coplay, Catasauqua, Northampton, Kutztown, Lehighton, Palmerton, Effort, Brodheadsville, and the wider Lehigh, Northampton, Carbon and Monroe County region. If you're nearby and not sure we cover your address, just give us a call.",
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'GeneralContractor'],
    name: businessData.name,
    description: businessData.description,
    url: SITE_URL,
    image: businessData.featuredImage,
    priceRange: businessData.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.streetAddress,
      addressLocality: businessData.city,
      addressRegion: businessData.state,
      postalCode: businessData.zipCode,
      addressCountry: 'US',
    },
    telephone: businessData.phone,
    email: businessData.email,
    sameAs: [businessData.website, MAP_URL, YELP_URL],
    hasMap: MAP_URL,
    identifier: { '@type': 'PropertyValue', name: 'PA HIC', value: HIC_NUMBER },
    areaServed: serviceAreas.map((area) => ({ '@type': 'City', name: area })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Concrete & Masonry Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.title, description: service.description },
      })),
    },
    potentialAction: { '@type': 'ContactAction', target: `tel:${businessData.phone}` },
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbybizfinder.com/' },
      { '@type': 'ListItem', position: 2, name: 'Businesses', item: 'https://nearbybizfinder.com/businesses/' },
      { '@type': 'ListItem', position: 3, name: businessData.name, item: SITE_URL },
    ],
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <div className="min-h-screen bg-[#faf6f0]">
      <BusinessHeader
        businessName={businessData.name}
        businessPhone={businessData.phone}
        businessEmail={businessData.email}
        businessWebsite={businessData.website}
        businessCategory={businessData.category}
        theme="amber"
      />

      <Script id="business-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Script id="breadcrumb-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Script id="faq-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      {/* Breadcrumbs */}
      <div className="bg-white/70 border-b border-amber-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="/businesses/">Businesses</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href={SITE_URL.replace('https://nearbybizfinder.com', '')}>{businessData.name}</BreadcrumbLink></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[520px] sm:h-[600px] lg:h-[680px] w-full overflow-hidden">
        <Image
          src="/woodys-concrete-and-masonry-construction/lehigh-valley/hero.webp"
          alt="Freshly poured concrete patio and walkway beside a Lehigh Valley home"
          fill
          priority
          quality={85}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b1c10]/95 via-[#2b1c10]/70 to-[#2b1c10]/40" />
        <div className="absolute inset-0 flex items-end sm:items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-0">
            <div className="max-w-3xl text-white">
              <Badge className="mb-5 bg-amber-500/90 text-[#2b1c10] border-0 font-semibold px-4 py-1.5">
                Lehigh Valley &amp; Poconos Concrete &amp; Masonry Contractor
              </Badge>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                Concrete &amp; Masonry Built for the Lehigh Valley and Beyond
              </h1>
              <p className="text-lg sm:text-xl text-amber-50/90 leading-relaxed mb-5 max-w-2xl">
                Based in Bath, PA, <strong>Woody's Concrete and Masonry Construction</strong> (PA HIC #{HIC_NUMBER}) pours patios, sidewalks, retaining walls, foundations, footings and porches for homeowners across Danielsville, the Lehigh Valley, Northampton and Carbon Counties, and Monroe County/the Poconos.
              </p>
              <div className="inline-flex items-center gap-2 mb-8 rounded-full bg-white/10 border border-white/25 px-4 py-1.5 text-sm font-medium text-amber-50">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                PA HIC #{HIC_NUMBER} &middot; Fully Insured
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-[#2b1c10] font-semibold px-8" asChild>
                  <a href={businessData.phoneHref}><Phone className="h-5 w-5 mr-2" />Get a Free Estimate</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/40 text-white hover:bg-white/20 px-8" asChild>
                  <a href={YELP_URL} target="_blank" rel="noopener noreferrer">
                    <Star className="h-5 w-5 mr-2" />See Reviews on Yelp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Why choose us */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1c10] mb-5">
            Why Lehigh Valley Homeowners Call Woody's
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            A small, family-run crew that treats every driveway, patio, and foundation like it's for our own house.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {whyChooseUs.map((item, i) => (
            <Card key={i} className="border-0 shadow-md bg-white">
              <CardContent className="p-6 sm:p-7">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-5">
                  <item.icon className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2b1c10] mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services grid */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1c10] mb-5">Our Services</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Woody's is a full-service concrete and masonry contractor — we handle poured concrete alongside brick and stone masonry, so you're not hiring two different crews for one backyard project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="border-0 shadow-md bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 sm:p-7">
                  <div className="w-12 h-12 rounded-lg bg-[#2b1c10] flex items-center justify-center mb-5">
                    <service.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2b1c10] mb-2">{service.title}</h3>
                  <p className="text-stone-600 mb-4 leading-relaxed text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f, fi) => (
                      <li key={fi} className="flex items-center text-sm text-stone-600">
                        <CheckCircle className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed sections with imagery */}
        <div className="mb-16 sm:mb-20 space-y-10 sm:space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative h-64 lg:h-full min-h-[280px]">
              <Image src="/woodys-concrete-and-masonry-construction/lehigh-valley/sidewalk.webp" alt="Concrete sidewalk poured along a curb — Danielsville, PA" fill quality={85} className="object-cover" />
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2b1c10] mb-4">Sidewalks &amp; Walkways Built to Last</h3>
              <p className="text-stone-600 leading-relaxed mb-3">
                A walkway gets more freeze-thaw abuse than almost anything else on your property. We pour to municipal spec with proper control joints and a slip-resistant finish, so it holds its edges and doesn't heave through a Lehigh Valley winter.
              </p>
              <p className="text-stone-600 leading-relaxed">
                From a simple front walk to a stepped path connecting a patio to the house, we grade and form it to drain correctly the first time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-8 sm:p-10 order-2 lg:order-1">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2b1c10] mb-4">Retaining Walls for Sloped Lehigh Valley &amp; Poconos Lots</h3>
              <p className="text-stone-600 leading-relaxed mb-3">
                Plenty of Northampton County backyards drop off fast, and Monroe County properties near the mountains often need it even more. A properly built retaining wall — with drainage backfill behind it rather than just stacked block — stops erosion and turns a hillside into usable, level space.
              </p>
              <p className="text-stone-600 leading-relaxed">
                We build both segmental block and poured concrete walls, sized to the slope and load of your lot.
              </p>
            </div>
            <div className="relative h-64 lg:h-full min-h-[280px] order-1 lg:order-2">
              <Image src="/woodys-concrete-and-masonry-construction/lehigh-valley/retaining-wall.webp" alt="Segmental concrete retaining wall — Lehigh Valley backyard" fill quality={85} className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative h-64 lg:h-full min-h-[280px]">
              <Image src="/woodys-concrete-and-masonry-construction/lehigh-valley/patio-2.webp" alt="Freshly poured concrete patio beside French doors — Lehigh Valley" fill quality={85} className="object-cover" />
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2b1c10] mb-4">Patios Built for How You Actually Use Them</h3>
              <p className="text-stone-600 leading-relaxed mb-3">
                Whether it's a simple broom-finished slab off the back door or a stamped patio around an existing pool or deck, we grade for drainage before we ever form the pour, so water moves away from your foundation, not toward it.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Every patio gets a proper gravel base and control joints cut to spec, so it holds up through Lehigh Valley freeze-thaw seasons without cracking.
              </p>
            </div>
          </div>
        </div>

        {/* Local area / trust */}
        <div className="mb-16 sm:mb-20">
          <div className="bg-gradient-to-r from-[#2b1c10] to-[#3d2a18] rounded-2xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">Proudly Based in Bath, PA — Serving Danielsville and the Whole Region</h2>
                <p className="text-amber-50/80 leading-relaxed mb-4">
                  Northampton County is home. We know how the clay-heavy soil settles, how deep to dig before the frost line, and which neighborhoods need extra drainage planning before a pour.
                </p>
                <ul className="text-amber-50/80 leading-relaxed mb-4 space-y-2 text-sm">
                  <li><strong className="text-amber-50">Danielsville</strong> — one of our most-served areas; a large share of our project volume, from patios to full foundation pours.</li>
                  <li><strong className="text-amber-50">Core Lehigh Valley</strong> — Bath, Allentown, Bethlehem, Whitehall, Coplay, Catasauqua, Northampton.</li>
                  <li><strong className="text-amber-50">Northampton &amp; Carbon County</strong> — Danielsville, Kutztown, Lehighton, Palmerton; larger lots mean more retaining wall and excavation work.</li>
                  <li>
                    <strong className="text-amber-50">Monroe County / The Poconos</strong> — Effort, Brodheadsville, and wider Monroe County; mountain and lakefront terrain calls for more foundation, drainage, and grading work.{' '}
                    <Link href="/businesses/woodys-concrete-and-masonry-construction/poconos/" className="text-amber-300 underline hover:text-amber-200">
                      See our dedicated Poconos service page.
                    </Link>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span key={area} className="text-xs font-medium bg-white/10 rounded-full px-3 py-1.5 text-amber-50/90">{area}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-5 py-4">
                  <span className="flex items-center gap-3 text-sm font-medium"><MapPin className="h-5 w-5 text-amber-400" />View on Google Maps</span>
                  <ExternalLink className="h-4 w-4 text-amber-200" />
                </a>
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-5 py-4">
                  <span className="flex items-center gap-3 text-sm font-medium"><Star className="h-5 w-5 text-amber-400" />Read Reviews on Google</span>
                  <ExternalLink className="h-4 w-4 text-amber-200" />
                </a>
                <a href={businessData.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-5 py-4">
                  <span className="flex items-center gap-3 text-sm font-medium"><Mail className="h-5 w-5 text-amber-400" />Visit Our Website</span>
                  <ExternalLink className="h-4 w-4 text-amber-200" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1c10] mb-5">How a Project Comes Together</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { n: '1', t: 'Free Estimate', d: 'Woody visits, talks through the project, and gives a straight, written quote.' },
              { n: '2', t: 'Permitting & Planning', d: 'Requirements vary by township; we handle it across Lehigh, Northampton, Carbon, and Monroe Counties.' },
              { n: '3', t: 'Excavation & Grading', d: 'We prep the site, plan for drainage, and remove anything that would undermine the pour.' },
              { n: '4', t: 'Forming & Pouring', d: '4000 PSI mix, rebar where it counts, and the finish you asked for — stamped or broomed.' },
              { n: '5', t: 'Cure & Walkthrough', d: 'We walk the finished work with you and go over cure-time care.' },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500 text-[#2b1c10] font-serif text-2xl font-bold flex items-center justify-center mx-auto mb-5">
                  {step.n}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2b1c10] mb-2">{step.t}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Owner quote */}
        <div className="mb-14 sm:mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-10 w-10 text-amber-500 mx-auto mb-6" />
            <p className="font-serif text-2xl sm:text-3xl text-[#2b1c10] leading-snug mb-6">
              "We don't just get in to get the job done. We work closely with homeowners to know exactly what they want, and we pay attention to the minor details."
            </p>
            <p className="text-stone-500 font-medium">— Woody B., Owner</p>
          </div>
        </div>

        {/* Customer testimonials */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2b1c10] mb-3">What Homeowners Are Saying</h2>
            <p className="text-stone-600">Real reviews from Lehigh Valley customers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'RJ Sayes', when: 'a month ago', text: 'Always helps complete our projects, great work, pride in what they do!' },
              { name: 'Cheryl Slingland', when: 'a month ago', text: 'Great price. He is very conscientious, does an excellent job, and is detail oriented. Extremely reasonable and does a fantastic job.' },
              { name: 'Gary Strausser', when: 'a month ago', text: 'Woody does a great job! He is very thorough, and professional. Definitely recommend him.' },
              { name: 'Jayleen Solt', when: 'a month ago', text: "We couldn't be happier with having Woody as a subcontractor for concrete and stone work. From start to finish, the workmanship is always exceptional on every project." },
            ].map((r, i) => (
              <Card key={i} className="border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }, (_, si) => (
                      <Star key={si} className="h-4 w-4 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">"{r.text}"</p>
                  <p className="text-sm font-semibold text-[#2b1c10]">{r.name}</p>
                  <p className="text-xs text-stone-400">{r.when}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-800 transition-colors">
              See more reviews on Google Maps <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Gallery strip */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2b1c10] mb-8 text-center">A Look at the Work</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { src: '/woodys-concrete-and-masonry-construction/lehigh-valley/hero.webp', alt: 'Freshly poured concrete patio and walkway — Bath, PA' },
              { src: '/woodys-concrete-and-masonry-construction/lehigh-valley/foundation-footings.webp', alt: 'Finished concrete patio with a step — Lehigh Valley' },
              { src: '/woodys-concrete-and-masonry-construction/lehigh-valley/patio.webp', alt: 'Concrete sidewalk poured along a curb — Danielsville, PA' },
              { src: '/woodys-concrete-and-masonry-construction/lehigh-valley/patio-2.webp', alt: 'Freshly poured concrete patio beside French doors — Lehigh Valley' },
              { src: '/woodys-concrete-and-masonry-construction/lehigh-valley/sidewalk.webp', alt: 'Aerial view of finished concrete walkway and steps — Northampton County' },
              { src: '/woodys-concrete-and-masonry-construction/lehigh-valley/retaining-wall.webp', alt: 'Segmental concrete retaining wall — Lehigh Valley backyard' },
            ].map((img, i) => (
              <div key={i} className="relative h-40 sm:h-52 rounded-xl overflow-hidden shadow-md">
                <Image src={img.src} alt={img.alt} fill quality={75} className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1c10] mb-5">Lehigh Valley FAQs</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
                <h3 className="font-serif text-lg font-bold text-[#2b1c10] mb-2">{f.q}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {f.a}
                  {f.link && (
                    <>
                      {' '}
                      <a href={f.link.href} target="_blank" rel="noopener noreferrer" className="text-amber-700 font-semibold underline hover:text-amber-800">
                        {f.link.text}
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-link to Poconos */}
        <div className="mb-4">
          <Link href="/businesses/woodys-concrete-and-masonry-construction/poconos/" className="block bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow border border-amber-100 group">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2b1c10] mb-1 group-hover:text-amber-700 transition-colors">Also Serving the Pocono Mountains</h3>
                <p className="text-stone-600 text-sm">Foundations, retaining walls, and excavation for mountain and lakefront properties across the Poconos.</p>
              </div>
              <span className="text-amber-700 font-semibold whitespace-nowrap">View Poconos Service Area →</span>
            </div>
          </Link>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 sm:p-14 text-center text-white shadow-2xl mt-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">Ready to Start Your Project?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Call {businessData.phone} for a free, no-pressure estimate anywhere in the Lehigh Valley.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50 px-8 font-semibold" asChild>
              <a href={businessData.phoneHref}><Phone className="h-5 w-5 mr-2" />Call {businessData.phone}</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 px-8" asChild>
              <a href={`mailto:${businessData.email}`}><Mail className="h-5 w-5 mr-2" />Email Us</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-amber-50/80">PA HIC #{HIC_NUMBER} &middot; Fully Insured</p>
        </div>
      </div>

      <BusinessFooter
        businessName={businessData.name}
        businessPhone={businessData.phone}
        businessEmail={businessData.email}
        businessWebsite={businessData.website}
        businessAddress={businessData.streetAddress}
        businessCity={businessData.city}
        businessState={businessData.state}
        businessZipCode={businessData.zipCode}
        serviceAreas={serviceAreas}
        locationPages={[
          { name: 'Lehigh Valley (Main)', href: '/businesses/woodys-concrete-and-masonry-construction/' },
          { name: 'Poconos', href: '/businesses/woodys-concrete-and-masonry-construction/poconos/' },
        ]}
        theme="amber"
        topStripe
        ctaBanner={{
          title: 'Free Estimates Across the Lehigh Valley',
          subtitle: 'Patios, retaining walls, foundations, footings & more',
          buttonText: `Call ${businessData.phone}`,
        }}
      />
    </div>
  );
}
