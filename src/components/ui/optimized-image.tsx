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
  sizes?: string;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png' | 'auto';
  responsive?: boolean;
  fit?: 'contain' | 'cover' | 'fill';
}

/**
 * Componente de imagen optimizada que usa Netlify Image CDN para transformaciones automáticas.
 * 
 * En producción (Netlify), las imágenes se optimizan automáticamente mediante:
 * - Conversión automática a AVIF/WebP según el navegador (content negotiation)
 * - Redimensionamiento según parámetros w/h
 * - Optimización de calidad
 * - Caché en edge para mejor rendimiento
 * 
 * En desarrollo local, usa las imágenes directamente sin transformación.
 */
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
  overlay,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 75,
  format = 'auto',
  responsive = true,
  fit = 'cover'
}) => {
  const isExternalUrl = /^https?:\/\//.test(src);
  const isNetlify = import.meta.env.PROD && typeof window !== 'undefined' &&
    (window.location.hostname.includes('netlify.app') ||
      window.location.hostname.includes('netlify.com') ||
      window.location.hostname === 'uv.agency' ||
      window.location.hostname === 'www.uv.agency');

  /**
   * Genera la URL optimizada usando Netlify Image CDN
   */
  const getNetlifyImageUrl = (
    imageSrc: string,
    imgWidth?: number,
    imgHeight?: number,
    imgFormat?: string
  ): string => {
    const params = new URLSearchParams();
    params.set('url', imageSrc);

    if (imgWidth) params.set('w', String(imgWidth));
    if (imgHeight) params.set('h', String(imgHeight));
    if (fit) params.set('fit', fit);
    if (imgFormat && imgFormat !== 'auto') {
      params.set('fm', imgFormat);
    }
    if (quality) params.set('q', String(quality));

    return `/.netlify/images?${params.toString()}`;
  };

  /**
   * Genera srcSet para imágenes responsivas usando Netlify Image CDN
   */
  const generateSrcSet = (imageSrc: string): string | undefined => {
    if (!responsive || !isNetlify) return undefined;

    const widths = [480, 800, 1200, 1600, 1920];
    return widths
      .map(w => `${getNetlifyImageUrl(imageSrc, w, height, format)} ${w}w`)
      .join(', ');
  };

  /**
   * Obtiene la URL final de la imagen
   */
  const getImageUrl = (): string => {
    if (isExternalUrl) {
      // Para imágenes externas, usar Netlify Image CDN si está configurado
      // o la URL original si no está en Netlify
      if (isNetlify) {
        return getNetlifyImageUrl(src, width, height, format);
      }
      return src;
    }

    // Para imágenes locales
    const normalized = src.startsWith('/') ? src : `/${src}`;

    if (isNetlify) {
      // Usar Netlify Image CDN en producción
      return getNetlifyImageUrl(normalized, width, height, format);
    }

    // En desarrollo, usar la ruta directa
    return normalized;
  };

  const getBadgePosition = (position?: string) => {
    switch (position) {
      case 'top-right': return 'top-2 right-2';
      case 'bottom-left': return 'bottom-2 left-2';
      case 'bottom-right': return 'bottom-2 right-2';
      case 'center': return 'inset-0 flex items-center justify-center';
      default: return 'top-2 left-2';
    }
  };

  const imageUrl = getImageUrl();
  const srcSet = generateSrcSet(isExternalUrl ? src : (src.startsWith('/') ? src : `/${src}`));

  const imageContent = (
    <img
      src={imageUrl}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      className={`w-full h-full object-${fit} ${className}`}
      decoding="async"
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