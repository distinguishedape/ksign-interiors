import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Creating Spaces That 
              <span className="text-primary block">Inspire Daily</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                We believe that every space tells a story. Our mission is to help you tell yours through 
                thoughtfully curated environments that blend functionality with timeless elegance.
              </p>
              
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                We specialize in creating harmonious spaces using natural materials, sophisticated color palettes, 
                and careful attention to light and texture. Each project is a collaboration, ensuring your 
                personality shines through in every detail.
              </p>
            </div>
            
           
          </div>
          
          <div className="relative">
            <div className="bg-gradient-subtle rounded-lg p-8 shadow-elegant">
              <blockquote className="text-center">
                <p className="font-playfair text-xl italic text-foreground mb-4">
                  "A home should be a reflection of the people who live there — their stories, their travels, their favorite colors, the things they can’t part with. It’s about creating a space where every piece feels intentional, where the layers of texture, color, and history make the room not just beautiful, but meaningful."
                </p>
                <footer className="font-inter text-muted-foreground">
                  — Joanna Gaines
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;