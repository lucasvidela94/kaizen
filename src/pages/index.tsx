import Navigation from "@/components/navigation";
import ProjectCard from "@/components/project-card";
import SkillsSection from "@/components/skills-section";
// import MeteorRain from "@/components/meteor-rain";

const Index = () => {
  const projects = [
    {
      title: "Built a complete real estate CRM from scratch",
      description: "Property management, tenant behavior tracking, the whole pipeline. Currently managing real properties because it actually works.",
      tech: "Tech: Phoenix, Elixir",
      highlight: true
    },
    {
      title: "Full-stack SaaS ecosystem - mobile to web",
      description: "Complete platform with Next.js web portal, React Native mobile app, and Golang API. End-to-end solution that scales.",
      tech: "Tech: React Native, Expo, Next.js, Golang"
    },
    {
      title: "Kept enterprise API running for 15k+ companies",
      description: "Maintained Django backend while building new features. Sometimes the boring stuff is the most important stuff.",
      tech: "Tech: Django, Next.js - at Logra.io"
    },
    {
      title: "Built alternative medicine e-commerce platform",
      description: "Secure marketplace for traditional healing products. Every transaction handled with care and compliance.",
      tech: "Tech: Astro, Payment gateways"
    },
    {
      title: "Open source ticket booking system",
      description: "Built because existing platforms needed updates. Sometimes the best solution is to build it yourself.",
      tech: "Tech: Rails"
    },
    {
      title: "CLI time tracking for Harvest alternative",
      description: "Command-line productivity tool for task management. Because sometimes the best interface is no interface.",
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
              I'm Lucas.
            </h1>
            <div className="text-xl text-portfolio-secondary max-w-3xl mx-auto leading-relaxed space-y-4">
              <p>I develop with intention.</p>
              <p>
                Here: personal projects, technical reflections,<br />
                and the process behind the code.
              </p>
              <p className="text-portfolio-accent font-medium">
                No deadlines, just curiosity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-portfolio-primary mb-12">
            Here's what I've been shipping:
          </h2>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
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

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-portfolio-card border border-portfolio-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-portfolio-primary mb-4">
              Currently available for projects that need to ship fast.
            </h2>
            <p className="text-lg text-portfolio-secondary mb-6">
              Wanna build something that works?
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