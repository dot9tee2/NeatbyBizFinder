import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { mockBusinesses } from '@/lib/mock-data';
import { 
  Star, 
  MapPin, 
  Phone, 
  Globe, 
  Mail, 
  Clock, 
  Heart, 
  Share2,
  Navigation,
  Camera,
  MessageCircle,
  ExternalLink,
  ChevronLeft
} from 'lucide-react';
import { Metadata } from 'next';
import Script from 'next/script';
import { businesses as db } from '@/lib/supabase';

// Keep static for Next.js export, but page reads dynamic data when available
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const { data } = await db.getById(id);
  const business = data ?? mockBusinesses.find(b => b.id === id);
  
  if (!business) {
    return {
      title: 'Business Not Found - NearbyBizFinder',
    };
  }

  return {
    title: `${business.name} - ${business.category} | NearbyBizFinder`,
    description: business.description,
    alternates: { canonical: `/business/${id}/` },
    openGraph: {
      title: business.name,
      description: business.description,
      images: business.featured_image ? [business.featured_image] : [],
    },
  };
}

export default async function BusinessPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data } = await db.getById(id);
  const business = data ?? mockBusinesses.find(b => b.id === id);

  if (!business) {
    notFound();
  }

  // Prepare typed opening hours for JSON-LD
  const openingHoursSpec = Object.entries(business.hours as Record<string, string>).map(([dayKey, hoursValue]) => {
    const parts = (hoursValue || '').split('-');
    const opens = parts[0]?.trim();
    const closes = parts[1]?.trim();
    const dayOfWeek = dayKey.charAt(0).toUpperCase() + dayKey.slice(1);
    return {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek,
      opens,
      closes,
    };
  });

  const renderStars = (rating: number, size: 'sm' | 'md' = 'md') => {
    const starSize = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${starSize} ${
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

  const formatAddress = () => {
    return `${business.address}, ${business.city}, ${business.state} ${business.zip_code}`;
  };

  const generateMapUrl = () => {
    const address = encodeURIComponent(formatAddress());
    return `https://www.google.com/maps/search/?api=1&query=${address}`;
  };

  const claimHref = `/business/claim/?listing=${encodeURIComponent(`https://nearbybizfinder.com/business/${business.id}/`)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb and LocalBusiness JSON-LD */}
      <Script id="ld-json-breadcrumb" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbybizfinder.com/' },
            { '@type': 'ListItem', position: 2, name: business.category, item: `https://nearbybizfinder.com/search/?category=${encodeURIComponent(business.category.toLowerCase().replace(/\s+/g, '-'))}` },
            { '@type': 'ListItem', position: 3, name: business.name, item: `https://nearbybizfinder.com/business/${business.id}/` },
          ],
        })}
      </Script>
      <Script id="ld-json-localbusiness" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': `https://nearbybizfinder.com/business/${business.id}/#localbusiness`,
          name: business.name,
          image: business.featured_image || business.images?.[0],
          url: `https://nearbybizfinder.com/business/${business.id}/`,
          telephone: business.phone,
          priceRange: business.price_range,
          address: {
            '@type': 'PostalAddress',
            streetAddress: business.address,
            addressLocality: business.city,
            addressRegion: business.state,
            postalCode: business.zip_code,
            addressCountry: 'US',
          },
          geo: business.latitude && business.longitude ? {
            '@type': 'GeoCoordinates',
            latitude: business.latitude,
            longitude: business.longitude,
          } : undefined,
          openingHoursSpecification: openingHoursSpec,
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: business.rating,
            reviewCount: business.review_count,
          },
          areaServed: 'US',
        })}
      </Script>
      {/* Header Image */}
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src={business.featured_image || business.images[0]}
          alt={business.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <Link href="/search/">
            <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Search
            </Button>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-6 right-6 z-10 flex space-x-2">
          <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Business Info Overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {business.name}
                  </h1>
                  <Badge className={getPriceRangeColor(business.price_range)}>
                    {business.price_range}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 mb-2">
                  <div className="flex items-center space-x-1">
                    {renderStars(business.rating)}
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    {business.rating}
                  </span>
                  <span className="text-gray-500">
                    ({business.review_count} reviews)
                  </span>
                </div>
                <Badge variant="secondary">{business.category}</Badge>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                {business.website && (
                  <Button variant="outline" size="lg">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About This Business</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {business.description}
                </p>
              </CardContent>
            </Card>

            {/* Amenities */}
            {business.amenities && business.amenities.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Amenities & Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {business.amenities.map((amenity: string, index: number) => (
                      <Badge key={index} variant="outline">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Hours of Operation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(business.hours as Record<string, string>).map(([day, hoursValue]) => (
                    <div key={day} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium capitalize text-gray-900">
                        {day}
                      </span>
                      <span className="text-gray-600">
                        {hoursValue}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Photos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-5 w-5" />
                  <span>Photos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {business.images.map((image: string, index: number) => (
                    <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${business.name} photo ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-200 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>Customer Reviews</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">Reviews feature coming soon</p>
                  <Button variant="outline">
                    Write a Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Address</p>
                    <p className="font-medium text-gray-900">
                      {formatAddress()}
                    </p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-blue-600 hover:text-blue-700"
                      asChild
                    >
                      <Link href={generateMapUrl()} target="_blank" rel="noopener noreferrer">
                        <Navigation className="h-4 w-4 mr-1" />
                        Get Directions
                      </Link>
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-medium text-gray-900">
                      {business.phone}
                    </p>
                  </div>
                </div>

                {business.website && (
                  <>
                    <Separator />
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Website</p>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-blue-600 hover:text-blue-700"
                          asChild
                        >
                          <Link href={business.website} target="_blank" rel="noopener noreferrer">
                            Visit Website
                            <ExternalLink className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </>
                )}

                {business.email && (
                  <>
                    <Separator />
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-blue-600 hover:text-blue-700"
                          asChild
                        >
                          <Link href={`mailto:${business.email}`}>
                            {business.email}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </>
                )}

                <Separator />
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Are you the owner?</p>
                  <Link href={claimHref}>
                    <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                      Claim this business
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Interactive map coming soon</p>
                  </div>
                </div>
                <Button 
                  className="w-full mt-4" 
                  variant="outline"
                  asChild
                >
                  <Link href={generateMapUrl()} target="_blank" rel="noopener noreferrer">
                    <Navigation className="h-4 w-4 mr-2" />
                    View on Google Maps
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}