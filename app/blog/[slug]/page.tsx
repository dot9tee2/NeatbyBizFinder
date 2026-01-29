import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { sanityFetch } from '@/lib/sanity.fetch';
import { postBySlugQuery, Post } from '@/lib/sanity.queries';
import { urlForImage } from '@/lib/sanity.image';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await sanityFetch<Post>({ query: postBySlugQuery, params: { slug } });

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | NearbyBizFinder`,
        description: post.excerpt || post.title,
        openGraph: {
            images: post.mainImage ? [urlForImage(post.mainImage).url()] : [],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await sanityFetch<Post>({ query: postBySlugQuery, params: { slug } });

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-gray-50/50 pb-20">
            {/* Header/Hero */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    <Link href="/" className="inline-block mb-8">
                        <Button variant="ghost" size="sm" className="pl-0 text-gray-500 hover:text-blue-600">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Blog
                        </Button>
                    </Link>

                    <div className="max-w-4xl mx-auto text-center">
                        {/* Meta */}
                        <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-6">
                            {post.publishedAt && (
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-blue-500" />
                                    {new Date(post.publishedAt).toLocaleDateString(undefined, {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </div>
                            )}
                            {post.author && (
                                <div className="flex items-center gap-2">
                                    <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gray-200">
                                        {post.author.image && (
                                            <Image
                                                src={urlForImage(post.author.image).url()}
                                                alt={post.author.name}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                    <span>{post.author.name}</span>
                                </div>
                            )}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Main Image */}
            {post.mainImage && (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
                    <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={urlForImage(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border p-8 md:p-12">
                    <div className="prose prose-lg prose-blue max-w-none">
                        {post.body ? (
                            <PortableText
                                value={post.body}
                                components={{
                                    types: {
                                        image: ({ value }) => {
                                            return (
                                                <div className="relative w-full h-96 my-8 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={urlForImage(value).url()}
                                                        alt={value.alt || 'Blog Post Image'}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            );
                                        },
                                    },
                                }}
                            />
                        ) : (
                            <p className="text-gray-500 italic">No content available for this post.</p>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
