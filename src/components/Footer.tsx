const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
              KSign Interiors
            </h3>
            <p className="font-inter text-muted-foreground mb-4 max-w-md">
              Creating timeless interiors that reflect your personality and enhance your lifestyle. 
              Elegant design solutions crafted with passion and precision.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ksign_interiors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {/* Pinterest*/}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="font-inter text-muted-foreground hover:text-primary transition-colors">Residential Design</a></li>
              <li><a href="#" className="font-inter text-muted-foreground hover:text-primary transition-colors">Space Planning</a></li>
              <li><a href="#" className="font-inter text-muted-foreground hover:text-primary transition-colors">Color Consultation</a></li>
              <li><a href="#" className="font-inter text-muted-foreground hover:text-primary transition-colors">Custom Furnishing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="font-inter text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="font-inter text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#" className="font-inter text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="font-inter text-muted-foreground hover:text-primary transition-colors"></a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-inter text-muted-foreground">
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;