import type {StructureResolver} from 'sanity/structure'

const singleton = (S: any, type: string, title: string) =>
  S.listItem()
    .title(title)
    .id(type)
    .child(S.document().schemaType(type).documentId(type).title(title))

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Dewanti Portfolio')
    .items([
      singleton(S, 'siteSettings', 'Site Settings'),
      singleton(S, 'homepage', 'Homepage Sections'),
      S.divider(),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('skillCategory').title('Skill Categories'),
      S.documentTypeListItem('writing').title('Writing / Thinking')
    ])
