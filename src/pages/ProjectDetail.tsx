
import { useParams } from "react-router-dom";
import ProjectHeader from "../components/project/ProjectHeader";
import ProjectGallery from "../components/project/ProjectGallery";
import ProjectVideoLink from "../components/project/ProjectVideoLink";
import ProjectNotFound from "../components/project/ProjectNotFound";
import projectsData from "../data/projectsData";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId && projectsData[projectId.toLowerCase()];
  
  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="fixed inset-0 z-50 bg-portfolio-bg overflow-y-auto">
      <div className="max-w-[90%] mx-auto pt-8 pb-16">
        <ProjectHeader project={project} />
        <ProjectGallery project={project} />
        <ProjectVideoLink show={project.name === "MERGUI"} />
      </div>
    </div>
  );
};

export default ProjectDetail;
