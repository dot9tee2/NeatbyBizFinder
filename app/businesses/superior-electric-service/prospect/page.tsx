import { Metadata } from 'next';
import Script from 'next/script';
import OptimizedVideo from '@/components/ui/optimized-video';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, MapPin, Clock, Mail, Globe, Hammer, Paintbrush, Wrench, Home, Lightbulb, Shield, CheckCircle, ArrowRight, Zap, Award, Users, Clock3, DollarSign, ThumbsUp, Camera, Image as ImageIcon, Building2, Car, TreePine } from 'lucide-react';
import ProspectHeader from '@/components/business-landing/prospect-header';
import ProspectFooter from '@/components/business-landing/prospect-footer';

export const metadata: Metadata = {
  title: 'Superior Electric Service - Prospect, KY | Professional Electrical Services',
  description: 'Professional electrical services in Prospect, KY. Solar installations, emergency repairs, and electrical upgrades. Serving Prospect and surrounding areas.',
  alternates: { 
    canonical: '/businesses/superior-electric-service/prospect/',
  },
  openGraph: {
    title: 'Superior Electric Service - Prospect, KY Location',
    description: 'Professional electrical services in Prospect, KY. Solar installations, emergency repairs, and electrical upgrades.',
    images: ['/images/superior-electrical/commercial-projects.png'],
  },
};

