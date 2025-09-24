import { getAllBusinesses, getBusinessLocations, getBusinessData, getLocationData } from '@/lib/business-landing-data';

export async function GET() {
  const businesses = getAllBusinesses();
  
  // Generate business main pages
  const businessUrls = businesses.map(businessSlug => {
    const business = getBusinessData(businessSlug);
    return {
      url: `https://nearbybizfinder.com/businesses/${businessSlug}/`,
      lastModified: business ? new Date(business.updated_at || Date.now()).toISOString() : new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  // Generate location-specific pages
  const locationUrls = businesses.flatMap(businessSlug => {
    const locations = getBusinessLocations(businessSlug);
    return locations.map(locationSlug => {
      const location = getLocationData(businessSlug, locationSlug);
      return {
        url: `https://nearbybizfinder.com/businesses/${businessSlug}/${locationSlug}/`,
        lastModified: location ? new Date(location.updated_at || Date.now()).toISOString() : new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      };
    });
  });

  const allUrls = [...businessUrls, ...locationUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(url => `
  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}