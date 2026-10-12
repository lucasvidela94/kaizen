import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

import { SITE_NAME, SITE_URL, pageMeta } from "../data/site";
import { getPublishedPosts } from "../lib/posts";

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPublishedPosts();
  return rss({
    title: SITE_NAME,
    description: pageMeta.blog.description,
    site: site ?? SITE_URL,
    items: posts.map(({ id, data }) => ({
      title: data.title,
      description: data.excerpt,
      pubDate: data.publishedAt,
      link: `/blog/${id}`,
      categories: data.tags,
    })),
    customData: "<language>en</language>",
  });
};
