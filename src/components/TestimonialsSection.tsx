import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    company: "SwiftShip Logistics",
    quote: "Priority One helped us automate our quote process — now we respond in hours, not days. Our close rate has improved dramatically.",
    author: "Sarah Chen",
    title: "Operations Director",
    rating: 5,
    industry: "Logistics"
  },
  {
    company: "BrightPath Realty",
    quote: "The AI dashboard they built saves us 10+ hours per week on listing prep. Our agents can focus on what matters most — selling homes.",
    author: "Michael Rodriguez",
    title: "Broker Owner",
    rating: 5,
    industry: "Real Estate"
  },
  {
    company: "GreenLeaf Wellness",
    quote: "Their chatbot handles appointment booking 24/7. Patient satisfaction is up and our staff can focus on providing care instead of answering phones.",
    author: "Dr. Amanda Foster",
    title: "Practice Owner",
    rating: 5,
    industry: "Healthcare"
  },
  {
    company: "LocalBiz Consulting",
    quote: "We've implemented their AI tools for 20+ clients. The ROI is incredible — most see payback within 3 months.",
    author: "David Kim",
    title: "Senior Consultant",
    rating: 5,
    industry: "Consulting"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-heading text-primary">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's how we've helped real businesses 
            transform their operations with AI automation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02] border border-border/50"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-accent/60" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-card-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-card-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                  <p className="text-sm font-medium text-accent">
                    {testimonial.company}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join our satisfied clients?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-lg transition-colors duration-300"
          >
            Get your free consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;