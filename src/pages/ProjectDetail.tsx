import { useParams } from "react-router-dom";
import ProjectHeader from "../components/project/ProjectHeader";
import ProjectGallery from "../components/project/ProjectGallery";
import ProjectVideoPlayer from "../components/project/ProjectVideoPlayer";
import ProjectNotFound from "../components/project/ProjectNotFound";
import projectsData, { ProjectData, GallerySection } from "../data/projectsData";
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
  
  const project = projectId ? projectsData[projectId.toLowerCase()] : undefined;
  
  if (!project) {
    return <ProjectNotFound />;
  }

  const carouselSpeed = project.carouselSpeed;

  const getSectionContent = (type: 'execution' | 'results') => {
    if (!project.gallery?.sections) return '';
    
    const section = project.gallery.sections.find(s => 
      s.type === 'textSection' && 
      'content' in s &&
      s.content.toLowerCase().includes(type)
    );
    
    return section && 'content' in section ? section.content : '';
  };

  return (
    <div className="fixed inset-0 z-50 bg-portfolio-bg overflow-y-auto">
      <div className="w-full mx-auto pt-8 pb-16">
        <ProjectHeader project={project} />
        <div className="max-w-[90%] mx-auto">
          <ProjectVideoPlayer project={project} />

          {project.gallery && (
            <div className="mb-12">
              {/* Overview */}
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-portfolio-text mb-4">Overview</h2>
                <div className="text-2xl text-portfolio-text/80 font-light whitespace-pre-line">
                  {project.fullDescription}
                </div>
              </div>

              {/* Execution Section */}
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-portfolio-text mb-4">Execution</h2>
                <div>{renderBullets(getSectionContent('execution'))}</div>
              </div>

              {/* Marketing Results Section */}
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-portfolio-text mb-4">Marketing Results</h2>
                <div>{renderBullets(getSectionContent('results'))}</div>
              </div>

              {/* Other sections (banners, image grids, etc) */}
              {project.gallery.sections
                .filter(section => section.type !== 'textSection')
                .map((section, index) => (
                  <div key={index}>
                    {section.type === 'banner' && (
                      <img 
                        src={section.image} 
                        alt={section.alt || ''} 
                        className="w-full mb-8"
                      />
                    )}
                    {section.type === 'imageGrid' && (
                      <div className={`grid grid-cols-${section.columns} gap-${section.gap || 4} mb-8`}>
                        {section.images.map((img, i) => (
                          <img 
                            key={i}
                            src={img.src} 
                            alt={img.alt} 
                            className="w-full"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          )}

          <ProjectGallery project={project} carouselSpeed={carouselSpeed} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;
