import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MessageCircle } from 'lucide-react';

interface BusinessReviewsProps {
  rating: number;
  reviewCount: number;
}

export default function BusinessReviews({ rating, reviewCount }: BusinessReviewsProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MessageCircle className="h-5 w-5" />
          <span>Customer Reviews</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <div className="flex items-center justify-center space-x-1 mb-4">
            {renderStars(rating)}
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-2">
            {rating}
          </p>
          <p className="text-gray-600 mb-6">
            Based on {reviewCount} reviews
          </p>
          <Button variant="outline" size="lg">
            Write a Review
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
