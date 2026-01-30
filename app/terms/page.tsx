import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
	title: 'Terms of Service | NearbyBizFinder',
	description: 'Terms of Service governing the use of NearbyBizFinder in the United States.',
	robots: 'index, follow',
	alternates: { canonical: '/terms/' },
	openGraph: { title: 'Terms of Service | NearbyBizFinder', description: 'Rules for using NearbyBizFinder and your responsibilities.' },
	twitter: { card: 'summary', title: 'Terms of Service | NearbyBizFinder', description: 'Rules for using NearbyBizFinder and your responsibilities.' },
};

export default function TermsPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative py-16 lg:py-20 overflow-hidden bg-slate-900 border-b border-white/10">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black opacity-80"></div>
				<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
						<FileText className="w-4 h-4" />
						<span>Legal</span>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display tracking-tight">
						Terms of Service
					</h1>
					<p className="text-lg text-gray-400">
						Last updated: {new Date().getFullYear()}
					</p>
				</div>
			</section>

			{/* Content Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto prose prose-lg prose-gray">
						<h2>Acceptance of Terms</h2>
						<p>By accessing or using NearbyBizFinder (the "Service"), you agree to these Terms. If you do not agree, do not use the Service.</p>

						<h2>Use of the Service</h2>
						<p>You may use the Service only in the United States and in compliance with applicable laws. You will not misuse, reverse engineer, or interfere with the Service.</p>

						<h2>Accounts</h2>
						<p>You are responsible for maintaining the confidentiality of your account and for all activities under your account.</p>

						<h2>Content</h2>
						<p>Content you submit must be accurate and lawful. We may remove content that violates these Terms.</p>

						<h2>Disclaimers</h2>
						<p>The Service is provided "as is" without warranties. We do not guarantee the accuracy or availability of business information.</p>

						<h2>Limitation of Liability</h2>
						<p>To the maximum extent permitted by law, NearbyBizFinder is not liable for indirect or consequential damages.</p>

						<h2>Changes to Terms</h2>
						<p>We may update these Terms from time to time. Continued use constitutes acceptance of the updated Terms.</p>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 bg-gray-50 border-t">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<p className="text-gray-600 mb-4">Have questions about our terms?</p>
					<Link href="/contact">
						<Button variant="outline" className="rounded-full px-6">
							Contact Us
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}
