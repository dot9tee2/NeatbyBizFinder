// Approve submission, create a published Business doc, and rely on webhook for revalidation
export const approveAndPublishSubmissionAction = (props: any) => {
	if (props.type !== 'businessSubmission') return null;

	return {
		label: 'Approve, Promote & Publish',
		title: 'Approve this submission and create a published Business document',
		onHandle: async () => {
			const client = props.client.withConfig({ apiVersion: '2024-11-01' });
			try {
				const docId = props.id;
				const sub = await client.getDocument(docId);
				if (!sub) {
					props.onComplete();
					return;
				}

				const category =
					sub.category
						? await client.fetch(
								`*[_type=="category" && (name==$q || slug.current==$q)][0]{_id}`,
								{ q: sub.category }
						  )
						: null;

				const slug =
					(sub.name || '')
						.toLowerCase()
						.trim()
						.replace(/[^a-z0-9\s-]/g, '')
						.replace(/\s+/g, '-')
						.slice(0, 96) || `business-${Date.now()}`;

				const businessDoc: any = {
					_type: 'business',
					name: sub.name || '',
					slug: { _type: 'slug', current: slug },
					description: sub.description || '',
					category: category ? { _type: 'reference', _ref: category._id } : undefined,
					address: sub.address || '',
					city: sub.city || '',
					state: sub.state || '',
					zip_code: sub.zip_code || '',
					phone: sub.phone || '',
					website: sub.website || '',
					email: sub.email || '',
					priceRange: sub.priceRange || '$$',
					featuredImage: sub.featuredImage || undefined,
					images: sub.images || [],
					rating: 0,
					reviewCount: 0,
				};

				// Create as published (no drafts. prefix)
				await client.create(businessDoc);

				// Mark submission as approved
				await client.patch(docId).set({ status: 'approved' }).commit();

				// Revalidation will be performed by your configured Sanity webhook on publish
				props.onComplete();
			} catch (e) {
				// eslint-disable-next-line no-console
				console.error('Approve, Promote & Publish failed:', e);
				props.onComplete();
			}
		},
	};
};


