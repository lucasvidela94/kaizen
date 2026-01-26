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
                I'm Lucas Videla, a full-stack engineer.
              </p>
              
              <p>
                I started in technical support, working with hardware and troubleshooting systems.
                Later I moved into community management, where I got hands-on with SEO and HTML and moved into web development.
              </p>
              
              <p>
                Professionally, I've worked on production systems such as Django APIs used by 15k+ companies at Logra.io.
              </p>
              
              <p>
                I also build products end-to-end. One example is a real estate CRM in Elixir/Phoenix that is used to manage real properties.
              </p>
              
              <div className="bg-portfolio-card border border-portfolio-border rounded-lg p-6 my-8">
                <p className="text-portfolio-accent font-medium text-lg">
                  I focus on reliable delivery: clear requirements, maintainable code, and predictable operations.
                </p>
              </div>
              
              <p>
                I choose stacks based on constraints: team size, time, long-term maintenance, and cost. The goal is a system that works and stays working.
              </p>
              
              <p>
                I've worked across web apps, mobile apps, internal tooling, and APIs.
              </p>

              <p>
                Recent work includes Latin Mundo (US finance backend), BeautyBarber (client platform), and AVAL System (mobile app + API, side work).
              </p>
              
              <p>
                My approach is structured: think through the system, then execute pragmatically.
              </p>
              
              <p>
                Outside of work, I enjoy learning new tools and contributing to open source.
              </p>
            </div>
          </div>
          
          {/* Currently Working On Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-portfolio-primary mb-8">
              Current work
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
                    Full-stack development agency focused on custom software. Building scalable applications and supporting teams with delivery.
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
              Recent project
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
                    Real estate management platform: listings, tenant workflows, and financial tracking in a single system.
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
              Contact
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
