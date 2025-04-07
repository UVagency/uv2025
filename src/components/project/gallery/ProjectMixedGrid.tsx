
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GridItem {
  src: string;
  alt: string;
  ratio?: number;
  badge?: {
    text: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  };
  overlay?: React.ReactNode;
  colSpan?: number;
}

interface ProjectMixedGridProps {
  portraitImage: GridItem;
  gridImages: GridItem[];
}

const ProjectMixedGrid: React.FC<ProjectMixedGridProps> = ({ 
  portraitImage, 
  gridImages 
}) => {
  const getBadgePosition = (position?: string) => {
    switch(position) {
      case 'top-right': return 'top-3 right-3';
      case 'bottom-left': return 'bottom-3 left-3';
      case 'bottom-right': return 'bottom-3 right-3';
      case 'center': return 'inset-0 flex items-center justify-center';
      default: return 'top-3 left-3';
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 mb-8">
      {/* Imagen columna izquierda */}
      <div className="lg:col-span-4 overflow-hidden rounded-md">
        <AspectRatio ratio={portraitImage.ratio || 9/16}>
          <img 
            src={portraitImage.src} 
            alt={portraitImage.alt}
            className="w-full h-full object-cover"
          />
          {portraitImage.badge && (
            <div className={`absolute ${getBadgePosition(portraitImage.badge.position)} bg-portfolio-highlight text-portfolio-text px-2 py-1 text-xs`}>
              {portraitImage.badge.text}
            </div>
          )}
          {portraitImage.overlay}
        </AspectRatio>
      </div>

      {/* Grid de 2x4 en el centro y derecha */}
      <div className="lg:col-span-8 grid grid-cols-2 grid-rows-2 sm:grid-rows-4 gap-4">
        {gridImages.map((image, index) => (
          <div key={`grid-${index}`} className="overflow-hidden rounded-md">
            <AspectRatio ratio={image.ratio || (index % 3 === 0 ? 16/9 : 1)}>
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {image.badge && (
                <div className={`absolute ${getBadgePosition(image.badge.position)} bg-portfolio-highlight text-portfolio-text px-2 py-1 text-xs`}>
                  {image.badge.text}
                </div>
              )}
              {image.overlay}
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectMixedGrid;
