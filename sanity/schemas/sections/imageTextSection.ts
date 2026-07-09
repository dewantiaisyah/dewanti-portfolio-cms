import {defineType} from 'sanity'
import {baseSectionFields} from '../objects/sectionBase'

export default defineType({
  name: 'imageTextSection',
  title: 'Image + Text Section',
  type: 'object',
  description: 'Editorial section with stronger visual support.',
  fields: [
    ...baseSectionFields
  ] as any,
  preview: {
    select: {title: 'title', subtitle: 'eyebrow'},
    prepare({title, subtitle}) {
      return {title: title || 'Image + Text Section', subtitle: subtitle || 'imageTextSection'}
    }
  }
})
