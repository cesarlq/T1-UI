export interface CloseButtonProps {
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  color?: 'default' | 'primary' | 'secondary' | 'error';
  variant?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}