import  { forwardRef } from 'react';
import { 
  Switch as MuiSwitch, 
  SwitchProps as MuiSwitchProps, 
  styled,
  FormControlLabel
} from '@mui/material';
import { FormSwitchProps, SwitchProps } from './Switch.types';

// Design tokens - estos deberían venir de tu sistema de diseño
const DESIGN_TOKENS = {
  colors: {
    active: '#51AF70', // green-500
    inactive: '#E7E7E7', // gray-200
    disabled: '#E7E7E7', // gray-100
    thumb: '#FFFFFF',
  },
  sizes: {
    track: {
      width: 52,
      height: 28,
    },
    thumb: {
      size: 20,
    },
  },
  spacing: {
    thumbMargin: 4,
  },
  animation: {
    duration: '150ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;


// Styled component con todos los estados visuales
const StyledSwitch = styled(MuiSwitch)(({ theme }) => ({
  width: DESIGN_TOKENS.sizes.track.width,
  height: DESIGN_TOKENS.sizes.track.height,
  padding: 0,
  display: 'inline-flex',
  
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: DESIGN_TOKENS.spacing.thumbMargin,
    transitionDuration: DESIGN_TOKENS.animation.duration,
    transitionTimingFunction: DESIGN_TOKENS.animation.easing,
    
    '&.Mui-checked': {
      transform: `translateX(${DESIGN_TOKENS.sizes.track.width - DESIGN_TOKENS.sizes.thumb.size - (DESIGN_TOKENS.spacing.thumbMargin * 2)}px)`,
      color: DESIGN_TOKENS.colors.thumb,
      
      '& + .MuiSwitch-track': {
        backgroundColor: DESIGN_TOKENS.colors.active,
        opacity: 1,
        border: 0,
      },
      
      '&.Mui-disabled + .MuiSwitch-track': {
        backgroundColor: DESIGN_TOKENS.colors.inactive,
        opacity: 0.5,
      },
    },
    
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: DESIGN_TOKENS.colors.active,
      border: `6px solid ${DESIGN_TOKENS.colors.thumb}`,
    },
    
    '&.Mui-disabled': {
      color: DESIGN_TOKENS.colors.thumb,
      opacity: 0.6,
      
      '& + .MuiSwitch-track': {
        backgroundColor: DESIGN_TOKENS.colors.disabled,
        opacity: 1,
      },
    },
  },
  
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: DESIGN_TOKENS.sizes.thumb.size,
    height: DESIGN_TOKENS.sizes.thumb.size,
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    transition: theme.transitions.create(['box-shadow'], {
      duration: DESIGN_TOKENS.animation.duration,
    }),
    
    // Hover effect para mejor UX
    '&:hover': {
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    },
  },
  
  '& .MuiSwitch-track': {
    borderRadius: DESIGN_TOKENS.sizes.track.height / 2,
    backgroundColor: DESIGN_TOKENS.colors.inactive,
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: DESIGN_TOKENS.animation.duration,
    }),
  },
}));

/**
 * Switch Component
 * 
 * Un componente switch accesible y personalizable basado en MUI.
 * Sigue las guías WCAG 2.1 AA para accesibilidad.
 * 
 * @example
 * ```tsx
 * <Switch 
 *   checked={isEnabled} 
 *   onValueChange={setIsEnabled}
 *   ariaLabel="Habilitar notificaciones"
 * />
 * ```
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ 
    className,
    onValueChange,
    onChange,
    size = 'md',
    ariaLabel,
    disabled,
    checked,
    defaultChecked,
    sx,
    ...props 
  }, ref) => {

    // Handler unificado para mantener ambas APIs
    const handleChange: MuiSwitchProps['onChange'] = (event, checked) => {
      onChange?.(event, checked);
      onValueChange?.(checked);
    };

    return (
      <StyledSwitch
        ref={ref}
        className={className}
        onChange={handleChange}
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        disableRipple
        inputProps={{
          'aria-label': ariaLabel,
          role: 'switch',
          'aria-checked': checked,
        }}
        sx={{
          ...sx,
          // Permitir customización pero mantener los estilos base
        }}
        {...props}
      />
    );
  }
);

Switch.displayName = 'Switch';


// Styled FormControlLabel para consistencia
const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginLeft: 0,
  marginRight: 0,
  
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: theme.palette.text.primary,
    userSelect: 'none',
    
    '&.Mui-disabled': {
      color: theme.palette.text.disabled,
    },
  },
}));

/**
 * FormSwitch Component
 * 
 * Switch con label integrado para formularios.
 * 
 * @example
 * ```tsx
 * <FormSwitch 
 *   label="Activar notificaciones"
 *   checked={notifications} 
 *   onValueChange={setNotifications}
 * />
 * ```
 */
export const FormSwitch = forwardRef<HTMLButtonElement, FormSwitchProps>(
  ({ 
    label, 
    labelPlacement = 'end',
    formControlLabelProps,
    ...switchProps 
  }, ref) => {
    if (!label) {
      return <Switch ref={ref} {...switchProps} />;
    }

    return (
      <StyledFormControlLabel
        control={<Switch ref={ref} {...switchProps} />}
        label={label}
        labelPlacement={labelPlacement}
        {...formControlLabelProps}
      />
    );
  }
);

FormSwitch.displayName = 'FormSwitch';
