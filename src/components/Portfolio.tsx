import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { projectsList } from "../data/projectsList";

interface Project {
  name: string;
  year: string;
  categories: string[];
  comingSoon?: boolean;
  awardWinning?: boolean;
  images?: string[];
}

// Map external projectsList to component structure if needed, or use directly
const getProject = (name: string) => projectsList.find(p => p.name.toUpperCase() === name.toUpperCase());

// Define the order as per original file
const orderedNames = [
  "SABOR DE BARRIO",
  "WE MAKE YOUR DAY",
  "URBAN BEAT",
  "ENJOY THE UNEXPECTED",
  "A GREAT FIRST DAY",
  "TURN UP THE VOLUME",
  "FLY YOUR WAY"
];

const projects: Project[] = orderedNames.map(name => {
  const p = getProject(name);
  if (!p) return null;
  return {
    name: p.name,
    year: p.year,
    categories: p.categories,
    comingSoon: p.comingSoon,
    awardWinning: p.awardWinning,
    images: p.images
  };
}).filter(Boolean) as Project[];

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
