
import { 
  RadioProps as MuiRadioProps,
  RadioGroupProps as MuiRadioGroupProps,
  FormControlLabelProps,
} from '@mui/material';
import { DESIGN_TOKENS } from './Radio';

export interface RadioProps extends Omit<MuiRadioProps, 'color' | 'size'> {
  /**
   * Variante de tamaño del radio
   * @default 'medium'
   */
  /**
   * Label para accesibilidad
   */
  ariaLabel?: string;
}

export interface RadioGroupProps extends Omit<MuiRadioGroupProps, 'color'> {
  /**
   * Variante de tamaño para todos los radios del grupo
   * @default 'medium'
   */
  variant?: keyof typeof DESIGN_TOKENS.sizes;
  /**
   * Callback simplificado cuando cambia el valor
   */
  onValueChange?: (value: string) => void;
}

// Tipos para FormRadio
export interface FormRadioProps extends RadioProps {
  /**
   * Label del radio
   */
  label?: React.ReactNode;
  /**
   * Posición del label
   * @default 'end'
   */
  labelPlacement?: FormControlLabelProps['labelPlacement'];
  /**
   * Props adicionales para el FormControlLabel
   */
  formControlLabelProps?: Omit<FormControlLabelProps, 'control' | 'label' | 'value'>;
}
