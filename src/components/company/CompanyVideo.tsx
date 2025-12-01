import React from 'react';
import VimeoPlayer from '../ui/VimeoPlayer';

interface CompanyVideoProps {
  videoUrl: string;
}

const CompanyVideo: React.FC<CompanyVideoProps> = ({ videoUrl }) => {
  return (
    <VimeoPlayer
      videoUrl={videoUrl}
      title="UV Company Recap"
      showTitle={true}
      muted={true}
      color="6BD8D7"
    />
  );
};

export default CompanyVideo; 