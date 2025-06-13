import React, { useEffect, useRef } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProjectData } from '@/data/projectsData';
import { trackVideoEngagement } from '@/lib/analytics';

interface ProjectVideoPlayerProps {
  project: ProjectData;
}

const getVimeoId = (url: string) => {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
};

const ProjectVideoPlayer: React.FC<ProjectVideoPlayerProps> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      trackVideoEngagement(videoRef.current);
    }
  }, []);

  if (!project.videoUrl) return null;
  const vimeoId = getVimeoId(project.videoUrl);
  if (!vimeoId) return null;

  // Personaliza el color con tu color de marca (hex sin #)
  const color = "EBA3A9";

  return (
    <div className="mb-16 overflow-hidden rounded-lg bg-black">
      <AspectRatio ratio={16/9}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?color=${color}&title=0&byline=0&portrait=0`}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          className="w-full h-full"
          style={{ background: "black" }}
          title="Vimeo video player"
        />
      </AspectRatio>
    </div>
  );
};

export default ProjectVideoPlayer;
