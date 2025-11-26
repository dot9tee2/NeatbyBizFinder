export async function GET() {
  const robotsTxt = `User-agent: *
Disallow: /admin/
Disallow: /businesses/admin/
Disallow: /business/
Disallow: /b/
Disallow: /categories/

Sitemap: https://nearbybizfinder.com/sitemap-index.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
