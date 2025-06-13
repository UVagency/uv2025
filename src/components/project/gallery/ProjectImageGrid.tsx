import React from 'react';
import OptimizedImage from '@/components/ui/optimized-image';
import { ImageItem } from '@/types/gallery';

interface ProjectImageGridProps {
  images: ImageItem[];
  columns: number;
  gap?: number;
  className?: string;
}

const ProjectImageGrid: React.FC<ProjectImageGridProps> = ({ 
  images, 
  columns, 
  gap = 4,
  className = ""
}) => {
  const getColumnsClass = () => {
    switch(columns) {
      case 2: return 'sm:grid-cols-2';
      case 3: return 'sm:grid-cols-3';
      case 4: return 'sm:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1';
    }
  };

  return (
    <div className={`grid grid-cols-1 ${getColumnsClass()} gap-${gap} ${className}`}>
      {images.map((image, index) => (
        <OptimizedImage
          key={`img-${index}`}
          src={image.src}
          alt={image.alt}
          aspectRatio={1/1}
          overlay={image.overlay}
        />
      ))}
    </div>
  );
};

export default ProjectImageGrid;
