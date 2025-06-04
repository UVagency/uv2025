import { useParams } from "react-router-dom";
import ProjectHeader from "../components/project/ProjectHeader";
/*import ProjectGallery from "../components/project/ProjectGallery";*/
import ProjectVideoPlayer from "../components/project/ProjectVideoPlayer";
import ProjectNotFound from "../components/project/ProjectNotFound";
import projectsData, { ProjectData, GallerySection } from "../data/projectsData";
import Footer from "../components/Footer";
import { SEO } from "../components/SEO";

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
  const publishDate = new Date(project.year).toISOString();

  // Keywords in both languages
  const keywords = {
    en: [
      'Project',
      'Case Study',
      'Media Experience',
      project.client,
      project.year,
      ...project.categories || []
    ],
    es: [
      'Proyecto',
      'Caso de Estudio',
      'Experiencia Mediática',
      project.client,
      project.year,
      ...project.categories || []
    ]
  };

  return (
    <div className="fixed inset-0 z-50 bg-portfolio-bg overflow-y-auto">
      <SEO 
        project={{
          name: project.name,
          client: project.client,
          year: project.year
        }}
        description={project.description}
        image={project.images[0]}
        url={`/project/${projectId}`}
        type="article"
        pageType="project"
        publishDate={publishDate}
        keywords={keywords.en} // Default to English for now
        lang="en" // Default to English for now
      />
      <div className="w-full mx-auto pt-8 pb-16">
        <ProjectHeader project={project} />
        <div className="max-w-[90%] mx-auto">
          {/* 1. Video */}
          <div className="rounded-[5px] overflow-hidden">
            <ProjectVideoPlayer project={project} />
          </div>

          {/* 2. Main Images */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {project.images.slice(0, 3).map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${project.name} - Image ${index + 1}`}
                className="w-full aspect-[16/9] object-cover rounded-[5px]"
              />
            ))}
          </div>

          {/* 3. Slider (comentado por ahora) */}
          {/* <ProjectGallery project={project} carouselSpeed={carouselSpeed} /> */}

          {project.gallery && (
            <div className="mb-12">
              {/* 4. Quote */}
              <div className="mb-12 text-2xl text-portfolio-text/80 font-light italic">
                {project.gallery.featureText}
              </div>

              {/* 5. Overview */}
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-portfolio-text mb-4">Overview</h2>
                <div>{renderBullets(project.overview)}</div>
              </div>

              {/* 6. Execution */}
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-portfolio-text mb-4">Execution</h2>
                <div>{renderBullets(project.execution)}</div>
              </div>

              {/* 7. Marketing Results */}
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-portfolio-text mb-4">Marketing Results</h2>
                <div>{renderBullets(project.marketingResults)}</div>
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
                        className="w-full mb-8 rounded-[5px]"
                      />
                    )}
                    {section.type === 'imageGrid' && (
                      <div className={`grid grid-cols-${section.columns} gap-${section.gap || 4} mb-8`}>
                        {section.images.map((img, i) => (
                          <img 
                            key={i}
                            src={img.src} 
                            alt={img.alt} 
                            className="w-full rounded-[5px]"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;
