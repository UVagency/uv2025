
import { useState } from "react";
import { DiamondIcon } from "./DiamondIcon";
import { AwardIcon } from "./AwardIcon";

interface Project {
  name: string;
  year: string;
  categories: string[];
  comingSoon?: boolean;
  awardWinning?: boolean;
  emojis?: string[]; // Nueva propiedad para los emojis
}

const projects: Project[] = [
  { 
    name: "CLOSER TO THE SUN", 
    year: "2024", 
    categories: ["IMMERSIVE"],
    emojis: ["☀️", "🌊", "🏄‍♂️", "🌴", "🕶️"]
  },
  { 
    name: "SABOR DE BARRIO", 
    year: "2024", 
    categories: ["INTEGRATED"],
    emojis: ["🌮", "🌶️", "🍹", "🪅", "🎭"]
  },
  { 
    name: "WE MAKE YOUR DAY", 
    year: "2024", 
    categories: ["INTEGRATED"], 
    comingSoon: true,
    emojis: ["🎁", "🎉", "🎊", "🎈", "🥳"]
  },
  { 
    name: "URBAN BEAT", 
    year: "2023", 
    categories: ["INTEGRATED"],
    emojis: ["🏙️", "🎧", "🎵", "🎤", "🥁"]
  },
  { 
    name: "ENJOY THE UNEXPECTED", 
    year: "2023", 
    categories: ["PROMO"],
    emojis: ["🎲", "🎯", "🎪", "🎭", "✨"]
  },
  { 
    name: "A GREAT FIRST DAY", 
    year: "2023", 
    categories: ["PROMO"],
    emojis: ["🌅", "🚀", "📝", "🌱", "🎯"]
  },
  { 
    name: "TURN UP THE VOLUME", 
    year: "2023", 
    categories: ["LAUNCH"],
    emojis: ["🔊", "📢", "🎸", "🎺", "🔥"]
  },
  { 
    name: "FLY YOUR WAY", 
    year: "2022", 
    categories: ["MEDIA"], 
    awardWinning: true,
    emojis: ["✈️", "🛫", "🌍", "☁️", "🧳"]
  },
];

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
            className="project-item group cursor-pointer"
            onMouseEnter={() => setHoveredProject(project.name)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="portfolio-divider"></div>
            
            {/* Normal state */}
            <div className="py-4 flex items-center">
              <div className="text-4xl font-bold text-portfolio-text mr-4 group-hover:text-portfolio-highlight">
                {project.name}
              </div>
              <div className="flex items-center gap-2">
                <span className="project-year-tag group-hover:project-year-tag-highlight group-hover:bg-portfolio-highlight group-hover:text-portfolio-text">
                  {project.year}
                </span>
                
                {project.categories.map((category) => (
                  <span key={category} className="project-category-tag group-hover:project-category-tag-highlight">
                    {category}
                  </span>
                ))}
                
                {project.comingSoon && (
                  <span className="project-coming-soon-tag">
                    COMING SOOOOOON
                  </span>
                )}
                
                {project.awardWinning && (
                  <div className="relative inline-block">
                    <AwardIcon />
                  </div>
                )}
                
                {/* Emojis que aparecen al hacer hover */}
                {hoveredProject === project.name && project.emojis && (
                  <div className="flex ml-4 animate-fade-in">
                    {project.emojis.map((emoji, index) => (
                      <span 
                        key={index} 
                        className="text-2xl mx-1 animate-bounce" 
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {emoji}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
