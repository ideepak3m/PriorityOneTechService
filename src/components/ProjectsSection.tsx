import { Home, Truck, Leaf, Building2, ArrowRight, Clock, TrendingUp, Users, FileCheck } from "lucide-react";

const projects = [
  {
    icon: Home,
    company: "BrightPath Realty",
    services: "AI dashboard + appointment booking",
    result: "Cut listing prep time by 80% with a custom dashboard and automated showings.",
    metrics: [
      { icon: Clock, text: "80% faster listings" },
      { icon: Users, text: "3x more showings" }
    ],
    tags: ["Real Estate", "Automation"]
  },
  {
    icon: Truck,
    company: "SwiftShip Logistics",
    services: "Quote automation + PDF parsing",
    result: "Reduced quote generation time from hours to minutes while eliminating pricing errors.",
    metrics: [
      { icon: TrendingUp, text: "95% faster quotes" },
      { icon: FileCheck, text: "Zero pricing errors" }
    ],
    tags: ["Logistics", "Document Processing"]
  },
  {
    icon: Leaf,
    company: "GreenLeaf Wellness",
    services: "Custom reports + chatbot assistant",
    result: "Streamlined patient intake and automated appointment reminders, boosting retention by 40%.",
    metrics: [
      { icon: Users, text: "40% better retention" },
      { icon: Clock, text: "24/7 support" }
    ],
    tags: ["Healthcare", "Customer Service"]
  },
  {
    icon: Building2,
    company: "Local Biz Hub",
    services: "Small business dashboard with AI insights",
    result: "Provided actionable insights that helped 50+ local businesses increase revenue by 25%.",
    metrics: [
      { icon: TrendingUp, text: "25% revenue boost" },
      { icon: Building2, text: "50+ businesses served" }
    ],
    tags: ["Small Business", "Analytics"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-heading text-primary">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real results from real businesses. See how we've helped companies across industries 
            automate their workflows and accelerate growth.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02] border border-border/50"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground font-heading">
                        {project.company}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.services}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Result */}
                <p className="text-card-foreground leading-relaxed mb-6">
                  {project.result}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {project.metrics.map((metric, metricIndex) => {
                    const MetricIcon = metric.icon;
                    return (
                      <div key={metricIndex} className="flex items-center gap-2 text-sm text-accent">
                        <MetricIcon className="w-4 h-4" />
                        <span className="font-medium">{metric.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Link */}
                <div className="flex items-center gap-2 text-accent hover:text-accent/80 font-medium text-sm transition-colors duration-300 cursor-pointer">
                  <span>View case study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see similar results for your business?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-lg transition-colors duration-300"
          >
            Start your project today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;