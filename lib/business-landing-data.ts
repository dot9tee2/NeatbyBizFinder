// Business data for manual landing pages
// This file contains the data structure and utilities for business landing pages

export interface BusinessLandingData {
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  website?: string;
  email?: string;
  featuredImage: string;
  description: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  amenities: string[];
  images: string[];
  updated_at?: string;
}

export interface LocationData extends BusinessLandingData {
  locationName: string;
  parentBusiness: string;
  is_primary?: boolean;
  created_at?: string;
  updated_at?: string;
}

// Sample business data - you can move this to a database or separate files
export const businessData: Record<string, BusinessLandingData> = {
  'garden-bistro': {
    name: 'The Garden Bistro',
    category: 'Restaurants',
    rating: 4.8,
    reviewCount: 245,
    priceRange: '$$$',
    address: '123 Main Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105',
    phone: '(415) 555-0123',
    website: 'https://gardenbistro.com',
    email: 'info@gardenbistro.com',
    featuredImage: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    description: 'Farm-to-table restaurant featuring locally sourced ingredients and seasonal menus. A cozy atmosphere perfect for romantic dinners and business lunches.',
    hours: {
      monday: '11:00 AM - 10:00 PM',
      tuesday: '11:00 AM - 10:00 PM',
      wednesday: '11:00 AM - 10:00 PM',
      thursday: '11:00 AM - 10:00 PM',
      friday: '11:00 AM - 11:00 PM',
      saturday: '10:00 AM - 11:00 PM',
      sunday: '10:00 AM - 9:00 PM',
    },
    amenities: ['Outdoor Seating', 'WiFi', 'Parking', 'Reservations'],
    images: [
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
      'https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg',
    ],
    updated_at: '2024-01-15T10:00:00Z',
  },
  'techfix-pro': {
    name: 'TechFix Pro',
    category: 'Professional Services',
    rating: 4.6,
    reviewCount: 189,
    priceRange: '$$',
    address: '456 Tech Avenue',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94107',
    phone: '(415) 555-0456',
    website: 'https://techfixpro.com',
    email: 'support@techfixpro.com',
    featuredImage: 'https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg',
    description: 'Professional computer and smartphone repair services. Quick turnaround times with certified technicians and warranty on all repairs.',
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed',
    },
    amenities: ['Same Day Service', 'Warranty', 'Free Diagnostics', 'Pickup & Delivery'],
    images: [
      'https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg',
      'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg',
    ],
    updated_at: '2024-01-16T10:00:00Z',
  },
  'luxury-spa': {
    name: 'Bella Vista Luxury Spa',
    category: 'Beauty & Spas',
    rating: 4.9,
    reviewCount: 156,
    priceRange: '$$$$',
    address: '789 Wellness Way',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94110',
    phone: '(415) 555-0789',
    website: 'https://bellavistaspa.com',
    email: 'appointments@bellavistaspa.com',
    featuredImage: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
    description: 'Luxury day spa offering massages, facials, and wellness treatments. Relax and rejuvenate in our tranquil environment.',
    hours: {
      monday: '9:00 AM - 8:00 PM',
      tuesday: '9:00 AM - 8:00 PM',
      wednesday: '9:00 AM - 8:00 PM',
      thursday: '9:00 AM - 8:00 PM',
      friday: '9:00 AM - 8:00 PM',
      saturday: '8:00 AM - 6:00 PM',
      sunday: '9:00 AM - 6:00 PM',
    },
    amenities: ['Couples Packages', 'Steam Room', 'Sauna', 'Parking', 'Online Booking'],
    images: [
      'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
      'https://images.pexels.com/photos/6663589/pexels-photo-6663589.jpeg',
    ],
    updated_at: '2024-01-17T10:00:00Z',
  },
  'tech-startup': {
    name: 'TechFlow Solutions',
    category: 'Professional Services',
    rating: 4.8,
    reviewCount: 89,
    priceRange: '$$$',
    address: '123 Innovation Drive',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105',
    phone: '(415) 555-0123',
    website: 'https://techflowsolutions.com',
    email: 'hello@techflowsolutions.com',
    featuredImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    description: 'Cutting-edge software development company specializing in web applications, mobile apps, and cloud solutions.',
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed',
    },
    amenities: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Consulting'],
    images: [
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    ],
    updated_at: '2024-01-18T10:00:00Z',
  },
  'cozy-cafe': {
    name: 'Cozy Corner Cafe',
    category: 'Restaurants',
    rating: 4.7,
    reviewCount: 203,
    priceRange: '$$',
    address: '456 Oak Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    phone: '(415) 555-0456',
    website: 'https://cozycornercafe.com',
    email: 'hello@cozycornercafe.com',
    featuredImage: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    description: 'Charming neighborhood cafe serving artisanal coffee, fresh pastries, and homemade meals in a warm, welcoming atmosphere.',
    hours: {
      monday: '7:00 AM - 6:00 PM',
      tuesday: '7:00 AM - 6:00 PM',
      wednesday: '7:00 AM - 6:00 PM',
      thursday: '7:00 AM - 6:00 PM',
      friday: '7:00 AM - 6:00 PM',
      saturday: '8:00 AM - 6:00 PM',
      sunday: '8:00 AM - 5:00 PM',
    },
    amenities: ['WiFi', 'Outdoor Seating', 'Pet Friendly', 'Local Art'],
    images: [
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    ],
    updated_at: '2024-01-19T10:00:00Z',
  },
  'drywall-painting-pro': {
    name: 'Drywall and Painting Pro',
    category: 'Home Services',
    rating: 4.8,
    reviewCount: 127,
    priceRange: '$$$',
    address: 'Cedar Park, TX',
    city: 'Cedar Park',
    state: 'TX',
    zipCode: '78613',
    phone: '(737) 287-4153',
    website: 'https://www.drywallandpaintingpro.com/',
    email: 'Drywallandpaintingpro@yahoo.com',
    featuredImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    description: 'Professional drywall, painting, water damage restoration, pipe services, and remodeling. Serving Cedar Park, Georgetown, Leander, and surrounding areas.',
    hours: {
      monday: '8:00 AM - 6:00 PM',
      tuesday: '8:00 AM - 6:00 PM',
      wednesday: '8:00 AM - 6:00 PM',
      thursday: '8:00 AM - 6:00 PM',
      friday: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 4:00 PM',
      sunday: 'Emergency Only',
    },
    amenities: ['Licensed & Insured', 'Free Estimates', 'Emergency Services', 'Quality Materials', 'Satisfaction Guaranteed'],
    images: [
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    ],
    updated_at: '2024-01-20T10:00:00Z',
  },
  'superior-electric-service': {
    name: 'Superior Electric Service',
    category: 'Electrical Services',
    rating: 4.8,
    reviewCount: 127,
    priceRange: '$$$',
    address: 'Louisville, KY',
    city: 'Louisville',
    state: 'KY',
    zipCode: '40201',
    phone: '(502) 964-9473',
    website: 'https://www.superiorelectricservice.com/',
    email: 'superiorelectricservice@hotmail.com',
    featuredImage: '/images/superior-electrical/commercial-projects.png',
    description: 'Professional electrical services, installations, repairs, and maintenance. Serving Louisville, Prospect, Hill View, and surrounding areas with 24/7 emergency service.',
    hours: {
      monday: '8:00 AM - 6:00 PM',
      tuesday: '8:00 AM - 6:00 PM',
      wednesday: '8:00 AM - 6:00 PM',
      thursday: '8:00 AM - 6:00 PM',
      friday: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 4:00 PM',
      sunday: 'Emergency Only',
    },
    amenities: ['Licensed & Insured', '24/7 Emergency Service', 'Free Estimates', 'Solar Installation', 'Smart Home Integration'],
    images: [
      '/images/superior-electrical/panel-upgrades.png',
      '/images/superior-electrical/solar-systems.png',
      '/images/superior-electrical/commercial-projects.png',
      '/images/superior-electrical/residential-wiring.png',
      '/images/superior-electrical/emergency-repairs.png',
      '/images/superior-electrical/smarthome-systems.png',
    ],
    updated_at: '2024-01-21T10:00:00Z',
  },
};

