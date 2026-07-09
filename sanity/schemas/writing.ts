import {defineType} from 'sanity'

export default defineType({
  name: 'writing',
  title: 'Writing / Thinking',
  type: 'document',
  fields: [
    {name: 'isVisible', title: 'Show this writing?', type: 'boolean', initialValue: true},
    {name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()},
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}},
    {name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3},
    {name: 'body', title: 'Body', type: 'blockContent'},
    {name: 'externalUrl', title: 'External URL', type: 'url', description: 'Use this for blog posts hosted elsewhere.'},
    {name: 'publishedAt', title: 'Published At', type: 'datetime'},
    {name: 'coverImage', title: 'Cover Image', type: 'image', options: {hotspot: true}, fields: [{name: 'alt', title: 'Alt Text', type: 'string'}]},
    {name: 'tags', title: 'Tags', type: 'array', of: [{type: 'string'}], options: {layout: 'tags'}},
    {name: 'seo', title: 'SEO', type: 'seo'}
  ],
  preview: {select: {title: 'title', subtitle: 'publishedAt', media: 'coverImage'}}
})
