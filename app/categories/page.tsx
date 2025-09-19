import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { businessCategories, mockBusinesses } from '@/lib/mock-data';

export const dynamic = 'force-static';

export const metadata: Metadata = {
	title: 'Browse Categories | NearbyBizFinder',
	description: 'Explore local business categories across the United States and find top-rated businesses near you.',
	robots: 'index, follow',
	alternates: { canonical: '/categories/' },
};

export default function CategoriesIndexPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Browse by Category</h1>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{businessCategories.map((category) => {
						const count = mockBusinesses.filter(b => b.category === category.name).length;
						return (
							<Link key={category.id} href={`/categories/${category.slug}/`}>
								<Card className="hover:shadow-lg transition-shadow">
									<CardContent className="p-6 text-center">
										<div className="text-4xl mb-3">{category.icon}</div>
										<div className="font-semibold text-gray-900">{category.name}</div>
										<div className="text-sm text-gray-500">{count} businesses</div>
									</CardContent>
								</Card>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}


