import { useNavigate } from "react-router-dom";
import kitchenAfterImage from "@/assets/kitchenAfterImage.jpeg";
import officeImage from "@/assets/office-design.jpg";
import kitchenImage from "@/assets/kitchen-design.jpg";
import podcastStudioAfterImage from '@/assets/podcastStudioAfterImage.jpeg'
import musicStudioBeforeImage from '@/assets/musicStudioBeforeImage.jpeg';
import musicStudioAfterImage from '@/assets/musicStudioAfterImage.jpeg';

const portfolioItems = [
  {
    id: "kitchen",
    title: "Contemporary Wood Kitchen",
    category: "Residential",
    image: kitchenAfterImage,
    description: "Blending natural wood tones with modern design, this kitchen offers a perfect balance of elegance and practicality."
  },
  {
    id: "podcastStudio",
    title: "Unscripted Podcast Studio",
    category: "Commercial",
    image: podcastStudioAfterImage,
    description: "A contemporary podcast recording studio featuring acoustic treatments, stylish décor, and functional design for a professional yet inviting atmosphere."
  },
  {
    id: "newsStudio",
    title: "State-of-the-art News Studio - In progress",
    category: "Workspace",
    image: musicStudioAfterImage,
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

                 {/* Overlay with CTA */}
                <div className="
                  absolute inset-0 
                  bg-gradient-to-t from-black/70 via-black/40 to-transparent
                  opacity-100 md:opacity-0 md:group-hover:opacity-100
                  transition-opacity duration-300
                  flex flex-col justify-end
                ">
                  
                  {/* Centered CTA */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-inter text-lg font-semibold bg-primary/70 px-4 py-2 rounded-lg shadow-md">
                      Click Here
                    </span>
                  </div>

                  {/* Bottom text (category + title) */}
                  <div className="relative bottom-4 left-4 right-4 text-white">
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