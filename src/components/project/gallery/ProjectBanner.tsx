import React from 'react';
import OptimizedImage from '@/components/ui/optimized-image';
import { BadgeProps } from '@/types/gallery';

interface ProjectBannerProps {
  image: string;
  alt: string;
  ratio?: number;
  badge?: BadgeProps;
}

const ProjectBanner: React.FC<ProjectBannerProps> = ({
  image,
  alt,
  ratio = 21/9,
  badge
}) => {
  return (
    <OptimizedImage
      src={image}
      alt={alt}
      aspectRatio={ratio}
      badge={badge}
      priority={true} // Banner images are usually above the fold
    />
  );
};

export default ProjectBanner;
