import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
			<div className="text-center max-w-lg">
				<h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
				<p className="text-lg text-gray-600 mb-8">We couldn&apos;t find that page. Try searching for a business or return home.</p>
				<div className="flex items-center justify-center gap-4">
					<Link href="/">
						<Button>Go Home</Button>
					</Link>
					<Link href="/search/">
						<Button variant="outline">Browse Businesses</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}


