import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Business Support | NearbyBizFinder',
  description: 'Get help with your NearbyBizFinder listing, claims, updates, and advertising questions.',
  robots: 'index, follow',
  alternates: { canonical: '/business/support/' },
  openGraph: {
    type: 'website',
    url: 'https://nearbybizfinder.com/business/support/',
    title: 'Business Support | NearbyBizFinder',
    description: 'Help with claims, updates, removals, and general questions.',
    images: [{ url: '/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Support | NearbyBizFinder',
    description: 'Help with claims, updates, removals, and general questions.',
    images: ['/logo.png'],
  },
};

export default function BusinessSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Script id="ld-json-breadcrumb-support" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbybizfinder.com/' },
              { '@type': 'ListItem', position: 2, name: 'For Businesses', item: 'https://nearbybizfinder.com/business/support/' },
            ],
          })}
        </Script>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Business Support</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          We’re here to help you manage your NearbyBizFinder presence. Explore common support topics below
          or reach out and we’ll get back to you soon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Claim Your Business</CardTitle>
              <CardDescription>Verify ownership to update your listing.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/business/claim/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Start a claim</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Add a New Listing</CardTitle>
              <CardDescription>Not listed yet? Add your business.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/business/new/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Add your business</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Update Business Details</CardTitle>
              <CardDescription>Changed hours or contact info?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">If you already claimed your listing, send us update requests.</p>
              <a href="mailto:info@nearbybizfinder.com" className="text-blue-600 hover:underline text-sm">Email support</a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Remove a Listing</CardTitle>
              <CardDescription>Business permanently closed?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">Tell us the details and we’ll review the request.</p>
              <a href="mailto:info@nearbybizfinder.com?subject=Remove%20listing" className="text-blue-600 hover:underline text-sm">Request removal</a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Report an Issue</CardTitle>
              <CardDescription>See inaccurate information?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">Share a link and describe the problem so we can fix it quickly.</p>
              <a href="mailto:info@nearbybizfinder.com?subject=Report%20issue" className="text-blue-600 hover:underline text-sm">Report an issue</a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>General Questions</CardTitle>
              <CardDescription>Need help choosing the right category?</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/contact/">
                <Button variant="outline">Contact us</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
