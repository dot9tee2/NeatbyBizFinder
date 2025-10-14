import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

function normalizeSlug(value: string): string {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const url = new URL(req.url);
    const location = url.searchParams.get('location');
    const fs = await import('fs/promises');
    const path = await import('path');
    const baseDir = path.join(process.cwd(), 'app', 'businesses', slug);
    const filePath = location
      ? path.join(baseDir, normalizeSlug(location), 'data.json')
      : path.join(baseDir, 'data.json');

    const raw = await fs.readFile(filePath, 'utf8');
    return NextResponse.json(JSON.parse(raw));
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Not found' }, { status: 404 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const url = new URL(req.url);
    const location = url.searchParams.get('location');
    const payload = await req.json();

    const fs = await import('fs/promises');
    const path = await import('path');
    const baseDir = path.join(process.cwd(), 'app', 'businesses', slug);
    const dir = location
      ? path.join(baseDir, normalizeSlug(location))
      : baseDir;
    const filePath = path.join(dir, 'data.json');

    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(payload, null, 2), 'utf8');

    try {
      revalidatePath('/businesses/sitemap.xml');
      revalidatePath('/sitemap-index.xml');
      revalidatePath('/sitemap.xml');
      revalidatePath(`/businesses/${slug}/`);
      if (location) revalidatePath(`/businesses/${slug}/${normalizeSlug(location)}/`);
      try { revalidateTag('sitemap'); } catch {}
    } catch {}

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error?.message || 'Failed to update' }, { status: 500 });
  }
}


