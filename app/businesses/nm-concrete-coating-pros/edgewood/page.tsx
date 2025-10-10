import { Metadata } from 'next';
import Script from 'next/script';
import OptimizedImage from '@/components/ui/optimized-image';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, MapPin, Clock, Mail, Globe, Shield, CheckCircle, ArrowRight, Award, Users, Clock3, Zap, Home, Building, Sparkles, Wrench, Hammer, Layers, TreePine, Mountain, Compass, Leaf } from 'lucide-react';
import BusinessHeader from '@/components/business-landing/business-header';
import BusinessFooter from '@/components/business-landing/business-footer';
import NMConcreteGallery from '@/components/business-landing/nm-concrete-gallery';
import { getGalleryImagesForPage } from '@/lib/nm-concrete-gallery-data';

export const metadata: Metadata = {
  title: 'NM Concrete Coating Pros Edgewood - Rustic Epoxy Floor Coating Services | Edgewood, NM',
  description: 'Rustic epoxy floor coating, natural polyaspartic coating, and rugged concrete polishing services in Edgewood, NM. Perfect for rural properties and mountain homes.',
  alternates: { 
    canonical: '/businesses/nm-concrete-coating-pros/edgewood/',
  },
  openGraph: {
    title: 'NM Concrete Coating Pros Edgewood - Rustic Epoxy Floor Coating Services',
    description: 'Rustic epoxy floor coating, natural polyaspartic coating, and rugged concrete polishing services in Edgewood, NM.',
    images: ['https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'],
  },
};

