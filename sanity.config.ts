import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';
import { approveSubmissionAction } from './sanity/actions/approve-submission';
import { approveAndPublishSubmissionAction } from './sanity/actions/approve-and-publish';

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
	document: {
		actions: (prev, context) => {
			const a = approveSubmissionAction as unknown as any;
			const b = approveAndPublishSubmissionAction as unknown as any;
			return [b, a, ...prev];
		},
	},
	schema: {
		types: schemas,
	},
});


