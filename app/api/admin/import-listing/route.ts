import { NextRequest } from 'next/server';
import { sanityServerClient } from '@/lib/sanity.server';

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { business } = body as { business: any };
		if (!business) {
			return new Response(JSON.stringify({ error: 'Missing business payload' }), { status: 400 });
		}

		// Map incoming fields to Sanity
		const doc = {
			_type: 'business',
			name: business.name,
			slug: { _type: 'slug', current: business.slug || business.id || business.name?.toLowerCase().replace(/\s+/g, '-') },
			description: business.description || '',
			website: business.website || '',
			phone: business.phone || '',
			email: business.email || '',
			address: business.address || '',
			city: business.city || '',
			state: business.state || '',
			zip_code: business.zip_code || '',
			rating: business.rating || 0,
			reviewCount: business.review_count || 0,
			priceRange: business.price_range || '$$',
			amenities: business.amenities || [],
			// category reference by slug is best; for a simple single import, we can skip and set later in Studio
		};

		const res = await sanityServerClient.createOrReplace({
			...doc,
			_id: `business.${doc.slug.current}`,
		});

		return new Response(JSON.stringify({ ok: true, id: res._id }), { status: 200 });
	} catch (e: any) {
		return new Response(JSON.stringify({ error: e?.message || 'Import failed' }), { status: 500 });
	}
}



