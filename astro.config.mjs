// @ts-check
import { readdirSync, readFileSync } from "node:fs";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// Blog posts report their real dates in the sitemap; other pages omit lastmod.
const blogDir = new URL("./src/content/blog/", import.meta.url);
const postDates = new Map(
  readdirSync(blogDir).map((file) => {
    const source = readFileSync(new URL(file, blogDir), "utf8");
    const field = (/** @type {string} */ key) =>
      source.match(new RegExp(`^${key}: (.+)$`, "m"))?.[1];
    return [file.replace(/\.md$/, ""), field("updatedAt") ?? field("publishedAt")];
  }),
);

// https://astro.build/config
export default defineConfig({
  site: "https://lucasvidela.com.ar",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        const slug = item.url.match(/\/blog\/([^/]+)$/)?.[1];
        const date = slug && postDates.get(slug);
        if (date) item.lastmod = new Date(date).toISOString();
        return item;
      },
    }),
  ],

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Instrument Serif",
      cssVariable: "--astro-font-display",
      weights: [400],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Geist Mono",
      cssVariable: "--astro-font-mono",
      weights: [400, 500],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["monospace"],
    },
  ],
});
