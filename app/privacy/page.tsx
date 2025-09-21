import type { Metadata } from 'next';

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
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
				<p className="text-gray-600 mb-4">Last updated: {new Date().getFullYear()}</p>
				<div className="prose max-w-none">
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
					<p>For privacy inquiries, contact support@nearbybizfinder.com.</p>
				</div>
			</div>
		</div>
	);
}


