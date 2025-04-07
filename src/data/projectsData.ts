
import { lazy } from 'react';
import enjoyTheUnexpected from './projects/enjoy-the-unexpected.json';
import festivalSeason from './projects/festival-season.json';
import mergui from './projects/mergui.json';

export interface GallerySection {
  type: 'banner' | 'textSection' | 'imageGrid' | 'mixedGrid';
  [key: string]: any;
}

export interface ProjectGallery {
  featureText: string;
  sections: GallerySection[];
}

export interface ProjectData {
  id: string;
  name: string;
  year: string;
  categories: string[];
  description: string;
  fullDescription?: string;
  client?: string;
  songTitle?: string;
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
  "mergui": mergui as ProjectData,
  "lolla-vibes": {
    id: "lolla-vibes",
    name: "LOLLA VIBES",
    year: "2025",
    categories: ["IMMERSIVE"],
    description: "Una campaña integrada que celebra la rica cultura culinaria de los barrios latinos con sus sabores, colores y tradiciones.",
    client: "Soundcore by Anker",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ],
    comingSoon: true,
    thumbnails: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=180",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=180"
    ],
    emojis: ["🌮", "🌶️", "🍹", "🪅", "🎭"]
  },
  "we-make-your-day": {
    id: "we-make-your-day",
    name: "WE MAKE YOUR DAY",
    year: "2024",
    categories: ["INTEGRATED"],
    description: "Una campaña interactiva diseñada para sorprender y alegrar el día de las personas con experiencias inesperadas.",
    client: "Krispy Kreme",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=180",
      "https://images.unsplash.com/photo-1531686264889-56fdcabd163f?q=80&w=180"
    ],
    emojis: ["🎁", "🎉", "🎊", "🎈", "🥳"]
  },
  "urban-beat": {
    id: "urban-beat",
    name: "URBAN BEAT",
    year: "2023",
    categories: ["INTEGRATED"],
    description: "Una serie de experiencias urbanas que fusionan música, arte callejero y cultura urbana en un ambiente dinámico.",
    client: "Ball Corporation",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b8034?q=80&w=180",
      "https://images.unsplash.com/photo-1570499998979-115dbcd8e4f8?q=80&w=180"
    ],
    emojis: ["🏙️", "🎧", "🎵", "🎤", "🥁"]
  },
  // This is already loaded from JSON above, so removing the duplicate entry
  // "enjoy-the-unexpected": { ... },
  "a-great-first-day": {
    id: "a-great-first-day",
    name: "A GREAT FIRST DAY",
    year: "2023",
    categories: ["PROMO"],
    description: "Una campaña motivacional centrada en el primer día de grandes proyectos, nuevos comienzos y oportunidades.",
    client: "Mattel",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=180",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=180"
    ],
    emojis: ["🌅", "🚀", "📝", "🌱", "🎯"]
  },
  "turn-up-the-volume": {
    id: "turn-up-the-volume",
    name: "TURN UP THE VOLUME",
    year: "2023",
    categories: ["LAUNCH"],
    description: "Lanzamiento de un producto de audio de alta fidelidad con una campaña que celebra la intensidad del sonido.",
    client: "Maybelline New York",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=180",
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=180"
    ],
    emojis: ["🔊", "📢", "🎸", "🎺", "🔥"]
  },
  "fly-your-way": {
    id: "fly-your-way",
    name: "FLY YOUR WAY",
    year: "2022",
    categories: ["MEDIA"],
    description: "Una campaña para una aerolínea que enfatiza la libertad y personalización en los viajes aéreos.",
    client: "JetSmart",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=180",
      "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=180"
    ],
    awardWinning: true,
    emojis: ["✈️", "🛫", "🌍", "☁️", "🧳"]
  },
  "closer-to-sun": {
    id: "closer-to-sun",
    name: "CLOSER TO THE SUN",
    year: "2025",
    categories: ["IMMERSIVE"],
    description: "At Lolla 2025, we want you to feel the music like never before: vibrating with you in every jump, every chorus, every magical moment. Because good vibes aren't just heard—they're lived!",
    client: "Soundcore by Anker",
    images: [
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png",
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=180", 
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=180"
    ],
    emojis: ["💻", "🎨", "🌐", "✨", "🚀"]
  }
};

export default projectsData;
