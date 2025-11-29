import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Target, Lightbulb, Leaf, ArrowRight, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Modular by Design",
      description: "Every component works together, grows with you, adapts to your needs",
    },
    {
      icon: Target,
      title: "Precision Engineered",
      description: "Exact tolerances, perfect fits, no compromises on quality",
    },
    {
      icon: Sparkles,
      title: "Maker-Centric",
      description: "Built by makers, for makers. We understand your workflow",
    },
    {
      icon: Leaf,
      title: "Future-Proof",
      description: "Designed to last, easy to repair, sustainable materials",
    },
  ];

  const roadmap = [
    {
      phase: "Now",
      items: ["Wall Panel System", "Drawer Organizers", "Core Module Library", "Web Configurator"],
    },
    {
      phase: "Next",
      items: ["Mobile App", "Community Designs", "Advanced Materials", "Pro Tool Mounts"],
    },
    {
      phase: "Later",
      items: ["AI Layout Assistant", "Smart Modules", "Global Marketplace", "Education Program"],
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-surface to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Built by a 14-Year-Old</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              From messy workshop frustration to a modular organization system used by makers worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-32 h-32 text-primary" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold">The Beginning</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At 14, I spent more time searching for tools than actually building. My workshop was chaos. 
                    Pegboards didn't fit my needs. Drawer organizers were too rigid. Nothing adapted to my workflow.
                  </p>
                  <p>
                    So I designed something better. A system that could grow, change, and truly adapt. 
                    What started as sketches in a notebook became HexSpan — a fully modular organization ecosystem.
                  </p>
                  <p>
                    Every module, every panel, every connector was designed with one goal: 
                    give makers the flexibility to organize their way, not someone else's way.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What is HexSpan */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">What is HexSpan?</h2>
            <Card className="border-2">
              <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary">HexSpan is a complete modular organization ecosystem.</strong> It combines wall panels, 
                  drawer organizers, and hundreds of attachments into one unified system.
                </p>
                <p>
                  Unlike traditional pegboards or static organizers, HexSpan uses a precision grid system that lets you 
                  configure, reconfigure, and expand without limits. Every module snaps into place with satisfying precision.
                </p>
                <p>
                  Our web configurator lets you design your perfect layout before you order. See exactly how it'll look, 
                  get real-time pricing, and have it manufactured just for you.
                </p>
                <p className="text-primary font-semibold">
                  It's organization that thinks like you do.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Design Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four core principles guide every decision we make
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/50">
                  <CardContent className="p-8">
                    <value.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <Leaf className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Built to Last</h2>
              <p className="text-xl text-muted-foreground">
                We believe the most sustainable product is one you never need to replace
              </p>
            </motion.div>

            <Card className="border-2">
              <CardContent className="p-8 md:p-12">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-lg mb-3">Durable Materials</h3>
                    <p className="text-muted-foreground">
                      High-grade polymers and metals designed for decades of use
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3">Repairable Design</h3>
                    <p className="text-muted-foreground">
                      Every component can be replaced or upgraded individually
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3">Recycled Content</h3>
                    <p className="text-muted-foreground">
                      Working toward 100% recycled and recyclable materials
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3">Local Manufacturing</h3>
                    <p className="text-muted-foreground">
                      Reduced shipping, faster delivery, supporting local economies
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Roadmap</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Where we are, where we're going, and what's next for HexSpan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {roadmap.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold">{phase.phase}</h3>
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Movement</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Be part of a community reimagining organization
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/configurator">
                Start Building <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
