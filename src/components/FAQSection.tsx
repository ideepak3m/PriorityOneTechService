import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is AI too expensive for small businesses?",
    answer: "Not with us. We build lean, modular tools that start small and grow with your business. Most of our solutions pay for themselves within 3-6 months through time savings and improved efficiency. We focus on practical, high-impact automation that delivers immediate ROI."
  },
  {
    question: "How long does it take to implement AI solutions?",
    answer: "Most projects are completed in 2-4 weeks, not months. We focus on proven, practical solutions rather than experimental tech. Our streamlined process includes discovery, development, testing, and training — so you're up and running quickly with minimal disruption to your business."
  },
  {
    question: "Do I need technical expertise to use your AI tools?",
    answer: "Absolutely not. We design everything to be user-friendly and intuitive. We provide comprehensive training and ongoing support to ensure your team can use the tools effectively. If you can use a smartphone app, you can use our AI solutions."
  },
  {
    question: "What if the AI makes mistakes or doesn't work as expected?",
    answer: "We build in safeguards and human oversight for all critical processes. Every solution includes monitoring, error handling, and fallback procedures. Plus, we provide ongoing support and maintenance to ensure everything runs smoothly. We're always available to fine-tune and improve your systems."
  },
  {
    question: "Can you integrate with our existing software and systems?",
    answer: "Yes, absolutely. We specialize in building solutions that work with your current tools — whether that's your CRM, email platform, scheduling software, or industry-specific applications. Integration is a core part of our development process."
  },
  {
    question: "What industries do you work with?",
    answer: "We've successfully implemented AI solutions across real estate, logistics, healthcare, professional services, retail, and more. While industries vary, the core business challenges are often similar — repetitive tasks, data entry, customer communication, and reporting. Our solutions are adaptable to any business model."
  },
  {
    question: "How do you ensure my business data stays secure?",
    answer: "Data security is our top priority. We use enterprise-grade encryption, secure cloud infrastructure, and follow industry best practices for data protection. We never store sensitive data unnecessarily and can work within your existing security requirements and compliance needs."
  },
  {
    question: "What kind of ongoing support do you provide?",
    answer: "We provide comprehensive ongoing support including system monitoring, regular updates, troubleshooting, and performance optimization. We're not just a vendor — we're your long-term AI automation partner. Most clients also benefit from periodic reviews to identify new automation opportunities as their business grows."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-accent" />
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-primary">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Got questions about AI automation? We've got answers. Here are the most common 
            questions we hear from business owners considering AI solutions.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl shadow-card border border-border/50 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-accent transition-colors duration-300 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Still have questions? We'd love to discuss your specific needs.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-lg transition-colors duration-300"
          >
            Get in touch for a free consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;