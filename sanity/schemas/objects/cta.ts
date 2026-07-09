import {defineType} from 'sanity'

export default defineType({
  name: 'cta',
  title: 'CTA Button',
  type: 'object',
  fields: [
    {name: 'label', title: 'Button Label', type: 'string'},
    {name: 'href', title: 'Link / Anchor', type: 'string', description: 'Use #projects for homepage anchors or full URL for external links.'},
    {
      name: 'style',
      title: 'Button Style',
      type: 'string',
      initialValue: 'primary',
      options: {
        layout: 'radio',
        list: [
          {title: 'Primary / Terracotta', value: 'primary'},
          {title: 'Secondary / Ink Blue', value: 'secondary'},
          {title: 'Outline', value: 'outline'}
        ]
      }
    }
  ],
  preview: {select: {title: 'label', subtitle: 'href'}}
})
