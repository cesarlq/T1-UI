import React, { forwardRef } from 'react';
import { 
  Radio as MuiRadio,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  styled
} from '@mui/material';
import { FormRadioProps, RadioGroupProps, RadioProps } from './Radio.types';

// Design tokens
export const DESIGN_TOKENS = {
  colors: {
    checked: '#EF4444', // red-500
    unchecked: '#E5E7EB', // gray-200
    hover: '#FCA5A5', // red-300
    disabled: '#F3F4F6', // gray-100
    focusRing: 'rgba(239, 68, 68, 0.2)', // red with opacity
  },
  sizes: {
    small: {
      radio: 16,
      dot: 8,
    },
    medium: {
      radio: 20,
      dot: 10,
    },
    large: {
      radio: 24,
      dot: 12,
    },
  },
  animation: {
    duration: '150ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// Tipos para el Radio individual


// Styled Radio con el diseño personalizado
const StyledRadio = styled(MuiRadio, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant?: keyof typeof DESIGN_TOKENS.sizes }>(({ theme, variant = 'medium' }) => {
  const sizeConfig = DESIGN_TOKENS.sizes[variant];
  
  return {
    padding: 8,
    color: DESIGN_TOKENS.colors.unchecked,
    
    '&:hover': {
      backgroundColor: 'transparent',
      '& .MuiSvgIcon-root': {
        color: DESIGN_TOKENS.colors.hover,
      },
    },
    
    '&.Mui-checked': {
      color: DESIGN_TOKENS.colors.checked,
      
      '&:hover': {
        backgroundColor: 'transparent',
        '& .MuiSvgIcon-root': {
          color: DESIGN_TOKENS.colors.checked,
        },
      },
    },
    
    '&.Mui-disabled': {
      color: DESIGN_TOKENS.colors.disabled,
      
      '&.Mui-checked': {
        color: DESIGN_TOKENS.colors.disabled,
      },
    },
    
    '&.Mui-focusVisible': {
      '& .MuiSvgIcon-root': {
        outline: `2px solid ${DESIGN_TOKENS.colors.checked}`,
        outlineOffset: 2,
        borderRadius: '50%',
      },
    },
    
    '& .MuiSvgIcon-root': {
      fontSize: sizeConfig.radio,
      transition: theme.transitions.create(['color'], {
        duration: DESIGN_TOKENS.animation.duration,
      }),
    },
  };
});

// Iconos personalizados para el Radio
const RadioIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle 
      cx="12" 
      cy="12" 
      r="11" 
      stroke="currentColor" 
      strokeWidth="2"
      fill="white"
    />
  </svg>
);

const RadioCheckedIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle 
      cx="12" 
      cy="12" 
      r="11" 
      stroke="currentColor" 
      strokeWidth="2"
      fill="white"
    />
    <circle 
      cx="12" 
      cy="12" 
      r="8" 
      fill="currentColor"
    />
  </svg>
);

/**
 * Radio Component
 * 
 * Radio button personalizado con diseño consistente.
 * 
 * @example
 * ```tsx
 * <Radio 
 *   value="option1"
 *   checked={selected === 'option1'}
 *   onChange={handleChange}
 *   ariaLabel="Opción 1"
 * />
 * ```
 */
export const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  ({ 
    ariaLabel,
    sx,
    ...props 
  }, ref) => {
    
    // Validación de accesibilidad
    if (process.env.NODE_ENV === 'development') {
      if (!ariaLabel && !props['aria-label'] && !props['aria-labelledby']) {
        console.warn(
          'Radio: Se recomienda proporcionar un ariaLabel para mejorar la accesibilidad'
        );
      }
    }
    
    return (
      <StyledRadio
        ref={ref}
        icon={<RadioIcon  />}
        checkedIcon={<RadioCheckedIcon/>}
        inputProps={{
          'aria-label': ariaLabel,
          ...props.inputProps,
        }}
        sx={sx}
        {...props}
      />
    );
  }
);

Radio.displayName = 'Radio';

// Tipos para RadioGroup

/**
 * RadioGroup Component
 * 
 * Agrupa múltiples Radio buttons con manejo de estado.
 * 
 * @example
 * ```tsx
 * <RadioGroup value={value} onValueChange={setValue}>
 *   <FormRadio value="1" label="Opción 1" />
 *   <FormRadio value="2" label="Opción 2" />
 * </RadioGroup>
 * ```
 */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ 
    variant = 'medium',
    onValueChange,
    onChange,
    children,
    ...props 
  }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
      onChange?.(event, value);
      onValueChange?.(value);
    };
    
    // Clonar children para pasar la prop variant
    const childrenWithVariant = React.Children.map(children, (child) => {
      if (React.isValidElement(child) && (child.type === FormRadio || child.type === Radio)) {
        return React.cloneElement(child, { variant } as any);
      }
      return child;
    });
    
    return (
      <MuiRadioGroup
        ref={ref}
        onChange={handleChange}
        {...props}
      >
        {childrenWithVariant}
      </MuiRadioGroup>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';


// Styled FormControlLabel
const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginLeft: 0,
  marginRight: 0,
  
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    fontWeight: 400,
    color: theme.palette.text.primary,
    userSelect: 'none',
    
    '&.Mui-disabled': {
      color: theme.palette.text.disabled,
    },
  },
}));

/**
 * FormRadio Component
 * 
 * Radio con label integrado para formularios.
 * 
 * @example
 * ```tsx
 * <FormRadio 
 *   value="option1"
 *   label="Primera opción"
 *   checked={selected === 'option1'}
 *   onChange={handleChange}
 * />
 * ```
 */
export const FormRadio = forwardRef<HTMLButtonElement, FormRadioProps>(
  ({ 
    label,
    labelPlacement = 'end',
    formControlLabelProps,
    value,
    ...radioProps 
  }, ref) => {
    if (!label) {
      return <Radio ref={ref} value={value} {...radioProps} />;
    }
    
    return (
      <StyledFormControlLabel
        value={value}
        control={<Radio ref={ref} {...radioProps} />}
        label={label}
        labelPlacement={labelPlacement}
        {...formControlLabelProps}
      />
    );
  }
);

FormRadio.displayName = 'FormRadio';
