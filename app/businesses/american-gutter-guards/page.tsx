'use client';

import Script from 'next/script';
import OptimizedVideo from '@/components/ui/optimized-video';
import OptimizedImage from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {Wrench,  Droplets, Sparkles, Briefcase, Building, Layers, Star, Phone, MapPin, Clock, Mail, Globe, Shield, CheckCircle, ArrowRight, Users, Award, Clock3, Leaf, Zap, Heart, Home, DoorOpen, Menu, X, ChevronDown, Play, Download, Plus, Minus, ShieldCheck } from 'lucide-react';
// import BusinessHeader from '@/components/business-landing/business-header';
// import BusinessFooter from '@/components/business-landing/business-footer';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AmericanGutterGuardsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // GSAP Refs
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelector('.hero-content'), 
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5
        }
      );
    }

    // Features section animation
    if (featuresRef.current) {
      gsap.fromTo(featuresRef.current.querySelectorAll('.feature-item'),
        { 
          opacity: 0, 
          y: 50,
          scale: 0.8
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Why Choose Us section animation
    if (whyChooseUsRef.current) {
      gsap.fromTo(whyChooseUsRef.current.querySelector('.why-choose-content'),
        { 
          opacity: 0, 
          x: -100
        },
        { 
          opacity: 1, 
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whyChooseUsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(whyChooseUsRef.current.querySelector('.why-choose-image'),
        { 
          opacity: 0, 
          x: 100,
          scale: 0.8
        },
        { 
          opacity: 1, 
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whyChooseUsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Services section animation
    if (servicesRef.current) {
      gsap.fromTo(servicesRef.current.querySelectorAll('.service-card'),
        { 
          opacity: 0, 
          y: 80,
          rotation: 5
        },
        { 
          opacity: 1, 
          y: 0,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Gallery section animation
    if (galleryRef.current) {
      gsap.fromTo(galleryRef.current.querySelectorAll('.gallery-item'),
        { 
          opacity: 0, 
          scale: 0,
          rotation: 180
        },
        { 
          opacity: 1, 
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Testimonials section animation
    if (testimonialsRef.current) {
      gsap.fromTo(testimonialsRef.current.querySelector('.testimonial-card'),
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(testimonialsRef.current.querySelectorAll('.stat-item'),
        { 
          opacity: 0, 
          y: 50,
          scale: 0.5
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // How It Works section animation
    if (howItWorksRef.current) {
      gsap.fromTo(howItWorksRef.current.querySelectorAll('.how-it-works-item'),
        { 
          opacity: 0, 
          y: 100,
          x: (index) => index % 2 === 0 ? -100 : 100
        },
        { 
          opacity: 1, 
          y: 0,
          x: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: howItWorksRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Benefits section animation
    if (benefitsRef.current) {
      gsap.fromTo(benefitsRef.current.querySelector('.benefits-content'),
        { 
          opacity: 0, 
          x: -100
        },
        { 
          opacity: 1, 
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(benefitsRef.current.querySelector('.benefits-image'),
        { 
          opacity: 0, 
          x: 100,
          scale: 0.8
        },
        { 
          opacity: 1, 
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Pricing section animation
    if (pricingRef.current) {
      gsap.fromTo(pricingRef.current.querySelectorAll('.pricing-card'),
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: pricingRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // FAQ section animation
    if (faqRef.current) {
      gsap.fromTo(faqRef.current.querySelectorAll('.faq-item'),
        { 
          opacity: 0, 
          x: -50,
          scale: 0.9
        },
        { 
          opacity: 1, 
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Contact section animation
    if (contactRef.current) {
      gsap.fromTo(contactRef.current.querySelector('.contact-content'),
        { 
          opacity: 0, 
          x: -100
        },
        { 
          opacity: 1, 
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(contactRef.current.querySelector('.contact-form'),
        { 
          opacity: 0, 
          x: 100,
          scale: 0.9
        },
        { 
          opacity: 1, 
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const businessData = {
    name: 'American Gutter Guards',
    category: 'Professional Gutter Installation Services',
    rating: 4.9,
    reviewCount: 10,
    priceRange: '$$',
    phone: '(757) 559-8051',
    phoneE164: '+17575598051',
    email: 'amgg757@gmail.com',
    featuredImage: '/american-gutter-guards/hero-image.png',
    description: 'Looking for reliable gutter guard installation, gutter cleaning or full gutter installation in Chesapeake, VA? American Gutter Services delivers top-quality work, competitive pricing and local expertise to protect your home from water damage.',
  };

  const services = [
    {
      title: 'gutter guards',
      description: 'Protect your home year-round with durable gutter guards in Chesapeake, VA. Our custom-fitted systems keep out leaves, debris, and pests - preventing clogs and costly water damage. Get long-lasting protection and zero maintenance hassle with American Gutter Services.',
      icon: Home,
      image: '/american-gutter-guards/gutter-guards.webp',
      features: [
        'Prevents clogging and overflow',
        'Redcues maintenance costs',
        'Extends gutter lifespan',
        'Custom-fit solutions for every home'
      ],
      price: 'Starting at $120'
    },
    {
      title: 'Gutter Cleaning Chesapeake VA',
      description: 'Keep your gutters clear and your home safe with professional gutter cleaning in Chesapeake, VA. We remove leaves, dirt, and buildup to ensure smooth water flow and prevent roof or foundation damage. Affordable, reliable, and locally trusted service.',
      icon: DoorOpen,
      image: '/american-gutter-guards/gutter-cleaning.webp',
      features: [
        'Prevents water damage and leaks',
        'Protects sliding and landscapping',
        'Improves drainage efficiency',
        'Seasonal and one time cleaings available',
        'Complete Sanitization'
      ],
      price: 'Starting at $200'
    },
    {
      title: 'Gutter Installation Chesapeake VA',
      description: 'Upgrade your home with seamless gutter installation in Chesapeake, VA. Our experts install custom, leak-free gutters that protect your property and enhance curb appeal. Built for durability, designed for Chesapeake weather, and backed by professional service.',
      icon: Briefcase,
      image: '/american-gutter-guards/gutter-installation.webp',
      features: [
        'Seamless, leak-resistant gutters',
        'Boosts curb appeal and home value',
        'Available in multiple colors and styles',
        'Professional, quick installation',
      ],
      price: 'Starting at $150'
    }
  ];

  const serviceAreas = [
    'Virginia Beach, VA',
    'Chesapeake, VA',
    'Norfolk, VA',
    'Portsmouth, VA',
    'Suffolk, VA',
    'Hampton, VA',
    'Newport News, VA',
    'Williamsburg, VA'
  ];

  const whyChooseUs = [
    'Licensed & Insured Gutter Professionals',
    'Custom Gutter Solutions for Every Home',
    'Durable Materials & Expert Installation',
    'Flexible Scheduling & Quick Service',
    'Reliable & On-Time Service',
    '100% Satisfaction Guarantee',
    'Fully Insured & Bonded Company',
    'Free Estimates & Same-Day Service Available'
  ];

  const galleryImages = [
    {
      src: '/american-gutter-guards/gallery-gutter-installation-1.webp',
      alt: 'Gutter installation project',
      category: 'Installation'
    },
    {
      src: '/american-gutter-guards/gallery-gutter-guards.webp',
      alt: 'Gutter guards installation',
      category: 'Gutter Guards'
    },
    {
      src: '/american-gutter-guards/gallery-gutter-cleaning.webp',
      alt: 'Professional gutter cleaning',
      category: 'Cleaning'
    },
    {
      src: '/american-gutter-guards/gallery-seamless-gutters.webp',
      alt: 'Seamless gutter system',
      category: 'Seamless Gutters'
    },
    {
      src: '/american-gutter-guards/gallery-gutter-installation-2.webp',
      alt: 'Residential gutter installation',
      category: 'Residential'
    },
    {
      src: '/american-gutter-guards/gallery-commercial-gutters.webp',
      alt: 'Commercial gutter project',
      category: 'Commercial'
    }
  ];

  const stats = [
    { number: '2k+', label: 'Clients', icon: Users },
    { number: '10k+', label: 'Happy Customers', icon: Award },
    { number: '100%', label: 'Satisfaction', icon: Heart }
  ];


  const faqData = [
    {
      question: 'How often should I have my gutters cleaned?',
      answer: 'In Chesapeake, VA, it’s best to have your gutters cleaned at least twice a year — once in spring and once in fall. Regular cleaning prevents clogs, leaks, and water damage to your home.'
    },
    {
      question: 'What are the benefits of installing gutter guards?',
      answer: 'Gutter guards help prevent leaves, twigs, and debris from clogging your gutters, reducing maintenance needs and protecting your home from water overflow and foundation damage.'
    },
    {
      question: 'Do you offer seamless gutter installation?',
      answer: 'Yes! We specialize in seamless gutter installation across Chesapeake and nearby areas. Seamless gutters are custom-fit to your home, reducing leaks and improving durability.'
    },
    {
      question: 'Are your gutter cleaning and installation services insured?',
      answer: 'Absolutely. American Gutter Services is fully licensed and insured. Our team follows strict safety standards to ensure high-quality and risk-free service every time.'
    },
    {
      question: 'Do you provide free estimates?',
      answer: 'Yes, we offer free, no-obligation estimates for all our services including gutter guards, cleaning, and installation. You can schedule an inspection anytime online or by phone.'
    },
    {
      question: 'Can you service homes outside Chesapeake?',
      answer: 'Yes! Besides Chesapeake, we serve Virginia Beach, Norfolk, Portsmouth, Suffolk, Hampton, Newport News, and Williamsburg, VA.'
    },
    {
      question: 'What types of gutter materials do you install?',
      answer: 'We install aluminum, copper, and galvanized steel gutters, depending on your budget and home design. Our team will help you choose the best option for long-term durability.'
    },
    {
      question: 'Do gutter guards eliminate the need for cleaning?',
      answer: 'While gutter guards drastically reduce the amount of debris that enters your gutters, occasional cleaning is still recommended to maintain peak performance.'
    }
  ];
  

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbybizfinder.com/' },
      { '@type': 'ListItem', position: 2, name: 'Businesses', item: 'https://nearbybizfinder.com/businesses/' },
      { '@type': 'ListItem', position: 3, name: 'American Gutter Guards', item: 'https://nearbybizfinder.com/businesses/american-gutter-guards/' }
    ]
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  const howToStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to book a gutter service in Chesapeake, VA',
    step: [
      { '@type': 'HowToStep', name: 'Request Free Estimate', text: 'Contact us online or by phone to schedule a free inspection and estimate.' },
      { '@type': 'HowToStep', name: 'Professional Service', text: 'Our licensed team performs gutter cleaning, installation, or guard installation with precision and care.' },
      { '@type': 'HowToStep', name: 'Protect Your Home', text: 'Enjoy long-lasting protection from water damage with properly installed and maintained gutters.' }
    ]
  };

  const pricingPlans = [
    {
      name: 'Gutter Cleaning',
      price: '$200',
      period: 'starting',
      features: [
        'Complete gutter cleaning',
        'Debris removal',
        'Downspout clearing',
        'Basic inspection',
        'Water flow testing'
      ],
      buttonText: 'Get Quote',
      featured: false
    },
    {
      name: 'Gutter Installation',
      price: '$1,200',
      period: 'starting',
      features: [
        'Seamless gutter installation',
        'Custom-fit to your home',
        'Multiple color options',
        'Professional installation',
        'Warranty included',
        'Satisfaction guarantee'
      ],
      buttonText: 'Get Quote',
      featured: true
    },
    {
      name: 'Gutter Guards',
      price: '$800',
      period: 'starting',
      features: [
        'Premium gutter guard installation',
        'Debris protection system',
        'Reduced maintenance needs',
        'Extended gutter lifespan',
        'Priority scheduling',
        'Free maintenance check'
      ],
      buttonText: 'Get Quote',
      featured: false
    }
  ];

  return (
    <>
      {/* Metadata moved to route-level layout.tsx via Metadata API */}
      
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
                className="bg-yellow-500 hover:bg-yellow-600 text-white"
                asChild
              >
                <a href={`tel:${businessData.phoneE164}`}>
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
                    className="bg-yellow-500 hover:bg-yellow-600 text-white"
                    asChild
                  >
                    <a href={`tel:${businessData.phoneE164}`}>
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

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 max-w-7xl py-2 text-sm">
          <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
          <span className="mx-2 text-gray-400">/</span>
          <a href="/businesses/" className="text-gray-600 hover:text-gray-900">Businesses</a>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900" aria-current="page">{businessData.name}</span>
        </div>
      </nav>

      {/* Structured Data */}
      <Script
        id="business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HomeImprovementService',
            '@id': 'https://nearbybizfinder.com/businesses/american-gutter-guards/#gutterservice',
            name: businessData.name,
            description: businessData.description,
            url: 'https://nearbybizfinder.com/businesses/american-gutter-guards/',
            image: [
              'https://nearbybizfinder.com/american-gutter-guards/hero-image.png',
              'https://nearbybizfinder.com/american-gutter-services/why-choose-us.webp',
              'https://nearbybizfinder.com/gutter-services/benefits-image.webp'
            ],
            priceRange: businessData.priceRange,
            telephone: businessData.phoneE164,
            email: businessData.email,
            areaServed: serviceAreas.map(area => ({
              '@type': 'City',
              name: area
            })),
            openingHoursSpecification: [
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '16:00' },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Gutter Services',
              itemListElement: services.map((service, index) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service.title,
                  description: service.description
                }
              }))
            },
            hasMap: 'https://www.google.com/maps/place/American+Gutter+Services,+Chesapeake,+VA',
            potentialAction: { '@type': 'ContactAction', target: `tel:${businessData.phoneE164}` },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: businessData.rating,
              reviewCount: businessData.reviewCount,
            },
          }),
        }}
      />
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <Script
        id="howto-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToStructuredData),
        }}
      />

      {/* Hero Section */
      }
     <section id="home" ref={heroRef} className="relative h-screen w-full overflow-hidden">
  {/* Hero Background */}
  <OptimizedImage
    src="/american-gutter-services/hero-image.jpg"
    alt="American Gutter Services Chesapeake VA"
    fill
    className="object-cover"
    priority
  />
  <OptimizedVideo
    src="/videos/american-gutter-hero.mp4"
    fallbackImage="/american-gutter-services/hero-image.jpg"
    alt="American Gutter Services Hero Video"
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    poster="/american-gutter-services/hero-image.jpg"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/90 to-[#0077B6]/70"></div>

  {/* Content */}
  <div className="absolute inset-0 flex items-center">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="hero-content max-w-2xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          American Gutter Services — Gutter Guards, Cleaning & Installation in Chesapeake, VA
        </h1>
        <p className="text-xl mb-8 text-gray-200 leading-relaxed">
          Protect your home with professional gutter services in Chesapeake, VA. From durable gutter guards to seamless installations and expert cleaning — we’ve got your home covered.
        </p>

        {/* Feature Points */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-sky-400 mr-3" />
            <span className="text-lg">Licensed & Insured Technicians</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-sky-400 mr-3" />
            <span className="text-lg">Seamless Gutter Installation</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-sky-400 mr-3" />
            <span className="text-lg">Durable Gutter Guards</span>
          </div>
        </div>

        {/* Visible Rating */}
        <div className="flex items-center text-yellow-400 mb-6">
          <Star className="h-5 w-5 mr-2 fill-current" />
          <span className="text-lg font-semibold">
            {businessData.rating} ★ ({businessData.reviewCount} reviews)
          </span>
        </div>

        <Button
          size="lg"
          className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-sky-800/30"
          asChild
        >
          <a href="#contact">Get Free Estimate</a>
        </Button>
      </div>
    </div>
  </div>
</section>


     {/* Service Areas Section */}
<section id="service-areas" className="py-20 bg-gradient-to-b from-[#F0F8FF] to-white">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="text-center mb-10">
      <Badge className="mb-4 bg-sky-100 text-sky-800 border-sky-200">Service Areas</Badge>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Gutter Services Near Chesapeake, VA — Our Service Areas
      </h2>
      <p className="text-xl text-gray-600">
        American Gutter Services proudly serves homeowners across Chesapeake and the surrounding Virginia communities.
      </p>
    </div>
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 max-w-5xl mx-auto">
      {serviceAreas.map((area, i) => (
        <li
          key={i}
          className="bg-white border border-sky-200 hover:border-sky-400 rounded-md px-4 py-3 text-center shadow-sm hover:shadow-md transition-all duration-300"
        >
          {area}
        </li>
      ))}
    </ul>
  </div>
</section>

{/* Feature Highlights */}
<section ref={featuresRef} className="py-16 bg-[#0A192F] text-white">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="flex flex-wrap justify-center gap-16">
      <div className="feature-item text-center max-w-xs">
        <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-sky-800/30">
          <ShieldCheck className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Reliable Protection</h3>
        <p className="text-gray-300 text-base">
          Our gutter guards keep your home safe from leaks, clogs, and water damage — season after season.
        </p>
      </div>

      <div className="feature-item text-center max-w-xs">
        <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-sky-800/30">
          <Home className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Expert Installation</h3>
        <p className="text-gray-300 text-base">
          Seamless gutters custom-fit to your home for long-lasting durability and a clean, finished look.
        </p>
      </div>

      <div className="feature-item text-center max-w-xs">
        <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-sky-800/30">
          <Droplets className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Comprehensive Cleaning</h3>
        <p className="text-gray-300 text-base">
          We remove dirt, leaves, and buildup to keep water flowing freely — preventing costly repairs.
        </p>
      </div>
    </div>
  </div>
</section>


     {/* Why Choose Us Section */}
<section id="about" ref={whyChooseUsRef} className="py-20 bg-gradient-to-b from-[#F0F8FF] to-white">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="why-choose-content">
        <Badge className="mb-4 bg-sky-100 text-sky-800 border-sky-200">
          Why Us
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Why Choose {businessData.name} in Chesapeake, VA
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          At American Gutter Services, we’re dedicated to protecting homes across Chesapeake, VA with durable, high-quality gutter systems. 
          From cleaning to seamless installations, we deliver reliability, precision, and long-term results you can count on.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center mr-4">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg text-gray-700">Licensed & Insured Experts</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center mr-4">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg text-gray-700">Seamless & Durable Gutters</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center mr-4">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg text-gray-700">Affordable & Honest Pricing</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center mr-4">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg text-gray-700">Trusted by Chesapeake Homeowners</span>
          </div>
        </div>
        <Button className="mt-8 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          Learn More
        </Button>
      </div>

      <div className="why-choose-image relative">
        <OptimizedImage
          src="/american-gutter-services/why-choose-us.webp"
          alt="Professional Gutter Installation Chesapeake VA"
          width={600}
          height={400}
          className="rounded-lg shadow-xl"
        />
      </div>
    </div>
  </div>
</section>

{/* What We Provide Section */}
<section id="services" ref={servicesRef} className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="text-center mb-16">
      <Badge className="mb-4 bg-sky-100 text-sky-800 border-sky-200">
        Our Services
      </Badge>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Gutter Services We Provide in Chesapeake, VA
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Reliable and professional gutter cleaning, guard installation, and seamless gutter systems — built to protect your home and enhance curb appeal.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {services.slice(0, 3).map((service, index) => (
        <Card
          key={index}
          className="service-card bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <service.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            <a href="#contact" className="text-sky-500 hover:text-sky-600 font-semibold">
              Get a free quote for {service.title} in Chesapeake
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* Testimonials & Statistics Section */}
<section id="testimonials" ref={testimonialsRef} className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="text-center mb-16">
      <Badge className="mb-4 bg-sky-100 text-sky-800 border-sky-200">
        Our Success
      </Badge>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        What Chesapeake Homeowners Say About Our Gutter Services
      </h2>
    </div>

    {/* Testimonial */}
    <div className="max-w-4xl mx-auto mb-16">
      <Card className="testimonial-card bg-gray-50 border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-6">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="h-6 w-6 text-sky-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
            "American Gutter Services did an incredible job cleaning and installing new gutters at my home in Chesapeake. 
            Fast, professional, and the results look amazing. Highly recommend them to anyone needing gutter work!"
          </blockquote>
          <div className="text-lg font-semibold text-gray-900">Michael Thompson</div>
          <div className="text-gray-600">Chesapeake, VA</div>
        </CardContent>
      </Card>
    </div>

    {/* Statistics */}
    <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item text-center">
          <div className="text-4xl md:text-5xl font-bold text-sky-600 mb-2">{stat.number}</div>
          <div className="text-lg text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Bringing Shine Banner */}
<section className="py-20 bg-gradient-to-r from-blue-900 to-green-800 text-white">
  <div className="container mx-auto px-4 max-w-4xl text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Protect Your Home — Keep Gutters Flowing Smoothly
    </h2>
    <p className="text-xl text-gray-200 mb-8 leading-relaxed">
      From professional gutter installation to cleaning and guards, 
      we help homeowners safeguard their property from water damage year-round.
    </p>
    <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg" asChild>
      <a href={`tel:${businessData.phoneE164}`}>Get a Free Quote</a>
    </Button>
  </div>
</section>

{/* How It Works Section */}
<section ref={howItWorksRef} className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="text-center mb-16">
      <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">Process</Badge>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        How Our Gutter Service Works
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Getting your gutters serviced is quick and simple — from inspection to installation.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="how-it-works-item text-center">
        <div className="relative mb-6">
          <OptimizedImage
            src="/gutter-services/how-it-works-inspection.webp"
            alt="Gutter inspection"
            width={300}
            height={200}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Inspection & Quote</h3>
        <p className="text-gray-600 leading-relaxed">
          We inspect your roofline and gutters to assess cleaning or replacement needs, then provide a free estimate.
        </p>
      </div>
      <div className="how-it-works-item text-center">
        <div className="relative mb-6">
          <OptimizedImage
            src="/gutter-services/how-it-works-installation.webp"
            alt="Gutter installation"
            width={300}
            height={200}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Cleaning or Installation</h3>
        <p className="text-gray-600 leading-relaxed">
          Our team gets to work — whether it’s a deep gutter cleaning, new system setup, or installing premium guards.
        </p>
      </div>
      <div className="how-it-works-item text-center">
        <div className="relative mb-6">
          <OptimizedImage
            src="/gutter-services/how-it-works-completion.webp"
            alt="Completed gutter project"
            width={300}
            height={200}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Long-Term Protection</h3>
        <p className="text-gray-600 leading-relaxed">
          Enjoy peace of mind knowing your home is protected from leaks, overflow, and foundation damage.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Gallery Section */}
<section ref={galleryRef} className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="text-center mb-16">
      <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">Gallery</Badge>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our Gutter Projects
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Browse our recent gutter installations, cleanings, and guard setups across Virginia Beach and nearby cities.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {galleryImages.map((image, index) => (
        <div key={index} className="gallery-item group relative overflow-hidden rounded-lg aspect-square">
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

{/* Benefits Section */}
<section ref={benefitsRef} className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="benefits-content">
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Protects Your Home</h3>
              <p className="text-gray-600">Prevents leaks, mold, and water damage</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Improves Water Flow</h3>
              <p className="text-gray-600">Keeps gutters clog-free and efficient</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Low Maintenance</h3>
              <p className="text-gray-600">Durable materials and expert installation</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Trusted Local Experts</h3>
              <p className="text-gray-600">Serving homes across Hampton Roads</p>
            </div>
          </div>
        </div>
      </div>
      <div className="benefits-image relative">
        <OptimizedImage
          src="/gutter-services/benefits-image.webp"
          alt="Technician installing gutter guards"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>


      {/* Pricing Plans Section */}
      <section id="pricing" ref={pricingRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
              Pricing
                    </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Gutter Service Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect gutter service that fits your needs and budget. All services include our satisfaction guarantee and free estimates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`pricing-card relative ${plan.featured ? 'bg-yellow-500 text-white border-yellow-500' : 'bg-white'} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
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

      {/* Team section removed as requested */}

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our gutter services.
            </p>
          </div>

              <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="faq-item bg-white border-0 shadow-md">
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
      <section id="contact" ref={contactRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="contact-content">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get Your Free Estimate Today. Special Offers Available.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to protect your home with professional gutter services? Contact us today for a free estimate and special offers for new customers.
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
              </div>
            </div>
            
            <div className="contact-form bg-gray-50 rounded-lg p-8">
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
                    placeholder="Tell us about your gutter service needs"
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
        </div>
      </section>

      {/* Custom Footer */}
      <footer className="bg-gray-900 text-white">
        {/* Top CTA */}
        <div className="bg-yellow-500 py-8">
          <div className="container mx-auto px-4 max-w-7xl text-center">
              <Button className="bg-white text-yellow-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg" asChild>
              <a href="#contact">Get A Free Estimate Now!</a>
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
                  Professional gutter services that protect your home from water damage. 
                  We provide expert installation, cleaning, and guard systems with our experienced team and quality materials.
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
                  <li><a href="#services" className="text-gray-300 hover:text-yellow-500 transition-colors">Gutter Guards</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-yellow-500 transition-colors">Gutter Cleaning</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-yellow-500 transition-colors">Gutter Installation</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-yellow-500 transition-colors">Seamless Gutters</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-yellow-500 transition-colors">Gutter Maintenance</a></li>
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
                  <li><a href="#contact" className="text-gray-300 hover:text-yellow-500 transition-colors">Get Quote</a></li>
                  <li><a href={`tel:${businessData.phoneE164}`} className="text-gray-300 hover:text-yellow-500 transition-colors">Book Service</a></li>
                  <li><a href="/contact/" className="text-gray-300 hover:text-yellow-500 transition-colors">Support</a></li>
                  <li><a href="/privacy/" className="text-gray-300 hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms/" className="text-gray-300 hover:text-yellow-500 transition-colors">Terms of Service</a></li>
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
                <a href="/privacy/" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Privacy Policy</a>
                <a href="/terms/" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Terms of Service</a>
                <a href="/privacy/" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Cookie Policy</a>
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
    </>
  );
}