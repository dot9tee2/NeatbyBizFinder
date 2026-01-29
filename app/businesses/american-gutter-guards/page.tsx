import type { Metadata } from 'next';
import Script from 'next/script';
import OptimizedVideo from '@/components/ui/optimized-video';
import OptimizedImage from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Wrench, Droplets, Sparkles, Briefcase, Building, Layers, Star, Phone, MapPin, Clock, Mail, Globe, Shield,
  CheckCircle, ArrowRight, Users, Award, Clock3, Leaf, Zap, Heart, Home, DoorOpen, ShieldCheck, AlertTriangle
} from 'lucide-react';

import MobileNav from './components/mobile-nav';
import FAQAccordion from './components/faq-accordion';
import { ReviewsSection } from '@/components/reviews';

// ===== BUSINESS DATA =====
const businessData = {
  name: 'American Gutter Guards',
  category: 'Professional Gutter Guard Installation in Chesapeake, VA',
  rating: 4.9,
  reviewCount: 10,
  priceRange: '$$',
  phone: '(757) 559-8051',
  phoneE164: '+17575598051',
  email: 'amgg757@gmail.com',
  featuredImage: '/american-gutter-guards/hero.png',
  description: 'Avoid overflowing gutters and costly damage. Expert gutter guard installation, gutter cleaning and seamless gutter installation in Chesapeake, VA. Free inspection and satisfaction guarantee.',
};

const services = [
  {
    title: 'Gutter Guards (Primary Service)',
    description: 'Protect your home year-round with premium, custom-fit metal mesh gutter guards in Chesapeake, VA. Stop clogs, prevent overflow, and reduce maintenance for good.',
    icon: Home,
    image: '/american-gutter-guards/service-gutter-guards.png',
    features: [
      'Prevents clogging and overflow',
      'Reduces maintenance costs',
      'Extends gutter lifespan',
      'Low-profile design blends with roofline'
    ],
    price: 'Starting at $9 per foot'
  },
  {
    title: 'Gutter Cleaning',
    description: 'Keep your gutters clear and your home safe with professional gutter cleaning in Chesapeake, VA. We remove leaves, dirt, and buildup to ensure smooth water flow and prevent roof or foundation damage.',
    icon: DoorOpen,
    image: '/american-gutter-guards/service-gutter-cleaning.png',
    features: [
      'Prevents water damage and leaks',
      'Protects siding and landscaping',
      'Improves drainage efficiency',
      'Seasonal and one time cleanings available'
    ],
    price: 'Starting at $200'
  },
  {
    title: 'Seamless Gutter Installation',
    description: 'Upgrade your home with seamless gutters custom-fit to your roofline. Durable, leak-resistant, and designed for Chesapeake weather.',
    icon: Briefcase,
    image: '/american-gutter-guards/service-gutter-installation.png',
    features: [
      'Seamless, leak-resistant gutters',
      'Boosts curb appeal and home value',
      'Available in multiple colors and styles',
      'Professional, quick installation',
    ],
    price: 'Starting at $15 per foot'
  }
];

const serviceAreas = [
  'Chesapeake, VA (Primary Area)',
  'Virginia Beach, VA',
  'Norfolk, VA',
  'Portsmouth, VA',
  'Suffolk, VA',
  'Hampton, VA',
  'Newport News, VA',
  'Williamsburg, VA'
];

const whyChooseUs = [
  'Licensed & Insured Gutter Professionals',
  'Custom Gutter Solutions for Every Home',
  'Durable Materials & Expert Installation',
  'Flexible Scheduling & Quick Service',
  'Reliable & On-Time Service',
  '100% Satisfaction Guarantee',
  'Fully Insured & Bonded Company',
  'Free Estimates & Same-Day Service Available'
];

