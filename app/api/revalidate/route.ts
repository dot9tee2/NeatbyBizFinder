import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
	try {
		const secret = process.env.SANITY_REVALIDATE_SECRET;
		const provided = req.headers.get('x-revalidate-secret') || (await req.text());
		if (secret && provided !== secret) {
			return new Response(JSON.stringify({ error: 'Invalid secret' }), { status: 401 });
		}

		// Basic revalidation targets
		revalidatePath('/');
		revalidatePath('/categories');
		// Allow specific category path via query param ?path=/categories/slug/
		const { searchParams } = new URL(req.url);
		const p = searchParams.get('path');
		if (p) revalidatePath(p);

		return new Response(JSON.stringify({ revalidated: true }), { status: 200 });
	} catch (e: any) {
		return new Response(JSON.stringify({ error: e?.message || 'Failed to revalidate' }), { status: 500 });
	}
}



