import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'businessSubmission',
	title: 'Business Submission',
	type: 'document',
	fields: [
		defineField({ name: 'name', type: 'string', title: 'Name', validation: (rule: any) => rule.required() }),
		defineField({ name: 'description', type: 'text', title: 'Description' }),
		defineField({ name: 'category', type: 'string', title: 'Category' }),
		defineField({ name: 'address', type: 'string', title: 'Address' }),
		defineField({ name: 'city', type: 'string', title: 'City' }),
		defineField({ name: 'state', type: 'string', title: 'State' }),
		defineField({ name: 'zip_code', type: 'string', title: 'ZIP Code' }),
		defineField({ name: 'phone', type: 'string', title: 'Phone' }),
		defineField({ name: 'website', type: 'url', title: 'Website' }),
		defineField({ name: 'email', type: 'string', title: 'Email' }),
		defineField({ name: 'priceRange', type: 'string', title: 'Price Range' }),
		defineField({ name: 'featuredImage', type: 'image', title: 'Featured Image' }),
		defineField({ name: 'images', type: 'array', of: [{ type: 'image' }], title: 'Images' } as any),
		defineField({
			name: 'status',
			type: 'string',
			title: 'Status',
			options: { list: ['pending', 'approved', 'rejected'] },
			initialValue: 'pending',
		}),
		defineField({ name: 'submittedByUserId', type: 'string', title: 'Submitted By (User ID)' }),
		defineField({ name: 'submittedByEmail', type: 'string', title: 'Submitted By (Email)' }),
		defineField({ name: 'submittedAt', type: 'datetime', title: 'Submitted At' }),
	],
	preview: {
		select: { title: 'name', subtitle: 'submittedByEmail' },
	},
});


