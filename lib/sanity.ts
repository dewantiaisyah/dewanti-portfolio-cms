import {createClient, groq} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-07-09'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

export const homepageQuery = groq`{
  "settings": *[_type == "siteSettings"][0]{
    name, role, siteUrl, colors, defaultSeo, personSchema, socialLinks, favicon
  },
  "homepage": *[_type == "homepage"][0]{
    title, seo,
    sections[]{
      ...,
      image{..., asset->},
      ctas[],
      cards[]{..., image{..., asset->}},
      projects[]->{..., image{..., asset->}},
      items[]->{...},
      categories[]->{...}
    }
  },
  "allProjects": *[_type == "project" && isVisible != false] | order(order asc){..., image{..., asset->}},
  "allExperience": *[_type == "experience" && isVisible != false] | order(order asc){...},
  "allSkills": *[_type == "skillCategory" && isVisible != false] | order(order asc){...},
  "allWriting": *[_type == "writing" && isVisible != false] | order(publishedAt desc)[0...6]{...}
}`

export async function getHomepageData() {
  if (!projectId) return null
  return client.fetch(homepageQuery, {}, {next: {revalidate: 60}})
}
