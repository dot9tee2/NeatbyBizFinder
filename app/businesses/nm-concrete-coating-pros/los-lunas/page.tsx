import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import OptimizedVideo from '@/components/ui/optimized-video';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, MapPin, Clock, Mail, Globe, Shield, CheckCircle, ArrowRight, Award, Users, Clock3, Zap, Home, Building, Sparkles, Wrench, Hammer, Layers, Heart, Users2, Baby, Smile, TreePine, Sun } from 'lucide-react';
import BusinessHeader from '@/components/business-landing/business-header';
import BusinessFooter from '@/components/business-landing/business-footer';
import NMConcreteGallery from '@/components/business-landing/nm-concrete-gallery';
import { getGalleryImagesForPage } from '@/lib/nm-concrete-gallery-data';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export const metadata: Metadata = {
  title: 'Epoxy Floor Coating Los Lunas NM | NM Concrete Coating Pros',
  description: 'Garage floor epoxy Los Lunas with polyaspartic topcoat. Family-safe epoxy, metallic resin, and concrete polishing by NM Concrete Coating Pros.',
  alternates: { 
    canonical: '/businesses/nm-concrete-coating-pros/los-lunas/',
  },
  keywords: [
    'epoxy floor coating Los Lunas NM',
    'garage floor epoxy Los Lunas',
    'metallic resin flooring Los Lunas',
    'metallic epoxy Los Lunas NM',
    'polyaspartic topcoat Los Lunas',
    'concrete polishing Los Lunas NM',
    'concrete polishing cost Los Lunas',
    'commercial floor coating Los Lunas',
    'patio & deck concrete coating Los Lunas'
  ],
  openGraph: {
    title: 'Epoxy Floor Coating Los Lunas NM | NM Concrete Coating Pros',
    description: 'Epoxy and polyaspartic garage floor coatings in Los Lunas, NM. Family-safe options and polished concrete.',
    images: ['/images/nm-concrete-coating-pros/og-albuquerque-epoxy-garage-floor-luxury-nmccpros-1200x630.webp'],
    url: 'https://nearbybizfinder.com/businesses/nm-concrete-coating-pros/los-lunas/',
    type: 'website',
    siteName: 'NearbyBizFinder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epoxy Floor Coating Los Lunas NM | NM Concrete Coating Pros',
    description: 'Garage floor epoxy Los Lunas with polyaspartic topcoat.',
    images: ['/images/nm-concrete-coating-pros/og-albuquerque-epoxy-garage-floor-luxury-nmccpros-1200x630.webp']
  },
  robots: { index: true, follow: true }
};

