import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Start Your Design Journey
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your space? Get in touch for a consultation and let's bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-elegant border-border">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-foreground">
                  Tell Us About Your Project
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="John" className="font-inter" />
                  </div>
                  <div>
                    <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="font-inter" />
                  </div>
                </div>
                
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@example.com" className="font-inter" />
                </div>
                
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    Project Type
                  </label>
                  <Input placeholder="Residential, Commercial, etc." className="font-inter" />
                </div>
                
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    Tell Us About Your Vision
                  </label>
                  <Textarea 
                    placeholder="Describe your project, style preferences, timeline, and any specific requirements..."
                    rows={5}
                    className="font-inter"
                  />
                </div>
                
                <Button size="lg" className="w-full font-inter font-medium">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-soft border-border">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  Get In Touch
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary mt-1">📍</span>
                    <div>
                      <p className="font-inter text-sm font-medium text-foreground">Address</p>
                      <p className="font-inter text-sm text-muted-foreground">
                        123 Design Avenue<br />
                        Creative District, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-primary mt-1">📞</span>
                    <div>
                      <p className="font-inter text-sm font-medium text-foreground">Phone</p>
                      <p className="font-inter text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-primary mt-1">✉️</span>
                    <div>
                      <p className="font-inter text-sm font-medium text-foreground">Email</p>
                      <p className="font-inter text-sm text-muted-foreground">hello@serenespaces.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-border">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-inter text-sm text-foreground">Monday - Friday</span>
                    <span className="font-inter text-sm text-muted-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-sm text-foreground">Saturday</span>
                    <span className="font-inter text-sm text-muted-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-sm text-foreground">Sunday</span>
                    <span className="font-inter text-sm text-muted-foreground">By Appointment</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;