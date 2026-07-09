import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'
import {deskStructure} from './sanity/desk/structure'

export default defineConfig({
  name: 'dewantiPortfolio',
  title: 'Dewanti Portfolio CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    structureTool({structure: deskStructure}),
    visionTool()
  ],
  schema: {
    types: schemaTypes
  }
})
