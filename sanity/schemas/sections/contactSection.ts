import {defineType} from 'sanity'
import {baseSectionFields} from '../objects/sectionBase'

export default defineType({
  name: 'contactSection',
  title: 'Contact Section',
  type: 'object',
  description: 'Contact links from Site Settings plus optional copy.',
  fields: [
    ...baseSectionFields,
    {name: 'showSocialLinks', title: 'Show social links from Site Settings?', type: 'boolean', initialValue: true}
  ] as any,
  preview: {
    select: {title: 'title', subtitle: 'eyebrow'},
    prepare({title, subtitle}) {
      return {title: title || 'Contact Section', subtitle: subtitle || 'contactSection'}
    }
  }
})