export default function NMConcreteCoatingProsEdgewoodPage() {
  const businessData = {
    name: 'NM Concrete Coating Pros',
    locationName: 'Edgewood Location',
    category: 'Rustic Concrete Coating Services',
    rating: 4.7,
    reviewCount: 78,
    priceRange: '$$',
    phone: '(505) 289-0676',
    email: 'john@nmccpros.com',
    website: 'https://www.nmccpros.com/',
    featuredImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    description: 'Rustic epoxy floor coating, natural polyaspartic coating, and rugged concrete polishing services in Edgewood, NM. Perfect for rural properties and mountain homes.',
    address: 'Edgewood, NM',
    city: 'Edgewood',
    state: 'NM',
    zipCode: '87015',
  };

  const services = [
    {
      title: 'Rustic Epoxy Finishes',
      description: 'Natural, earthy epoxy coatings that complement rural and mountain properties',
      icon: TreePine,
      features: ['Earth Tones', 'Natural Textures', 'Rustic Patterns', 'Mountain Inspired'],
      image: '/images/nm-concrete-coating-pros/epoxy-floor-coating.png'
    },
    {
      title: 'Barn & Workshop Flooring',
      description: 'Durable coatings perfect for agricultural buildings and workshops',
      icon: Building,
      features: ['Heavy Duty', 'Agricultural Grade', 'Easy Maintenance', 'Weather Resistant'],
      image: '/images/nm-concrete-coating-pros/commercial-floor-coating.png'
    },
    {
      title: 'Mountain Home Coatings',
      description: 'Specialized coatings designed for high-altitude mountain properties',
      icon: Mountain,
      features: ['Altitude Tested', 'Temperature Stable', 'UV Resistant', 'Mountain Tough'],
      image: '/images/nm-concrete-coating-pros/polyaspartic-coating.png'
    },
    {
      title: 'Natural Stone Polishing',
      description: 'Concrete polishing that mimics natural stone and rustic materials',
      icon: Leaf,
      features: ['Natural Stone Look', 'Rustic Finish', 'Organic Patterns', 'Earth Colors'],
      image: '/images/nm-concrete-coating-pros/concrete-polishing.png'
    }
  ];

  const serviceAreas = [
    'Edgewood, NM',
    'Albuquerque, NM', 
    'Santa Fe, NM',
    'Rio Rancho, NM',
    'Los Lunas, NM'
  ];

  const whyChooseUs = [
    {
      title: 'Rural Specialists',
      description: 'We understand the unique needs of rural and mountain properties',
      icon: TreePine,
      color: 'text-green-600'
    },
    {
      title: 'Mountain Tested',
      description: 'Our coatings are designed for high-altitude and extreme weather',
      icon: Mountain,
      color: 'text-gray-600'
    },
    {
      title: 'Local Knowledge',
      description: 'Deep understanding of Edgewood\'s climate and property types',
      icon: Compass,
      color: 'text-blue-600'
    },
    {
      title: 'Rugged Durability',
      description: 'Built to withstand the demands of rural and agricultural use',
      icon: Shield,
      color: 'text-orange-600'
    }
  ];

  const testimonials = [
    {
      name: 'Tom & Linda',
      location: 'Edgewood',
      rating: 5,
      text: 'Our barn floor looks amazing! The rustic epoxy perfectly matches our property\'s natural aesthetic. It\'s held up beautifully through all the farm equipment and weather.',
      service: 'Barn & Workshop Flooring'
    },
    {
      name: 'Mountain View Ranch',
      location: 'Edgewood',
      rating: 5,
      text: 'Living at 6,500 feet, we needed coatings that could handle the altitude and temperature swings. NM Concrete Coating Pros delivered exactly what we needed.',
      service: 'Mountain Home Coatings'
    },
    {
      name: 'The Johnson Family',
      location: 'Edgewood',
      rating: 5,
      text: 'The natural stone polishing in our mountain home is incredible. It looks like real stone but with all the benefits of modern concrete technology.',
      service: 'Natural Stone Polishing'
    }
  ];

  const rusticFeatures = [
    {
      title: 'Natural Color Palettes',
      description: 'Earth tones and natural colors that blend with rural landscapes',
      icon: Leaf
    },
    {
      title: 'Weather Resistant',
      description: 'Designed to withstand mountain weather and rural conditions',
      icon: TreePine
    },
    {
      title: 'Agricultural Grade',
      description: 'Heavy-duty coatings perfect for barns, workshops, and farm use',
      icon: Building
    },
    {
      title: 'Mountain Tough',
      description: 'Tested and proven in high-altitude and extreme conditions',
      icon: Mountain
    }
  ];

  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${businessData.name} - ${businessData.locationName}`,
    description: businessData.description,
    url: `https://nearbybizfinder.com/businesses/nm-concrete-coating-pros/edgewood/`,
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-stone-50">
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
      <div className="relative h-96 md:h-[600px] w-full bg-gradient-to-br from-amber-800 via-green-800 to-stone-800">
        <OptimizedImage
          src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
          alt="Rustic concrete coating services in Edgewood"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-6xl">
            <Badge className="mb-6 bg-amber-600 text-white border-amber-500">
              <TreePine className="h-4 w-4 mr-2" />
              Edgewood's Rustic Flooring Specialists
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-amber-300">RUSTIC</span>
              <span className="block text-green-300">Mountain Flooring</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-4xl mx-auto">
              Built for the rugged beauty of Edgewood and the surrounding mountains. 
              Our rustic concrete coatings are designed for rural properties, mountain homes, and agricultural buildings.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold">
                <TreePine className="h-6 w-6 mr-3" />
                Get Rustic Quote
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
            Why Choose Us in <span className="text-amber-600">Edgewood</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the unique challenges of rural and mountain properties. 
            Our Edgewood location specializes in rugged, weather-resistant coatings perfect for the area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white/90 backdrop-blur-sm border-amber-200">
              <CardContent className="p-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-100 to-green-100 flex items-center justify-center`}>
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
              Rustic <span className="text-amber-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Edgewood services are designed for rural properties, mountain homes, and agricultural buildings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-sm border-amber-200">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={85}
                    priority={true}
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-amber-600/80 text-white border-amber-500">
                      Rustic Grade
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Rustic Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-amber-600">Rustic</span> Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our rustic approach means natural colors, rugged durability, and mountain-tested performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rusticFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-amber-50 border-amber-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
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
        <div className="mb-20">
          <NMConcreteGallery
            images={getGalleryImagesForPage('edgewood', 6)}
            title="Rustic Mountain Projects"
            subtitle="Showcasing our rugged concrete coating projects perfect for Edgewood's mountain environment"
            maxImages={6}
            className="mb-16"
          />
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mountain <span className="text-amber-600">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from Edgewood property owners who have experienced our rustic services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white/95 backdrop-blur-sm border-amber-200">
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

        {/* Mountain Heritage Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-amber-600 to-green-600 rounded-2xl p-12 text-center text-white">
            <Mountain className="h-16 w-16 mx-auto mb-6 text-amber-200" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for the Mountains
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
              Edgewood's unique mountain environment demands specialized solutions. Our rustic concrete coatings 
              are designed to withstand high altitude, temperature extremes, and the rugged conditions that 
              make mountain living both challenging and beautiful.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <TreePine className="h-6 w-6 mr-3" />
                Get Rustic Quote
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
              Our Mountain <span className="text-amber-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with Edgewood's unique climate and terrain to deliver rugged, beautiful results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mountain Assessment</h3>
              <p className="text-gray-600">
                We evaluate your property's unique mountain conditions and recommend the best rustic solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Rugged Installation</h3>
              <p className="text-gray-600">
                Our mountain-tested installation process ensures durability in Edgewood's challenging conditions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mountain Tough Finish</h3>
              <p className="text-gray-600">
                Enjoy a beautiful, rugged finish that's built to last in Edgewood's mountain environment.
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
