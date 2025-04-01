
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProjectData } from '@/data/projectsData';

interface ProjectGalleryProps {
  project: ProjectData;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project }) => {
  return (
    <div className="overflow-x-auto mb-24">
      <div className="flex gap-4">
        {project.images.map((image, index) => (
          <div key={index} className="min-w-[300px] overflow-hidden rounded-lg">
            <AspectRatio ratio={16/9}>
              <img 
                src={image} 
                alt={`${project.name} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
