import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skills = {
    languages: [
      "TypeScript", "Go", "Elixir", "Ruby", "Python", "JavaScript", "Solidity", "C",
      "Bash", "SQL", "CSS", "HTML", "Markdown", "Sass", "Java", "C#", "Rust"
    ],
    frameworks: [
      "Phoenix", "Rails", "Django", "React", "NextJS", "SolidJS", "Astro", "Vite",
      "TailwindCSS", "Hono", "Fastify", "Express", "NestJS", "Electron", "Wails",
      "Tauri", "Foundry", "wagmi", "MCP", "Playwright", "GitHub Actions", "JWT",
      "GraphQL", "Apollo", "Bootstrap", "ChakraUI", "Socket.IO", "Passport",
      "Bun", ".NET", "Junit", "Unity"
    ],
    tools: [
      "Apache", "Apache Maven", "Debian", "Docker", "Git", "Gradle",
      "Insomnia", "Jenkins", "Nginx", "Notion", "OBS", "Trello",
      "Ubuntu", "Visual Studio Code"
    ],
    clouds: [
      "Cloudflare", "Cloudflare Workers", "Vercel", "Railway", "AWS", "OVH",
      "PostgreSQL", "SQLite", "Redis", "MySQL", "MariaDB", "MongoDB", "Atlas",
      "GitHub", "GitHub Pages"
    ],
    hardware: [
      "Arduino", "Bluetooth", "RaspberryPI"
    ]
  };

  const categoryTitles = {
    languages: "Languages",
    frameworks: "Frameworks and Libraries",
    tools: "Tools",
    clouds: "Clouds and Providers",
    hardware: "Hardware"
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-portfolio-primary mb-12 text-center">
          Skills & Technologies
        </h2>
        
        <div className="space-y-12">
          {Object.entries(skills).map(([category, techList]) => (
            <div key={category} className="bg-portfolio-card border border-portfolio-border rounded-lg p-8">
              <div className="flex items-center mb-6">
                <h3 className="text-xl font-semibold text-portfolio-primary">
                  {categoryTitles[category as keyof typeof categoryTitles]}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {techList.map((tech) => (
                  <Badge 
                    key={tech}
                    variant="secondary"
                    className="bg-portfolio-accent/10 text-portfolio-accent border border-portfolio-accent/20 hover:bg-portfolio-accent/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
