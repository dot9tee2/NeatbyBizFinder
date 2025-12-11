import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();
    if (!profile || profile.role !== 'admin') {
      return NextResponse.json({ ok: false, error: 'Forbidden' }, { status: 403 });
    }

    const body = await req.json();
    const slug = String(body.slug || '').trim();
    const location: string | undefined = body.location ? String(body.location).trim() : undefined;
    if (!slug) return NextResponse.json({ ok: false, error: 'Missing slug' }, { status: 400 });

    const fs = await import('fs/promises');
    const path = await import('path');
    const baseDir = path.join(process.cwd(), 'app', 'businesses');
    const businessDir = path.join(baseDir, slug);

    if (location) {
      const locationDir = path.join(businessDir, location);
      await fs.rm(locationDir, { recursive: true, force: true });
    } else {
      await fs.rm(businessDir, { recursive: true, force: true });
    }

    try {
      revalidatePath('/businesses/sitemap.xml');
      revalidatePath('/sitemap-index.xml');
      revalidatePath('/sitemap.xml');
      if (location) {
        revalidatePath(`/businesses/${slug}/${location}/`);
      } else {
        revalidatePath(`/businesses/${slug}/`);
      }
      try { revalidatePath('/', 'layout'); } catch {}
    } catch {}

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error?.message || 'Failed to delete' }, { status: 500 });
  }
}


