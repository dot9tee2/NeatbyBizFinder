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
  Clock3,
  Quote,
  Sun,
  Footprints,
  Truck,
  Layers,
  Building2,
  Blocks,
  Armchair,
  Star,
  ExternalLink,
} from 'lucide-react';
import BusinessHeader from '@/components/business-landing/business-header';
import BusinessFooter from '@/components/business-landing/business-footer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const SITE_URL = 'https://nearbybizfinder.com/businesses/woodys-concrete-and-masonry-construction/';
const YELP_URL = 'https://www.yelp.com/biz/woodys-concrete-and-masonry-construction-danielsville';
const MAP_URL = 'https://share.google/LBZYC9Gu6L94fqEoe';

export const metadata: Metadata = {
  title: "Woody's Concrete & Masonry | Lehigh Valley, PA Concrete Contractor",
  description:
    "Family-owned concrete & masonry contractor serving Danielsville, Bethlehem, Allentown & Easton. Patios, retaining walls, foundations, footings, sidewalks & porches. Free estimates.",
  alternates: {
    canonical: '/businesses/woodys-concrete-and-masonry-construction/',
  },
  keywords: [
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
    title: "Woody's Concrete & Masonry | Lehigh Valley, PA Concrete Contractor",
    description:
      'Patios, sidewalks, retaining walls, foundations, footings & porches for Lehigh Valley homeowners. Free estimates, honest pricing.',
    images: ['https://images.pexels.com/photos/2469/pexels-photo-2469.jpeg'],
    url: SITE_URL,
    type: 'website',
    siteName: 'NearbyBizFinder',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Woody's Concrete & Masonry | Lehigh Valley, PA Concrete Contractor",
    description: 'Patios, retaining walls, foundations, footings & porches for Lehigh Valley homeowners.',
    images: ['https://images.pexels.com/photos/2469/pexels-photo-2469.jpeg'],
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
    featuredImage: 'https://images.pexels.com/photos/2469/pexels-photo-2469.jpeg',
    description:
      "Family-owned concrete and masonry contractor based in Danielsville, PA, serving the Lehigh Valley with patios, sidewalks, retaining walls, foundations, footings, excavation and porches.",
    city: 'Danielsville',
    state: 'PA',
    zipCode: '18038',
  };

  const serviceAreas = [
    'Danielsville, PA',
    'Bethlehem, PA',
    'Allentown, PA',
    'Easton, PA',
    'Nazareth, PA',
    'Northampton, PA',
    'Whitehall, PA',
  ];

  const services = [
    {
      title: 'Patios',
      description: 'Broom-finished or stamped concrete patios built for Lehigh Valley backyards, from cookout-ready slabs to decorative outdoor living spaces.',
      icon: Sun,
      features: ['Stamped & Broom Finishes', 'Proper Drainage Slope', '4000 PSI Mix', 'Custom Sizing'],
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
      description: 'Segmental and poured retaining walls that hold back sloped Lehigh Valley yards while adding usable, level space.',
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
      title: 'Locally Owned in Danielsville',
      description: "Rooted in Northampton County, we know the soil, the frost line, and the neighborhoods across the Lehigh Valley.",
      icon: MapPin,
    },
    {
      title: 'Licensed Contractor',
      description: 'Concrete and masonry work performed by a licensed Pennsylvania contractor, with every project pulled to code.',
      icon: Shield,
    },
    {
      title: 'Free, No-Pressure Estimates',
      description: "A straightforward, honest quote before any work begins, so you know exactly what you're paying for.",
      icon: Clock3,
    },
  ];

  const faqs = [
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
      a: "Yes, Woody's Concrete and Masonry Construction operates as a licensed Pennsylvania contractor. We're happy to provide documentation as part of your estimate.",
    },
    {
      q: "What's the difference between stamped and standard concrete?",
      a: "Standard concrete gets a broom or smooth trowel finish and is the most budget-friendly option. Stamped concrete is textured and colored to mimic flagstone, slate, or brick, and costs more due to the extra labor and materials, but it's a popular upgrade for patios and porches in the Lehigh Valley.",
    },
    {
      q: 'How deep do footings need to be poured in Northampton County?',
      a: 'Footings need to be poured below the local frost line so freeze-thaw cycles don\'t heave the concrete — in our region that typically means a minimum depth in the 30–36 inch range, though the exact requirement depends on your township\'s building code. We pull permits and pour to spec so your footings pass inspection the first time.',
    },
    {
      q: 'How long does a typical patio or driveway project take?',
      a: 'Most residential patios and walkways are excavated, formed, and poured within 1–3 days, with an additional 3–7 days of cure time before heavy use. Larger foundation or retaining wall projects take longer depending on scope — we\'ll walk you through a realistic timeline during your estimate.',
    },
    {
      q: 'Do you handle the excavation, or just the concrete pour?',
      a: 'We handle both. Grading and excavation are part of nearly every job we take on, since a patio, footing, or retaining wall is only as good as the ground it sits on.',
    },
    {
      q: 'What areas of the Lehigh Valley do you serve?',
      a: "We're based in Danielsville and regularly work throughout Bethlehem, Allentown, Easton, Nazareth, Northampton, and Whitehall. If you're nearby and not sure we cover your address, just give us a call.",
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
      addressLocality: businessData.city,
      addressRegion: businessData.state,
      postalCode: businessData.zipCode,
      addressCountry: 'US',
    },
    telephone: businessData.phone,
    email: businessData.email,
    sameAs: [YELP_URL, businessData.website],
    hasMap: MAP_URL,
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
          src="https://images.pexels.com/photos/2469/pexels-photo-2469.jpeg"
          alt="Concrete being poured at a Lehigh Valley job site"
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
                Lehigh Valley's Concrete &amp; Masonry Contractor
              </Badge>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                Concrete &amp; Masonry Built for the Lehigh Valley
              </h1>
              <p className="text-lg sm:text-xl text-amber-50/90 leading-relaxed mb-8 max-w-2xl">
                Based in Danielsville, <strong>Woody's Concrete and Masonry Construction</strong> pours patios, sidewalks, retaining walls, foundations, footings and porches for homeowners across Bethlehem, Allentown, Easton and Northampton County.
              </p>
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
              From a new sidewalk to a full foundation, here's what we pour across the Lehigh Valley.
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
              <Image src="https://images.pexels.com/photos/16001335/pexels-photo-16001335.jpeg" alt="Poured concrete wall with exposed rebar reinforcement" fill quality={85} className="object-cover" />
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2b1c10] mb-4">Foundations &amp; Footings Done to Code</h3>
              <p className="text-stone-600 leading-relaxed mb-3">
                Every footing we pour goes below the local frost line and gets tied with rebar before a truck ever shows up. Whether it's a footer for a new porch, a garage addition, or a full foundation wall, we pull the proper permits and pour to a 4000 PSI mix built for Pennsylvania winters.
              </p>
              <p className="text-stone-600 leading-relaxed">
                We coordinate excavation, forming, and inspection scheduling so your project passes the first time — no callbacks, no guessing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-8 sm:p-10 order-2 lg:order-1">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2b1c10] mb-4">Retaining Walls for Sloped Lehigh Valley Lots</h3>
              <p className="text-stone-600 leading-relaxed mb-3">
                Plenty of Northampton County backyards drop off fast. A properly built retaining wall — with drainage backfill behind it, not just stacked block — stops erosion and turns a hillside into usable, level space for a patio, garden bed, or play area.
              </p>
              <p className="text-stone-600 leading-relaxed">
                We build both segmental block and poured concrete walls, sized to the grade and soil on your property.
              </p>
            </div>
            <div className="relative h-64 lg:h-full min-h-[280px] order-1 lg:order-2">
              <Image src="https://images.pexels.com/photos/34257452/pexels-photo-34257452.jpeg" alt="Rustic stone retaining wall in a residential yard" fill quality={85} className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative h-64 lg:h-full min-h-[280px]">
              <Image src="https://images.pexels.com/photos/2058738/pexels-photo-2058738.jpeg" alt="Excavation equipment preparing a job site before a concrete pour" fill quality={85} className="object-cover" />
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2b1c10] mb-4">Excavation First, Concrete Second</h3>
              <p className="text-stone-600 leading-relaxed mb-3">
                A patio or sidewalk is only as good as the ground underneath it. Before we form anything, we grade the site, plan for water runoff, and remove the debris and old material that would otherwise crack or settle your new concrete within a few seasons.
              </p>
              <p className="text-stone-600 leading-relaxed">
                It's the step homeowners rarely see in the finished photos — and the one that determines whether your investment lasts 5 years or 50.
              </p>
            </div>
          </div>
        </div>

        {/* Local area / trust */}
        <div className="mb-16 sm:mb-20">
          <div className="bg-gradient-to-r from-[#2b1c10] to-[#3d2a18] rounded-2xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">Proudly Based in Danielsville, Serving the Whole Lehigh Valley</h2>
                <p className="text-amber-50/80 leading-relaxed mb-4">
                  Northampton County is home. We know how the clay-heavy soil here settles, how deep to dig before the frost line, and which neighborhoods across Bethlehem, Allentown, and Easton need extra drainage planning before a pour.
                </p>
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
                <a href={YELP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-5 py-4">
                  <span className="flex items-center gap-3 text-sm font-medium"><Star className="h-5 w-5 text-amber-400" />Read Reviews on Yelp</span>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { n: '1', t: 'Free Estimate', d: "Woody visits your property, talks through the project, and gives you a straight, written quote." },
              { n: '2', t: 'Excavation & Grading', d: 'We prep the site, plan for drainage, and remove anything that would undermine the pour.' },
              { n: '3', t: 'Forming & Pouring', d: '4000 PSI mix, rebar where it counts, and the finish you asked for — stamped or broomed.' },
              { n: '4', t: 'Cure & Walkthrough', d: "We walk the finished work with you and go over cure-time care so it lasts." },
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

        {/* Owner quote / trust instead of fabricated testimonials */}
        <div className="mb-16 sm:mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-10 w-10 text-amber-500 mx-auto mb-6" />
            <p className="font-serif text-2xl sm:text-3xl text-[#2b1c10] leading-snug mb-6">
              "We don't just get in to get the job done. We work closely with homeowners to know exactly what they want, and we pay attention to the minor details."
            </p>
            <p className="text-stone-500 font-medium mb-8">— Woody B., Owner</p>
            <a href={YELP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-800 transition-colors">
              Read what Lehigh Valley homeowners are saying on Yelp <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Gallery strip */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2b1c10] mb-8 text-center">A Look at the Work</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { src: 'https://images.pexels.com/photos/2469/pexels-photo-2469.jpeg', alt: 'Concrete pour in progress' },
              { src: 'https://images.pexels.com/photos/14283372/pexels-photo-14283372.jpeg', alt: 'Concrete walkway lined with greenery' },
              { src: 'https://images.pexels.com/photos/16001335/pexels-photo-16001335.jpeg', alt: 'Reinforced concrete wall texture' },
              { src: 'https://images.pexels.com/photos/34257452/pexels-photo-34257452.jpeg', alt: 'Stone retaining wall detail' },
              { src: 'https://images.pexels.com/photos/5008394/pexels-photo-5008394.jpeg', alt: 'Residential home with front porch' },
              { src: 'https://images.pexels.com/photos/2058738/pexels-photo-2058738.jpeg', alt: 'Excavation equipment on site' },
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
                <p className="text-stone-600 leading-relaxed text-sm">{f.a}</p>
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
        </div>
      </div>

      <BusinessFooter
        businessName={businessData.name}
        businessPhone={businessData.phone}
        businessEmail={businessData.email}
        businessWebsite={businessData.website}
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
