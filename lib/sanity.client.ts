import { createClient } from 'next-sanity';

const projectId =
	process.env.SANITY_PROJECT_ID ||
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
	'';
const dataset =
	process.env.SANITY_DATASET ||
	process.env.NEXT_PUBLIC_SANITY_DATASET ||
	'production';
const apiVersion = process.env.SANITY_API_VERSION || '2024-11-01';

export const sanityClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
	perspective: 'published',
});



