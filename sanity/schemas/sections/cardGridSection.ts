import {defineType} from 'sanity'
import {baseSectionFields} from '../objects/sectionBase'

export default defineType({
  name: 'cardGridSection',
  title: 'Card Grid Section',
  type: 'object',
  description: 'Flexible cards for thread, what I do, values, or proof points.',
  fields: [
    ...baseSectionFields,
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', type: 'string', title: 'Card Title'},
          {name: 'body', type: 'text', title: 'Card Body', rows: 4},
          {name: 'tag', type: 'string', title: 'Optional Tag'},
          {name: 'image', type: 'image', title: 'Optional Image', options: {hotspot: true}, fields: [{name: 'alt', type: 'string', title: 'Alt Text'}]}
        ],
        preview: {select: {title: 'title', subtitle: 'tag'}}
      }]
    }
  ] as any,
  preview: {
    select: {title: 'title', subtitle: 'eyebrow'},
    prepare({title, subtitle}) {
      return {title: title || 'Card Grid Section', subtitle: subtitle || 'cardGridSection'}
    }
  }
})
