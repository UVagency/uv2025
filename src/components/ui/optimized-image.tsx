import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  wrapperClassName?: string;
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
  wrapperClassName = "overflow-hidden rounded-md",
  priority = false,
  aspectRatio,
  badge,
  overlay
}) => {
  const cdn = import.meta.env.VITE_IMG_CDN ?? '';
  const isExternalUrl = /^https?:\/\//.test(src);
  let imagePath = src;

  if (!isExternalUrl) {
    const normalized = src.startsWith('/') ? src : `/${src}`;
    imagePath = `${cdn}${normalized}`;

    if (width || height) {
      const url = new URL(imagePath);
      if (width) url.searchParams.set('w', String(width));
      if (height) url.searchParams.set('h', String(height));
      url.searchParams.set('fit', 'cover');
      url.searchParams.set('format', 'auto');
      imagePath = url.toString();
    }
  }

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
    <img
      src={imagePath}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      className={`w-full h-full object-cover ${className}`}
    />
  );

  if (aspectRatio) {
    return (
      <div className={wrapperClassName}>
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
    <div className={wrapperClassName}>
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