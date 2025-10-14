import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { headers } from 'next/headers';

interface Params {
  params: Promise<{ business: string }>;
}

async function getBaseUrl(): Promise<string> {
  const h = await headers();
  const host = h.get('x-forwarded-host') || h.get('host') || 'localhost:3000';
  const proto = h.get('x-forwarded-proto') || (host.includes('localhost') ? 'http' : 'https');
  return `${proto}://${host}`;
}

async function fetchJson(slug: string, location?: string) {
  const qs = location ? `?location=${encodeURIComponent(location)}` : '';
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/admin/business/${slug}${qs}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function EditBusinessAdminPage({ params }: Params) {
  const { business: businessSlug } = await params;
  const base = await fetchJson(businessSlug);
  let discoveredLocations: string[] = [];
  try {
    const { discoverBusinessPages } = await import('@/lib/sitemap-utils');
    const { locations } = await discoverBusinessPages();
    discoveredLocations = locations[businessSlug] || [];
  } catch {}

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900 capitalize">Edit: {businessSlug.replace(/-/g, ' ')}</h1>
            <Button variant="outline" asChild>
              <Link href={`/businesses/${businessSlug}/`} target="_blank">Preview page</Link>
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Business Content</CardTitle>
            </CardHeader>
            <CardContent>
              {base ? (
                <form
                  action={async (formData) => {
                    'use server';
                    const payload = Object.fromEntries(formData.entries());
                    try {
                      const headersFn = (await import('next/headers')).headers;
                      const h = await headersFn();
                      const host = h.get('x-forwarded-host') || h.get('host') || 'localhost:3000';
                      const proto = h.get('x-forwarded-proto') || (host.includes('localhost') ? 'http' : 'https');
                      const baseUrl = `${proto}://${host}`;
                      await fetch(`${baseUrl}/api/admin/business/${businessSlug}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          ...base,
                          name: String(payload.name || base.name),
                          description: String(payload.description || base.description),
                          address: String(payload.address || base.address),
                          city: String(payload.city || base.city),
                          state: String(payload.state || base.state),
                          zipCode: String(payload.zipCode || base.zipCode),
                          phone: String(payload.phone || base.phone),
                          website: String(payload.website || base.website || '' ) || undefined,
                          email: String(payload.email || base.email || '' ) || undefined,
                          featuredImage: String(payload.featuredImage || base.featuredImage),
                        }),
                      });
                    } catch {}
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-700">Business Name</label>
                      <Input name="name" defaultValue={base.name} />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700">Phone</label>
                      <Input name="phone" defaultValue={base.phone} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="text-sm text-gray-700">Street Address</label>
                      <Input name="address" defaultValue={base.address} />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700">City</label>
                      <Input name="city" defaultValue={base.city} />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700">State</label>
                      <Input name="state" defaultValue={base.state} />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700">ZIP</label>
                      <Input name="zipCode" defaultValue={base.zipCode} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="text-sm text-gray-700">Website</label>
                      <Input name="website" defaultValue={base.website || ''} />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700">Email</label>
                      <Input name="email" defaultValue={base.email || ''} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="text-sm text-gray-700">Featured Image URL</label>
                      <Input name="featuredImage" defaultValue={base.featuredImage} />
                    </div>
                    <div></div>
                  </div>
                  <div className="mt-4">
                    <label className="text-sm text-gray-700">Description</label>
                    <Textarea name="description" rows={4} defaultValue={base.description} />
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button type="submit">Save</Button>
                  </div>
                </form>
              ) : (
                <div className="text-sm text-gray-600">No JSON found. Create one via the admin create flow.</div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Locations</CardTitle>
            </CardHeader>
            <CardContent>
              {discoveredLocations.length > 0 ? (
                <div className="space-y-4">
                  {await Promise.all(discoveredLocations.map(async (loc) => {
                    const data = await fetchJson(businessSlug, loc);
                    return (
                      <form
                        key={loc}
                        className="p-3 bg-gray-50 rounded space-y-3"
                        action={async (formData) => {
                          'use server';
                          const payload = Object.fromEntries(formData.entries());
                          try {
                            const headersFn = (await import('next/headers')).headers;
                            const h = await headersFn();
                            const host = h.get('x-forwarded-host') || h.get('host') || 'localhost:3000';
                            const proto = h.get('x-forwarded-proto') || (host.includes('localhost') ? 'http' : 'https');
                            const baseUrl = `${proto}://${host}`;
                            await fetch(`${baseUrl}/api/admin/business/${businessSlug}?location=${encodeURIComponent(loc)}`, {
                              method: 'PUT',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({
                                ...data,
                                address: String(payload.address || data?.address || ''),
                                city: String(payload.city || data?.city || ''),
                                state: String(payload.state || data?.state || ''),
                                zipCode: String(payload.zipCode || data?.zipCode || ''),
                                phone: String(payload.phone || data?.phone || ''),
                                website: String(payload.website || data?.website || '' ) || undefined,
                                email: String(payload.email || data?.email || '' ) || undefined,
                                featuredImage: String(payload.featuredImage || data?.featuredImage || ''),
                                locationName: String(payload.locationName || data?.locationName || loc.replace(/-/g, ' ') + ' Location'),
                              }),
                            });
                          } catch {}
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-medium capitalize">{loc.replace(/-/g, ' ')}</div>
                          <Button variant="outline" asChild>
                            <Link href={`/businesses/${businessSlug}/${loc}/`} target="_blank">View</Link>
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <Input name="locationName" defaultValue={data?.locationName || ''} placeholder="Location Name" />
                          <Input name="address" defaultValue={data?.address || ''} placeholder="Address" />
                          <Input name="city" defaultValue={data?.city || ''} placeholder="City" />
                          <Input name="state" defaultValue={data?.state || ''} placeholder="State" />
                          <Input name="zipCode" defaultValue={data?.zipCode || ''} placeholder="ZIP" />
                          <Input name="phone" defaultValue={data?.phone || ''} placeholder="Phone" />
                          <Input name="website" defaultValue={data?.website || ''} placeholder="Website" />
                          <Input name="email" defaultValue={data?.email || ''} placeholder="Email" />
                          <Input name="featuredImage" defaultValue={data?.featuredImage || ''} placeholder="Featured Image URL" />
                        </div>
                        <div className="flex justify-end">
                          <Button type="submit" size="sm">Save</Button>
                        </div>
                      </form>
                    );
                  }))}
                </div>
              ) : (
                <div className="text-sm text-gray-600">No locations found.</div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Coming soon</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-600">
                CRUD forms for updating hero, gallery, hours, amenities, and SEO will go here. For now, edit content in <code className="bg-gray-100 px-1 rounded">lib/business-landing-data.ts</code>.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


