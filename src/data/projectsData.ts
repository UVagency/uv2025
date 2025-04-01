
export interface ProjectData {
  name: string;
  year: string;
  categories: string[];
  description: string;
  fullDescription?: string;
  client?: string;
  songTitle?: string;
  images: string[];
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
    ]
  },
  "vaxa": {
    name: "VAXA",
    year: "2025",
    categories: ["EXPLAINER"],
    description: "An innovative explainer video for a tech startup's new product launch.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ]
  },
  "dana": {
    name: "DANA",
    year: "2023",
    categories: ["GRAPHICS PACKAGE"],
    description: "A bold and colorful graphics package for a fashion brand's seasonal campaign.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ]
  },
  "bookaway": {
    name: "BOOKAWAY",
    year: "2020",
    categories: ["COMMERCIAL"],
    description: "A dynamic commercial showcasing travel experiences around the world.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ]
  },
  "doritos": {
    name: "DORITOS",
    year: "2017",
    categories: ["COMMERCIAL"],
    description: "A vibrant commercial for Doritos featuring colorful animations and effects.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ]
  },
  "kayma": {
    name: "KAYMA",
    year: "2024",
    categories: ["MUSIC VIDEO"],
    description: "An artistic music video with experimental visual techniques.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ]
  },
  "paris": {
    name: "PARIS",
    year: "2018",
    categories: ["PERSONAL"],
    description: "A personal project exploring the beauty and rhythm of Parisian life.",
    images: [
      "/lovable-uploads/328b3bd3-2f60-41c0-8e3a-77b754e362a6.png"
    ]
  },
  "wix": {
    name: "WIX",
    year: "2024",
    categories: ["EXPLAINER"],
    description: "An informative explainer video for Wix's latest website builder features.",
    images: [
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ]
  },
  "waking-up": {
    name: "WAKING UP",
    year: "2025",
    categories: ["EXPLAINER"],
    description: "A dreamy and informative explainer for a meditation app.",
    images: [
      "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
    ]
  }
};

export default projectsData;
