import { useRef, useEffect, ReactNode } from "react";
import { animate } from "animejs";

interface InteractiveTiltProps {
    children: ReactNode;
    className?: string;
    containerClassName?: string;
}

const random = (min: number, max: number) => Math.random() * (max - min) + min;

export const InteractiveTilt = ({
    children,
    className = "",
    containerClassName = "",
}: InteractiveTiltProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const shadowRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<any>(null);

    useEffect(() => {
        if (!contentRef.current || !shadowRef.current) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!contentRef.current || !shadowRef.current || !containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const isInside = (
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom
            );

            if (!isInside) return;

            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            const moveX = deltaX * 0.03; // Slightly reduced for larger cards
            const moveY = deltaY * 0.03;

            const rotateY = (deltaX / (rect.width / 2)) * 7; // Slightly reduced
            const rotateX = -(deltaY / (rect.height / 2)) * 7;

            const shadowX = -moveX * 2;
            const shadowY = -moveY * 2 + 20;

            animate(contentRef.current, {
                translateX: moveX,
                translateY: moveY,
                rotateX: rotateX,
                rotateY: rotateY,
                easing: "outExpo",
                duration: 800,
            });

            animate(shadowRef.current, {
                translateX: shadowX,
                translateY: shadowY,
                opacity: 0.2,
                scale: 0.9,
                easing: "outExpo",
                duration: 800,
            });
        };

        const handleMouseLeave = () => {
            if (!contentRef.current || !shadowRef.current) return;

            animate(contentRef.current, {
                translateX: 0,
                translateY: 0,
                rotateX: 0,
                rotateY: 0,
                easing: 'outElastic(1, .8)',
                duration: 1200,
            });

            animate(shadowRef.current, {
                translateX: 0,
                translateY: 20,
                opacity: 0.1,
                scale: 1,
                easing: 'outElastic(1, .8)',
                duration: 1200,
            });
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (container) {
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className={`relative perspective-1000 group/tilt ${containerClassName}`}>
            {/* Shadow Element */}
            <div
                ref={shadowRef}
                className="absolute inset-4 bg-black rounded-xl blur-2xl opacity-10"
                style={{ 
                    transform: 'translateY(20px) translateZ(0)',
                    WebkitTransform: 'translateY(20px) translateZ(0)',
                    willChange: 'transform, opacity',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden'
                }}
            />

            {/* Content Element */}
            <div 
                ref={contentRef} 
                className={`relative w-full h-full ${className}`}
                style={{
                    willChange: 'transform',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                    WebkitTransform: 'translateZ(0)'
                }}
            >
                {children}
            </div>
        </div>
    );
};
