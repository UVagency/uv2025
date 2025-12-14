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

interface VisibleCategories {
  [key: string]: number; // proyecto -> número de categorías visibles
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

// Utility to calculate sum of gaps
const calculateGap = (count: number, gapSize: number) => Math.max(0, count - 1) * gapSize;

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const projectsRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState<VisibleCategories>({});
  const containerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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

  // Calcular cuántas categorías caben sin truncarse con ResizeObserver
  useEffect(() => {
    const observers: ResizeObserver[] = [];

    const calculateForProject = (projectName: string) => {
      const container = containerRefs.current[projectName];
      if (!container) return;

      const title = container.querySelector('.project-title-ref') as HTMLElement;
      const shadowContainer = container.querySelector('.shadow-pills-container') as HTMLElement;
      const thumbnails = container.querySelector('.project-thumbnails-ref') as HTMLElement;

      if (!title || !shadowContainer) return;

      // Medir anchos base
      const parentWidth = container.clientWidth;
      const titleWidth = title.offsetWidth;
      const thumbnailsWidth = thumbnails ? thumbnails.offsetWidth : 0;

      // Margen de seguridad y gaps entre título y pills (aprox 60px para estar seguros: gap, margin, padding)
      const safetyMargin = 60;

      const availableWidth = parentWidth - titleWidth - thumbnailsWidth - safetyMargin;

      // Obtener anchos de los items desde el shadow container
      const items = Array.from(shadowContainer.children) as HTMLElement[];
      const yearTag = items[0]; // El primer item es siempre el año

      if (!yearTag) return;

      let usedWidth = yearTag.offsetWidth;
      const gap = 8; // gap-2 = 8px
      let visibleCount = 0;

      // Items de categorías empiezan en índice 1 (0 es año)
      // La lista de categorías en 'projects' no incluye el año, pero el shadow container sí.
      // projects[...].categories mapea a items[1...n]

      const categoryItems = items.slice(1); // Excluir año

      for (let i = 0; i < categoryItems.length; i++) {
        const itemWidth = categoryItems[i].offsetWidth;
        // Sumar gap antes del item si ya hay contenido (el año siempre está)
        const requiredWidth = usedWidth + gap + itemWidth;

        if (requiredWidth <= availableWidth) {
          usedWidth = requiredWidth;
          visibleCount++;
        } else {
          break;
        }
      }

      setVisibleCategories(prev => {
        if (prev[projectName] === visibleCount) return prev;
        return { ...prev, [projectName]: visibleCount };
      });
    };

    // Crear Observer para cada fila de proyecto
    projects.forEach(project => {
      const container = containerRefs.current[project.name];
      if (container) {
        const observer = new ResizeObserver(() => {
          // Usar requestAnimationFrame para evitar loops de resize limit
          requestAnimationFrame(() => calculateForProject(project.name));
        });
        observer.observe(container);
        observers.push(observer);

        // Ejecución inicial
        calculateForProject(project.name);
      }
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, [projects, hoveredProject]);

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
              ref={(el) => (containerRefs.current[project.name] = el)}
              className={`project-item group ${project.comingSoon ? 'cursor-default' : 'cursor-pointer'}`}
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.name)}
            >
              <div className="flex items-center overflow-hidden">
                <div className="sm:hidden text-lg font-bold text-portfolio-text whitespace-nowrap overflow-hidden text-ellipsis flex-1">
                  {project.name}
                </div>
                <div className="hidden sm:block text-5xl font-bold text-portfolio-text group-hover:text-portfolio-highlight whitespace-nowrap flex-shrink-0 project-title-ref">
                  {project.name}
                </div>

                <div className="hidden sm:flex items-center gap-2 pills-container overflow-hidden min-w-0">
                  <span className="project-year-tag group-hover:project-year-tag-highlight group-hover:bg-portfolio-highlight group-hover:text-portfolio-text">
                    {project.year}
                  </span>

                  {project.categories.map((category, index) => {
                    const maxVisible = visibleCategories[project.name] ?? project.categories.length;
                    const isVisible = index < maxVisible;
                    return (
                      <span
                        key={category}
                        className={`project-category-tag category-pill group-hover:project-category-tag-highlight ${!isVisible ? 'hidden' : ''}`}
                      >
                        {category}
                      </span>
                    );
                  })}

                  {project.comingSoon && (
                    <span className="project-coming-soon-tag">
                      COMING SOOOOON
                    </span>
                  )}
                </div>

                {/* Shadow Container para calculos: Invisible y no afecta layout */}
                <div className="shadow-pills-container absolute top-0 left-0 invisible pointer-events-none flex items-center gap-2" aria-hidden="true" style={{ height: 0, overflow: 'hidden' }}>
                  <span className="project-year-tag font-bold whitespace-nowrap inline-block px-4 py-1 rounded-full border border-transparent">
                    {project.year}
                  </span>
                  {project.categories.map((category) => (
                    <span key={category} className="project-category-tag whitespace-nowrap inline-block px-4 py-1 rounded-full border">
                      {category}
                    </span>
                  ))}
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

                {/* Thumbnails inline en hover - después de las categorías */}
                {project.images && project.images.length > 0 && hoveredProject === project.name && (
                  <div className="hidden lg:flex ml-4 gap-2 overflow-hidden flex-1 project-thumbnails-ref">
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

    </div >
  );
};

export default Portfolio;