// Location data for businesses with multiple locations
export const locationData: Record<string, Record<string, LocationData>> = {
  'garden-bistro': {
    'downtown': {
      name: 'The Garden Bistro',
      locationName: 'Downtown Location',
      parentBusiness: 'garden-bistro',
      category: 'Restaurants',
      rating: 4.8,
      reviewCount: 245,
      priceRange: '$$$',
      address: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      phone: '(415) 555-0123',
      website: 'https://gardenbistro.com',
      email: 'downtown@gardenbistro.com',
      featuredImage: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
      description: 'Our flagship downtown location offers an elegant dining experience in the heart of San Francisco. Featuring locally sourced ingredients and seasonal menus, this location is perfect for business lunches and romantic dinners.',
      hours: {
        monday: '11:00 AM - 10:00 PM',
        tuesday: '11:00 AM - 10:00 PM',
        wednesday: '11:00 AM - 10:00 PM',
        thursday: '11:00 AM - 10:00 PM',
        friday: '11:00 AM - 11:00 PM',
        saturday: '10:00 AM - 11:00 PM',
        sunday: '10:00 AM - 9:00 PM',
      },
      amenities: ['Outdoor Seating', 'WiFi', 'Parking', 'Reservations', 'Private Dining'],
      images: [
        'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
        'https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg',
      ],
      is_primary: false,
      created_at: '2024-01-15T10:00:00Z',
      updated_at: '2024-01-15T10:00:00Z',
    },
    'marina': {
      name: 'The Garden Bistro',
      locationName: 'Marina District',
      parentBusiness: 'garden-bistro',
      category: 'Restaurants',
      rating: 4.7,
      reviewCount: 189,
      priceRange: '$$$',
      address: '456 Marina Blvd',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94123',
      phone: '(415) 555-0124',
      website: 'https://gardenbistro.com',
      email: 'marina@gardenbistro.com',
      featuredImage: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
      description: 'Our Marina District location offers breathtaking views of the San Francisco Bay while serving the same exceptional farm-to-table cuisine. Perfect for special occasions and waterfront dining.',
      hours: {
        monday: '11:00 AM - 10:00 PM',
        tuesday: '11:00 AM - 10:00 PM',
        wednesday: '11:00 AM - 10:00 PM',
        thursday: '11:00 AM - 10:00 PM',
        friday: '11:00 AM - 11:00 PM',
        saturday: '10:00 AM - 11:00 PM',
        sunday: '10:00 AM - 9:00 PM',
      },
      amenities: ['Bay Views', 'Outdoor Seating', 'WiFi', 'Valet Parking', 'Reservations', 'Wine Bar'],
      images: [
        'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
        'https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg',
      ],
      is_primary: false,
      created_at: '2024-01-15T10:00:00Z',
      updated_at: '2024-01-15T10:00:00Z',
    },
  },
  'drywall-painting-pro': {
    'georgetown': {
      name: 'Drywall and Painting Pro',
      locationName: 'Georgetown Location',
      parentBusiness: 'drywall-painting-pro',
      category: 'Home Services',
      rating: 4.8,
      reviewCount: 127,
      priceRange: '$$$',
      address: 'Georgetown, TX',
      city: 'Georgetown',
      state: 'TX',
      zipCode: '78626',
      phone: '(737) 287-4153',
      website: 'https://www.drywallandpaintingpro.com/',
      email: 'Drywallandpaintingpro@yahoo.com',
      featuredImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      description: 'Professional Christmas light installation, drywall, painting, and home services in Georgetown, TX. Serving Georgetown, Liberty Hills, and Leander areas.',
      hours: {
        monday: '8:00 AM - 6:00 PM',
        tuesday: '8:00 AM - 6:00 PM',
        wednesday: '8:00 AM - 6:00 PM',
        thursday: '8:00 AM - 6:00 PM',
        friday: '8:00 AM - 6:00 PM',
        saturday: '9:00 AM - 4:00 PM',
        sunday: 'Emergency Only',
      },
      amenities: ['Christmas Light Installation', 'Licensed & Insured', 'Free Estimates', 'Emergency Services', 'Quality Materials'],
      images: [
        'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
        'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      ],
      is_primary: false,
      created_at: '2024-01-15T10:00:00Z',
      updated_at: '2024-01-15T10:00:00Z',
    },
    'cedar-park': {
      name: 'Drywall and Painting Pro',
      locationName: 'Cedar Park Location',
      parentBusiness: 'drywall-painting-pro',
      category: 'Home Services',
      rating: 4.8,
      reviewCount: 127,
      priceRange: '$$$',
      address: 'Cedar Park, TX',
      city: 'Cedar Park',
      state: 'TX',
      zipCode: '78613',
      phone: '(737) 287-4153',
      website: 'https://www.drywallandpaintingpro.com/',
      email: 'Drywallandpaintingpro@yahoo.com',
      featuredImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      description: 'Professional drywall, painting, water damage restoration, and remodeling services in Cedar Park, TX. Licensed and insured contractors.',
      hours: {
        monday: '8:00 AM - 6:00 PM',
        tuesday: '8:00 AM - 6:00 PM',
        wednesday: '8:00 AM - 6:00 PM',
        thursday: '8:00 AM - 6:00 PM',
        friday: '8:00 AM - 6:00 PM',
        saturday: '9:00 AM - 4:00 PM',
        sunday: 'Emergency Only',
      },
      amenities: ['Licensed & Insured', 'Free Estimates', 'Emergency Services', 'Quality Materials', 'Satisfaction Guaranteed'],
      images: [
        'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
        'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      ],
      is_primary: true,
      created_at: '2024-01-15T10:00:00Z',
      updated_at: '2024-01-15T10:00:00Z',
    },
  },
  'superior-electric-service': {
    'louisville': {
      name: 'Superior Electric Service',
      locationName: 'Louisville Main Location',
      parentBusiness: 'superior-electric-service',
      category: 'Electrical Services',
      rating: 4.8,
      reviewCount: 127,
      priceRange: '$$$',
      address: 'Louisville, KY',
      city: 'Louisville',
      state: 'KY',
      zipCode: '40201',
      phone: '(502) 964-9473',
      website: 'https://www.superiorelectricservice.com/',
      email: 'superiorelectricservice@hotmail.com',
      featuredImage: '/images/superior-electrical/commercial-projects.png',
      description: 'Main location of Superior Electric Service in Louisville, KY. Professional electrical services, installations, repairs, and maintenance. Serving Louisville, Prospect, Hill View, and surrounding areas.',
      hours: {
        monday: '8:00 AM - 6:00 PM',
        tuesday: '8:00 AM - 6:00 PM',
        wednesday: '8:00 AM - 6:00 PM',
        thursday: '8:00 AM - 6:00 PM',
        friday: '8:00 AM - 6:00 PM',
        saturday: '9:00 AM - 4:00 PM',
        sunday: 'Emergency Only',
      },
      amenities: ['Licensed & Insured', '24/7 Emergency Service', 'Free Estimates', 'Solar Installation', 'Smart Home Integration'],
      images: [
        '/images/superior-electrical/panel-upgrades.png',
        '/images/superior-electrical/solar-systems.png',
        '/images/superior-electrical/commercial-projects.png',
        '/images/superior-electrical/residential-wiring.png',
        '/images/superior-electrical/emergency-repairs.png',
        '/images/superior-electrical/smarthome-systems.png',
      ],
      is_primary: true,
      created_at: '2024-01-21T10:00:00Z',
      updated_at: '2024-01-21T10:00:00Z',
    },
    'prospect': {
      name: 'Superior Electric Service',
      locationName: 'Prospect Location',
      parentBusiness: 'superior-electric-service',
      category: 'Electrical Services',
      rating: 4.9,
      reviewCount: 89,
      priceRange: '$$$',
      address: 'Prospect, KY',
      city: 'Prospect',
      state: 'KY',
      zipCode: '40059',
      phone: '(502) 964-9473',
      website: 'https://www.superiorelectricservice.com/prospect',
      email: 'superiorelectricservice@hotmail.com',
      featuredImage: '/images/superior-electrical/commercial-projects.png',
      description: 'Professional electrical services in Prospect, KY. Specializing in residential and commercial electrical installations, solar systems, and emergency repairs.',
      hours: {
        monday: '8:00 AM - 6:00 PM',
        tuesday: '8:00 AM - 6:00 PM',
        wednesday: '8:00 AM - 6:00 PM',
        thursday: '8:00 AM - 6:00 PM',
        friday: '8:00 AM - 6:00 PM',
        saturday: '9:00 AM - 4:00 PM',
        sunday: 'Emergency Only',
      },
      amenities: ['Licensed & Insured', '24/7 Emergency Service', 'Free Estimates', 'Solar Installation', 'Smart Home Integration'],
      images: [
        '/images/superior-electrical/panel-upgrades.png',
        '/images/superior-electrical/solar-systems.png',
        '/images/superior-electrical/commercial-projects.png',
        '/images/superior-electrical/residential-wiring.png',
        '/images/superior-electrical/emergency-repairs.png',
        '/images/superior-electrical/smarthome-systems.png',
      ],
      is_primary: false,
      created_at: '2024-01-21T10:00:00Z',
      updated_at: '2024-01-21T10:00:00Z',
    },
    'hill-view': {
      name: 'Superior Electric Service',
      locationName: 'Hill View Location',
      parentBusiness: 'superior-electric-service',
      category: 'Rural Electrical Services',
      rating: 4.7,
      reviewCount: 67,
      priceRange: '$$$',
      address: 'Hill View, KY',
      city: 'Hill View',
      state: 'KY',
      zipCode: '40026',
      phone: '(502) 964-9473',
      website: 'https://www.superiorelectricservice.com/hill-view',
      email: 'superiorelectricservice@hotmail.com',
      featuredImage: '/images/superior-electrical/commercial-projects.png',
      description: 'Specialized electrical services for Hill View, KY. Expert rural electrical solutions, agricultural installations, and emergency repairs for residential and farm properties.',
      hours: {
        monday: '8:00 AM - 6:00 PM',
        tuesday: '8:00 AM - 6:00 PM',
        wednesday: '8:00 AM - 6:00 PM',
        thursday: '8:00 AM - 6:00 PM',
        friday: '8:00 AM - 6:00 PM',
        saturday: '9:00 AM - 4:00 PM',
        sunday: 'Emergency Only',
      },
      amenities: ['Licensed & Insured', '24/7 Emergency Service', 'Free Estimates', 'Rural Electrical', 'Agricultural Services'],
      images: [
        '/images/superior-electrical/panel-upgrades.png',
        '/images/superior-electrical/solar-systems.png',
        '/images/superior-electrical/commercial-projects.png',
        '/images/superior-electrical/residential-wiring.png',
        '/images/superior-electrical/emergency-repairs.png',
        '/images/superior-electrical/smarthome-systems.png',
      ],
      is_primary: false,
      created_at: '2024-01-21T10:00:00Z',
      updated_at: '2024-01-21T10:00:00Z',
    },
  },
};

// Utility functions
export function getBusinessData(businessSlug: string): BusinessLandingData | null {
  return businessData[businessSlug] || null;
}

export function getLocationData(businessSlug: string, locationSlug: string): LocationData | null {
  return locationData[businessSlug]?.[locationSlug] || null;
}

export function getAllBusinesses(): string[] {
  return Object.keys(businessData);
}

export function getBusinessLocations(businessSlug: string): string[] {
  return Object.keys(locationData[businessSlug] || {});
}

// Generate structured data for business
export function generateBusinessStructuredData(data: BusinessLandingData, businessSlug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name,
    description: data.description,
    url: `https://nearbybizfinder.com/businesses/${businessSlug}/`,
    image: data.featuredImage,
    priceRange: data.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address,
      addressLocality: data.city,
      addressRegion: data.state,
      postalCode: data.zipCode,
      addressCountry: 'US',
    },
    telephone: data.phone,
    email: data.email,
    website: data.website,
    openingHoursSpecification: Object.entries(data.hours).map(([day, hours]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
      opens: hours.split(' - ')[0],
      closes: hours.split(' - ')[1],
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: data.rating,
      reviewCount: data.reviewCount,
    },
  };
}

// Generate structured data for location
export function generateLocationStructuredData(data: LocationData, businessSlug: string, locationSlug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${data.name} - ${data.locationName}`,
    description: data.description,
    url: `https://nearbybizfinder.com/businesses/${businessSlug}/${locationSlug}/`,
    image: data.featuredImage,
    priceRange: data.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address,
      addressLocality: data.city,
      addressRegion: data.state,
      postalCode: data.zipCode,
      addressCountry: 'US',
    },
    telephone: data.phone,
    email: data.email,
    website: data.website,
    openingHoursSpecification: Object.entries(data.hours).map(([day, hours]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
      opens: hours.split(' - ')[0],
      closes: hours.split(' - ')[1],
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: data.rating,
      reviewCount: data.reviewCount,
    },
  };
}