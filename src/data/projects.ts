export interface Project {
  title: string;
  description: string;
  tech: string;
  href?: string;
  highlight?: boolean;
}

export const professionalWork: Project[] = [
  {
    title: "Real estate CRM (production)",
    description:
      "Built and maintain a CRM for property operations: tenants, leases, payments, and day-to-day workflows. Used to manage real properties.",
    tech: "Phoenix, Elixir",
    highlight: true,
  },
  {
    title: "SaaS platform (mobile + web + API)",
    description:
      "End-to-end product: web portal, React Native app, and a Go API. Focus on reliability, monitoring, and smooth delivery.",
    tech: "React Native, Expo, Next.js, Golang",
  },
  {
    title: "Enterprise API maintenance (15k+ companies)",
    description:
      "Maintained and extended a Django backend in production: bug fixes, performance work, and steady delivery.",
    tech: "Django, Next.js - at Logra.io",
  },
  {
    title: "Latin Mundo (US finance)",
    description:
      "Backend for check and transaction operations with strict accounting rules, role-based access, and reporting.",
    tech: "Ruby on Rails, PostgreSQL, JWT, CanCanCan",
  },
  {
    title: "BeautyBarber (client platform)",
    description:
      "Rails + React commerce platform with product catalog, promotions, admin panel, SSR, and background jobs.",
    tech: "Rails, Inertia.js, React, Tailwind, Solid Queue",
  },
  {
    title: "AVAL System (mobile + API)",
    description:
      "Mobile app and REST API for vehicles, services, incidents, and checklists, with JWT auth and organization scoping. Side work.",
    tech: "Expo, React Native, Ruby on Rails API, PostgreSQL",
  },
];

export const selectedBuilds: Project[] = [
  {
    title: "Socrates (AI tooling for teachers)",
    description:
      "Desktop assistant for teachers where every AI output is reviewed by a human before it is used.",
    tech: "TypeScript",
  },
  {
    title: "E-commerce marketplace",
    description:
      "Built an e-commerce platform with payments and operational tooling, with an emphasis on security and maintainability.",
    tech: "Astro, Payment gateways",
  },
  {
    title: "Open-source ticket booking",
    description:
      "Ticket booking system built as an open-source project with a clean architecture and a practical UX.",
    tech: "Rails",
  },
  {
    title: "CLI time tracking",
    description: "Command-line time tracking tool focused on speed and clear reporting.",
    tech: "Golang",
  },
];

export const products: Project[] = [
  {
    title: "Caduceus",
    description:
      "Desktop application for medical practice management. Local-first and offline: patient records, search and CSV/JSON export stay on the clinic's own computers, with no cloud or subscription.",
    tech: "TypeScript, RxDB, desktop app",
    href: "https://github.com/lucasvidela94/caduceus",
  },
  {
    title: "Yoyaku",
    description:
      "Medical appointment scheduling desktop app with patients, agenda and settings. Offline-first on a local SQLite database, with cryptographic license validation.",
    tech: "Golang, Wails, React, SQLite",
    href: "https://github.com/lucasvidela94/yoyaku",
  },
  {
    title: "Inverso",
    description:
      "Free tool to compare investments in Argentina: explore options with filters, compare brokers and commissions, and project returns. 100% frontend, with market data collected by scraping.",
    tech: "SolidJS, Vite, Tailwind, Playwright",
    href: "https://github.com/lucasvidela94/inverso",
  },
  {
    title: "Elenchos",
    description:
      "Registration and traceability system for municipal activities. Records are anchored on the Polygon blockchain through audited smart contracts, so they cannot be altered afterwards.",
    tech: "Solidity, Foundry, Fastify, React, wagmi",
    href: "https://github.com/lucasvidela94/elenchos",
  },
];

export const openSource: Project[] = [
  {
    title: "TinyShell",
    description:
      "General-purpose terminal agent for old, low-resource PCs: one small 32-bit binary written in C for Windows 7+ and old x86 Linux. The model runs remotely through any OpenAI-compatible API, and you approve every command before it runs. Prototype.",
    tech: "C, Windows 7+, Linux, OpenAI-compatible APIs",
    href: "https://github.com/lucasvidela94/tinyagent",
    highlight: true,
  },
  {
    title: "hush",
    description:
      "Keeps API keys out of AI agent chats: vault, redacting runner and MCP server, so agents can use secrets without ever seeing them.",
    tech: "Golang, MCP",
    href: "https://github.com/lucasvidela94/hush",
  },
  {
    title: "pi-google-services",
    description:
      "Google Calendar, Gmail, Tasks, Drive and Contacts MCP server. 26 tools, single binary, OAuth login.",
    tech: "Golang, MCP, OAuth",
    href: "https://github.com/lucasvidela94/pi-google-services",
  },
  {
    title: "jira-mcp",
    description:
      "MCP server for Jira Cloud: search, create, update, transition and comment on issues from any MCP-compatible AI client. OAuth 2.0, Docker image, HTTP/SSE transport.",
    tech: "Golang, MCP",
    href: "https://github.com/lucasvidela94/jira-mcp",
  },
  {
    title: "gmaps-mcp",
    description:
      "Read-only MCP server for the Google Places API: search businesses by text or location and get phone, website and opening hours.",
    tech: "Golang, MCP",
    href: "https://github.com/lucasvidela94/gmaps-mcp",
  },
  {
    title: "gecko",
    description:
      "Deletion as an output: a portable agent skill and zero-dependency CLI that makes removing orphaned code a required step of every change.",
    tech: "Shell, agent skills",
    href: "https://github.com/lucasvidela94/gecko",
  },
  {
    title: "explainer",
    description:
      "Agent skill that explains any PR, change or concept at the right level: controlled text, a diagram or interactive HTML.",
    tech: "Agent skills",
    href: "https://github.com/lucasvidela94/explainer",
  },
  {
    title: "opencode-pstack",
    description:
      "Portable port of 45 rigorous engineering skills for OpenCode, Claude Code and Codex, built around verifiable agent workflows.",
    tech: "Agent skills, Python",
    href: "https://github.com/lucasvidela94/opencode-pstack",
  },
  {
    title: "mdev-helper",
    description:
      "CLI that diagnoses, cleans and repairs React Native, Flutter and Ionic development environments with a single command.",
    tech: "Golang",
    href: "https://github.com/lucasvidela94/mdev-helper",
  },
  {
    title: "github-notifier",
    description:
      "System tray app that delivers desktop notifications for GitHub pull request comments and review requests.",
    tech: "Golang, SQLite",
    href: "https://github.com/lucasvidela94/github-notifier",
  },
];