const galleryImages = [
  {
    src: '/american-gutter-guards/gallery-1.png',
    alt: 'Metal mesh gutter guards installed on a suburban home in Chesapeake, VA',
    category: 'Gutter Guards'
  },
  {
    src: '/american-gutter-guards/gallery-2.png',
    alt: 'Professional gutter cleaning service removing debris from gutters',
    category: 'Cleaning'
  },
  {
    src: '/american-gutter-guards/gallery-3.png',
    alt: 'Seamless gutter installation along roofline',
    category: 'Seamless Gutters'
  },
  {
    src: '/american-gutter-guards/gallery-4.png',
    alt: 'Downspout connected and water flowing cleanly',
    category: 'Installation'
  },
  {
    src: '/american-gutter-guards/gallery-5.png',
    alt: 'Close-up of premium metal mesh gutter guard',
    category: 'Gutter Guards'
  },
  {
    src: '/american-gutter-guards/gallery-6.jpeg',
    alt: 'Technician performing final water flow check',
    category: 'Final Check'
  },
  {
    src: '/american-gutter-guards/gallery-7.jpeg',
    alt: 'Newly installed gutter protection system',
    category: 'Gutter Guards'
  },
  {
    src: '/american-gutter-guards/gallery-8.jpeg',
    alt: 'Seamless aluminum gutter installation',
    category: 'Seamless Gutters'
  },
  {
    src: '/american-gutter-guards/gallery-9.jpeg',
    alt: 'Professional gutter cleaning and maintenance',
    category: 'Cleaning'
  },
  {
    src: '/american-gutter-guards/gallery-10.jpeg',
    alt: 'Premium gutter guard mesh close-up',
    category: 'Gutter Guards'
  },
  {
    src: '/american-gutter-guards/gallery-11.jpeg',
    alt: 'Complete home gutter system upgrade',
    category: 'Installation'
  },
  {
    src: '/american-gutter-guards/gallery-12.jpeg',
    alt: 'Leaf protection system for gutters',
    category: 'Protection'
  }
];

const stats = [
  { number: '500+', label: 'Clients', icon: Users },
  { number: '1k+', label: 'Happy Customers', icon: Award },
  { number: '100%', label: 'Satisfaction', icon: Heart }
];

const faqData = [
  {
    question: 'How long does gutter guard installation take?',
    answer: 'Most Chesapeake homes are completed in a single day. Larger or complex roofs may take a bit longer, but we schedule efficiently to minimize disruption.'
  },
  {
    question: 'Can you install gutter guards over my existing gutters?',
    answer: 'Yes. We assess your current gutters during the free inspection. If they are in good shape, we install guards on top. If not, we\'ll recommend seamless replacements.'
  },
  {
    question: 'What materials do you use?',
    answer: 'We install premium metal mesh gutter guards and seamless aluminum gutters designed for durability and Chesapeake weather.'
  },
  {
    question: 'Will I still need gutter cleaning after guards are installed?',
    answer: 'Maintenance is drastically reduced. An occasional light rinse or seasonal check is typically all that\'s needed.'
  },
  {
    question: 'Is there a warranty?',
    answer: 'Yes. We provide a workmanship guarantee and manufacturer-backed product coverage. Details provided with your quote.'
  },
  {
    question: 'Do you serve areas outside Chesapeake?',
    answer: 'Absolutely. Also serving Virginia Beach, Norfolk, Portsmouth, Suffolk, Hampton, Newport News, and Williamsburg, VA.'
  }
];

const pricingPlans = [
  {
    name: 'Gutter Cleaning',
    price: '$200',
    period: 'starting',
    features: [
      'Complete gutter cleaning',
      'Debris removal',
      'Downspout clearing',
      'Basic inspection',
      'Water flow testing'
    ],
    buttonText: 'Get Quote',
    featured: false
  },
  {
    name: 'Gutter Installation',
    price: '$1,200',
    period: 'starting',
    features: [
      'Seamless gutter installation',
      'Custom-fit to your home',
      'Multiple color options',
      'Professional installation',
      'Warranty included',
      'Satisfaction guarantee'
    ],
    buttonText: 'Get Quote',
    featured: true
  },
  {
    name: 'Gutter Guards',
    price: '$800',
    period: 'starting',
    features: [
      'Premium gutter guard installation',
      'Debris protection system',
      'Reduced maintenance needs',
      'Extended gutter lifespan',
      'Priority scheduling',
      'Free maintenance check'
    ],
    buttonText: 'Get Quote',
    featured: false
  }
];

