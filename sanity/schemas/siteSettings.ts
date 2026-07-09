import {defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'identity', title: 'Identity'},
    {name: 'colors', title: 'Brand Colors'},
    {name: 'seo', title: 'SEO / GEO'},
    {name: 'social', title: 'Social Links'}
  ],
  fields: [
    {name: 'name', title: 'Full Name', type: 'string', group: 'identity'},
    {name: 'role', title: 'Role / Positioning', type: 'string', group: 'identity'},
    {name: 'siteUrl', title: 'Live Website URL', type: 'url', group: 'identity'},
    {name: 'favicon', title: 'Favicon', type: 'image', group: 'identity'},
    {
      name: 'colors',
      title: 'Global Colors',
      type: 'object',
      group: 'colors',
      fields: [
        {name: 'primary', title: 'Primary / Terracotta', type: 'string', initialValue: '#B85C38'},
        {name: 'secondary', title: 'Secondary / Muted Sage', type: 'string', initialValue: '#8FA58E'},
        {name: 'background', title: 'Background / Warm Ivory', type: 'string', initialValue: '#F8F3EA'},
        {name: 'cardBackground', title: 'Card Background / Soft Sand', type: 'string', initialValue: '#EFE3D3'},
        {name: 'text', title: 'Text / Deep Charcoal', type: 'string', initialValue: '#252321'},
        {name: 'accent', title: 'Accent / Ink Blue', type: 'string', initialValue: '#2F4F5F'}
      ]
    },
    {name: 'defaultSeo', title: 'Default SEO', type: 'seo', group: 'seo'},
    {
      name: 'personSchema',
      title: 'Person Structured Data',
      type: 'object',
      group: 'seo',
      fields: [
        {name: 'jobTitle', type: 'string', title: 'Job Title'},
        {name: 'description', type: 'text', title: 'Description', rows: 3},
        {name: 'sameAs', type: 'array', title: 'SameAs Links', of: [{type: 'url'}]}
      ]
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      group: 'social',
      of: [{
        type: 'object',
        fields: [
          {name: 'label', title: 'Label', type: 'string'},
          {name: 'url', title: 'URL', type: 'url'},
          {name: 'isPrimary', title: 'Highlight?', type: 'boolean', initialValue: false}
        ],
        preview: {select: {title: 'label', subtitle: 'url'}}
      }]
    }
  ],
  preview: {select: {title: 'name', subtitle: 'role'}}
})
