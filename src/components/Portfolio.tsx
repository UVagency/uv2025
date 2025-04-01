
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
            
            {/* Normal state */}
            <div className="py-4 flex flex-col items-start justify-between group-hover:hidden">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-4xl font-bold">
                  {project.name}
                </div>
                <span className="project-year-tag">{project.year}</span>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
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
            
            {/* Hover state */}
            <div className="py-4 hidden group-hover:block text-portfolio-highlight">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-4xl font-bold">
                    {project.name}
                  </div>
                  <span className="project-year-tag">{project.year}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
