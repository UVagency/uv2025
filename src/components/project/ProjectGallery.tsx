import React from 'react';
import { ProjectData } from '@/data/projectsData';
import ProjectImageCarousel from './gallery/ProjectImageCarousel';
import ProjectFeatureText from './gallery/ProjectFeatureText';
import ProjectBanner from './gallery/ProjectBanner';
import ProjectImageGrid from './gallery/ProjectImageGrid';
import ProjectTextSection from './gallery/ProjectTextSection';
import { ImageItem } from '@/types/gallery';
import { trackEvent, GA_EVENTS, GA_PARAMS } from '@/lib/analytics';

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

  const handleProjectClick = () => {
    trackEvent('PROJECT_CLICK', {
      [GA_PARAMS.PROJECT_ID]: project.id,
      [GA_PARAMS.PROJECT_NAME]: project.name
    });
  };

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
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ProjectGallery;
