interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  highlight?: boolean;
  href?: string;
}

const ProjectCard = ({ title, description, tech, highlight = false, href }: ProjectCardProps) => {
  return (
    <div className={`
      bg-portfolio-card border border-portfolio-border rounded-lg p-6 
      hover:border-portfolio-accent/50 transition-all duration-300
      ${highlight ? 'shadow-glow' : 'hover:shadow-card'}
    `}>
      <h3 className="text-lg font-semibold text-portfolio-primary mb-3">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-portfolio-accent transition-colors"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="text-portfolio-secondary mb-4 leading-relaxed">
        {description}
      </p>
      <div className="text-sm text-portfolio-accent font-mono">
        {tech}
      </div>
    </div>
  );
};

export default ProjectCard;
