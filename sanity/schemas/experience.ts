import {defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {name: 'isVisible', title: 'Show this experience?', type: 'boolean', initialValue: true},
    {name: 'role', title: 'Role', type: 'string', validation: (Rule) => Rule.required()},
    {name: 'company', title: 'Company', type: 'string'},
    {name: 'location', title: 'Location', type: 'string'},
    {name: 'startDate', title: 'Start Date', type: 'date'},
    {name: 'endDate', title: 'End Date', type: 'date', description: 'Leave empty for current role.'},
    {name: 'summary', title: 'Summary', type: 'text', rows: 4},
    {name: 'body', title: 'Long Description', type: 'blockContent'},
    {name: 'impact', title: 'Selected Impact', type: 'array', of: [{type: 'string'}]},
    {name: 'skills', title: 'Related Skills', type: 'array', of: [{type: 'string'}], options: {layout: 'tags'}},
    {name: 'order', title: 'Manual Order', type: 'number', initialValue: 0}
  ],
  orderings: [{title: 'Manual order', name: 'manualOrder', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'role', subtitle: 'company'}}
})
