import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import OptimizedVideo from '@/components/ui/optimized-video';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, MapPin, Clock, Mail, Globe, Shield, CheckCircle, ArrowRight, Award, Users, Clock3, Zap, Home, Building, Sparkles, Wrench, Hammer, Layers, Mountain, Sun } from 'lucide-react';
import BusinessHeader from '@/components/business-landing/business-header';
import BusinessFooter from '@/components/business-landing/business-footer';
import NMConcreteGallery from '@/components/business-landing/nm-concrete-gallery';
import { getGalleryImagesForPage } from '@/lib/nm-concrete-gallery-data';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export const metadata: Metadata = {
  title: 'Epoxy Floor Coating Santa Fe NM | NM Concrete Coating Pros',
  description: 'Epoxy floor coating Santa Fe NM with polyaspartic topcoat. Metallic resin floors, concrete polishing, and commercial coatings by NM Concrete Coating Pros.',
  alternates: { 
    canonical: '/businesses/nm-concrete-coating-pros/santa-fe/',
  },
  keywords: [
    'epoxy floor coating Santa Fe NM',
    'Santa Fe garage floor epoxy',
    'metallic resin flooring Santa Fe',
    'metallic epoxy Santa Fe NM',
    'polyaspartic coating Santa Fe contractors',
    'polyaspartic vs epoxy Santa Fe',
    'concrete polishing service Santa Fe NM',
    'polished concrete Santa Fe NM',
    'commercial epoxy floors Santa Fe',
    'patio deck concrete coating Santa Fe',
    'Santa Fe decorative epoxy floors'
  ],
  openGraph: {
    title: 'Epoxy Floor Coating Santa Fe NM | NM Concrete Coating Pros',
    description: 'Epoxy and polyaspartic garage floor coatings in Santa Fe, NM. Metallic resin and polished concrete services.',
    images: ['/images/nm-concrete-coating-pros/og-albuquerque-epoxy-garage-floor-luxury-nmccpros-1200x630.webp'],
    url: 'https://nearbybizfinder.com/businesses/nm-concrete-coating-pros/santa-fe/',
    type: 'website',
    siteName: 'NearbyBizFinder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epoxy Floor Coating Santa Fe NM | NM Concrete Coating Pros',
    description: 'Santa Fe garage floor epoxy and polyaspartic topcoat.',
    images: ['/images/nm-concrete-coating-pros/og-albuquerque-epoxy-garage-floor-luxury-nmccpros-1200x630.webp']
  },
  robots: { index: true, follow: true }
};

