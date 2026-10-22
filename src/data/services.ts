export interface Service {
  title: string;
  description: string;
  tech: string;
}

export const services: Service[] = [
  {
    title: "Full-stack product builds",
    description:
      "From idea to production: web portals, mobile apps and the API behind them, built end to end with attention to reliability and monitoring.",
    tech: "Elixir, Phoenix, TypeScript, React, Go",
  },
  {
    title: "Maintaining production systems",
    description:
      "Bug fixes, performance work and steady delivery on live systems, including a Django backend used by 15k+ companies and a real estate CRM.",
    tech: "Rails, Django, Phoenix",
  },
  {
    title: "Local-first desktop apps",
    description:
      "Offline-first software that keeps data on the customer's own machines, with no cloud or subscription required.",
    tech: "Go, Wails, TypeScript, SQLite",
  },
  {
    title: "AI agent tooling",
    description:
      "MCP servers and agent skills that connect assistants to real systems such as Jira, Google Workspace and Google Places, without exposing secrets.",
    tech: "Go, MCP, OAuth",
  },
];
