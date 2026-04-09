import React from 'react';
import {
  Shield,
  Server,
  HardDrive,
  Globe,
  Clock,
  Lock,
  RefreshCw,
  Activity,
  Cloud,
} from 'lucide-react';

interface InfraFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat?: string;
}

interface InfrastructureGridProps {
  features: InfraFeature[];
}

const defaultIcons: Record<string, React.FC<{ className?: string }>> = {
  shield: Shield,
  server: Server,
  hardDrive: HardDrive,
  globe: Globe,
  clock: Clock,
  lock: Lock,
  refreshCw: RefreshCw,
  activity: Activity,
  cloud: Cloud,
};

const InfrastructureGrid: React.FC<InfrastructureGridProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="group relative rounded-xl border border-portfolio-divider/40 bg-white/80 shadow-sm p-5 md:p-6 transition-all duration-300 hover:border-portfolio-accent/30 hover:shadow-md"
          style={{ animationDelay: `${idx * 80}ms` }}
        >
          {/* Stat Badge */}
          {feature.stat && (
            <div className="absolute top-4 right-4">
              <span className="text-xs font-bold text-portfolio-accent bg-portfolio-accent/10 px-2.5 py-1 rounded-full">
                {feature.stat}
              </span>
            </div>
          )}

          {/* Icon */}
          <div className="w-10 h-10 rounded-lg bg-portfolio-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            {feature.icon}
          </div>

          {/* Content */}
          <h4 className="font-semibold text-portfolio-text text-sm md:text-base mb-1.5">
            {feature.title}
          </h4>
          <p className="text-xs md:text-sm text-portfolio-text/60 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InfrastructureGrid;
export { defaultIcons };
export type { InfraFeature };
