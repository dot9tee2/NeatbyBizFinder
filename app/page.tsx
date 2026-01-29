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
  title: 'NearbyBizFinder Blog | Local Business Insights',
  description: 'Discover the latest news, tips, and stories about local businesses and small business growth.',
};

export default async function HomePage() {
  const posts = await sanityFetch<Post[]>({ query: postsQuery });

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <section className="relative bg-white border-b overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Insights & Stories from <span className="text-blue-600">Local Businesses</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover hidden gems, success stories, and expert tips from small business owners across the country.
            </p>
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