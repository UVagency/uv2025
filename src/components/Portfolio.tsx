
import { DiamondIcon } from "./DiamondIcon";
import { AwardIcon } from "./AwardIcon";

interface Project {
  name: string;
  year: string;
  categories: string[];
  comingSoon?: boolean;
  awardWinning?: boolean;
}

const projects: Project[] = [
  { name: "CLOSER TO THE SUN", year: "2024", categories: ["IMMERSIVE"] },
  { name: "SABOR DE BARRIO", year: "2024", categories: ["INTEGRATED"] },
  { name: "WE MAKE YOUR DAY", year: "2024", categories: ["INTEGRATED"], comingSoon: true },
  { name: "URBAN BEAT", year: "2023", categories: ["INTEGRATED"] },
  { name: "ENJOY THE UNEXPECTED", year: "2023", categories: ["PROMO"] },
  { name: "A GREAT FIRST DAY", year: "2023", categories: ["PROMO"] },
  { name: "TURN UP THE VOLUME", year: "2023", categories: ["LAUNCH"] },
  { name: "FLY YOUR WAY", year: "2022", categories: ["MEDIA"], awardWinning: true },
];

const Portfolio = () => {
  return (
    <div className="max-w-[90%] mx-auto px-4 py-8 font-sans">
      <div className="flex items-center mb-8">
        <h2 className="text-xl uppercase font-bold text-portfolio-text mr-2">Selected Projects</h2>
        <DiamondIcon />
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={project.name} className="project-item group cursor-pointer">
            <div className="portfolio-divider"></div>
            
            {/* Normal state */}
            <div className="py-4 flex items-center">
              <div className="text-4xl font-bold text-portfolio-text mr-4 group-hover:text-portfolio-highlight">
                {project.name}
              </div>
              <div className="flex items-center gap-2">
                <span className="project-year-tag group-hover:project-year-tag-highlight group-hover:bg-portfolio-highlight group-hover:text-portfolio-text">
                  {project.year}
                </span>
                
                {project.categories.map((category) => (
                  <span key={category} className="project-category-tag group-hover:project-category-tag-highlight">
                    {category}
                  </span>
                ))}
                
                {project.comingSoon && (
                  <span className="project-coming-soon-tag">
                    COMING SOOOOOON
                  </span>
                )}
                
                {project.awardWinning && (
                  <div className="relative inline-block">
                    <AwardIcon />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
