import React from 'react';
import { ProjectData } from '@/data/projectsData';
import ProjectImageCarousel from './gallery/ProjectImageCarousel';
import ProjectFeatureText from './gallery/ProjectFeatureText';
import ProjectBanner from './gallery/ProjectBanner';
import ProjectImageGrid from './gallery/ProjectImageGrid';
import ProjectTextSection from './gallery/ProjectTextSection';
import ProjectMixedGrid from './gallery/ProjectMixedGrid';

interface ProjectGalleryProps {
  project: ProjectData;
  carouselSpeed?: number;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project, carouselSpeed }) => {
  const effectiveCarouselSpeed = project.carouselSpeed || carouselSpeed || 30;
  
  const placeholders = [
    ...project.images,
    "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=800", 
    "https://images.unsplash.com/photo-1507290439931-a861b5a38200?q=80&w=800",
    "https://images.unsplash.com/photo-1608501078713-8e445a709b39?q=80&w=800",
    "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=800"
  ];

  if (!project.gallery) {
    return (
      <div className="mb-16">
        <ProjectImageCarousel 
          images={placeholders} 
          projectName={project.name} 
          carouselSpeed={effectiveCarouselSpeed}
        />

        <ProjectFeatureText>
          <span className="font-normal">Adding a punch of spicy vibes to <em className="not-italic font-normal">five short spots</em> for <em className="not-italic font-semibold">Doritos USA</em>,</span> we crafted five
          wacky cutout collages to represent each unique flavor.
        </ProjectFeatureText>

        <div className="mb-6">
          <ProjectBanner 
            image={placeholders[0]} 
            alt={`${project.name} - Banner`}
            badge={{ text: "NEXT FRIDAY" }}
          />
        </div>

        <div className="mb-8">
          <ProjectImageGrid 
            columns={4}
            images={[1, 2, 3, 4].map((index) => ({
              src: placeholders[index % placeholders.length],
              alt: `${project.name} - Thumbnail ${index}`,
              badge: index === 2 ? { text: "next episode", position: "bottom-right" } : undefined
            }))}
          />
        </div>

        <div className="mb-8">
          <ProjectBanner 
            image={placeholders[2]} 
            alt={`${project.name} - Main Feature`}
            ratio={16/9}
            badge={{ 
              text: "", 
              position: "center" 
            }}
          />
        </div>

        <ProjectTextSection>
          An iconic {project.categories[0].toLowerCase()} deserves an iconic graphics package. Drawing inspiration from {project.emojis ? project.emojis.join(' and ') : 'various elements'}, we designed a graphic language featuring bold colors, halftone patterns, and sleek vector-style neon looks.
        </ProjectTextSection>

        <ProjectMixedGrid 
          portraitImage={{
            src: placeholders[3],
            alt: `${project.name} - Portrait 1`,
            badge: { text: "How to get this", position: "bottom-left" }
          }}
          gridImages={[...Array(8)].map((_, index) => ({
            src: placeholders[(index + 4) % placeholders.length],
            alt: `${project.name} - Grid ${index + 1}`,
            ratio: index % 3 === 0 ? 16/9 : 1,
            overlay: index === 0 ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-portfolio-highlight">DIVA</span>
              </div>
            ) : index === 4 ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-1">
                  {['A','B','C','D','E','F','G','H','N','E','X','T'].map((letter, i) => (
                    <span key={i} className="bg-portfolio-tag-bg text-white w-6 h-6 flex items-center justify-center text-xs">
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            ) : index === 6 ? (
              <div className="absolute bottom-2 left-2 bg-portfolio-highlight text-portfolio-text px-2 py-1 text-xs">
                ON GUEST
              </div>
            ) : undefined
          }))}
        />

        <ProjectImageGrid 
          columns={3}
          images={[1, 2, 3].map((index) => ({
            src: placeholders[(index + 7) % placeholders.length],
            alt: `${project.name} - Final ${index}`,
            badge: index === 0 ? { text: "TONIGHT", position: "bottom-right" } : undefined
          }))}
        />
      </div>
    );
  }

  return (
    <div className="mb-16">
      <ProjectImageCarousel 
        images={project.images.length > 0 ? project.images : placeholders} 
        projectName={project.name} 
        carouselSpeed={effectiveCarouselSpeed}
      />

      <ProjectFeatureText
        author={project.gallery.featureTextAuthor}
        role={project.gallery.featureTextRole}
      >
        <div dangerouslySetInnerHTML={{ __html: project.gallery.featureText }} />
      </ProjectFeatureText>

      {project.gallery.sections.map((section, index) => {
        switch (section.type) {
          case 'banner':
            return (
              <div className="mb-6" key={index}>
                <ProjectBanner 
                  image={section.image} 
                  alt={`${project.name} - ${section.alt || 'Banner'}`}
                  ratio={section.ratio || 21/9}
                  badge={section.badge}
                />
              </div>
            );
          case 'textSection':
            return (
              <ProjectTextSection key={index} className={section.className}>
                {section.content}
              </ProjectTextSection>
            );
          case 'imageGrid':
            return (
              <div className="mb-8" key={index}>
                <ProjectImageGrid 
                  columns={section.columns || 4}
                  images={section.images}
                  gap={section.gap}
                  className={section.className}
                />
              </div>
            );
          case 'mixedGrid':
            return (
              <ProjectMixedGrid 
                key={index}
                portraitImage={section.portraitImage}
                gridImages={section.gridImages}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ProjectGallery;
