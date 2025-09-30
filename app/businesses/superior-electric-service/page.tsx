import { Metadata } from 'next';
import Script from 'next/script';
import OptimizedVideo from '@/components/ui/optimized-video';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, MapPin, Clock, Mail, Globe, Hammer, Paintbrush, Wrench, Home, Lightbulb, Shield, CheckCircle, ArrowRight, Zap, Award, Users, Clock3, DollarSign, ThumbsUp, Camera, Image as ImageIcon } from 'lucide-react';
import LouisvilleHeader from '@/components/business-landing/louisville-header';
import LouisvilleFooter from '@/components/business-landing/louisville-footer';

export const metadata: Metadata = {
  title: 'Superior Electric Service - Louisville, KY | Main Location | Professional Electrical Services',
  description: 'Main location of Superior Electric Service in Louisville, KY. Professional electrical services, installations, repairs, and maintenance. Serving Louisville, Prospect, Hill View, and surrounding areas.',
  alternates: { 
    canonical: '/businesses/superior-electric-service/',
  },
  openGraph: {
    title: 'Superior Electric Service - Louisville, KY Main Location',
    description: 'Main location of Superior Electric Service in Louisville, KY. Professional electrical services, installations, repairs, and maintenance services.',
    images: ['/images/superior-electrical/commercial-projects.png'],
  },
};

