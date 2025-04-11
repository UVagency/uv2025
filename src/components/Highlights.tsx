import { useNavigate } from "react-router-dom";
import projectsData, { ProjectData } from "../data/projectsData";
import { highlightIds } from "../data/highlightsConfig";

// Seleccionar los proyectos destacados del projectsData
const highlightedProjects = highlightIds.map(id => projectsData[id]);

const Highlights = () => {
  const navigate = useNavigate();
  
  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="max-w-[90%] mx-auto px-4 mb-12 md:mb-24 font-sans">
      <div className="flex items-center mb-8">
        <h2 className="text-xl uppercase font-bold text-portfolio-text mr-2">Highlights</h2>
        <span>📌</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {highlightedProjects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => handleProjectClick(project.id)}
            className="cursor-pointer group"
          >
            <div className="relative w-full overflow-hidden rounded-md mb-4">
              <img 
                src={project.thumbnails[0]} 
                alt={project.name}
                className="w-full object-contain" 
              />
            </div>
            
            <div className="flex flex-col items-start">
              <h3 className="text-5xl font-bold text-portfolio-text mr-2 group-hover:text-portfolio-highlight">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2 items-center mt-2">
                <span className="project-year-tag group-hover:project-year-tag-highlight">
                  {project.year}
                </span>
                {project.categories.map((category) => (
                  <span key={category} className="project-category-tag group-hover:project-category-tag-highlight">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
