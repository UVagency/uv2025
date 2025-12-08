import { lazy } from 'react';
import React from 'react';
// Defines interfaces but does NOT import data statically.

export interface BadgeProps {
  text: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
}

export interface ImageItem {
  src: string;
  alt: string;
  badge?: BadgeProps;
  overlay?: React.ReactNode;
  ratio?: number;
}

export interface BannerSection {
  type: 'banner';
  image: string;
  alt?: string;
  ratio?: number;
  badge?: BadgeProps;
  className?: string;
  fit?: 'contain' | 'cover' | 'fill';
}

export interface TextSection {
  type: 'textSection';
  content: string;
  className?: string;
}

export interface ImageGridSection {
  type: 'imageGrid';
  columns: number;
  images: ImageItem[];
  gap?: number;
  className?: string;
}

export interface MixedGridSection {
  type: 'mixedGrid';
  portraitImage: ImageItem;
  gridImages: ImageItem[];
  className?: string;
}

export type GallerySection = BannerSection | TextSection | ImageGridSection | MixedGridSection;

export interface ProjectGallery {
  featureText: string;
  featureTextAuthor?: string;
  featureTextRole?: string;
  sections: GallerySection[];
}

export interface ProjectData {
  id: string;
  name: string;
  year: string;
  categories: string[];
  description: string;
  overview: string;
  execution: string;
  marketingResults: string;
  client?: string;
  songTitle?: string;
  videoUrl?: string;
  images: string[];
  thumbnails?: string[];
  comingSoon?: boolean;
  awardWinning?: boolean;
  emojis?: string[];
  carouselSpeed?: number;
  gallery?: ProjectGallery;
}

// Cargar proyectos desde archivos JSON
// Cargar proyectos desde archivos JSON
const projectImports: Record<string, () => Promise<any>> = {
  "expomascotas": () => import('./projects/expomascotas.json'),
  "enjoy-the-unexpected": () => import('./projects/enjoy-the-unexpected.json'),
  "festival-season": () => import('./projects/festival-season.json'),
  "lolla-vibes": () => import('./projects/lolla-vibes.json'),
  "we-make-your-day": () => import('./projects/we-make-your-day.json'),
  "urban-beat": () => import('./projects/urban-beat.json'),
  "a-great-first-day": () => import('./projects/a-great-first-day.json'),
  "turn-up-the-volume": () => import('./projects/turn-up-the-volume.json'),
  "fly-your-way": () => import('./projects/fly-your-way.json'),
  "closer-to-sun": () => import('./projects/closer-to-sun.json'),
  "sabor-de-barrio": () => import('./projects/sabor-de-barrio.json')
};

export const getProjectData = async (id: string): Promise<ProjectData | null> => {
  const loader = projectImports[id];
  if (!loader) return null;
  const module = await loader();
  return module.default || module;
};

