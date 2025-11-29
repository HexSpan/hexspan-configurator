import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hexagon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const setups = [
    {
      title: "Modern Workshop Wall",
      category: "Workshop",
      description: "Complete tool organization for a woodworking studio",
      tags: ["Tools", "Wall System", "Professional"],
      color: "bg-primary/10",
    },
    {
      title: "Engineering Desk Setup",
      category: "Desk",
      description: "Clean desktop organization for electronics work",
      tags: ["Desk", "Electronics", "Compact"],
      color: "bg-accent/10",
    },
    {
      title: "Makerspace Installation",
      category: "Makerspace",
      description: "Multi-user system for a community workshop",
      tags: ["Community", "Large Scale", "Modular"],
      color: "bg-primary/10",
    },
    {
      title: "Photography Studio",
      category: "Studio",
      description: "Camera gear and lighting equipment storage",
      tags: ["Photography", "Professional", "Wall System"],
      color: "bg-accent/10",
    },
    {
      title: "Garage Workshop",
      category: "Workshop",
      description: "Automotive tools and parts organization",
      tags: ["Automotive", "Tools", "Wall System"],
      color: "bg-primary/10",
    },
    {
      title: "Artist's Desk",
      category: "Desk",
      description: "Art supplies and tool management",
      tags: ["Art", "Desk", "Creative"],
      color: "bg-accent/10",
    },
    {
      title: "Electronics Lab",
      category: "Workshop",
      description: "Component storage and test equipment setup",
      tags: ["Electronics", "Professional", "Drawer System"],
      color: "bg-primary/10",
    },
    {
      title: "STEM Classroom",
      category: "Education",
      description: "Student workstation organization system",
      tags: ["Education", "Students", "Modular"],
      color: "bg-accent/10",
    },
    {
      title: "3D Printing Station",
      category: "Makerspace",
      description: "Tools and filament storage for makers",
      tags: ["3D Printing", "Tools", "Compact"],
      color: "bg-primary/10",
    },
    {
      title: "Craft Room Wall",
      category: "Studio",
      description: "Textile and craft supplies organization",
      tags: ["Crafts", "Wall System", "Creative"],
      color: "bg-accent/10",
    },
    {
      title: "Mini Workshop",
      category: "Workshop",
      description: "Space-efficient tool storage for apartments",
      tags: ["Compact", "Wall System", "Urban"],
      color: "bg-primary/10",
    },
    {
      title: "Home Office Drawer",
      category: "Desk",
      description: "Stationery and supplies organization",
      tags: ["Office", "Drawer System", "Desk"],
      color: "bg-accent/10",
    },
  ];

  const filteredSetups = setups.filter(
    (setup) =>
      setup.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      setup.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      setup.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-20 pb-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Inspiration Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover how makers worldwide are using HexSpan to transform their workspaces
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search setups, categories, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6"
            />
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSetups.map((setup, index) => (
            <motion.div
              key={setup.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full hover:shadow-medium transition-all duration-300 cursor-pointer group overflow-hidden">
                <CardContent className="p-0">
                  {/* Image Placeholder */}
                  <div
                    className={`aspect-square ${setup.color} relative overflow-hidden flex items-center justify-center`}
                  >
                    <Hexagon className="w-24 h-24 text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {setup.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {setup.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">{setup.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {setup.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredSetups.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No setups found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
