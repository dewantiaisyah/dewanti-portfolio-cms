import {defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {name: 'title', title: 'Internal Title', type: 'string', initialValue: 'Homepage'},
    {name: 'seo', title: 'Homepage SEO', type: 'seo'},
    {
      name: 'sections',
      title: 'Homepage Sections',
      description: 'Add, remove, reorder, hide, or publish homepage sections here. Drag sections to reorder.',
      type: 'array',
      of: [
        {type: 'heroSection'},
        {type: 'richTextSection'},
        {type: 'cardGridSection'},
        {type: 'projectsSection'},
        {type: 'experienceSection'},
        {type: 'skillsSection'},
        {type: 'ctaSection'},
        {type: 'contactSection'},
        {type: 'imageTextSection'}
      ]
    }
  ],
  preview: {select: {title: 'title'}}
})
