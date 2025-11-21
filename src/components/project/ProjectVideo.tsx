import { useEffect, useRef } from 'react';
import { trackVideoEngagement } from '@/lib/analytics';

interface ProjectVideoProps {
  videoUrl: string;
  title: string;
}

const ProjectVideo = ({ videoUrl, title }: ProjectVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      trackVideoEngagement(videoRef.current);
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={videoUrl}
      title={title}
      controls
      muted
      className="w-full"
    />
  );
};

export default ProjectVideo;