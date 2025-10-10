import { Metadata } from 'next';
import Script from 'next/script';
import OptimizedImage from '@/components/ui/optimized-image';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, MapPin, Clock, Mail, Globe, Shield, CheckCircle, ArrowRight, Award, Users, Clock3, Zap, Home, Building, Sparkles, Wrench, Hammer, Layers, Crown, Gem, Diamond, Trophy } from 'lucide-react';
import BusinessHeader from '@/components/business-landing/business-header';
import BusinessFooter from '@/components/business-landing/business-footer';
import NMConcreteGallery from '@/components/business-landing/nm-concrete-gallery';
import { getGalleryImagesForPage } from '@/lib/nm-concrete-gallery-data';

export const metadata: Metadata = {
  title: 'NM Concrete Coating Pros Rio Rancho - Luxury Epoxy Floor Coating Services | Rio Rancho, NM',
  description: 'Luxury epoxy floor coating, premium metallic resin, high-end polyaspartic coating, and elite concrete polishing services in Rio Rancho, NM. Elevate your space with our premium services.',
  alternates: { 
    canonical: '/businesses/nm-concrete-coating-pros/rio-rancho/',
  },
  openGraph: {
    title: 'NM Concrete Coating Pros Rio Rancho - Luxury Epoxy Floor Coating Services',
    description: 'Luxury epoxy floor coating, premium metallic resin, high-end polyaspartic coating, and elite concrete polishing services in Rio Rancho, NM.',
    images: ['https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'],
  },
};

