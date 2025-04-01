
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
        {/* Back button */}
        <Link to="/" className="inline-flex items-center text-portfolio-text hover:text-portfolio-highlight mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to Projects</span>
        </Link>
        
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
