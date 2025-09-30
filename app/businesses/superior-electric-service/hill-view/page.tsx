import { Metadata } from 'next';
import Script from 'next/script';
import OptimizedVideo from '@/components/ui/optimized-video';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, MapPin, Clock, Mail, Globe, Hammer, Paintbrush, Wrench, Home, Lightbulb, Shield, CheckCircle, ArrowRight, Zap, Award, Users, Clock3, DollarSign, ThumbsUp, Camera, Image as ImageIcon, Building2, Car, TreePine, Mountain, Sun } from 'lucide-react';
import HillViewHeader from '@/components/business-landing/hillview-header';
import HillViewFooter from '@/components/business-landing/hillview-footer';

export const metadata: Metadata = {
  title: 'Superior Electric Service - Hill View, KY | Rural Electrical Specialists',
  description: 'Specialized electrical services for Hill View, KY. Rural electrical solutions, solar installations, and emergency repairs for residential and agricultural properties.',
  alternates: { 
    canonical: '/businesses/superior-electric-service/hill-view/',
  },
  openGraph: {
    title: 'Superior Electric Service - Hill View, KY Location',
    description: 'Specialized electrical services for Hill View, KY. Rural electrical solutions, solar installations, and emergency repairs.',
    images: ['/images/superior-electrical/commercial-projects.png'],
  },
};

