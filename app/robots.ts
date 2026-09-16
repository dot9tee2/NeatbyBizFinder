import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://nearbybizfinder.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/', '/api/', '/auth/'],
    },
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/businesses/sitemap.xml`],
    host: baseUrl,
  };
}
