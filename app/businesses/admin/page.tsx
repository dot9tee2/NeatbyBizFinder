import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getBusinessData } from '@/lib/business-landing-data';
import { discoverBusinessPages } from '@/lib/sitemap-utils';
import AdminBusinessList from '@/components/business/admin-business-list';

export default async function BusinessAdminPage() {
  const { businesses, locations } = await discoverBusinessPages();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Landing Pages</h1>
            <p className="text-gray-600">Manage your business landing pages and locations</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{businesses.length}</div>
                  <div className="text-sm text-gray-600">Total Businesses</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {businesses.reduce((total, business) => total + (locations[business]?.length || 0), 0)}
                  </div>
                  <div className="text-sm text-gray-600">Total Locations</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {businesses.length + businesses.reduce((total, business) => total + (locations[business]?.length || 0), 0)}
                  </div>
                  <div className="text-sm text-gray-600">Total Landing Pages</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business List (view-only) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Businesses</h2>
            </div>

            <AdminBusinessList
              items={businesses.map((slug) => ({
                slug,
                name: getBusinessData(slug)?.name || slug.replace(/-/g, ' '),
                locations: locations[slug] || [],
              }))}
            />
          </div>

          {/* Instructions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>How to Add New Businesses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">1. Create Business Folder</h4>
                  <p>Create a new folder in <code className="bg-gray-100 px-2 py-1 rounded">app/businesses/</code> with your business slug (e.g., <code className="bg-gray-100 px-2 py-1 rounded">my-business-name</code>)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">2. Create Main Page</h4>
                  <p>Create a <code className="bg-gray-100 px-2 py-1 rounded">page.tsx</code> file in the business folder with your business data</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3. Add Locations (Optional)</h4>
                  <p>For multiple locations, create subfolders with location names and their own <code className="bg-gray-100 px-2 py-1 rounded">page.tsx</code> files</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">4. Update Data</h4>
                  <p>Add your business data to <code className="bg-gray-100 px-2 py-1 rounded">lib/business-landing-data.ts</code> for centralized management</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
