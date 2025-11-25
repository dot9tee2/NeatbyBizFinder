'use client';

import { useEffect, useState } from 'react';
import { businesses as db } from '@/lib/supabase';

export default function ImportPage() {
	const [loading, setLoading] = useState(true);
	const [items, setItems] = useState<any[]>([]);
	const [importingId, setImportingId] = useState<string | null>(null);
	const [message, setMessage] = useState<string | null>(null);

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const { data } = await db.getAll();
				setItems(data || []);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	const importOne = async (b: any) => {
		setImportingId(b.id);
		setMessage(null);
		try {
			const resp = await fetch('/api/admin/import-listing', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ business: b }),
			});
			const json = await resp.json();
			if (!resp.ok) throw new Error(json?.error || 'Failed');
			setMessage(`Imported as ${json.id}`);
		} catch (e: any) {
			setMessage(e?.message || 'Failed');
		} finally {
			setImportingId(null);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h1 className="text-2xl font-semibold mb-4">Admin: Import Listings to Sanity</h1>
				<p className="text-sm text-gray-600 mb-6">One-time import tool. Choose the listing to import into Sanity.</p>
				{message && <p className="mb-4 text-sm">{message}</p>}
				{loading ? (
					<div>Loading…</div>
				) : (
					<table className="min-w-full bg-white border rounded-lg overflow-hidden">
						<thead className="bg-gray-100">
							<tr>
								<th className="text-left p-3 border-b">Name</th>
								<th className="text-left p-3 border-b">Category</th>
								<th className="text-left p-3 border-b">Rating</th>
								<th className="text-left p-3 border-b">Action</th>
							</tr>
						</thead>
						<tbody>
							{items.map((b) => (
								<tr key={b.id} className="border-b">
									<td className="p-3">{b.name}</td>
									<td className="p-3">{b.category}</td>
									<td className="p-3">{b.rating}</td>
									<td className="p-3">
										<button
											onClick={() => importOne(b)}
											disabled={!!importingId}
											className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50"
										>
											{importingId === b.id ? 'Importing…' : 'Import'}
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
}



