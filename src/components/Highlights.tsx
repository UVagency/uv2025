import { useNavigate } from "react-router-dom";
import projectsData, { ProjectData } from "../data/projectsData";
import { highlightIds } from "../data/highlightsConfig";
import OptimizedImage from "@/components/ui/optimized-image";

// Seleccionar los proyectos destacados del projectsData
const highlightedProjects = highlightIds.map(id => projectsData[id]);

const Highlights = () => {
  const navigate = useNavigate();
  
  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div id="highlights" className="max-w-[90%] mx-auto px-4 mb-12 md:mb-24 font-sans">
      <div className="flex items-center mb-8">
        <h2 className="text-xl uppercase font-bold text-portfolio-text mr-2">Highlights</h2>
        <span>📌</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {highlightedProjects.map((project) => {
          // Generar el path de la imagen de portada
          const clientSlug = project.id?.toLowerCase().replace(/ /g, "");
          const coverImg = `/projects/${project.id}/${clientSlug}_profile.png`;
          return (
            <div 
              key={project.id} 
              onClick={() => handleProjectClick(project.id)}
              className="cursor-pointer group"
            >
              <div className="relative w-full overflow-hidden rounded-md mb-4">
                <OptimizedImage
                  src={coverImg}
                  alt={project.name}
                  className="w-full object-contain"
                  wrapperClassName=""
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Highlights;
