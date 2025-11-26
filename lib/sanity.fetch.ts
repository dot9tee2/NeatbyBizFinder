import { sanityClient } from './sanity.client';
import { allCategoriesQuery, featuredBusinessesQuery, businessesByCategoryQuery, businessBySlugQuery, searchBusinessesQuery } from './sanity.queries';

export async function fetchCategoriesFromSanity() {
	try {
		return await sanityClient.fetch(allCategoriesQuery, {}, { cache: 'no-store' });
	} catch {
		return [];
	}
}

export async function fetchFeaturedBusinessesFromSanity() {
	try {
		return await sanityClient.fetch(featuredBusinessesQuery, {}, { cache: 'no-store' });
	} catch {
		return [];
	}
}

export async function fetchBusinessesByCategorySlug(slug: string) {
	try {
		const res = await sanityClient.fetch(businessesByCategoryQuery, { slug }, { cache: 'no-store' });
		return res?.items || [];
	} catch {
		return [];
	}
}

export async function fetchBusinessBySlug(slug: string) {
	try {
		const result = await sanityClient.fetch(businessBySlugQuery, { slug }, { cache: 'no-store' });
		if (!result) {
			console.error(`Business not found for slug: ${slug}`);
		}
		return result;
	} catch (error) {
		console.error(`Error fetching business by slug ${slug}:`, error);
		return null;
	}
}

export async function fetchSearchBusinesses(params: { q?: string; location?: string; category?: string }) {
	try {
		const qRaw = params.q?.trim().toLowerCase();
		// Build a tokenized pattern for GROQ `match` to better handle multi-word phrases.
		// Example: "she wrote me a letter" -> "she* wrote* me* a* letter*"
		const q =
			qRaw && qRaw.length
				? qRaw
						.split(/\s+/)
						.filter(Boolean)
						.map((t) => `${t}*`)
						.join(' ')
				: undefined;
		const loc = params.location?.trim().toLowerCase();
		const cat = params.category?.trim().toLowerCase();
		let res = await sanityClient.fetch(
			searchBusinessesQuery,
			{
				q: q || null,
				location: loc ? `*${loc}*` : null,
				category: cat || null,
			},
			{ cache: 'no-store' }
		);
		let items = res?.items || [];
		// Fallback: if nothing matched (e.g., due to strict match semantics), return all businesses
		if (!Array.isArray(items) || items.length === 0) {
			const fallbackQuery = `
			{
				"items": *[_type == "business"]|order(_updatedAt desc){
					_id,
					name,
					"slug": slug.current,
					description,
					"category": category->{name, "slug": slug.current},
					phone,
					website,
					email,
					rating,
					reviewCount,
					priceRange,
					"featured_image": featuredImage.asset->url,
					"images": images[].asset->url,
					address, city, state, zip_code
				}
			}
			`;
			res = await sanityClient.fetch(fallbackQuery, {}, { cache: 'no-store' });
			items = res?.items || [];
		}
		return items;
	} catch (error) {
		console.error('Error fetching search businesses:', error);
		return [];
	}
}



