import { generateBusinessSitemapFromFS, generateSitemapXml } from '@/lib/sitemap-utils';

export async function GET() {
  try {
    // Use file system discovery for more reliable sitemap generation
    const urls = await generateBusinessSitemapFromFS();
    
    const sitemap = generateSitemapXml(urls);

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error generating business sitemap:', error);
    
    // Fallback to empty sitemap on error
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;

    return new Response(fallbackSitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
}