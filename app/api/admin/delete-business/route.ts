import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const slug = String(body.slug || '').trim();
    const location: string | undefined = body.location ? String(body.location).trim() : undefined;
    if (!slug) return NextResponse.json({ ok: false, error: 'Missing slug' }, { status: 400 });

    const fs = await import('fs/promises');
    const path = await import('path');
    const baseDir = path.join(process.cwd(), 'app', 'businesses');
    const businessDir = path.join(baseDir, slug);

    if (location) {
      // Delete a specific location folder
      const locationDir = path.join(businessDir, location);
      await fs.rm(locationDir, { recursive: true, force: true });
    } else {
      // Delete entire business folder
      await fs.rm(businessDir, { recursive: true, force: true });
    }

    // Revalidate sitemaps and affected pages
    try {
      revalidatePath('/businesses/sitemap.xml');
      revalidatePath('/sitemap-index.xml');
      revalidatePath('/sitemap.xml');
      if (location) {
        revalidatePath(`/businesses/${slug}/${location}/`);
      } else {
        revalidatePath(`/businesses/${slug}/`);
      }
      try { revalidateTag('sitemap'); } catch {}
    } catch {}

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error?.message || 'Failed to delete' }, { status: 500 });
  }
}


