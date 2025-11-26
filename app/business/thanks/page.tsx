import Link from 'next/link';

export default function SubmissionThanksPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="max-w-xl mx-auto bg-white border rounded-lg p-8 text-center">
					<h1 className="text-2xl font-semibold mb-3">Thank you!</h1>
					<p className="text-gray-600 mb-6">
						Your business submission has been received. Our team will review and publish it shortly.
					</p>
					<div className="flex justify-center gap-4">
						<Link className="text-blue-600 hover:underline" href="/search/">Back to search</Link>
						<Link className="text-blue-600 hover:underline" href="/">Go home</Link>
					</div>
				</div>
			</div>
		</div>
	);
}


