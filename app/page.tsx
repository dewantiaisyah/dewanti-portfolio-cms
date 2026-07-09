import type {Metadata} from 'next'
import {RenderSection} from '@/components/Sections'
import {getHomepageData, urlFor} from '@/lib/sanity'
import {fallbackData} from '@/lib/fallback'

export const revalidate = 60

async function loadData() {
  const data = await getHomepageData().catch(() => null)
  return data?.settings && data?.homepage ? data : fallbackData
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await loadData()
  const seo = data.homepage?.seo || data.settings?.defaultSeo || {}
  const siteUrl = data.settings?.siteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'
  const ogImage = seo.ogImage?.asset ? urlFor(seo.ogImage).width(1200).height(630).url() : undefined
  return {
    metadataBase: new URL(siteUrl),
    title: seo.metaTitle || 'Dewanti Aisyah Legowo — Growth Marketing Portfolio',
    description: seo.metaDescription || 'A warm, editorial portfolio for Dewanti Aisyah Legowo.',
    alternates: {canonical: seo.canonicalUrl || siteUrl},
    keywords: seo.keywords || [],
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url: siteUrl,
      images: ogImage ? [{url: ogImage, alt: seo.ogImage?.alt || seo.metaTitle || 'Dewanti portfolio'}] : []
    }
  }
}

export default async function Home() {
  const data = await loadData()
  const settings = data.settings
  const colors = settings.colors || {}
  const styleVars = {
    '--color-primary': colors.primary || '#B85C38',
    '--color-secondary': colors.secondary || '#8FA58E',
    '--color-background': colors.background || '#F8F3EA',
    '--color-card': colors.cardBackground || '#EFE3D3',
    '--color-text': colors.text || '#252321',
    '--color-accent': colors.accent || '#2F4F5F'
  } as React.CSSProperties

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: settings.name || 'Dewanti Aisyah Legowo',
    jobTitle: settings.personSchema?.jobTitle || settings.role,
    description: settings.personSchema?.description || settings.defaultSeo?.metaDescription,
    url: settings.siteUrl || process.env.NEXT_PUBLIC_SITE_URL,
    sameAs: settings.personSchema?.sameAs || settings.socialLinks?.map((link: any) => link.url).filter(Boolean)
  }

  return (
    <main style={styleVars}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(personSchema)}} />
      <nav className="topbar">
        <a href="#home" className="topbar__brand">{settings.name || 'Dewanti'}</a>
        <div>
          <a href="#projects">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      {data.homepage.sections?.map((section: any, index: number) => (
        <RenderSection key={section._key || `${section._type}-${index}`} section={section} settings={settings} allProjects={data.allProjects || []} allExperience={data.allExperience || []} allSkills={data.allSkills || []} />
      ))}
    </main>
  )
}
