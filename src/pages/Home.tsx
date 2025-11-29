import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Grid3x3,
  Plus,
  ShoppingBag,
  Hammer,
  Wrench,
  PaintBucket,
  Box,
  Boxes,
  Layers,
  Sparkles,
  ArrowRight,
  Hexagon,
} from "lucide-react";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const steps = [
    {
      icon: Grid3x3,
      title: "Choose Panel Size",
      description: "Select your wall or drawer dimensions",
    },
    {
      icon: Plus,
      title: "Add Modules",
      description: "Drag and drop tools, bins, and mounts",
    },
    {
      icon: ShoppingBag,
      title: "Order Custom Layout",
      description: "Get your personalized system delivered",
    },
  ];

  const products = [
    {
      icon: Layers,
      name: "Wall System",
      description: "Modular panels with unlimited configurations",
      color: "text-primary",
    },
    {
      icon: Boxes,
      name: "Drawer System",
      description: "Precision organizers for every drawer",
      color: "text-accent",
    },
    {
      icon: Hammer,
      name: "Tool Mounts",
      description: "Custom holders for any tool",
      color: "text-primary",
    },
    {
      icon: Box,
      name: "Attachments",
      description: "Hooks, bins, shelves, and more",
      color: "text-accent",
    },
    {
      icon: Sparkles,
      name: "Expansion Modules",
      description: "Grow your system anytime",
      color: "text-primary",
    },
    {
      icon: PaintBucket,
      name: "3D Printables",
      description: "DIY accessories and adapters",
      color: "text-accent",
    },
  ];

  const galleryItems = [
    { title: "Workshop Setup", image: "workshop", color: "bg-primary/10" },
    { title: "Desk Organizer", image: "desk", color: "bg-accent/10" },
    { title: "Makerspace", image: "maker", color: "bg-primary/10" },
    { title: "Studio Wall", image: "studio", color: "bg-accent/10" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden hex-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Built by a 14-year-old maker</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Build Your Perfect
              <span className="block text-primary mt-2">Tool System</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              HexSpan is a fully modular wall + drawer ecosystem designed to adapt to you.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/configurator">
                  Start Configuring <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </motion.div>

            {/* Floating Product Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-16 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-strong bg-gradient-to-br from-surface to-muted p-8 md:p-12">
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                      className="aspect-square bg-primary/20 rounded-lg flex items-center justify-center"
                    >
                      <Hexagon className="w-8 h-8 text-primary/40" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How the System Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to your perfect organization system
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-medium h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-4">{index + 1}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Ecosystem */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Complete Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to organize your workspace
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <product.icon className={`w-12 h-12 ${product.color} mb-4`} />
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurator Preview */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Design Your System</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Drag, drop, and configure your perfect layout in real-time
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-strong"
            >
              <div className="bg-gradient-to-br from-muted to-surface p-8 md:p-16 aspect-video flex items-center justify-center relative">
                <div className="absolute inset-0 hex-pattern opacity-30" />
                <div className="relative z-10 text-center">
                  <Wrench className="w-20 h-20 text-primary mx-auto mb-6" />
                  <p className="text-xl font-semibold mb-6">Interactive Configurator</p>
                  <Button asChild size="lg">
                    <Link to="/configurator">Try the Full Builder</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Community Setups</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how makers around the world are using HexSpan
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="cursor-pointer"
              >
                <div className={`aspect-square rounded-2xl ${item.color} p-6 flex items-center justify-center mb-4 shadow-soft hover:shadow-medium transition-all duration-300`}>
                  <Hexagon className="w-16 h-16 text-primary/40" />
                </div>
                <h3 className="font-semibold text-center">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/gallery">
                View Full Gallery <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Founder Story Teaser */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-2 border-primary/20 shadow-strong overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-24 h-24 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Built by a Young Maker</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      At 14, I was frustrated with messy workspaces. So I designed HexSpan — a modular system that grows with you.
                    </p>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/about">
                        Read the Full Story <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Organized?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Start building your custom HexSpan system today
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/configurator">
                Launch Configurator <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
