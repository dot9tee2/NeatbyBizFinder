import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import CategoryBrowse from '@/components/home/CategoryBrowse';
import FeaturedBusinesses from '@/components/home/FeaturedBusinesses';
import HowItWorks from '@/components/home/HowItWorks';
import BlogFeed from '@/components/home/BlogFeed';

export const metadata: Metadata = {
  title: 'NearbyBizFinder - Find Local Businesses & Services Near You',
  description: 'Find and connect with top-rated local businesses, home services, and professionals in your area. Read reviews, compare ratings, and get quotes.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Hero />
      <CategoryBrowse />
      <FeaturedBusinesses />
      <HowItWorks />
      <BlogFeed />
    </div>
  );
}