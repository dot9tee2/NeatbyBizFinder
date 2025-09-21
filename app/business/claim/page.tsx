import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Claim Your Business | NearbyBizFinder',
  description: 'Claim your NearbyBizFinder business listing to update details and reach more local customers.',
  robots: 'index, follow',
  alternates: { canonical: '/business/claim/' },
  openGraph: {
    type: 'website',
    url: 'https://nearbybizfinder.com/business/claim/',
    title: 'Claim Your Business | NearbyBizFinder',
    description: 'Verify ownership of your business listing to keep details accurate.',
    images: [{ url: '/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claim Your Business | NearbyBizFinder',
    description: 'Verify ownership of your business listing to keep details accurate.',
    images: ['/logo.png'],
  },
};

export default async function ClaimBusinessPage({ searchParams }: { searchParams?: Promise<{ listing?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const listingUrl = (resolvedSearchParams?.listing || '').toString();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Script id="ld-json-breadcrumb-claim" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbybizfinder.com/' },
              { '@type': 'ListItem', position: 2, name: 'For Businesses', item: 'https://nearbybizfinder.com/business/support/' },
              { '@type': 'ListItem', position: 3, name: 'Claim Your Business', item: 'https://nearbybizfinder.com/business/claim/' },
            ],
          })}
        </Script>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Claim Your Business</CardTitle>
                <CardDescription>Verify ownership and manage your listing.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action="mailto:info@nearbybizfinder.com" method="post" encType="text/plain" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                      <Input name="business_name" placeholder="The Garden Bistro" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <Input name="owner_name" placeholder="Jane Doe" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business Phone</label>
                      <Input name="business_phone" placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business Address</label>
                      <Input name="business_address" placeholder="123 Main St, City, ST" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input name="email" type="email" placeholder="you@example.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Listing URL (if known)</label>
                      <Input name="listing_url" type="url" placeholder="https://nearbybizfinder.com/business/123/" defaultValue={listingUrl} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Proof of Ownership</label>
                    <Textarea name="proof" placeholder="Provide a brief note about your ownership (e.g., business email domain, utility bill, etc.)." rows={4} />
                  </div>
                  <div className="flex items-center justify-end gap-3">
                    <Link href="/search/" className="text-sm text-gray-600 hover:text-gray-900">Cancel</Link>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Submit Claim</Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Don’t see your business?</CardTitle>
                <CardDescription>Add a new listing to get discovered by nearby customers.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/business/new/">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Add Your Business</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Why claim?</CardTitle>
                <CardDescription>Benefits of verifying your listing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                  <li>Update hours, contact info, and website</li>
                  <li>Add photos and amenities to showcase your business</li>
                  <li>Improve accuracy so customers can trust your details</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
