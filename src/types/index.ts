export interface NavItem {
  id: string;
  label: string;
  href?: string;
}

export interface NavigationState {
  isInfoOpen: boolean;
  isContactOpen: boolean;
  isOurCompanyOpen: boolean;
  toggleInfo: () => void;
  toggleContact: () => void;
  toggleOurCompany: () => void;
}

export interface ColorScheme {
  bg: string;
  iris: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
}

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
} 