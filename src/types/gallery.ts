export interface BadgeProps {
  text: string;
  position?: string;
}

export interface ImageItem {
  src: string;
  alt: string;
  badge?: BadgeProps;
  overlay?: React.ReactNode;
  ratio?: number;
} 