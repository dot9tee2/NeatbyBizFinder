import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { sanityFetch } from '@/lib/sanity.fetch';
import { postsQuery, Post } from '@/lib/sanity.queries';
import { urlForImage } from '@/lib/sanity.image';

export const metadata: Metadata = {
  title: 'NearbyBizFinder - Find Local Businesses & Services Near You',
  description: 'Find and connect with top-rated local businesses, home services, and professionals in your area. Read reviews, compare ratings, and get quotes.',
};

export default async function HomePage() {
  const posts = await sanityFetch<Post[]>({ query: postsQuery });

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      {/* Premium Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          {/* Overlays for depth and readability */}
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900"></div>
        </div>

        {/* Animated Glow Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-300">Connecting Communities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white font-display leading-tight">
              Discover Local <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Excellence</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Your trusted directory for the best home services, contractors, and hidden gems in your neighborhood.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/businesses/american-gutter-guards" className="w-full sm:w-auto">
                <Button size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] transition-all duration-300 w-full sm:w-auto text-lg">
                  Browse Professionals
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto text-lg transition-all">
                Read Our Blog
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-12 flex items-center justify-center gap-8 text-gray-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gray-500"></span>
                Verified Businesses
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gray-500"></span>
                Real Reviews
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gray-500"></span>
                Local Experts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Businesses Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Local Businesses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Highly rated professionals ready to help with your next project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Featured 1: American Gutter Guards */}
            <Link href="/businesses/american-gutter-guards" className="group block h-full">
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-100 group-hover:border-blue-200">
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/american-gutter-guards/hero.png" // Assuming this exists from previous steps
                    alt="American Gutter Guards"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">American Gutter Guards</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <span className="text-yellow-500 font-bold">★ 4.9</span> (10+ Reviews)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    Expert gutter guard installation and cleaning services in Chesapeake, VA.
                  </p>
                </CardContent>
                <CardFooter className="text-blue-600 text-sm font-medium mt-auto group-hover:underline">
                  View Services <ArrowRight className="ml-1 h-3 w-3" />
                </CardFooter>
              </Card>
            </Link>

            {/* Featured 2: NM Concrete Coating */}
            <Link href="/businesses/nm-concrete-coating-pros" className="group block h-full">
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-100 group-hover:border-blue-200">
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white font-bold text-2xl">
                    NM
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">NM Concrete Coating Pros</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <span className="text-yellow-500 font-bold">★ 5.0</span> (Verified)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    Premium concrete floor coatings for garages, patios, and commercial spaces.
                  </p>
                </CardContent>
                <CardFooter className="text-blue-600 text-sm font-medium mt-auto group-hover:underline">
                  View Services <ArrowRight className="ml-1 h-3 w-3" />
                </CardFooter>
              </Card>
            </Link>

            {/* Featured 3: RC Solutions */}
            <Link href="/businesses/rc-solutions" className="group block h-full">
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-100 group-hover:border-blue-200">
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center text-white font-bold text-2xl">
                    RC
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">RC Solutions</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <span className="text-yellow-500 font-bold">★ 4.8</span> (Verified)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    Professional roofing and exterior renovation solutions for your home.
                  </p>
                </CardContent>
                <CardFooter className="text-blue-600 text-sm font-medium mt-auto group-hover:underline">
                  View Services <ArrowRight className="ml-1 h-3 w-3" />
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`} className="group block h-full">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-gray-200 group-hover:border-blue-200">
                    <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                      {post.mainImage ? (
                        <Image
                          src={urlForImage(post.mainImage).url()}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                          <span className="text-sm">No image</span>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                        {post.publishedAt && (
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </div>
                        )}
                        {post.author && (
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author.name}
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {post.excerpt || 'Read more about this topic...'}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0 mt-auto">
                      <span className="text-blue-600 text-sm font-medium flex items-center group-hover:underline">
                        Read Article <ArrowRight className="ml-1 h-3 w-3" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
              <div className="max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts yet</h3>
                <p className="text-gray-500 mb-6">
                  Check back soon for the latest stories and updates from our local business community.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}