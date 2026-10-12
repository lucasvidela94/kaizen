import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    author: z.string().default("Lucas Videla"),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    status: z.enum(["published", "draft"]).default("published"),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    readTime: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
