import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
    name: "SABOR DE BARRIO",
    year: "2024",
    categories: ["INTEGRATED"],
    comingSoon: true,
    emojis: ["🍴", "🍷", "🍽️", "🍴", "🍷"]
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
  { 
    name: "FESTIVAL SEASON", 
    year: "2025", 
    categories: ["CONTENT CREATION"], 
    comingSoon: true,
    emojis: ["🥰", "✨", "🌟"]
  },
  { 
    name: "LOLLA VIBES", 
    year: "2025", 
    categories: ["IMMERSIVE"], 
    comingSoon: true,
    emojis: ["🥰", "✨", "🌟"]
  },
];

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const projectsRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    // Verificar si venimos de una página de proyecto
    if (location.state?.fromProject) {
      setShouldScroll(true);
    }
  }, [location]);

  useEffect(() => {
    // Efecto separado para manejar el scroll
    if (shouldScroll && projectsRef.current) {
      const projectsSection = projectsRef.current;
      const offset = projectsSection.offsetTop - 100;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
      setShouldScroll(false);
    }
  }, [shouldScroll]);

  const handleProjectClick = (projectName: string) => {
    const projectId = projectName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/project/${projectId}`, { 
      state: { fromProject: true },
      replace: true // Usar replace para evitar entradas en el historial
    });
  };

  return (
    <div className="max-w-[90%] mx-auto px-4 py-0 font-sans">
      <div className="flex items-center mb-8">
        <h2 className="text-xl uppercase font-bold text-portfolio-text mr-2">Selected Projects</h2>
        <span>💎</span>
      </div>

      <div ref={projectsRef} className="space-y-8">
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
              <div className="sm:hidden text-lg font-bold text-portfolio-text whitespace-nowrap overflow-hidden text-ellipsis flex-1">
                {project.name}
              </div>
              <div className="hidden sm:block text-4xl font-bold text-portfolio-text group-hover:text-portfolio-highlight whitespace-nowrap">
                {project.name}
              </div>

              <div className="flex items-center gap-1 sm:gap-2 ml-2 sm:ml-4 whitespace-nowrap">
                <div className="hidden sm:flex items-center gap-2">
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
                </div>

                <div className="sm:hidden flex items-center gap-1">
                  {project.categories.map((category) => (
                    <span key={category} className="text-[10px] project-coming-soon-tag">
                      {category}
                    </span>
                  ))}
                </div>

                {project.awardWinning && (
                  <div className="relative inline-block hidden sm:block">
                  </div>
                )}
                
                {hoveredProject === project.name && project.emojis && (
                  <div className="hidden sm:flex ml-4 animate-fade-in overflow-hidden">
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
