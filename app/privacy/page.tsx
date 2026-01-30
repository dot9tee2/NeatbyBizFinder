import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
	title: 'Privacy Policy | NearbyBizFinder',
	description: 'Privacy Policy describing how NearbyBizFinder collects and uses data in the United States.',
	robots: 'index, follow',
	alternates: { canonical: '/privacy/' },
	openGraph: { title: 'Privacy Policy | NearbyBizFinder', description: 'How we collect, use, and protect your data.' },
	twitter: { card: 'summary', title: 'Privacy Policy | NearbyBizFinder', description: 'How we collect, use, and protect your data.' },
};

export default function PrivacyPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative py-16 lg:py-20 overflow-hidden bg-slate-900 border-b border-white/10">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black opacity-80"></div>
				<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
						<Shield className="w-4 h-4" />
						<span>Your Privacy Matters</span>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display tracking-tight">
						Privacy Policy
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
						<h2>Information We Collect</h2>
						<p>We collect account details and usage data to provide and improve the Service.</p>

						<h2>How We Use Information</h2>
						<p>We use information to operate the Service, personalize experiences, and communicate updates.</p>

						<h2>Data Sharing</h2>
						<p>We do not sell personal data. We may share with service providers under appropriate safeguards.</p>

						<h2>Security</h2>
						<p>We use reasonable technical and organizational measures to protect data.</p>

						<h2>Your Choices</h2>
						<p>You can update your account or request deletion subject to legal obligations.</p>

						<h2>Contact Us</h2>
						<p>For privacy inquiries, contact <a href="mailto:support@nearbybizfinder.com">support@nearbybizfinder.com</a>.</p>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 bg-gray-50 border-t">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<p className="text-gray-600 mb-4">Have questions about your privacy?</p>
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
