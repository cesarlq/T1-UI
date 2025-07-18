import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';
import styles from './Button.module.scss';
import { ButtonAtomProps } from './Button.types';


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

  const getLoadingColor = (variant?: ButtonProps['variant']): 'inherit' | 'primary' => {
    if (variant === 'outlined') return 'primary';
    return 'inherit';
  };

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
      {loading ? <CircularProgress size={18} color={getLoadingColor(variant)} /> : children}
    </Button>
  );
};

export default ButtonAtom;
