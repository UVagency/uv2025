export interface BadgeProps {
  text: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
}

export interface ImageItem {
  src: string;
  alt: string;
  badge?: BadgeProps;
  overlay?: React.ReactNode;
  ratio?: number;
  className?: string;
} 