import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CompanyVideoProps {
  videoUrl: string;
}

const CompanyVideo: React.FC<CompanyVideoProps> = ({ videoUrl }) => {
  return (
    <div className="mb-16 overflow-hidden rounded-lg bg-black">
      <AspectRatio ratio={16/9}>
        <iframe
          src={videoUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          style={{ background: "black" }}
          title="UV Company Recap"
        />
      </AspectRatio>
    </div>
  );
};

export default CompanyVideo; 