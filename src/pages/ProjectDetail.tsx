import { useParams } from "react-router-dom";
import ProjectHeader from "../components/project/ProjectHeader";
import ProjectGallery from "../components/project/ProjectGallery";
import ProjectVideoPlayer from "../components/project/ProjectVideoPlayer";
import ProjectVideoLink from "../components/project/ProjectVideoLink";
import ProjectNotFound from "../components/project/ProjectNotFound";
import projectsData from "../data/projectsData";
import Footer from "../components/Footer";

function renderBullets(text: string) {
  const lines = text.split(/\r?\n/);
  const items: string[] = [];
  const blocks: (string | JSX.Element)[] = [];
  let buffer: string[] = [];

  lines.forEach((line, idx) => {
    if (/^[-*]\s+/.test(line)) {
      items.push(line.replace(/^[-*]\s+/, ""));
    } else {
      if (items.length) {
        blocks.push(
          <ul className="list-disc pl-8 mb-4 text-2xl text-portfolio-text/80 font-light" key={idx + '-ul'}>
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
        items.length = 0;
      }
      if (line.trim() !== "") buffer.push(line);
      else if (buffer.length) {
        blocks.push(
          <p className="mb-2 text-2xl text-portfolio-text/80 font-light" key={idx + '-p'}>{buffer.join(" ")}</p>
        );
        buffer = [];
      }
    }
  });
  if (items.length) {
    blocks.push(
      <ul className="list-disc pl-8 mb-4 text-2xl text-portfolio-text/80 font-light">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    );
  }
  if (buffer.length) {
    blocks.push(
      <p className="mb-2 text-2xl text-portfolio-text/80 font-light">{buffer.join(" ")}</p>
    );
  }
  return blocks;
}

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  // Buscar el proyecto por ID
  const project = projectId ? projectsData[projectId.toLowerCase()] : undefined;
  
  if (!project) {
    return <ProjectNotFound />;
  }

  // Use the project's carousel speed or a default based on project name
  const carouselSpeed = project.carouselSpeed || 
                       (project.name === "MERGUI" ? 50 : 
                       project.name === "ENJOY THE UNEXPECTED" ? 5 : 30);

  return (
    <div className="fixed inset-0 z-50 bg-portfolio-bg overflow-y-auto">
      <div className="w-full mx-auto pt-8 pb-16">
        <ProjectHeader project={project} />
        <div className="max-w-[90%] mx-auto">
          <ProjectVideoPlayer project={project} />

          {/* Secciones de texto personalizadas desde el JSON */}
          {project.gallery && (
            <div className="mb-12">
              {/* Challenge */}
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-portfolio-text mb-4">Challenge</h2>
                <div className="text-2xl text-portfolio-text/80 font-light whitespace-pre-line">
                  {project.fullDescription}
                </div>
              </div>
              {/* Execution */}
              {project.gallery.sections.find(s => s.type === 'textSection' && !s.content.toLowerCase().includes('marketing results')) && (
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-portfolio-text mb-4">Execution</h2>
                  <div>
                    {renderBullets((project.gallery.sections.find(s => s.type === 'textSection' && !s.content.toLowerCase().includes('marketing results')) as any).content)}
                  </div>
                </div>
              )}
              {/* Marketing Results */}
              {project.gallery.sections.find(s => s.type === 'textSection' && s.content.toLowerCase().includes('marketing results')) && (
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-portfolio-text mb-4">Marketing Results</h2>
                  <div>
                    {renderBullets((project.gallery.sections.find(s => s.type === 'textSection' && s.content.toLowerCase().includes('marketing results')) as any).content)}
                  </div>
                </div>
              )}
            </div>
          )}

          <ProjectGallery project={project} carouselSpeed={carouselSpeed} />
          <ProjectVideoLink show={project.name === "MERGUI"} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;
