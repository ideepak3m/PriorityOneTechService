import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Layers } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Quote Listener Integration",
      description: "Automated email parsing and quote extraction system",
      techStack: ["Graph API", "Azure Entra", "Secure Token Flow"],
      outcome: "Automated email parsing and quote extraction for real-time insights",
      impact: "Reduced manual overhead, faster response times",
      results: ["50% faster processing", "Zero manual errors", "Real-time updates"]
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Branded Workflow Deployment",
      description: "Client-facing portal with seamless user experience",
      techStack: ["Vite", "GitHub Pages", "Modular HTML/CSS/TS"],
      outcome: "Seamless client-facing portal with trust-building visuals",
      impact: "Increased engagement and credibility",
      results: ["40% higher conversion", "Enhanced brand trust", "Mobile-responsive"]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Identity & Access Protocolization",
      description: "Streamlined tenant setup and user management",
      techStack: ["Microsoft Entra", "App Registration", "MFA Strategies"],
      outcome: "Repeatable tenant setup for small teams",
      impact: "Scalable onboarding with reduced friction",
      results: ["75% faster setup", "Enhanced security", "Automated workflows"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Custom AI Projects That 
              <span className="text-primary"> Drive Results</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our portfolio of successful AI implementations that have transformed business operations
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-lg">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.techStack.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <h4 className="font-semibold text-foreground mb-3">Outcome</h4>
                        <p className="text-muted-foreground mb-4">{project.outcome}</p>
                        
                        <h4 className="font-semibold text-foreground mb-3">Impact</h4>
                        <p className="text-muted-foreground">{project.impact}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Results</h4>
                        <ul className="space-y-2">
                          {project.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center gap-2">
                              <ArrowRight className="w-4 h-4 text-primary" />
                              <span className="text-muted-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can create a custom AI solution for your unique challenges.
            </p>
            <Button size="lg" className="text-lg px-8">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;