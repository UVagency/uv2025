import { useState, useEffect, useRef } from 'react';

interface HeroVideoBackgroundProps {
  videoUrl: string;
}

const getVimeoId = (url: string): string | null => {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
};

export const HeroVideoBackground = ({ videoUrl }: HeroVideoBackgroundProps) => {
  const [isReady, setIsReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const vimeoId = getVimeoId(videoUrl);

  useEffect(() => {
    if (!vimeoId) return;

    // Listen for Vimeo player messages to detect when video is playing
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://player.vimeo.com') return;

      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        // Video is ready when it starts playing or is buffered
        if (data.event === 'ready' || data.event === 'play' || data.event === 'bufferend') {
          // Small delay to ensure smooth transition
          setTimeout(() => setIsReady(true), 500);
        }
      } catch {
        // Ignore parsing errors
      }
    };

    window.addEventListener('message', handleMessage);

    // Fallback: show video after a reasonable time even if messages don't work
    const fallbackTimer = setTimeout(() => setIsReady(true), 4000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(fallbackTimer);
    };
  }, [vimeoId]);

  if (!vimeoId) return null;

  // Build Vimeo background embed URL
  // background=1 enables: autoplay, muted, loop, no controls
  const embedUrl = new URL(`https://player.vimeo.com/video/${vimeoId}`);
  embedUrl.searchParams.set('background', '1');
  embedUrl.searchParams.set('autoplay', '1');
  embedUrl.searchParams.set('muted', '1');
  embedUrl.searchParams.set('loop', '1');
  embedUrl.searchParams.set('autopause', '0');
  embedUrl.searchParams.set('quality', 'auto');
  embedUrl.searchParams.set('dnt', '1'); // Do not track

  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-[10000ms] ease-in-out ${
        isReady ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Gradient overlay for text readability - darker on left where text is */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(245, 246, 232, 0.85) 0%, rgba(245, 246, 232, 0.6) 40%, rgba(245, 246, 232, 0.3) 70%, transparent 100%)'
        }}
      />

      {/* Video container with cover behavior */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          ref={iframeRef}
          src={embedUrl.toString()}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
          style={{
            aspectRatio: '16/9',
            // Ensure video covers the entire container
            width: 'max(100%, 177.78vh)', // 16:9 ratio = 177.78%
            height: 'max(100%, 56.25vw)', // 9:16 ratio = 56.25%
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="UV Agency Showreel"
        />
      </div>
    </div>
  );
};
