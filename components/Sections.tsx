import Image from 'next/image'
import {Button} from './Button'
import {PortableBody} from './PortableBody'
import {urlFor} from '@/lib/sanity'

function sectionId(section: any) {
  return section?.anchorId?.current || undefined
}

function sectionClass(section: any) {
  return `section section--${section?.backgroundStyle || 'ivory'} section--${section?.layout || 'default'}`
}

function SectionIntro({section}: {section: any}) {
  return (
    <div className="section__intro">
      {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
      {section.title && <h2>{section.title}</h2>}
      {section.subtitle && <p className="section__subtitle">{section.subtitle}</p>}
      <PortableBody value={section.body} />
      {!!section.ctas?.length && <div className="button-row">{section.ctas.map((cta: any, i: number) => <Button key={i} {...cta} />)}</div>}
    </div>
  )
}

function SanityImage({image, className}: {image?: any; className?: string}) {
  if (!image?.asset) return null
  const alt = image.alt || 'Portfolio image'
  return <Image className={className} src={urlFor(image).width(1200).height(900).fit('crop').url()} alt={alt} width={1200} height={900} />
}

export function HeroSection({section}: {section: any}) {
  return (
    <section id={sectionId(section)} className="hero">
      <div className="container hero__grid">
        <div>
          {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
          <h1>{section.title}</h1>
          {section.subtitle && <p className="hero__subtitle">{section.subtitle}</p>}
          <PortableBody value={section.body} />
          <div className="button-row">{section.ctas?.map((cta: any, i: number) => <Button key={i} {...cta} />)}</div>
        </div>
        <div className="map-card" aria-hidden="true">
          <span className="map-card__dot map-card__dot--one" />
          <span className="map-card__dot map-card__dot--two" />
          <span className="map-card__dot map-card__dot--three" />
          <div className="map-card__line" />
          <p>Maps → Funnels<br/>Places → Platforms<br/>Signals → Action</p>
        </div>
      </div>
    </section>
  )
}

export function RichTextSection({section}: {section: any}) {
  return <section id={sectionId(section)} className={sectionClass(section)}><div className="container"><SectionIntro section={section} /></div></section>
}

export function ImageTextSection({section}: {section: any}) {
  const reverse = section.layout === 'imageLeft'
  return (
    <section id={sectionId(section)} className={sectionClass(section)}>
      <div className={`container image-text ${reverse ? 'image-text--reverse' : ''}`}>
        <SectionIntro section={section} />
        <SanityImage image={section.image} className="image-text__image" />
      </div>
    </section>
  )
}

export function CardGridSection({section}: {section: any}) {
  return (
    <section id={sectionId(section)} className={sectionClass(section)}>
      <div className="container">
        <SectionIntro section={section} />
        <div className="card-grid">
          {section.cards?.map((card: any, i: number) => (
            <article className="card" key={i}>
              {card.tag && <p className="tag">{card.tag}</p>}
              {card.title && <h3>{card.title}</h3>}
              {card.body && <p>{card.body}</p>}
              <SanityImage image={card.image} className="card__image" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectsSection({section, allProjects}: {section: any; allProjects: any[]}) {
  const projects = section.projects?.length ? section.projects : section.showAllProjects ? allProjects : []
  return (
    <section id={sectionId(section)} className={sectionClass(section)}>
      <div className="container">
        <SectionIntro section={section} />
        <div className="project-grid">
          {projects.map((project: any, i: number) => (
            <article className="project-card" key={project._id || project.title || i}>
              {project.category && <p className="tag">{project.category}</p>}
              <h3>{project.title}</h3>
              {project.summary && <p>{project.summary}</p>}
              {!!project.proofPoints?.length && <ul>{project.proofPoints.map((p: string) => <li key={p}>{p}</li>)}</ul>}
              {!!project.tools?.length && <div className="pill-row">{project.tools.map((tool: string) => <span className="pill" key={tool}>{tool}</span>)}</div>}
              {!!project.ctas?.length && <div className="button-row">{project.ctas.map((cta: any, idx: number) => <Button key={idx} {...cta} />)}</div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ExperienceSection({section, allExperience}: {section: any; allExperience: any[]}) {
  const items = section.items?.length ? section.items : section.showAllExperience ? allExperience : []
  return (
    <section id={sectionId(section)} className={sectionClass(section)}>
      <div className="container">
        <SectionIntro section={section} />
        <div className="timeline">
          {items.map((item: any, i: number) => (
            <article className="timeline__item" key={item._id || item.role || i}>
              <div className="timeline__date">{formatDate(item.startDate)} — {item.endDate ? formatDate(item.endDate) : 'Present'}</div>
              <div>
                <h3>{item.role}</h3>
                {item.company && <p className="muted">{item.company}{item.location ? ` · ${item.location}` : ''}</p>}
                {item.summary && <p>{item.summary}</p>}
                {!!item.impact?.length && <ul>{item.impact.map((p: string) => <li key={p}>{p}</li>)}</ul>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SkillsSection({section, allSkills}: {section: any; allSkills: any[]}) {
  const categories = section.categories?.length ? section.categories : section.showAllSkills ? allSkills : []
  return (
    <section id={sectionId(section)} className={sectionClass(section)}>
      <div className="container">
        <SectionIntro section={section} />
        <div className="skill-grid">
          {categories.map((cat: any, i: number) => (
            <article className="card" key={cat._id || cat.title || i}>
              <h3>{cat.title}</h3>
              {cat.description && <p>{cat.description}</p>}
              <div className="pill-row">{cat.skills?.map((skill: string) => <span className="pill" key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaSection({section}: {section: any}) {
  return <section id={sectionId(section)} className={sectionClass(section)}><div className="container cta-box"><SectionIntro section={section} /></div></section>
}

export function ContactSection({section, settings}: {section: any; settings: any}) {
  return (
    <section id={sectionId(section)} className={sectionClass(section)}>
      <div className="container contact-box">
        <SectionIntro section={section} />
        {section.showSocialLinks && <div className="social-grid">{settings.socialLinks?.map((link: any) => <a key={link.label} href={link.url}>{link.label}</a>)}</div>}
      </div>
    </section>
  )
}

function formatDate(value?: string) {
  if (!value) return ''
  return new Intl.DateTimeFormat('en', {month: 'short', year: 'numeric'}).format(new Date(value))
}

export function RenderSection({section, settings, allProjects, allExperience, allSkills}: any) {
  if (section?.isVisible === false) return null
  switch (section._type) {
    case 'heroSection': return <HeroSection section={section} />
    case 'richTextSection': return <RichTextSection section={section} />
    case 'imageTextSection': return <ImageTextSection section={section} />
    case 'cardGridSection': return <CardGridSection section={section} />
    case 'projectsSection': return <ProjectsSection section={section} allProjects={allProjects} />
    case 'experienceSection': return <ExperienceSection section={section} allExperience={allExperience} />
    case 'skillsSection': return <SkillsSection section={section} allSkills={allSkills} />
    case 'ctaSection': return <CtaSection section={section} />
    case 'contactSection': return <ContactSection section={section} settings={settings} />
    default: return null
  }
}
