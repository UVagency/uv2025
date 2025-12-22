import { useEffect, useRef } from "react";
import anime from "animejs";
import OptimizedImage from "@/components/ui/optimized-image";

export const HeroContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const paragraph3Ref = useRef<HTMLParagraphElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial states with more dramatic starting positions
    if (paragraph1Ref.current) {
      anime.set(paragraph1Ref.current, {
        opacity: 0,
        translateY: 60,
      });
    }
    if (paragraph2Ref.current) {
      anime.set(paragraph2Ref.current, {
        opacity: 0,
        translateY: 60,
      });
    }
    if (paragraph3Ref.current) {
      anime.set(paragraph3Ref.current, {
        opacity: 0,
        translateY: 60,
      });
    }
    if (logoContainerRef.current) {
      anime.set(logoContainerRef.current, {
        opacity: 0,
        scale: 0.3,
        rotate: -180,
      });
    }
    if (logoTextRef.current) {
      anime.set(logoTextRef.current, {
        opacity: 0,
        translateX: -50,
      });
    }

    // Create timeline for staggered animations with slower, more dramatic timing
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
    });

    // Animate paragraphs in sequence with slower, more visible animations
    timeline
      .add({
        targets: paragraph1Ref.current,
        opacity: [0, 1],
        translateY: [60, 0],
        duration: 1800,
        delay: 300,
        easing: 'easeOutCubic',
      })
      .add({
        targets: paragraph2Ref.current,
        opacity: [0, 1],
        translateY: [60, 0],
        duration: 1800,
        easing: 'easeOutCubic',
      }, '-=1200') // More overlap for continuous flow
      .add({
        targets: paragraph3Ref.current,
        opacity: [0, 1],
        translateY: [60, 0],
        duration: 1800,
        easing: 'easeOutCubic',
      }, '-=1200')
      .add({
        targets: logoContainerRef.current,
        opacity: [0, 1],
        scale: [0.3, 1],
        rotate: [-180, 0],
        duration: 1400,
        easing: 'easeOutElastic(1, .6)',
      }, '-=600')
      .add({
        targets: logoTextRef.current,
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 1000,
        easing: 'easeOutExpo',
      }, '-=800');

    return () => {
      timeline.pause();
    };
  }, []);

  return (
    <div className="w-full flex flex-col justify-start pt-8 md:pt-10" ref={containerRef}>
      <div className="max-w-[98%] md:max-w-[98%] lg:max-w-[98%] xl:max-w-[98%] mx-auto">
        <div className="text-left">
          <div className="font-headline text-2xl md:text-4xl lg:text-5xl font-bold text-portfolio-text space-y-6">
            <p ref={paragraph1Ref} className="mb-6">
              You know that nothing replaces real human connection.
            </p>

            <p ref={paragraph2Ref} className="mb-6">
              Since 1999, we've helped brands find meaning in constant change, bringing reason and feeling back together.
            </p>

            <p ref={paragraph3Ref} className="mb-8">
              Modern is not about chasing new, it's about making new make sense.
            </p>

            <div className="flex items-center gap-3 mt-16 md:mt-20">
              <div
                ref={logoContainerRef}
                className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0"
              >
                <OptimizedImage
                  src="/images/uv_logo.webp"
                  alt="United Visions"
                  width={64}
                  height={64}
                  aspectRatio={1}
                  className="w-full h-full object-cover rounded-full"
                  wrapperClassName="rounded-full overflow-hidden"
                  priority={true}
                />
              </div>
              <div ref={logoTextRef}>
                <strong><span className="text-portfolio-accent">One agency, all in.</span></strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
