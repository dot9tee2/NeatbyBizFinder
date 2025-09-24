import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Building, MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { getAllBusinesses, getBusinessLocations } from '@/lib/business-landing-data';

export default function BusinessAdminPage() {
  const businesses = getAllBusinesses();

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
                    {businesses.reduce((total, business) => total + getBusinessLocations(business).length, 0)}
                  </div>
                  <div className="text-sm text-gray-600">Total Locations</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {businesses.length + businesses.reduce((total, business) => total + getBusinessLocations(business).length, 0)}
                  </div>
                  <div className="text-sm text-gray-600">Total Landing Pages</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Businesses</h2>
              <Button asChild>
                <Link href="/businesses/admin/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Business
                </Link>
              </Button>
            </div>

            <div className="grid gap-6">
              {businesses.map((businessSlug) => {
                const locations = getBusinessLocations(businessSlug);
                return (
                  <Card key={businessSlug}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Building className="h-5 w-5 text-gray-400" />
                          <div>
                            <CardTitle className="capitalize">
                              {businessSlug.replace(/-/g, ' ')}
                            </CardTitle>
                            <p className="text-sm text-gray-600">
                              {locations.length} location{locations.length !== 1 ? 's' : ''}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/businesses/${businessSlug}/`} target="_blank">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              View
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {/* Main Business Page */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Building className="h-4 w-4 text-gray-400" />
                            <span className="font-medium">Main Business Page</span>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/businesses/${businessSlug}/`} target="_blank">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              View
                            </Link>
                          </Button>
                        </div>

                        {/* Location Pages */}
                        {locations.map((locationSlug) => (
                          <div key={locationSlug} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <MapPin className="h-4 w-4 text-gray-400" />
                              <span className="font-medium capitalize">
                                {locationSlug.replace(/-/g, ' ')} Location
                              </span>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/businesses/${businessSlug}/${locationSlug}/`} target="_blank">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                View
                              </Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
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
