import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoFull from "@/assets/logo-full.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src={logoFull} 
                alt="Priority One Tech Service" 
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/#services" className="text-foreground hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-foreground hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link to="/portfolio" className="text-foreground hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                Portfolio
              </Link>
              <Link to="/#contact" className="text-foreground hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Get Free AI Audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;