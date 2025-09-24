'use client';

import { Metadata } from 'next';
import Script from 'next/script';
import OptimizedVideo from '@/components/ui/optimized-video';
import OptimizedImage from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Briefcase, Building, Layers, Star, Phone, MapPin, Clock, Mail, Globe, Shield, CheckCircle, ArrowRight, Users, Award, Clock3, Leaf, Zap, Heart, Home, DoorOpen, Menu, X, ChevronDown, Play, Download, Plus, Minus } from 'lucide-react';
import BusinessHeader from '@/components/business-landing/business-header';
import BusinessFooter from '@/components/business-landing/business-footer';
import { useState, useEffect } from 'react';

export default function ClearChoiceCleaningPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const businessData = {
    name: 'Clear Choice Cleaning',
    category: 'Professional Cleaning Services',
    rating: 4.9,
    reviewCount: 234,
    priceRange: '$$',
    phone: '(702) 820-5479',
    email: 'wesleyv@clearchoicelv.com',
    website: 'https://clearchoicelv.com/',
    featuredImage: '/clear-choice-cleaning/featured-image.jpeg',
    description: 'Professional cleaning services for homes and offices. We provide reliable, eco-friendly cleaning solutions throughout the Las Vegas area.',
    address: {
      street: '1234 Main Street',
      city: 'Las Vegas',
      state: 'NV',
      zip: '89101'
    }
  };

  const services = [
    {
      title: 'Residential Cleaning',
      description: 'Regular home cleaning service to keep your living space consistently fresh and spotless',
      icon: Home,
      image: '/clear-choice-cleaning/residential-cleaning.jpeg',
      features: [
        'Dusting and Surface Wipe Down',
        'Vacuuming and Mopping Floors',
        'Bathroom Deep Cleaning',
        'Kitchen Sanitization',
        'Trash Removal and Recycling'
      ],
      price: 'Starting at $120'
    },
    {
      title: 'Move In / Move Out Cleaning',
      description: 'Comprehensive cleaning service to prepare your space for a new move-in or ensure a spotless move-out',
      icon: DoorOpen,
      image: '/clear-choice-cleaning/move-in-out-cleaning.jpeg',
      features: [
        'Deep Cleaning of All Rooms',
        'Inside Cabinets and Closets',
        'Appliance Interior Cleaning',
        'Baseboards and Fixtures',
        'Complete Sanitization'
      ],
      price: 'Starting at $200'
    },
    {
      title: 'Office Cleaning',
      description: 'Professional cleaning service for offices to maintain a clean and productive workspace',
      icon: Briefcase,
      image: '/clear-choice-cleaning/office-cleaning.jpeg',
      features: [
        'Workstation Cleaning',
        'Conference Room Sanitization',
        'Trash and Recycling Removal',
        'Restroom Deep Cleaning',
        'Floor Care and Maintenance'
      ],
      price: 'Starting at $150'
    },
    {
      title: 'Commercial Cleaning',
      description: 'Comprehensive cleaning services for commercial spaces of all sizes',
      icon: Building,
      image: '/clear-choice-cleaning/commercial-cleaning.jpeg',
      features: [
        'Retail and Restaurant Cleaning',
        'Warehouse and Industrial Cleaning',
        'Carpet and Floor Maintenance',
        'Window and Glass Cleaning',
        'Restroom and Common Area Sanitization'
      ],
      price: 'Custom Pricing'
    },
    {
      title: 'Deep Cleaning',
      description: 'Intensive cleaning service covering hard-to-reach areas and built-up dirt',
      icon: Layers,
      image: '/clear-choice-cleaning/deep-cleaning.jpeg',
      features: [
        'Detailed Bathroom and Kitchen Cleaning',
        'Appliance Interior Cleaning',
        'Grout and Tile Scrubbing',
        'Baseboards and Corners',
        'High-Touch Surface Sanitization'
      ],
      price: 'Starting at $180'
    },
    {
      title: 'Post-Construction Cleaning',
      description: 'Specialized cleaning service for newly constructed or renovated spaces',
      icon: Sparkles,
      image: '/clear-choice-cleaning/post-construction-cleaning.jpeg',
      features: [
        'Construction Debris Removal',
        'Dust and Paint Residue Cleanup',
        'Window and Glass Cleaning',
        'Floor Polishing',
        'Final Touch-up Cleaning'
      ],
      price: 'Starting at $250'
    }
  ];

  const serviceAreas = [
    'Las Vegas, NV',
    'North Las Vegas, NV',
    'Sunrise Manor, NV',
    'Nellis AFB, NV',
    'Henderson, NV',
    'Paradise, NV',
    'Spring Valley, NV',
    'Enterprise, NV'
  ];

  const whyChooseUs = [
    'Trained & Background-Checked Cleaning Staff',
    'Customizable Cleaning Plans',
    'Eco-Friendly & Safe Products',
    'Flexible Scheduling Options',
    'Reliable & On-Time Service',
    '100% Satisfaction Guarantee',
    'Insured & Bonded Company',
    'Same-Day Service Available'
  ];

  const galleryImages = [
    {
      src: '/clear-choice-cleaning/gallery-living-room.jpeg',
      alt: 'Clean living room',
      category: 'Residential'
    },
    {
      src: '/clear-choice-cleaning/gallery-kitchen.jpeg',
      alt: 'Spotless kitchen',
      category: 'Kitchen'
    },
    {
      src: '/clear-choice-cleaning/gallery-office.jpeg',
      alt: 'Office workspace',
      category: 'Commercial'
    },
    {
      src: '/clear-choice-cleaning/gallery-bathroom.jpeg',
      alt: 'Clean bathroom',
      category: 'Bathroom'
    },
    {
      src: '/clear-choice-cleaning/gallery-bedroom.jpeg',
      alt: 'Organized bedroom',
      category: 'Residential'
    },
    {
      src: '/clear-choice-cleaning/gallery-dining.jpeg',
      alt: 'Clean dining area',
      category: 'Residential'
    }
  ];

  const stats = [
    { number: '2k+', label: 'Clients', icon: Users },
    { number: '10k+', label: 'Happy Customers', icon: Award },
    { number: '100%', label: 'Satisfaction', icon: Heart }
  ];

  const teamMembers = [
    {
      name: 'Anna Smith',
      role: 'Cleaner',
      image: '/clear-choice-cleaning/team-anna-smith.jpeg'
    },
    {
      name: 'John Doe',
      role: 'Supervisor',
      image: '/clear-choice-cleaning/team-john-doe.jpeg'
    },
    {
      name: 'Maria Garcia',
      role: 'Team Lead',
      image: '/clear-choice-cleaning/team-maria-garcia.jpeg'
    },
    {
      name: 'David Wilson',
      role: 'Quality Inspector',
      image: '/clear-choice-cleaning/team-david-wilson.jpeg'
    }
  ];

  const faqData = [
    {
      question: 'What cleaning products do you use?',
      answer: 'We use eco-friendly, non-toxic cleaning products that are safe for your family and pets while being highly effective at removing dirt and germs.'
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our pricing varies based on the size of your space and the type of cleaning service needed. We offer competitive rates starting from $199 for standard cleaning.'
    },
    {
      question: 'Do you bring your own supplies?',
      answer: 'Yes, we bring all necessary cleaning supplies and equipment. You don\'t need to provide anything unless you have specific product preferences.'
    },
    {
      question: 'Are your cleaners insured and bonded?',
      answer: 'Absolutely! All our cleaning professionals are fully insured, bonded, and background-checked for your peace of mind.'
    },
    {
      question: 'Can I schedule recurring cleanings?',
      answer: 'Yes, we offer flexible scheduling options including weekly, bi-weekly, and monthly recurring cleanings to fit your needs and budget.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Standard Plan',
      price: '$199',
      period: 'starting',
      features: [
        'Basic home cleaning',
        'Dusting and vacuuming',
        'Bathroom sanitization',
        'Kitchen cleaning',
        'Trash removal'
      ],
      buttonText: 'Book Now',
      featured: false
    },
    {
      name: 'Premium Plan',
      price: '$399',
      period: 'starting',
      features: [
        'Deep cleaning service',
        'Inside appliances',
        'Baseboards and fixtures',
        'Window cleaning',
        'Eco-friendly products',
        'Satisfaction guarantee'
      ],
      buttonText: 'Book Now',
      featured: true
    },
    {
      name: 'Deluxe Plan',
      price: '$329',
      period: 'starting',
      features: [
        'Comprehensive cleaning',
        'Move-in/move-out',
        'Post-construction cleanup',
        'Carpet cleaning',
        'Priority scheduling',
        'Free re-cleaning'
      ],
      buttonText: 'Book Now',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Custom Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">{businessData.name}</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-yellow-500 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-yellow-500 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-yellow-500 transition-colors">About Us</a>
              <a href="#pricing" className="text-gray-700 hover:text-yellow-500 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-500 transition-colors">Contact</a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
                asChild
              >
                <a href={businessData.website} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-2" />
                  Website
                </a>
              </Button>
              <Button 
                className="bg-yellow-500 hover:bg-yellow-600 text-white"
                asChild
              >
                <a href={`tel:${businessData.phone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Book Now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-yellow-500 transition-colors">Home</a>
                <a href="#services" className="text-gray-700 hover:text-yellow-500 transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-yellow-500 transition-colors">About Us</a>
                <a href="#pricing" className="text-gray-700 hover:text-yellow-500 transition-colors">Pricing</a>
                <a href="#contact" className="text-gray-700 hover:text-yellow-500 transition-colors">Contact</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button 
                    variant="outline" 
                    className="border-gray-300 text-gray-700"
                    asChild
                  >
                    <a href={businessData.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4 mr-2" />
                      Website
                    </a>
                  </Button>
                  <Button 
                    className="bg-yellow-500 hover:bg-yellow-600 text-white"
                    asChild
                  >
                    <a href={`tel:${businessData.phone}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Book Now
                    </a>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

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
            url: 'https://nearbybizfinder.com/businesses/clear-choice-cleaning/',
            image: businessData.featuredImage,
            priceRange: businessData.priceRange,
            telephone: businessData.phone,
            email: businessData.email,
            website: businessData.website,
            address: {
              '@type': 'PostalAddress',
              streetAddress: businessData.address.street,
              addressLocality: businessData.address.city,
              addressRegion: businessData.address.state,
              postalCode: businessData.address.zip,
              addressCountry: 'US',
            },
            areaServed: serviceAreas.map(area => ({
              '@type': 'City',
              name: area
            })),
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Cleaning Services',
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
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <OptimizedVideo
          src="/videos/clear-choice-cleaning-hero.mp4"
          fallbackImage="/clear-choice-cleaning/hero-image.png"
          alt="Clear Choice Cleaning Hero Video"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                The Perfect Clean Guaranteed
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Professional cleaning services that exceed your expectations. 
                We bring the shine back to your space with our experienced team and eco-friendly approach.
              </p>
              
              {/* Feature Points */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                  <span className="text-lg">Experienced Cleaners</span>
              </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                  <span className="text-lg">Eco-Friendly Products</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                  <span className="text-lg">Flexible Scheduling</span>
            </div>
            </div>

              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-center space-x-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Clean</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Care</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Sparkle</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
                Why Us
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose The Best Cleaning Service
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're committed to delivering exceptional cleaning services that exceed your expectations. 
                Our experienced team uses eco-friendly products and modern techniques to ensure your space is spotless.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">Experienced Staff</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">Quality Guarantee</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">Affordable Prices</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">Eco-Friendly Products</span>
                </div>
              </div>
              <Button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg">
                Learn More
              </Button>
            </div>
            <div className="relative">
              <OptimizedImage
                src="/clear-choice-cleaning/why-choose-us-image.jpeg"
                alt="Clean modern living room"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
          </div>
        </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cleaning solutions tailored to meet your specific needs and exceed your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-white" />
        </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a href="#" className="text-yellow-500 hover:text-yellow-600 font-semibold">
                    Read More
                  </a>
                </CardContent>
              </Card>
            ))}
      </div>
        </div>
      </section>

      {/* Testimonials & Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
              Our Success
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Client's Trust and Feedback
            </h2>
                </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-gray-50 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
                  "Clear Choice Cleaning has been amazing! They're professional, thorough, and always on time. 
                  My home has never looked better. I highly recommend their services to anyone looking for quality cleaning."
                </blockquote>
                <div className="text-lg font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-gray-600">Las Vegas, NV</div>
              </CardContent>
            </Card>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bringing Shine Banner */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bringing Shine to Your Space
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Experience the difference of professional cleaning services that transform your space into a spotless, 
            comfortable environment you'll love coming home to.
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-lg">
            Book Now
          </Button>
      </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
              Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting your space professionally cleaned is simple with our streamlined process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                  <OptimizedImage
                  src="/clear-choice-cleaning/how-it-works-booking.jpeg"
                  alt="Booking online"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg mx-auto"
                />
                    </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Online</h3>
              <p className="text-gray-600 leading-relaxed">
                Schedule your cleaning service in just a few clicks. Choose your preferred date and time that works best for you.
              </p>
                  </div>
            <div className="text-center">
              <div className="relative mb-6">
                <OptimizedImage
                  src="/clear-choice-cleaning/how-it-works-cleaning.jpeg"
                  alt="Professional cleaning"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Cleaning</h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced team arrives on time with all necessary supplies and equipment to deliver exceptional results.
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-6">
                <OptimizedImage
                  src="/clear-choice-cleaning/how-it-works-enjoy.jpeg"
                  alt="Enjoy clean home"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enjoy Your Clean Home</h3>
              <p className="text-gray-600 leading-relaxed">
                Relax and enjoy your spotless space. We guarantee your satisfaction with our quality cleaning services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
              Gallery
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Photo Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the quality of our cleaning services through our before and after photos. 
              We take pride in delivering exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={85}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {image.category}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Eco-Friendly Products</h3>
                    <p className="text-gray-600">Safe for your family and pets</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Experienced Cleaners</h3>
                    <p className="text-gray-600">Professional and trained staff</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Flexible Scheduling</h3>
                    <p className="text-gray-600">Available when you need us</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Satisfaction Guarantee</h3>
                    <p className="text-gray-600">100% satisfaction or we'll make it right</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <OptimizedImage
                src="/clear-choice-cleaning/benefits-section-image.jpeg"
                alt="Professional cleaners at work"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
              Pricing
                    </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Custom Tailored Cleaning Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect cleaning plan that fits your needs and budget. All plans include our satisfaction guarantee.
            </p>
                  </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.featured ? 'bg-yellow-500 text-white border-yellow-500' : 'bg-white'} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-yellow-600 text-white px-4 py-1">Most Popular</Badge>
                </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className={`text-2xl font-bold mb-4 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className={`text-4xl font-bold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.featured ? 'text-yellow-100' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center text-left ${plan.featured ? 'text-yellow-100' : 'text-gray-600'}`}>
                        <CheckCircle className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.featured ? 'text-white' : 'text-green-500'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full py-3 text-lg font-semibold rounded-lg ${
                      plan.featured 
                        ? 'bg-white text-yellow-500 hover:bg-gray-100' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
              Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Best Team to Clean Your Surrounding Area
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our professional cleaning team who are dedicated to delivering exceptional results for every client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
                <OptimizedImage
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions on Our Clients
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our cleaning services.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="bg-white border-0 shadow-md">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    {openFAQ === index ? (
                      <Minus className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <Plus className="h-5 w-5 text-yellow-500" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Let's Schedule Your First Clean. Special Offers Available.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to experience the difference of professional cleaning? Contact us today for a free estimate and special offers for new customers.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                    </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{businessData.phone}</h3>
                    <p className="text-gray-600">Call us anytime</p>
                  </div>
              </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
            </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{businessData.email}</h3>
                    <p className="text-gray-600">Send us an email</p>
                </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Las Vegas, NV</h3>
                    <p className="text-gray-600">Serving the greater area</p>
              </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Estimate</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your cleaning needs"
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  ></textarea>
                </div>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 text-lg font-semibold rounded-lg">
                  Get Free Estimate
              </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Footer */}
      <footer className="bg-gray-900 text-white">
        {/* Top CTA */}
        <div className="bg-yellow-500 py-8">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <Button className="bg-white text-yellow-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg">
              Get A Free Estimate Now!
            </Button>
        </div>
      </div>

        {/* Main Footer */}
        <div className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-1">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold">{businessData.name}</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Professional cleaning services that exceed your expectations. 
                  We bring the shine back to your space with our experienced team and eco-friendly approach.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer">
                    <span className="text-sm font-semibold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer">
                    <span className="text-sm font-semibold">t</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer">
                    <span className="text-sm font-semibold">i</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer">
                    <span className="text-sm font-semibold">in</span>
                  </div>
                </div>
          </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Services</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Home Cleaning</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Office Cleaning</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Deep Cleaning</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Move In/Out</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Commercial Cleaning</a></li>
                </ul>
              </div>

              {/* About */}
              <div>
                <h3 className="text-lg font-semibold mb-6">About Us</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Our Story</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Our Team</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Reviews</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Blog</a></li>
                </ul>
            </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Contact</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Get Quote</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Book Service</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Support</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
              </div>
            </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 {businessData.name}. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.9s both;
        }
      `}</style>
    </div>
  );
}