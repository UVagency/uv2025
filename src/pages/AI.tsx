import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { X, Shield, Server, HardDrive, Globe, Clock, Lock, RefreshCw, Activity, Cloud, Bot, Cpu, Zap } from 'lucide-react';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';
import { Button } from "@/components/ui/button";
import AgentCard from '../components/ai/AgentCard';
import InfrastructureGrid from '../components/ai/InfrastructureGrid';
import UviChat from '../components/ai/UviChat';
import type { InfraFeature } from '../components/ai/InfrastructureGrid';

const AI = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';

  const handleClose = useCallback(() => {
    navigate('/');
  }, [navigate]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  const infraFeatures: InfraFeature[] = [
    {
      icon: <Server className="w-5 h-5 text-portfolio-accent" />,
      title: t('ai.infra.servers.title'),
      description: t('ai.infra.servers.desc'),
      stat: 'Vermetal',
    },
    {
      icon: <HardDrive className="w-5 h-5 text-portfolio-accent" />,
      title: t('ai.infra.vps.title'),
      description: t('ai.infra.vps.desc'),
      stat: t('ai.infra.vps.stat'),
    },
    {
      icon: <Shield className="w-5 h-5 text-portfolio-accent" />,
      title: t('ai.infra.security.title'),
      description: t('ai.infra.security.desc'),
    },
    {
      icon: <Clock className="w-5 h-5 text-portfolio-accent" />,
      title: t('ai.infra.uptime.title'),
      description: t('ai.infra.uptime.desc'),
      stat: '99.9%',
    },
    {
      icon: <Lock className="w-5 h-5 text-portfolio-accent" />,
      title: t('ai.infra.encryption.title'),
      description: t('ai.infra.encryption.desc'),
      stat: 'AES-256',
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-portfolio-accent" />,
      title: t('ai.infra.backup.title'),
      description: t('ai.infra.backup.desc'),
      stat: '30d',
    },
    {
      icon: <Activity className="w-5 h-5 text-portfolio-accent" />,
      title: t('ai.infra.monitoring.title'),
      description: t('ai.infra.monitoring.desc'),
      stat: '24/7',
    },
    {
      icon: <Globe className="w-5 h-5 text-portfolio-accent" />,
      title: t('ai.infra.cdn.title'),
      description: t('ai.infra.cdn.desc'),
    },
    {
      icon: <Cloud className="w-5 h-5 text-portfolio-accent" />,
      title: t('ai.infra.compliance.title'),
      description: t('ai.infra.compliance.desc'),
      stat: 'SOC 2',
    },
  ];

  return (
    <div className="min-h-screen bg-portfolio-bg">
      <SEO
        title={t('ai.pageTitle')}
        description={t('ai.metaDescription')}
        url="/ai"
        pageType="company"
        type="website"
      />
      <Helmet>
        <meta property="og:url" content="https://www.uv.agency/ai" />
        <link rel="canonical" href="https://www.uv.agency/ai" />
      </Helmet>

      <div className="fixed inset-0 z-50 bg-portfolio-bg overflow-y-auto">
        <div className="w-full mx-auto">
          {/* ============ HERO SECTION — Dark ============ */}
          <div className="relative bg-portfolio-about-bg overflow-hidden">
            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(107,216,215,0.3) 1px, transparent 0)`,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            {/* Gradient orbs — decorative */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-portfolio-accent/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-portfolio-accent/3 rounded-full blur-[120px]" />

            <div className="relative max-w-[95%] sm:max-w-[90%] mx-auto pt-8 pb-16 md:pb-24">
              {/* Close + Title */}
              <div className="border-b border-white/10 pb-4 sm:pb-6 mb-8 sm:mb-12">
                <div className="w-full flex flex-col items-start text-left">
                  <div className="inline-flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-0">
                    <button
                      onClick={handleClose}
                      aria-label="Close"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-transparent border border-white/30 flex items-center justify-center text-white/70 hover:bg-white hover:text-portfolio-about-bg transition-colors"
                    >
                      <X size={16} className="sm:w-5 sm:h-5" />
                    </button>
                    <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-white leading-tight break-words max-w-[90vw] sm:max-w-full tracking-[-0.02em]">
                      United Intelligence
                    </h1>
                    <span className="text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 rounded-full bg-portfolio-accent text-white font-medium">
                      AI
                    </span>
                    <span className="text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 border border-white/20 rounded-full text-white/70">
                      {t('ai.tagTech')}
                    </span>
                    <span className="text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 border border-white/20 rounded-full text-white/70">
                      {t('ai.tagInfra')}
                    </span>
                  </div>
                  <p className="w-full max-w-[95vw] sm:max-w-full mx-auto text-base sm:text-2xl md:text-4xl text-white/80 font-light leading-tight mt-3 sm:mt-6 text-left">
                    {t('ai.heroTagline')}
                  </p>
                  <p className="mt-4 sm:mt-6 text-white/50 text-xs sm:text-base max-w-3xl">
                    {t('ai.heroDescription')}
                  </p>
                </div>
              </div>

              {/* UVI Chat */}
              <div className="max-w-2xl">
                <div className="mb-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">
                    {t('ai.meetUVI')}
                  </h2>
                  <p className="text-sm text-white/40">
                    {t('ai.meetUVIDesc')}
                  </p>
                </div>
                <UviChat />
              </div>
            </div>
          </div>

          {/* ============ AI AGENTS SECTION ============ */}
          <div className="max-w-[95%] sm:max-w-[90%] mx-auto py-16 md:py-24">
            <div className="mb-10 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-portfolio-text mb-4">
                {t('ai.agentsTitle')}
              </h2>
              <p className="text-base sm:text-lg text-portfolio-text/70 max-w-3xl leading-relaxed">
                {t('ai.agentsDescription')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <AgentCard
                name="UVI"
                subtitle={t('ai.agents.uvi.subtitle')}
                description={t('ai.agents.uvi.description')}
                features={(t('ai.agents.uvi.features', { returnObjects: true }) as string[])}
                icon="bot"
                status="active"
                delay={0}
              />
              <AgentCard
                name="UMI"
                subtitle={t('ai.agents.umi.subtitle')}
                description={t('ai.agents.umi.description')}
                features={(t('ai.agents.umi.features', { returnObjects: true }) as string[])}
                icon="cpu"
                status="active"
                delay={150}
              />
              <AgentCard
                name={t('ai.agents.custom.name')}
                subtitle={t('ai.agents.custom.subtitle')}
                description={t('ai.agents.custom.description')}
                features={(t('ai.agents.custom.features', { returnObjects: true }) as string[])}
                icon="zap"
                status="learning"
                delay={300}
              />
            </div>

            {/* UVI as a Service callout */}
            <div className="mt-10 md:mt-14 rounded-2xl border border-portfolio-accent/20 bg-portfolio-accent/5 p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-5 h-5 text-portfolio-accent" />
                    <span className="text-xs font-bold uppercase tracking-wider text-portfolio-accent">
                      {t('ai.uviService.badge')}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-portfolio-text mb-2">
                    {t('ai.uviService.title')}
                  </h3>
                  <p className="text-sm md:text-base text-portfolio-text/70 leading-relaxed">
                    {t('ai.uviService.description')}
                  </p>
                </div>
                <Button
                  variant="default"
                  className="bg-portfolio-accent text-white hover:bg-portfolio-accent/80 rounded-full px-8 py-3 text-sm sm:text-base font-medium whitespace-nowrap"
                  onClick={() => {
                    window.location.href = 'mailto:hello@uv.agency?subject=UVI%20as%20a%20Service';
                  }}
                >
                  {t('ai.uviService.cta')}
                </Button>
              </div>
            </div>
          </div>

          {/* ============ INFRASTRUCTURE SECTION ============ */}
          <div className="bg-portfolio-about-bg/[0.03] border-y border-portfolio-divider/10">
            <div className="max-w-[95%] sm:max-w-[90%] mx-auto py-16 md:py-24">
              <div className="grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] items-start">
                {/* Left: Title */}
                <div className="lg:sticky lg:top-24">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-portfolio-text leading-tight mb-4">
                    {t('ai.infraTitle')}
                  </h2>
                  <p className="text-base sm:text-lg text-portfolio-text/70 leading-relaxed mb-6">
                    {t('ai.infraDescription')}
                  </p>
                  <div className="hidden lg:flex flex-wrap gap-3">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-portfolio-accent/10 text-portfolio-accent">Vermetal</span>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-portfolio-accent/10 text-portfolio-accent">VPS</span>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-portfolio-accent/10 text-portfolio-accent">SOC 2</span>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-portfolio-accent/10 text-portfolio-accent">GDPR</span>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-portfolio-accent/10 text-portfolio-accent">99.9% SLA</span>
                  </div>
                </div>

                {/* Right: Grid */}
                <InfrastructureGrid features={infraFeatures} />
              </div>
            </div>
          </div>

          {/* ============ TECH STACK SECTION ============ */}
          <div className="max-w-[95%] sm:max-w-[90%] mx-auto py-16 md:py-24">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text leading-tight">
                  {t('ai.techTitle')}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 text-sm sm:text-base">
                {/* CI/CD */}
                <div>
                  <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                    CI/CD
                  </p>
                  <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                    <span>{t('ai.tech.cicd.automated')}</span>
                    <span>{t('ai.tech.cicd.testing')}</span>
                    <span>{t('ai.tech.cicd.rollback')}</span>
                  </p>
                </div>
                {/* Containers */}
                <div>
                  <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                    {t('ai.tech.containers.title')}
                  </p>
                  <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                    <span>{t('ai.tech.containers.orchestration')}</span>
                    <span>{t('ai.tech.containers.isolation')}</span>
                    <span>{t('ai.tech.containers.scaling')}</span>
                  </p>
                </div>
                {/* Observability */}
                <div>
                  <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                    {t('ai.tech.observability.title')}
                  </p>
                  <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                    <span>{t('ai.tech.observability.logging')}</span>
                    <span>{t('ai.tech.observability.metrics')}</span>
                    <span>{t('ai.tech.observability.tracing')}</span>
                  </p>
                </div>
                {/* Security */}
                <div>
                  <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                    {t('ai.tech.securityOps.title')}
                  </p>
                  <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                    <span>{t('ai.tech.securityOps.scanning')}</span>
                    <span>{t('ai.tech.securityOps.pentest')}</span>
                    <span>{t('ai.tech.securityOps.zeroTrust')}</span>
                  </p>
                </div>
                {/* IaC */}
                <div>
                  <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                    {t('ai.tech.iac.title')}
                  </p>
                  <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                    <span>{t('ai.tech.iac.reproducible')}</span>
                    <span>{t('ai.tech.iac.versioned')}</span>
                    <span>{t('ai.tech.iac.auditable')}</span>
                  </p>
                </div>
                {/* AI/ML */}
                <div>
                  <p className="uppercase tracking-[0.14em] text-portfolio-text font-semibold mb-1">
                    AI / ML
                  </p>
                  <p className="text-portfolio-text/80 flex flex-wrap gap-x-3 gap-y-1">
                    <span>{t('ai.tech.aiml.training')}</span>
                    <span>{t('ai.tech.aiml.inference')}</span>
                    <span>{t('ai.tech.aiml.finetuning')}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============ CTA SECTION ============ */}
          <div className="max-w-[95%] sm:max-w-[90%] mx-auto pb-16 md:pb-24">
            <section className="text-center bg-portfolio-accent/10 p-8 md:p-12 rounded-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">
                {t('ai.ctaTitle')}
              </h2>
              <p className="text-base sm:text-lg text-portfolio-text/80 max-w-2xl mx-auto mb-6">
                {t('ai.ctaDescription')}
              </p>
              <Button
                variant="default"
                className="bg-portfolio-accent text-white hover:bg-portfolio-accent/80 rounded-full px-8 py-3 text-sm sm:text-base font-medium"
                onClick={() => {
                  window.location.href = 'mailto:hello@uv.agency?subject=AI%20Services';
                }}
              >
                {t('ai.ctaCta')}
              </Button>
            </section>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AI;
