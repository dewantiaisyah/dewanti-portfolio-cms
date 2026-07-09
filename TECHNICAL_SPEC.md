# Technical Specification

## Architecture

- Frontend: Next.js App Router
- CMS: Sanity Studio embedded at `/studio`
- Content source: Sanity Content Lake
- Hosting: Vercel
- Version control: GitHub

## CMS-first rules

The homepage is rendered from a single `homepage` document. The `sections` array is modular, so non-technical editors can add, remove, reorder, hide, or publish sections in Sanity.

Reusable content lives in separate documents:

- `project`
- `experience`
- `skillCategory`
- `writing`

Global settings live in the singleton `siteSettings` document.

## Modular section blocks

- `heroSection`
- `richTextSection`
- `cardGridSection`
- `projectsSection`
- `experienceSection`
- `skillsSection`
- `ctaSection`
- `contactSection`
- `imageTextSection`

Each section includes:

- `isVisible` show/hide toggle
- `anchorId`
- `eyebrow`
- `title`
- `subtitle`
- `body`
- optional image with alt text
- CTA button array
- layout option
- background style

## SEO and GEO

Implemented:

- Metadata through `generateMetadata`
- Meta title and description from Sanity
- Canonical URL
- Open Graph image field
- Sitemap through `app/sitemap.ts`
- Robots through `app/robots.ts`
- Favicon through `app/icon.svg`
- Image alt text fields in Sanity
- Person structured data JSON-LD
- Static `public/llms.txt` for generative engine context

## Editing guide

For everyday editing, open `/studio` and use:

1. Site Settings for colors, social links, SEO, and identity.
2. Homepage Sections for homepage content and ordering.
3. Projects / Experience / Skill Categories / Writing for reusable content.