// ===== METADATA =====
export const metadata: Metadata = {
  metadataBase: new URL('https://nearbybizfinder.com'),
  title: 'Gutter Guard Installation & Service – American Gutter Guards | No More Clogs',
  description:
    'Avoid overflowing gutters and costly damage. Expert gutter guard installation across Chesapeake, VA. Free inspection, fast turnaround, and satisfaction guarantee. Call (757) 559-8051.',
  alternates: {
    canonical: '/businesses/american-gutter-guards/',
  },
  keywords: [
    'gutter guard service',
    'gutter protection',
    'leaf guard installation',
    'gutter guard installation chesapeake va',
    'prevent clogged gutters',
    'gutter cleaning alternative',
    'gutter cleaning chesapeake va',
    'gutter installation chesapeake va'
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://nearbybizfinder.com/businesses/american-gutter-guards/',
    title: 'American Gutter Guards – Chesapeake\'s Gutter Guard & Cleaning Experts',
    description:
      'Stop cleaning gutters. Get professional gutter guard installation, gutter cleaning, and seamless gutter installs in Chesapeake, VA. Free inspection and guarantee.',
    siteName: 'NearbyBizFinder',
    locale: 'en_US',
    images: [
      {
        url: 'https://nearbybizfinder.com/american-gutter-guards/hero.png',
        alt: 'Metal mesh gutter guard installed on a roof in Chesapeake, VA',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'American Gutter Guards | Chesapeake VA Gutter Guard & Cleaning',
    description:
      'Avoid overflowing gutters. Expert gutter guard installation, cleaning and seamless gutters in Chesapeake, VA. Free inspection. Call (757) 559-8051.',
    images: ['https://nearbybizfinder.com/american-gutter-guards/hero.png'],
  },
  other: {
    'geo.region': 'US-VA',
    'geo.placename': 'Chesapeake',
    'geo.position': '36.7682;-76.2875',
    ICBM: '36.7682, -76.2875',
  },
};

// ===== STRUCTURED DATA =====
function JsonLdScripts() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbybizfinder.com/' },
      { '@type': 'ListItem', position: 2, name: 'Businesses', item: 'https://nearbybizfinder.com/businesses/' },
      { '@type': 'ListItem', position: 3, name: 'American Gutter Guards', item: 'https://nearbybizfinder.com/businesses/american-gutter-guards/' }
    ]
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  const howToStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to book a gutter service in Chesapeake, VA',
    step: [
      { '@type': 'HowToStep', name: 'Request Free Estimate', text: 'Contact us online or by phone to schedule a free inspection and estimate.' },
      { '@type': 'HowToStep', name: 'Professional Service', text: 'Our licensed team performs gutter cleaning, installation, or guard installation with precision and care.' },
      { '@type': 'HowToStep', name: 'Protect Your Home', text: 'Enjoy long-lasting protection from water damage with properly installed and maintained gutters.' }
    ]
  };

  const businessStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://nearbybizfinder.com/businesses/american-gutter-guards/#gutterservice',
    name: businessData.name,
    description: businessData.description,
    url: 'https://nearbybizfinder.com/businesses/american-gutter-guards/',
    image: [
      'https://nearbybizfinder.com/american-gutter-guards/hero.png',
      'https://nearbybizfinder.com/american-gutter-guards/why-us.png',
      'https://nearbybizfinder.com/american-gutter-guards/service-gutter-guards.png'
    ],
    priceRange: businessData.priceRange,
    telephone: businessData.phoneE164,
    email: businessData.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '318 Arizona St',
      addressLocality: 'Portsmouth',
      addressRegion: 'VA',
      postalCode: '23701',
      addressCountry: 'US'
    },
    areaServed: serviceAreas.map(area => ({
      '@type': 'City',
      name: area
    })),
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '16:00' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Gutter Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description
        }
      }))
    },
    hasMap: 'https://www.google.com/maps/place/American+Gutter+Guards,+Chesapeake,+VA',
    potentialAction: { '@type': 'ContactAction', target: `tel:${businessData.phoneE164}` },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessData.rating,
      reviewCount: businessData.reviewCount,
    },
  };

  const videoStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'American Gutter Guards Hero',
    description: 'Rainwater flowing through clean seamless gutters with metal mesh gutter guards in Chesapeake, VA.',
    thumbnailUrl: ['https://nearbybizfinder.com/american-gutter-guards/hero.png'],
    uploadDate: '2024-01-01T00:00:00Z',
    contentUrl: 'https://nearbybizfinder.com/american-gutter-guards/hero.mp4',
    embedUrl: 'https://nearbybizfinder.com/businesses/american-gutter-guards/',
    duration: 'PT12S',
    publisher: {
      '@type': 'Organization',
      name: 'American Gutter Guards'
    }
  };

  return (
    <>
      <Script
        id="business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData) }}
      />
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Script
        id="howto-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToStructuredData) }}
      />
      <Script
        id="video-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoStructuredData) }}
      />
    </>
  );
}

