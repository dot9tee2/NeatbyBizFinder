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
  'clear-choice-cleaning': {
    name: 'Clear Choice Cleaning',
    category: 'Home Services',
    rating: 4.9,
    reviewCount: 156,
    priceRange: '$$',
    address: 'Various Locations',
    city: 'Multiple Cities',
    state: 'Multiple States',
    zipCode: '00000',
    phone: '(555) 123-4567',
    website: 'https://www.clearchoicecleaning.com/',
    email: 'info@clearchoicecleaning.com',
    featuredImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    description: 'Professional residential and commercial cleaning services. We provide reliable, thorough cleaning solutions for homes and businesses.',
    hours: {
      monday: '8:00 AM - 6:00 PM',
      tuesday: '8:00 AM - 6:00 PM',
      wednesday: '8:00 AM - 6:00 PM',
      thursday: '8:00 AM - 6:00 PM',
      friday: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 4:00 PM',
      sunday: 'Closed',
    },
    amenities: ['Licensed & Insured', 'Eco-Friendly Products', 'Satisfaction Guaranteed', 'Flexible Scheduling', 'Free Estimates'],
    images: [
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    ],
    updated_at: '2024-01-22T10:00:00Z',
  },
};

// Location data for businesses with multiple locations
export const locationData: Record<string, Record<string, LocationData>> = {
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