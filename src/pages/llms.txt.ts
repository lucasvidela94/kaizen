import type { APIRoute } from "astro";

import { openSource, products } from "../data/projects";
import { GITHUB_URL, SITE_EMAIL, SITE_URL } from "../data/site";

const list = (projects: { title: string; description: string; href?: string }[]) =>
  projects
    .map(({ title, description, href }) => `- [${title}](${href}): ${description}`)
    .join("\n");

export const GET: APIRoute = () => {
  const body = `# Lucas Videla

> Full-stack engineer from Patagonia, Argentina. Builds reliable web and mobile systems in Elixir, TypeScript, Go and Ruby on Rails, and open source tooling for AI agents. Currently at Magma Labs. Available for contract work and consulting.

Contact: ${SITE_EMAIL}

## Site

- [Portfolio](${SITE_URL}/): professional work, products, open source projects and skills
- [About](${SITE_URL}/about): background, current work and resume
- [Blog](${SITE_URL}/blog): notes on independent development, Elixir, solo teams and web performance
- [Resume (PDF)](${SITE_URL}/cv_lucasvidela.pdf)

## Products

${list(products)}

## Open source

${list(openSource)}

## Profiles

- [GitHub](${GITHUB_URL})
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
