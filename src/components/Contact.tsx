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
            Get In Touch
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in our interior design services? We'd love to hear from you and discuss your project.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft border-border text-center">
              <CardContent className="p-8">
                <span className="text-4xl mb-4 block">📍</span>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                  Our Studio
                </h3>
                <p className="font-inter text-muted-foreground">
                  123 Design Avenue<br />
                  Creative District, NY 10001
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-border text-center">
              <CardContent className="p-8">
                <span className="text-4xl mb-4 block">📞</span>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                  Call Us
                </h3>
                <p className="font-inter text-muted-foreground">
                  +1 (555) 123-4567
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-border text-center">
              <CardContent className="p-8">
                <span className="text-4xl mb-4 block">✉️</span>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                  Email Us
                </h3>
                <p className="font-inter text-muted-foreground">
                  hello@serenespaces.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Card className="shadow-soft border-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                Office Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center max-w-xs mx-auto">
                  <span className="font-inter text-foreground">Monday - Friday</span>
                  <span className="font-inter text-muted-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center max-w-xs mx-auto">
                  <span className="font-inter text-foreground">Saturday</span>
                  <span className="font-inter text-muted-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center max-w-xs mx-auto">
                  <span className="font-inter text-foreground">Sunday</span>
                  <span className="font-inter text-muted-foreground">By Appointment</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;