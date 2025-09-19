import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import BusinessList from '@/components/business/business-list';
import { businessCategories, mockBusinesses } from '@/lib/mock-data';

export const dynamic = 'force-static';

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
	return businessCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
	const { slug } = await params;
	const category = businessCategories.find(c => c.slug === slug);
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
	const category = businessCategories.find(c => c.slug === slug);
	if (!category) return notFound();

	const items = mockBusinesses.filter(b => b.category === category.name);

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
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{category.name}</h1>
				<p className="text-lg text-gray-600 mb-8">Find the best {category.name.toLowerCase()} in the US.</p>
				<BusinessList businesses={items} showPagination itemsPerPage={12} />
			</div>
		</div>
	);
}


