import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Grid3x3,
  Plus,
  Save,
  Download,
  ShoppingCart,
  Hammer,
  Box,
  Circle,
  Square,
  Minus,
  Wrench,
  Ruler,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Module {
  id: string;
  name: string;
  icon: any;
  price: number;
  category: string;
}

const Configurator = () => {
  const { toast } = useToast();
  const [gridSize, setGridSize] = useState({ width: 4, height: 4 });
  const [selectedModules, setSelectedModules] = useState<Module[]>([]);
  const [totalPrice, setTotalPrice] = useState(99); // Base panel price

  const modules: Module[] = [
    { id: "hook-1", name: "Single Hook", icon: Circle, price: 3, category: "hooks" },
    { id: "hook-2", name: "Double Hook", icon: Circle, price: 5, category: "hooks" },
    { id: "bin-1", name: "Small Bin", icon: Box, price: 8, category: "bins" },
    { id: "bin-2", name: "Large Bin", icon: Box, price: 12, category: "bins" },
    { id: "tool-1", name: "Wrench Mount", icon: Wrench, price: 6, category: "tools" },
    { id: "tool-2", name: "Hammer Mount", icon: Hammer, price: 6, category: "tools" },
    { id: "shelf-1", name: "Small Shelf", icon: Square, price: 15, category: "shelves" },
    { id: "shelf-2", name: "Large Shelf", icon: Square, price: 22, category: "shelves" },
  ];

  const addModule = (module: Module) => {
    setSelectedModules([...selectedModules, { ...module, id: `${module.id}-${Date.now()}` }]);
    setTotalPrice(totalPrice + module.price);
    toast({
      title: "Module Added",
      description: `${module.name} added to your configuration`,
    });
  };

  const removeModule = (moduleId: string, price: number) => {
    setSelectedModules(selectedModules.filter(m => m.id !== moduleId));
    setTotalPrice(totalPrice - price);
  };

  const handleSave = () => {
    toast({
      title: "Configuration Saved",
      description: "Your layout has been saved to your account",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Downloading",
      description: "Your configuration file is being prepared",
    });
  };

  const handleAddToOrder = () => {
    toast({
      title: "Added to Order",
      description: "Configuration added! Review your order to complete purchase.",
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Build Your System</h1>
          <p className="text-xl text-muted-foreground">
            Drag modules, adjust sizing, and see your custom layout come to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-6">
          {/* Main Canvas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Configuration Canvas</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleSave}>
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleDownload}>
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Grid Controls */}
                <div className="flex items-center gap-4 mb-6 p-4 bg-muted rounded-lg">
                  <Ruler className="w-5 h-5 text-primary" />
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Grid Size:</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setGridSize({ ...gridSize, width: Math.max(2, gridSize.width - 1) })}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <Badge variant="secondary">{gridSize.width} × {gridSize.height}</Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setGridSize({ ...gridSize, width: Math.min(8, gridSize.width + 1) })}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Grid Canvas */}
                <div className="bg-gradient-to-br from-background to-muted rounded-xl p-8 min-h-[500px] border-2 border-dashed border-border">
                  <div
                    className="grid gap-2 mx-auto"
                    style={{
                      gridTemplateColumns: `repeat(${gridSize.width}, 1fr)`,
                      maxWidth: `${gridSize.width * 100}px`,
                    }}
                  >
                    {Array.from({ length: gridSize.width * gridSize.height }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square bg-surface border-2 border-border rounded-lg hover:border-primary transition-colors cursor-pointer flex items-center justify-center"
                      >
                        <Grid3x3 className="w-6 h-6 text-muted-foreground/30" />
                      </div>
                    ))}
                  </div>

                  {/* Floating Modules Preview */}
                  {selectedModules.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {selectedModules.map((module) => (
                        <Badge
                          key={module.id}
                          variant="secondary"
                          className="px-3 py-1.5 cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => removeModule(module.id, module.price)}
                        >
                          <module.icon className="w-3 h-3 mr-1.5" />
                          {module.name}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Click modules from the sidebar to add them • Click badges to remove
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Module Library */}
            <Card>
              <CardHeader>
                <CardTitle>Module Library</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="hooks" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-4">
                    <TabsTrigger value="hooks">Hooks</TabsTrigger>
                    <TabsTrigger value="bins">Bins</TabsTrigger>
                    <TabsTrigger value="tools">Tools</TabsTrigger>
                  </TabsList>

                  <TabsContent value="hooks" className="space-y-2">
                    {modules
                      .filter((m) => m.category === "hooks")
                      .map((module) => (
                        <button
                          key={module.id}
                          onClick={() => addModule(module)}
                          className="w-full p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <module.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{module.name}</p>
                              <p className="text-sm text-muted-foreground">${module.price}</p>
                            </div>
                          </div>
                          <Plus className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </button>
                      ))}
                  </TabsContent>

                  <TabsContent value="bins" className="space-y-2">
                    {modules
                      .filter((m) => m.category === "bins")
                      .map((module) => (
                        <button
                          key={module.id}
                          onClick={() => addModule(module)}
                          className="w-full p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <module.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{module.name}</p>
                              <p className="text-sm text-muted-foreground">${module.price}</p>
                            </div>
                          </div>
                          <Plus className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </button>
                      ))}
                  </TabsContent>

                  <TabsContent value="tools" className="space-y-2">
                    {modules
                      .filter((m) => m.category === "tools" || m.category === "shelves")
                      .map((module) => (
                        <button
                          key={module.id}
                          onClick={() => addModule(module)}
                          className="w-full p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <module.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{module.name}</p>
                              <p className="text-sm text-muted-foreground">${module.price}</p>
                            </div>
                          </div>
                          <Plus className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </button>
                      ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Pricing Summary */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Base Panel</span>
                  <span className="font-medium">$99.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Modules ({selectedModules.length})</span>
                  <span className="font-medium">${(totalPrice - 99).toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-4">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold text-primary">${totalPrice.toFixed(2)}</span>
                  </div>
                  <Button onClick={handleAddToOrder} className="w-full" size="lg">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Order
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Shipping calculated at checkout
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
