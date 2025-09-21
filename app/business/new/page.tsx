'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
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
import { auth, businesses as bizApi, supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Image validation and compression helpers
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10MB
const ACCEPTED_MIME_TYPES = new Set(['image/jpeg', 'image/png']);

async function compressImageToJpeg(file: File, opts?: { maxWidth?: number; maxHeight?: number; quality?: number }): Promise<File> {
  const { maxWidth = 1600, maxHeight = 1600, quality = 0.82 } = opts || {};
  const objectUrl = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = (e) => reject(e);
      image.src = objectUrl;
    });

    let { width, height } = img;
    const ratio = Math.min(1, maxWidth / width, maxHeight / height);
    const targetWidth = Math.max(1, Math.floor(width * ratio));
    const targetHeight = Math.max(1, Math.floor(height * ratio));

    const canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return file;
    ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

    const blob: Blob | null = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', quality));
    if (!blob) return file;

    const newName = file.name.replace(/\.[^.]+$/, '') + '.jpg';
    return new File([blob], newName, { type: 'image/jpeg', lastModified: Date.now() });
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}
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
  phone: z
    .string()
    .min(5, 'Enter a phone number')
    .refine((v) => v.replace(/\D/g, '').length === 10, 'Enter a valid 10-digit phone number'),
  website: z.string().url('Enter a valid URL').optional().or(z.literal('')).transform(v => v || undefined),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')).transform(v => v || undefined),
  price_range: z.enum(['$', '$$', '$$$', '$$$$']),
  hours: z.object(
    Object.fromEntries(hoursDays.map(d => [d, z.string().min(1, 'Enter hours')])) as Record<keyof Business['hours'], z.ZodString>
  ),
  imagesCsv: z.string().optional().default(''),
  image_files: z.any().optional(),
  featured_image: z.string().url('Enter a valid URL').optional().or(z.literal('')).transform(v => v || undefined),
  amenitiesCsv: z.string().optional().default(''),
});

type FormValues = z.infer<typeof schema>;

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function formatStateInput(value: string): string {
  return value.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 2);
}

function formatZipInput(value: string): string {
  return value.replace(/\D/g, '').slice(0, 5);
}

