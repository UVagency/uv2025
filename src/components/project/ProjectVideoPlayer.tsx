
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProjectData } from '@/data/projectsData';

interface ProjectVideoPlayerProps {
  project: ProjectData;
}

const ProjectVideoPlayer: React.FC<ProjectVideoPlayerProps> = ({ project }) => {
  // Esta es una URL de video placeholder, en producción se usaría la del proyecto
  const videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4";
  
  return (
    <div className="mb-16 overflow-hidden rounded-lg bg-black">
      <AspectRatio ratio={16/9}>
        <video 
          className="w-full h-full object-cover"
          controls
          autoPlay={false}
          playsInline
          poster={project.images[0]}
        >
          <source src={videoUrl} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </AspectRatio>
    </div>
  );
};

export default ProjectVideoPlayer;
