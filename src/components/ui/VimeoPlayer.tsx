import React, { useEffect, useRef } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { trackVideoEngagement } from '@/lib/analytics';

interface VimeoPlayerProps {
  /** Vimeo URL (e.g., https://vimeo.com/123456789) */
  videoUrl: string;
  /** Custom title for the iframe */
  title?: string;
  /** Whether to show the video title in the player */
  showTitle?: boolean;
  /** Whether to show the byline in the player */
  showByline?: boolean;
  /** Whether to show the user portrait in the player */
  showPortrait?: boolean;
  /** Whether to autoplay the video (default: true) */
  autoplay?: boolean;
  /** Whether to mute the video (recommended for autoplay) */
  muted?: boolean;
  /** Whether to loop the video instead of showing end screen */
  loop?: boolean;
  /** Custom color for the player controls (hex without #) */
  color?: string;
  /** Whether to hide social interaction buttons (like, watch later, share) */
  hideInteractionButtons?: boolean;
  /** Whether to allow picture-in-picture */
  allowPictureInPicture?: boolean;
  /** Whether to enable Do Not Track */
  doNotTrack?: boolean;
  /** Custom aspect ratio */
  aspectRatio?: number;
  /** Additional CSS classes for the container */
  className?: string;
  /** Whether to enable analytics tracking (default: true) */
  enableAnalytics?: boolean;
  /** Custom analytics data */
  analyticsData?: {
    videoId?: string;
    videoTitle?: string;
  };
}

const getVimeoId = (url: string): string | null => {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
};

const VimeoPlayer: React.FC<VimeoPlayerProps> = ({
  videoUrl,
  title = "UV video player",
  showTitle = true,
  showByline = false,
  showPortrait = false,
  autoplay = true,
  muted = false,
  loop = true,
  color = "6BD8D7", // Default portfolio accent color
  hideInteractionButtons = true,
  allowPictureInPicture = true,
  doNotTrack = false,
  aspectRatio = 16/9,
  className = "mb-16 overflow-hidden rounded-lg bg-black",
  enableAnalytics = true,
  analyticsData,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const vimeoId = getVimeoId(videoUrl);
  
  useEffect(() => {
    // Only enable analytics if requested and we have a valid iframe
    if (enableAnalytics && iframeRef.current) {
      // Create a virtual video element for analytics tracking
      const virtualVideo = document.createElement('video');
      virtualVideo.id = analyticsData?.videoId || vimeoId || 'vimeo-video';
      virtualVideo.title = analyticsData?.videoTitle || title;
      
      // Track analytics
      trackVideoEngagement(virtualVideo);
      
      // Listen for Vimeo player events via postMessage
      const handleVimeoMessage = (event: MessageEvent) => {
        if (event.origin !== 'https://player.vimeo.com') return;
        
        const data = event.data;
        if (data.method) {
          switch (data.method) {
            case 'play':
              virtualVideo.dispatchEvent(new Event('play'));
              break;
            case 'ended':
              virtualVideo.dispatchEvent(new Event('ended'));
              break;
          }
        }
      };
      
      window.addEventListener('message', handleVimeoMessage);
      
      return () => {
        window.removeEventListener('message', handleVimeoMessage);
      };
    }
  }, [enableAnalytics, vimeoId, title, analyticsData]);
  
  if (!vimeoId) {
    console.warn('VimeoPlayer: Invalid Vimeo URL provided:', videoUrl);
    return null;
  }

  // Build the embed URL with parameters
  const embedUrl = new URL(`https://player.vimeo.com/video/${vimeoId}`);
  embedUrl.searchParams.set('color', color);
  embedUrl.searchParams.set('title', showTitle ? '1' : '0');
  embedUrl.searchParams.set('byline', showByline ? '1' : '0');
  embedUrl.searchParams.set('portrait', showPortrait ? '1' : '0');
  
  if (autoplay) {
    embedUrl.searchParams.set('autoplay', '1');
  }
  
  if (muted) {
    embedUrl.searchParams.set('muted', '1');
  }
  
  // Loop video instead of showing end screen
  if (loop) {
    embedUrl.searchParams.set('loop', '1');
    embedUrl.searchParams.set('autopause', '0');
  }
  
  // Hide social interaction buttons (like, watch later, share)
  if (hideInteractionButtons) {
    embedUrl.searchParams.set('badge', '0');
    embedUrl.searchParams.set('cards', '0');
  }
  
  // Picture-in-picture control
  if (!allowPictureInPicture) {
    embedUrl.searchParams.set('pip', '0');
  }
  
  // Do not track
  if (doNotTrack) {
    embedUrl.searchParams.set('dnt', '1');
  }

  return (
    <div className={className}>
      <AspectRatio ratio={aspectRatio}>
        <iframe
          ref={iframeRef}
          src={embedUrl.toString()}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          className="w-full h-full"
          style={{ background: "black" }}
          title={title}
        />
      </AspectRatio>
    </div>
  );
};

export default VimeoPlayer; 