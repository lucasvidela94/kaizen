import type { APIRoute, GetStaticPaths } from "astro";

import { markdownResponse, postMarkdown } from "../../lib/llm-content";
import { getPublishedPosts, type Post } from "../../lib/posts";

export const getStaticPaths = (async () => {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ post: Post }> = ({ props }) =>
  markdownResponse(postMarkdown(props.post));
