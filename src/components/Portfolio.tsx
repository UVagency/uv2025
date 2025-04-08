import { useState } from "react";
import { DiamondIcon } from "./DiamondIcon";
import { AwardIcon } from "./AwardIcon";
import { useNavigate } from "react-router-dom";

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
    comingSoon: true,
    emojis: ["🏙️", "🎧", "🎵", "🎤", "🥁"]
  },
  { 
    name: "ENJOY THE UNEXPECTED", 
    year: "2023", 
    categories: ["PROMO"],
    comingSoon: true,
    emojis: ["🎲", "🎯", "🎪", "🎭", "✨"]
  },
  { 
    name: "A GREAT FIRST DAY", 
    year: "2023", 
    categories: ["PROMO"],
    comingSoon: true,
    emojis: ["🌅", "🚀", "📝", "🌱", "🎯"]
  },
  { 
    name: "TURN UP THE VOLUME", 
    year: "2023", 
    categories: ["LAUNCH"],
    comingSoon: true,
    emojis: ["🔊", "📢", "🎸", "🎺", "🔥"]
  },
  { 
    name: "FLY YOUR WAY", 
    year: "2022", 
    categories: ["MEDIA"], 
    comingSoon: true,
    awardWinning: true,
    emojis: ["✈️", "🛫", "🌍", "☁️", "🧳"]
  },
  { 
    name: "I FEEL UNIQUE", 
    year: "2013", 
    categories: ["FILM"], 
    comingSoon: true,
    emojis: ["🥰", "✨", "🌟"]
  },
];

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleProjectClick = (projectName: string) => {
    // Convertir el nombre del proyecto a un formato de URL adecuado
    const projectId = projectName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/project/${projectId}`);
  };

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
            onClick={() => handleProjectClick(project.name)}
          >
            <div className="portfolio-divider"></div>
            <div className="flex items-center overflow-hidden">
              <div className="text-4xl font-bold text-portfolio-text group-hover:text-portfolio-highlight whitespace-nowrap">
                {project.name}
              </div>
              <div className="flex items-center gap-2 ml-4 whitespace-nowrap">
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
                
                {hoveredProject === project.name && project.emojis && (
                  <div className="flex ml-4 animate-fade-in overflow-hidden">
                    {project.emojis.map((emoji, index) => (
                      <span 
                        key={index} 
                        className="text-4xl mx-1 animate-float" 
                        style={{ 
                          animationDelay: `${index * 0.15}s`,
                          animationDuration: '2s'
                        }}
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
