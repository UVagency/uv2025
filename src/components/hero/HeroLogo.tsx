import { useRef, useEffect } from "react";
import { animate } from "animejs";
import OptimizedImage from "@/components/ui/optimized-image";

const random = (min: number, max: number) => Math.random() * (max - min) + min;

export const HeroLogo = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const shadowRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<any>(null);

    useEffect(() => {
        if (!logoRef.current || !shadowRef.current) return;

        // Default state: Micro drift and breathing
        // Animate logo and shadow together for drift
        const driftAnimation = animate([logoRef.current, shadowRef.current], {
            translateX: () => random(-5, 5),
            translateY: () => random(-5, 5),
            scale: [0.98, 1.02],
            easing: "inOutSine",
            duration: 4000,
            direction: "alternate",
            loop: true,
        });

        animationRef.current = driftAnimation;

        const handleMouseMove = (e: MouseEvent) => {
            if (!logoRef.current || !shadowRef.current) return;

            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            const moveX = deltaX * 0.05; // Move 5% towards cursor
            const moveY = deltaY * 0.05;

            // Calculate tilt based on cursor position relative to center
            const rotateY = (deltaX / (window.innerWidth / 2)) * 15;
            const rotateX = -(deltaY / (window.innerHeight / 2)) * 15;

            // Dynamic shadow offset: moves opposite to the object/light
            // We animate the separate shadow element's translation
            const shadowX = -moveX * 2;
            const shadowY = -moveY * 2 + 20; // +20 base offset

            // Pause default animation during interaction
            if (driftAnimation && driftAnimation.pause) driftAnimation.pause();

            // Animate Logo
            animate(logoRef.current, {
                translateX: moveX,
                translateY: moveY,
                rotateX: rotateX,
                rotateY: rotateY,
                easing: "outExpo",
                duration: 800,
            });

            // Animate Shadow separately
            animate(shadowRef.current, {
                translateX: shadowX,
                translateY: shadowY,
                opacity: 0.2, // Darker shadow when lifting
                scale: 0.9, // Slightly smaller shadow when lifting
                easing: "outExpo",
                duration: 800,
            });
        };

        const handleMouseLeave = () => {
            // Return to default drift
            animate(logoRef.current, {
                translateX: 0,
                translateY: 0,
                rotateX: 0,
                rotateY: 0,
                easing: 'outElastic(1, .8)',
                duration: 1200,
            });

            animate(shadowRef.current, {
                translateX: 0,
                translateY: 20, // Back to default offset
                opacity: 0.1, // Lighter default shadow
                scale: 1,
                easing: 'outElastic(1, .8)',
                duration: 1200,
            });

            // Restart drift after interaction ends
            setTimeout(() => {
                if (driftAnimation && driftAnimation.play) driftAnimation.play();
            }, 1200);
        }

        window.addEventListener("mousemove", handleMouseMove);
        // document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (driftAnimation && driftAnimation.pause) driftAnimation.pause();
        };
    }, []);

    return (
        <div ref={containerRef} className="w-32 h-32 md:w-56 md:h-56 relative pointer-events-none perspective-1000">
            {/* Shadow Element */}
            <div
                ref={shadowRef}
                className="absolute left-0 top-0 w-full h-full bg-black rounded-full blur-2xl opacity-10 translate-y-5"
                style={{ transform: 'translateY(20px)' }}
            />

            {/* Logo Element */}
            <div ref={logoRef} className="relative w-full h-full">
                <OptimizedImage
                    src="/images/uv_logo.webp"
                    alt="United Visions"
                    width={224}
                    height={224}
                    aspectRatio={1}
                    className="w-full h-full object-contain"
                    priority={true}
                />
            </div>
        </div>
    );
};
