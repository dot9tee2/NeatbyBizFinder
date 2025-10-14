'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function slugify(value: string): string {
  return (value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

export default function AdminNewBusinessPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  // Removed category input: category is optional for template
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [amenitiesCsv, setAmenitiesCsv] = useState('');
  const [locationsCsv, setLocationsCsv] = useState('');
  const [saving, setSaving] = useState(false);
  const [locationsDetailed, setLocationsDetailed] = useState<Array<{
    slug: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    website?: string;
    email?: string;
    featuredImage?: string;
  }>>([]);

  const computedSlug = useMemo(() => slug || slugify(name), [slug, name]);

  async function onCreate() {
    if (!name || !address || !city || !state || !zipCode || !phone || !featuredImage || !description) {
      alert('Please fill all required fields.');
      return;
    }
    setSaving(true);
    try {
      const payload = {
        name,
        slug: computedSlug,
        // category removed from payload
        description,
        address,
        city,
        state,
        zipCode,
        phone,
        website: website || undefined,
        email: email || undefined,
        featuredImage,
        amenities: (amenitiesCsv || '')
          .split(',')
          .map(s => s.trim())
          .filter(Boolean),
        locations: (locationsCsv || '')
          .split(',')
          .map(s => s.trim())
          .filter(Boolean),
        locationsDetailed: locationsDetailed
          .map((l) => ({
            ...l,
            slug: slugify(l.slug) || slugify(l.city),
          }))
          .filter((l) => !!l.slug),
      };
      const res = await fetch('/api/admin/create-business', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Failed to create');
      }
      router.push(`/businesses/${payload.slug}/`);
    } catch (e: any) {
      alert(e?.message || 'Failed to create business');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Create Business Landing Page</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-700">Business Name *</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Acme Services" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Slug</label>
                    <Input value={slug} onChange={(e) => setSlug(slugify(e.target.value))} placeholder="acme-services" />
                    <div className="text-xs text-gray-500 mt-1">Preview: /businesses/{computedSlug || 'your-slug'}/</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-700">Phone *</label>
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 555-5555" />
                  </div>
                  <div></div>
                </div>

                <div>
                  <label className="text-sm text-gray-700">Description *</label>
                  <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder="Brief overview of services and value..." />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-700">Street Address *</label>
                    <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="123 Main St" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">City *</label>
                    <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Springfield" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm text-gray-700">State *</label>
                    <Input value={state} onChange={(e) => setState(e.target.value.toUpperCase().slice(0, 2))} placeholder="CA" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">ZIP *</label>
                    <Input value={zipCode} onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))} placeholder="94105" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Featured Image URL *</label>
                    <Input value={featuredImage} onChange={(e) => setFeaturedImage(e.target.value)} placeholder="https://..." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-700">Website</label>
                    <Input value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://example.com" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Email</label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="info@example.com" />
                  </div>
                </div>

                {/* Removed amenities input for admin quick create */}

                <div>
                  <label className="text-sm text-gray-700">Locations (comma-separated slugs)</label>
                  <Input value={locationsCsv} onChange={(e) => setLocationsCsv(e.target.value)} placeholder="santa-fe, rio-rancho" />
                  <div className="text-xs text-gray-500 mt-1">Each location gets its own folder and page under /businesses/{computedSlug}/[location]/</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-900">Detailed Locations (optional)</label>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setLocationsDetailed((prev) => ([
                        ...prev,
                        {
                          slug: '',
                          address,
                          city,
                          state,
                          zipCode,
                          phone,
                          website,
                          email,
                          featuredImage,
                        },
                      ]))}
                    >
                      Add location
                    </Button>
                  </div>
                  {locationsDetailed.length > 0 && (
                    <div className="space-y-4">
                      {locationsDetailed.map((loc, idx) => (
                        <div key={idx} className="border rounded-md p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600">Location #{idx + 1}</div>
                            <Button
                              type="button"
                              variant="destructive"
                              onClick={() => setLocationsDetailed((prev) => prev.filter((_, i) => i !== idx))}
                            >
                              Remove
                            </Button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className="text-sm text-gray-700">Slug</label>
                              <Input
                                value={loc.slug}
                                onChange={(e) => {
                                  const v = slugify(e.target.value);
                                  setLocationsDetailed((prev) => prev.map((x, i) => i === idx ? { ...x, slug: v } : x));
                                }}
                                placeholder="santa-fe"
                              />
                            </div>
                            <div>
                              <label className="text-sm text-gray-700">City</label>
                              <Input
                                value={loc.city}
                                onChange={(e) => setLocationsDetailed((prev) => prev.map((x, i) => i === idx ? { ...x, city: e.target.value } : x))}
                                placeholder="Santa Fe"
                              />
                            </div>
                            <div>
                              <label className="text-sm text-gray-700">State</label>
                              <Input
                                value={loc.state}
                                onChange={(e) => setLocationsDetailed((prev) => prev.map((x, i) => i === idx ? { ...x, state: e.target.value.toUpperCase().slice(0, 2) } : x))}
                                placeholder="NM"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className="text-sm text-gray-700">ZIP</label>
                              <Input
                                value={loc.zipCode}
                                onChange={(e) => setLocationsDetailed((prev) => prev.map((x, i) => i === idx ? { ...x, zipCode: e.target.value.replace(/\D/g, '').slice(0, 5) } : x))}
                                placeholder="87501"
                              />
                            </div>
                            <div>
                              <label className="text-sm text-gray-700">Address</label>
                              <Input
                                value={loc.address}
                                onChange={(e) => setLocationsDetailed((prev) => prev.map((x, i) => i === idx ? { ...x, address: e.target.value } : x))}
                                placeholder="100 Canyon Rd"
                              />
                            </div>
                            <div>
                              <label className="text-sm text-gray-700">Phone</label>
                              <Input
                                value={loc.phone}
                                onChange={(e) => setLocationsDetailed((prev) => prev.map((x, i) => i === idx ? { ...x, phone: e.target.value } : x))}
                                placeholder="(505) 555-0123"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className="text-sm text-gray-700">Website</label>
                              <Input
                                value={loc.website || ''}
                                onChange={(e) => setLocationsDetailed((prev) => prev.map((x, i) => i === idx ? { ...x, website: e.target.value } : x))}
                                placeholder="https://..."
                              />
                            </div>
                            <div>
                              <label className="text-sm text-gray-700">Email</label>
                              <Input
                                value={loc.email || ''}
                                onChange={(e) => setLocationsDetailed((prev) => prev.map((x, i) => i === idx ? { ...x, email: e.target.value } : x))}
                                placeholder="info@example.com"
                              />
                            </div>
                            <div>
                              <label className="text-sm text-gray-700">Featured Image URL</label>
                              <Input
                                value={loc.featuredImage || ''}
                                onChange={(e) => setLocationsDetailed((prev) => prev.map((x, i) => i === idx ? { ...x, featuredImage: e.target.value } : x))}
                                placeholder="https://..."
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex justify-end gap-3">
                  <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
                  <Button onClick={onCreate} disabled={saving} className="bg-blue-600 hover:bg-blue-700">
                    {saving ? 'Creating…' : 'Create Landing Page'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


