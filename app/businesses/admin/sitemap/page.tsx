import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { discoverBusinessPages } from '@/lib/sitemap-utils';
import { ExternalLink, RefreshCw, CheckCircle, AlertTriangle, FileText, Globe } from 'lucide-react';
import Link from 'next/link';

export default async function SitemapAdminPage() {
  const { businesses, locations } = await discoverBusinessPages();
  
  // Calculate sitemap statistics
  const businessPages = businesses.length;
  const locationPages = Object.values(locations).flat().length;
  const totalPages = businessPages + locationPages;
  
  const sitemaps = [
    {
      name: 'Main Sitemap',
      url: '/sitemap.xml',
      description: 'Core site pages, categories, and main navigation',
      pages: '~20 pages',
      status: 'active',
      lastUpdated: new Date().toISOString(),
    },
    {
      name: 'Business Landing Pages',
      url: '/businesses/sitemap.xml',
      description: 'All business landing pages and location-specific pages',
      pages: `${totalPages} pages`,
      status: 'active',
      lastUpdated: new Date().toISOString(),
    },
    {
      name: 'Sitemap Index',
      url: '/sitemap-index.xml',
      description: 'Master sitemap index referencing all other sitemaps',
      pages: '2 sitemaps',
      status: 'active',
      lastUpdated: new Date().toISOString(),
    },
  ];

  const businessStats = businesses.map(business => {
    const businessLocations = locations[business] || [];
    return {
      name: business,
      mainPage: true,
      locationPages: businessLocations.length,
      totalPages: 1 + businessLocations.length,
    };
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Sitemap Management</h1>
            <p className="text-gray-600">Monitor and manage your sitemaps for optimal SEO performance</p>
          </div>

          {/* Sitemap Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{totalPages}</div>
                  <div className="text-sm text-gray-600">Total Landing Pages</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{businessPages}</div>
                  <div className="text-sm text-gray-600">Business Pages</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{locationPages}</div>
                  <div className="text-sm text-gray-600">Location Pages</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sitemap Status */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Sitemap Status</h2>
            <div className="grid gap-4">
              {sitemaps.map((sitemap, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{sitemap.name}</h3>
                          <p className="text-gray-600 text-sm">{sitemap.description}</p>
                          <p className="text-gray-500 text-sm">{sitemap.pages}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {sitemap.status}
                        </Badge>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={sitemap.url} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Business Breakdown */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Business Landing Pages</h2>
            <Card>
              <CardHeader>
                <CardTitle>Pages by Business</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {businessStats.map((business, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Globe className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 capitalize">
                            {business.name.replace(/-/g, ' ')}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {business.mainPage ? '1 main page' : '0 main pages'}
                            {business.locationPages > 0 && `, ${business.locationPages} location pages`}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">
                          {business.totalPages}
                        </div>
                        <div className="text-sm text-gray-500">total pages</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* SEO Recommendations */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">SEO Recommendations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Best Practices</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✅ Sitemaps are properly separated</li>
                    <li>✅ Business pages have appropriate priorities</li>
                    <li>✅ Location pages are properly indexed</li>
                    <li>✅ Change frequencies are set correctly</li>
                    <li>✅ Last modified dates are current</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <span>Monitoring</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>📊 Monitor indexing status in Google Search Console</li>
                    <li>🔄 Update sitemaps when adding new businesses</li>
                    <li>📈 Track page performance and rankings</li>
                    <li>🔍 Check for crawl errors regularly</li>
                    <li>📝 Update last modified dates when content changes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/sitemap-index.xml" target="_blank">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Sitemap Index
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/sitemap.xml" target="_blank">
                <FileText className="h-4 w-4 mr-2" />
                View Main Sitemap
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/businesses/sitemap.xml" target="_blank">
                <Globe className="h-4 w-4 mr-2" />
                View Business Sitemap
              </Link>
            </Button>
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh Stats
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
