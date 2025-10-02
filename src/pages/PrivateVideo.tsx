import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';
import YouTubePlayer from '../components/ui/YouTubePlayer';
import { useNavigation } from '../hooks/useNavigation';
import AuthGuard from '../components/AuthGuard';

// Loading component for video section
const VideoLoading = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-portfolio-text/10 rounded w-1/3 mb-4"></div>
    <div className="aspect-video bg-portfolio-text/10 rounded-lg"></div>
  </div>
);

const PrivateVideo = () => {
  const navigate = useNavigate();
  const { toggleOurCompany } = useNavigation();
  
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

  // Video information
  const videoInfo = {
    title: "FALABELLA Fashion Live 2025",
    description: "Exclusive fashion event presentation",
      videoUrl: "https://www.youtube.com/watch?v=IjbJ2DNCSvU",
    year: "2025",
    category: "Fashion Event",
    client: "Falabella"
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-portfolio-bg">
        <SEO 
          title="FALABELLA Fashion Live 2025 | UV Agency"
          description="Exclusive fashion event presentation by UV Agency for Falabella."
          pageType="private"
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
                
                <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-portfolio-text">{videoInfo.title}</h1>
                
                <span className="project-year-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 rounded-full bg-portfolio-tag-bg text-portfolio-tag-text">
                  {videoInfo.year}
                </span>
                  
                <span className="project-category-tag text-xs sm:text-base px-3 sm:px-6 py-1 sm:py-2 border rounded-full">
                  {videoInfo.category}
                </span>
              </div>
              
              <p className="text-base sm:text-2xl md:text-4xl text-portfolio-text/90 font-light leading-tight mt-3 sm:mt-6">
                {videoInfo.description}
              </p>
              
            </div>

            {/* Video Section */}
            <Suspense fallback={<VideoLoading />}>
              <YouTubePlayer
                videoUrl={videoInfo.videoUrl}
                title={videoInfo.title}
                autoplay={false}
                controls={true}
                loop={false}
                className="mb-16 overflow-hidden rounded-lg bg-black"
                enableAnalytics={true}
                analyticsData={{
                  videoId: 'falabella-fashion-live-2025',
                  videoTitle: videoInfo.title
                }}
              />
            </Suspense>

            {/* Additional Information Section */}
            <div className="mb-6 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-portfolio-text mb-3 sm:mb-4">Event Details</h2>
              <div className="text-lg sm:text-2xl text-portfolio-text/80 font-light">
                <p className="mb-4">
                  💐¡Solo quedan horas! No te pierdas el Fashion Live de Falabella, el evento de moda más grande del año.💐
                </p>
                <p className="mb-4">
                  ✨ Descubre el line-up de marcas exclusivas que estarán presentes y conoce todos los horarios para no perderte nada.
                </p>
                <p>
                  🎥Conéctate al streaming y vive todas las sorpresas y premios que tenemos preparados para ti. ¡Quédate hasta el final!💚
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
    </AuthGuard>
  );
};

export default PrivateVideo;

