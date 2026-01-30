import { MetadataRoute } from 'next';
import { sanityFetch } from '@/lib/sanity.fetch';
import { postsQuery, Post } from '@/lib/sanity.queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://nearbybizfinder.com';

    // Fetch all blog posts
    const posts = await sanityFetch<Post[]>({ query: postsQuery });

    const blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: post.publishedAt || new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Static routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/terms',
        '/privacy',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return [...routes, ...blogUrls];
}
