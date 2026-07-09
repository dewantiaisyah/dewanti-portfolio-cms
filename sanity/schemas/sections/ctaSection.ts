import {defineType} from 'sanity'
import {baseSectionFields} from '../objects/sectionBase'

export default defineType({
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'object',
  description: 'Focused call-to-action block.',
  fields: [
    ...baseSectionFields
  ] as any,
  preview: {
    select: {title: 'title', subtitle: 'eyebrow'},
    prepare({title, subtitle}) {
      return {title: title || 'CTA Section', subtitle: subtitle || 'ctaSection'}
    }
  }
})
