import {defineType} from 'sanity'

export const baseSectionFields = [
  {name: 'isVisible', title: 'Show this section?', type: 'boolean', initialValue: true},
  {name: 'anchorId', title: 'Anchor ID', type: 'slug', description: 'Used for links like #projects. Keep lowercase and simple.'},
  {name: 'eyebrow', title: 'Small Label / Eyebrow', type: 'string'},
  {name: 'title', title: 'Title', type: 'string'},
  {name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2},
  {name: 'body', title: 'Body Copy', type: 'blockContent'},
  {name: 'image', title: 'Optional Image', type: 'image', options: {hotspot: true}, fields: [{name: 'alt', title: 'Alt Text', type: 'string', validation: (Rule: any) => Rule.required().warning('Alt text helps SEO and accessibility.')}]} ,
  {name: 'ctas', title: 'CTA Buttons', type: 'array', of: [{type: 'cta'}]},
  {
    name: 'layout',
    title: 'Layout Option',
    type: 'string',
    initialValue: 'default',
    options: {
      layout: 'dropdown',
      list: [
        {title: 'Default', value: 'default'},
        {title: 'Wide Editorial', value: 'wide'},
        {title: 'Two Columns', value: 'twoColumns'},
        {title: 'Image Left', value: 'imageLeft'},
        {title: 'Image Right', value: 'imageRight'},
        {title: 'Compact', value: 'compact'}
      ]
    }
  },
  {
    name: 'backgroundStyle',
    title: 'Background Style',
    type: 'string',
    initialValue: 'ivory',
    options: {
      layout: 'radio',
      list: [
        {title: 'Warm Ivory', value: 'ivory'},
        {title: 'Soft Sand', value: 'sand'},
        {title: 'White / Clean', value: 'white'},
        {title: 'Ink Blue Accent', value: 'ink'}
      ]
    }
  }
]

export default defineType({
  name: 'sectionBase',
  title: 'Section Base',
  type: 'object',
  fields: baseSectionFields as any
})
