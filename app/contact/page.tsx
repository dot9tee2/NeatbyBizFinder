import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const metadata: Metadata = {
  title: 'Contact Us | NearbyBizFinder',
  description:
    'Contact NearbyBizFinder for support, feedback, and partnership inquiries. We would love to hear from you.',
  robots: 'index, follow',
  alternates: { canonical: '/contact/' },
  openGraph: {
    type: 'website',
    url: 'https://nearbybizfinder.com/contact/',
    title: 'Contact NearbyBizFinder',
    description: 'Get in touch with the NearbyBizFinder team for support and feedback.',
    images: [{ url: '/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact NearbyBizFinder',
    description: 'Get in touch with the NearbyBizFinder team for support and feedback.',
    images: ['/logo.png'],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Script id="ld-json-breadcrumb-contact" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbybizfinder.com/' },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://nearbybizfinder.com/contact/' },
            ],
          })}
        </Script>
        <Script id="ld-json-contactpage" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact NearbyBizFinder',
            url: 'https://nearbybizfinder.com/contact/',
            contactPoint: [{
              '@type': 'ContactPoint',
              email: 'info@nearbybizfinder.com',
              telephone: '+1-555-123-4567',
              contactType: 'customer support',
              areaServed: 'US',
              availableLanguage: ['English'],
            }],
          })}
        </Script>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Questions, feedback, or partnership ideas? Send us a message using the form below or reach us directly
          by email or phone and we’ll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-6 rounded-lg border bg-white">
            <form action="mailto:info@nearbybizfinder.com" method="post" encType="text/plain">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <Input name="name" placeholder="Jane Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input name="subject" placeholder="How can we help?" />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea name="message" placeholder="Write your message..." rows={6} required />
              </div>
              <div className="mt-6">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg border bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm mb-3">General inquiries</p>
              <a href="mailto:info@nearbybizfinder.com" className="text-blue-600 hover:underline text-sm">
                info@nearbybizfinder.com
              </a>
            </div>
            <div className="p-6 rounded-lg border bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm mb-3">Mon–Fri, 9am–5pm PT</p>
              <a href="tel:+15551234567" className="text-blue-600 hover:underline text-sm">
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Keep Exploring</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/categories/restaurants/" className="px-4 py-2 rounded-full border text-sm bg-white hover:bg-gray-50">
              Restaurants near you
            </Link>
            <Link href="/categories/home-services/" className="px-4 py-2 rounded-full border text-sm bg-white hover:bg-gray-50">
              Home services near you
            </Link>
            <Link href="/categories/automotive/" className="px-4 py-2 rounded-full border text-sm bg-white hover:bg-gray-50">
              Automotive services
            </Link>
            <Link href="/categories/" className="px-4 py-2 rounded-full border text-sm bg-white hover:bg-gray-50">
              Browse all categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
