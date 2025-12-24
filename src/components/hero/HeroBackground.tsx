import { useRef, useEffect } from 'react';

export const HeroBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;
        let mouseX = -1000;
        let mouseY = -1000;

        // Configuration
        const spacing = 40; // Space between dots
        const dotBaseSize = 1.5;
        const influenceRadius = 150;
        const dotColor = 'rgba(0, 0, 0, 0.3)'; // Very subtle dark dots

        // Dot Interface
        interface Dot {
            x: number;
            y: number;
            baseX: number;
            baseY: number;
            vx: number;
            vy: number;
        }

        let dots: Dot[] = [];

        const init = () => {
            width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
            height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;

            dots = [];
            // Create grid of dots
            for (let x = 0; x < width; x += spacing) {
                for (let y = 0; y < height; y += spacing) {
                    // Add some offset for every other row for honeycomb effect? Or simple grid. 
                    // Simple grid matches the "structured" vibe better.
                    dots.push({
                        x: x,
                        y: y,
                        baseX: x,
                        baseY: y,
                        vx: 0,
                        vy: 0,
                    });
                }
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            dots.forEach(dot => {
                // Physics logic
                const dx = mouseX - dot.x;
                const dy = mouseY - dot.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Interaction: Repel or Attract? 
                // "Connector" implies attraction, but "Order" implies staying in place.
                // Let's do a gentle attraction (magnetic) like the logo.
                // But subtle.

                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;

                // Max distance to start force
                const maxDistance = 200;
                let force = 0;

                if (distance < maxDistance) {
                    force = (maxDistance - distance) / maxDistance;
                    // Negative force = Repel, Positive = Attract
                    // Let's Attract slightly:
                    const attractionStrength = 5;
                    dot.vx += forceDirectionX * force * attractionStrength * 0.1;
                    dot.vy += forceDirectionY * force * attractionStrength * 0.1;
                }

                // Spring back to base
                const springFactor = 0.05;
                const dxBase = dot.baseX - dot.x;
                const dyBase = dot.baseY - dot.y;

                dot.vx += dxBase * springFactor;
                dot.vy += dyBase * springFactor;

                // Friction
                dot.vx *= 0.9;
                dot.vy *= 0.9;

                // Apply velocity
                dot.x += dot.vx;
                dot.y += dot.vy;

                // Visuals
                // Draw Dot
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dotBaseSize, 0, Math.PI * 2);
                ctx.fillStyle = dotColor;
                ctx.fill();

                // Optional: Draw connections if very close to mouse?
                // Let's keep it minimal as per "Minimal + Premium". Just the grid moving is hypnotic enough.
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        // Initialize
        init();
        window.addEventListener('resize', init);
        window.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave); // Canvas specific leave? usually window is better if canvas takes full screen

        // Start loop
        draw();

        return () => {
            window.removeEventListener('resize', init);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-60 z-0 mix-blend-multiply"
        />
    );
};
