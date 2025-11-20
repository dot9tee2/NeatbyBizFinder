import type { Metadata } from 'next';
import { Suspense } from 'react';
import SearchPageContent from './search-content';

export const metadata: Metadata = {
  title: 'Search Local Businesses | NearbyBizFinder',
  description: 'Search and filter local businesses by category, rating, price, and distance. Discover top-rated places near you.',
  alternates: { canonical: '/search/' },
  openGraph: { title: 'Search Local Businesses', description: 'Filter local businesses and find the best options near you.' },
  twitter: { card: 'summary', title: 'Search Local Businesses', description: 'Filter local businesses and find the best options near you.' },
};

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading search results...</p>
        </div>
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  );
}