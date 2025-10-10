import { Metadata } from 'next';
import Script from 'next/script';
import OptimizedImage from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, MapPin, Clock, Mail, Globe, Shield, CheckCircle, ArrowRight, Award, Users, Clock3, Zap, Home, Building, Sparkles, Wrench, Hammer, Layers } from 'lucide-react';
import BusinessHeader from '@/components/business-landing/business-header';
import OptimizedVideo from '@/components/ui/optimized-video';
import BusinessFooter from '@/components/business-landing/business-footer';

export const metadata: Metadata = {
  title: 'NM Concrete Coating Pros - #1 Garage Floor Coating Albuquerque | Professional Epoxy Services',
  description: 'Professional epoxy floor coating, metallic resin, polyaspartic coating, and concrete polishing services in Albuquerque, NM. Over a decade of experience serving residential and commercial clients.',
  alternates: { 
    canonical: '/businesses/nm-concrete-coating-pros/',
  },
  openGraph: {
    title: 'NM Concrete Coating Pros - #1 Garage Floor Coating Albuquerque',
    description: 'Professional epoxy floor coating, metallic resin, polyaspartic coating, and concrete polishing services in Albuquerque, NM.',
    images: ['https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'],
  },
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
    featuredImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    description: 'Professional epoxy floor coating, metallic resin, polyaspartic coating, and concrete polishing services in Albuquerque, NM. Over a decade of experience serving residential and commercial clients.',
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
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
    },
    {
      title: 'Metallic Resin Coatings',
      description: 'Stunning metallic resin coatings that create unique, eye-catching designs',
      icon: Sparkles,
      features: ['3D Effects', 'Granite Look', 'Custom Patterns', 'Premium Finish'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
    },
    {
      title: 'Polyaspartic Coating',
      description: 'Fast-curing polyaspartic coatings perfect for commercial and industrial applications',
      icon: Zap,
      features: ['Fast Cure Time', 'High Durability', 'Chemical Resistant', 'UV Stable'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
    },
    {
      title: 'Concrete Polishing',
      description: 'Professional concrete polishing services for a sleek, modern finish',
      icon: Wrench,
      features: ['Diamond Polishing', 'Multiple Finishes', 'Stain Resistant', 'Low Maintenance'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
    },
    {
      title: 'Garage Floor Coating',
      description: 'Transform your garage into a luxury space with our premium coating systems',
      icon: Home,
      features: ['Residential Focus', 'Custom Designs', 'Flake Systems', 'Clear Coats'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
    },
    {
      title: 'Commercial Floor Coating',
      description: 'Industrial-grade floor coatings designed for high-traffic commercial spaces',
      icon: Building,
      features: ['High Traffic Rated', 'Chemical Resistant', 'Quick Installation', 'Minimal Downtime'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
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
    '@type': 'LocalBusiness',
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
    }
  };

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

      <Script
        id="business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Hero Section */}
      <div className="relative h-96 md:h-[600px] w-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
        <OptimizedVideo
          src="/videos/mn-concrete-coating.mp4"
          alt="Professional concrete coating services"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-6xl">
            <Badge className="mb-6 bg-orange-500 text-white border-orange-400">
              #1 Garage Floor Coating Albuquerque
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Garage Floor Into
              <span className="block text-orange-400">Luxury in Just One Day</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Professional epoxy floor coating, metallic resin, polyaspartic coating, and concrete polishing services. 
              Over a decade of experience serving Albuquerque and surrounding areas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
                <Phone className="h-6 w-6 mr-3" />
                Get Fast Quote
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
            Why Choose <span className="text-orange-500">NM Concrete Coating Pros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over a decade of experience, we provide the highest quality concrete coating services 
            in Albuquerque and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center`}>
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
              Our <span className="text-orange-500">Professional Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential garages to commercial warehouses, we provide comprehensive concrete coating solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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
              What Our <span className="text-orange-500">Satisfied Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our happy customers across Albuquerque.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
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

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-500">Simple Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with us is easy as 1-2-3. Get your free quote and transform your space today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Get a Quote</h3>
              <p className="text-gray-600">
                Request a free and quick quotation for your customized project. We'll contact you as soon as possible.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Pick a Day</h3>
              <p className="text-gray-600">
                Choose a time that works best for you. We provide flexible and affordable scheduling alternatives.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Enjoy Your Floor</h3>
              <p className="text-gray-600">
                Relax and enjoy your new gorgeous epoxy floor! Most projects are completed in just 1-2 days.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get your free quote today and join hundreds of satisfied customers across New Mexico.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="h-6 w-6 mr-3" />
              Get Fast Quote
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
