import { aboutHighlight, aboutIntro, aboutOutro, companies } from "../data/about";
import type { Project } from "../data/projects";
import { openSource, products, professionalWork, selectedBuilds } from "../data/projects";
import { SITE_EMAIL, SITE_NAME, SITE_URL, GITHUB_URL } from "../data/site";
import { skillGroups } from "../data/skills";
import type { Post } from "./posts";

export const SUMMARY =
  "Full-stack developer in Patagonia, Argentina. Builds web and mobile products in Elixir, TypeScript, Go and Ruby on Rails, and open source tools for AI agents. Works at Magma Labs and is open to contract work and consulting.";

export const markdownResponse = (body: string): Response =>
  new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });

export const textResponse = (body: string): Response =>
  new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });

const link = (project: Project): string =>
  `- [${project.title}](${project.href ?? SITE_URL}): ${project.description} (${project.tech})`;

const projectList = (projects: Project[]): string => projects.map(link).join("\n");

export const postUrl = (post: Post): string => `${SITE_URL}/blog/${post.id}`;

export const postMarkdown = (post: Post): string => {
  const { title, description, publishedAt, category, tags } = post.data;
  return `# ${title}

> ${description}

- Author: ${SITE_NAME} (${SITE_URL}/about)
- Published: ${publishedAt.toISOString().slice(0, 10)}
- Category: ${category}
- Tags: ${tags.join(", ")}
- Canonical URL: ${postUrl(post)}

${post.body ?? ""}
`;
};

export const llmsIndex = (posts: Post[]): string => `# ${SITE_NAME}

> ${SUMMARY}

Contact: ${SITE_EMAIL}. Code: ${GITHUB_URL}. The full content of this site is available as one Markdown file at ${SITE_URL}/llms-full.txt.

## Pages

- [Home](${SITE_URL}/): professional work, products, open source projects and skills
- [About](${SITE_URL}/about): background, current work and resume
- [Blog](${SITE_URL}/blog): notes on independent development, Elixir, solo teams, web performance and engineering with AI
- [Resume (PDF)](${SITE_URL}/cv_lucasvidela.pdf)
- [RSS feed](${SITE_URL}/rss.xml)

## Blog posts

${posts.map((post) => `- [${post.data.title}](${postUrl(post)}.md): ${post.data.excerpt}`).join("\n")}

## Products

${projectList(products)}

## Open source

${projectList(openSource)}

## Optional

- [Full site content in one file](${SITE_URL}/llms-full.txt)
- [Sitemap](${SITE_URL}/sitemap-index.xml)
- [GitHub profile](${GITHUB_URL})
`;

export const llmsFull = (posts: Post[]): string => `# ${SITE_NAME}

> ${SUMMARY}

Contact: ${SITE_EMAIL}. Code: ${GITHUB_URL}. Website: ${SITE_URL}/.

## About

${[...aboutIntro, aboutHighlight, ...aboutOutro].join("\n\n")}

${companies.map((c) => `### ${c.heading}: ${c.name}\n\n${c.description} Stack: ${c.tags.join(", ")}. ${c.href}`).join("\n\n")}

## Professional work

${projectList(professionalWork)}

## Selected builds

${projectList(selectedBuilds)}

## Products

${projectList(products)}

## Open source

${projectList(openSource)}

## Skills

${skillGroups.map((group) => `- ${group.title}: ${group.items.join(", ")}`).join("\n")}

## Blog

${posts.map((post) => postMarkdown(post).replace(/^# /m, "### ")).join("\n---\n\n")}
`;
