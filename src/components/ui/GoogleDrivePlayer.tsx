import React, { useRef } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GoogleDrivePlayerProps {
  /** Google Drive URL (e.g., https://drive.google.com/file/d/FILE_ID/view) */
  videoUrl: string;
  /** Custom title for the iframe */
  title?: string;
  /** Additional CSS classes for the container */
  className?: string;
  /** Custom aspect ratio */
  aspectRatio?: number;
}

const getGoogleDriveId = (url: string): string | null => {
  // Extract file ID from Google Drive URL
  const regExp = /\/file\/d\/([a-zA-Z0-9_-]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const GoogleDrivePlayer: React.FC<GoogleDrivePlayerProps> = ({
  videoUrl,
  title = "Google Drive video player",
  className = "mb-16 overflow-hidden rounded-lg bg-black",
  aspectRatio = 16/9,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const fileId = getGoogleDriveId(videoUrl);
  
  if (!fileId) {
    console.warn('GoogleDrivePlayer: Invalid Google Drive URL provided:', videoUrl);
    return (
      <div className={className}>
        <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
          <p className="text-white text-center p-4">
            Error: URL de Google Drive inválida
          </p>
        </div>
      </div>
    );
  }

  // Build the embed URL for Google Drive
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className={className}>
      <AspectRatio ratio={aspectRatio}>
        <iframe
          ref={iframeRef}
          src={embedUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-full h-full"
          style={{ background: "black" }}
          title={title}
        />
      </AspectRatio>
    </div>
  );
};

export default GoogleDrivePlayer;
