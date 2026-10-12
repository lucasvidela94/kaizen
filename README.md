# Kaizen

Personal portfolio of Lucas Videla, full-stack engineer. Live at https://lucasvidela.com.ar

## Stack

React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, React Router. Deployed on Vercel.

## Development

```bash
pnpm install
pnpm dev          # http://localhost:8080
pnpm type-check
pnpm build        # vite build + scripts/prerender.mjs
```

## How SEO works

- `src/lib/site.ts` holds the site URL and per-page title and description.
- `src/components/seo.tsx` updates the title, description, canonical and OG tags on client-side navigation.
- `scripts/prerender.mjs` runs after `vite build`. It writes one `index.html` per route (`/about`, `/blog`, every published post) with the right meta tags, and generates `dist/sitemap.xml`. Add new static routes there.
- `public/` has `robots.txt`, `llms.txt` and `og-image.png` (source: `og-image.svg`, 1200x630).

## Content

- Projects: `src/pages/index.tsx`
- Blog posts: `src/data/blog-posts.ts`
- Skills: `src/components/skills-section.tsx`
- Resume: `public/cv_lucasvidela.pdf`
