import {defineType} from 'sanity'

export default defineType({
  name: 'skillCategory',
  title: 'Skill Category',
  type: 'document',
  fields: [
    {name: 'isVisible', title: 'Show this category?', type: 'boolean', initialValue: true},
    {name: 'title', title: 'Category Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text', rows: 3},
    {name: 'skills', title: 'Skills', type: 'array', of: [{type: 'string'}], options: {layout: 'tags'}},
    {name: 'order', title: 'Manual Order', type: 'number', initialValue: 0}
  ],
  orderings: [{title: 'Manual order', name: 'manualOrder', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'description'}}
})
