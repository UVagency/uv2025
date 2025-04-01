
import { DiamondIcon } from "./DiamondIcon";

interface HighlightProject {
  name: string;
  year: string;
  categories: string[];
  imageUrl: string;
}

const highlights: HighlightProject[] = [
  {
    name: "WIX",
    year: "2024",
    categories: ["EXPLAINER"],
    imageUrl: "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
  },
  {
    name: "WAKING UP",
    year: "2025",
    categories: ["EXPLAINER"],
    imageUrl: "/lovable-uploads/630d3839-8c19-4e9a-a57e-198ff13a4be8.png"
  }
];

const Highlights = () => {
  return (
    <div className="max-w-[90%] mx-auto px-4 mb-16 font-sans">
      <div className="flex items-center mb-8">
        <h2 className="text-xl uppercase font-bold text-portfolio-text mr-2">Highlights</h2>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="16,12 8,4 8,20" fill="#d4d118" />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {highlights.map((project) => (
          <div key={project.name} className="cursor-pointer group">
            <div className="relative w-full h-80 overflow-hidden rounded-md mb-4">
              <img 
                src={project.imageUrl} 
                alt={project.name}
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="flex items-start">
              <h3 className="text-5xl font-bold text-portfolio-text mr-2 group-hover:text-portfolio-highlight">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2 items-center mt-2">
                <span className="project-year-tag group-hover:project-year-tag-highlight">
                  {project.year}
                </span>
                
                {project.categories.map((category) => (
                  <span key={category} className="project-category-tag group-hover:project-category-tag-highlight">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
