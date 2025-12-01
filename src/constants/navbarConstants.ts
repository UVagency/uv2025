export const NAVBAR_CONSTANTS = {
  ANIMATION_DURATION: 500,
  SCROLL_DURATION: 1000,
  CLASSES: {
    INFO_OPEN: 'info-open',
    CONTACT_OPEN: 'contact-open',
    OUR_COMPANY_OPEN: 'our-company-open',
  },
  Z_INDEX: {
    NAVBAR: 50,
    CONTACT_SECTION: 40,
    OUR_COMPANY_SECTION: 40,
  },
} as const;

export const NAV_ITEMS = [
  { id: 'info', label: 'INFO' },
  { id: 'work', label: 'Work', href: '/#highlights' },
  { id: 'our-company', label: 'Our Company', href: '/our-company' },
  { id: 'media', label: 'MEDIA', href: '/um' },
  { id: 'contact', label: 'Contact' },
] as const; 