export default function SuperiorElectricServiceHillViewPage() {
  const businessData = {
    name: 'Superior Electric Service',
    locationName: 'Hill View Location',
    category: 'Electrical Services',
    rating: 4.7,
    reviewCount: 67,
    priceRange: '$$$',
    phone: '(502) 964-9473',
    email: 'superiorelectricservice@hotmail.com',
    website: 'https://www.superiorelectricservice.com/',
    featuredImage: '/images/superior-electrical/commercial-projects.png',
    description: 'Specialized electrical services for Hill View, KY. Expert rural electrical solutions, agricultural installations, and emergency repairs for residential and farm properties.',
    address: 'Hill View, KY',
    city: 'Hill View',
    state: 'KY',
    zipCode: '40026',
  };

  const services = [
    {
      title: 'Rural Electrical',
      description: 'Specialized electrical services for Hill View rural properties',
      icon: Mountain,
      features: ['Rural Wiring', 'Well Pump Electrical', 'Barn Lighting', 'Outdoor Power', 'Generator Hookups'],
      image: '/images/superior-electrical/residential-wiring.png'
    },
    {
      title: 'Agricultural Electrical',
      description: 'Farm and agricultural electrical installations and maintenance',
      icon: TreePine,
      features: ['Farm Equipment Wiring', 'Grain Bin Electrical', 'Livestock Facilities', 'Irrigation Systems', 'Farm Security'],
      image: '/images/superior-electrical/residential-wiring.png'
    },
    {
      title: 'Solar & Renewable',
      description: 'Off-grid and grid-tie solar solutions for rural properties',
      icon: Sun,
      features: ['Off-Grid Solar', 'Battery Storage', 'Solar Water Pumps', 'Remote Monitoring', 'Backup Power'],
      image: '/images/superior-electrical/residential-wiring.png'
    },
    {
      title: 'Residential Services',
      description: 'Complete home electrical services for Hill View residents',
      icon: Home,
      features: ['Home Wiring', 'Panel Upgrades', 'Outdoor Lighting', 'Security Systems', 'Smart Home'],
      image: '/images/superior-electrical/residential-wiring.png'
    },
    {
      title: 'Emergency Repairs',
      description: '24/7 emergency electrical services for Hill View area',
      icon: Shield,
      features: ['Storm Damage', 'Power Outages', 'Equipment Failures', 'Safety Issues', 'Rapid Response'],
      image: '/images/superior-electrical/residential-wiring.png',
      specialNote: 'Available 24/7 for emergency electrical services in Hill View'
    }
  ];

  const serviceAreas = [
    'Hill View, KY',
    'Eminence, KY', 
    'New Castle, KY',
    'Smithfield, KY',
    'Pleasureville, KY',
    'Lockport, KY'
  ];

  const whyChooseUs = [
    {
      title: 'Rural Specialists',
      description: 'Expert knowledge of rural electrical challenges and solutions in Hill View',
      icon: Mountain,
      color: 'text-green-500'
    },
    {
      title: 'Agricultural Focus',
      description: 'Specialized experience with farm and agricultural electrical systems',
      icon: TreePine,
      color: 'text-emerald-500'
    },
    {
      title: 'Off-Grid Experts',
      description: 'Leading specialists in off-grid and renewable energy solutions',
      icon: Sun,
      color: 'text-orange-500'
    },
    {
      title: 'Local Knowledge',
      description: 'Deep understanding of Hill View\'s unique electrical infrastructure needs',
      icon: MapPin,
      color: 'text-blue-500'
    }
  ];

  const galleryImages = [
    {
      src: '/images/superior-electrical/panel-upgrades.png',
      alt: 'Hill View Rural Solar Installation',
      title: 'Rural Solar'
    },
    {
      src: '/images/superior-electrical/panel-upgrades.png',
      alt: 'Agricultural Electrical Work',
      title: 'Farm Electrical'
    },
    {
      src: '/images/superior-electrical/panel-upgrades.png',
      alt: 'Hill View Residential Wiring',
      title: 'Residential Work'
    },
    {
      src: '/images/superior-electrical/panel-upgrades.png',
      alt: 'Off-Grid Power System',
      title: 'Off-Grid Systems'
    },
    {
      src: '/images/superior-electrical/panel-upgrades.png',
      alt: 'Emergency Repair Hill View',
      title: 'Emergency Repairs'
    },
    {
      src: '/images/superior-electrical/panel-upgrades.png',
      alt: 'Rural Outdoor Lighting',
      title: 'Outdoor Lighting'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Business Header */}
      <HillViewHeader
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
            name: `${businessData.name} - ${businessData.locationName}`,
            description: businessData.description,
            url: 'https://nearbybizfinder.com/businesses/superior-electric-service/hill-view/',
            image: businessData.featuredImage,
            priceRange: businessData.priceRange,
            telephone: businessData.phone,
            email: businessData.email,
            website: businessData.website,
            address: {
              '@type': 'PostalAddress',
              addressLocality: businessData.city,
              addressRegion: businessData.state,
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

      {/* Hero Section - Nature-Inspired Design */}
      <div className="relative py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-green-700">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="text-center text-white">
            <div className="mb-8">
              <Badge className="mb-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white border-green-300/50 backdrop-blur-sm shadow-lg">
                <Mountain className="h-4 w-4 mr-2" />
                {businessData.locationName}
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                {businessData.name}
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
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
              <span className="text-green-200 text-lg">
                ({businessData.reviewCount} reviews)
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl"
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
      </div>

      {/* Services Section - Nature Theme */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Rural Electrical Services in Hill View
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized electrical solutions for rural properties, farms, and agricultural operations in Hill View and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg hover:scale-105 border-l-4 border-l-green-500">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                      <service.icon className="h-6 w-6 text-white" />
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
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                      <p className="text-sm text-green-800 font-medium">
                        {service.specialNote}
                      </p>
                    </div>
                  )}
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white group shadow-lg">
                    Get Free Estimate
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section - Rural Focus */}
      <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us in Hill View?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rural electrical expertise, agricultural focus, and deep local knowledge of Hill View's unique electrical needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Work in Hill View
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our rural electrical projects and agricultural installations throughout Hill View and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                    <p className="text-green-200 text-sm">{image.alt}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="h-5 w-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section - Nature Theme */}
      <div className="py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-green-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Our Hill View Team
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Ready to start your rural electrical project in Hill View? Get in touch with our agricultural electrical specialists for a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Call Us</h3>
              <p className="text-green-100 text-lg mb-4">{businessData.phone}</p>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white"
                asChild
              >
                <a href={`tel:${businessData.phone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Email Us</h3>
              <p className="text-green-100 text-lg mb-4">{businessData.email}</p>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white"
                asChild
              >
                <a href={`mailto:${businessData.email}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Visit Website</h3>
              <p className="text-green-100 text-lg mb-4">View Our Portfolio</p>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
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
              <h3 className="text-2xl font-bold mb-4 text-white">Emergency Rural Electrical Service</h3>
              <p className="text-green-100 mb-6">
                Electrical emergencies in Hill View? Our 24/7 emergency service ensures your rural property is never left without power.
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
      <HillViewFooter
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
