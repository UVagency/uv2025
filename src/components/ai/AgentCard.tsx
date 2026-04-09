import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bot, Cpu, Zap, ArrowRight } from 'lucide-react';

interface AgentCardProps {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  accentColor?: string;
  icon?: 'bot' | 'cpu' | 'zap';
  status?: 'active' | 'learning';
  delay?: number;
}

const iconMap = {
  bot: Bot,
  cpu: Cpu,
  zap: Zap,
};

const AgentCard: React.FC<AgentCardProps> = ({
  name,
  subtitle,
  description,
  features,
  accentColor = 'portfolio-accent',
  icon = 'bot',
  status = 'active',
  delay = 0,
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';
  const IconComponent = iconMap[icon];

  return (
    <div
      className="group relative rounded-2xl border border-portfolio-divider/30 bg-portfolio-bg p-6 md:p-8 transition-all duration-500 hover:border-portfolio-accent/40 hover:shadow-lg hover:shadow-portfolio-accent/5 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Status Indicator */}
      <div className="absolute top-5 right-5 flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400 animate-pulse'}`} />
        <span className="text-xs text-portfolio-text/50 font-medium uppercase tracking-wide">
          {status === 'active' 
            ? (lang === 'es' ? 'Activo' : 'Active') 
            : (lang === 'es' ? 'Aprendiendo' : 'Learning')}
        </span>
      </div>

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl bg-${accentColor}/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className={`w-6 h-6 text-${accentColor}`} />
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-bold text-portfolio-text mb-1">{name}</h3>
      <p className="text-sm text-portfolio-accent font-medium mb-3">{subtitle}</p>
      <p className="text-sm md:text-base text-portfolio-text/70 leading-relaxed mb-5">{description}</p>

      {/* Features */}
      <div className="space-y-2">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-portfolio-text/60">
            <ArrowRight className="w-3.5 h-3.5 text-portfolio-accent flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentCard;
