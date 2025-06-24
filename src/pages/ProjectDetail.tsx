import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import ProjectHeader from "../components/project/ProjectHeader";
import ProjectNotFound from "../components/project/ProjectNotFound";
import projectsData, { ProjectData, GallerySection } from "../data/projectsData";
import Footer from "../components/Footer";
import { SEO } from "../components/SEO";
import { ProjectGallery, ProjectVideoPlayer } from "../components/lazy";

// Loading component for lazy-loaded sections
const SectionLoading = () => (
  <div className="animate-pulse">
    <div className="h-6 sm:h-8 bg-portfolio-text/10 rounded w-1/2 sm:w-1/3 mb-3 sm:mb-4"></div>
    <div className="space-y-2 sm:space-y-3">
      <div className="h-3 sm:h-4 bg-portfolio-text/10 rounded w-3/4"></div>
      <div className="h-3 sm:h-4 bg-portfolio-text/10 rounded w-5/6"></div>
      <div className="h-3 sm:h-4 bg-portfolio-text/10 rounded w-2/3"></div>
    </div>
  </div>
);

function renderBullets(text: string) {
  if (!text) return null;
  
  const lines = text.split(/\r?\n/);
  const items: string[] = [];
  const blocks: (string | JSX.Element)[] = [];
  let buffer: string[] = [];
  let blockKey = 0;

  lines.forEach((line) => {
    if (/^[-*]\s+/.test(line)) {
      items.push(line.replace(/^[-*]\s+/, ""));
    } else {
      if (items.length) {
        blocks.push(
          <ul className="list-disc pl-4 sm:pl-8 mb-3 sm:mb-4 text-lg sm:text-2xl text-portfolio-text/80 font-light" key={`ul-${blockKey++}`}>
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
        items.length = 0;
      }
      if (line.trim() !== "") buffer.push(line);
      else if (buffer.length) {
        blocks.push(
          <p className="mb-2 text-lg sm:text-2xl text-portfolio-text/80 font-light" key={`p-${blockKey++}`}>{buffer.join(" ")}</p>
        );
        buffer = [];
      }
    }
  });
  if (items.length) {
    blocks.push(
      <ul className="list-disc pl-4 sm:pl-8 mb-3 sm:mb-4 text-lg sm:text-2xl text-portfolio-text/80 font-light" key={`ul-${blockKey++}`}>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    );
  }
  if (buffer.length) {
    blocks.push(
      <p className="mb-2 text-lg sm:text-2xl text-portfolio-text/80 font-light" key={`p-${blockKey++}`}>{buffer.join(" ")}</p>
    );
  }
  return blocks;
}

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectId ? projectsData[projectId] : undefined;

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="min-h-screen bg-portfolio-bg">
      <SEO 
        title={`${project.name} | UV Agency`}
        description={project.description}
        pageType="project"
        project={{
          name: project.name,
          client: project.client,
          year: project.year
        }}
      />
      <div className="fixed inset-0 z-50 bg-portfolio-bg overflow-y-auto">
        <div className="w-full mx-auto pt-4 sm:pt-8 pb-8 sm:pb-16">
          <ProjectHeader project={project} />

          <div className="max-w-[95%] sm:max-w-[90%] mx-auto">
            {/* Video Section */}
            {project.videoUrl && (
              <Suspense fallback={<SectionLoading />}>
                <ProjectVideoPlayer project={project} />
              </Suspense>
            )}

            {/* Gallery Section */}
            {project.gallery && (
              <Suspense fallback={<SectionLoading />}>
                <ProjectGallery project={project} />
              </Suspense>
            )}

            {/* Overview */}
            {project.overview && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">Overview</h2>
                <div>{renderBullets(project.overview)}</div>
              </div>
            )}

            {/* Execution */}
            {project.execution && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">Execution</h2>
                <div>{renderBullets(project.execution)}</div>
              </div>
            )}

            {/* Marketing Results */}
            {project.marketingResults && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">Marketing Results</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.marketingResults.split('\n').map((line, index) => {
                    if (line.trim().startsWith('-')) {
                      const result = line.replace(/^-\s*/, '');
                      return (
                        <div key={index} className="border-2 border-portfolio-accent rounded-lg p-4 hover:border-portfolio-accent/80 transition-colors bg-portfolio-bg shadow-sm">
                          <p className="text-lg sm:text-xl text-portfolio-text/90 font-light">{result}</p>
                        </div>
                      );
                    }
                    return (
                      <p key={index} className="text-lg sm:text-2xl text-portfolio-text/80 font-light col-span-full mb-4">
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
