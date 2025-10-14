'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { Building, MapPin, ExternalLink, Filter, Trash2 } from 'lucide-react';
import { useTransition } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

export interface BusinessListItem {
  slug: string;
  name: string;
  locations: string[];
}

type SortKey = 'name_asc' | 'name_desc' | 'locations_desc' | 'locations_asc' | 'pages_desc' | 'pages_asc';

export function AdminBusinessList({ items }: { items: BusinessListItem[] }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('name_asc');
  const [isPending, startTransition] = useTransition();
  const [confirmName, setConfirmName] = useState('');
  const [target, setTarget] = useState<{ slug: string; location?: string } | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((it) => {
      if (it.name.toLowerCase().includes(q)) return true;
      if (it.slug.toLowerCase().includes(q)) return true;
      return it.locations.some((loc) => loc.toLowerCase().includes(q));
    });
  }, [items, query]);

  const sorted = useMemo(() => {
    const copy = [...filtered];
    switch (sortKey) {
      case 'name_asc':
        return copy.sort((a, b) => a.name.localeCompare(b.name));
      case 'name_desc':
        return copy.sort((a, b) => b.name.localeCompare(a.name));
      case 'locations_desc':
        return copy.sort((a, b) => b.locations.length - a.locations.length);
      case 'locations_asc':
        return copy.sort((a, b) => a.locations.length - b.locations.length);
      case 'pages_desc':
        return copy.sort((a, b) => (1 + b.locations.length) - (1 + a.locations.length));
      case 'pages_asc':
        return copy.sort((a, b) => (1 + a.locations.length) - (1 + b.locations.length));
      default:
        return copy;
    }
  }, [filtered, sortKey]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center gap-3 justify-between">
        <div className="flex-1">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search businesses or locations..."
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <Select value={sortKey} onValueChange={(v) => setSortKey(v as SortKey)}>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name_asc">Name A → Z</SelectItem>
              <SelectItem value="name_desc">Name Z → A</SelectItem>
              <SelectItem value="locations_desc">Locations: High → Low</SelectItem>
              <SelectItem value="locations_asc">Locations: Low → High</SelectItem>
              <SelectItem value="pages_desc">Total Pages: High → Low</SelectItem>
              <SelectItem value="pages_asc">Total Pages: Low → High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="text-sm text-gray-600">{sorted.length} result{sorted.length !== 1 ? 's' : ''}</div>

      <div className="grid gap-6">
        {sorted.map((item) => (
          <Card key={item.slug}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-gray-400" />
                  <div>
                    <CardTitle className="capitalize">{item.name}</CardTitle>
                    <p className="text-sm text-gray-600">
                      {item.locations.length} location{item.locations.length !== 1 ? 's' : ''}
                      {' • '}
                      {1 + item.locations.length} total page{1 + item.locations.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/businesses/${item.slug}/`} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => router.push(`/businesses/admin/${item.slug}/edit`)}
                  >
                    Edit
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm" onClick={() => { setTarget({ slug: item.slug }); setConfirmName(''); }}>
                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete business “{item.name}”?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will delete the business main page and all its location pages. Type the business name to confirm.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <Input placeholder={item.name} value={confirmName} onChange={(e) => setConfirmName(e.target.value)} />
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          disabled={confirmName.trim() !== item.name}
                          onClick={() => {
                            const payload = { slug: item.slug };
                            startTransition(async () => {
                              await fetch('/api/admin/delete-business', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                              // simple reload to reflect FS changes
                              window.location.reload();
                            });
                          }}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Building className="h-4 w-4 text-gray-400" />
                    <span className="font-medium">Main Business Page</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/businesses/${item.slug}/`} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </Link>
                  </Button>
                </div>
                {item.locations.map((locationSlug) => (
                  <div key={locationSlug} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="font-medium capitalize">{locationSlug.replace(/-/g, ' ')} Location</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/businesses/${item.slug}/${locationSlug}/`} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View
                        </Link>
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="sm" onClick={() => { setTarget({ slug: item.slug, location: locationSlug }); setConfirmName(''); }}>
                            <Trash2 className="h-4 w-4 mr-1" /> Delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete “{item.name} — {locationSlug.replace(/-/g, ' ')}”?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This will delete this location page. Type the business name to confirm.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <Input placeholder={item.name} value={confirmName} onChange={(e) => setConfirmName(e.target.value)} />
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              disabled={confirmName.trim() !== item.name}
                              onClick={() => {
                                const payload = { slug: item.slug, location: locationSlug };
                                startTransition(async () => {
                                  await fetch('/api/admin/delete-business', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                                  window.location.reload();
                                });
                              }}
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AdminBusinessList;


