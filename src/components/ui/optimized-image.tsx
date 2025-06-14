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
  sizes?: string;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  responsive?: boolean;
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
  overlay,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 80,
  format = 'webp',
  responsive = true
}) => {
  // Handle both absolute URLs and relative paths
  const isExternalUrl = src.startsWith('http');
  const imagePath = isExternalUrl ? src : src.startsWith('/') ? src : `/${src}`;

  const getBadgePosition = (position?: string) => {
    switch(position) {
      case 'top-right': return 'top-2 right-2';
      case 'bottom-left': return 'bottom-2 left-2';
      case 'bottom-right': return 'bottom-2 right-2';
      case 'center': return 'inset-0 flex items-center justify-center';
      default: return 'top-2 left-2';
    }
  };

  const getOptimizedUrl = (url: string, width?: number) => {
    if (!isExternalUrl) return url;
    
    const params = new URLSearchParams();
    if (width) params.append('w', width.toString());
    params.append('format', format);
    params.append('quality', quality.toString());
    
    return `${url}?${params.toString()}`;
  };

  const generateSrcSet = (url: string) => {
    if (!responsive) return undefined;
    
    const widths = [480, 800, 1200, 1600];
    return widths
      .map(width => `${getOptimizedUrl(url, width)} ${width}w`)
      .join(', ');
  };

  const imageContent = (
    <img
      src={getOptimizedUrl(imagePath, width)}
      srcSet={generateSrcSet(imagePath)}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      className={`w-full h-full object-cover ${className}`}
    />
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