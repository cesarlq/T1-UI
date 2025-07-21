import { 
  Theme,
  SxProps
} from '@mui/material';

// Interfaces
export interface Country {
  code: string;
  name: string;
  prefix: string;
  flagEmoji?: string; // Opcional: emoji de bandera como alternativa
}

export interface PhoneInputT1Props {
  // Valores iniciales
  initialRegion?: string;
  initialPhoneNumber?: string;
  
  // Configuración
  countries?: Country[];
  defaultCountry?: string; // código del país por defecto
  
  // Callbacks
  onChange?: (prefix: string, phoneNumber: string, isValid: boolean, formattedNumber?: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  // Validación
  required?: boolean;
  error?: boolean;
  helperText?: string;
  customValidation?: (phoneNumber: string) => boolean;
  
  // Comportamiento
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  
  // Estilos y presentación
  label?: string | React.ReactNode;
  placeholder?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  showCountryName?: boolean;
  formatPhoneNumber?: boolean;
  clearable?: boolean;
  
  // Estilos avanzados
  sx?: SxProps<Theme>;
  inputSx?: SxProps<Theme>;
  selectSx?: SxProps<Theme>;
  borderRadius?: number | string;
  borderColor?: string;
  focusBorderColor?: string;
  maxWidth?: number | string;
  
  // Clases personalizadas
  className?: string;
  inputClassName?: string;
  selectClassName?: string;
  
  // Props HTML
  id?: string;
  name?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  
  // Propiedades de accesibilidad
  ariaLabel?: string;
  ariaDescribedby?: string;
}