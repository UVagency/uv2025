import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import projectsData from "../data/projectsData";

interface Project {
  name: string;
  year: string;
  categories: string[];
  comingSoon?: boolean;
  awardWinning?: boolean;
  bannerImage?: string;
}

// Función para obtener la imagen banner de un proyecto
const getBannerImage = (projectName: string): string | undefined => {
  const projectId = projectName.toLowerCase().replace(/\s+/g, '-');
  const projectData = projectsData[projectId];
  
  if (projectData?.gallery?.sections) {
    const bannerSection = projectData.gallery.sections.find(
      (section) => section.type === 'banner'
    );
    if (bannerSection && bannerSection.type === 'banner') {
      return bannerSection.image;
    }
  }
  
  return undefined;
};

const projects: Project[] = [
  {
    name: "EXPOMASCOTAS",
    year: "INABA CHURU",
    categories: ["INTEGRATED"],
    comingSoon: false,
    bannerImage: getBannerImage("EXPOMASCOTAS"),
  },
  {
    name: "SABOR DE BARRIO",
    year: "DELICIOSA",
    categories: ["INTEGRATED"],
    comingSoon: false,
    bannerImage: getBannerImage("SABOR DE BARRIO"),
  },
  { 
    name: "WE MAKE YOUR DAY", 
    year: "KRISPY KREME", 
    categories: ["INTEGRATED"], 
    comingSoon: false,
    bannerImage: getBannerImage("WE MAKE YOUR DAY"),
  },
  { 
    name: "URBAN BEAT", 
    year: "BALL CORPORATION", 
    categories: ["INTEGRATED"],
    comingSoon: false,
    bannerImage: getBannerImage("URBAN BEAT"),
  },
  { 
    name: "ENJOY THE UNEXPECTED", 
    year: "HEINEKEN", 
    categories: ["PROMO"],
    comingSoon: false,
    bannerImage: getBannerImage("ENJOY THE UNEXPECTED"),
  },
  { 
    name: "A GREAT FIRST DAY", 
    year: "MATTEL", 
    categories: ["PROMO"],
    comingSoon: false,
    bannerImage: getBannerImage("A GREAT FIRST DAY"),
  },
  { 
    name: "TURN UP THE VOLUME", 
    year: "MAYBELLINE NEW YORK", 
    categories: ["OMNICHANNEL"],
    comingSoon: false,
    bannerImage: getBannerImage("TURN UP THE VOLUME"),
  },
  { 
    name: "FLY YOUR WAY", 
    year: "JETSMART", 
    categories: ["MEDIA"], 
    comingSoon: false,
    awardWinning: true,
    bannerImage: getBannerImage("FLY YOUR WAY"),
  },
  /*{ 
    name: "I FEEL UNIQUE", 
    year: "L'ORÉAL PARIS", 
    categories: ["FILM"], 
    comingSoon: true,
  },*/
  /*{ 
    name: "FESTIVAL SEASON", 
    year: "TIENDAS PARIS", 
    categories: ["CONTENT CREATION"], 
    comingSoon: true,
  },
  { 
    name: "LOLLA VIBES", 
    year: "SOUNDCORE BY ANKER", 
    categories: ["IMMERSIVE"], 
    comingSoon: true,
  },*/
];

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const location = useLocation();
  const projectsRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

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

  // Efecto para rastrear la posición del mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (hoveredProject) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredProject]);

  const handleProjectClick = (projectName: string) => {
    const project = projects.find(p => p.name === projectName);
    if (project?.comingSoon) {
      return; // No navegar si el proyecto está en coming soon
    }
    
    const projectId = projectName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/project/${projectId}`, { 
      state: { fromProject: true },
      replace: true // Usar replace para evitar entradas en el historial
    });
  };

  // Obtener la imagen del proyecto en hover
  const hoveredProjectData = hoveredProject 
    ? projects.find(p => p.name === hoveredProject)
    : null;

  return (
    <div className="max-w-[90%] mx-auto px-4 py-0">
      <div className="flex items-center mb-0">
        <h2 className="text-xl uppercase font-bold text-portfolio-text mr-2">Selected Projects</h2>
        <span>💎</span>
      </div>

      <div ref={projectsRef} className="space-y-0 py-8">
        {projects.map((project, index) => (
          <React.Fragment key={project.name}>
            {index !== 0 && <div className="portfolio-divider"></div>}
            <div 
              className={`project-item group ${project.comingSoon ? 'cursor-default' : 'cursor-pointer'}`}
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.name)}
            >
              <div className="flex items-center overflow-hidden">
                <div className="sm:hidden text-lg font-bold text-portfolio-text whitespace-nowrap overflow-hidden text-ellipsis flex-1">
                  {project.name}
                </div>
                <div className="hidden sm:block text-5xl font-bold text-portfolio-text group-hover:text-portfolio-highlight whitespace-nowrap">
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
                        COMING SOOOOON
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
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Imagen banner que sigue el cursor */}
      {hoveredProjectData?.bannerImage && (
        <div
          ref={previewRef}
          className="fixed pointer-events-none z-50"
          style={{
            left: `${mousePosition.x + 30}px`,
            top: `${mousePosition.y - 125}px`,
            opacity: hoveredProject ? 1 : 0,
            transition: 'opacity 0.3s ease-out',
          }}
        >
          <div 
            className="relative overflow-hidden rounded-xl shadow-2xl"
            style={{
              width: '450px',
              height: '280px',
              backgroundColor: '#000',
              animation: 'scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <img
              src={hoveredProjectData.bannerImage}
              alt={`${hoveredProjectData.name} banner`}
              className="w-full h-full object-cover"
              style={{
                filter: 'brightness(0.95)',
              }}
            />
            {/* Borde con gradiente turquesa */}
            <div 
              className="absolute inset-0 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, transparent 0%, rgba(107, 216, 215, 0.3) 50%, transparent 100%)',
                border: '2px solid',
                borderColor: '#6BD8D7',
                boxShadow: '0 0 20px rgba(107, 216, 215, 0.4)',
              }}
            />
            {/* Efecto de brillo en la esquina */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(107, 216, 215, 0.2) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.85) rotate(-2deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        @media (max-width: 768px) {
          .fixed.pointer-events-none {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;