import React from 'react';
import OptimizedImage from '@/components/ui/optimized-image';

interface GridImage {
  src: string;
  alt: string;
  ratio?: number;
  badge?: {
    text: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  };
  overlay?: React.ReactNode;
}

interface ProjectMixedGridProps {
  portraitImage: {
    src: string;
    alt: string;
    badge?: {
      text: string;
      position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
    };
    overlay?: React.ReactNode;
  };
  gridImages: GridImage[];
}

const ProjectMixedGrid: React.FC<ProjectMixedGridProps> = ({
  portraitImage,
  gridImages
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
      <div className="lg:col-span-4">
        <OptimizedImage
          src={portraitImage.src}
          alt={portraitImage.alt}
          aspectRatio={3/4}
          badge={portraitImage.badge}
          overlay={portraitImage.overlay}
        />
      </div>
      <div className="lg:col-span-8 grid grid-cols-2 grid-rows-2 sm:grid-rows-4 gap-4">
        {gridImages.map((image, index) => (
          <OptimizedImage
            key={`grid-${index}`}
            src={image.src}
            alt={image.alt}
            aspectRatio={image.ratio || (index % 3 === 0 ? 16/9 : 1)}
            badge={image.badge}
            overlay={image.overlay}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectMixedGrid;
