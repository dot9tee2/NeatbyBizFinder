import Image from 'next/image';
import Link from 'next/link';
import { Business } from '@/types/business';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Phone, Clock, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import SearchHighlight from '@/components/search/search-highlight';

interface BusinessCardProps {
  business: Business;
  className?: string;
  searchTerm?: string;
}

export default function BusinessCard({ business, className, searchTerm }: BusinessCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          'h-4 w-4',
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        )}
      />
    ));
  };

  const getPriceRangeColor = (priceRange: string) => {
    switch (priceRange) {
      case '$':
        return 'bg-green-100 text-green-800';
      case '$$':
        return 'bg-blue-100 text-blue-800';
      case '$$$':
        return 'bg-yellow-100 text-yellow-800';
      case '$$$$':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className={cn('group hover:shadow-lg transition-all duration-300', className)}>
      <CardContent className="p-0">
        {/* Business Image */}
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={business.featured_image || business.images[0]}
            alt={business.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Button
            size="sm"
            variant="secondary"
            className="absolute top-3 right-3 rounded-full w-9 h-9 p-0 bg-white/90 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Badge className={cn('absolute bottom-3 left-3', getPriceRangeColor(business.price_range))}>
            {business.price_range}
          </Badge>
        </div>

        {/* Business Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
              <Link href={`/business/${business.id}`}>
                <SearchHighlight text={business.name} searchTerm={searchTerm || ''} />
              </Link>
            </h3>
            <Badge variant="secondary" className="text-xs ml-2">
              <SearchHighlight text={business.category} searchTerm={searchTerm || ''} />
            </Badge>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center">
              {renderStars(business.rating)}
            </div>
            <span className="text-sm font-medium text-gray-900">
              {business.rating}
            </span>
            <span className="text-sm text-gray-500">
              ({business.review_count} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            <SearchHighlight text={business.description} searchTerm={searchTerm || ''} />
          </p>

          {/* Location */}
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="line-clamp-1">
              <SearchHighlight 
                text={`${business.address}, ${business.city}, ${business.state}`} 
                searchTerm={searchTerm || ''} 
              />
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{business.phone}</span>
          </div>

          {/* Hours - Show today's hours */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="line-clamp-1">
              Today: {business.hours.monday}
            </span>
          </div>

          {/* Actions */}
          <div className="flex space-x-2">
            <Link href={`/business/${business.id}`} className="flex-1">
              <Button className="w-full" size="sm">
                View Details
              </Button>
            </Link>
            {business.phone && (
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}