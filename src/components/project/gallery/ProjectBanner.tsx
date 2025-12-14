import React from 'react';
import OptimizedImage from '@/components/ui/optimized-image';
import { BadgeProps } from '@/types/gallery';

interface ProjectBannerProps {
  image: string;
  alt: string;
  ratio?: number;
  badge?: BadgeProps;
  fit?: 'contain' | 'cover' | 'fill';
}

const ProjectBanner: React.FC<ProjectBannerProps> = ({
  image,
  alt,
  ratio = 21 / 9,
  badge,
  fit
}) => {
  return (
    <OptimizedImage
      src={image}
      alt={alt}
      width={2560} // High resolution for full-width banners
      aspectRatio={ratio}
      badge={badge}
      fit={fit}
      priority={true} // Banner images are usually above the fold
    />
  );
};

export default ProjectBanner;
