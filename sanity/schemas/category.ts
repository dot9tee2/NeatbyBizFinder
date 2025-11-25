import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'category',
	title: 'Category',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			type: 'string',
			title: 'Name',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'icon',
			type: 'string',
			title: 'Icon (emoji or short label)',
		}),
		defineField({
			name: 'order',
			type: 'number',
			title: 'Order',
		}),
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'slug.current',
		},
	},
});



