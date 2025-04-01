export interface ProjectData {
  name: string;
  year: string;
  categories: string[];
  description: string;
  fullDescription?: string;
  client?: string;
  songTitle?: string;
  images: string[];
  thumbnails: string[]; // Make thumbnails required
  comingSoon?: boolean;
  awardWinning?: boolean;
  emojis?: string[];
}

// Sample project data - in a real application, this would come from a database or API
const projectsData: Record<string, ProjectData> = {
  "closer-to-the-sun": {
    name: "CLOSER TO THE SUN",
    year: "2024",
    categories: ["IMMERSIVE"],
    description: "Una experiencia inmersiva que transporta a los espectadores a un entorno de verano tropical lleno de sol y playa.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=180",
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?q=80&w=180"
    ],
    emojis: ["☀️", "🌊", "🏄‍♂️", "🌴", "🕶️"]
  },
  "sabor-de-barrio": {
    name: "SABOR DE BARRIO",
    year: "2024",
    categories: ["INTEGRATED"],
    description: "Una campaña integrada que celebra la rica cultura culinaria de los barrios latinos con sus sabores, colores y tradiciones.",
    client: "Restaurantes Unidos",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=180",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=180"
    ],
    emojis: ["🌮", "🌶️", "🍹", "🪅", "🎭"]
  },
  "we-make-your-day": {
    name: "WE MAKE YOUR DAY",
    year: "2024",
    categories: ["INTEGRATED"],
    description: "Una campaña interactiva diseñada para sorprender y alegrar el día de las personas con experiencias inesperadas.",
    client: "Cadena de Tiendas Happy",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=180",
      "https://images.unsplash.com/photo-1531686264889-56fdcabd163f?q=80&w=180"
    ],
    comingSoon: true,
    emojis: ["🎁", "🎉", "🎊", "🎈", "🥳"]
  },
  "urban-beat": {
    name: "URBAN BEAT",
    year: "2023",
    categories: ["INTEGRATED"],
    description: "Una serie de experiencias urbanas que fusionan música, arte callejero y cultura urbana en un ambiente dinámico.",
    client: "Festival de Cultura Urbana",
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
  "enjoy-the-unexpected": {
    name: "ENJOY THE UNEXPECTED",
    year: "2023",
    categories: ["PROMO"],
    description: "Una campaña promocional que invita a los consumidores a descubrir sorpresas inesperadas en cada interacción con la marca.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=180",
      "https://images.unsplash.com/photo-1481162324536-ecd186aaa0d6?q=80&w=180"
    ],
    emojis: ["🎲", "🎯", "🎪", "🎭", "✨"]
  },
  "a-great-first-day": {
    name: "A GREAT FIRST DAY",
    year: "2023",
    categories: ["PROMO"],
    description: "Una campaña motivacional centrada en el primer día de grandes proyectos, nuevos comienzos y oportunidades.",
    client: "StartUp Academy",
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
    name: "TURN UP THE VOLUME",
    year: "2023",
    categories: ["LAUNCH"],
    description: "Lanzamiento de un producto de audio de alta fidelidad con una campaña que celebra la intensidad del sonido.",
    client: "SoundMax",
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
    name: "FLY YOUR WAY",
    year: "2022",
    categories: ["MEDIA"],
    description: "Una campaña para una aerolínea que enfatiza la libertad y personalización en los viajes aéreos.",
    client: "FreedomAir",
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
  "mergui": {
    name: "MERGUI",
    year: "2019",
    categories: ["MUSIC VIDEO"],
    description: "A vibrant mixed-media music video created for international pop star Mergui's summer hit, \"Not Myself.\"",
    client: "Mergui",
    songTitle: "Not Myself",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=180",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=180",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=180",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=180",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=180"
    ]
  },
  "code-name": {
    name: "CODE NAME",
    year: "2023",
    categories: ["GRAPHICS PACKAGE"],
    description: "A comprehensive graphics package for an international brand campaign.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=180",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=180",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=180",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=180",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=180"
    ]
  },
  "wix": {
    name: "WIX",
    year: "2024",
    categories: ["EXPLAINER"],
    description: "Una experiencia de diseño web que explica las capacidades de la plataforma Wix de manera interactiva.",
    client: "Wix",
    images: [
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png",
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=180", 
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=180"
    ],
    emojis: ["💻", "🎨", "🌐", "✨", "🚀"]
  },
  "waking-up": {
    name: "WAKING UP",
    year: "2025",
    categories: ["EXPLAINER"],
    description: "Una experiencia visual que explora la conciencia humana y el proceso de despertar a nuevas realidades.",
    client: "Sam Harris",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png",
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=180",
      "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=180"
    ],
    comingSoon: true,
    emojis: ["🧠", "💭", "🌌", "🔮", "🧘‍♂️"]
  }
};

export default projectsData;
