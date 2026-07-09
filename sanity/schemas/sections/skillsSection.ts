import {defineType} from 'sanity'
import {baseSectionFields} from '../objects/sectionBase'

export default defineType({
  name: 'skillsSection',
  title: 'Skills Section',
  type: 'object',
  description: 'Pulls skill category documents from Sanity.',
  fields: [
    ...baseSectionFields,
    {name: 'categories', title: 'Skill Categories to Feature', type: 'array', of: [{type: 'reference', to: [{type: 'skillCategory'}]}]},
    {name: 'showAllSkills', title: 'Show all published skill categories if no manual selection?', type: 'boolean', initialValue: true}
  ] as any,
  preview: {
    select: {title: 'title', subtitle: 'eyebrow'},
    prepare({title, subtitle}) {
      return {title: title || 'Skills Section', subtitle: subtitle || 'skillsSection'}
    }
  }
})
