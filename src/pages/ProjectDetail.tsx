
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
    <div className="min-h-screen bg-portfolio-bg">
      <Navbar />
      
      <div className="max-w-[90%] mx-auto pt-8 pb-16">
        {/* Project components */}
        <ProjectHeader project={project} />
        <ProjectGallery project={project} />
        <ProjectVideoLink show={project.name === "MERGUI"} />
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
