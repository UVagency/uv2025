import React, { useState } from "react";

interface ReelVideo {
  id: string;
  name: string;
  thumbnail?: string;
  videoUrl: string;
}

interface InfluencerReelsProps {
  videos: ReelVideo[];
  title?: string;
}

const InfluencerReels: React.FC<InfluencerReelsProps> = ({ 
  videos, 
  title = "Influencer Content" 
}) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 text-center">
          {title}
        </h2>
        <p className="text-white/60 text-center mb-8 max-w-2xl mx-auto">
          100% organic content—zero directed posts, all genuine captures by attendees and influencers.
        </p>
        
        {/* Horizontal scroll container for mobile, grid for desktop */}
        <div className="flex md:grid md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="flex-shrink-0 w-[200px] md:w-auto snap-center"
            >
              <div 
                className="relative aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
              >
                {activeVideo === video.id ? (
                  <video
                    src={video.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    {video.thumbnail ? (
                      <img 
                        src={video.thumbnail} 
                        alt={video.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center">
                        <span className="text-white/80 text-sm text-center px-2">{video.name}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <p className="text-white/60 text-sm mt-2 text-center truncate">{video.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfluencerReels;