export default function NMConcreteCoatingProsLosLunasPage() {
  const businessData = {
    name: 'NM Concrete Coating Pros',
    locationName: 'Los Lunas Location',
    category: 'Family-Friendly Concrete Coating Services',
    rating: 4.8,
    reviewCount: 134,
    priceRange: '$$',
    phone: '(505) 289-0676',
    email: 'john@nmccpros.com',
    website: 'https://www.nmccpros.com/',
    featuredImage: '/images/nm-concrete-coating-pros/og-albuquerque-epoxy-garage-floor-luxury-nmccpros-1200x630.webp',
    description: 'Garage floor epoxy Los Lunas, family-safe epoxy, polyaspartic coating, metallic resin floors, and concrete polishing.',
    address: 'Los Lunas, NM',
    city: 'Los Lunas',
    state: 'NM',
    zipCode: '87031',
  };

  const services = [
    {
      title: 'Family-Safe Epoxy',
      description: 'Non-toxic, child and pet-safe epoxy coatings perfect for family homes',
      icon: Heart,
      features: ['Non-Toxic Formula', 'Pet Safe', 'Child Friendly', 'Low VOC'],
      image: '/images/nm-concrete-coating-pros/epoxy-floor-coating.png'
    },
    {
      title: 'Playroom Flooring',
      description: 'Durable, easy-to-clean flooring perfect for children\'s play areas',
      icon: Baby,
      features: ['Easy Cleanup', 'Stain Resistant', 'Soft Feel', 'Colorful Options'],
      image: '/images/nm-concrete-coating-pros/garage-floor-coating.png'
    },
    {
      title: 'Garage Family Space',
      description: 'Transform your garage into a family-friendly multi-purpose space',
      icon: Home,
      features: ['Multi-Purpose', 'Family Activities', 'Storage Solutions', 'Safe Surface'],
      image: '/images/nm-concrete-coating-pros/garage-floor-coating.png'
    },
    {
      title: 'Outdoor Patio Coating',
      description: 'Weather-resistant coatings for family outdoor spaces and patios',
      icon: Sun,
      features: ['Weather Resistant', 'UV Protection', 'Slip Resistant', 'Family Fun'],
      image: '/images/nm-concrete-coating-pros/commercial-floor-coating.png'
    }
  ];

  const serviceAreas = [
    'Los Lunas, NM',
    'Albuquerque, NM', 
    'Santa Fe, NM',
    'Rio Rancho, NM',
    'Edgewood, NM'
  ];

  const whyChooseUs = [
    {
      title: 'Family-First Approach',
      description: 'Every service is designed with families and children in mind',
      icon: Users2,
      color: 'text-green-500'
    },
    {
      title: 'Safe Materials',
      description: 'Non-toxic, low-VOC materials safe for children and pets',
      icon: Shield,
      color: 'text-blue-500'
    },
    {
      title: 'Affordable Solutions',
      description: 'Budget-friendly options that don\'t compromise on quality',
      icon: Heart,
      color: 'text-pink-500'
    },
    {
      title: 'Local Family Business',
      description: 'We understand the needs of Los Lunas families',
      icon: Home,
      color: 'text-orange-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah & Mike',
      location: 'Los Lunas',
      rating: 5,
      text: 'We were so worried about safety with our two young children. NM Concrete Coating Pros used completely non-toxic materials and the kids love their new playroom floor!',
      service: 'Family-Safe Epoxy'
    },
    {
      name: 'The Rodriguez Family',
      location: 'Los Lunas',
      rating: 5,
      text: 'Our garage is now the perfect family space! The kids can play safely, and cleanup is so easy. Best investment we\'ve made for our home.',
      service: 'Garage Family Space'
    },
    {
      name: 'Jennifer',
      location: 'Los Lunas',
      rating: 5,
      text: 'The outdoor patio coating is amazing! Our family spends so much more time outside now. It\'s safe for the kids and looks beautiful.',
      service: 'Outdoor Patio Coating'
    }
  ];

  const familyBenefits = [
    {
      title: 'Child-Safe Materials',
      description: 'All our materials are tested and certified safe for children and pets',
      icon: Baby
    },
    {
      title: 'Easy Maintenance',
      description: 'Simple cleanup means more time for family activities',
      icon: Smile
    },
    {
      title: 'Durable Design',
      description: 'Built to withstand the wear and tear of active family life',
      icon: Shield
    },
    {
      title: 'Budget Friendly',
      description: 'Affordable solutions that work within family budgets',
      icon: Heart
    }
  ];

  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    name: `${businessData.name} - ${businessData.locationName}`,
    description: businessData.description,
    url: `https://nearbybizfinder.com/businesses/nm-concrete-coating-pros/los-lunas/`,
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
    hasMap: `https://www.google.com/maps/search/?api=1&query=NM+Concrete+Coating+Pros+Los+Lunas+NM`,
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
    }))
  };

  const howToStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to get a family-safe floor in Los Lunas',
    step: [
      { '@type': 'HowToStep', name: 'Family Consultation', text: 'Share family needs and schedule preferences.' },
      { '@type': 'HowToStep', name: 'Safe Installation', text: 'Non-toxic, low-VOC installation around your schedule.' },
      { '@type': 'HowToStep', name: 'Family Fun', text: 'Enjoy your new safe, durable family space.' }
    ]
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbybizfinder.com/' },
      { '@type': 'ListItem', position: 2, name: 'Businesses', item: 'https://nearbybizfinder.com/businesses/' },
      { '@type': 'ListItem', position: 3, name: 'NM Concrete Coating Pros', item: 'https://nearbybizfinder.com/businesses/nm-concrete-coating-pros/' },
      { '@type': 'ListItem', position: 4, name: 'Los Lunas', item: 'https://nearbybizfinder.com/businesses/nm-concrete-coating-pros/los-lunas/' }
    ]
  };

  const faqs = [
    { q: 'What is the concrete polishing cost in Los Lunas?', a: 'Pricing depends on square footage, desired sheen, and slab condition. We provide firm estimates after inspection.' },
    { q: 'Is metallic resin flooring available in Los Lunas?', a: 'Yes. We install metallic epoxy floors with child- and pet-safe options.' },
    { q: 'Do you offer polyaspartic topcoat in Los Lunas?', a: 'Yes. Polyaspartic topcoats cure fast, are UV stable, and ideal for garages and patios.' },
    { q: 'Are your coatings safe for kids and pets?', a: 'We use low-VOC, non-toxic systems ideal for family spaces and garages.' },
    { q: 'How long does a garage install take?', a: 'Most Los Lunas garages complete in 1–2 days depending on prep, size, and chosen system.' },
    { q: 'Do you serve nearby areas?', a: 'Yes. We service Los Lunas and surrounding communities—call to confirm your address.' }
  ];

  const faqStructuredData = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
      {/* Business Header */}
      <BusinessHeader
        businessName={businessData.name}
        businessPhone={businessData.phone}
        businessEmail={businessData.email}
        businessWebsite={businessData.website}
        businessCategory={businessData.category}
        theme="green"
      />

      <Script
        id="business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script id="breadcrumb-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <Script id="faq-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <Script id="howto-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToStructuredData) }} />

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
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/businesses/nm-concrete-coating-pros/los-lunas/">Los Lunas</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 md:h-[600px] w-full bg-gradient-to-br from-green-600 via-blue-600 to-yellow-500">
        <OptimizedVideo
          src="/videos/mn-concrete-coating.mp4"
          alt="Garage floor epoxy Los Lunas with polyaspartic topcoat"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/nm-concrete-coating-pros/project-16.jpg"
          fallbackImage="/images/nm-concrete-coating-pros/project-16.jpg"
          priority
        />
        {/* Overlay removed per request */}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-6xl">
            <Badge className="mb-6 bg-green-500 text-white border-green-400">
              <Users2 className="h-4 w-4 mr-2" />
              Los Lunas Family-Friendly Flooring
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Safe & Beautiful
              <span className="block text-green-300">Family Flooring</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto">
              Create the perfect family space with our child and pet-safe concrete coating solutions. 
              Non-toxic, durable, and designed for active family life in Los Lunas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold">
                <Heart className="h-6 w-6 mr-3" />
                Get Family Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg"
                asChild
              >
                <a href={`tel:${businessData.phone}`}>
                  <Phone className="h-6 w-6 mr-3" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Families Choose Us in <span className="text-green-600">Los Lunas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand that families need safe, durable, and affordable flooring solutions. 
            Our Los Lunas location specializes in family-friendly concrete coating services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center`}>
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Family-Friendly <span className="text-green-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service is designed with families in mind - safe, durable, and perfect for active family life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={85}
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-green-500/80 text-white border-green-400">
                      Family Safe
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Family Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Family</span> Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our family-friendly approach means peace of mind for parents and fun, safe spaces for kids.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {familyBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-green-50 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <NMConcreteGallery
            images={getGalleryImagesForPage('los-lunas', 6)}
            title="Family-Friendly Projects"
            subtitle="Showcasing our safe and beautiful concrete coating projects perfect for Los Lunas families"
            maxImages={6}
            className="mb-16"
            headerIconClass="text-green-600"
            badgeClass="bg-green-600 text-white border-green-500 px-4 py-2"
            categoryBadgeClass="bg-green-600/80 text-white border-green-500"
            hoverOverlayClass="bg-green-600/20"
          />
        </div>

        {/* Nearby Locations */}
        <div className="mb-20 text-center">
          <p className="text-gray-700">Also serving: <a className="text-orange-600 hover:underline" href="/businesses/nm-concrete-coating-pros/">Epoxy floor coating Albuquerque NM</a> • <a className="text-orange-600 hover:underline" href="/businesses/nm-concrete-coating-pros/rio-rancho/">Rio Rancho epoxy floor coating</a> • <a className="text-orange-600 hover:underline" href="/businesses/nm-concrete-coating-pros/santa-fe/">Epoxy floor coating Santa Fe NM</a> • <a className="text-orange-600 hover:underline" href="/businesses/nm-concrete-coating-pros/edgewood/">Epoxy floor coating Edgewood NM</a></p>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Los Lunas FAQs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Common questions from Los Lunas families and homeowners.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Happy <span className="text-green-600">Family Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from Los Lunas families who have transformed their homes with our family-friendly services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location} • {testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Family Promise Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-center text-white">
            <Users2 className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Family Promise
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
              We promise to provide safe, non-toxic, and family-friendly concrete coating solutions. 
              Your family's safety and happiness are our top priorities. Every material we use is 
              tested and certified safe for children and pets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Heart className="h-6 w-6 mr-3" />
                Get Family Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 px-8 py-4 text-lg"
                asChild
              >
                <a href={`tel:${businessData.phone}`}>
                  <Phone className="h-6 w-6 mr-3" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Family-Friendly <span className="text-green-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work around your family's schedule and ensure minimal disruption to your daily life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Family Consultation</h3>
              <p className="text-gray-600">
                We discuss your family's needs and recommend the safest, most appropriate solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Safe Installation</h3>
              <p className="text-gray-600">
                We use only non-toxic materials and work around your family's schedule.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Family Fun</h3>
              <p className="text-gray-600">
                Enjoy your new family-friendly space that's safe, beautiful, and easy to maintain.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Footer */}
      <BusinessFooter
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
        theme="green"
        layout="classic"
        logoShape="rounded"
        ctaBanner={{
          title: 'Family-Safe Flooring',
          subtitle: 'Non-toxic, low-VOC installs for active families in Los Lunas',
          buttonText: 'Get Family Quote'
        }}
      />
    </div>
  );
}
