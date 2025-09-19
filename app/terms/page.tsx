import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Terms of Service | NearbyBizFinder',
	description: 'Terms of Service governing the use of NearbyBizFinder in the United States.',
	robots: 'index, follow',
};

export default function TermsPage() {
	return (
		<div className="min-h-screen bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
				<p className="text-gray-600 mb-4">Last updated: {new Date().getFullYear()}</p>
				<div className="prose max-w-none">
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
		</div>
	);
}


