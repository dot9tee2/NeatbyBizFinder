import { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, Mail, Globe, Hammer, Paintbrush, Wrench, Home, Lightbulb, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Drywall and Painting Pro - Georgetown Location | Christmas Light Installation & Home Services',
  description: 'Professional Christmas light installation, drywall, painting, and home services in Georgetown, TX. Serving Georgetown, Liberty Hills, and Leander areas.',
  alternates: { 
    canonical: '/businesses/drywall-painting-pro/georgetown/',
  },
  openGraph: {
    title: 'Drywall and Painting Pro - Georgetown Location',
    description: 'Professional Christmas light installation, drywall, painting, and home services in Georgetown, TX.',
    images: ['https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'],
  },
};

export default function GeorgetownPage() {
  const businessData = {
    name: 'Drywall and Painting Pro',
    locationName: 'Georgetown Location',
    category: 'Home Services',
    rating: 4.8,
    reviewCount: 127,
    priceRange: '$$$',
    phone: '(737) 287-4153',
    email: 'Drywallandpaintingpro@yahoo.com',
    website: 'https://www.drywallandpaintingpro.com/',
    featuredImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    description: 'Professional Christmas light installation, drywall, painting, and home services in Georgetown, TX. Serving Georgetown, Liberty Hills, and Leander areas.',
    city: 'Georgetown',
    state: 'TX',
  };

  const services = [
    {
      title: 'Christmas Light Installation',
      description: 'Professional Christmas light installation and removal services for homes and businesses',
      icon: Lightbulb,
      features: ['Residential Installation', 'Commercial Installation', 'Design Consultation', 'Safe Installation', 'Removal Service'],
      popular: true,
      specialNote: 'Specializing in Georgetown, Liberty Hills, and Leander areas'
    },
    {
      title: 'Painting & Drywall',
      description: 'Professional interior and exterior painting with expert drywall installation and repair',
      icon: Paintbrush,
      features: ['Interior Painting', 'Exterior Painting', 'Drywall Installation', 'Drywall Repair', 'Texture Matching']
    },
    {
      title: 'Water Damage Restoration',
      description: 'Complete water damage restoration and mold remediation services',
      icon: Shield,
      features: ['Water Extraction', 'Mold Remediation', 'Structural Drying', 'Damage Assessment', 'Insurance Claims']
    },
    {
      title: 'Remodeling',
      description: 'Complete home remodeling and renovation services',
      icon: Home,
      features: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Room Additions', 'Flooring', 'Custom Work']
    }
  ];

  const serviceAreas = [
    'Georgetown, TX',
    'Liberty Hill, TX',
    'Leander, TX',
    'Round Rock, TX',
    'Cedar Park, TX'
  ];

  const whyChooseUs = [
    'Licensed & Insured Professionals',
    'Free Estimates & Consultations',
    'Quality Materials & Workmanship',
    'Emergency Services Available',
    'Satisfaction Guaranteed',
    'Local Georgetown Business'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
            url: 'https://nearbybizfinder.com/businesses/drywall-painting-pro/georgetown/',
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
        <Image
          src={businessData.featuredImage}
          alt={`${businessData.name} - ${businessData.locationName}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-800/60 to-red-700/40"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-red-500/20 rounded-full blur-2xl"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-5xl">
            <div className="mb-8">
              <Badge className="mb-6 bg-green-500/80 text-white border-green-400/50 backdrop-blur-sm">
                <Lightbulb className="h-4 w-4 mr-2" />
                Christmas Light Installation
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                {businessData.name}
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-red-200">
                {businessData.locationName}
              </h2>
              <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
                Professional Christmas light installation and home services in Georgetown, TX. Making your holidays bright!
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
              <span className="text-red-200 text-lg">
                ({businessData.reviewCount} reviews)
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl"
              >
                <Phone className="h-5 w-5 mr-3" />
                Call Now: {businessData.phone}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm"
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

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Services in Georgetown
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Christmas light installation to complete home remodeling, we provide comprehensive home improvement services for Georgetown residents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg ${service.popular ? 'ring-2 ring-green-200' : ''}`}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${service.popular ? 'bg-green-500' : 'bg-red-500'}`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                        {service.popular && (
                          <Badge className="bg-green-500 text-white">
                            Most Popular
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
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
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white group">
                        Get Free Estimate
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-red-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Us in Georgetown?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                As a local Georgetown business, we understand the unique needs of our community and are committed to providing exceptional service.
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
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Ready to Light Up Your Holidays?
              </h3>
              <p className="text-red-100 mb-6 leading-relaxed">
                Contact us today for a free estimate. We're here to help make your Georgetown home beautiful and festive.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-200" />
                  <span className="text-lg font-semibold">{businessData.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-red-200" />
                  <span className="text-lg">{businessData.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-red-200" />
                  <a href={businessData.website} target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">
                    Visit Our Website
                  </a>
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-semibold rounded-lg"
              >
                <Phone className="h-5 w-5 mr-3" />
                Call for Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Serving Georgetown & Surrounding Areas
            </h2>
            <p className="text-xl text-gray-600">
              We proudly serve Georgetown and the surrounding communities with professional home improvement services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-6 text-center hover:bg-red-100 transition-colors duration-300">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {area}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Our Georgetown Team
            </h2>
            <p className="text-xl text-gray-300">
              Ready to start your next home improvement project? Get in touch with our Georgetown professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300 text-lg">{businessData.phone}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300 text-lg">{businessData.email}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Website</h3>
              <a href={businessData.website} target="_blank" rel="noopener noreferrer" className="text-gray-300 text-lg hover:text-green-400 transition-colors">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}