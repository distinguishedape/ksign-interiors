import { Card, CardContent } from "@/components/ui/card";

const Designers = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Design Team
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Our passionate designers bring years of expertise and a keen eye for detail to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Designer 1 */}
          <Card className="shadow-elegant border-border overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-soft relative">
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl text-primary">👩‍💼</span>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                Sarah Chen
              </h3>
              <p className="font-inter text-primary font-medium mb-4">
                Principal Designer & Founder
              </p>
              <p className="font-inter text-muted-foreground leading-relaxed mb-4">
                With over 12 years of experience in luxury residential design, Sarah specializes in 
                creating timeless spaces that blend modern functionality with classic elegance. 
                Her work has been featured in Architectural Digest and Elle Decor.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="font-inter text-sm text-muted-foreground">Residential Design Specialist</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="font-inter text-sm text-muted-foreground">NCIDQ Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="font-inter text-sm text-muted-foreground">Featured in 20+ Publications</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Designer 2 */}
          <Card className="shadow-elegant border-border overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-soft relative">
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl text-primary">👨‍💼</span>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                Marcus Rivera
              </h3>
              <p className="font-inter text-primary font-medium mb-4">
                Senior Designer & Commercial Specialist
              </p>
              <p className="font-inter text-muted-foreground leading-relaxed mb-4">
                Marcus brings 8 years of experience in commercial and hospitality design. 
                He has a passion for sustainable design practices and creating spaces that 
                promote wellness and productivity.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="font-inter text-sm text-muted-foreground">Commercial & Hospitality Expert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="font-inter text-sm text-muted-foreground">LEED Green Associate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="font-inter text-sm text-muted-foreground">Wellness Design Certified</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Designers;