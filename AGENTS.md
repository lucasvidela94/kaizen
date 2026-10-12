# kaizen

Personal portfolio and blog for lucasvidela.com.ar. Static Astro 7 site with Tailwind 4 and no UI framework; interactivity is small vanilla scripts. pnpm is the package manager.

A change is done when `pnpm typecheck` and `pnpm build` pass.

## Dev server

Start it in background mode: `astro dev --background`. Manage it with `astro dev stop`, `astro dev status`, `astro dev logs`.

## Architecture

Atomic design under `src/components/`. Place a component by what it contains:

- `atoms/`: one element, no other component inside, no domain knowledge (badge, card, icon).
- `molecules/`: a few atoms forming one unit that takes props (project-card, post-meta).
- `organisms/`: a page section built from molecules, may read `src/data` or `src/lib` (hero, skills-section).
- `src/layouts/` are the templates; `src/pages/` compose organisms and hold no markup of their own beyond composition.

Everything else has one home:

- `src/data/`: copy and lists (projects, skills, about, nav, site constants). Edit content here, not inside components.
- `src/content/blog/`: posts as markdown. Frontmatter schema lives in `src/content.config.ts`.
- `src/lib/`: pure helpers. `src/scripts/`: client-side scripts, imported from a component's `<script>`.
- `src/styles/global.css`: design tokens. Colors come from the `portfolio-*` tokens.

## Conventions

- File names are kebab-case; component, prop and variable names are English.
- Keep a component under ~80 lines; extract a smaller component when it grows.
- A new page takes its title and description from `pageMeta` in `src/data/site.ts` and renders inside `layouts/base-layout.astro`, which wires SEO, canonical and theme.
- `src/pages/llms.txt.ts` is generated from `src/data/projects.ts`; update projects there only.
- Private GitHub repos stay out of the site.

## Tooling

Husky runs lint-staged (oxfmt, oxlint) and `pnpm typecheck` on commit.

- oxlint runs type-aware (oxlint-tsgolint) and lints the frontmatter and `<script>` blocks of `.astro` files. Plugins are listed in `.oxlintrc.json`; add one there when a new kind of code needs it.
- oxfmt formats TS, CSS, JSON and Markdown and sorts imports. It does not read `.astro` files, so match the formatting of the neighboring `.astro` file by hand.

## Deploy

Cloudflare Workers serving `dist/` as static assets (`wrangler.jsonc`). Every push to `main` deploys through `.github/workflows/ci.yml` after lint, typecheck and build pass; pull requests run the checks only. The workflow reads the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repo secrets. `pnpm cf:deploy` deploys by hand.

Trailing slashes are dropped by `html_handling`, matching `trailingSlash: "never"` in `astro.config.mjs`; change both together.

## Docs

- Editing this file, or any skill: use the `writing-for-agents` skill.
- Adding pages, dynamic routes, middleware: https://docs.astro.build/en/guides/routing/
- Astro components: https://docs.astro.build/en/basics/astro-components/
- Content collections: https://docs.astro.build/en/guides/content-collections/
- Styles and Tailwind: https://docs.astro.build/en/guides/styling/
