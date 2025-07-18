import { 
  SwitchProps as MuiSwitchProps, 
  FormControlLabelProps
} from '@mui/material';
// Tipos extendidos para mejor DX
export interface SwitchProps extends Omit<MuiSwitchProps, 'color' | 'size'> {
  /**
   * Callback cuando el valor cambia - API más clara
   */
  onValueChange?: (checked: boolean) => void;
  /**
   * Tamaño del switch - Por ahora solo soportamos 'medium'
   * Reservado para futuras extensiones
   */
  size?: 'medium';
  /**
   * Label para accesibilidad (requerido para a11y)
   */
  ariaLabel?: string;
}

// Interfaces para el FormSwitch
export interface FormSwitchProps extends SwitchProps {
  /**
   * Label del switch
   */
  label?: React.ReactNode;
  /**
   * Posición del label
   */
  labelPlacement?: FormControlLabelProps['labelPlacement'];
  /**
   * Props adicionales para el FormControlLabel
   */
  formControlLabelProps?: Omit<FormControlLabelProps, 'control' | 'label'>;
}

