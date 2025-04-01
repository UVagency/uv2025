
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectData {
  name: string;
  year: string;
  categories: string[];
  description: string;
  fullDescription?: string;
  client?: string;
  songTitle?: string;
  images: string[];
}

// Sample project data - in a real application, this would come from a database or API
const projectsData: Record<string, ProjectData> = {
  "mergui": {
    name: "MERGUI",
    year: "2019",
    categories: ["MUSIC VIDEO"],
    description: "A vibrant mixed-media music video created for international pop star Mergui's summer hit, "Not Myself."",
    client: "Mergui",
    songTitle: "Not Myself",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ]
  },
  "code-name": {
    name: "CODE NAME",
    year: "2023",
    categories: ["GRAPHICS PACKAGE"],
    description: "A comprehensive graphics package for an international brand campaign.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ]
  },
  "vaxa": {
    name: "VAXA",
    year: "2025",
    categories: ["EXPLAINER"],
    description: "An innovative explainer video for a tech startup's new product launch.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ]
  },
  "dana": {
    name: "DANA",
    year: "2023",
    categories: ["GRAPHICS PACKAGE"],
    description: "A bold and colorful graphics package for a fashion brand's seasonal campaign.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ]
  },
  "bookaway": {
    name: "BOOKAWAY",
    year: "2020",
    categories: ["COMMERCIAL"],
    description: "A dynamic commercial showcasing travel experiences around the world.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ]
  },
  "doritos": {
    name: "DORITOS",
    year: "2017",
    categories: ["COMMERCIAL"],
    description: "A vibrant commercial for Doritos featuring colorful animations and effects.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ]
  },
  "kayma": {
    name: "KAYMA",
    year: "2024",
    categories: ["MUSIC VIDEO"],
    description: "An artistic music video with experimental visual techniques.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ]
  },
  "paris": {
    name: "PARIS",
    year: "2018",
    categories: ["PERSONAL"],
    description: "A personal project exploring the beauty and rhythm of Parisian life.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ]
  },
  "wix": {
    name: "WIX",
    year: "2024",
    categories: ["EXPLAINER"],
    description: "An informative explainer video for Wix's latest website builder features.",
    images: [
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ]
  },
  "waking-up": {
    name: "WAKING UP",
    year: "2025",
    categories: ["EXPLAINER"],
    description: "A dreamy and informative explainer for a meditation app.",
    images: [
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId && projectsData[projectId.toLowerCase()];
  
  if (!project) {
    return (
      <div className="min-h-screen bg-portfolio-bg">
        <Navbar />
        <div className="max-w-[90%] mx-auto py-24 text-center">
          <h1 className="text-4xl font-bold text-portfolio-text mb-4">Project Not Found</h1>
          <Link to="/" className="text-portfolio-highlight hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Navbar />
      
      <div className="max-w-[90%] mx-auto pt-8 pb-16">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center text-portfolio-text hover:text-portfolio-highlight mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to Projects</span>
        </Link>
        
        {/* Project header */}
        <div className="border-b border-portfolio-divider pb-6 mb-12">
          <div className="flex items-center mb-4">
            <h1 className="text-6xl font-bold text-portfolio-text mr-4">{project.name}</h1>
            <div className="flex flex-wrap gap-2">
              <span className="project-year-tag">
                {project.year}
              </span>
              
              {project.categories.map((category) => (
                <span key={category} className="project-category-tag">
                  {category}
                </span>
              ))}
            </div>
          </div>
          
          <p className="text-4xl text-portfolio-text/90 font-light leading-tight max-w-4xl">
            {project.description}
          </p>
          
          {project.client && (
            <div className="mt-4 text-portfolio-text/70">
              <span className="font-semibold">Client:</span> {project.client}
            </div>
          )}
          
          {project.songTitle && (
            <div className="mt-2 text-portfolio-text/70">
              <span className="font-semibold">Song:</span> "{project.songTitle}"
            </div>
          )}
        </div>
        
        {/* Project images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {project.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <AspectRatio ratio={16/9}>
                <img 
                  src={image} 
                  alt={`${project.name} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
        
        {/* Full video link for certain projects */}
        {project.name === "MERGUI" && (
          <div className="border-t border-portfolio-divider pt-8 mb-24">
            <Link 
              to="#" 
              className="inline-flex items-center text-portfolio-text hover:text-portfolio-highlight transition-colors"
            >
              <span className="uppercase mr-2">Full Video</span>
              <span className="text-portfolio-highlight">👉</span>
            </Link>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
