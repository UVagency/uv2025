import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ShieldCheck, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import Footer from '../components/Footer';

const Schedule = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [isVerified, setIsVerified] = useState(false);

    const handleClose = () => {
        navigate('/');
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        let timeoutId: NodeJS.Timeout | undefined;

        if (isVerified) {
            // Only load script after human verification
            timeoutId = setTimeout(() => {
                const existingScript = document.querySelector('script[src="https://static.zcal.co/embed/v1/embed.js"]');
                if (existingScript) {
                    existingScript.remove();
                }

                const script = document.createElement('script');
                script.src = "https://static.zcal.co/embed/v1/embed.js";
                script.async = true;
                script.type = "text/javascript";
                document.body.appendChild(script);
            }, 300);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [isVerified]);

    return (
        <div className="min-h-screen bg-portfolio-bg">
            <SEO
                title={t('schedule.metaTitle')}
                description={t('schedule.metaDesc')}
                pageType="contact"
            />
            <div className="fixed inset-0 z-50 bg-portfolio-bg overflow-y-auto">
                <div className="w-full mx-auto pt-8 pb-16">
                    <div className="max-w-[95%] sm:max-w-[90%] mx-auto">
                        {/* Header Section */}
                        <div className="border-b border-portfolio-divider pb-4 sm:pb-6 mb-6 sm:mb-10">
                            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                                <button
                                    onClick={handleClose}
                                    aria-label="Close"
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-transparent border border-portfolio-text flex items-center justify-center text-portfolio-text hover:bg-portfolio-text hover:text-portfolio-bg transition-colors"
                                >
                                    <X size={16} className="sm:w-5 sm:h-5" />
                                </button>

                                <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-portfolio-text tracking-[-0.02em] uppercase">
                                    {t('schedule.title')}
                                </h1>

                                <span className="project-year-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 rounded-full bg-portfolio-tag-bg text-portfolio-tag-text lowercase">
                                    {t('schedule.discoveryCall')}
                                </span>
                            </div>

                            <p className="text-base sm:text-2xl md:text-4xl text-portfolio-text/90 font-light leading-tight mt-3 sm:mt-6">
                                {t('schedule.tagline')}
                            </p>
                        </div>

                        {/* Bot Prevention Gate / Widget Container */}
                        <div className="bg-white rounded-2xl p-4 md:p-8 min-h-[700px] flex items-center justify-center border border-portfolio-divider shadow-lg overflow-hidden mb-16 relative">
                            {!isVerified ? (
                                <div className="text-center max-w-md animate-fade-in px-4">
                                    <div className="mb-6 flex justify-center">
                                        <div className="w-20 h-20 bg-portfolio-bg rounded-full flex items-center justify-center text-portfolio-highlight border border-portfolio-divider">
                                            <ShieldCheck size={40} />
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold text-portfolio-text mb-4 uppercase tracking-tighter">
                                        {t('schedule.securityCheck')}
                                    </h2>
                                    <p className="text-portfolio-text-secondary mb-8 font-light text-lg">
                                        {t('schedule.securityDesc')}
                                    </p>
                                    <button
                                        onClick={() => setIsVerified(true)}
                                        className="group bg-portfolio-about-bg text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-portfolio-highlight transition-all hover:scale-105 active:scale-95"
                                    >
                                        {t('schedule.iAmHuman')}
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            ) : (
                                <div className="zcal-inline-widget w-full h-full min-h-[600px] animate-fade-in">
                                    <a href="https://zcal.co/i/X2iTReqU" className="text-portfolio-highlight hover:underline text-lg">
                                        {t('schedule.widgetLink')}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Schedule;