export default function SuperiorElectricServiceProspectPage() {
  const businessData = {
    name: 'Superior Electric Service',
    locationName: 'Prospect Location',
    category: 'Electrical Services',
    rating: 4.9,
    reviewCount: 89,
    priceRange: '$$$',
    phone: '(502) 964-9473',
    email: 'superiorelectricservice@hotmail.com',
    website: 'https://www.superiorelectricservice.com/',
    featuredImage: '/images/superior-electrical/commercial-projects.png',
    description: 'Professional electrical services in Prospect, KY. Specializing in residential and commercial electrical installations, solar systems, and emergency repairs.',
    address: 'Prospect, KY',
    city: 'Prospect',
    state: 'KY',
    zipCode: '40059',
  };

  const services = [
    {
      title: 'Residential Electrical',
      description: 'Complete home electrical services for Prospect homeowners',
      icon: Home,
      features: ['Panel Upgrades', 'Outlet Installation', 'Lighting Design', 'GFCI Installation', 'Whole House Rewiring'],
      image: '/images/superior-electrical/residential-wiring.png'
    },
    {
      title: 'Solar Energy Systems',
      description: 'Premium solar panel installations for Prospect homes and businesses',
      icon: Zap,
      features: ['Solar Panel Installation', 'Battery Storage', 'Grid-Tie Systems', 'Solar Maintenance', 'Energy Monitoring'],
      image: '/images/superior-electrical/residential-wiring.png'
    },
    {
      title: 'Commercial Electrical',
      description: 'Professional electrical services for Prospect businesses',
      icon: Building2,
      features: ['Office Wiring', 'Retail Electrical', 'Industrial Services', 'Emergency Lighting', 'Power Distribution'],
      image: '/images/superior-electrical/residential-wiring.png'
    },
    {
      title: 'Smart Home Integration',
      description: 'Modern smart home electrical systems and automation',
      icon: Lightbulb,
      features: ['Smart Switches', 'Home Automation', 'Security Systems', 'Energy Management', 'Voice Control'],
      image: '/images/superior-electrical/residential-wiring.png'
    },
    {
      title: 'Emergency Services',
      description: '24/7 emergency electrical repairs in Prospect',
      icon: Shield,
      features: ['Power Outages', 'Electrical Fires', 'Storm Damage', 'Circuit Breaker Issues', 'Immediate Response'],
      image: '/images/superior-electrical/residential-wiring.png',
      specialNote: 'Available 24/7 for emergency electrical services in Prospect'
    }
  ];

  const serviceAreas = [
    'Prospect, KY',
    'Goshen, KY', 
    'Crestwood, KY',
    'La Grange, KY',
    'Pewee Valley, KY',
    'Buckner, KY'
  ];

  const whyChooseUs = [
    {
      title: 'Prospect Specialists',
      description: 'Local experts who understand Prospect\'s electrical needs and building codes',
      icon: MapPin,
      color: 'text-blue-500'
    },
    {
      title: 'Premium Service',
      description: 'High-end electrical services for Prospect\'s upscale residential and commercial properties',
      icon: Award,
      color: 'text-yellow-500'
    },
    {
      title: 'Solar Experts',
      description: 'Leading solar installation specialists serving Prospect and surrounding areas',
      icon: Zap,
      color: 'text-orange-500'
    },
    {
      title: 'Emergency Response',
      description: 'Fast emergency response times throughout Prospect and neighboring communities',
      icon: Clock3,
      color: 'text-red-500'
    }
  ];

  const galleryImages = [
    {
      src: '/images/superior-electrical/panel-upgrades.png',
      alt: 'Prospect Residential Solar Installation',
      title: 'Residential Solar'
    },
    {
      src: '/images/superior-electrical/panel-upgrades.png',
      alt: 'Prospect Commercial Electrical Work',
      title: 'Commercial Projects'
    },
    {
      src: '/images/superior-electrical/panel-upgrades.png',
      alt: 'Smart Home Installation in Prospect',
      title: 'Smart Home Systems'
    },
    {
      src: '/images/superior-electrical/panel-upgrades.png',
      alt: 'Prospect Panel Upgrade',
      title: 'Panel Upgrades'
    },
    {
      src: '/images/superior-electrical/panel-upgrades.png',
      alt: 'Emergency Electrical Repair Prospect',
      title: 'Emergency Repairs'
    },
    {
      src: '/images/superior-electrical/panel-upgrades.png',
      alt: 'Prospect Outdoor Lighting',
      title: 'Outdoor Lighting'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Business Header */}
      <ProspectHeader
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
            url: 'https://nearbybizfinder.com/businesses/superior-electric-service/prospect/',
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

      {/* Hero Section - Modern Card Design */}
      <div className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="mb-8">
                <Badge className="mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-cyan-300/50 backdrop-blur-sm shadow-lg">
                  <MapPin className="h-4 w-4 mr-2" />
                  {businessData.locationName}
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  {businessData.name}
                </h1>
                <p className="text-xl md:text-2xl text-cyan-100 max-w-2xl leading-relaxed">
                  {businessData.description}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4 mb-8">
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
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl"
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

            {/* Image/Video Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={businessData.featuredImage}
                    alt={businessData.name}
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl mb-2">Serving Prospect, KY</h3>
                    <p className="text-cyan-100">Professional electrical services since 2008</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - Card Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Electrical Services in Prospect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical solutions tailored for Prospect's residential and commercial properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg hover:scale-105">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
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
                        <CheckCircle className="h-4 w-4 text-cyan-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {service.specialNote && (
                    <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3 mb-4">
                      <p className="text-sm text-cyan-800 font-medium">
                        {service.specialNote}
                      </p>
                    </div>
                  )}
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white group shadow-lg">
                    Get Free Estimate
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section - Modern Grid */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us in Prospect?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local expertise, premium service, and cutting-edge electrical solutions for Prospect properties.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
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
              Our Work in Prospect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our electrical projects and installations throughout Prospect and surrounding areas.
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.alt}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="h-5 w-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section - Modern Design */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Our Prospect Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your electrical project in Prospect? Get in touch with our local experts for a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Call Us</h3>
              <p className="text-gray-300 text-lg mb-4">{businessData.phone}</p>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white"
                asChild
              >
                <a href={`tel:${businessData.phone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
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
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Visit Website</h3>
              <p className="text-gray-300 text-lg mb-4">View Our Portfolio</p>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-slate-400 to-slate-500 hover:from-slate-500 hover:to-slate-600 text-white"
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
                Electrical emergencies in Prospect? Our 24/7 emergency service ensures you're never left in the dark.
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
      <ProspectFooter
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