function normalizeWebsiteOnBlur(value: string): string {
  const v = (value || '').trim();
  if (!v) return '';
  if (!/^https?:\/\//i.test(v)) return `https://${v}`;
  return v;
}

function normalizeEmailOnBlur(value: string): string {
  return (value || '').trim().toLowerCase();
}

export default function NewBusinessPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const { toast } = useToast();

  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const [featuredLocalIndex, setFeaturedLocalIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      // If Supabase is not configured, allow access to the form (demo mode)
      if (!supabase) {
        if (mounted) setCheckingAuth(false);
        return;
      }
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
    mode: 'onChange',
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

  useEffect(() => {
    return () => {
      filePreviews.forEach((url) => URL.revokeObjectURL(url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [currentUserId, setCurrentUserId] = useState<string>('anon');
  useEffect(() => {
    (async () => {
      const { user } = await auth.getCurrentUser();
      setCurrentUserId(user?.id || 'anon');
    })();
  }, []);

  const draftKey = useMemo(() => `new-business-draft:${currentUserId}`, [currentUserId]);

  useEffect(() => {
    if (checkingAuth) return;
    try {
      const raw = localStorage.getItem(draftKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        // Do not restore FileList
        delete (parsed as any).image_files;
        form.reset({ ...form.getValues(), ...parsed });
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkingAuth, draftKey]);

  useEffect(() => {
    const sub = form.watch((value) => {
      try {
        const { image_files, ...rest } = value as unknown as Record<string, unknown> & { image_files?: unknown };
        localStorage.setItem(draftKey, JSON.stringify(rest));
      } catch {}
    });
    return () => sub.unsubscribe();
  }, [form, draftKey]);

  const descriptionValue = form.watch('description');

  const csvImages = useMemo(() => {
    return (form.watch('imagesCsv') || '')
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
  }, [form]);

  const handleFilesAdd = (list: FileList | null) => {
    if (!list || list.length === 0) return;
    const newFiles: File[] = [];
    const newPreviews: string[] = [];
    for (let i = 0; i < list.length; i += 1) {
      const f = list.item(i)!;
      if (!ACCEPTED_MIME_TYPES.has(f.type)) {
        toast({ title: 'Unsupported file type', description: 'Please upload JPEG or PNG images.', variant: 'destructive' as any });
        continue;
      }
      if (f.size > MAX_FILE_BYTES) {
        toast({ title: 'File too large', description: 'Each image must be 10MB or smaller.', variant: 'destructive' as any });
        continue;
      }
      newFiles.push(f);
      newPreviews.push(URL.createObjectURL(f));
    }
    setDroppedFiles((prev) => [...prev, ...newFiles]);
    setFilePreviews((prev) => [...prev, ...newPreviews]);
    const current = (form.getValues() as unknown as { image_files?: FileList }).image_files;
    const dt = new DataTransfer();
    if (current) {
      for (let i = 0; i < current.length; i += 1) dt.items.add(current.item(i)!);
    }
    newFiles.forEach((f) => dt.items.add(f));
    form.setValue('image_files', dt.files as unknown as any);
  };

  const removeLocalFile = (index: number) => {
    setDroppedFiles((prev) => prev.filter((_, i) => i !== index));
    const toRemove = filePreviews[index];
    URL.revokeObjectURL(toRemove);
    setFilePreviews((prev) => prev.filter((_, i) => i !== index));
    const current = (form.getValues() as unknown as { image_files?: FileList }).image_files;
    if (current) {
      const dt = new DataTransfer();
      for (let i = 0; i < current.length; i += 1) {
        if (i !== index) dt.items.add(current.item(i)!);
      }
      form.setValue('image_files', dt.files as unknown as any);
    }
    if (featuredLocalIndex === index) setFeaturedLocalIndex(null);
    if (featuredLocalIndex !== null && featuredLocalIndex > index) setFeaturedLocalIndex(featuredLocalIndex - 1);
  };

  const removeCsvImage = (url: string) => {
    const remaining = csvImages.filter((u) => u !== url);
    form.setValue('imagesCsv', remaining.join(', '));
    if (form.getValues().featured_image === url) form.setValue('featured_image', '');
  };

  const onSubmit = async (values: FormValues) => {
    // Gather images from both CSV input and uploaded files
    const images = (values.imagesCsv || '')
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
    const uploadedUrls: string[] = [];
    const files = (values as unknown as { image_files?: FileList }).image_files;

    if (files && files.length) {
      if (!supabase) {
        form.setError('imagesCsv', { message: 'Uploads unavailable: Supabase not configured' });
        return;
      }
      toast({ title: 'Uploading images…', description: `${files.length} file(s)` });
      const { user } = await auth.getCurrentUser();
      const userId = user?.id || 'anonymous';

      for (let i = 0; i < files.length; i += 1) {
        const original = files.item(i)!;
        let file = original;
        // Compress if larger than ~1MB or either dimension likely large (we don't know before load, so size heuristic)
        if (file.size > 1024 * 1024 || !ACCEPTED_MIME_TYPES.has(file.type)) {
          try {
            file = await compressImageToJpeg(original);
          } catch {
            // fall back to original
            file = original;
          }
        }
        const safeName = file.name.replace(/[^a-zA-Z0-9_.-]/g, '_');
        const unique = (globalThis as unknown as { crypto?: Crypto }).crypto?.randomUUID?.() || `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
        const path = `${userId}/${unique}_${safeName}`;
        const { error: uploadError } = await supabase.storage.from('business-images').upload(path, file, { contentType: file.type || 'image/jpeg' });
        if (uploadError) {
          const friendly = /bucket/i.test(uploadError.message || '')
            ? 'Storage bucket "business-images" missing. Create a public bucket named business-images in Supabase Storage.'
            : uploadError.message || 'Failed to upload image';
          form.setError('imagesCsv', { message: friendly });
          toast({ title: 'Upload failed', description: friendly, variant: 'destructive' as any });
          return;
        }
        const { data: publicData } = supabase.storage.from('business-images').getPublicUrl(path);
        if (publicData?.publicUrl) uploadedUrls.push(publicData.publicUrl);
      }
    }
    const amenities = (values.amenitiesCsv || '')
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    // Reorder so featured is first
    let combinedImages = [...uploadedUrls, ...images];
    let featuredToUse = values.featured_image;
    if (!featuredToUse && featuredLocalIndex !== null && uploadedUrls[featuredLocalIndex]) {
      const f = uploadedUrls[featuredLocalIndex];
      combinedImages = [f, ...combinedImages.filter((u) => u !== f)];
      featuredToUse = f;
    } else if (featuredToUse) {
      combinedImages = [featuredToUse, ...combinedImages.filter((u) => u !== featuredToUse)];
    }

    if (combinedImages.length === 0) {
      combinedImages = ['/logo.png'];
    }

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
      images: combinedImages,
      featured_image: featuredToUse || combinedImages[0],
      amenities,
    };

    const { data, error } = await bizApi.create(payload);
    if (error) {
      // Attach error to any field; show generic if unknown
      form.setError('name', { message: error.message || 'Failed to create business' });
      toast({ title: 'Could not create business', description: error.message || 'Please try again', variant: 'destructive' as any });
      return;
    }
    if (data?.id) {
      toast({ title: 'Business created', description: 'Your business has been added successfully.' });
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
                      <div className="text-xs text-gray-500 text-right">{descriptionValue?.length || 0} / 5000</div>
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
                            <Input
                              placeholder="CA"
                              value={field.value}
                              onChange={(e) => field.onChange(formatStateInput(e.target.value))}
                              maxLength={2}
                            />
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
                            <Input
                              placeholder="94105"
                              value={field.value}
                              onChange={(e) => field.onChange(formatZipInput(e.target.value))}
                              inputMode="numeric"
                              maxLength={5}
                            />
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
                          <Input
                            placeholder="(415) 555-0123"
                            value={field.value}
                            onChange={(e) => {
                              const formatted = formatPhone(e.target.value);
                              field.onChange(formatted);
                            }}
                            onBlur={(e) => {
                              const digits = (e.target.value || '').replace(/\D/g, '');
                              if (digits.length === 10) field.onChange(formatPhone(digits));
                            }}
                            inputMode="tel"
                          />
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
                          <Input
                            placeholder="https://example.com"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={(e) => field.onChange(normalizeWebsiteOnBlur(e.target.value))}
                            inputMode="url"
                          />
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
                          <Input
                            placeholder="info@example.com"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={(e) => field.onChange(normalizeEmailOnBlur(e.target.value))}
                            inputMode="email"
                          />
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
                        <div className="mt-2 grid grid-cols-3 gap-2">
                          {csvImages.map((url) => (
                            <div key={url} className="relative group border rounded overflow-hidden">
                              <img src={url} alt="preview" className="w-full h-24 object-cover" />
                              <div className="absolute inset-0 flex items-center justify-between gap-1 p-1 opacity-0 group-hover:opacity-100 transition">
                                <Button type="button" size="sm" variant="secondary" className="text-xs" onClick={() => form.setValue('featured_image', url)}>Featured</Button>
                                <Button type="button" size="sm" variant="destructive" className="text-xs" onClick={() => removeCsvImage(url)}>Remove</Button>
                              </div>
                            </div>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="image_files"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Upload Images</FormLabel>
                        <FormControl>
                          <>
                            <div
                              className={cn(
                                'mt-1 border-2 border-dashed rounded-md p-6 text-center cursor-pointer',
                                isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                              )}
                              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                              onDragLeave={() => setIsDragging(false)}
                              onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleFilesAdd(e.dataTransfer.files); }}
                              onClick={() => fileInputRef.current?.click()}
                            >
                              <div className="text-sm text-gray-600">Drag & drop images here, or click to browse</div>
                              <div className="text-xs text-gray-500">JPEG, PNG up to 10MB each</div>
                            </div>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/jpeg,image/png"
                              multiple
                              className="hidden"
                              name={field.name}
                              onChange={(e) => { handleFilesAdd(e.target.files); }}
                            />
                            {filePreviews.length > 0 && (
                              <div className="mt-3 grid grid-cols-3 gap-2">
                                {filePreviews.map((url, idx) => (
                                  <div key={url} className={cn('relative group border rounded overflow-hidden', featuredLocalIndex === idx && 'ring-2 ring-blue-500')}> 
                                    <img src={url} alt="preview" className="w-full h-24 object-cover" />
                                    <div className="absolute inset-0 flex items-center justify-between gap-1 p-1 opacity-0 group-hover:opacity-100 transition">
                                      <Button type="button" size="sm" variant="secondary" className="text-xs" onClick={() => setFeaturedLocalIndex(idx)}>Featured</Button>
                                      <Button type="button" size="sm" variant="destructive" className="text-xs" onClick={() => removeLocalFile(idx)}>Remove</Button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
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
                  <Button type="button" variant="outline" onClick={() => { try { localStorage.removeItem(draftKey); } catch {}; form.reset(); }}>
                    Clear draft
                  </Button>
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


