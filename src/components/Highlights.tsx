import { useNavigate } from "react-router-dom";

interface HighlightProject {
  name: string;
  year: string;
  categories: string[];
  imageUrl: string;
  slug: string;
}

const highlights: HighlightProject[] = [
  {
    name: "NEW CLIENTS",
    year: "2025",
    categories: ["WELCOME"],
    imageUrl: "images/portada_higlight1.jpg",
    slug: "soundcore"
  },
  {
    name: "CLOSER TO THE SUN",
    year: "2024",
    categories: ["IMMERSIVE"],
    imageUrl: "images/portada_higlight1.jpg",
    slug: "soundcore"
  }
];

const Highlights = () => {
  const navigate = useNavigate();
  
  const handleProjectClick = (projectSlug: string) => {
    navigate(`/project/${projectSlug}`);
  };

  return (
    <div className="max-w-[90%] mx-auto px-4 mb-16 font-sans">
      <div className="flex items-center mb-8">
        <h2 className="text-xl uppercase font-bold text-portfolio-text mr-2">Highlights</h2>
        <span>📌</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {highlights.map((project) => (
          <div 
            key={project.name} 
            onClick={() => handleProjectClick(project.slug)}
            className="cursor-pointer group"
          >
            <div className="relative w-full h-80 overflow-hidden rounded-md mb-4">
              <img 
                src={project.imageUrl} 
                alt={project.name}
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="flex flex-col items-start">
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
