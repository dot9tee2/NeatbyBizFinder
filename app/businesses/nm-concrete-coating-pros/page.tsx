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
  title: 'Epoxy Floor Coating Albuquerque NM | NM Concrete Coating Pros',
  description:
    'Durable epoxy and polyaspartic garage floor coatings in Albuquerque, NM. Metallic resin floors, concrete polishing, and commercial floor coating by NM Concrete Coating Pros.',
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
    title: 'Epoxy Floor Coating Albuquerque NM | NM Concrete Coating Pros',
    description:
      'Durable epoxy and polyaspartic garage floor coatings in Albuquerque, NM. Metallic resin floors, concrete polishing, and commercial floor coating by NM Concrete Coating Pros.',
    images: ['/images/nm-concrete-coating-pros/og-albuquerque-epoxy-garage-floor-luxury-nmccpros-1200x630.webp'],
    url: 'https://nearbybizfinder.com/businesses/nm-concrete-coating-pros/',
    type: 'website',
    siteName: 'NearbyBizFinder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epoxy Floor Coating Albuquerque NM | NM Concrete Coating Pros',
    description: 'Albuquerque garage floor epoxy coating with polyaspartic topcoat.',
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
      title: 'Over a Decade of Experience',
      description: 'More than 10 years of professional concrete coating experience',
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
    }
  ];

  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
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
    { q: 'What is the cost of epoxy garage floor in Albuquerque, NM?', a: 'Typical 2-car garages in Albuquerque start around the low thousands; final pricing depends on size, prep, and system (epoxy or polyaspartic).' },
    { q: 'Is metallic epoxy flooring available in Albuquerque?', a: 'Yes. We install premium metallic resin floors with custom color blends and 3D depth effects.' },
    { q: 'Do you recommend a polyaspartic topcoat in Albuquerque?', a: 'Yes. Polyaspartic topcoats provide fast cure, UV stability, and excellent chemical resistance for New Mexico sun.' },
    { q: 'Do you offer concrete polishing in Albuquerque, NM?', a: 'We provide concrete polishing for residential and commercial spaces with multiple sheen and stain-resistant options.' },
    { q: 'How long does garage floor epoxy take to install?', a: 'Most Albuquerque garage projects complete in 1–2 days depending on condition and chosen system.' },
    { q: 'Do you service commercial floor coating needs in Albuquerque?', a: 'Yes. We install durable, high-traffic commercial coatings with minimal downtime.' }
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
              Transform Your Garage Floor Into
              <span className="block text-orange-400 mt-2">Luxury in Just One Day</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-5xl mx-auto leading-relaxed">
              Epoxy floor coating Albuquerque NM for garages and shops, metallic resin floors, polyaspartic topcoats, and concrete polishing for residential and commercial spaces.
            </p>
            
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
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With over a decade of experience, we provide the highest quality concrete coating services 
            in Albuquerque and surrounding areas.
          </p>
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
              Nearby Service Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore our city-specific pages.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link className="text-orange-600 hover:underline" href="/businesses/nm-concrete-coating-pros/rio-rancho/">Rio Rancho epoxy floor coating</Link>
            <span className="text-gray-400">•</span>
            <Link className="text-orange-600 hover:underline" href="/businesses/nm-concrete-coating-pros/santa-fe/">Epoxy floor coating Santa Fe NM</Link>
            <span className="text-gray-400">•</span>
            <Link className="text-orange-600 hover:underline" href="/businesses/nm-concrete-coating-pros/los-lunas/">Garage floor epoxy Los Lunas</Link>
            <span className="text-gray-400">•</span>
            <Link className="text-orange-600 hover:underline" href="/businesses/nm-concrete-coating-pros/edgewood/">Epoxy floor coating Edgewood NM</Link>
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
