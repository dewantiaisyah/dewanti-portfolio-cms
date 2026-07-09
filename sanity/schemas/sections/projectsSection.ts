import {defineType} from 'sanity'
import {baseSectionFields} from '../objects/sectionBase'

export default defineType({
  name: 'projectsSection',
  title: 'Projects Section',
  type: 'object',
  description: 'Pulls selected project documents from Sanity.',
  fields: [
    ...baseSectionFields,
    {name: 'projects', title: 'Projects to Feature', type: 'array', of: [{type: 'reference', to: [{type: 'project'}]}]},
    {name: 'showAllProjects', title: 'Show all published projects if no manual selection?', type: 'boolean', initialValue: true}
  ] as any,
  preview: {
    select: {title: 'title', subtitle: 'eyebrow'},
    prepare({title, subtitle}) {
      return {title: title || 'Projects Section', subtitle: subtitle || 'projectsSection'}
    }
  }
})
