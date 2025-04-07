
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImageItem {
  src: string;
  alt: string;
  badge?: {
    text: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  };
  overlay?: React.ReactNode;
}

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
  const getBadgePosition = (position?: string) => {
    switch(position) {
      case 'top-right': return 'top-2 right-2';
      case 'bottom-left': return 'bottom-2 left-2';
      case 'bottom-right': return 'bottom-2 right-2';
      case 'center': return 'inset-0 flex items-center justify-center';
      default: return 'top-2 left-2'; // Default to top-left
    }
  };

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
        <div key={`img-${index}`} className="overflow-hidden rounded-md">
          <AspectRatio ratio={16/9}>
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
  );
};

export default ProjectImageGrid;
