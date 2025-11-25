import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

// IMPORTANT: Studio runs in the browser — use NEXT_PUBLIC_ env vars
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
	name: 'default',
	title: 'NearbyBizFinder CMS',
	projectId,
	dataset,
	basePath: '/studio',
	plugins: [deskTool(), visionTool()],
	schema: {
		types: schemas,
	},
});


