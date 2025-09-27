import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero/90"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="text-lg sm:text-xl font-medium mb-6 text-yellow-accent">
            We build AI tools that automate your business, not your personality
          </p>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 font-heading leading-tight">
            Smarter AI.{" "}
            <span className="text-yellow-accent">Simpler</span>{" "}
            Workflows.
          </h1>
          
          {/* Subtext */}
          <p className="text-xl sm:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-200">
            Custom AI tools for small businesses — from dashboards to chatbots.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="yellow" size="lg" className="text-lg px-8 py-4">
              Get a Free AI Audit
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4">
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;