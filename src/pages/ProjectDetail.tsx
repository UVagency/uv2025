
import { useParams } from "react-router-dom";
import ProjectHeader from "../components/project/ProjectHeader";
import ProjectGallery from "../components/project/ProjectGallery";
import ProjectVideoPlayer from "../components/project/ProjectVideoPlayer";
import ProjectVideoLink from "../components/project/ProjectVideoLink";
import ProjectNotFound from "../components/project/ProjectNotFound";
import projectsData from "../data/projectsData";
import Footer from "../components/Footer";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  // Buscar el proyecto por ID
  const project = projectId ? projectsData[projectId.toLowerCase()] : undefined;
  
  if (!project) {
    return <ProjectNotFound />;
  }

  // Set carousel speed based on project - for example, different speeds for different projects
  // You can modify this logic based on your requirements
  const carouselSpeed = project.name === "MERGUI" ? 50 : 
                       project.name === "ENJOY THE UNEXPECTED" ? 10 : 30;

  return (
    <div className="fixed inset-0 z-50 bg-portfolio-bg overflow-y-auto">
      <div className="w-full mx-auto pt-8 pb-16">
        <ProjectHeader project={project} />
        <div className="px-4 sm:px-6 lg:px-8">
          <ProjectVideoPlayer project={project} />
          <ProjectGallery project={project} carouselSpeed={carouselSpeed} />
          <ProjectVideoLink show={project.name === "MERGUI"} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;
