import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury interior design" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Transform Your
            <span className="text-primary block">Living Space</span>
          </h1>
          
          <p className="font-inter text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Creating timeless interiors that reflect your personality and enhance your lifestyle. 
            Elegant design solutions crafted with passion and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" size="lg" className="font-inter font-medium">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;