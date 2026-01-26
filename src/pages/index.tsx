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
            <div className="flex items-center justify-center space-x-4 text-portfolio-accent">
              <a href="mailto:lucasan.videla@gmail.com" className="font-mono hover:text-portfolio-accent-glow transition-colors">
                lucasan.videla@gmail.com
              </a>
              <span>or</span>
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
