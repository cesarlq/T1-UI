import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { CloseButtonProps } from './CloseButton.types';

const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  size = 'medium',
  color = 'default',
  variant = 'text',
  disabled = false,
  className,
  ariaLabel = 'Close'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getButtonStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      padding: size === 'small' ? '4px' : size === 'large' ? '12px' : '8px',
      minWidth: 'auto',
      height: size === 'small' ? '32px' : size === 'large' ? '48px' : '40px',
      width: size === 'small' ? '32px' : size === 'large' ? '48px' : '40px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background-color 0.2s ease, transform 0.1s ease',
      border: 'none',
      outline: 'none',
    };

    
    const colorStyles: Record<string, Record<string, React.CSSProperties>> = {
      default: {
        text: {
          backgroundColor: isHovered && !disabled ? 'rgba(0,0,0,0.04)' : 'transparent',
          color: '#000',
        },
        outlined: {
          backgroundColor: isHovered && !disabled ? 'rgba(0,0,0,0.04)' : 'transparent',
          border: '1px solid rgba(0,0,0,0.23)',
          color: '#000',
        },
        contained: {
          backgroundColor: isHovered && !disabled ? '#d5d5d5' : '#e0e0e0',
          color: '#000',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }
      },
      primary: {
        text: {
          backgroundColor: isHovered && !disabled ? 'rgba(25,118,210,0.04)' : 'transparent',
          color: '#1976d2',
        },
        outlined: {
          backgroundColor: isHovered && !disabled ? 'rgba(25,118,210,0.04)' : 'transparent',
          border: '1px solid rgba(25,118,210,0.5)',
          color: '#1976d2',
        },
        contained: {
          backgroundColor: isHovered && !disabled ? '#1565c0' : '#1976d2',
          color: '#fff',
          boxShadow: '0 2px 4px rgba(25,118,210,0.3)',
        }
      },
      secondary: {
        text: {
          backgroundColor: isHovered && !disabled ? 'rgba(156,39,176,0.04)' : 'transparent',
          color: '#9c27b0',
        },
        outlined: {
          backgroundColor: isHovered && !disabled ? 'rgba(156,39,176,0.04)' : 'transparent',
          border: '1px solid rgba(156,39,176,0.5)',
          color: '#9c27b0',
        },
        contained: {
          backgroundColor: isHovered && !disabled ? '#7b1fa2' : '#9c27b0',
          color: '#fff',
          boxShadow: '0 2px 4px rgba(156,39,176,0.3)',
        }
      },
      error: {
        text: {
          backgroundColor: isHovered && !disabled ? 'rgba(211,47,47,0.04)' : 'transparent',
          color: '#d32f2f',
        },
        outlined: {
          backgroundColor: isHovered && !disabled ? 'rgba(211,47,47,0.04)' : 'transparent',
          border: '1px solid rgba(211,47,47,0.5)',
          color: '#d32f2f',
        },
        contained: {
          backgroundColor: isHovered && !disabled ? '#c62828' : '#d32f2f',
          color: '#fff',
          boxShadow: '0 2px 4px rgba(211,47,47,0.3)',
        }
      }
    };

    return {
      ...baseStyles,
      ...colorStyles[color][variant]
    };
  };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      aria-label={ariaLabel}
      className={className}
      style={getButtonStyles()}
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
    >
      <CloseIcon 
        style={{ 
          fontSize: size === 'small' ? '16px' : size === 'large' ? '24px' : '20px' 
        }} 
      />
    </button>
  );
};

export default CloseButton;