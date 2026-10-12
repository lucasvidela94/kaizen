import type { APIRoute } from "astro";

import { llmsIndex, textResponse } from "../lib/llm-content";
import { getPublishedPosts } from "../lib/posts";

export const GET: APIRoute = async () => textResponse(llmsIndex(await getPublishedPosts()));
