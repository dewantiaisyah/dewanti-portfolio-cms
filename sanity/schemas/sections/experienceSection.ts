import {defineType} from 'sanity'
import {baseSectionFields} from '../objects/sectionBase'

export default defineType({
  name: 'experienceSection',
  title: 'Experience Section',
  type: 'object',
  description: 'Pulls experience documents from Sanity.',
  fields: [
    ...baseSectionFields,
    {name: 'items', title: 'Experience to Feature', type: 'array', of: [{type: 'reference', to: [{type: 'experience'}]}]},
    {name: 'showAllExperience', title: 'Show all published experience if no manual selection?', type: 'boolean', initialValue: true}
  ] as any,
  preview: {
    select: {title: 'title', subtitle: 'eyebrow'},
    prepare({title, subtitle}) {
      return {title: title || 'Experience Section', subtitle: subtitle || 'experienceSection'}
    }
  }
})
