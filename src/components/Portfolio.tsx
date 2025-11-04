import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import projectsData from "../data/projectsData";

interface Project {
  name: string;
  year: string;
  categories: string[];
  comingSoon?: boolean;
  awardWinning?: boolean;
  images?: string[];
}

// Función para obtener todas las imágenes de un proyecto
const getAllProjectImages = (projectName: string): string[] => {
  const projectId = projectName.toLowerCase().replace(/\s+/g, '-');
  const projectData = projectsData[projectId];
  const images: string[] = [];
  
  if (!projectData) return images;
  
  // Agregar imágenes del array principal
  if (projectData.images) {
    images.push(...projectData.images);
  }
  
  // Agregar imágenes de las secciones de la galería
  if (projectData.gallery?.sections) {
    projectData.gallery.sections.forEach((section) => {
      if (section.type === 'banner') {
        images.push(section.image);
      } else if (section.type === 'imageGrid') {
        section.images.forEach((img) => images.push(img.src));
      } else if (section.type === 'mixedGrid') {
        images.push(section.portraitImage.src);
        section.gridImages.forEach((img) => images.push(img.src));
      }
    });
  }
  
  return images;
};

const projects: Project[] = [
  {
    name: "EXPOMASCOTAS",
    year: "INABA CHURU",
    categories: ["INTEGRATED"],
    comingSoon: false,
    images: getAllProjectImages("EXPOMASCOTAS"),
  },
  {
    name: "SABOR DE BARRIO",
    year: "DELICIOSA",
    categories: ["INTEGRATED"],
    comingSoon: false,
    images: getAllProjectImages("SABOR DE BARRIO"),
  },
  { 
    name: "WE MAKE YOUR DAY", 
    year: "KRISPY KREME", 
    categories: ["INTEGRATED"], 
    comingSoon: false,
    images: getAllProjectImages("WE MAKE YOUR DAY"),
  },
  { 
    name: "URBAN BEAT", 
    year: "BALL CORPORATION", 
    categories: ["INTEGRATED"],
    comingSoon: false,
    images: getAllProjectImages("URBAN BEAT"),
  },
  { 
    name: "ENJOY THE UNEXPECTED", 
    year: "HEINEKEN", 
    categories: ["PROMO"],
    comingSoon: false,
    images: getAllProjectImages("ENJOY THE UNEXPECTED"),
  },
  { 
    name: "A GREAT FIRST DAY", 
    year: "MATTEL", 
    categories: ["PROMO"],
    comingSoon: false,
    images: getAllProjectImages("A GREAT FIRST DAY"),
  },
  { 
    name: "TURN UP THE VOLUME", 
    year: "MAYBELLINE NEW YORK", 
    categories: ["OMNICHANNEL"],
    comingSoon: false,
    images: getAllProjectImages("TURN UP THE VOLUME"),
  },
  { 
    name: "FLY YOUR WAY", 
    year: "JETSMART", 
    categories: ["MEDIA"], 
    comingSoon: false,
    awardWinning: true,
    images: getAllProjectImages("FLY YOUR WAY"),
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

                {/* Thumbnails inline en hover - después de las categorías */}
                {project.images && project.images.length > 0 && hoveredProject === project.name && (
                  <div className="hidden lg:flex ml-4 gap-2 overflow-hidden flex-1">
                    {project.images.map((image, idx) => (
                      <div 
                        key={idx}
                        className="flex-shrink-0"
                        style={{
                          width: '80px',
                          height: '80px',
                        }}
                      >
                        <img
                          src={image}
                          alt={`${project.name} ${idx + 1}`}
                          loading="eager"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

    </div>
  );
};

export default Portfolio;
