import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BusinessAmenitiesProps {
  amenities: string[];
}

export default function BusinessAmenities({ amenities }: BusinessAmenitiesProps) {
  if (!amenities || amenities.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Amenities & Features</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {amenities.map((amenity, index) => (
            <Badge key={index} variant="outline" className="px-3 py-1">
              {amenity}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
