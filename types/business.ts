export interface Business {
  id: string;
  name: string;
  description: string;
  category: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  latitude: number;
  longitude: number;
  phone: string;
  website?: string;
  email?: string;
  rating: number;
  review_count: number;
  price_range: '$' | '$$' | '$$$' | '$$$$';
  hours: BusinessHours;
  images: string[];
  featured_image?: string;
  amenities: string[];
  created_at: string;
  updated_at: string;
}

export interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface Review {
  id: string;
  business_id: string;
  user_id: string;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

export interface BusinessCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

export interface SearchFilters {
  location: string;
  category?: string;
  rating?: number;
  priceRange?: string[];
  distance?: number;
  sortBy?: 'rating' | 'distance' | 'name' | 'review_count';
}