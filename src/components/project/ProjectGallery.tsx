
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
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project }) => {
  // Placeholder images para usar como demostración
  const placeholders = [
    ...project.images,
    "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=800", 
    "https://images.unsplash.com/photo-1507290439931-a861b5a38200?q=80&w=800",
    "https://images.unsplash.com/photo-1608501078713-8e445a709b39?q=80&w=800",
    "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=800",
    "/lovable-uploads/34e302e2-f607-4404-8b61-61850043a158.png" // La imagen de referencia
  ];

  return (
    <div className="mb-16">
      {/* Carousel de imágenes como en la referencia - con movimiento continuo */}
      <ProjectImageCarousel images={placeholders} projectName={project.name} />

      {/* Texto destacado con el estilo exacto de la referencia */}
      <ProjectFeatureText>
        <span className="font-normal">Adding a punch of spicy vibes to <em className="not-italic font-normal">five short spots</em> for <em className="not-italic font-semibold">Doritos USA</em>,</span> we crafted five
        wacky cutout collages to represent each unique flavor.
      </ProjectFeatureText>

      {/* Banner principal - imagen destacada a todo lo ancho */}
      <div className="mb-6">
        <ProjectBanner 
          image={placeholders[0]} 
          alt={`${project.name} - Banner`}
          badge={{ text: "NEXT FRIDAY" }}
        />
      </div>

      {/* Fila de miniaturas - 4 imágenes en fila */}
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

      {/* Banner secundario - imagen grande */}
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

      {/* Texto explicativo secundario */}
      <ProjectTextSection>
        An iconic {project.categories[0].toLowerCase()} deserves an iconic graphics package. Drawing inspiration from {project.emojis ? project.emojis.join(' and ') : 'various elements'}, we designed a graphic language featuring bold colors, halftone patterns, and sleek vector-style neon looks.
      </ProjectTextSection>

      {/* Grid variado de imágenes */}
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

      {/* Fila final de imágenes - 3 imágenes en fila */}
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
};

export default ProjectGallery;
