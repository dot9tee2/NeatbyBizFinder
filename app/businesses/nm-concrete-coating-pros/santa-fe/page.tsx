import { Metadata } from 'next';
import Script from 'next/script';
import OptimizedImage from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, MapPin, Clock, Mail, Globe, Shield, CheckCircle, ArrowRight, Award, Users, Clock3, Zap, Home, Building, Sparkles, Wrench, Hammer, Layers, Mountain, Sun } from 'lucide-react';
import BusinessHeader from '@/components/business-landing/business-header';
import BusinessFooter from '@/components/business-landing/business-footer';

export const metadata: Metadata = {
  title: 'NM Concrete Coating Pros Santa Fe - Professional Epoxy Floor Coating Services | Santa Fe, NM',
  description: 'Professional epoxy floor coating, metallic resin, polyaspartic coating, and concrete polishing services in Santa Fe, NM. Over a decade of experience serving the City Different.',
  alternates: { 
    canonical: '/businesses/nm-concrete-coating-pros/santa-fe/',
  },
  openGraph: {
    title: 'NM Concrete Coating Pros Santa Fe - Professional Epoxy Floor Coating Services',
    description: 'Professional epoxy floor coating, metallic resin, polyaspartic coating, and concrete polishing services in Santa Fe, NM.',
    images: ['https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'],
  },
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
    featuredImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    description: 'Professional epoxy floor coating, metallic resin, polyaspartic coating, and concrete polishing services in Santa Fe, NM. Over a decade of experience serving the City Different.',
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
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
    },
    {
      title: 'Luxury Metallic Coatings',
      description: 'Premium metallic resin coatings perfect for Santa Fe\'s upscale properties',
      icon: Sparkles,
      features: ['Copper Accents', 'Gold Highlights', 'Silver Details', 'Custom Blends'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
    },
    {
      title: 'High-Altitude Polyaspartic',
      description: 'Specialized polyaspartic coatings designed for Santa Fe\'s unique climate',
      icon: Sun,
      features: ['UV Protection', 'Temperature Stable', 'Quick Cure', 'Weather Resistant'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
    },
    {
      title: 'Artisan Concrete Polishing',
      description: 'Hand-crafted concrete polishing that complements Santa Fe\'s artistic community',
      icon: Wrench,
      features: ['Hand Polished', 'Artistic Finishes', 'Natural Stone Look', 'Custom Textures'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
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
    '@type': 'LocalBusiness',
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Business Header */}
      <BusinessHeader
        businessName={businessData.name}
        businessPhone={businessData.phone}
        businessEmail={businessData.email}
        businessWebsite={businessData.website}
        businessCategory={businessData.category}
      />

      <Script
        id="business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Hero Section */}
      <div className="relative h-96 md:h-[600px] w-full bg-gradient-to-br from-orange-900 via-red-800 to-yellow-700">
        <OptimizedImage
          src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
          alt="Professional concrete coating services in Santa Fe"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
        
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
              Experience the perfect blend of traditional Santa Fe aesthetics and modern concrete coating technology. 
              Serving the City Different with over a decade of expertise.
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
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    fill
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
      />
    </div>
  );
}
