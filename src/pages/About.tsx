import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Empowering Organizations with 
              <span className="text-primary"> Custom AI Solutions</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              At Priority One Tech Service, we specialize in building modular, scalable AI systems that solve real-world problems. 
              Whether you're streamlining operations, enhancing customer experience, or unlocking data-driven insights — we architect 
              solutions that deliver.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Future-proof Architecture</h3>
                <p className="text-muted-foreground">Tailored to your workflows with scalable, modular design that grows with your business.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Transparent Development</h3>
                <p className="text-muted-foreground">Feedback-driven approach ensures you're involved every step of the way.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Technical Expertise</h3>
                <p className="text-muted-foreground">Hands-on expertise in cloud identity, secure API integration, and branded deployment.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Agile Execution</h3>
                <p className="text-muted-foreground">Phased execution for minimal disruption and maximum impact on your operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Approach</h2>
            <div className="bg-card p-8 rounded-lg border shadow-sm">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in clarity before automation. Every project begins with deep discovery, followed by iterative 
                prototyping and validation. Our systems-thinking mindset ensures your solution is not just functional — it's sustainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Contact & Location</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Serving Clients</h3>
                <p className="text-muted-foreground">Across Canada and beyond</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Based In</h3>
                <p className="text-muted-foreground">Brampton, Ontario</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Get In Touch</h3>
                <p className="text-muted-foreground">Ready to discuss your project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;