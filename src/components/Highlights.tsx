import { useNavigate } from "react-router-dom";
import { projectsList } from "../data/projectsList";
import { highlightIds, highlightImages } from "../data/highlightsConfig";
import OptimizedImage from "@/components/ui/optimized-image";
import { InteractiveTilt } from "./ui/InteractiveTilt";

// Seleccionar los proyectos destacados del projectsList
const highlightedProjects = highlightIds.map(id => projectsList.find(p => p.id === id)).filter(Boolean);

const Highlights = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div id="highlights" className="max-w-[90%] mx-auto w-full mb-12 md:mb-24">
      <div className="flex items-center mb-8">
        <h2 className="text-xl uppercase font-bold text-portfolio-text mr-2">Highlights</h2>
        <span>📌</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {highlightedProjects.map((project, index) => {
          // Usar la imagen configurada para este proyecto, o fallback a la generada automáticamente
          const coverImg = highlightImages[project.id] || `/images/projects/${project.id}/${project.id.toLowerCase().replace(/ /g, "")}_profile.webp`;
          // First 2 highlights may be partially visible above the fold
          const isAboveFold = index < 2;
          return (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="cursor-pointer group"
            >
              <InteractiveTilt className="rounded-xl overflow-hidden">
                <div
                  className="relative w-full overflow-hidden rounded-md mb-4 shadow-sm"
                  style={{
                    WebkitBoxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <OptimizedImage
                    src={coverImg}
                    alt={project.name}
                    className="w-full"
                    fit="cover"
                    aspectRatio={3/2}
                    sizes="(max-width: 768px) 92vw, 45vw"
                    srcSetWidths={[350, 500, 600, 700, 800, 900, 1200]}
                    priority={isAboveFold}
                  />
                </div>

                <div className="flex flex-col items-start">
                  <h3 className="font-headline text-5xl font-bold text-portfolio-text mr-2 group-hover:text-portfolio-highlight">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 items-center mt-2">
                    <span className="font-subtitle project-year-tag group-hover:project-year-tag-highlight">
                      {project.year}
                    </span>
                    {project.categories.map((category) => (
                      <span key={category} className="font-subtitle project-category-tag group-hover:project-category-tag-highlight">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </InteractiveTilt>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Highlights;
