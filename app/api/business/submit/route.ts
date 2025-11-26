import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';
import { sanityServerClient } from '@/lib/sanity.server';

export async function POST(req: NextRequest) {
	try {
		// Require auth (Supabase)
		const cookieStore = await cookies();
		const supabase = createServerClient(
			process.env.NEXT_PUBLIC_SUPABASE_URL!,
			process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
			{
				cookies: {
					get(name: string) {
						return cookieStore.get(name)?.value;
					},
					set() {},
					remove() {},
				},
			}
		);
		const { data: sessionData } = await supabase.auth.getSession();
		const user = sessionData?.session?.user;
		if (!user) {
			return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
		}

		const payload = await req.json();

		// Minimal validation
		if (!payload?.name || !payload?.category) {
			return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
		}

		// Create submission in Sanity
		const nowIso = new Date().toISOString();
		const doc = {
			_type: 'businessSubmission',
			name: payload.name,
			description: payload.description || '',
			category: payload.category || '',
			address: payload.address || '',
			city: payload.city || '',
			state: payload.state || '',
			zip_code: payload.zip_code || '',
			phone: payload.phone || '',
			website: payload.website || '',
			email: payload.email || '',
			priceRange: payload.price_range || '$$',
			status: 'pending',
			submittedByUserId: user.id,
			submittedByEmail: user.email || '',
			submittedAt: nowIso,
		};

		const created = await sanityServerClient.create(doc);
		return new Response(JSON.stringify({ ok: true, id: created._id }), { status: 200 });
	} catch (e: any) {
		return new Response(JSON.stringify({ error: e?.message || 'Submission failed' }), { status: 500 });
	}
}


