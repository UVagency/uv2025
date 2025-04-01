
import { useState } from "react";
import { DiamondIcon } from "./DiamondIcon";
import { AwardIcon } from "./AwardIcon";
import { AspectRatio } from "./ui/aspect-ratio";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

interface Project {
  name: string;
  year: string;
  categories: string[];
  comingSoon?: boolean;
  awardWinning?: boolean;
  imageUrl: string;
}

const projects: Project[] = [
  { 
    name: "MERGUI", 
    year: "2019", 
    categories: ["MUSIC VIDEO"],
    imageUrl: "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
  },
  { 
    name: "CODE NAME", 
    year: "2023", 
    categories: ["GRAPHICS PACKAGE"],
    imageUrl: "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
  },
  { 
    name: "VAXA", 
    year: "2025", 
    categories: ["EXPLAINER"], 
    comingSoon: true,
    imageUrl: "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
  },
  { 
    name: "DANA", 
    year: "2023", 
    categories: ["GRAPHICS PACKAGE"],
    imageUrl: "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
  },
  { 
    name: "BOOKAWAY", 
    year: "2020", 
    categories: ["COMMERCIAL"],
    imageUrl: "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
  },
  { 
    name: "DORITOS", 
    year: "2017", 
    categories: ["COMMERCIAL"],
    imageUrl: "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
  },
  { 
    name: "KAYMA", 
    year: "2024", 
    categories: ["MUSIC VIDEO"],
    imageUrl: "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
  },
  { 
    name: "PARIS", 
    year: "2018", 
    categories: ["PERSONAL"], 
    awardWinning: true,
    imageUrl: "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[90%] mx-auto px-4 py-8 font-sans">
      <div className="flex items-center mb-8">
        <h2 className="text-xl uppercase font-bold text-portfolio-text mr-2">Selected Projects</h2>
        <DiamondIcon />
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={project.name} className="project-item group cursor-pointer">
            <div className="portfolio-divider"></div>
            
            {/* Project item */}
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
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
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              
              <HoverCardContent 
                side="right" 
                align="start" 
                className="p-0 bg-transparent border-0 shadow-none"
                sideOffset={20}
              >
                <div className="flex gap-2 animate-slide-in-right overflow-hidden">
                  {/* Project images that appear on hover */}
                  <div className="min-w-[180px] w-[180px] h-[108px] rounded-md overflow-hidden bg-portfolio-tag-bg">
                    <AspectRatio ratio={5/3}>
                      <img 
                        src={project.imageUrl} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  
                  <div className="min-w-[180px] w-[180px] h-[108px] rounded-md overflow-hidden bg-portfolio-tag-bg">
                    <AspectRatio ratio={5/3}>
                      <img 
                        src={project.imageUrl} 
                        alt={`${project.name} thumbnail`}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  
                  <div className="min-w-[180px] w-[180px] h-[108px] rounded-md overflow-hidden bg-portfolio-tag-bg">
                    <AspectRatio ratio={5/3}>
                      <img 
                        src={project.imageUrl} 
                        alt={`${project.name} thumbnail`}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