export default function SuperiorElectricServicePage() {
  const businessData = {
    name: 'Superior Electric Service',
    locationName: 'Louisville Main Location',
    category: 'Electrical Services',
    rating: 4.8,
    reviewCount: 127,
    priceRange: '$$$',
    phone: '(502) 964-9473',
    email: 'superiorelectricservice@hotmail.com',
    website: 'https://www.superiorelectricservice.com/',
    featuredImage: '/images/superior-electrical/commercial-projects.png',
    description: 'Main location of Superior Electric Service in Louisville, KY. Professional electrical services, installations, repairs, and maintenance. Serving Louisville, Prospect, Hill View, and surrounding areas.',
    address: 'Louisville, KY',
    city: 'Louisville',
    state: 'KY',
    zipCode: '40201',
  };

  const services = [
    {
      title: 'Electrical Services',
      description: 'Professional electrical installation, repair, and maintenance services',
      icon: Lightbulb,
      features: ['Electrical Installation', 'Electrical Repairs', 'Wiring & Rewiring', 'Panel Upgrades', 'Outlet Installation'],
      image: '/images/superior-electrical/residential-wiring.png'
    },
    {
      title: 'Solar Installation',
      description: 'Complete solar panel installation and renewable energy solutions',
      icon: Shield,
      features: ['Solar Panel Installation', 'Solar System Design', 'Battery Storage', 'Grid-Tie Systems', 'Maintenance & Repairs'],
      image: '/images/superior-electrical/solar-systems.png'
    },
    {
      title: 'Installation & Repairs',
      description: 'Professional installation and repair services for all electrical needs',
      icon: Wrench,
      features: ['Fixture Installation', 'Appliance Wiring', 'Circuit Breaker Repairs', 'GFCI Installation', 'Lighting Installation'],
      image: '/images/superior-electrical/panel-upgrades.png'
    },
    {
      title: 'Upgradations',
      description: 'Electrical system upgrades and modernization services',
      icon: Home,
      features: ['Panel Upgrades', 'Service Upgrades', 'Smart Home Integration', 'Energy Efficiency Upgrades', 'Code Compliance'],
      image: '/images/superior-electrical/smarthome-systems.png'
    },
    {
      title: 'Emergency Work',
      description: '24/7 emergency electrical services for urgent repairs',
      icon: Hammer,
      features: ['24/7 Emergency Service', 'Power Outage Repairs', 'Electrical Safety Issues', 'Storm Damage', 'Immediate Response'],
      image: '/images/superior-electrical/emergency-repairs.png',
      specialNote: 'Available 24/7 for emergency electrical services'
    }
  ];

  const serviceAreas = [
    'Louisville, KY',
    'Prospect, KY', 
    'Hill View, KY'
  ];

  const whyChooseUs = [
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed electricians with comprehensive insurance coverage',
      icon: Award,
      color: 'text-yellow-500'
    },
    {
      title: '24/7 Emergency Service',
      description: 'Round-the-clock emergency electrical services when you need us most',
      icon: Clock3,
      color: 'text-red-500'
    },
    {
      title: 'Free Estimates',
      description: 'No-obligation free estimates for all electrical projects',
      icon: DollarSign,
      color: 'text-green-500'
    },
    {
      title: 'Quality Workmanship',
      description: 'Superior quality materials and expert installation techniques',
      icon: ThumbsUp,
      color: 'text-blue-500'
    },
    {
      title: 'Local Experts',
      description: 'Family-owned business serving Louisville area for over 15 years',
      icon: Users,
      color: 'text-purple-500'
    },
    {
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction guarantee on all our electrical services',
      icon: Shield,
      color: 'text-orange-500'
    }
  ];

  const galleryImages = [
    {
      src: '/images/superior-electrical/panel-upgrades.png',
      alt: 'Electrical Panel Installation',
      title: 'Panel Upgrades'
    },
    {
      src: '/images/superior-electrical/solar-systems.png',
      alt: 'Solar Panel Installation',
      title: 'Solar Systems'
    },
    {
      src: '/images/superior-electrical/commercial-projects.png',
      alt: 'Commercial Electrical Work',
      title: 'Commercial Projects'
    },
    {
      src: '/images/superior-electrical/residential-wiring.png',
      alt: 'Residential Wiring',
      title: 'Residential Wiring'
    },
    {
      src: '/images/superior-electrical/emergency-repairs.png',
      alt: 'Emergency Electrical Repair',
      title: 'Emergency Repairs'
    },
    {
      src: '/images/superior-electrical/smarthome-systems.png',
      alt: 'Smart Home Installation',
      title: 'Smart Home Systems'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Business Header */}
      <LouisvilleHeader
        businessName={businessData.name}
        businessPhone={businessData.phone}
        businessEmail={businessData.email}
        businessWebsite={businessData.website}
        businessCategory={businessData.category}
      />

      {/* Structured Data */}
      <Script
        id="business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: businessData.name,
            description: businessData.description,
            url: 'https://nearbybizfinder.com/businesses/superior-electric-service/',
            image: businessData.featuredImage,
            priceRange: businessData.priceRange,
            telephone: businessData.phone,
            email: businessData.email,
            website: businessData.website,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Louisville',
              addressRegion: 'KY',
              addressCountry: 'US',
            },
            areaServed: serviceAreas.map(area => ({
              '@type': 'City',
              name: area
            })),
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Services',
              itemListElement: services.map((service, index) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service.title,
                  description: service.description
                }
              }))
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: businessData.rating,
              reviewCount: businessData.reviewCount,
            },
          }),
        }}
      />

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <OptimizedVideo
          src="/videos/electrical-services-hero.mp4"
          fallbackImage={businessData.featuredImage}
          alt={businessData.name}
          className="absolute inset-0 w-full h-full"
          autoPlay
          muted
          loop
          playsInline
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
        
        {/* Decorative Elements - Electrical Theme */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-yellow-300/25 rounded-full blur-2xl"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-5xl">
            <div className="mb-8">
              <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 border-yellow-300/50 backdrop-blur-sm shadow-lg">
                <Zap className="h-4 w-4 mr-2" />
                {businessData.locationName}
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                {businessData.name}
              </h1>
              <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                {businessData.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-semibold text-white">
                {businessData.rating}
              </span>
              <span className="text-cyan-200 text-lg">
                ({businessData.reviewCount} reviews)
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl"
              >
                <Phone className="h-5 w-5 mr-3" />
                Call Now: {businessData.phone}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
                asChild
              >
                <a href={businessData.website} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-5 w-5 mr-3" />
                  Visit Website
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Professional Services - Louisville Main Location
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From electrical installations to solar systems and emergency repairs, we provide comprehensive electrical services from our main Louisville location.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg">
                      <service.icon className="h-6 w-6 text-gray-900" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {service.specialNote && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                      <p className="text-sm text-blue-800 font-medium">
                        {service.specialNote}
                      </p>
                    </div>
                  )}
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white group shadow-lg">
                    Get Free Estimate
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Service Areas Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Areas We Serve from Louisville
            </h2>
            <p className="text-xl text-gray-600">
              Proudly serving the greater Louisville area and surrounding communities from our main location
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="font-semibold text-gray-900">
                  {area}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our Louisville Main Location?
              </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With over 15 years of experience and a commitment to excellence, our main Louisville location is your trusted partner for all electrical needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mr-4">
                    <item.icon className={`h-6 w-6 text-gray-900`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
            </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Contact us today for a free estimate. We're here to help with all your electrical needs with professional, reliable service.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <span className="text-lg font-semibold text-white">{businessData.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-yellow-400" />
                  <span className="text-lg text-gray-300">{businessData.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-yellow-400" />
                  <a href={businessData.website} target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-white transition-colors">
                    Visit Our Website
                  </a>
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 py-4 text-lg font-semibold rounded-lg shadow-lg"
              >
                <Phone className="h-5 w-5 mr-3" />
                Call for Free Estimate
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Emergency Services
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Electrical emergencies don't wait for business hours. Our 24/7 emergency service ensures you're never left in the dark.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock3 className="h-5 w-5 text-red-400" />
                  <span className="text-lg text-white">24/7 Emergency Response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  <span className="text-lg text-gray-300">Power Outage Repairs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span className="text-lg text-gray-300">Safety Inspections</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full mt-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 text-lg font-semibold rounded-lg shadow-lg"
              >
                <Phone className="h-5 w-5 mr-3" />
                Emergency Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Work Gallery - Louisville Main Location
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent electrical projects and installations from our main Louisville location across the greater Louisville area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.alt}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="h-5 w-5 text-gray-900" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
            >
              <ImageIcon className="h-5 w-5 mr-3" />
              View More Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Our Louisville Main Location
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next electrical project? Get in touch with our main Louisville team of licensed professionals for a free estimate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Call Us</h3>
              <p className="text-gray-300 text-lg mb-4">{businessData.phone}</p>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900"
                asChild
              >
                <a href={`tel:${businessData.phone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Email Us</h3>
              <p className="text-gray-300 text-lg mb-4">{businessData.email}</p>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white"
                asChild
              >
                <a href={`mailto:${businessData.email}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Visit Website</h3>
              <p className="text-gray-300 text-lg mb-4">View Our Portfolio</p>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white"
                asChild
              >
                <a href={businessData.website} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-2" />
                  Visit Site
                </a>
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white">Emergency Electrical Service</h3>
              <p className="text-gray-300 mb-6">
                Electrical emergencies can happen at any time. Our 24/7 emergency service ensures you're never left in the dark.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
                asChild
              >
                <a href={`tel:${businessData.phone}`}>
                  <Zap className="h-5 w-5 mr-3" />
                  Emergency Call: {businessData.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Business Footer */}
      <LouisvilleFooter
        businessName={businessData.name}
        businessPhone={businessData.phone}
        businessEmail={businessData.email}
        businessWebsite={businessData.website}
        businessRating={businessData.rating}
        businessReviewCount={businessData.reviewCount}
        serviceAreas={serviceAreas}
      />
    </div>
  );
}
