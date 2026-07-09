import {defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO & GEO Metadata',
  type: 'object',
  fields: [
    {name: 'metaTitle', title: 'Meta Title', type: 'string', validation: (Rule) => Rule.max(70)},
    {name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3, validation: (Rule) => Rule.max(170)},
    {name: 'canonicalUrl', title: 'Canonical URL', type: 'url'},
    {name: 'ogImage', title: 'Open Graph Image', type: 'image', options: {hotspot: true}, fields: [{name: 'alt', title: 'Alt Text', type: 'string'}]},
    {name: 'keywords', title: 'Keywords / GEO Topics', type: 'array', of: [{type: 'string'}], options: {layout: 'tags'}}
  ]
})
