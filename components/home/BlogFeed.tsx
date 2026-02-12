import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { sanityFetch } from '@/lib/sanity.fetch';
import { postsQuery, Post } from '@/lib/sanity.queries';
import { urlForImage } from '@/lib/sanity.image';

export default async function BlogFeed() {
    let posts: Post[] = [];

    try {
        posts = await sanityFetch<Post[]>({ query: postsQuery });
    } catch (error) {
        console.warn("Failed to fetch blog posts:", error);
        // Continue with empty posts, UI handles empty state
    }

    return (
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
    );
}
