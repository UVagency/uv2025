import React from 'react';
import VimeoPlayer from '../ui/VimeoPlayer';
import { ProjectData } from '@/data/projectsData';

interface ProjectVideoPlayerProps {
  project: ProjectData;
}

const ProjectVideoPlayer: React.FC<ProjectVideoPlayerProps> = ({ project }) => {
  if (!project.videoUrl) return null;

  return (
    <VimeoPlayer
      videoUrl={project.videoUrl}
      title="Vimeo video player"
      autoplay={true}
      color="EBA3A9"
      enableAnalytics={true}
      analyticsData={{
        videoId: project.id || 'project-video',
        videoTitle: project.name || 'Project Video'
      }}
    />
  );
};

export default ProjectVideoPlayer;
