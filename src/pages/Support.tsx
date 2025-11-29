import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, FileText, HelpCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Support = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24 hours",
    });
    setFormData({ name: "", email: "", orderNumber: "", message: "" });
  };

  const supportOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help from our team within 24 hours",
      action: "Contact Us",
      color: "text-primary",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Setup guides, tutorials, and how-tos",
      action: "Browse Docs",
      color: "text-accent",
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Quick answers to common questions",
      action: "View FAQ",
      color: "text-primary",
    },
  ];

  const faqs = [
    {
      question: "How do I install the wall panel system?",
      answer:
        "Installation is simple: 1) Locate studs in your wall, 2) Mount the base rail using provided hardware, 3) Snap panels into the rail system. Full video guides are available in our documentation.",
    },
    {
      question: "Can I add more modules later?",
      answer:
        "Absolutely! HexSpan is designed to grow with you. All modules are compatible across the entire system, so you can add new components anytime.",
    },
    {
      question: "What's the weight capacity?",
      answer:
        "Wall panels can safely hold up to 50 lbs when properly installed into studs. Individual modules are rated for their specific use case. See our technical specs for detailed information.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "We currently ship to the US and Canada. International shipping is coming soon! Join our mailing list to be notified when we expand.",
    },
    {
      question: "What's your return policy?",
      answer:
        "We offer 30-day returns on all unopened items. If you're not satisfied with your HexSpan system, contact us for a full refund or exchange.",
    },
    {
      question: "Are the materials eco-friendly?",
      answer:
        "Yes! We use recycled materials whenever possible and design for durability and repairability. Every component can be recycled at end of life.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-background via-surface to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Support Center</h1>
            <p className="text-xl text-muted-foreground">
              Get help with installation, troubleshooting, and ordering
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <option.icon className={`w-12 h-12 ${option.color} mx-auto mb-4`} />
                    <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                    <p className="text-muted-foreground mb-6">{option.description}</p>
                    <Button variant="outline" className="w-full">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Still Need Help?</CardTitle>
                <p className="text-center text-muted-foreground">
                  Send us a message and we'll get back to you soon
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        required
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Order Number <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <Input
                      placeholder="HS-12345"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      required
                      placeholder="How can we help you?"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support;
