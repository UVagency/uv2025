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
  CTA_CLICK: 'cta_click',
  PROJECT_CLICK: 'project_click',
  EMAIL_CLICK: 'email_click',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  VIDEO_PLAY: 'video_play',
  VIDEO_COMPLETE: 'video_complete'
} as const;

// Event parameters
export const GA_PARAMS = {
  // Common parameters
  PAGE_TITLE: 'page_title',
  PAGE_PATH: 'page_path',
  
  // Project parameters
  PROJECT_ID: 'project_id',
  PROJECT_NAME: 'project_name',
  
  // Video parameters
  VIDEO_ID: 'video_id',
  VIDEO_TITLE: 'video_title',
  
  // Form parameters
  FORM_ID: 'form_id',
  FORM_NAME: 'form_name'
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

// Video engagement tracking
export const trackVideoEngagement = (videoElement: HTMLVideoElement) => {
  const videoId = videoElement.id || 'unknown';
  const videoTitle = videoElement.title || 'unknown';

  videoElement.addEventListener('play', () => {
    trackEvent('VIDEO_PLAY', {
      [GA_PARAMS.VIDEO_ID]: videoId,
      [GA_PARAMS.VIDEO_TITLE]: videoTitle
    });
  });

  videoElement.addEventListener('ended', () => {
    trackEvent('VIDEO_COMPLETE', {
      [GA_PARAMS.VIDEO_ID]: videoId,
      [GA_PARAMS.VIDEO_TITLE]: videoTitle
    });
  });
};

// Form tracking
export const trackFormInteraction = (formElement: HTMLFormElement) => {
  const formId = formElement.id || 'unknown';
  const formName = formElement.name || 'unknown';

  formElement.addEventListener('submit', () => {
    trackEvent('CONTACT_FORM_SUBMIT', {
      [GA_PARAMS.FORM_ID]: formId,
      [GA_PARAMS.FORM_NAME]: formName
    });
  });
}; 