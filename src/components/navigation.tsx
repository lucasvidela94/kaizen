import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Portfolio" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-portfolio-card/80 backdrop-blur-md border border-portfolio-border rounded-full px-8 py-3 shadow-lg">
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative px-3 py-2 rounded-full",
                location.pathname === item.path
                  ? "text-portfolio-accent bg-portfolio-accent/10"
                  : "text-portfolio-secondary hover:text-portfolio-primary hover:bg-portfolio-bg/50"
              )}
            >
              {item.label}
              {location.pathname === item.path && (
                <div className="absolute inset-0 bg-portfolio-accent/10 rounded-full" />
              )}
            </Link>
          ))}
          
          <div className="w-px h-6 bg-portfolio-border"></div>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;