import type {MetadataRoute} from 'next'
import {client, projectId} from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'
  const now = new Date()
  let dynamicRoutes: MetadataRoute.Sitemap = []

  if (projectId) {
    const docs = await client.fetch(`*[_type in ["project", "writing"] && defined(slug.current) && isVisible != false]{_type, "slug": slug.current, _updatedAt}`).catch(() => [])
    dynamicRoutes = docs.map((doc: any) => ({
      url: `${baseUrl}/${doc._type === 'project' ? 'projects' : 'writing'}/${doc.slug}`,
      lastModified: new Date(doc._updatedAt),
      changeFrequency: 'monthly',
      priority: 0.7
    }))
  }

  return [
    {url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1},
    ...dynamicRoutes
  ]
}
