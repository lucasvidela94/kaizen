// Post-build step: per-route HTML with correct meta tags, sitemap.xml.
// Vercel serves files from the filesystem before applying rewrites, so
// dist/about/index.html is served for /about while the SPA still hydrates.
import { createServer } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const vite = await createServer({
  root,
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

const { SITE_URL, pageMeta } = await vite.ssrLoadModule("/src/lib/site.ts");
const { blogPosts } = await vite.ssrLoadModule("/src/data/blog-posts.ts");
await vite.close();

const template = await readFile(join(dist, "index.html"), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const setMeta = (html, attr, key, content) => {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`meta ${key} missing in index.html`);
  return html.replace(re, `$1${esc(content)}$2`);
};

const render = ({ path, title, description, type = "website" }) => {
  const url = `${SITE_URL}${path}`;
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(
      /<noscript>[\s\S]*?<\/noscript>/,
      `<noscript><h1>${esc(title)}</h1><p>${esc(description)}</p></noscript>`,
    );
  html = setMeta(html, "name", "description", description);
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:type", type);
  html = setMeta(html, "name", "twitter:title", title);
  html = setMeta(html, "name", "twitter:description", description);
  return html;
};

const write = async (path, html) => {
  const dir = join(dist, path);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, "index.html"), html);
};

const published = blogPosts.filter((p) => p.status === "published");
const routes = [
  { ...pageMeta.about },
  { ...pageMeta.blog },
  ...published.map((p) => ({
    path: `/blog/${p.slug}`,
    title: `${p.title} | Lucas Videla`,
    description: p.excerpt || p.description,
    type: "article",
  })),
];

for (const route of routes) await write(route.path, render(route));
await writeFile(join(dist, "index.html"), render({ ...pageMeta.home }));

const today = new Date().toISOString().slice(0, 10);
const urls = [
  { loc: `${SITE_URL}/`, lastmod: today },
  { loc: `${SITE_URL}${pageMeta.about.path}`, lastmod: today },
  { loc: `${SITE_URL}${pageMeta.blog.path}`, lastmod: today },
  ...published.map((p) => ({
    loc: `${SITE_URL}/blog/${p.slug}`,
    lastmod: p.updatedAt || p.publishedAt,
  })),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;
await writeFile(join(dist, "sitemap.xml"), sitemap);

console.log(`prerender: ${routes.length + 1} pages, sitemap with ${urls.length} urls`);
