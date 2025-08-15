import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Play } from "lucide-react";
import kitchenAfterImage from "@/assets/kitchenAfterImage.jpeg";
import kitchenBeforeImage from "@/assets/kitchenBeforeImage.jpeg";
import podcastStudioAfterImage from '@/assets/podcastStudioAfterImage.jpeg';
import podcastStudioBeforeImage from '@/assets/podcastStudioBefore.jpeg';
import musicStudioafterImage from '@/assets/musicStudioAfterImage.jpeg';
import musicStudioBeforeImage from '@/assets/musicStudioBeforeImage.jpeg';


const portfolioData = {
  "kitchen": {
    title: "Contemporary Wood Kitchen",
    category: "Residential",
    description: "Blending natural wood tones with modern design, this kitchen offers a perfect balance of elegance and practicality.",
    beforeImage: kitchenBeforeImage, // Placeholder - would be actual before image
    afterImage: kitchenAfterImage,
    videoUrl: "https://youtube.com/shorts/fjS7gtyV438?feature=share", // Placeholder
    details: {
      timeline: "4 weeks",
      budget: "1.5 Lakhs to 2 Lakhs",
      style: "Modern Rustic",
      features: ["Custom wooden cabinetry", "Marble-look countertops", "Textured backsplash", "Under-cabinet lighting"]
  }
  },
  "podcastStudio": {
    title: "Unscripted Podcast Studio",
    category: "Commercial Design",
    description: "A contemporary podcast recording studio featuring acoustic treatments, fully equiped studio setup, stylish décor, and functional design for a professional yet inviting atmosphere.",
    beforeImage: podcastStudioBeforeImage,
    afterImage: podcastStudioAfterImage,
    videoUrl: "https://youtube.com/shorts/hkvE6O_Blyo",
    details: {
      timeline: "2 week",
      budget: "7 Lakh to 7.5 Lakh",
      style: "Modern Minimalist",
      features: ["3D geometric acoustic panels", "Neon wall signage", "Custom LED mood lighting", "Professional recording setup"]
    }
  },
  "newsStudio": {
    title: "State-of-the-art News Studio - In progress",
    category: "Commercial",
    description: "State-of-the-art news studio in progress, designed with advanced acoustic planning, premium materials, and a creative layout to inspire artists and producers.",
    beforeImage: musicStudioBeforeImage,
    afterImage: musicStudioafterImage,
    videoUrl: "https://youtube.com/shorts/fNoV2gJ-Gm4?feature=share",
    details: {
      timeline: "2 weeks",
      budget: "3 Lakhs",
      style: "Modern Acoustic",
      features: ["Custom acoustic wall panels", "Sound isolation", "Optimized room geometry", "Professional-grade finishes"]
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
              <CardContent className="p-0">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={project.videoUrl
                    .replace("shorts/", "embed/")
                    .replace("watch?v=", "embed/")
                    .replace("?feature=share", "")
                  }
                  title="Transformation Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
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
            Inspired by This Design?
          </h3>
          <p className="font-inter text-muted-foreground mb-6">
            Contact us to discuss your project vision
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;