export default function NMConcreteCoatingProsRioRanchoPage() {
  const businessData = {
    name: 'NM Concrete Coating Pros',
    locationName: 'Rio Rancho Location',
    category: 'Luxury Concrete Coating Services',
    rating: 4.9,
    reviewCount: 156,
    priceRange: '$$$$',
    phone: '(505) 289-0676',
    email: 'john@nmccpros.com',
    website: 'https://www.nmccpros.com/',
    featuredImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    description: 'Luxury epoxy floor coating, premium metallic resin, high-end polyaspartic coating, and elite concrete polishing services in Rio Rancho, NM. Elevate your space with our premium services.',
    address: 'Rio Rancho, NM',
    city: 'Rio Rancho',
    state: 'NM',
    zipCode: '87124',
  };

  const services = [
    {
      title: 'Luxury Epoxy Systems',
      description: 'Premium epoxy flooring systems designed for high-end residential and commercial properties',
      icon: Crown,
      features: ['Premium Materials', 'Custom Designs', 'Lifetime Warranty', 'Exclusive Finishes'],
      image: '/images/nm-concrete-coating-pros/epoxy-floor-coating.png'
    },
    {
      title: 'Diamond Metallic Coatings',
      description: 'Ultra-premium metallic resin coatings with diamond-like finishes and luxury aesthetics',
      icon: Diamond,
      features: ['Diamond Particles', '3D Depth Effects', 'Custom Color Blends', 'Luxury Appeal'],
      image: '/images/nm-concrete-coating-pros/metallic-resin-coatings.png'
    },
    {
      title: 'Elite Polyaspartic Systems',
      description: 'High-performance polyaspartic coatings for demanding commercial and luxury applications',
      icon: Trophy,
      features: ['Industrial Grade', 'Chemical Resistant', 'UV Stable', 'Premium Performance'],
      image: '/images/nm-concrete-coating-pros/polyaspartic-coating.png'
    },
    {
      title: 'Master Craft Polishing',
      description: 'Artisan-level concrete polishing with mirror finishes and luxury stone aesthetics',
      icon: Gem,
      features: ['Mirror Finish', 'Natural Stone Look', 'Hand Polished', 'Luxury Grade'],
      image: '/images/nm-concrete-coating-pros/concrete-polishing.png'
    }
  ];

  const serviceAreas = [
    'Rio Rancho, NM',
    'Albuquerque, NM', 
    'Santa Fe, NM',
    'Los Lunas, NM',
    'Edgewood, NM'
  ];

  const whyChooseUs = [
    {
      title: 'Luxury Specialists',
      description: 'Exclusive focus on high-end properties and luxury applications',
      icon: Crown,
      color: 'text-yellow-500'
    },
    {
      title: 'Premium Materials',
      description: 'Only the finest materials and cutting-edge technologies',
      icon: Diamond,
      color: 'text-blue-500'
    },
    {
      title: 'White-Glove Service',
      description: 'Concierge-level service with attention to every detail',
      icon: Award,
      color: 'text-purple-500'
    },
    {
      title: 'Exclusive Designs',
      description: 'Custom designs and finishes not available elsewhere',
      icon: Gem,
      color: 'text-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Martinez',
      location: 'Rio Rancho',
      rating: 5,
      text: 'The luxury epoxy system in our home is absolutely stunning. The diamond metallic finish creates incredible depth and the quality is unmatched. This is true luxury flooring.',
      service: 'Diamond Metallic Coatings'
    },
    {
      name: 'Jennifer & Michael',
      location: 'Rio Rancho',
      rating: 5,
      text: 'We wanted something truly special for our custom home. NM Concrete Coating Pros delivered beyond our expectations with their master craft polishing. It looks like natural marble.',
      service: 'Master Craft Polishing'
    },
    {
      name: 'Corporate Client',
      location: 'Rio Rancho',
      rating: 5,
      text: 'Our executive office building needed the highest quality flooring. The elite polyaspartic system has exceeded all our requirements for durability and aesthetics.',
      service: 'Elite Polyaspartic Systems'
    }
  ];

  const luxuryFeatures = [
    {
      title: 'Exclusive Color Palettes',
      description: 'Custom color matching and exclusive palettes not available to standard customers',
      icon: Sparkles
    },
    {
      title: 'Concierge Installation',
      description: 'White-glove installation service with minimal disruption to your lifestyle',
      icon: Users
    },
    {
      title: 'Premium Warranty',
      description: 'Extended warranty coverage with premium support and maintenance services',
      icon: Shield
    },
    {
      title: 'Design Consultation',
      description: 'Personal design consultation to create the perfect luxury aesthetic',
      icon: Award
    }
  ];

  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${businessData.name} - ${businessData.locationName}`,
    description: businessData.description,
    url: `https://nearbybizfinder.com/businesses/nm-concrete-coating-pros/rio-rancho/`,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
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
      <div className="relative h-96 md:h-[700px] w-full bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <OptimizedImage
          src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
          alt="Luxury concrete coating services in Rio Rancho"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-6xl">
            <Badge className="mb-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-yellow-400">
              <Crown className="h-4 w-4 mr-2" />
              Rio Rancho's Premier Luxury Flooring
            </Badge>
            <h1 className="text-4xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                LUXURY
              </span>
              <span className="block text-4xl md:text-6xl text-blue-200 mt-4">
                Concrete Coating
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Experience the pinnacle of concrete coating excellence. Our Rio Rancho location specializes in 
              ultra-premium flooring solutions for discerning clients who demand nothing but the best.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-10 py-5 text-lg font-semibold shadow-2xl">
                <Crown className="h-6 w-6 mr-3" />
                Request Luxury Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-10 py-5 text-lg backdrop-blur-sm"
                asChild
              >
                <a href={`tel:${businessData.phone}`}>
                  <Phone className="h-6 w-6 mr-3" />
                  Concierge Line
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Why Choose Us Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Why Choose Our <span className="bg-gradient-to-r from-yellow-500 to-blue-600 bg-clip-text text-transparent">Luxury Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We cater exclusively to clients who demand the finest in concrete coating solutions. 
            Our Rio Rancho location offers unparalleled luxury and sophistication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-100 to-blue-100 flex items-center justify-center shadow-lg`}>
                  <item.icon className={`h-10 w-10 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-yellow-500 to-blue-600 bg-clip-text text-transparent">Luxury Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Each service is crafted with the highest attention to detail and premium materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/95 backdrop-blur-sm border-0 shadow-xl">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={85}
                    priority={true}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                      Luxury Service
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Luxury Features Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-yellow-500 to-blue-600 bg-clip-text text-transparent">Exclusive</span> Features
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our luxury services include exclusive features and amenities not available with standard installations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {luxuryFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-24">
          <NMConcreteGallery
            images={getGalleryImagesForPage('rio-rancho', 6)}
            title="Luxury Project Gallery"
            subtitle="Showcasing our premium concrete coating projects for discerning Rio Rancho clients"
            maxImages={6}
            showRandom={true}
            className="mb-16"
          />
        </div>

        {/* Testimonials Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-yellow-500 to-blue-600 bg-clip-text text-transparent">Luxury</span> Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Hear from our distinguished clients who have experienced our luxury services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 bg-white/95 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-6">
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.location} • {testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-blue-500/10"></div>
          <div className="relative z-10">
            <Crown className="h-20 w-20 mx-auto mb-8 text-yellow-400" />
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Experience <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">True Luxury</span>
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Elevate your space with our exclusive luxury concrete coating services. 
              Contact our concierge team for a personalized consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-12 py-6 text-xl font-semibold shadow-2xl">
                <Crown className="h-6 w-6 mr-3" />
                Request Luxury Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 px-12 py-6 text-xl backdrop-blur-sm"
                asChild
              >
                <a href={`tel:${businessData.phone}`}>
                  <Phone className="h-6 w-6 mr-3" />
                  Concierge Line
                </a>
              </Button>
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
