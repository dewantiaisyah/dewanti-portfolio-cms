import {defineType} from 'sanity'
import {baseSectionFields} from '../objects/sectionBase'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  description: 'Landing hero with headline, intro, tagline, and CTA buttons.',
  fields: [
    ...baseSectionFields
  ] as any,
  preview: {
    select: {title: 'title', subtitle: 'eyebrow'},
    prepare({title, subtitle}) {
      return {title: title || 'Hero Section', subtitle: subtitle || 'heroSection'}
    }
  }
})
