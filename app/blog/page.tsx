import Link from 'next/link';
import Image from 'next/image';
import { sanityFetch } from '@/lib/sanity.fetch';
import { postsQuery, Post } from '@/lib/sanity.queries';
import { urlForImage } from '@/lib/sanity.image';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | NearbyBizFinder - Local Business Insights',
    description: 'Latest news, tips, and insights for finding and supporting local businesses.',
};

export default async function BlogIndexPage() {
    const posts = await sanityFetch<Post[]>({ query: postsQuery });

    return (
        <main className="min-h-screen bg-gray-50/50 pb-20">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-24 overflow-hidden bg-slate-900 border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black opacity-80"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        <BookOpen className="w-4 h-4" />
                        <span>Insights & Tips</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Blog</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Discover the latest insights, tips, and news about local businesses and home services.
                    </p>
                </div>
            </section>

            {/* Posts Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article
                                key={post._id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col"
                            >
                                {/* Image */}
                                <Link href={`/blog/${post.slug.current}`} className="block relative aspect-video overflow-hidden bg-gray-100 group">
                                    {post.mainImage ? (
                                        <Image
                                            src={urlForImage(post.mainImage).url()}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                                            <span className="text-sm">No Image</span>
                                        </div>
                                    )}
                                </Link>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium">
                                        {post.publishedAt && (
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="h-3.5 w-3.5 text-blue-500" />
                                                <time dateTime={post.publishedAt}>
                                                    {new Date(post.publishedAt).toLocaleDateString(undefined, {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </time>
                                            </div>
                                        )}
                                        {post.author && (
                                            <div className="flex items-center gap-1.5">
                                                <User className="h-3.5 w-3.5 text-blue-500" />
                                                <span>{post.author.name}</span>
                                            </div>
                                        )}
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        <Link href={`/blog/${post.slug.current}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                                        {post.excerpt}
                                    </p>

                                    <Link href={`/blog/${post.slug.current}`} className="mt-auto">
                                        <Button variant="outline" className="w-full group">
                                            Read Article
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed">
                        <p className="text-gray-500 text-lg">No posts found yet. Check back soon!</p>
                    </div>
                )}
            </div>
        </main>
    );
}
