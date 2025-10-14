import OptimizedImage from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, Globe, MapPin, Navigation } from 'lucide-react';

interface BusinessHeroProps {
  name: string;
  category?: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  website?: string;
  featuredImage: string;
  locationName?: string; // For location-specific pages
}

export default function BusinessHero({
  name,
  category,
  rating,
  reviewCount,
  priceRange,
  address,
  city,
  state,
  zipCode,
  phone,
  website,
  featuredImage,
  locationName
}: BusinessHeroProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getPriceRangeColor = (priceRange: string) => {
    switch (priceRange) {
      case '$': return 'bg-green-100 text-green-800';
      case '$$': return 'bg-blue-100 text-blue-800';
      case '$$$': return 'bg-yellow-100 text-yellow-800';
      case '$$$$': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const generateMapUrl = () => {
    const fullAddress = encodeURIComponent(`${address}, ${city}, ${state} ${zipCode}`);
    return `https://www.google.com/maps/search/?api=1&query=${fullAddress}`;
  };

  return (
    <div className="relative h-96 md:h-[500px] w-full">
      <OptimizedImage
        src={featuredImage}
        alt={name}
        fill
        className="object-cover"
        priority
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <div className="mb-6">
            {category ? (
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                {category}
              </Badge>
            ) : null}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {name}
              {locationName && (
                <span className="block text-2xl md:text-3xl font-normal text-white/90 mt-2">
                  {locationName}
                </span>
              )}
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {renderStars(rating)}
              </div>
              <span className="text-xl font-semibold">
                {rating}
              </span>
              <span className="text-white/80">
                ({reviewCount} reviews)
              </span>
              <Badge className={getPriceRangeColor(priceRange)}>
                {priceRange}
              </Badge>
            </div>
          </div>

          {/* Location Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">
                {address}, {city}, {state} {zipCode}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm text-white/90">
              <span className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>{phone}</span>
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-8 py-3"
              asChild
            >
              <a href={generateMapUrl()} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-5 w-5 mr-2" />
                Get Directions
              </a>
            </Button>
            {website && (
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-8 py-3"
                asChild
              >
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-5 w-5 mr-2" />
                  Visit Website
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
