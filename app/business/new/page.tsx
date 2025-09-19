'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { auth, businesses as bizApi } from '@/lib/supabase';
import { businessCategories } from '@/lib/mock-data';
import type { Business } from '@/types/business';

const hoursDays = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'] as const;

const schema = z.object({
  name: z.string().min(2, 'Please enter a business name'),
  description: z.string().min(10, 'Please add a longer description'),
  category: z.string().min(1, 'Select a category'),
  address: z.string().min(2, 'Enter a street address'),
  city: z.string().min(1, 'Enter a city'),
  state: z.string().min(1, 'Enter a state'),
  zip_code: z.string().min(1, 'Enter a ZIP/postal code'),
  latitude: z.coerce.number().optional().default(0),
  longitude: z.coerce.number().optional().default(0),
  phone: z.string().min(5, 'Enter a phone number'),
  website: z.string().url('Enter a valid URL').optional().or(z.literal('')).transform(v => v || undefined),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')).transform(v => v || undefined),
  price_range: z.enum(['$', '$$', '$$$', '$$$$']),
  hours: z.object(
    Object.fromEntries(hoursDays.map(d => [d, z.string().min(1, 'Enter hours')])) as Record<keyof Business['hours'], z.ZodString>
  ),
  imagesCsv: z.string().optional().default(''),
  featured_image: z.string().url('Enter a valid URL').optional().or(z.literal('')).transform(v => v || undefined),
  amenitiesCsv: z.string().optional().default(''),
});

type FormValues = z.infer<typeof schema>;

export default function NewBusinessPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { user } = await auth.getCurrentUser();
      if (!user && mounted) {
        router.replace('/auth/signin?redirect=/business/new');
      } else if (mounted) {
        setCheckingAuth(false);
      }
    })();
    return () => { mounted = false; };
  }, [router]);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      description: '',
      category: '',
      address: '',
      city: '',
      state: '',
      zip_code: '',
      latitude: 0,
      longitude: 0,
      phone: '',
      website: '',
      email: '',
      price_range: '$$',
      hours: {
        monday: '9:00 AM - 5:00 PM',
        tuesday: '9:00 AM - 5:00 PM',
        wednesday: '9:00 AM - 5:00 PM',
        thursday: '9:00 AM - 5:00 PM',
        friday: '9:00 AM - 5:00 PM',
        saturday: 'Closed',
        sunday: 'Closed',
      },
      imagesCsv: '',
      featured_image: '',
      amenitiesCsv: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    const images = (values.imagesCsv || '')
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
    const amenities = (values.amenitiesCsv || '')
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const payload: Omit<Business, 'id' | 'created_at' | 'updated_at'> = {
      name: values.name,
      description: values.description,
      category: values.category,
      address: values.address,
      city: values.city,
      state: values.state,
      zip_code: values.zip_code,
      latitude: values.latitude ?? 0,
      longitude: values.longitude ?? 0,
      phone: values.phone,
      website: values.website,
      email: values.email,
      rating: 0,
      review_count: 0,
      price_range: values.price_range,
      hours: values.hours,
      images,
      featured_image: values.featured_image || images[0],
      amenities,
    };

    const { data, error } = await bizApi.create(payload);
    if (error) {
      // Attach error to any field; show generic if unknown
      form.setError('name', { message: error.message || 'Failed to create business' });
      return;
    }
    if (data?.id) {
      router.push(`/business/${data.id}`);
    } else {
      router.push('/search');
    }
  };

  const categoryOptions = useMemo(() => businessCategories.map(c => c.name), []);

  if (checkingAuth) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Checking authentication…</CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Add Your Business</CardTitle>
            <CardDescription>Provide details so customers can find you.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., The Garden Bistro" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categoryOptions.map((name) => (
                                <SelectItem key={name} value={name}>{name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea rows={4} placeholder="Describe your business..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main St" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="San Francisco" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <FormControl>
                            <Input placeholder="CA" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="zip_code"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ZIP</FormLabel>
                          <FormControl>
                            <Input placeholder="94105" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="(415) 555-0123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="info@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="price_range"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price Range</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select price range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="$">$</SelectItem>
                              <SelectItem value="$$">$$</SelectItem>
                              <SelectItem value="$$$">$$$</SelectItem>
                              <SelectItem value="$$$$">$$$$</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="latitude"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Latitude</FormLabel>
                        <FormControl>
                          <Input type="number" step="any" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="longitude"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Longitude</FormLabel>
                        <FormControl>
                          <Input type="number" step="any" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="imagesCsv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image URLs (comma-separated)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="https://... , https://..." rows={3} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-rows-2 gap-6">
                    <FormField
                      control={form.control}
                      name="featured_image"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Featured Image URL (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="amenitiesCsv"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Amenities (comma-separated)</FormLabel>
                          <FormControl>
                            <Input placeholder="WiFi, Parking, ..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="text-sm font-medium text-gray-900">Hours of Operation</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {hoursDays.map((day) => (
                        <FormField
                          key={day}
                          control={form.control}
                          name={`hours.${day}` as const}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="capitalize">{day}</FormLabel>
                              <FormControl>
                                <Input placeholder="9:00 AM - 5:00 PM" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3">
                  <Button type="button" variant="outline" onClick={() => router.back()}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Saving…' : 'Save Business'}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


