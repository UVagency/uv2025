import { lazy } from 'react';
import React from 'react';
import enjoyTheUnexpected from './projects/enjoy-the-unexpected.json';
import festivalSeason from './projects/festival-season.json';
import lollaVibes from './projects/lolla-vibes.json';
import weMakeYourDay from './projects/we-make-your-day.json';
import urbanBeat from './projects/urban-beat.json';
import aGreatFirstDay from './projects/a-great-first-day.json';
import turnUpTheVolume from './projects/turn-up-the-volume.json';
import flyYourWay from './projects/fly-your-way.json';
import closerToSun from './projects/closer-to-sun.json';
import saborDeBarrio from './projects/sabor-de-barrio.json';

interface BadgeProps {
  text: string;
  position?: string;
}

interface ImageItem {
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
  thumbnails: string[]; 
  comingSoon?: boolean;
  awardWinning?: boolean;
  emojis?: string[];
  carouselSpeed?: number;
  gallery?: ProjectGallery;
}

// Cargar proyectos desde archivos JSON
const projectsData: Record<string, ProjectData> = {
  "enjoy-the-unexpected": enjoyTheUnexpected as ProjectData,
  "festival-season": festivalSeason as ProjectData,
  "lolla-vibes": lollaVibes as ProjectData,
  "we-make-your-day": weMakeYourDay as ProjectData,
  "urban-beat": urbanBeat as ProjectData,
  "a-great-first-day": aGreatFirstDay as ProjectData,
  "turn-up-the-volume": turnUpTheVolume as ProjectData,
  "fly-your-way": flyYourWay as ProjectData,
  "closer-to-sun": closerToSun as ProjectData,
  "sabor-de-barrio": saborDeBarrio as ProjectData
};

export default projectsData;
