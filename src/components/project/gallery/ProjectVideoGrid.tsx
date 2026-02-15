import React, { useState, useRef } from 'react';

interface VideoItem {
  src: string;
  poster: string;
  name: string;
}

interface ProjectVideoGridProps {
  videos: VideoItem[];
  columns?: number;
  className?: string;
}

const ProjectVideoGrid: React.FC<ProjectVideoGridProps> = ({
  videos,
  columns = 3,
  className = ''
}) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      // Pause any currently playing video
      if (playingIndex !== null && videoRefs.current[playingIndex]) {
        videoRefs.current[playingIndex]?.pause();
      }
      video.play();
      setPlayingIndex(index);
    }
  };

  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
  }[columns] || 'grid-cols-3';

  return (
    <div className={`grid ${gridCols} gap-3 ${className}`}>
      {videos.map((video, index) => (
        <div
          key={index}
          className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group bg-black"
          onClick={() => handleVideoClick(index)}
        >
          <video
            ref={(el) => { videoRefs.current[index] = el; }}
            src={video.src}
            poster={video.poster}
            className="w-full h-full object-cover"
            playsInline
            loop
            muted
            onEnded={() => setPlayingIndex(null)}
          />
          
          {/* Play button overlay */}
          {playingIndex !== index && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                <svg className="w-5 h-5 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
          
          {/* Name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white text-sm font-medium">{video.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectVideoGrid;
