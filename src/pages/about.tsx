import Navigation from "@/components/navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-portfolio-primary mb-12">
            About Me
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="text-portfolio-secondary leading-relaxed space-y-6">
              <p>
                Hey, I'm Lucas Videla - a full-stack developer who believes in shipping code that actually works.
              </p>
              
              <p>
                My journey started in technical support, working with hardware and troubleshooting systems.
                Then I moved to community management, where I discovered SEO and HTML - my first taste of web development.
              </p>
              
              <p>
                Later, I transitioned to the corporate world, maintaining Django APIs for 15k+ companies at Logra.io.
                But I quickly realized I wanted to build, not just maintain.
              </p>
              
              <p>
                So I took the leap into solo development, learned Elixir from scratch, and built a complete real estate CRM
                that's currently managing real properties. Because why not?
              </p>
              
              <div className="bg-portfolio-card border border-portfolio-border rounded-lg p-6 my-8">
                <p className="text-portfolio-accent font-medium text-lg">
                  My philosophy? Build products that solve real problems and generate real revenue.
                </p>
                <p className="text-portfolio-secondary mt-4">
                  Simple, but effective.
                </p>
              </div>
              
              <p>
                I care about technology, not bloat. That's why I don't follow the SaaS trend of using Next.js for everything.
                I care about the web ecosystem and the client - because the client doesn't know and doesn't care about the technology.
                But as a developer, my responsibility is to code with responsibility.
              </p>
              
              <p>
                I've shipped everything from mobile e-commerce apps to enterprise APIs, 
                from pharmacy delivery systems to cinema management platforms.
              </p>
              
              <p>
                My approach is simple: structured thinking for the big picture, 
                pragmatic execution for the details. I don't chase perfect tech stacks - 
                I focus on shipping code that works.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source, or figuring out the next big thing to build.
              </p>
            </div>
          </div>
          
          {/* Currently Working On Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-portfolio-primary mb-8">
              Currently working on
            </h2>
            <div className="bg-portfolio-card border border-portfolio-border rounded-lg p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/magmalabs-logo.svg" 
                    alt="Magma Labs Logo" 
                    className="w-16 h-16 rounded-lg object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-portfolio-primary">
                      Magma Labs
                    </h3>
                    <a 
                      href="https://magmalabs.io" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-accent hover:text-portfolio-accent-glow transition-colors text-sm font-mono"
                    >
                      magmalabs.io
                    </a>
                  </div>
                  <p className="text-portfolio-secondary mb-4 leading-relaxed">
                    Full-stack development agency specializing in custom software solutions. Building scalable applications and helping businesses grow through technology.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent text-sm rounded-full border border-portfolio-accent/20">
                      React
                    </span>
                    <span className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent text-sm rounded-full border border-portfolio-accent/20">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent text-sm rounded-full border border-portfolio-accent/20">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent text-sm rounded-full border border-portfolio-accent/20">
                      Ruby on Rails
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recently Built Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-portfolio-primary mb-8">
              Recently built
            </h2>
            <div className="bg-portfolio-card border border-portfolio-border rounded-lg p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/suci-logo.jpg" 
                    alt="Suci Logo" 
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-portfolio-primary">
                      Suci
                    </h3>
                    <a 
                      href="https://suci.com.ar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-accent hover:text-portfolio-accent-glow transition-colors text-sm font-mono"
                    >
                      suci.com.ar
                    </a>
                  </div>
                  <p className="text-portfolio-secondary mb-4 leading-relaxed">
                    Complete real estate management platform. Property listings, tenant management, and financial tracking in one unified system.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent text-sm rounded-full border border-portfolio-accent/20">
                      Elixir
                    </span>
                    <span className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent text-sm rounded-full border border-portfolio-accent/20">
                      Phoenix
                    </span>
                    <span className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent text-sm rounded-full border border-portfolio-accent/20">
                      LiveView
                    </span>
                    <span className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent text-sm rounded-full border border-portfolio-accent/20">
                      OTP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-portfolio-card border border-portfolio-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-portfolio-primary mb-6">
              Let's Connect
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-portfolio-accent">
              <a href="mailto:lucasan.videla@gmail.com" className="font-mono hover:text-portfolio-accent-glow transition-colors">
                lucasan.videla@gmail.com
              </a>
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

export default About;