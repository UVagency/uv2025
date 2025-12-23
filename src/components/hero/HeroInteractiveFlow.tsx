import { useState, useEffect, useRef } from "react";
import OptimizedImage from "@/components/ui/optimized-image";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export const HeroInteractiveFlow = () => {
  const [showMainText, setShowMainText] = useState(false);
  const [showOneAgency, setShowOneAgency] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const timer = setTimeout(() => setShowMainText(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowOneAgency(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Initialize particles and canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    }));

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Move particles
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Mouse interaction - attract particles to mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx += (dx / distance) * force * 0.02;
          particle.vy += (dy / distance) * force * 0.02;
        }

        // Apply gentle friction
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Boundary check with wrap-around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
        ctx.fill();

        // Draw connections to nearby particles
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (120 - distance) / 120 * 0.3;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full flex flex-col justify-start pt-8 md:pt-10 min-h-[60vh]">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Flowing Gradient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-flow-1"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
            left: "10%",
            top: "20%",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20 animate-flow-2"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
            right: "15%",
            top: "40%",
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-20 animate-flow-3"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            left: "50%",
            bottom: "10%",
          }}
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-[98%] md:max-w-[98%] lg:max-w-[98%] xl:max-w-[98%] mx-auto transition-all duration-500 ${showMainText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-left">
          <div className="font-headline text-2xl md:text-4xl lg:text-5xl font-bold text-portfolio-text space-y-6">
            <p className="mb-6 hover:text-portfolio-accent transition-colors duration-300 cursor-default">
              You know that nothing replaces real human connection.
            </p>

            <p className="mb-6 hover:text-portfolio-accent transition-colors duration-300 cursor-default">
              Since 1999, we've helped brands find meaning in constant change, bringing reason and feeling back together.
            </p>

            <p className="mb-8 hover:text-portfolio-accent transition-colors duration-300 cursor-default">
              Modern is not about chasing new, it's about making new make sense.
            </p>

            <div className="flex items-center gap-3 mt-16 md:mt-20">
              <div className={`w-12 h-12 md:w-16 md:h-16 flex-shrink-0 transition-all duration-300 hover:scale-110 ${showOneAgency ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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
              <div
                className={`transition-all duration-300 ${showOneAgency ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <strong><span className="text-portfolio-accent">One agency, all in.</span></strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flow-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
          }
        }

        @keyframes flow-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-40px, 30px) scale(0.9);
          }
          66% {
            transform: translate(20px, -25px) scale(1.1);
          }
        }

        @keyframes flow-3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(25px, 35px) scale(1.05);
          }
          66% {
            transform: translate(-30px, -20px) scale(0.95);
          }
        }

        .animate-flow-1 {
          animation: flow-1 20s ease-in-out infinite;
        }

        .animate-flow-2 {
          animation: flow-2 25s ease-in-out infinite;
        }

        .animate-flow-3 {
          animation: flow-3 22s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
