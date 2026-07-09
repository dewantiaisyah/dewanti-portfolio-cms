# Dewanti Aisyah Legowo — CMS-first Portfolio

A lightweight, CMS-first personal portfolio built with Next.js, Sanity CMS, GitHub, and Vercel.

## What this starter includes

- Next.js App Router frontend
- Sanity Studio embedded at `/studio`
- CMS-first homepage with modular sections
- Homepage sections can be added, removed, reordered, hidden, and published from Sanity
- Editable copywriting, images, CTA buttons, project details, experience details, skill categories, writing links, SEO metadata, and social links
- Editable global colors from `Site Settings`
- Warm Map & Story visual direction
- SEO basics: metadata, canonical URL, sitemap, robots.txt, image alt fields, Open Graph image fields
- Person structured data for search and generative engines

## CMS structure for non-technical editing

In Sanity Studio, use these main menus:

1. **Site Settings** — name, role, social links, site URL, global colors, default SEO, Person structured data.
2. **Homepage Sections** — drag sections to reorder; toggle show/hide; edit titles, body, images, CTAs, layout, and background.
3. **Projects** — reusable project cards.
4. **Experience** — reusable experience timeline items.
5. **Skill Categories** — grouped skills.
6. **Writing / Thinking** — blog links or writing entries.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open:

- Website: `http://localhost:3000`
- Sanity Studio: `http://localhost:3000/studio`

## Sanity setup

1. Create a Sanity project.
2. Copy your project ID into `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2026-07-09"
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
```

3. Add your local and Vercel domains to Sanity CORS origins.
4. Create a write token in Sanity if you want to run the seed script.
5. Add it to `.env.local`:

```bash
SANITY_WRITE_TOKEN="your_write_token"
```

6. Run:

```bash
npm run seed:sanity
```

After this, your homepage content will appear in Sanity and can be edited without touching code.

## GitHub + Vercel deployment

1. Create a new GitHub repository.
2. Push this folder to GitHub.
3. In Vercel, import the GitHub repository.
4. Add the same environment variables in Vercel Project Settings.
5. Deploy.
6. After the first deploy, add the Vercel URL to Sanity CORS origins.
7. Replace `NEXT_PUBLIC_SITE_URL` with your final Vercel/custom domain.

## Editing colors from Sanity

Go to `Site Settings` → `Brand Colors`.

Default palette:

- Primary / Terracotta: `#B85C38`
- Secondary / Muted Sage: `#8FA58E`
- Background / Warm Ivory: `#F8F3EA`
- Card Background / Soft Sand: `#EFE3D3`
- Text / Deep Charcoal: `#252321`
- Accent / Ink Blue: `#2F4F5F`

## Homepage section types

- `heroSection`
- `richTextSection`
- `cardGridSection`
- `projectsSection`
- `experienceSection`
- `skillsSection`
- `ctaSection`
- `contactSection`
- `imageTextSection`

Each section includes a show/hide toggle, title, subtitle, body copy, optional image, optional CTA, layout option, background style, and drag-and-drop order support.

## Notes

This starter includes fallback content so the page still renders before Sanity is configured. Once Sanity is connected and seeded, the CMS becomes the source of truth.
