import { useEffect, useRef } from 'react';
import { trackFormInteraction } from '@/lib/analytics';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      trackFormInteraction(formRef.current);
    }
  }, []);

  return (
    <form ref={formRef} className="contact-form">
      {/* ... existing form content ... */}
    </form>
  );
};

export default ContactForm; 