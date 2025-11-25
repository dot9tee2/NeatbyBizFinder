import { sanityClient } from './sanity.client';
import { allCategoriesQuery, featuredBusinessesQuery, businessesByCategoryQuery, businessBySlugQuery } from './sanity.queries';

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
		return await sanityClient.fetch(businessBySlugQuery, { slug }, { cache: 'no-store' });
	} catch {
		return null;
	}
}



