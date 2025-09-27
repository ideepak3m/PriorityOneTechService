import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageSquare, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  businessType: z.string().min(1, "Please select your business type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  aiAudit: z.boolean().default(false),
});

type ContactFormData = z.infer<typeof contactSchema>;

const businessTypes = [
  "Real Estate",
  "Logistics & Transportation", 
  "Healthcare & Wellness",
  "Professional Services",
  "Retail & E-commerce",
  "Manufacturing",
  "Hospitality",
  "Other"
];

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      businessType: "",
      message: "",
      aiAudit: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll reach out shortly with next steps and contact details.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4 font-heading text-primary">
                Thanks! We'll reach out shortly.
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We'll be in touch with next steps and contact details within 24 hours.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-card border border-border/50">
              <div className="flex items-center gap-3 justify-center mb-4">
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-semibold text-card-foreground">Ready to talk?</span>
              </div>
              <p className="text-lg font-semibold text-primary mb-2">(416) 731-5236</p>
              <p className="text-sm text-muted-foreground">
                Or email us at hello@priorityonetech.com
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-heading text-primary">
              Let's Talk AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to automate your business processes? Tell us about your challenges and 
              we'll show you exactly how AI can help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-xl shadow-card border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-semibold text-card-foreground font-heading">
                  Get Started Today
                </h3>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {businessTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us about your business</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="What processes would you like to automate? What challenges are you facing?"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="aiAudit"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-medium">
                            I'd like a free AI audit of my current processes
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 font-heading text-primary">
                  Why Work With Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-card-foreground">Free Consultation</p>
                      <p className="text-sm text-muted-foreground">
                        We'll analyze your processes and identify automation opportunities at no cost.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-card-foreground">Quick Turnaround</p>
                      <p className="text-sm text-muted-foreground">
                        Most projects completed in 2-4 weeks, not months.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-card-foreground">Ongoing Support</p>
                      <p className="text-sm text-muted-foreground">
                        We don't just build and leave — we ensure your tools keep working perfectly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-xl border border-accent/20">
                <p className="text-center text-muted-foreground text-sm">
                  <strong>Phone number available after form submission</strong>
                  <br />
                  We'll share our direct line so you can reach us immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
