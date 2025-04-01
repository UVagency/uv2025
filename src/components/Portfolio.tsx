
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
  { name: "MERGUI", year: "2019", categories: ["MUSIC VIDEO"] },
  { name: "CODE NAME", year: "2023", categories: ["GRAPHICS PACKAGE"] },
  { name: "VAXA", year: "2025", categories: ["EXPLAINER"], comingSoon: true },
  { name: "DANA", year: "2023", categories: ["GRAPHICS PACKAGE"] },
  { name: "BOOKAWAY", year: "2020", categories: ["COMMERCIAL"] },
  { name: "DORITOS", year: "2017", categories: ["COMMERCIAL"] },
  { name: "KAYMA", year: "2024", categories: ["MUSIC VIDEO"] },
  { name: "PARIS", year: "2018", categories: ["PERSONAL"], awardWinning: true },
];

const Portfolio = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <div className="flex items-center mb-8">
        <h2 className="text-xl uppercase font-bold text-portfolio-text mr-2">Selected Projects</h2>
        <DiamondIcon />
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={project.name} className="project-item group cursor-pointer">
            <div className="portfolio-divider"></div>
            <div className="py-4 flex flex-col md:flex-row md:items-center justify-between">
              <div className="text-4xl font-bold mb-2 md:mb-0">
                {project.name}
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="project-year-tag">{project.year}</span>
                
                {project.categories.map((category) => (
                  <span key={category} className="project-category-tag">
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
            
            {/* Hover state that appears on hover */}
            <div className="project-hover-state opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-4 px-3 bg-portfolio-highlight border-t border-b border-portfolio-text">
              <div className="flex items-center">
                <span className="text-4xl font-bold text-portfolio-text">{project.name}</span>
                <div className="ml-6 flex items-center">
                  <span className="project-year-tag mr-3">{project.year}</span>
                  {project.categories.map((category) => (
                    <span key={category} className="project-category-tag mr-3">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
