import {defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {name: 'isVisible', title: 'Show this project?', type: 'boolean', initialValue: true},
    {name: 'title', title: 'Project Title', type: 'string', validation: (Rule) => Rule.required()},
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}},
    {name: 'category', title: 'Category', type: 'string'},
    {name: 'summary', title: 'Short Summary', type: 'text', rows: 3},
    {name: 'body', title: 'Detail Copy', type: 'blockContent'},
    {name: 'image', title: 'Project Image', type: 'image', options: {hotspot: true}, fields: [{name: 'alt', title: 'Alt Text', type: 'string'}]},
    {name: 'proofPoints', title: 'Proof Points / Impact', type: 'array', of: [{type: 'string'}]},
    {name: 'tools', title: 'Tools / Skills', type: 'array', of: [{type: 'string'}], options: {layout: 'tags'}},
    {name: 'ctas', title: 'CTA Buttons', type: 'array', of: [{type: 'cta'}]},
    {name: 'order', title: 'Manual Order', type: 'number', initialValue: 0},
    {name: 'seo', title: 'SEO', type: 'seo'}
  ],
  orderings: [{title: 'Manual order', name: 'manualOrder', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'category', media: 'image'}}
})
