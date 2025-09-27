import { BarChart3, MessageSquare, Calendar, FileText, TrendingUp } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "AI-Powered Dashboards",
    description: "Real-time insights and analytics that help you make data-driven decisions for your business."
  },
  {
    icon: MessageSquare,
    title: "Custom Chatbots",
    description: "24/7 customer support and lead qualification bots that never sleep, never miss a call."
  },
  {
    icon: Calendar,
    title: "Appointment Booking Tools",
    description: "Automated scheduling systems that reduce no-shows and streamline your calendar management."
  },
  {
    icon: FileText,
    title: "Quote Automation Workflows",
    description: "Instant, accurate quotes that save hours of manual work and reduce pricing errors."
  },
  {
    icon: TrendingUp,
    title: "Smart Reports & Insights",
    description: "Automated reporting that tracks KPIs and identifies opportunities for growth."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-heading text-primary">
            What We Build
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a real estate broker, logistics manager, or wellness coach — 
            we build AI tools that save time, reduce errors, and help you grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 border border-border/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-card-foreground font-heading">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to automate your business processes?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-lg transition-colors duration-300"
          >
            Let's discuss your needs
            <TrendingUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;