
import { useParams } from "react-router-dom";
import ProjectHeader from "../components/project/ProjectHeader";
import ProjectGallery from "../components/project/ProjectGallery";
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

  return (
    <div className="fixed inset-0 z-50 bg-portfolio-bg overflow-y-auto">
      <div className="w-full mx-auto pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <ProjectHeader project={project} />
        <ProjectGallery project={project} />
        <ProjectVideoLink show={project.name === "MERGUI"} />
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;
