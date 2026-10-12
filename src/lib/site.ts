export const SITE_URL = "https://lucasvidela.com.ar";
export const SITE_NAME = "Lucas Videla";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const pageMeta = {
  home: {
    path: "/",
    title: "Lucas Videla | Full-stack Engineer",
    description:
      "Full-stack engineer building reliable web and mobile systems in Elixir, TypeScript and Go. Open source tools for AI agents. Available for contract work and consulting.",
  },
  about: {
    path: "/about",
    title: "About | Lucas Videla",
    description:
      "Full-stack engineer from Argentina. From technical support to production systems used by 15k+ companies, a real estate CRM in Elixir and open source AI tooling.",
  },
  blog: {
    path: "/blog",
    title: "Blog | Lucas Videla",
    description:
      "Notes on engineering, product decisions, and what I learn while building and maintaining software as an independent developer.",
  },
} as const;
