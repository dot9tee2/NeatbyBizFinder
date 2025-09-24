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
