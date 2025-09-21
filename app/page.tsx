import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SearchForm from '@/components/search/search-form';
import BusinessList from '@/components/business/business-list';
import { mockBusinesses, businessCategories } from '@/lib/mock-data';
import { businesses as db } from '@/lib/supabase';
import { MapPin, Star, Users, Search, Shield, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NearbyBizFinder | Find Local Businesses Near You',
  description: 'Discover top-rated local restaurants, services, and shops near you. Browse categories, read reviews, and connect with nearby businesses across the United States.',
  robots: 'index, follow',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://nearbybizfinder.com/',
    title: 'NearbyBizFinder | Find Local Businesses Near You',
    description: 'Discover top-rated local restaurants, services, and shops near you.',
    images: [{ url: '/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NearbyBizFinder | Find Local Businesses Near You',
    description: 'Discover top-rated local restaurants, services, and shops near you.',
    images: ['/logo.png'],
  },
};

export default async function HomePage() {
  const { data, error } = await db.getAll();
  const list = (data && data.length && !error) ? data : mockBusinesses;

  // Get featured businesses (top-rated ones)
  const featuredBusinesses = [...list]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO: WebSite and LocalBusiness list (US) */}
      <Script id="ld-json-website" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'NearbyBizFinder',
          url: 'https://nearbybizfinder.com/',
          inLanguage: 'en-US',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://nearbybizfinder.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        })}
      </Script>
      <Script id="ld-json-itemlist" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: featuredBusinesses.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `https://nearbybizfinder.com/business/${b.id}/`,
            item: {
              '@type': 'LocalBusiness',
              name: b.name,
              image: b.featured_image || b.images?.[0],
              url: `https://nearbybizfinder.com/business/${b.id}/`,
              address: {
                '@type': 'PostalAddress',
                streetAddress: b.address,
                addressLocality: b.city,
                addressRegion: b.state,
                postalCode: b.zip_code,
                addressCountry: 'US',
              },
              telephone: b.phone,
              priceRange: b.price_range,
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: b.rating,
                reviewCount: b.review_count,
              },
            },
          })),
        })}
      </Script>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Amazing
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Local Businesses
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Find the best restaurants, shops, and services in your neighborhood. 
              Connect with local businesses and explore what&apos;s nearby.
            </p>
            
            {/* Search Form */}
            <div className="max-w-4xl mx-auto mb-12">
              <SearchForm />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">{list.length}+</div>
                <div className="text-sm text-blue-200">Local Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">4.8</div>
                <div className="text-sm text-blue-200">Avg Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">25k+</div>
                <div className="text-sm text-blue-200">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">8</div>
                <div className="text-sm text-blue-200">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse businesses by category to find exactly what you&apos;re looking for
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {businessCategories.map((category) => {
              const categoryCount = list.filter(b => b.category === category.name).length;
              
              return (
                <Link key={category.id} href={`/categories/${category.slug}/`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                        {category.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {categoryCount} businesses
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Businesses
              </h2>
              <p className="text-lg text-gray-600">
                Top-rated local businesses in your area
              </p>
            </div>
            <Link href="/search/">
              <Button variant="outline" size="lg">
                View All
              </Button>
            </Link>
          </div>

          <BusinessList businesses={featuredBusinesses} showPagination={false} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose NearbyBizFinder?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make it easy to discover and connect with the best local businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Easy Search
                </h3>
                <p className="text-gray-600">
                  Find businesses quickly with our powerful search and filtering tools
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Verified Reviews
                </h3>
                <p className="text-gray-600">
                  Read authentic reviews from real customers to make informed decisions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Local Focus
                </h3>
                <p className="text-gray-600">
                  Discover hidden gems and popular spots in your neighborhood
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Real-time Info
                </h3>
                <p className="text-gray-600">
                  Get up-to-date hours, contact info, and availability
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Community Driven
                </h3>
                <p className="text-gray-600">
                  Join a community of local business enthusiasts and supporters
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Trusted Platform
                </h3>
                <p className="text-gray-600">
                  Secure, reliable platform trusted by thousands of users
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Discover Amazing Local Businesses?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Start exploring your neighborhood today and find your next favorite spot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search/">
              <Button size="lg" variant="secondary" className="text-blue-700">
                <Search className="h-5 w-5 mr-2" />
                Start Exploring
              </Button>
            </Link>
            <Link href="/auth/signup/">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-700">
                Sign Up Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}