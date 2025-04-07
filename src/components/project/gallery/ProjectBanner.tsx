
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectBannerProps {
  image: string;
  alt: string;
  ratio?: number;
  badge?: {
    text: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  };
}

const ProjectBanner: React.FC<ProjectBannerProps> = ({ 
  image, 
  alt, 
  ratio = 21/9,
  badge 
}) => {
  const getBadgePosition = () => {
    switch(badge?.position) {
      case 'top-right': return 'top-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      case 'center': return 'inset-0 flex items-center justify-center';
      default: return 'top-4 left-4'; // Default to top-left
    }
  };

  return (
    <div className="overflow-hidden rounded-lg">
      <AspectRatio ratio={ratio}>
        <img 
          src={image} 
          alt={alt}
          className="w-full h-full object-cover"
        />
        {badge && (
          <div className={`absolute ${getBadgePosition()} bg-portfolio-highlight text-portfolio-text px-4 py-1 text-sm font-bold`}>
            {badge.text}
          </div>
        )}
      </AspectRatio>
    </div>
  );
};

export default ProjectBanner;
