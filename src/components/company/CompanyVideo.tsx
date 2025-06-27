import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CompanyVideoProps {
  videoUrl: string;
}

const getVimeoId = (url: string) => {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
};

const CompanyVideo: React.FC<CompanyVideoProps> = ({ videoUrl }) => {
  const vimeoId = getVimeoId(videoUrl);
  
  if (!vimeoId) {
    return null;
  }

  // Use portfolio accent color from Tailwind config
  const color = "6BD8D7";

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
          title="UV Company Recap"
        />
      </AspectRatio>
    </div>
  );
};

export default CompanyVideo; 