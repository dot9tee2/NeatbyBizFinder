export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://nearbybizfinder.com/sitemap-index.xml
Sitemap: https://nearbybizfinder.com/sitemap.xml
Sitemap: https://nearbybizfinder.com/businesses/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /businesses/admin/

# Allow business landing pages
Allow: /businesses/*/

# Explicitly allow NM Concrete Coating Pros landing pages
Allow: /businesses/nm-concrete-coating-pros/
Allow: /businesses/nm-concrete-coating-pros/santa-fe/
Allow: /businesses/nm-concrete-coating-pros/rio-rancho/
Allow: /businesses/nm-concrete-coating-pros/los-lunas/
Allow: /businesses/nm-concrete-coating-pros/edgewood/

# Allow search and categories
Allow: /search/
Allow: /categories/
Allow: /business/
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
