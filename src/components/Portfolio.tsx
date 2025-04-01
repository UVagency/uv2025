
import { useState } from "react";
import { Link } from "react-router-dom";
import { DiamondIcon } from "./DiamondIcon";
import { AwardIcon } from "./AwardIcon";
import { AspectRatio } from "./ui/aspect-ratio";
import projectsData, { ProjectData } from "@/data/projectsData";

interface Project {
  name: string;
  year: string;
  categories: string[];
  comingSoon?: boolean;
  awardWinning?: boolean;
  imageUrl: string;
  thumbnails: string[];
  slug?: string;
}

// Convert projectsData to an array for the portfolio
const projects: Project[] = Object.entries(projectsData).map(([slug, project]) => ({
  name: project.name,
  year: project.year,
  categories: project.categories,
  comingSoon: project.year > new Date().getFullYear().toString(),
  awardWinning: slug === "paris", // Just keeping the same one that was award-winning
  imageUrl: project.images[0],
  thumbnails: project.thumbnails || [],
  slug
}));

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="max-w-[90%] mx-auto px-4 py-8 font-sans">
      <div className="flex items-center mb-8">
        <h2 className="text-xl uppercase font-bold text-portfolio-text mr-2">Selected Projects</h2>
        <DiamondIcon />
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div 
            key={project.name} 
            className="project-item group relative h-auto"
            onMouseEnter={() => setHoveredProject(project.name)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="portfolio-divider"></div>
            
            {/* Project item - now wrapped with Link */}
            <Link to={project.comingSoon ? "#" : `/project/${project.slug}`} className={project.comingSoon ? "cursor-not-allowed" : "cursor-pointer"}>
              <div className="py-4">
                <div className="flex flex-row items-center justify-between">
                  {/* Project name and tags - always in one line */}
                  <div className="flex items-center flex-grow gap-4 overflow-hidden">
                    <div className="text-4xl font-bold text-portfolio-text mr-4 group-hover:text-portfolio-highlight whitespace-nowrap">
                      {project.name}
                    </div>
                    <div className="flex items-center flex-wrap gap-2">
                      <span className="project-year-tag group-hover:project-year-tag-highlight group-hover:bg-portfolio-highlight group-hover:text-portfolio-text whitespace-nowrap">
                        {project.year}
                      </span>
                      
                      {project.categories.map((category) => (
                        <span key={category} className="project-category-tag group-hover:project-category-tag-highlight whitespace-nowrap">
                          {category}
                        </span>
                      ))}
                      
                      {project.comingSoon && (
                        <span className="project-coming-soon-tag whitespace-nowrap">
                          COMING SOOOOOON
                        </span>
                      )}
                      
                      {project.awardWinning && (
                        <div className="relative inline-block">
                          <AwardIcon />
                        </div>
                      )}
                      
                      {/* Thumbnails - show with entry and exit animations */}
                      <div className={`flex gap-2 ml-2 transition-all duration-300 ${
                        hoveredProject === project.name 
                          ? "opacity-100 animate-slide-in-right" 
                          : "opacity-0 animate-slide-out-right"
                      } absolute`}>
                        {project.thumbnails.slice(0, 5).map((thumbnail, idx) => (
                          <div key={idx} className="min-w-[100px] w-[100px] h-[60px] rounded-md overflow-hidden bg-portfolio-tag-bg">
                            <AspectRatio ratio={5/3}>
                              <img 
                                src={thumbnail} 
                                alt={`${project.name} thumbnail ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </AspectRatio>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
