import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  aspectRatio?: number;
  badge?: {
    text: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  };
  overlay?: React.ReactNode;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  aspectRatio,
  badge,
  overlay
}) => {
  // Convert image path to WebP format
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('http')) return originalSrc;
    const basePath = originalSrc.split('.')[0];
    return `${basePath}.webp`;
  };

  // Generate srcset for responsive images
  const getSrcSet = (originalSrc: string) => {
    if (originalSrc.startsWith('http')) return undefined;
    const basePath = originalSrc.split('.')[0];
    return `${basePath}-small.webp 400w, ${basePath}-medium.webp 800w, ${basePath}-large.webp 1200w`;
  };

  const getBadgePosition = (position?: string) => {
    switch(position) {
      case 'top-right': return 'top-2 right-2';
      case 'bottom-left': return 'bottom-2 left-2';
      case 'bottom-right': return 'bottom-2 right-2';
      case 'center': return 'inset-0 flex items-center justify-center';
      default: return 'top-2 left-2';
    }
  };

  const imageContent = (
    <picture>
      <source
        srcSet={getSrcSet(src)}
        type="image/webp"
      />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className={`w-full h-full object-cover ${className}`}
      />
    </picture>
  );

  if (aspectRatio) {
    return (
      <div className="overflow-hidden rounded-md">
        <AspectRatio ratio={aspectRatio}>
          {imageContent}
          {badge && (
            <div className={`absolute ${getBadgePosition(badge.position)} bg-portfolio-highlight text-portfolio-text px-2 py-1 text-xs`}>
              {badge.text}
            </div>
          )}
          {overlay}
        </AspectRatio>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md">
      {imageContent}
      {badge && (
        <div className={`absolute ${getBadgePosition(badge.position)} bg-portfolio-highlight text-portfolio-text px-2 py-1 text-xs`}>
          {badge.text}
        </div>
      )}
      {overlay}
    </div>
  );
};

export default OptimizedImage; 