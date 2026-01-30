import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowRight } from 'lucide-react';

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black opacity-80"></div>
			<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

			<div className="text-center max-w-lg relative z-10">
				<div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
					404
				</div>
				<h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
				<p className="text-lg text-gray-400 mb-8">
					We couldn&apos;t find that page. It might have moved or the link may be broken.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Link href="/">
						<Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 h-12">
							<Home className="mr-2 h-4 w-4" />
							Go Home
						</Button>
					</Link>
					<Link href="/blog">
						<Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-12">
							Browse Blog
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
