import type { APIRoute } from "astro";

import { llmsFull, textResponse } from "../lib/llm-content";
import { getPublishedPosts } from "../lib/posts";

export const GET: APIRoute = async () => textResponse(llmsFull(await getPublishedPosts()));
