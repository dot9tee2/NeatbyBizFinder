import { defineField, defineType, defineArrayMember } from 'sanity'


export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        // defineField({
        //     name: 'author',
        //     title: 'Author',
        //     type: 'reference',
        //     to: [{ type: 'author' }],
        // }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        // defineField({
        //     name: 'categories',
        //     title: 'Categories',
        //     type: 'array',
        //     of: [defineArrayMember({ type: 'string' })],
        //     options: {
        //         layout: 'tags',
        //     },
        // }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',

            description: 'A short description of the post for the blog feed.',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'block',
                }),
                defineArrayMember({
                    type: 'image',
                    options: { hotspot: true },
                }),
            ],
        }),
        defineField({
            name: 'seo',
            title: 'SEO & Social',
            type: 'object',
            fields: [
                defineField({
                    name: 'metaTitle',
                    title: 'Meta Title',
                    type: 'string',
                    validation: Rule => Rule.max(60).warning('Long titles may be truncated by search engines')
                }),
                defineField({
                    name: 'metaDescription',
                    title: 'Meta Description',
                    type: 'text',
                    rows: 3,
                    validation: Rule => Rule.max(160).warning('Long descriptions may be truncated by search engines')
                }),
                defineField({
                    name: 'ogTitle',
                    title: 'Social Share Title',
                    type: 'string',
                    description: 'Optional. If empty, uses Meta Title.'
                }),
                defineField({
                    name: 'ogDescription',
                    title: 'Social Share Description',
                    type: 'text',
                    rows: 3,
                    description: 'Optional. If empty, uses Meta Description.'
                }),
                defineField({
                    name: 'ogImage',
                    title: 'Social Share Image',
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }),
            ]
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})
