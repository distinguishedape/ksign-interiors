import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Play } from "lucide-react";
import bedroomImage from "@/assets/bedroom-design.jpg";
import kitchenImage from "@/assets/kitchen-design.jpg";
import officeImage from "@/assets/office-design.jpg";

const portfolioData = {
  "bedroom": {
    title: "Serene Bedroom Sanctuary",
    category: "Residential",
    description: "A complete transformation of a master bedroom into a calming retreat featuring natural textures, soft lighting, and our signature color palette.",
    beforeImage: bedroomImage, // Placeholder - would be actual before image
    afterImage: bedroomImage,
    videoUrl: "https://example.com/bedroom-transformation.mp4", // Placeholder
    details: {
      timeline: "6 weeks",
      budget: "$15,000 - $25,000",
      style: "Modern Minimalist",
      features: ["Custom built-in storage", "Natural lighting optimization", "Sustainable materials", "Smart home integration"]
    }
  },
  "kitchen": {
    title: "Modern Kitchen Haven",
    category: "Kitchen Design",
    description: "A complete kitchen renovation that merges clean lines with functional beauty, creating the perfect space for cooking and entertaining.",
    beforeImage: kitchenImage,
    afterImage: kitchenImage,
    videoUrl: "https://example.com/kitchen-transformation.mp4",
    details: {
      timeline: "8 weeks",
      budget: "$35,000 - $50,000",
      style: "Contemporary",
      features: ["Quartz countertops", "Custom cabinetry", "High-end appliances", "Open concept design"]
    }
  },
  "office": {
    title: "Productive Home Office",
    category: "Workspace",
    description: "An inspiring workspace designed for creativity and focused productivity, featuring ergonomic design and natural elements.",
    beforeImage: officeImage,
    afterImage: officeImage,
    videoUrl: "https://example.com/office-transformation.mp4",
    details: {
      timeline: "4 weeks",
      budget: "$8,000 - $15,000",
      style: "Scandinavian",
      features: ["Ergonomic furniture", "Natural lighting", "Built-in shelving", "Cable management system"]
    }
  }
};

const PortfolioDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project = projectId ? portfolioData[projectId as keyof typeof portfolioData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')} variant="default">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-6">
          <Button 
            onClick={() => navigate('/')} 
            variant="ghost" 
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          
          <div className="max-w-4xl">
            <span className="font-inter text-sm font-medium text-primary mb-2 block">
              {project.category}
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="font-inter text-lg text-muted-foreground">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Before & After Section */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-8 text-center">
            Before & After
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-playfair text-xl">Before</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <img 
                  src={project.beforeImage} 
                  alt="Before transformation"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="font-playfair text-xl">After</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <img 
                  src={project.afterImage} 
                  alt="After transformation"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Transformation Video */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-8 text-center">
            Transformation Process
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0 relative">
                <div className="bg-muted h-64 md:h-96 flex items-center justify-center relative">
                  <img 
                    src={project.afterImage} 
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
                    <Button size="lg" className="rounded-full w-16 h-16 p-0">
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <p className="text-center text-muted-foreground mt-4 font-inter">
              Watch the complete transformation process from start to finish
            </p>
          </div>
        </div>

        {/* Project Details */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-8 text-center">
            Project Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair">Project Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-inter font-semibold text-foreground mb-1">Timeline</h4>
                  <p className="text-muted-foreground">{project.details.timeline}</p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-foreground mb-1">Budget Range</h4>
                  <p className="text-muted-foreground">{project.details.budget}</p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-foreground mb-1">Design Style</h4>
                  <p className="text-muted-foreground">{project.details.style}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.details.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="font-inter text-muted-foreground mb-6">
            Let's create something beautiful together
          </p>
          <Button size="lg" onClick={() => navigate('/#contact')}>
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;