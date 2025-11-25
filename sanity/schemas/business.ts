import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'business',
	title: 'Business',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			type: 'string',
			title: 'Name',
			validation: (rule: any) => rule.required(),
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: { source: 'name', maxLength: 96 },
			validation: (rule: any) => rule.required(),
		}),
		defineField({
			name: 'description',
			type: 'text',
			title: 'Description',
		}),
		defineField({
			name: 'category',
			type: 'reference',
			// Type narrowing hiccup in some TS setups; casting keeps schema valid
			to: [{ type: 'category' }],
			title: 'Category',
			validation: (rule: any) => rule.required(),
		} as any),
		defineField({
			name: 'website',
			type: 'url',
			title: 'Website',
		}),
		defineField({
			name: 'phone',
			type: 'string',
			title: 'Phone',
		}),
		defineField({
			name: 'email',
			type: 'string',
			title: 'Email',
		}),
		defineField({
			name: 'address',
			type: 'string',
			title: 'Address',
		}),
		defineField({
			name: 'city',
			type: 'string',
			title: 'City',
		}),
		defineField({
			name: 'state',
			type: 'string',
			title: 'State',
		}),
		defineField({
			name: 'zip_code',
			type: 'string',
			title: 'ZIP Code',
		}),
		defineField({
			name: 'location',
			type: 'geopoint',
			title: 'Location (lat/lng)',
		}),
		defineField({
			name: 'images',
			type: 'array',
			of: [{ type: 'image' }],
			title: 'Images',
			options: { layout: 'grid' },
		} as any),
		defineField({
			name: 'featuredImage',
			type: 'image',
			title: 'Featured Image',
		}),
		defineField({
			name: 'rating',
			type: 'number',
			title: 'Rating',
		}),
		defineField({
			name: 'reviewCount',
			type: 'number',
			title: 'Review Count',
		}),
		defineField({
			name: 'priceRange',
			type: 'string',
			title: 'Price Range',
		}),
		defineField({
			name: 'hours',
			type: 'object',
			title: 'Hours',
			fields: [
				{ name: 'monday', type: 'string', title: 'Monday' },
				{ name: 'tuesday', type: 'string', title: 'Tuesday' },
				{ name: 'wednesday', type: 'string', title: 'Wednesday' },
				{ name: 'thursday', type: 'string', title: 'Thursday' },
				{ name: 'friday', type: 'string', title: 'Friday' },
				{ name: 'saturday', type: 'string', title: 'Saturday' },
				{ name: 'sunday', type: 'string', title: 'Sunday' },
			],
		} as any),
		defineField({
			name: 'amenities',
			type: 'array',
			title: 'Amenities',
			of: [{ type: 'string' }],
		} as any),
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'category.name',
			media: 'featuredImage',
		},
	},
});



