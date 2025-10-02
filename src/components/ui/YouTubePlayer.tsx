import React, { useEffect, useRef } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { trackVideoEngagement } from '@/lib/analytics';

interface YouTubePlayerProps {
  /** YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID) */
  videoUrl: string;
  /** Custom title for the iframe */
  title?: string;
  /** Whether to autoplay the video (default: false for unlisted videos) */
  autoplay?: boolean;
  /** Whether to mute the video. If not specified, will auto-detect based on browser policies */
  muted?: boolean;
  /** Whether to loop the video */
  loop?: boolean;
  /** Whether to show player controls */
  controls?: boolean;
  /** Whether to allow picture-in-picture */
  allowPictureInPicture?: boolean;
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

const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  if (match && match[2] && match[2].length === 11) {
    return match[2];
  }
  
  // Fallback: try to extract from URL parameters
  try {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get('v');
    if (videoId && videoId.length === 11) {
      return videoId;
    }
  } catch (e) {
    // Invalid URL
  }
  
  return null;
};

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoUrl,
  title = "YouTube video player",
  autoplay = false,
  muted, // Will be auto-detected if not specified
  loop = false,
  controls = true,
  allowPictureInPicture = true,
  aspectRatio = 16/9,
  className = "mb-16 overflow-hidden rounded-lg bg-black",
  enableAnalytics = true,
  analyticsData,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const youtubeId = getYouTubeId(videoUrl);
  
  // Auto-detect muted state based on browser autoplay policies
  const shouldMute = muted !== undefined 
    ? muted 
    : !sessionStorage.getItem('userHasInteracted');
  
  useEffect(() => {
    // Mark that user has interacted with the site
    const markInteraction = () => {
      sessionStorage.setItem('userHasInteracted', 'true');
    };
    
    // Listen for any user interaction
    const events = ['click', 'scroll', 'keydown', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, markInteraction, { once: true });
    });
    
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, markInteraction);
      });
    };
  }, []);
  
  useEffect(() => {
    // Only enable analytics if requested and we have a valid iframe
    if (enableAnalytics && iframeRef.current) {
      // Create a virtual video element for analytics tracking
      const virtualVideo = document.createElement('video');
      virtualVideo.id = analyticsData?.videoId || youtubeId || 'youtube-video';
      virtualVideo.title = analyticsData?.videoTitle || title;
      
      // Track analytics
      trackVideoEngagement(virtualVideo);
      
      // Listen for YouTube player events via postMessage
      const handleYouTubeMessage = (event: MessageEvent) => {
        if (event.origin !== 'https://www.youtube.com') return;
        
        const data = event.data;
        if (data && typeof data === 'string') {
          try {
            const parsedData = JSON.parse(data);
            if (parsedData.event) {
              switch (parsedData.event) {
                case 'video-progress':
                  if (parsedData.info && parsedData.info.currentTime > 0) {
                    virtualVideo.dispatchEvent(new Event('play'));
                  }
                  break;
                case 'video-end':
                  virtualVideo.dispatchEvent(new Event('ended'));
                  break;
              }
            }
          } catch (e) {
            // Ignore parsing errors
          }
        }
      };
      
      window.addEventListener('message', handleYouTubeMessage);
      
      return () => {
        window.removeEventListener('message', handleYouTubeMessage);
      };
    }
  }, [enableAnalytics, youtubeId, title, analyticsData]);
  
  if (!youtubeId) {
    console.warn('YouTubePlayer: Invalid YouTube URL provided:', videoUrl);
    return null;
  }

  // Build the embed URL with parameters
  const embedUrl = new URL(`https://www.youtube.com/embed/${youtubeId}`);
  
  // Add parameters
  const params = new URLSearchParams();
  
  if (autoplay) {
    params.set('autoplay', '1');
  }
  
  if (shouldMute) {
    params.set('mute', '1');
  }
  
  if (loop) {
    params.set('loop', '1');
    params.set('playlist', youtubeId); // Required for loop to work
  }
  
  if (!controls) {
    params.set('controls', '0');
  }
  
  if (!allowPictureInPicture) {
    params.set('pip', '0');
  }
  
  // Additional parameters for better experience
  params.set('rel', '0'); // Don't show related videos
  params.set('modestbranding', '1'); // Minimal YouTube branding
  params.set('fs', '1'); // Allow fullscreen
  
  embedUrl.search = params.toString();

  return (
    <div className={className}>
      <AspectRatio ratio={aspectRatio}>
        <iframe
          ref={iframeRef}
          src={embedUrl.toString()}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
          style={{ background: "black" }}
          title={title}
        />
      </AspectRatio>
    </div>
  );
};

export default YouTubePlayer;

