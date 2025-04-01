
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
}

// Sample project data - in a real application, this would come from a database or API
const projectsData: Record<string, ProjectData> = {
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
  "vaxa": {
    name: "VAXA",
    year: "2025",
    categories: ["EXPLAINER"],
    description: "An innovative explainer video for a tech startup's new product launch.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=180",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=180",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=180",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=180",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=180"
    ]
  },
  "dana": {
    name: "DANA",
    year: "2023",
    categories: ["GRAPHICS PACKAGE"],
    description: "A bold and colorful graphics package for a fashion brand's seasonal campaign.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=180",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=180",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=180",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=180",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=180"
    ]
  },
  "bookaway": {
    name: "BOOKAWAY",
    year: "2020",
    categories: ["COMMERCIAL"],
    description: "A dynamic commercial showcasing travel experiences around the world.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=180",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=180",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=180",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=180",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=180"
    ]
  },
  "doritos": {
    name: "DORITOS",
    year: "2017",
    categories: ["COMMERCIAL"],
    description: "A vibrant commercial for Doritos featuring colorful animations and effects.",
    images: [
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
  "kayma": {
    name: "KAYMA",
    year: "2024",
    categories: ["MUSIC VIDEO"],
    description: "An artistic music video with experimental visual techniques.",
    images: [
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
  "paris": {
    name: "PARIS",
    year: "2018",
    categories: ["PERSONAL"],
    description: "A personal project exploring the beauty and rhythm of Parisian life.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=180",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=180",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=180",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=180",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=180"
    ]
  },
  "wix": {
    name: "WIX",
    year: "2024",
    categories: ["EXPLAINER"],
    description: "An informative explainer video for Wix's latest website builder features.",
    images: [
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=180",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=180",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=180",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=180",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=180"
    ]
  },
  "waking-up": {
    name: "WAKING UP",
    year: "2025",
    categories: ["EXPLAINER"],
    description: "A dreamy and informative explainer for a meditation app.",
    images: [
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=180",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=180",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=180",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=180",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=180"
    ]
  }
};

export default projectsData;
