import {defineType} from 'sanity'
import {baseSectionFields} from '../objects/sectionBase'

export default defineType({
  name: 'richTextSection',
  title: 'Rich Text Section',
  type: 'object',
  description: 'Editorial text section for About, How I See Work, Geography, AI expansion, and writing.',
  fields: [
    ...baseSectionFields
  ] as any,
  preview: {
    select: {title: 'title', subtitle: 'eyebrow'},
    prepare({title, subtitle}) {
      return {title: title || 'Rich Text Section', subtitle: subtitle || 'richTextSection'}
    }
  }
})
