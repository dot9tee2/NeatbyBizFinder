import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import BusinessList from '@/components/business/business-list';
import { businessCategories, mockBusinesses } from '@/lib/mock-data';
import { fetchBusinessesByCategorySlug, fetchCategoriesFromSanity } from '@/lib/sanity.fetch';
import type { Business } from '@/types/business';

export const dynamic = 'force-static';

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
	const sanityCategories = await fetchCategoriesFromSanity();
	if (Array.isArray(sanityCategories) && sanityCategories.length > 0) {
		return sanityCategories.map((c: any) => ({ slug: c.slug }));
	}
	return businessCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
	const { slug } = await params;
	const sanityCategories = await fetchCategoriesFromSanity();
	const category = (Array.isArray(sanityCategories) && sanityCategories.length
		? sanityCategories.map((c: any) => ({ name: c.name, slug: c.slug }))
		: businessCategories
	).find((c: any) => c.slug === slug);
	if (!category) return {};
	const title = `${category.name} Near You | NearbyBizFinder`;
	const description = `Discover top-rated ${category.name.toLowerCase()} across the United States. Browse reviews, hours, and contact info.`;
	return {
		title,
		description,
		alternates: { canonical: `/categories/${slug}/` },
		robots: 'index, follow',
		openGraph: { title, description },
	};
}

export default async function CategoryPage({ params }: { params: Params }) {
	const { slug } = await params;
	const sanityCategories = await fetchCategoriesFromSanity();
	const category = (Array.isArray(sanityCategories) && sanityCategories.length
		? sanityCategories.map((c: any) => ({ name: c.name, slug: c.slug }))
		: businessCategories
	).find((c: any) => c.slug === slug);
	if (!category) return notFound();

	const sanityItems = await fetchBusinessesByCategorySlug(slug);
	const items: Business[] =
		Array.isArray(sanityItems) && sanityItems.length
			? sanityItems.map((b: any): Business => ({
					id: b.slug || b._id,
					name: b.name || '',
					description: b.description || '',
					category: category.name,
					address: b.address || '',
					city: b.city || '',
					state: b.state || '',
					zip_code: b.zip_code || '',
					latitude: 0,
					longitude: 0,
					phone: b.phone || '',
					website: b.website || '',
					email: '',
					rating: Number(b.rating || 0),
					review_count: Number(b.reviewCount || 0),
					price_range: (b.priceRange as Business['price_range']) || '$$',
					hours: {
						monday: '',
						tuesday: '',
						wednesday: '',
						thursday: '',
						friday: '',
						saturday: '',
						sunday: '',
					},
					images: Array.isArray(b.images) ? b.images : [],
					featured_image: b.featured_image || '',
					amenities: [],
					created_at: '',
					updated_at: '',
			  }))
			: mockBusinesses.filter(b => b.category === category.name);

	return (
		<div className="min-h-screen bg-gray-50">
			<Script id="ld-json-breadcrumb-cat" type="application/ld+json">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement: [
						{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nearbybizfinder.com/' },
						{ '@type': 'ListItem', position: 2, name: category.name, item: `https://nearbybizfinder.com/categories/${slug}/` },
					],
				})}
			</Script>
			<Script id="ld-json-itemlist-cat" type="application/ld+json">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'ItemList',
					itemListElement: items.map((b, i) => ({
						'@type': 'ListItem',
						position: i + 1,
						url: `https://nearbybizfinder.com/business/${b.id}/`,
						item: {
							'@type': 'LocalBusiness',
							name: b.name,
							url: `https://nearbybizfinder.com/business/${b.id}/`,
							image: b.featured_image || b.images?.[0],
							address: {
								'@type': 'PostalAddress',
								streetAddress: b.address,
								addressLocality: b.city,
								addressRegion: b.state,
								postalCode: b.zip_code,
								addressCountry: 'US',
							},
							aggregateRating: {
								'@type': 'AggregateRating',
								ratingValue: b.rating,
								reviewCount: b.review_count,
							},
						},
					})),
				})}
			</Script>
			<Script id="ld-json-faq-cat" type="application/ld+json">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'FAQPage',
					mainEntity: [
						{
							'@type': 'Question',
							name: `How do I find the best ${category.name.toLowerCase()} near me?`,
							acceptedAnswer: {
								'@type': 'Answer',
								text: `Use filters for rating, price, and distance, then sort by reviews to find top ${category.name.toLowerCase()}.`
							}
						},
						{
							'@type': 'Question',
							name: `What should I look for when choosing ${category.name.toLowerCase()}?`,
							acceptedAnswer: {
								'@type': 'Answer',
								text: `Check recent reviews, hours, service details, and contact info. Compare at least 2–3 ${category.name.toLowerCase()}.`
							}
						},
						{
							'@type': 'Question',
							name: `How can I contact a ${category.name.toLowerCase()}?`,
							acceptedAnswer: {
								'@type': 'Answer',
								text: `Open a business profile to see phone, website, and location details for quick contact.`
							}
						}
					]
				})}
			</Script>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<nav aria-label="Breadcrumb" className="mb-4 text-sm">
					<ol className="flex items-center space-x-2 text-gray-600">
						<li>
							<a href="/" className="hover:text-blue-600 hover:underline">Home</a>
						</li>
						<li aria-hidden="true" className="text-gray-400">/</li>
						<li>
							<a href="/categories/" className="hover:text-blue-600 hover:underline">Categories</a>
						</li>
						<li aria-hidden="true" className="text-gray-400">/</li>
						<li className="text-gray-900 font-medium" aria-current="page">{category.name}</li>
					</ol>
				</nav>
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{category.name}</h1>
				<p className="text-lg text-gray-600 mb-8">Find the best {category.name.toLowerCase()} in the US.</p>
				<BusinessList businesses={items} showPagination itemsPerPage={12} />

				<section aria-labelledby="faq-heading" className="mt-12 bg-white border rounded-lg p-6">
					<h2 id="faq-heading" className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
					<div className="space-y-4">
						<details className="group border rounded-md p-4">
							<summary className="font-medium cursor-pointer list-none">
								How do I find the best {category.name.toLowerCase()} near me?
							</summary>
							<p className="mt-2 text-gray-600">
								Use filters for rating, price, and distance, then sort by reviews to compare top options near you.
							</p>
						</details>
						<details className="group border rounded-md p-4">
							<summary className="font-medium cursor-pointer list-none">
								What should I look for when choosing {category.name.toLowerCase()}?
							</summary>
							<p className="mt-2 text-gray-600">
								Check recent reviews, hours, service details, and contact info. Compare at least 2–3 providers before deciding.
							</p>
						</details>
						<details className="group border rounded-md p-4">
							<summary className="font-medium cursor-pointer list-none">
								How can I contact a {category.name.toLowerCase()}?
							</summary>
							<p className="mt-2 text-gray-600">
								Open a business profile to see phone, website, and location details for quick contact.
							</p>
						</details>
					</div>
				</section>
			</div>
		</div>
	);
}


