import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skills = {
    languages: [
      "Bash", "C#", "CSS", "HTML", "Java", "JavaScript", 
      "Markdown", "Python", "Rust", "Sass", "SQL", "TypeScript"
    ],
    frameworks: [
      "Apollo", "Bootstrap", "Bun", "ChakraUI", ".NET", "Electron",
      "Express", "GitHub Actions", "GraphQL", "Hono", "Junit", "JWT",
      "NestJS", "NextJS", "Passport", "React", "Socket.IO", "TailwindCSS",
      "Tauri", "Unity", "Vite"
    ],
    tools: [
      "Apache", "Apache Maven", "Debian", "Docker", "Git", "Gradle",
      "Insomnia", "Jenkins", "Nginx", "Notion", "OBS", "Trello",
      "Ubuntu", "Visual Studio Code"
    ],
    clouds: [
      "Atlas", "AWS", "Cloudflare", "Cloudflare Workers", "GitHub",
      "GitHub Pages", "MariaDB", "MongoDB", "MySQL", "OVH", "Railway",
      "Redis", "Vercel"
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
