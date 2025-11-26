import type { Business } from '@/types/business';

export function mapSanityBusiness(doc: any): Business {
	const normalizedSlug: string =
		typeof doc?.slug === 'string'
			? doc.slug.replace(/\/+$/g, '')
			: typeof doc?._id === 'string'
			? String(doc._id)
			: '';
	return {
		id: normalizedSlug,
		name: doc?.name || '',
		description: doc?.description || '',
		category: doc?.category?.name || '',
		address: doc?.address || '',
		city: doc?.city || '',
		state: doc?.state || '',
		zip_code: doc?.zip_code || '',
		latitude: 0,
		longitude: 0,
		phone: doc?.phone || '',
		website: doc?.website || '',
		email: doc?.email || '',
		rating: Number(doc?.rating || 0),
		review_count: Number(doc?.reviewCount || 0),
		price_range: (doc?.priceRange as Business['price_range']) || '$$',
		hours: { monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' },
		images: Array.isArray(doc?.images) ? doc.images : [],
		featured_image: doc?.featured_image || '',
		amenities: [],
		created_at: '',
		updated_at: '',
	};
}


