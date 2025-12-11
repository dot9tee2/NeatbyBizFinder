import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST() {
  try {
    // Revalidate sitemap routes
    revalidatePath('/sitemap.xml');
    revalidatePath('/sitemap-index.xml');
    revalidatePath('/businesses/sitemap.xml');
    // Optional: tag-based if you tag your fetches
    try { revalidatePath('/', 'layout'); } catch {}

    return NextResponse.json({ ok: true, message: 'Sitemaps revalidated' });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error?.message || 'Failed to revalidate' }, { status: 500 });
  }
}


