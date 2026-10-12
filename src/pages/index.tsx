import Navigation from "@/components/navigation";
import ProjectCard from "@/components/project-card";
import SkillsSection from "@/components/skills-section";
// import MeteorRain from "@/components/meteor-rain";

const Index = () => {
  const professionalWork = [
    {
      title: "Real estate CRM (production)",
      description: "Built and maintain a CRM for property operations: tenants, leases, payments, and day-to-day workflows. Used to manage real properties.",
      tech: "Tech: Phoenix, Elixir",
      highlight: true
    },
    {
      title: "SaaS platform (mobile + web + API)",
      description: "End-to-end product: web portal, React Native app, and a Go API. Focus on reliability, monitoring, and smooth delivery.",
      tech: "Tech: React Native, Expo, Next.js, Golang"
    },
    {
      title: "Enterprise API maintenance (15k+ companies)",
      description: "Maintained and extended a Django backend in production: bug fixes, performance work, and steady delivery.",
      tech: "Tech: Django, Next.js - at Logra.io"
    },
    {
      title: "Latin Mundo (US finance)",
      description: "Backend for check and transaction operations with strict accounting rules, role-based access, and reporting.",
      tech: "Tech: Ruby on Rails, PostgreSQL, JWT, CanCanCan"
    },
    {
      title: "BeautyBarber (client platform)",
      description: "Rails + React commerce platform with product catalog, promotions, admin panel, SSR, and background jobs.",
      tech: "Tech: Rails, Inertia.js, React, Tailwind, Solid Queue"
    },
    {
      title: "AVAL System (mobile + API)",
      description: "Mobile app and REST API for vehicles, services, incidents, and checklists, with JWT auth and organization scoping. Side work.",
      tech: "Tech: Expo, React Native, Ruby on Rails API, PostgreSQL"
    }
  ];

  const personalProjects = [
    {
      title: "Socrates (AI tooling for teachers)",
      description: "Desktop assistant for teachers where every AI output is reviewed by a human before it is used.",
      tech: "Tech: TypeScript"
    },
    {
      title: "E-commerce marketplace",
      description: "Built an e-commerce platform with payments and operational tooling, with an emphasis on security and maintainability.",
      tech: "Tech: Astro, Payment gateways"
    },
    {
      title: "Open-source ticket booking",
      description: "Ticket booking system built as an open-source project with a clean architecture and a practical UX.",
      tech: "Tech: Rails"
    },
    {
      title: "CLI time tracking",
      description: "Command-line time tracking tool focused on speed and clear reporting.",
      tech: "Tech: Golang"
    }
  ];

  const openSource = [
    {
      title: "hush",
      description: "Keeps API keys out of AI agent chats: vault, redacting runner and MCP server, so agents can use secrets without ever seeing them.",
      tech: "Tech: Golang, MCP",
      href: "https://github.com/lucasvidela94/hush"
    },
    {
      title: "pi-google-services",
      description: "Google Calendar, Gmail, Tasks, Drive and Contacts MCP server. 26 tools, single binary, OAuth login.",
      tech: "Tech: Golang, MCP, OAuth",
      href: "https://github.com/lucasvidela94/pi-google-services"
    },
    {
      title: "jira-mcp",
      description: "MCP server for Jira Cloud: search, create, update, transition and comment on issues from any MCP-compatible AI client. OAuth 2.0, Docker image, HTTP/SSE transport.",
      tech: "Tech: Golang, MCP",
      href: "https://github.com/lucasvidela94/jira-mcp"
    },
    {
      title: "gmaps-mcp",
      description: "Read-only MCP server for the Google Places API: search businesses by text or location and get phone, website and opening hours.",
      tech: "Tech: Golang, MCP",
      href: "https://github.com/lucasvidela94/gmaps-mcp"
    },
    {
      title: "gecko",
      description: "Deletion as an output: a portable agent skill and zero-dependency CLI that makes removing orphaned code a required step of every change.",
      tech: "Tech: Shell, agent skills",
      href: "https://github.com/lucasvidela94/gecko"
    },
    {
      title: "explainer",
      description: "Agent skill that explains any PR, change or concept at the right level: controlled text, a diagram or interactive HTML.",
      tech: "Tech: Agent skills",
      href: "https://github.com/lucasvidela94/explainer"
    },
    {
      title: "opencode-pstack",
      description: "Portable port of 45 rigorous engineering skills for OpenCode, Claude Code and Codex, built around verifiable agent workflows.",
      tech: "Tech: Agent skills, Python",
      href: "https://github.com/lucasvidela94/opencode-pstack"
    },
    {
      title: "TinyShell",
      description: "Terminal agent for old, low-resource PCs: a single small 32-bit binary in C where you approve every command. Prototype.",
      tech: "Tech: C, Windows 7+, Linux",
      href: "https://github.com/lucasvidela94/tinyagent"
    },
    {
      title: "mdev-helper",
      description: "CLI that diagnoses, cleans and repairs React Native, Flutter and Ionic development environments with a single command.",
      tech: "Tech: Golang",
      href: "https://github.com/lucasvidela94/mdev-helper"
    },
    {
      title: "github-notifier",
      description: "System tray app that delivers desktop notifications for GitHub pull request comments and review requests.",
      tech: "Tech: Golang, SQLite",
      href: "https://github.com/lucasvidela94/github-notifier"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* <MeteorRain /> */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold text-portfolio-primary mb-6 leading-tight">
              Lucas Videla
            </h1>
            <div className="text-xl text-portfolio-secondary max-w-3xl mx-auto leading-relaxed space-y-4">
              <p>Full-stack engineer focused on reliable delivery.</p>
              <p>Currently at Magma Labs. Available for contract work and consulting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-portfolio-primary mb-12">
            Professional work
          </h2>
          
          <div className="grid gap-8">
            {professionalWork.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
                highlight={project.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-portfolio-primary mb-12">
            Selected builds
          </h2>

          <div className="grid gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-portfolio-primary mb-4">
            Open source
          </h2>
          <p className="text-portfolio-secondary mb-12">
            Tools for working with AI agents, plus a few developer utilities. Everything is on GitHub.
          </p>

          <div className="grid gap-8">
            {openSource.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tech={project.tech}
                href={project.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-portfolio-card border border-portfolio-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-portfolio-primary mb-4">
              Available for contract work and consulting.
            </h2>
            <p className="text-lg text-portfolio-secondary mb-6">
              If you need someone who can take ownership and ship, reach out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-portfolio-accent">
              <a href="mailto:lucasan.videla@gmail.com" className="font-mono hover:text-portfolio-accent-glow transition-colors">
                lucasan.videla@gmail.com
              </a>
              <span className="hidden sm:inline">or</span>
              <a href="https://github.com/lucasvidela94" target="_blank" rel="noopener noreferrer" className="font-mono hover:text-portfolio-accent-glow transition-colors">
                GitHub @lucasvidela94
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
