import { Link } from "react-router-dom";
import { Hexagon, Instagram, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "mailto:hello@hexspan.com", label: "Email" },
  ];

  const footerLinks = {
    Product: [
      { name: "Configurator", path: "/configurator" },
      { name: "Gallery", path: "/gallery" },
      { name: "Pricing", path: "/configurator" },
    ],
    Company: [
      { name: "About", path: "/about" },
      { name: "Support", path: "/support" },
    ],
    Legal: [
      { name: "Terms", path: "/terms" },
      { name: "Privacy", path: "/privacy" },
      { name: "Warranty", path: "/warranty" },
    ],
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group w-fit">
              <Hexagon className="w-7 h-7 text-primary transition-transform group-hover:rotate-180 duration-500" />
              <span className="text-xl font-bold">HexSpan</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-4">
              Build your perfect modular organization system. Designed by a 14-year-old maker for makers everywhere.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-sm">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HexSpan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with <span className="text-primary">♥</span> by a young maker
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
