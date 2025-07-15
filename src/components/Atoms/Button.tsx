import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';
import styles from '@/styles/common/Button.module.scss';

export interface ButtonAtomProps extends ButtonProps {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({
  children,
  className = '',
  loading = false,
  disabled,
  endIcon,
  startIcon,
  variant,
  ...rest
}) => {
  return (
    <Button
      endIcon={loading ? undefined : endIcon}
      startIcon={loading ? undefined : startIcon}
      className={`${className} ${loading ? styles.loading : ''}`}
      data-loading-style={loading}
      data-variation-style={variant}
      disabled={loading || disabled}
      {...rest}
    >
      {loading ? <CircularProgress size={18} color={variant == 'contained' ? 'inherit' : variant == 'outlined' ? 'primary': 'inherit'} /> : children}
    </Button>
  );
};

export default ButtonAtom;
