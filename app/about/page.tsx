import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About Us | NearbyBizFinder',
  description:
    'Learn about NearbyBizFinder’s mission to connect people with the best local businesses across the United States.',
  robots: 'index, follow',
  alternates: { canonical: '/about/' },
  openGraph: {
    type: 'website',
    url: 'https://nearbybizfinder.com/about/',
    title: 'About NearbyBizFinder',
    description: 'Our mission: connect people with the best local businesses across the U.S.',
    images: [{ url: '/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About NearbyBizFinder',
    description: 'Our mission: connect people with the best local businesses across the U.S.',
    images: ['/logo.png'],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Script id="ld-json-breadcrumb-about" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbybizfinder.com/' },
              { '@type': 'ListItem', position: 2, name: 'About', item: 'https://nearbybizfinder.com/about/' },
            ],
          })}
        </Script>
        <Script id="ld-json-aboutpage" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About NearbyBizFinder',
            url: 'https://nearbybizfinder.com/about/',
          })}
        </Script>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About NearbyBizFinder</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          NearbyBizFinder helps you discover and connect with great local businesses. From restaurants and
          coffee shops to trusted home services and healthcare providers, our goal is to make finding the right
          place simple, fast, and reliable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg border bg-white">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Built on Trust</h3>
            <p className="text-gray-600 text-sm">
              We surface accurate details, helpful categories, and signals users care about so you can choose
              with confidence.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-white">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Coverage</h3>
            <p className="text-gray-600 text-sm">
              We organize businesses into intuitive categories and neighborhoods to make browsing effortless.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-white">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Simple by Design</h3>
            <p className="text-gray-600 text-sm">
              Clean, fast, and focused experience—no clutter. Find what you need, then get on with your day.
            </p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Our Mission</h2>
          <p>
            Empower people to confidently choose local businesses that fit their needs. We believe local
            businesses are the backbone of communities, and better discovery helps them thrive.
          </p>

          <h2>What You Can Do</h2>
          <ul>
            <li>Browse curated categories to find inspiration</li>
            <li>Search by name, category, or neighborhood</li>
            <li>Add your own business to reach nearby customers</li>
          </ul>

          <h2>Get in Touch</h2>
          <p>
            Have feedback or a partnership idea? Reach us at <a href="mailto:info@nearbybizfinder.com">info@nearbybizfinder.com</a>.
          </p>
        </div>

        <div className="mt-12 border-t pt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Explore Popular Categories</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/categories/restaurants/" className="px-4 py-2 rounded-full border text-sm hover:bg-gray-50">
              Restaurants
            </Link>
            <Link href="/categories/home-services/" className="px-4 py-2 rounded-full border text-sm hover:bg-gray-50">
              Home Services
            </Link>
            <Link href="/categories/beauty-spas/" className="px-4 py-2 rounded-full border text-sm hover:bg-gray-50">
              Beauty & Spas
            </Link>
            <Link href="/categories/professional-services/" className="px-4 py-2 rounded-full border text-sm hover:bg-gray-50">
              Professional Services
            </Link>
            <Link href="/categories/" className="px-4 py-2 rounded-full border text-sm hover:bg-gray-50">
              Browse all categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
