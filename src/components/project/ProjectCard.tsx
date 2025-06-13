import { trackEvent, GA_EVENTS, GA_PARAMS } from '@/lib/analytics';

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    categories: string[];
    client: string;
  };
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const handleClick = () => {
    trackEvent('PROJECT_CLICK', {
      [GA_PARAMS.PROJECT_ID]: project.id,
      [GA_PARAMS.PROJECT_NAME]: project.name,
      [GA_PARAMS.PROJECT_CATEGORY]: project.categories.join(', '),
      [GA_PARAMS.PROJECT_CLIENT]: project.client
    });
    onClick();
  };

  return (
    <div 
      className="project-card cursor-pointer"
      onClick={handleClick}
    >
      {/* ... existing card content ... */}
    </div>
  );
};

export default ProjectCard; 