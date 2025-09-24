import { Metadata } from 'next';
import Script from 'next/script';
import OptimizedVideo from '@/components/ui/optimized-video';
import OptimizedImage from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, MapPin, Clock, Mail, Globe, Hammer, Paintbrush, Wrench, Home, Lightbulb, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import BusinessHeader from '@/components/business-landing/business-header';
import BusinessFooter from '@/components/business-landing/business-footer';

export const metadata: Metadata = {
  title: 'Drywall and Painting Pro - Professional Home Services | NearbyBizFinder',
  description: 'Professional drywall, painting, water damage restoration, pipe services, and remodeling. Serving Cedar Park, Georgetown, Leander, and surrounding areas.',
  alternates: { 
    canonical: '/businesses/drywall-painting-pro/',
  },
  openGraph: {
    title: 'Drywall and Painting Pro - Professional Home Services',
    description: 'Professional drywall, painting, water damage restoration, pipe services, and remodeling services.',
    images: ['https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'],
  },
};

export default function DrywallPaintingProPage() {
  const businessData = {
    name: 'Drywall and Painting Pro',
    category: 'Home Services',
    rating: 4.8,
    reviewCount: 127,
    priceRange: '$$$',
    phone: '(737) 287-4153',
    email: 'Drywallandpaintingpro@yahoo.com',
    website: 'https://www.drywallandpaintingpro.com/',
    featuredImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    description: 'Professional drywall, painting, water damage restoration, pipe services, and remodeling. Serving Cedar Park, Georgetown, Leander, and surrounding areas.',
  };

  const services = [
    {
      title: 'Painting & Drywall',
      description: 'Professional interior and exterior painting with expert drywall installation and repair',
      icon: Paintbrush,
      features: ['Interior Painting', 'Exterior Painting', 'Drywall Installation', 'Drywall Repair', 'Texture Matching'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
    },
    {
      title: 'Water Damage Restoration',
      description: 'Complete water damage restoration and mold remediation services',
      icon: Shield,
      features: ['Water Extraction', 'Mold Remediation', 'Structural Drying', 'Damage Assessment', 'Insurance Claims'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
    },
    {
      title: 'Pipe Services',
      description: 'Professional plumbing and pipe installation, repair, and maintenance',
      icon: Wrench,
      features: ['Pipe Installation', 'Pipe Repair', 'Leak Detection', 'Pipe Replacement', 'Emergency Services'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
    },
    {
      title: 'Remodeling',
      description: 'Complete home remodeling and renovation services',
      icon: Home,
      features: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Room Additions', 'Flooring', 'Custom Work'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
    },
    {
      title: 'Christmas Light Installation',
      description: 'Professional Christmas light installation and removal services',
      icon: Lightbulb,
      features: ['Residential Installation', 'Commercial Installation', 'Design Consultation', 'Safe Installation', 'Removal Service'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      specialNote: 'Serving Georgetown, Liberty Hills, and Leander'
    }
  ];

  const serviceAreas = [
    'Cedar Park, TX',
    'Georgetown, TX', 
    'Leander, TX',
    'Liberty Hill, TX',
    'Lago Vista, TX',
    'Marble Falls, TX',
    'Bertram, TX',
    'Hutto, TX'
  ];

  const whyChooseUs = [
    'Licensed & Insured Professionals',
    'Free Estimates & Consultations',
    'Quality Materials & Workmanship',
    'Emergency Services Available',
    'Satisfaction Guaranteed',
    'Local Family-Owned Business'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Business Header */}
      <BusinessHeader
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
            url: 'https://nearbybizfinder.com/businesses/drywall-painting-pro/',
            image: businessData.featuredImage,
            priceRange: businessData.priceRange,
            telephone: businessData.phone,
            email: businessData.email,
            website: businessData.website,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Cedar Park',
              addressRegion: 'TX',
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
          src="/videos/drywall-painting-hero.mp4"
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
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-5xl">
            <div className="mb-8">
              <Badge className="mb-6 bg-orange-500/80 text-white border-orange-400/50 backdrop-blur-sm">
                <Hammer className="h-4 w-4 mr-2" />
                {businessData.category}
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                {businessData.name}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
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
              <span className="text-blue-200 text-lg">
                ({businessData.reviewCount} reviews)
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl"
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
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From painting and drywall to water damage restoration, we provide comprehensive home improvement services.
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
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
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
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                      <p className="text-sm text-blue-800 font-medium">
                        {service.specialNote}
                      </p>
                    </div>
                  )}
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
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
      <div className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Proudly serving the greater Austin area and surrounding communities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">
                  {area}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Drywall and Painting Pro?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                With years of experience and a commitment to quality, we're your trusted partner for all home improvement needs.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Contact us today for a free estimate. We're here to help transform your home with professional, reliable service.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-200" />
                  <span className="text-lg font-semibold">{businessData.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-200" />
                  <span className="text-lg">{businessData.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-blue-200" />
                  <a href={businessData.website} target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">
                    Visit Our Website
                  </a>
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold rounded-lg"
              >
                <Phone className="h-5 w-5 mr-3" />
                Call for Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us Today
            </h2>
            <p className="text-xl text-gray-300">
              Ready to start your next home improvement project? Get in touch with our team of professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300 text-lg">{businessData.phone}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300 text-lg">{businessData.email}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Website</h3>
              <a href={businessData.website} target="_blank" rel="noopener noreferrer" className="text-gray-300 text-lg hover:text-orange-400 transition-colors">
                View Our Work
              </a>
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
        businessRating={businessData.rating}
        businessReviewCount={businessData.reviewCount}
        serviceAreas={serviceAreas}
      />
    </div>
  );
}