import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Camera } from 'lucide-react';

interface BusinessGalleryProps {
  images: string[];
  businessName: string;
}

export default function BusinessGallery({ images, businessName }: BusinessGalleryProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Camera className="h-5 w-5" />
          <span>Photos</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-32 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`${businessName} photo ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-200 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