// ===== HELPER FUNCTIONS =====
const mapUrlForArea = (label: string) => {
  const name = label.replace(/\s*\(.*?\)\s*/g, '').trim();
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;
};

// ===== PAGE COMPONENT =====
export default function AmericanGutterGuardsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-slate-100 shadow-sm sticky top-0 z-50" role="banner">
        <div className="container mx-auto px-4 max-w-7xl" role="navigation" aria-label="Primary navigation">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <OptimizedImage
                src="/american-gutter-guards/americanGutterGuardsLogo.png"
                alt={`${businessData.name} logo`}
                width={80}
                height={80}
                className="mr-3"
              />
              <span className="text-xl font-bold">{businessData.name}</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-200 hover:text-emerald-400 transition-colors">Home</a>
              <a href="#problem" className="text-slate-200 hover:text-emerald-400 transition-colors">Problem</a>
              <a href="#services" className="text-slate-200 hover:text-emerald-400 transition-colors">Services</a>
              <a href="#about" className="text-slate-200 hover:text-emerald-400 transition-colors">Why Us</a>
              <a href="#pricing" className="text-slate-200 hover:text-emerald-400 transition-colors">Pricing</a>
              <a href="#service-areas" className="text-slate-200 hover:text-emerald-400 transition-colors">Areas</a>
              <a href="#contact" className="text-slate-200 hover:text-emerald-400 transition-colors">Contact</a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
                asChild
              >
                <a href={`tel:${businessData.phoneE164}`}>
                  <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                  Call Daniel
                </a>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <MobileNav
              businessName={businessData.name}
              phoneE164={businessData.phoneE164}
              phone={businessData.phone}
            />
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-slate-50 border-b">
        <div className="container mx-auto px-4 max-w-7xl py-2 text-sm">
          <a href="/" className="text-slate-600 hover:text-slate-900">Home</a>
          <span className="mx-2 text-slate-400">/</span>
          <a href="/businesses/" className="text-slate-600 hover:text-slate-900">Businesses</a>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-slate-900" aria-current="page">{businessData.name}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        {/* Hero Background */}
        <OptimizedVideo
          src="/american-gutter-guards/hero.mp4"
          alt="Gutter guard installation hero video"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-emerald-700/60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Stop Cleaning Gutters. Start Living Worry‑Free in Chesapeake, VA.
              </h1>
              <p className="text-xl mb-8 text-slate-200 leading-relaxed">
                Expert gutter guard installation, seamless gutters, and pro cleaning for Chesapeake homeowners. Free inspection. Guaranteed workmanship.
              </p>

              {/* Feature Points */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span className="text-lg">Licensed & insured technicians</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span className="text-lg">Custom-fit metal mesh gutter guards</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span className="text-lg">Fast, clean, professional installs</span>
                </div>
              </div>

              {/* Visible Rating */}
              <div className="flex items-center text-emerald-300 mb-6">
                <Star className="h-5 w-5 mr-2 fill-current" />
                <span className="text-lg font-semibold">
                  {businessData.rating} ★ ({businessData.reviewCount} reviews)
                </span>
              </div>

              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-900/30"
                asChild
              >
                <a href="#contact" aria-label="Get your free inspection">Get Your Free Inspection</a>
              </Button>
              <div className="mt-4 text-slate-200">
                Or call Daniel at <a href={`tel:${businessData.phoneE164}`} className="font-semibold underline decoration-emerald-400 hover:decoration-emerald-300">{businessData.phone}</a> or email <a href={`mailto:${businessData.email}`} className="font-semibold underline decoration-emerald-400 hover:decoration-emerald-300">{businessData.email}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -right-16 h-72 w-72 rounded-full bg-rose-100/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 max-w-7xl">
          <Badge className="mb-4 bg-rose-100 text-rose-800 border-rose-200">The Problem</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Clogged Gutters Cost You Time, Money, and Safety</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">
            When water can&apos;t flow, it finds a way into your home. These are the biggest risks Chesapeake homeowners face without protection.
          </p>

          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-rose-200 bg-white px-3 py-1 text-sm text-rose-700">
              <Droplets className="mr-2 h-4 w-4 text-rose-500" aria-hidden="true" /> Overflow stains
            </span>
            <span className="inline-flex items-center rounded-full border border-rose-200 bg-white px-3 py-1 text-sm text-rose-700">
              <Layers className="mr-2 h-4 w-4 text-rose-500" aria-hidden="true" /> Fascia rot
            </span>
            <span className="inline-flex items-center rounded-full border border-rose-200 bg-white px-3 py-1 text-sm text-rose-700">
              <Building className="mr-2 h-4 w-4 text-rose-500" aria-hidden="true" /> Foundation erosion
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-slate-700">
            <div className="group relative rounded-xl border border-rose-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 ring-1 ring-rose-200">
                <Leaf className="h-6 w-6 text-rose-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Constant Clogs</h3>
              <p>Leaves, pine needles, and debris block water flow, causing overflows and stains on siding and walkways.</p>
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-rose-50/0 to-rose-100/0 group-hover:to-rose-100/40 transition-colors" />
            </div>

            <div className="group relative rounded-xl border border-rose-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 ring-1 ring-rose-200">
                <Droplets className="h-6 w-6 text-rose-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Hidden Damage</h3>
              <p>Overflow leads to fascia rot, roof leaks, landscape erosion, and costly foundation issues over time.</p>
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-rose-50/0 to-rose-100/0 group-hover:to-rose-100/40 transition-colors" />
            </div>

            <div className="group relative rounded-xl border border-rose-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 ring-1 ring-rose-200">
                <AlertTriangle className="h-6 w-6 text-rose-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Risky Ladder Time</h3>
              <p>Seasonal ladder climbs are dangerous and time‑consuming. There&apos;s a safer, permanent alternative.</p>
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-rose-50/0 to-rose-100/0 group-hover:to-rose-100/40 transition-colors" />
            </div>
          </div>

          <div className="mt-8">
            <a href="#services" className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold">
              See how our gutter guards fix this <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="service-areas" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 border-emerald-200">Service Areas</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Chesapeake, VA — Our Home Base. Also Serving Nearby Cities.
            </h2>
            <p className="text-xl text-slate-600">
              We proudly serve Chesapeake first — and also Virginia Beach, Norfolk, Portsmouth, Suffolk, Hampton, Newport News, and Williamsburg.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {serviceAreas.map((area, i) => {
              const isPrimary = i === 0;
              return (
                <div
                  key={area}
                  className={`group relative overflow-hidden rounded-xl border bg-white/80 backdrop-blur-sm px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isPrimary ? 'border-emerald-500' : 'border-emerald-200 hover:border-emerald-400'}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
                        <MapPin className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                      </span>
                      <div>
                        <div className="text-base font-semibold text-slate-900">{area.replace(/\s*\(.*?\)\s*/g, '')}</div>
                        <div className="text-sm text-slate-600">Same‑day estimates</div>
                      </div>
                    </div>
                    {isPrimary && (
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Primary</Badge>
                    )}
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-sm">
                    <a
                      href={mapUrlForArea(area)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 underline decoration-emerald-300 hover:decoration-emerald-400"
                      aria-label={`Open ${area.replace(/\s*\(.*?\)\s*/g, '')} on Google Maps`}
                    >
                      View on Map
                    </a>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500">Fast scheduling</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-100/0 group-hover:to-emerald-100/40 transition-colors" />
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 text-slate-700">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
              <a href={`tel:${businessData.phoneE164}`} aria-label="Call to request service">
                <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                Call Daniel at {businessData.phone}
              </a>
            </Button>
            <a href="#contact" className="text-emerald-700 hover:text-emerald-800 font-semibold">
              Or request a free inspection online
            </a>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-16">
            <div className="text-center max-w-xs">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-900/30">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Protection</h3>
              <p className="text-slate-300 text-base">
                Our gutter guards keep your home safe from leaks, clogs, and water damage — season after season.
              </p>
            </div>

            <div className="text-center max-w-xs">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-900/30">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Installation</h3>
              <p className="text-slate-300 text-base">
                Seamless gutters custom-fit to your home for long-lasting durability and a clean, finished look.
              </p>
            </div>

            <div className="text-center max-w-xs">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-900/30">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Cleaning</h3>
              <p className="text-slate-300 text-base">
                We remove dirt, leaves, and buildup to keep water flowing freely — preventing costly repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-800 border-emerald-200">
                Why Choose Us
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Chesapeake&apos;s Local Experts for Gutter Guard Installation
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                At American Gutter Guards, we install premium metal mesh guards that stop clogs and keep water moving. We&apos;re local, licensed, insured, and trusted across Chesapeake.
              </p>
              <div className="space-y-4">
                {whyChooseUs.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300" asChild>
                <a href="#contact">Get Free Inspection</a>
              </Button>
            </div>

            <div className="relative">
              <OptimizedImage
                src="/american-gutter-guards/why-us.png"
                alt="Professional gutter guard installation in Chesapeake VA"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 border-emerald-200">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Gutter Guard Installation in Chesapeake, VA — Plus Cleaning & Seamless Gutters
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We specialize in premium gutter guards that stop clogs. We also offer comprehensive gutter cleaning and seamless gutter installation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-emerald-600 font-semibold text-lg mb-4">{service.price}</div>
                  <a href="#contact" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                    Get a free inspection
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 border-emerald-200">
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Choose Your Gutter Service Package
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Select the perfect gutter service that fits your needs and budget. All services include our satisfaction guarantee and free estimates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.featured ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white'} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className={`text-2xl font-bold mb-4 ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className={`text-4xl font-bold ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ml-2 ${plan.featured ? 'text-emerald-100' : 'text-slate-600'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center text-left ${plan.featured ? 'text-emerald-100' : 'text-slate-600'}`}>
                        <CheckCircle className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.featured ? 'text-white' : 'text-emerald-500'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-3 text-lg font-semibold rounded-lg ${plan.featured
                      ? 'bg-white text-emerald-600 hover:bg-slate-100'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                    asChild
                  >
                    <a href="#contact">{plan.buttonText}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 border-emerald-200">Gallery</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Gutter Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Browse our recent gutter installations, cleanings, and guard setups across Chesapeake and nearby cities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={85}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {image.category}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 border-emerald-200">
              Our Success
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What Chesapeake Homeowners Say About Our Gutter Services
            </h2>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-slate-50 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-6 w-6 text-emerald-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-slate-700 mb-6 leading-relaxed">
                  &quot;American Gutter Guards did an incredible job cleaning and installing new gutters at my home in Chesapeake.
                  Fast, professional, and the results look amazing. Highly recommend them to anyone needing gutter work!&quot;
                </blockquote>
                <div className="text-lg font-semibold text-slate-900">Michael Thompson</div>
                <div className="text-slate-600">Chesapeake, VA</div>
              </CardContent>
            </Card>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-lg text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Using Client Component */}
      <FAQAccordion faqs={faqData} />

      {/* Reviews Section */}
      <ReviewsSection businessSlug="american-gutter-guards" businessName={businessData.name} />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Get Your Free Inspection Today
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Ready to protect your home with professional gutter guards? Contact us today for a free inspection and special offers for new customers.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <a href={`tel:${businessData.phoneE164}`} className="text-lg font-semibold text-slate-900 hover:text-emerald-600 transition-colors">{businessData.phone}</a>
                    <p className="text-slate-600">Call Daniel anytime</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <a href={`mailto:${businessData.email}`} className="text-lg font-semibold text-slate-900 hover:text-emerald-600 transition-colors">{businessData.email}</a>
                    <p className="text-slate-600">Send us an email</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Serving Chesapeake & Hampton Roads</h3>
                    <p className="text-slate-600">Coverage across Virginia Beach area</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Request Free Inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="(757) 555-0100"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="Gutter Guards">Gutter Guards</option>
                      <option value="Gutter Cleaning">Gutter Cleaning</option>
                      <option value="Gutter Installation">Gutter Installation</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 text-lg font-semibold">
                    Request Free Inspection
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-100">
        {/* Top CTA */}
        <div className="bg-emerald-600 py-8">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <Button className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-lg" asChild>
              <a href="#contact">Get A Free Estimate Now!</a>
            </Button>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-1">
                <div className="flex items-center mb-6">
                  <OptimizedImage
                    src="/american-gutter-guards/americanGutterGuardsLogo.png"
                    alt={`${businessData.name} logo`}
                    width={80}
                    height={80}
                    className="mr-3"
                  />
                  <span className="text-xl font-bold">{businessData.name}</span>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Professional gutter services that protect your home from water damage.
                  We provide expert installation, cleaning, and guard systems with our experienced team and quality materials.
                </p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Services</h3>
                <ul className="space-y-3">
                  <li><a href="#services" className="text-slate-300 hover:text-emerald-400 transition-colors">Gutter Guards</a></li>
                  <li><a href="#services" className="text-slate-300 hover:text-emerald-400 transition-colors">Gutter Cleaning</a></li>
                  <li><a href="#services" className="text-slate-300 hover:text-emerald-400 transition-colors">Gutter Installation</a></li>
                  <li><a href="#services" className="text-slate-300 hover:text-emerald-400 transition-colors">Seamless Gutters</a></li>
                  <li><a href="#services" className="text-slate-300 hover:text-emerald-400 transition-colors">Gutter Maintenance</a></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li><a href="#home" className="text-slate-300 hover:text-emerald-400 transition-colors">Home</a></li>
                  <li><a href="#problem" className="text-slate-300 hover:text-emerald-400 transition-colors">The Problem</a></li>
                  <li><a href="#services" className="text-slate-300 hover:text-emerald-400 transition-colors">Services</a></li>
                  <li><a href="#pricing" className="text-slate-300 hover:text-emerald-400 transition-colors">Pricing</a></li>
                  <li><a href="#faq" className="text-slate-300 hover:text-emerald-400 transition-colors">FAQ</a></li>
                  <li><a href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Contact</h3>
                <ul className="space-y-3">
                  <li><a href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors">Get Quote</a></li>
                  <li><a href={`tel:${businessData.phoneE164}`} className="text-slate-300 hover:text-emerald-400 transition-colors">Book Service</a></li>
                  <li><a href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors">Free Inspection</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} {businessData.name}. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 mt-4 md:mt-0">
                <span className="text-slate-600">•</span>
                <p className="text-slate-400 text-sm">Powered and Managed by <a
                  href="https://interstaterankers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  InterState Rankers
                </a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <JsonLdScripts />
    </div>
  );
}