export default function NMConcreteCoatingProsSantaFePage() {
  const businessData = {
    name: 'NM Concrete Coating Pros',
    locationName: 'Santa Fe Location',
    category: 'Concrete Coating Services',
    rating: 4.8,
    reviewCount: 89,
    priceRange: '$$$',
    phone: '(505) 289-0676',
    email: 'john@nmccpros.com',
    website: 'https://www.nmccpros.com/',
    featuredImage: '/images/nm-concrete-coating-pros/og-albuquerque-epoxy-garage-floor-luxury-nmccpros-1200x630.webp',
    description: 'Epoxy floor coating Santa Fe NM, metallic resin floors, polyaspartic coating, and concrete polishing for homes and businesses.',
    address: 'Santa Fe, NM',
    city: 'Santa Fe',
    state: 'NM',
    zipCode: '87501',
  };

  const services = [
    {
      title: 'Southwestern Style Epoxy',
      description: 'Custom epoxy designs inspired by Santa Fe\'s rich cultural heritage',
      icon: Mountain,
      features: ['Terracotta Colors', 'Adobe Patterns', 'Cultural Motifs', 'Local Inspiration'],
      image: '/images/nm-concrete-coating-pros/epoxy-floor-coating.png'
    },
    {
      title: 'Luxury Metallic Coatings',
      description: 'Premium metallic resin coatings perfect for Santa Fe\'s upscale properties',
      icon: Sparkles,
      features: ['Copper Accents', 'Gold Highlights', 'Silver Details', 'Custom Blends'],
      image: '/images/nm-concrete-coating-pros/metallic-resin-coatings.png'
    },
    {
      title: 'High-Altitude Polyaspartic',
      description: 'Specialized polyaspartic coatings designed for Santa Fe\'s unique climate',
      icon: Sun,
      features: ['UV Protection', 'Temperature Stable', 'Quick Cure', 'Weather Resistant'],
      image: '/images/nm-concrete-coating-pros/polyaspartic-coating.png'
    },
    {
      title: 'Artisan Concrete Polishing',
      description: 'Hand-crafted concrete polishing that complements Santa Fe\'s artistic community',
      icon: Wrench,
      features: ['Hand Polished', 'Artistic Finishes', 'Natural Stone Look', 'Custom Textures'],
      image: '/images/nm-concrete-coating-pros/concrete-polishing.png'
    }
  ];

  const serviceAreas = [
    'Santa Fe, NM',
    'Albuquerque, NM', 
    'Rio Rancho, NM',
    'Los Lunas, NM',
    'Edgewood, NM'
  ];

  const whyChooseUs = [
    {
      title: 'Santa Fe Specialists',
      description: 'Local experts who understand the unique needs of Santa Fe properties',
      icon: Mountain,
      color: 'text-orange-600'
    },
    {
      title: 'Cultural Sensitivity',
      description: 'Respectful of Santa Fe\'s architectural heritage and design traditions',
      icon: Award,
      color: 'text-red-600'
    },
    {
      title: 'Climate Expertise',
      description: 'Specialized knowledge of high-altitude and desert climate challenges',
      icon: Sun,
      color: 'text-yellow-600'
    },
    {
      title: 'Artisan Quality',
      description: 'Hand-crafted finishes that match Santa Fe\'s artistic standards',
      icon: Sparkles,
      color: 'text-purple-600'
    }
  ];

  const testimonials = [
    {
      name: 'Maria',
      location: 'Santa Fe',
      rating: 5,
      text: 'The team perfectly captured the Santa Fe aesthetic in our garage floor. The terracotta colors and adobe-inspired patterns are absolutely beautiful. They truly understand our local style.',
      service: 'Southwestern Style Epoxy'
    },
    {
      name: 'Robert',
      location: 'Santa Fe',
      rating: 5,
      text: 'Living at 7,000 feet elevation, we needed coatings that could handle the temperature extremes. NM Concrete Coating Pros delivered exactly what we needed with their specialized high-altitude formulas.',
      service: 'High-Altitude Polyaspartic'
    },
    {
      name: 'Elena',
      location: 'Santa Fe',
      rating: 5,
      text: 'The artisan concrete polishing work is incredible. It looks like natural stone and perfectly complements our adobe-style home. True craftsmanship that honors Santa Fe\'s artistic tradition.',
      service: 'Artisan Concrete Polishing'
    }
  ];

  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    name: `${businessData.name} - ${businessData.locationName}`,
    description: businessData.description,
    url: `https://nearbybizfinder.com/businesses/nm-concrete-coating-pros/santa-fe/`,
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
    hasMap: `https://www.google.com/maps/search/?api=1&query=NM+Concrete+Coating+Pros+Santa+Fe+NM`,
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
    name: 'How to get a floor coating in Santa Fe',
    step: [
      { '@type': 'HowToStep', name: 'Heritage Consultation', text: 'Discuss designs honoring Santa Fe architecture.' },
      { '@type': 'HowToStep', name: 'Climate-Adapted Installation', text: 'We install using high-altitude methods.' },
      { '@type': 'HowToStep', name: 'Authentic Finish', text: 'Enjoy an artisan finish suited to Santa Fe homes.' }
    ]
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbybizfinder.com/' },
      { '@type': 'ListItem', position: 2, name: 'Businesses', item: 'https://nearbybizfinder.com/businesses/' },
      { '@type': 'ListItem', position: 3, name: 'NM Concrete Coating Pros', item: 'https://nearbybizfinder.com/businesses/nm-concrete-coating-pros/' },
      { '@type': 'ListItem', position: 4, name: 'Santa Fe', item: 'https://nearbybizfinder.com/businesses/nm-concrete-coating-pros/santa-fe/' }
    ]
  };

  const faqs = [
    { q: 'What is the cost of epoxy garage floor in Santa Fe, NM?', a: 'Costs vary by size and prep; many 2-car garages start in the low thousands. We provide firm quotes after on-site assessment.' },
    { q: 'Metallic epoxy Santa Fe NM — do you install it?', a: 'Yes. We offer custom metallic resin floors with artisan color blends for homes and businesses.' },
    { q: 'Polyaspartic vs epoxy in Santa Fe — which is better?', a: 'Both are durable. Polyaspartic cures faster and offers UV stability; epoxy is excellent for builds needing extensive customization.' },
    { q: 'Do you offer polished concrete in Santa Fe, NM?', a: 'We provide concrete polishing with multiple gloss levels and stain-resistant protection.' },
    { q: 'How long does garage floor epoxy take to install?', a: 'Most Santa Fe residential garages complete in 1–2 days depending on slab condition and chosen system.' },
    { q: 'Do you service surrounding communities near Santa Fe?', a: 'Yes. We cover Santa Fe and nearby areas—call to confirm your address.' }
  ];

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Business Header */}
      <BusinessHeader
        businessName={businessData.name}
        businessPhone={businessData.phone}
        businessEmail={businessData.email}
        businessWebsite={businessData.website}
        businessCategory={businessData.category}
        theme="orange"
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
                <BreadcrumbLink href="/businesses/nm-concrete-coating-pros/santa-fe/">Santa Fe</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 md:h-[600px] w-full bg-gradient-to-br from-orange-900 via-red-800 to-yellow-700">
        <OptimizedVideo
          src="/videos/mn-concrete-coating.mp4"
          alt="Epoxy floor coating Santa Fe NM with polyaspartic topcoat"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/nm-concrete-coating-pros/project-6.jpg"
          fallbackImage="/images/nm-concrete-coating-pros/project-6.jpg"
          priority
        />
        {/* Overlay removed per request */}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-6xl">
            <Badge className="mb-6 bg-orange-500 text-white border-orange-400">
              Santa Fe's Premier Concrete Coating Specialists
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Authentic Santa Fe Style
              <span className="block text-orange-300">Concrete Coating</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-4xl mx-auto">
              Epoxy floor coating Santa Fe NM with metallic resin options, polyaspartic topcoats, and polished concrete—crafted for the City Different.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
                <Phone className="h-6 w-6 mr-3" />
                Get Santa Fe Quote
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
            Why Choose Us in <span className="text-orange-600">Santa Fe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand Santa Fe's unique architectural heritage and climate challenges. 
            Our specialized approach ensures your concrete coating project honors the City Different's traditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center`}>
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
              Santa Fe <span className="text-orange-600">Specialized Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Santa Fe location offers specialized services designed for the unique needs of the City Different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/90 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={85}
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <NMConcreteGallery
            images={getGalleryImagesForPage('santa-fe', 6)}
            title="Santa Fe Style Projects"
            subtitle="Showcasing our authentic Southwestern concrete coating projects that honor Santa Fe's heritage"
            maxImages={6}
            showRandom={true}
            className="mb-16"
            headerIconClass="text-orange-600"
            badgeClass="bg-orange-600 text-white border-orange-500 px-4 py-2"
            categoryBadgeClass="bg-orange-600/80 text-white border-orange-500"
            hoverOverlayClass="bg-orange-600/20"
          />
        </div>

        {/* Nearby Locations */}
        <div className="mb-20 text-center">
          <p className="text-gray-700">Also serving: <a className="text-orange-600 hover:underline" href="/businesses/nm-concrete-coating-pros/">Epoxy floor coating Albuquerque NM</a> • <a className="text-orange-600 hover:underline" href="/businesses/nm-concrete-coating-pros/rio-rancho/">Rio Rancho epoxy floor coating</a> • <a className="text-orange-600 hover:underline" href="/businesses/nm-concrete-coating-pros/los-lunas/">Garage floor epoxy Los Lunas</a> • <a className="text-orange-600 hover:underline" href="/businesses/nm-concrete-coating-pros/edgewood/">Epoxy floor coating Edgewood NM</a></p>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Santa Fe FAQs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Common questions from Santa Fe homeowners and businesses.</p>
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

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Santa Fe <span className="text-orange-600">Customer Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied customers across Santa Fe and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white/90 backdrop-blur-sm">
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

        {/* Santa Fe Heritage Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-center text-white">
            <Mountain className="h-16 w-16 mx-auto mb-6 text-orange-200" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Honoring Santa Fe's Heritage
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
              We respect and celebrate Santa Fe's rich architectural traditions. Our concrete coating services 
              are designed to complement adobe homes, Spanish colonial architecture, and the unique aesthetic 
              that makes the City Different truly special.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Phone className="h-6 w-6 mr-3" />
                Get Santa Fe Quote
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
              Our Santa Fe <span className="text-orange-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with Santa Fe's unique climate and architectural requirements to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Heritage Consultation</h3>
              <p className="text-gray-600">
                We consult on design options that honor Santa Fe's architectural traditions while meeting your modern needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Climate-Adapted Installation</h3>
              <p className="text-gray-600">
                Our specialized techniques account for Santa Fe's high altitude and temperature variations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Authentic Finish</h3>
              <p className="text-gray-600">
                Enjoy a beautiful, durable finish that perfectly complements your Santa Fe property.
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
        theme="orange"
        layout="centered"
        logoShape="circle"
        topStripe
        ctaBanner={{
          title: 'Santa Fe Heritage Finish',
          subtitle: "Authentic designs for adobe and Pueblo Revival homes",
          buttonText: 'Get Santa Fe Quote'
        }}
      />
    </div>
  );
}
