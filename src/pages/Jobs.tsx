import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';
import { CompanyVideo, CompanyValues } from '../components/lazy';
import { useNavigation } from '../hooks/useNavigation';
import { jobsData, Job } from '../data/jobsData';
import { InteractiveTilt } from '../components/ui/InteractiveTilt';

// Loading component for lazy-loaded sections
const SectionLoading = () => (
    <div className="animate-pulse">
        <div className="h-8 bg-portfolio-text/10 rounded w-1/3 mb-4"></div>
        <div className="space-y-3">
            <div className="h-4 bg-portfolio-text/10 rounded w-3/4"></div>
            <div className="h-4 bg-portfolio-text/10 rounded w-5/6"></div>
            <div className="h-4 bg-portfolio-text/10 rounded w-2/3"></div>
        </div>
    </div>
);

const Jobs = () => {
    const navigate = useNavigate();
    const { toggleOurCompany } = useNavigation();
    const { t } = useTranslation();

    const handleClose = () => {
        toggleOurCompany();
        navigate('/');
    };

    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Get translated values from i18n
    const values = t('jobs.values', { returnObjects: true }) as Array<{ name: string; description: string }>;
    const categories = t('jobs.categories', { returnObjects: true }) as string[];

    return (
        <div className="min-h-screen bg-portfolio-bg">
            <SEO
                title={t('jobs.pageTitle')}
                description={t('jobs.metaDescription')}
                pageType="company"
            />
            <div className="fixed inset-0 z-50 bg-portfolio-bg overflow-y-auto">
                <div className="w-full mx-auto pt-8 pb-16">
                    {/* Header Section */}
                    <div className="max-w-[95%] sm:max-w-[90%] mx-auto">
                        <div className="border-b border-portfolio-divider pb-4 sm:pb-6 mb-4 sm:mb-8">
                            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                                <button
                                    onClick={handleClose}
                                    aria-label="Close"
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-transparent border border-portfolio-text flex items-center justify-center text-portfolio-text hover:bg-portfolio-text hover:text-portfolio-bg transition-colors"
                                >
                                    <X size={16} className="sm:w-5 sm:h-5" />
                                </button>

                                <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-portfolio-text tracking-[-0.02em]">{t('jobs.workWithUs')}</h1>

                                <span className="project-year-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 rounded-full bg-portfolio-tag-bg text-portfolio-tag-text">
                                    {t('jobs.year')}
                                </span>

                                {categories.map((category) => (
                                    <span key={category} className="project-category-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 border rounded-full">
                                        {category}
                                    </span>
                                ))}
                            </div>

                            <p className="text-base sm:text-2xl md:text-4xl text-portfolio-text/90 font-light leading-tight mt-3 sm:mt-6">
                                {t('jobs.tagline')}
                            </p>

                            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4">
                                <div className="text-portfolio-text/70 text-xs sm:text-base">
                                    <span className="font-semibold">{t('jobs.type')}</span> {t('jobs.client')}
                                </div>
                            </div>
                        </div>

                        {/* Video Section */}
                        <Suspense fallback={<SectionLoading />}>
                            <CompanyVideo videoUrl="https://vimeo.com/1096947347" />
                        </Suspense>

                        {/* Job Listings Section */}
                        <div className="mb-12">
                            <div className="flex items-center mb-8">
                                <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mr-2">{t('jobs.openPositions')}</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {jobsData.map((job) => (
                                    <InteractiveTilt key={job.id} className="rounded-xl">
                                        <div className="bg-portfolio-bg/80 border border-portfolio-divider rounded-lg p-6 sm:p-8 shadow-md h-full flex flex-col group hover:border-portfolio-highlight transition-colors overflow-hidden">
                                            <h3 className="text-2xl sm:text-3xl font-bold text-portfolio-text mb-3 group-hover:text-portfolio-highlight transition-colors">
                                                {job.title}
                                            </h3>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="project-year-tag text-xs sm:text-sm px-3 py-1 rounded-full">
                                                    {t(`jobs.listings.${job.id}.type`, job.type)}
                                                </span>
                                                <span className="project-category-tag text-xs sm:text-sm px-3 py-1 rounded-full">
                                                    {t(`jobs.listings.${job.id}.location`, job.location)}
                                                </span>
                                            </div>

                                            <p className="text-base sm:text-lg text-portfolio-text/80 font-light mb-6 flex-grow">
                                                {t(`jobs.listings.${job.id}.description`, job.description)}
                                            </p>

                                            <a
                                                href={job.applyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block px-6 py-3 bg-portfolio-highlight text-portfolio-bg font-semibold rounded-full hover:bg-portfolio-text hover:text-portfolio-highlight transition-colors text-center uppercase"
                                            >
                                                {t('jobs.applyNow')}
                                            </a>
                                        </div>
                                    </InteractiveTilt>
                                ))}
                            </div>
                        </div>

                        {/* History Section */}
                        <div className="mb-6 sm:mb-12">
                            <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">{t('jobs.ourStory')}</h2>
                            <div className="text-lg sm:text-2xl text-portfolio-text/80 font-light whitespace-pre-line">
                                {t('jobs.history')}
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="mb-6 sm:mb-12">
                            <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">{t('jobs.aboutUs')}</h2>
                            <div className="text-lg sm:text-2xl text-portfolio-text/80 font-light whitespace-pre-line">
                                {t('jobs.description')}
                            </div>
                        </div>

                        {/* Values Section */}
                        <Suspense fallback={<SectionLoading />}>
                            <CompanyValues values={values} />
                        </Suspense>

                        {/* Services Section */}
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold text-portfolio-text mb-8">{t('jobs.ourServices')} <span role="img" aria-label="handshake">{t('jobs.ourServicesEmoji')}</span></h2>
                            <div className="text-2xl text-portfolio-text/80 font-light space-y-6">
                                <div>
                                    <p className="font-semibold inline-block mr-2">{t('jobs.services.brandBuilding.title')}</p>
                                    <p className="inline">{t('jobs.services.brandBuilding.description')}</p>
                                </div>
                                <div>
                                    <p className="font-semibold inline-block mr-2">{t('jobs.services.advertising.title')}</p>
                                    <p className="inline">{t('jobs.services.advertising.description')}</p>
                                </div>
                                <div>
                                    <p className="font-semibold inline-block mr-2">{t('jobs.services.exhibition.title')}</p>
                                    <p className="inline">{t('jobs.services.exhibition.description')}</p>
                                </div>
                                <div>
                                    <p className="font-semibold inline-block mr-2">{t('jobs.services.targetAudience.title')}</p>
                                    <p className="inline">{t('jobs.services.targetAudience.description')}</p>
                                </div>
                                <div>
                                    <p className="font-semibold inline-block mr-2">{t('jobs.services.socialStrategy.title')}</p>
                                    <p className="inline">{t('jobs.services.socialStrategy.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Jobs;
