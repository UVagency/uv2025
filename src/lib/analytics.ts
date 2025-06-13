// Google Analytics 4 Event Tracking

// Type declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js',
      action: string,
      params?: Record<string, any>
    ) => void;
  }
}

// Event names
export const GA_EVENTS = {
  // Page Engagement
  PAGE_VIEW: 'page_view',
  SCROLL_DEPTH: 'scroll_depth',
  VIDEO_ENGAGEMENT: 'video_engagement',
  
  // Navigation
  MENU_CLICK: 'menu_click',
  LANGUAGE_SWITCH: 'language_switch',
  CATEGORY_FILTER: 'category_filter',
  SEARCH: 'search',
  
  // Project Interaction
  PROJECT_CLICK: 'project_click',
  GALLERY_IMAGE_VIEW: 'gallery_image_view',
  PROJECT_VIDEO_PLAY: 'project_video_play',
  PROJECT_SHARE: 'project_share',
  
  // Contact & Conversion
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  CONTACT_FORM_FIELD: 'contact_form_field',
  EMAIL_CLICK: 'email_click',
  SOCIAL_CLICK: 'social_click',
  CTA_CLICK: 'cta_click',
  
  // User Journey
  SECTION_NAVIGATION: 'section_navigation',
  PROJECT_DETAIL_VIEW: 'project_detail_view',
  RETURN_VISIT: 'return_visit',
  
  // Technical
  ERROR: 'error',
  PAGE_LOAD: 'page_load',
  NOT_FOUND: 'not_found',
  FORM_ERROR: 'form_error'
} as const;

// Event parameters
export const GA_PARAMS = {
  // Common parameters
  PAGE_TITLE: 'page_title',
  PAGE_PATH: 'page_path',
  PAGE_LOCATION: 'page_location',
  
  // Project parameters
  PROJECT_ID: 'project_id',
  PROJECT_NAME: 'project_name',
  PROJECT_CATEGORY: 'project_category',
  PROJECT_CLIENT: 'project_client',
  
  // Video parameters
  VIDEO_ID: 'video_id',
  VIDEO_TITLE: 'video_title',
  VIDEO_DURATION: 'video_duration',
  VIDEO_PERCENTAGE: 'video_percentage',
  
  // Form parameters
  FORM_ID: 'form_id',
  FORM_NAME: 'form_name',
  FIELD_NAME: 'field_name',
  FIELD_TYPE: 'field_type',
  
  // Error parameters
  ERROR_MESSAGE: 'error_message',
  ERROR_CODE: 'error_code',
  ERROR_TYPE: 'error_type'
} as const;

// Analytics event tracking function
export const trackEvent = (
  eventName: keyof typeof GA_EVENTS,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', GA_EVENTS[eventName], params);
  }
};

// Scroll depth tracking
export const trackScrollDepth = () => {
  const scrollThresholds = [25, 50, 75, 100];
  let trackedThresholds = new Set<number>();

  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    scrollThresholds.forEach(threshold => {
      if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
        trackedThresholds.add(threshold);
        trackEvent('SCROLL_DEPTH', {
          [GA_PARAMS.PAGE_TITLE]: document.title,
          [GA_PARAMS.PAGE_PATH]: window.location.pathname,
          scroll_depth: threshold
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};

// Video engagement tracking
export const trackVideoEngagement = (videoElement: HTMLVideoElement) => {
  const videoId = videoElement.id || 'unknown';
  const videoTitle = videoElement.title || 'unknown';

  const trackVideoEvent = (event: string, percentage?: number) => {
    trackEvent('VIDEO_ENGAGEMENT', {
      [GA_PARAMS.VIDEO_ID]: videoId,
      [GA_PARAMS.VIDEO_TITLE]: videoTitle,
      [GA_PARAMS.VIDEO_DURATION]: videoElement.duration,
      event_type: event,
      ...(percentage && { [GA_PARAMS.VIDEO_PERCENTAGE]: percentage })
    });
  };

  videoElement.addEventListener('play', () => trackVideoEvent('play'));
  videoElement.addEventListener('pause', () => trackVideoEvent('pause'));
  videoElement.addEventListener('ended', () => trackVideoEvent('complete'));

  // Track progress at 25%, 50%, 75%
  videoElement.addEventListener('timeupdate', () => {
    const percentage = Math.round((videoElement.currentTime / videoElement.duration) * 100);
    if ([25, 50, 75].includes(percentage)) {
      trackVideoEvent('progress', percentage);
    }
  });
};

// Form tracking
export const trackFormInteraction = (formElement: HTMLFormElement) => {
  const formId = formElement.id || 'unknown';
  const formName = formElement.name || 'unknown';

  formElement.addEventListener('submit', (e) => {
    trackEvent('CONTACT_FORM_SUBMIT', {
      [GA_PARAMS.FORM_ID]: formId,
      [GA_PARAMS.FORM_NAME]: formName
    });
  });

  formElement.querySelectorAll('input, textarea, select').forEach((field) => {
    field.addEventListener('focus', () => {
      trackEvent('CONTACT_FORM_FIELD', {
        [GA_PARAMS.FORM_ID]: formId,
        [GA_PARAMS.FORM_NAME]: formName,
        [GA_PARAMS.FIELD_NAME]: (field as HTMLInputElement).name,
        [GA_PARAMS.FIELD_TYPE]: (field as HTMLInputElement).type
      });
    });
  });
};

// Error tracking
export const trackError = (error: Error, errorType: string) => {
  trackEvent('ERROR', {
    [GA_PARAMS.ERROR_MESSAGE]: error.message,
    [GA_PARAMS.ERROR_TYPE]: errorType,
    [GA_PARAMS.PAGE_TITLE]: document.title,
    [GA_PARAMS.PAGE_PATH]: window.location.pathname
  });
};

// Initialize analytics tracking
export const initAnalytics = () => {
  // Track page views
  trackEvent('PAGE_VIEW', {
    [GA_PARAMS.PAGE_TITLE]: document.title,
    [GA_PARAMS.PAGE_PATH]: window.location.pathname,
    [GA_PARAMS.PAGE_LOCATION]: window.location.href
  });

  // Initialize scroll depth tracking
  trackScrollDepth();

  // Track 404 errors
  if (document.title.includes('404')) {
    trackEvent('NOT_FOUND', {
      [GA_PARAMS.PAGE_PATH]: window.location.pathname
    });
  }
}; 