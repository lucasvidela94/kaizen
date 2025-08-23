import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-bold text-portfolio-primary mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-portfolio-primary mb-6">
            Page not found
          </h2>
          <p className="text-portfolio-secondary mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-portfolio-accent hover:bg-portfolio-accent/90">
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="border-portfolio-border hover:border-portfolio-accent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
