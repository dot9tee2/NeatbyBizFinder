import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Globe, Mail, Navigation } from 'lucide-react';

interface BusinessContactProps {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  website?: string;
  email?: string;
}

export default function BusinessContact({
  address,
  city,
  state,
  zipCode,
  phone,
  website,
  email
}: BusinessContactProps) {
  const generateMapUrl = () => {
    const fullAddress = encodeURIComponent(`${address}, ${city}, ${state} ${zipCode}`);
    return `https://www.google.com/maps/search/?api=1&query=${fullAddress}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-gray-400 mt-1" />
          <div>
            <p className="text-sm text-gray-600 mb-1">Address</p>
            <p className="font-medium text-gray-900">
              {address}
            </p>
            <p className="text-sm text-gray-600">
              {city}, {state} {zipCode}
            </p>
            <Button 
              variant="link" 
              className="p-0 h-auto text-blue-600 hover:text-blue-700 mt-1"
              asChild
            >
              <a href={generateMapUrl()} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-4 w-4 mr-1" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-600">Phone</p>
            <p className="font-medium text-gray-900">{phone}</p>
          </div>
        </div>

        {email && (
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <a 
                href={`mailto:${email}`}
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                {email}
              </a>
            </div>
          </div>
        )}

        {website && (
          <div className="flex items-center space-x-3">
            <Globe className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">Website</p>
              <a 
                href={website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Visit Website
              </a>
            </div>
          </div>
        )}

        <div className="pt-4 border-t">
          <Button className="w-full" size="lg">
            <Phone className="h-4 w-4 mr-2" />
            Call Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
