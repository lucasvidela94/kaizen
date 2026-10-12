import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

const slugify = (value: string): string => value.toLowerCase().replace(/\s+/g, "-");

export const getPublishedPosts = async (): Promise<Post[]> => {
  const posts = await getCollection("blog", ({ data }) => data.status === "published");
  return posts.toSorted((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
};

export const getRelatedPosts = (posts: Post[], current: Post, limit = 2): Post[] =>
  posts.filter((post) => post.id !== current.id).slice(0, limit);

export const countBy = (values: string[]): { name: string; slug: string; count: number }[] => {
  const counts = new Map<string, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return [...counts].map(([name, count]) => ({ name, slug: slugify(name), count }));
};

export const getCategories = (posts: Post[]) => countBy(posts.map((post) => post.data.category));

export const getTags = (posts: Post[]) => countBy(posts.flatMap((post) => post.data.tags));
