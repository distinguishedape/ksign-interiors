import { useNavigate } from "react-router-dom";
import bedroomImage from "@/assets/bedroom-design.jpg";
import kitchenImage from "@/assets/kitchen-design.jpg";
import officeImage from "@/assets/office-design.jpg";

const portfolioItems = [
  {
    id: "bedroom",
    title: "Serene Bedroom Sanctuary",
    category: "Residential",
    image: bedroomImage,
    description: "A calming retreat featuring natural textures and our signature color palette"
  },
  {
    id: "kitchen",
    title: "Modern Kitchen Haven",
    category: "Kitchen Design",
    image: kitchenImage,
    description: "Clean lines and functional beauty merge in this contemporary kitchen space"
  },
  {
    id: "office",
    title: "Productive Home Office",
    category: "Workspace",
    image: officeImage,
    description: "An inspiring workspace designed for creativity and focused productivity"
  }
];

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest interior design transformations that showcase timeless elegance and modern functionality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={() => navigate(`/portfolio/${item.id}`)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-500">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-inter text-sm font-medium">{item.category}</span>
                    <h3 className="font-playfair text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;