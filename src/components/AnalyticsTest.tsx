import { useEffect } from 'react';
import { trackEvent, GA_EVENTS } from '@/lib/analytics';

const AnalyticsTest = () => {
  useEffect(() => {
    // Test event when component mounts
    trackEvent('TEST_EVENT', {
      test_param: 'analytics_test',
      timestamp: new Date().toISOString()
    });
  }, []);

  const handleTestClick = () => {
    trackEvent('TEST_CLICK', {
      test_param: 'button_click',
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleTestClick}
        className="bg-portfolio-accent text-white px-4 py-2 rounded-full shadow-lg"
      >
        Test Analytics
      </button>
    </div>
  );
};

export default AnalyticsTest; 