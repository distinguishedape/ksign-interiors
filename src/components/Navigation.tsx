import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="font-playfair text-2xl font-semibold text-foreground">
              Serene Spaces
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-inter text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="font-inter text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#portfolio" className="font-inter text-foreground hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#about" className="font-inter text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="font-inter text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          
          <Button variant="default" className="font-inter">
            Get Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;