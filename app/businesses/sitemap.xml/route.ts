import { generateSitemapXml, getBusinessManifest, type SitemapUrl } from '@/lib/sitemap-utils';

export async function GET() {
  const currentDate = new Date().toISOString();
  const manifest = getBusinessManifest();
  const urls: SitemapUrl[] = [];
  
  for (const [businessSlug, locationSlugs] of Object.entries(manifest)) {
    urls.push({
      url: `https://nearbybizfinder.com/businesses/${businessSlug}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
    for (const locationSlug of locationSlugs) {
      urls.push({
        url: `https://nearbybizfinder.com/businesses/${businessSlug}/${locationSlug}/`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  }
  
  const sitemap = generateSitemapXml(urls);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
    },
  });
}