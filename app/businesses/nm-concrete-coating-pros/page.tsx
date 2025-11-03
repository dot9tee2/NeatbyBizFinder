import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/optimized-image';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, MapPin, Clock, Mail, Globe, Shield, CheckCircle, ArrowRight, Award, Users, Clock3, Zap, Home, Building, Sparkles, Wrench, Hammer, Layers } from 'lucide-react';
import NMConcreteHeader from '@/components/business-landing/nm-concrete-header';
import OptimizedVideo from '@/components/ui/optimized-video';
import NMConcreteFooter from '@/components/business-landing/nm-concrete-footer';
import NMConcreteGallery from '@/components/business-landing/nm-concrete-gallery';
import { getGalleryImagesForPage } from '@/lib/nm-concrete-gallery-data';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export const metadata: Metadata = {
  title: 'NM Concrete Coating Pros — Epoxy & Polyaspartic Floors in Albuquerque, NM',
  description:
    'Top Albuquerque epoxy, metallic & polyaspartic flooring — residential & commercial. Fast install, UV-stable systems, lifetime warranty. Request a free quote.',
  alternates: {
    canonical: '/businesses/nm-concrete-coating-pros/',
  },
  keywords: [
    'epoxy floor coating Albuquerque NM',
    'Albuquerque garage floor epoxy coating',
    'metallic epoxy floor Albuquerque',
    'metallic resin floors Albuquerque',
    'polyaspartic topcoat Albuquerque',
    'polyaspartic coating contractors Albuquerque',
    'concrete polishing service Albuquerque NM',
    'concrete polishing Albuquerque cost',
    'commercial floor coating Albuquerque NM',
    'patio and deck concrete coating Albuquerque',
    'epoxy resin floors Albuquerque residential',
    'durable epoxy flooring Albuquerque NM'
  ],
  openGraph: {
    title: 'NM Concrete Coating Pros — Epoxy & Polyaspartic Floors in Albuquerque, NM',
    description:
      'Top Albuquerque epoxy, metallic & polyaspartic flooring — residential & commercial. Fast install, UV-stable systems, lifetime warranty. Request a free quote.',
    images: ['/images/nm-concrete-coating-pros/og-albuquerque-epoxy-garage-floor-luxury-nmccpros-1200x630.webp'],
    url: 'https://nearbybizfinder.com/businesses/nm-concrete-coating-pros/',
    type: 'website',
    siteName: 'NearbyBizFinder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NM Concrete Coating Pros — Epoxy & Polyaspartic Floors in Albuquerque, NM',
    description: 'Top Albuquerque epoxy, metallic & polyaspartic flooring — residential & commercial. Fast install, UV-stable systems, lifetime warranty.',
    images: ['/images/nm-concrete-coating-pros/og-albuquerque-epoxy-garage-floor-luxury-nmccpros-1200x630.webp']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function NMConcreteCoatingProsPage() {
  const businessData = {
    name: 'NM Concrete Coating Pros',
    category: 'Concrete Coating Services',
    rating: 4.9,
    reviewCount: 127,
    priceRange: '$$$',
    phone: '(505) 289-0676',
    email: 'john@nmccpros.com',
    website: 'https://www.nmccpros.com/',
    featuredImage: '/images/nm-concrete-coating-pros/og-albuquerque-epoxy-garage-floor-luxury-nmccpros-1200x630.webp',
    description: 'Epoxy floor coating Albuquerque NM, metallic resin floors, polyaspartic coating, and concrete polishing for homes and businesses.',
    address: '8214 2nd St NW Suite B',
    city: 'Albuquerque',
    state: 'NM',
    zipCode: '87120',
  };

  const services = [
    {
      title: 'Epoxy Floor Coating',
      description: 'High-quality epoxy floor coating for garages, basements, and commercial spaces',
      icon: Layers,
      features: ['High-Solids Epoxy', 'Lifetime Warranty', 'Custom Colors', 'Fast Installation'],
      image: '/images/nm-concrete-coating-pros/epoxy-floor-coating.png'
    },
    {
      title: 'Metallic Resin Coatings',
      description: 'Stunning metallic resin coatings that create unique, eye-catching designs',
      icon: Sparkles,
      features: ['3D Effects', 'Granite Look', 'Custom Patterns', 'Premium Finish'],
      image: '/images/nm-concrete-coating-pros/metallic-resin-coatings.png'
    },
    {
      title: 'Polyaspartic Coating',
      description: 'Fast-curing polyaspartic coatings perfect for commercial and industrial applications',
      icon: Zap,
      features: ['Fast Cure Time', 'High Durability', 'Chemical Resistant', 'UV Stable'],
      image: '/images/nm-concrete-coating-pros/polyaspartic-coating.png'
    },
    {
      title: 'Concrete Polishing',
      description: 'Professional concrete polishing services for a sleek, modern finish',
      icon: Wrench,
      features: ['Diamond Polishing', 'Multiple Finishes', 'Stain Resistant', 'Low Maintenance'],
      image: '/images/nm-concrete-coating-pros/concrete-polishing.png'
    },
    {
      title: 'Garage Floor Coating',
      description: 'Transform your garage into a luxury space with our premium coating systems',
      icon: Home,
      features: ['Residential Focus', 'Custom Designs', 'Flake Systems', 'Clear Coats'],
      image: '/images/nm-concrete-coating-pros/garage-floor-coating.png'
    },
    {
      title: 'Commercial Floor Coating',
      description: 'Industrial-grade floor coatings designed for high-traffic commercial spaces',
      icon: Building,
      features: ['High Traffic Rated', 'Chemical Resistant', 'Quick Installation', 'Minimal Downtime'],
      image: '/images/nm-concrete-coating-pros/commercial-floor-coating.png'
    }
  ];

  const serviceAreas = [
    'Albuquerque, NM',
    'Santa Fe, NM', 
    'Rio Rancho, NM',
    'Los Lunas, NM',
    'Edgewood, NM'
  ];

  const whyChooseUs = [
    {
      title: 'Certified Installers',
      description: 'Our team has been trained and certified in the concrete coating process',
      icon: Award,
      color: 'text-yellow-500'
    },
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured contractors for your peace of mind',
      icon: Shield,
      color: 'text-blue-500'
    },
    {
      title: 'Lifetime Warranty',
      description: 'Our coatings come with a lifetime warranty against peeling',
      icon: CheckCircle,
      color: 'text-green-500'
    },
    {
      title: 'Fast Installation',
      description: 'Most projects completed in 1-2 days with minimal disruption',
      icon: Clock3,
      color: 'text-purple-500'
    }
  ];

  const testimonials = [
    {
      name: 'John',
      location: 'Albuquerque',
      rating: 5,
      text: 'The entire team performed an excellent job on our hangar floor. These are professionals that are the finest in their industry. Unforeseen issues were immediately handled, and solutions were found and implemented.',
      service: 'Commercial Floor Coating'
    },
    {
      name: 'Mandy',
      location: 'Albuquerque',
      rating: 5,
      text: 'This crew performed an outstanding job on the garage floor. They made certain that I understood what sort of product I was receiving and the benefits of employing the materials they did.',
      service: 'Garage Floor Coating'
    },
    {
      name: 'Loren',
      location: 'Albuquerque',
      rating: 5,
      text: 'Fantastic company! I can\'t say enough wonderful things to describe my experience. Very professional group that produced high-quality results. My hopes were exceeded by the garage floor.',
      service: 'Epoxy Floor Coating'
    },
    {
      name: 'Mark R.',
      location: 'Albuquerque',
      rating: 5,
      text: 'They transformed our old garage floor in just two days—looks amazing! The epoxy coating has held up perfectly through Albuquerque\'s hot summers and we love how easy it is to clean. Highly recommend NM Concrete Coating Pros!',
      service: 'Garage Floor Coating'
    },
    {
      name: 'Sarah K.',
      location: 'Rio Rancho',
      rating: 5,
      text: 'Professional, quick, and affordable. We needed our patio coated before a big family gathering, and they delivered exactly as promised. The UV-resistant coating looks great and has survived New Mexico\'s intense sun perfectly.',
      service: 'Outdoor & Patio Coating'
    },
    {
      name: 'Robert M.',
      location: 'Santa Fe',
      rating: 5,
      text: 'Our commercial warehouse floor needed serious attention. The team handled the entire project from repair to final coating with minimal downtime. The commercial epoxy flooring has exceeded our expectations for durability and appearance.',
      service: 'Commercial Floor Coating'
    }
  ];

  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'ConcreteContractor'],
    name: businessData.name,
    description: businessData.description,
    url: `https://nearbybizfinder.com/businesses/nm-concrete-coating-pros/`,
    image: businessData.featuredImage,
    priceRange: businessData.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.address,
      addressLocality: businessData.city,
      addressRegion: businessData.state,
      postalCode: businessData.zipCode,
      addressCountry: 'US',
    },
    telephone: businessData.phone,
    email: businessData.email,
    website: businessData.website,
    hasMap: `https://www.google.com/maps/search/?api=1&query=NM+Concrete+Coating+Pros+${encodeURIComponent(businessData.city)}+${businessData.state}`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessData.rating,
      reviewCount: businessData.reviewCount,
    },
    areaServed: serviceAreas.map(area => ({
      '@type': 'City',
      name: area
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Concrete Coating Services',
      itemListElement: services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description
        }
      }))
    },
    potentialAction: {
      '@type': 'ContactAction',
      target: `tel:${businessData.phone}`
    }
  };

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nearbybizfinder.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Businesses',
        item: 'https://nearbybizfinder.com/businesses/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'NM Concrete Coating Pros',
        item: 'https://nearbybizfinder.com/businesses/nm-concrete-coating-pros/'
      }
    ]
  };

  // FAQs
  const faqs = [
    { 
      q: 'What is the best type of coating for Albuquerque garages?', 
      a: 'For Albuquerque garages, we recommend a high-solids epoxy base with a polyaspartic topcoat. This combination provides excellent resistance to oil, stains, and hot tires while offering UV stability crucial for New Mexico\'s intense sun. The polyaspartic topcoat also provides faster cure times and superior chemical resistance compared to epoxy-only systems.' 
    },
    { 
      q: 'How long do epoxy floors last in New Mexico\'s climate?', 
      a: 'When properly installed and maintained, epoxy floors in Albuquerque typically last 10-20 years or more. Our coatings are specifically formulated to handle New Mexico\'s extreme temperature fluctuations, intense UV exposure, and dust. The key to longevity is proper surface preparation, professional installation, and regular maintenance with pH-neutral cleaners.' 
    },
    { 
      q: 'Can you coat outdoor patios in Albuquerque?', 
      a: 'Yes! We specialize in outdoor patio coatings designed for Albuquerque\'s weather conditions. Our UV-resistant, non-slip systems are perfect for patios, pool decks, and walkways. These coatings are specifically engineered to withstand the intense heat, temperature swings, and freeze-thaw cycles common in New Mexico without cracking, fading, or peeling.' 
    },
    { 
      q: 'How do you maintain epoxy floors in New Mexico\'s climate?', 
      a: 'Maintaining epoxy floors in Albuquerque is straightforward. Regular sweeping or dust mopping removes the abundant desert dust. For deeper cleaning, use a pH-neutral cleaner and warm water. Avoid harsh chemicals and acidic cleaners. The UV-stable polyaspartic topcoat we typically use helps prevent yellowing and fading from sun exposure. Annual inspections help catch any minor issues early.' 
    },
    { 
      q: 'What is the cost of epoxy garage floor in Albuquerque, NM?', 
      a: 'Typical 2-car garages in Albuquerque start around the low thousands; final pricing depends on size, surface preparation needs, and chosen system (epoxy or polyaspartic). We provide free on-site estimates to give you accurate pricing based on your specific garage conditions and preferences.' 
    },
    { 
      q: 'Is metallic epoxy flooring available in Albuquerque?', 
      a: 'Yes. We install premium metallic resin floors with custom color blends and stunning 3D depth effects. Metallic epoxy is especially popular for residential garages and commercial showrooms in Albuquerque, offering a luxury finish that withstands New Mexico\'s climate beautifully.' 
    },
    { 
      q: 'Do you recommend a polyaspartic topcoat in Albuquerque?', 
      a: 'Absolutely. Polyaspartic topcoats are ideal for Albuquerque projects, providing fast cure times (often same-day use), superior UV stability for New Mexico\'s intense sun, and excellent chemical resistance. This makes them perfect for both residential and commercial applications where durability and quick turnaround matter.' 
    },
    { 
      q: 'How long does garage floor epoxy take to install?', 
      a: 'Most Albuquerque garage floor epoxy projects complete in 1–2 days depending on the concrete condition and chosen system. Surface preparation typically takes 4-6 hours, followed by base coat application. With polyaspartic topcoats, you may have useable floors the same day. We always provide detailed timelines during your free estimate.' 
    }
  ];

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  const howToStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to get a garage floor coating in Albuquerque',
    step: [
      { '@type': 'HowToStep', name: 'Get a Quote', text: 'Request a free quote and on-site assessment.' },
      { '@type': 'HowToStep', name: 'Pick a Day', text: 'Choose your installation date and prepare the area.' },
      { '@type': 'HowToStep', name: 'Enjoy Your Floor', text: 'After curing, enjoy your new durable floor.' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Business Header */}
      <NMConcreteHeader
        businessName={businessData.name}
        businessPhone={businessData.phone}
        businessEmail={businessData.email}
        businessWebsite={businessData.website}
        businessCategory={businessData.category}
        // align with Albuquerque orange theme
        
      />

      <Script
        id="business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <Script
        id="howto-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToStructuredData),
        }}
      />

      {/* Breadcrumbs */}
      <div className="bg-white/60 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/businesses/">Businesses</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/businesses/nm-concrete-coating-pros/">NM Concrete Coating Pros</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] w-full bg-gradient-to-br from-gray-400 via-blue-200 to-gray-200 overflow-hidden">
        <OptimizedVideo
          src="/videos/mn-concrete-coating.mp4"
          alt="Epoxy floor coating Albuquerque NM with polyaspartic topcoat"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/nm-concrete-coating-pros/project-1.jpg"
          fallbackImage="/images/nm-concrete-coating-pros/project-1.jpg"
        />
        {/* Overlay removed per request */}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
            <Badge className="mb-4 sm:mb-6 bg-orange-500 text-white border-orange-400 text-sm sm:text-base px-4 py-2">
              #1 Garage Floor Coating Albuquerque
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Epoxy & Polyaspartic Floor Coatings — Albuquerque, NM
            </h1>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-5xl mx-auto leading-relaxed space-y-4">
              <p>
                At <strong>NM Concrete Coating Pros</strong>, we specialize in durable, long-lasting <strong>epoxy floor coatings</strong> and <strong>concrete resurfacing solutions</strong> for homes and businesses across <strong>Albuquerque, New Mexico</strong>. Whether you need a <strong>garage floor makeover</strong>, a <strong>patio coating</strong>, or <strong>commercial concrete protection</strong>, our expert team delivers results built to last in New Mexico's unique climate.
              </p>
              <p>
                Our premium <strong>concrete coating Albuquerque</strong> services include everything from residential <strong>epoxy garage floor coating</strong> to industrial-grade <strong>commercial epoxy flooring</strong>. We understand the challenges of New Mexico's intense heat, dust, and temperature fluctuations, which is why our coatings are specifically formulated to withstand these conditions while maintaining their beauty and durability for years to come.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                Get Fast Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href={`tel:${businessData.phone}`}>
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Why Choose Us Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Why Choose <span className="text-orange-500">NM Concrete Coating Pros</span> for Epoxy Floor Coating in Albuquerque
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            With over a decade of experience, we provide the highest quality concrete coating services 
            in Albuquerque and surrounding areas.
          </p>
        </div>

        {/* Rich Why Choose Us Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 sm:p-10 shadow-lg border border-gray-100">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              With <strong>10+ years of experience</strong> serving <strong>Albuquerque, New Mexico</strong> and nearby areas, NM Concrete Coating Pros has built a reputation for excellence in <strong>epoxy floor coating</strong> and <strong>concrete resurfacing</strong>. We are fully <strong>licensed and insured</strong>, giving you peace of mind that your project is in the hands of trusted, professional installers who understand the unique demands of New Mexico's climate.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Our team takes pride in offering <strong>custom colors, flake designs, and premium finishes</strong> that transform ordinary concrete into stunning, durable surfaces. We understand that every project is unique, which is why we work closely with you to create the perfect look for your space—whether it's a residential garage, commercial warehouse, or outdoor patio.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              What sets us apart is our commitment to <strong>fast turnaround with professional cleanup</strong>. Most projects are completed in just 1-2 days, with minimal disruption to your daily routine. We stand behind our work with a <strong>satisfaction guarantee</strong>, ensuring that every <strong>concrete coating Albuquerque</strong> project meets our high standards for quality and durability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-md`}>
                  <item.icon className={`h-8 w-8 sm:h-10 sm:w-10 ${item.color}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Our <span className="text-orange-500">Professional Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From residential garages to commercial warehouses, we provide comprehensive concrete coating solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg bg-white/90 backdrop-blur-sm transform hover:scale-105">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={85}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight">{service.title}</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm sm:text-base text-gray-600">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Service Descriptions */}
        <div className="mb-16 sm:mb-20">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Epoxy Garage Floor Coatings */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 sm:p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Epoxy Garage Floor Coatings in Albuquerque
              </h3>
              <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  Our <strong>epoxy garage floor coating</strong> services transform your Albuquerque garage into a durable, beautiful space that resists oil stains, hot tires, and heavy foot traffic. Unlike traditional concrete, our high-solids epoxy systems create a seamless, non-porous surface that's easy to clean and maintain. Perfect for protecting your investment and enhancing your home's value.
                </p>
                <p>
                  The benefits of professional <strong>epoxy garage floor installation</strong> in Albuquerque are significant. Our coatings provide exceptional resistance to automotive fluids, chemicals, and abrasion—crucial for New Mexico's harsh climate. Before and after results consistently show dramatic transformations, with old, stained concrete becoming sleek, modern surfaces that look like luxury showroom floors.
                </p>
                <p>
                  Professional installation ensures proper surface preparation, which is critical for long-lasting results. Our team thoroughly cleans, repairs cracks, and applies primer before the epoxy coating, ensuring optimal adhesion and durability. This attention to detail prevents peeling, chipping, and premature wear that can occur with DIY installations.
                </p>
              </div>
            </div>

            {/* Commercial Concrete Coatings */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 sm:p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Commercial Epoxy Flooring Albuquerque
              </h3>
              <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  Our <strong>commercial epoxy flooring Albuquerque</strong> solutions are designed for high-traffic environments including warehouses, offices, showrooms, and restaurants. These industrial-grade coatings withstand heavy machinery, forklift traffic, chemical spills, and constant foot traffic while maintaining a professional appearance.
                </p>
                <p>
                  For warehouses and industrial facilities, we offer polyaspartic topcoats that cure quickly, minimizing business downtime. Restaurant and commercial kitchen applications benefit from seamless, easy-to-clean surfaces that meet health department standards. Office spaces and showrooms enjoy the aesthetic appeal of polished, modern floors that create a professional atmosphere.
                </p>
                <p>
                  Our commercial <strong>concrete coating Albuquerque</strong> services include custom color options, slip-resistant finishes, and specialized systems for different industries. We work around your schedule to minimize disruption, often completing large commercial projects efficiently with experienced crews.
                </p>
              </div>
            </div>

            {/* Outdoor & Patio Coatings */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 sm:p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Outdoor & Patio Coatings for Albuquerque Weather
              </h3>
              <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  Albuquerque's intense sun, heat, and temperature fluctuations require specialized <strong>outdoor concrete coatings</strong>. Our UV-resistant, non-slip patio coatings protect outdoor surfaces while maintaining their appearance under New Mexico's challenging weather conditions.
                </p>
                <p>
                  These durable coatings are perfect for patios, pool decks, walkways, and driveways. The UV-stable formulation prevents fading and yellowing, while the non-slip texture ensures safety even when wet. Our outdoor coatings are specifically designed to handle Albuquerque's heat, dust storms, and freeze-thaw cycles without cracking or peeling.
                </p>
                <p>
                  Whether you're looking to refresh an existing patio or protect a new outdoor space, our weather-resistant systems provide years of protection and beauty. The coatings are easy to maintain and can be pressure-washed without damage, making them ideal for outdoor entertainment areas.
                </p>
              </div>
            </div>

            {/* Concrete Repair & Resurfacing */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 sm:p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Concrete Repair & Resurfacing Services
              </h3>
              <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  Before applying any <strong>concrete coating Albuquerque</strong> solution, we assess and repair existing damage. Our <strong>concrete resurfacing</strong> services restore surfaces with cracks, flaking, spalling, or other deterioration, ensuring your new coating adheres properly and lasts for years.
                </p>
                <p>
                  We repair everything from minor hairline cracks to significant spalling (surface chipping). Our repair process includes crack injection, surface grinding, patching, and leveling to create a smooth, uniform surface ready for coating. This restoration work is essential for achieving professional results and preventing future problems.
                </p>
                <p>
                  For severely damaged concrete, we offer complete resurfacing options that can transform old, worn surfaces into like-new conditions. This value-added service extends the life of your concrete and ensures optimal performance of your new coating system.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Local Context Section */}
        <div className="mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 sm:p-10 shadow-lg border border-orange-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Serving Albuquerque and Nearby Areas
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  Proudly serving <strong>Albuquerque, New Mexico</strong> and nearby areas including <strong>Edgewood, Rio Rancho, and Santa Fe</strong>, our coatings are designed to withstand New Mexico's unique climate challenges. The intense heat, dust storms, and temperature fluctuations that characterize our region require specialized formulations that go beyond standard coatings.
                </p>
                <p>
                  Whether you're in the heart of Albuquerque or in surrounding communities, our team understands the local building codes, weather patterns, and aesthetic preferences that make New Mexico unique. Our <strong>concrete coating Albuquerque</strong> solutions are specifically engineered to handle the desert climate while maintaining their beauty and performance for years to come.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle CTA Section */}
        <div className="mb-16 sm:mb-20">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              Get a Free Quote Today!
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your Albuquerque space? Call <strong>{businessData.phone}</strong> or request a free consultation to get started on your <strong>epoxy floor coating</strong> project. We'll provide a detailed estimate and answer all your questions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href={`tel:${businessData.phone}`}>
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              What Our <span className="text-orange-500">Satisfied Clients</span> Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from our happy customers across Albuquerque.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-4 sm:mb-6">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 sm:mb-6 italic text-sm sm:text-base leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t border-gray-200 pt-4 sm:pt-6">
                    <p className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</p>
                    <p className="text-sm sm:text-base text-gray-500 mt-1">{testimonial.location} • {testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16 sm:mb-20">
          <NMConcreteGallery
            images={getGalleryImagesForPage('main', 6)}
            title="Our Work Gallery"
            subtitle="Showcasing our professional concrete coating projects across Albuquerque and surrounding areas"
            maxImages={6}
            className="mb-16"
          />
        </div>

        {/* Nearby Locations (Internal Links) */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Serving Albuquerque and Nearby Communities
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              We proudly extend our <strong>concrete coating Albuquerque</strong> expertise to surrounding areas. Explore our location-specific pages to see how we've helped homeowners and businesses in nearby communities with their <strong>epoxy floor coating</strong> needs.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Link 
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group"
                href="/businesses/nm-concrete-coating-pros/edgewood/"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">See Our Work in Edgewood</h3>
                <p className="text-gray-600 text-sm">Rustic epoxy coatings for mountain properties and rural settings in Edgewood, NM.</p>
              </Link>
              <Link 
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group"
                href="/businesses/nm-concrete-coating-pros/rio-rancho/"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Serving Rio Rancho and Beyond</h3>
                <p className="text-gray-600 text-sm">Premium garage and commercial floor coatings for Rio Rancho homes and businesses.</p>
              </Link>
              <Link 
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group"
                href="/businesses/nm-concrete-coating-pros/santa-fe/"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Epoxy Flooring in Santa Fe</h3>
                <p className="text-gray-600 text-sm">Artisan concrete polishing and Southwestern-style coatings for Santa Fe properties.</p>
              </Link>
              <Link 
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group"
                href="/businesses/nm-concrete-coating-pros/los-lunas/"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Family-Friendly Flooring in Los Lunas</h3>
                <p className="text-gray-600 text-sm">Residential epoxy and garage floor coatings perfect for Los Lunas families.</p>
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Albuquerque FAQs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Answers to the most common questions we get in Albuquerque.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Our <span className="text-orange-500">Simple Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Working with us is easy as 1-2-3. Get your free quote and transform your space today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <span className="text-3xl sm:text-4xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">Get a Quote</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Request a free and quick quotation for your customized project. We'll contact you as soon as possible.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <span className="text-3xl sm:text-4xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">Pick a Day</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Choose a time that works best for you. We provide flexible and affordable scheduling alternatives.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <span className="text-3xl sm:text-4xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">Enjoy Your Floor</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Relax and enjoy your new gorgeous epoxy floor! Most projects are completed in just 1-2 days.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Get your free quote today and join hundreds of satisfied customers across New Mexico.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
              Get Fast Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href={`tel:${businessData.phone}`}>
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Business Footer */}
      <NMConcreteFooter
        businessName={businessData.name}
        businessPhone={businessData.phone}
        businessEmail={businessData.email}
        businessWebsite={businessData.website}
        businessAddress={businessData.address}
        businessCity={businessData.city}
        businessState={businessData.state}
        businessZipCode={businessData.zipCode}
        businessRating={businessData.rating}
        businessReviewCount={businessData.reviewCount}
        serviceAreas={serviceAreas}
        locationPages={[
          { name: 'Albuquerque Main', href: '/businesses/nm-concrete-coating-pros/' },
          { name: 'Edgewood', href: '/businesses/nm-concrete-coating-pros/edgewood/' },
          { name: 'Los Lunas', href: '/businesses/nm-concrete-coating-pros/los-lunas/' },
          { name: 'Rio Rancho', href: '/businesses/nm-concrete-coating-pros/rio-rancho/' },
          { name: 'Santa Fe', href: '/businesses/nm-concrete-coating-pros/santa-fe/' }
        ]}
        theme="orange"
        topStripe
        ctaBanner={{
          title: 'Transform Your Albuquerque Garage',
          subtitle: 'Fast, durable, UV-stable coatings in 1–2 days',
          buttonText: 'Get Fast Quote'
        }}
      />
    </div>
  );
}
