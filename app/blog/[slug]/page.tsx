import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { sanityFetch } from '@/lib/sanity.fetch';
import { postBySlugQuery, relatedPostsQuery, Post } from '@/lib/sanity.queries';
import { urlForImage } from '@/lib/sanity.image';
import { Calendar, User, ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialShare from '@/components/blog/social-share';

export const revalidate = 3600;

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    let post: Post | null = null;

    try {
        post = await sanityFetch<Post>({ query: postBySlugQuery, params: { slug } });
    } catch (error) {
        console.error("Failed to fetch post for metadata:", error);
        return {
            title: 'Error Loading Post',
            description: 'Please check your connection and try again.'
        };
    }

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    const { title, excerpt, mainImage, seo } = post;

    const metaTitle = seo?.metaTitle || `${title} | NearbyBizFinder`;
    const metaDescription = seo?.metaDescription || excerpt || title;
    const ogImage = seo?.ogImage ? urlForImage(seo.ogImage).url() : (mainImage ? urlForImage(mainImage).url() : undefined);

    return {
        title: metaTitle,
        description: metaDescription,
        alternates: {
            canonical: `/blog/${slug}`,
        },
        openGraph: {
            title: seo?.ogTitle || metaTitle,
            description: seo?.ogDescription || metaDescription,
            images: ogImage ? [ogImage] : [],
            type: 'article',
            publishedTime: post.publishedAt,
        },
    };
}

/* ── PortableText custom renderers ── */
const portableTextComponents: PortableTextComponents = {
    types: {
        image: ({ value }) => (
            <figure className="my-8">
                <div className="relative w-full h-96 rounded-xl overflow-hidden">
                    <Image
                        src={urlForImage(value).width(1200).url()}
                        alt={value.alt || 'Blog Post Image'}
                        fill
                        sizes="(max-width: 768px) 100vw, 768px"
                        className="object-cover"
                    />
                </div>
                {value.caption && (
                    <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                        {value.caption}
                    </figcaption>
                )}
            </figure>
        ),
    },
    block: {
        h1: ({ children }) => (
            <h2 className="text-3xl font-bold mt-10 mb-4">{children}</h2>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 bg-blue-50/50 pl-6 pr-4 py-4 my-6 rounded-r-lg text-gray-700 italic">
                {children}
            </blockquote>
        ),
    },
    marks: {
        link: ({ children, value }) => {
            const isExternal = value?.href?.startsWith('http');
            return (
                <a
                    href={value?.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors"
                >
                    {children}
                </a>
            );
        },
        code: ({ children }) => (
            <code className="bg-gray-100 text-pink-600 px-1.5 py-0.5 rounded text-sm font-mono">
                {children}
            </code>
        ),
    },
};

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    let post: Post | null = null;

    try {
        post = await sanityFetch<Post>({ query: postBySlugQuery, params: { slug } });
    } catch (error) {
        console.error("Failed to fetch post content:", error);
    }

    if (!post) {
        notFound();
    }

    const { title, excerpt, mainImage, seo } = post;

    const metaTitle = seo?.metaTitle || `${title} | NearbyBizFinder`;
    const metaDescription = seo?.metaDescription || excerpt || title;
    const ogImage = seo?.ogImage ? urlForImage(seo.ogImage).url() : (mainImage ? urlForImage(mainImage).url() : undefined);
    const postUrl = `https://nearbybizfinder.com/blog/${slug}`;

    /* ── Fetch related posts ── */
    const categoryIds = post.categories?.map((c) => c._id) || [];
    let relatedPosts: Post[] = [];
    if (categoryIds.length > 0) {
        try {
            relatedPosts = await sanityFetch<Post[]>({
                query: relatedPostsQuery,
                params: { slug, categoryIds },
            });
        } catch {
            // If categories don't exist, skip related posts
        }
    }

    /* ── Structured Data — Article ── */
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: metaTitle,
        description: metaDescription,
        image: ogImage ? [ogImage] : [],
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': postUrl,
        },
        author: post.author
            ? {
                '@type': 'Person',
                name: post.author.name,
            }
            : undefined,
        publisher: {
            '@type': 'Organization',
            name: 'NearbyBizFinder',
            logo: {
                '@type': 'ImageObject',
                url: 'https://nearbybizfinder.com/logo.png',
            },
        },
    };

    /* ── Structured Data — BreadcrumbList ── */
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://nearbybizfinder.com',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://nearbybizfinder.com/blog',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: title,
                item: postUrl,
            },
        ],
    };

    return (
        <article className="min-h-screen bg-white pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            {/* Header/Hero */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    <Link href="/blog" className="inline-block mb-8">
                        <Button variant="ghost" size="sm" className="pl-0 text-gray-500 hover:text-blue-600">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Blog
                        </Button>
                    </Link>

                    <div className="max-w-4xl mx-auto text-center">
                        {/* Category badges */}
                        {post.categories && post.categories.length > 0 && (
                            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                                {post.categories.map((cat) => (
                                    <span
                                        key={cat._id}
                                        className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                                    >
                                        {cat.title}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Meta */}
                        <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-6 flex-wrap">
                            {post.publishedAt && (
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-blue-500" />
                                    <time dateTime={post.publishedAt}>
                                        {new Date(post.publishedAt).toLocaleDateString(undefined, {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </time>
                                </div>
                            )}
                            {post.author && (
                                <div className="flex items-center gap-2">
                                    <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gray-200">
                                        {post.author.image && (
                                            <Image
                                                src={urlForImage(post.author.image).width(48).url()}
                                                alt={post.author.name}
                                                fill
                                                sizes="24px"
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                    <span>{post.author.name}</span>
                                </div>
                            )}
                            {post.estimatedReadingTime != null && post.estimatedReadingTime > 0 && (
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-blue-500" />
                                    <span>{post.estimatedReadingTime} min read</span>
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
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-12">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={urlForImage(post.mainImage).width(1400).url()}
                            alt={post.title}
                            fill
                            sizes="(max-width: 1280px) 100vw, 1280px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="prose prose-lg prose-blue max-w-none">
                    {post.body ? (
                        <PortableText
                            value={post.body}
                            components={portableTextComponents}
                        />
                    ) : (
                        <p className="text-gray-500 italic">No content available for this post.</p>
                    )}
                </div>

                {/* Social Share */}
                <div className="mt-12 pt-8 border-t">
                    <SocialShare
                        url={postUrl}
                        title={post.title}
                        description={excerpt}
                    />
                </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {relatedPosts.map((related) => (
                            <Link
                                key={related._id}
                                href={`/blog/${related.slug.current}`}
                                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                            >
                                <div className="relative aspect-video overflow-hidden bg-gray-100">
                                    {related.mainImage ? (
                                        <Image
                                            src={urlForImage(related.mainImage).width(600).url()}
                                            alt={related.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                                            <span className="text-sm">No Image</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-5">
                                    {related.publishedAt && (
                                        <p className="text-xs text-gray-400 mb-2">
                                            {new Date(related.publishedAt).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </p>
                                    )}
                                    <h3 className="text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        {related.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">{related.excerpt}</p>
                                    <div className="mt-3 text-sm text-blue-600 font-medium flex items-center gap-1">
                                        Read more <ArrowRight className="h-3.5 w-3.5" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </article>
    );
}
