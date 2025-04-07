
import React from 'react';
import { ProjectData } from '@/data/projectsData';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectGalleryProps {
  project: ProjectData;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project }) => {
  // Placeholder images para usar como demostración
  const placeholders = [
    ...project.images,
    "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=800", // adicionales para tener más variedad
    "https://images.unsplash.com/photo-1507290439931-a861b5a38200?q=80&w=800",
    "https://images.unsplash.com/photo-1608501078713-8e445a709b39?q=80&w=800",
    "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=800",
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800",
    "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?q=80&w=800",
    "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=800"
  ];

  return (
    <div className="mb-16">
      {/* Banner principal - imagen destacada a todo lo ancho */}
      <div className="mb-6 overflow-hidden rounded-lg">
        <AspectRatio ratio={21/9}>
          <img 
            src={placeholders[0]} 
            alt={`${project.name} - Banner`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-portfolio-highlight text-portfolio-text px-4 py-1 text-sm font-bold">
            NEXT FRIDAY
          </div>
        </AspectRatio>
      </div>

      {/* Texto destacado - similar a la descripción en la referencia */}
      <div className="text-4xl mb-8 text-portfolio-text/90 font-light leading-tight">
        A full graphics package for a {project.categories[0].toLowerCase()} about {project.client}.
      </div>

      {/* Fila de miniaturas - 4 imágenes en fila */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[1, 2, 3, 4].map((index) => (
          <div key={`row1-${index}`} className="overflow-hidden rounded-md">
            <AspectRatio ratio={16/9}>
              <img 
                src={placeholders[index % placeholders.length]} 
                alt={`${project.name} - Thumbnail ${index}`}
                className="w-full h-full object-cover"
              />
              {index === 2 && (
                <div className="absolute bottom-2 right-2 bg-portfolio-highlight text-portfolio-text px-2 py-1 text-xs">
                  next episode
                </div>
              )}
            </AspectRatio>
          </div>
        ))}
      </div>

      {/* Banner secundario - imagen grande */}
      <div className="mb-8 overflow-hidden rounded-lg">
        <AspectRatio ratio={16/9}>
          <img 
            src={placeholders[2]} 
            alt={`${project.name} - Main Feature`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-1">{project.name}</h2>
              <p className="text-white text-lg">GRAPHIC PACKAGE</p>
            </div>
          </div>
        </AspectRatio>
      </div>

      {/* Texto explicativo secundario */}
      <div className="text-3xl mb-8 text-portfolio-text/80 font-light">
        An iconic {project.categories[0].toLowerCase()} deserves an iconic graphics package. Drawing inspiration from {project.emojis ? project.emojis.join(' and ') : 'various elements'}, we designed a graphic language featuring bold colors, halftone patterns, and sleek vector-style neon looks.
      </div>

      {/* Grid variado de imágenes - como en el moodboard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 mb-8">
        {/* Imagen columna izquierda */}
        <div className="lg:col-span-4 overflow-hidden rounded-md">
          <AspectRatio ratio={9/16}>
            <img 
              src={placeholders[3]} 
              alt={`${project.name} - Portrait 1`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-portfolio-highlight text-portfolio-text px-2 py-1 text-xs">
              How to get this
            </div>
          </AspectRatio>
        </div>

        {/* Grid de 2x4 en el centro y derecha */}
        <div className="lg:col-span-8 grid grid-cols-2 grid-rows-2 sm:grid-rows-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div key={`grid-${index}`} className="overflow-hidden rounded-md">
              <AspectRatio ratio={index % 3 === 0 ? 16/9 : 1}>
                <img 
                  src={placeholders[(index + 4) % placeholders.length]} 
                  alt={`${project.name} - Grid ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {index === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-portfolio-highlight">DIVA</span>
                  </div>
                )}
                {index === 4 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-4 gap-1">
                      {['A','B','C','D','E','F','G','H','N','E','X','T'].map((letter, i) => (
                        <span key={i} className="bg-portfolio-tag-bg text-white w-6 h-6 flex items-center justify-center text-xs">
                          {letter}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {index === 6 && (
                  <div className="absolute bottom-2 left-2 bg-portfolio-highlight text-portfolio-text px-2 py-1 text-xs">
                    ON GUEST
                  </div>
                )}
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>

      {/* Fila final de imágenes - 3 imágenes en fila */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[1, 2, 3].map((index) => (
          <div key={`final-${index}`} className="overflow-hidden rounded-md">
            <AspectRatio ratio={16/9}>
              <img 
                src={placeholders[(index + 7) % placeholders.length]} 
                alt={`${project.name} - Final ${index}`}
                className="w-full h-full object-cover"
              />
              {index === 0 && (
                <div className="absolute bottom-3 right-3 bg-portfolio-highlight text-portfolio-text px-3 py-1">
                  TONIGHT
                </div>
              )}
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
