
import { ArrowDown } from "lucide-react";

export const ScrollIndicator = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('.project-item');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-portfolio-text/70 animate-bounce cursor-pointer"
      onClick={scrollToProjects}
    >
      <span className="text-sm mb-1">Scroll Down</span>
      <ArrowDown size={16} />
    </div>
  );
};
