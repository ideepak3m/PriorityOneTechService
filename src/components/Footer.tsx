import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
              Priority One Tech Service
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              We build practical AI solutions that automate your business processes, 
              save time, and help you grow. From dashboards to chatbots, we make AI work for you.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <span>hello@priorityonetech.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                <span>(416) 731-5236</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Brampton, ON</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Quick Links</h4>
            <div className="space-y-3">
              <a 
                href="#services" 
                className="block text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                What We Build
              </a>
              <a 
                href="#projects" 
                className="block text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Recent Projects
              </a>
              <a 
                href="#contact" 
                className="block text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Contact Us
              </a>
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Case Studies
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Services</h4>
            <div className="space-y-3">
              <span className="block text-muted-foreground">AI-Powered Dashboards</span>
              <span className="block text-muted-foreground">Custom Chatbots</span>
              <span className="block text-muted-foreground">Appointment Booking</span>
              <span className="block text-muted-foreground">Quote Automation</span>
              <span className="block text-muted-foreground">Smart Reports</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              <p>© {currentYear} Priority One Tech Service. All rights reserved.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="Follow us on X"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-border/50 py-4">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Disclaimer:</strong> Results may vary based on business size, industry, and implementation. 
            Case studies represent actual client results but individual outcomes depend on various factors. 
            We provide estimates in good faith based on our experience with similar projects.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
