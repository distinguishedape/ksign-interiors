import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Residential Design",
    description: "Complete home makeovers from concept to completion, creating spaces that truly feel like home.",
    icon: "🏠"
  },
  {
    title: "Space Planning",
    description: "Optimizing your space for functionality and flow while maintaining aesthetic appeal.",
    icon: "📐"
  },
  {
    title: "Color Consultation",
    description: "Expert color guidance to create harmonious palettes that enhance your space's mood.",
    icon: "🎨"
  },
  {
    title: "Custom Furnishing",
    description: "Bespoke furniture and decor selection tailored to your style and requirements.",
    icon: "🛋️"
  },
  {
    title: "Lighting Design",
    description: "Creating the perfect ambiance through strategic lighting placement and fixture selection.",
    icon: "💡"
  },
  {
    title: "Home Decor",
    description: "Transforming spaces into stylish, functional, and personalized homes with expert decor solutions.",
    icon: "🖼️"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to transform your vision into reality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;