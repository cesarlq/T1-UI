import { Theme, SxProps } from '@mui/material';

export interface Country {
    code: string;
    name: string;
    prefix: string;
    flagEmoji?: string;
}
export interface PhoneInputT1Props {
    initialRegion?: string;
    initialPhoneNumber?: string;
    countries?: Country[];
    defaultCountry?: string;
    onChange?: (prefix: string, phoneNumber: string, isValid: boolean, formattedNumber?: string) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    customValidation?: (phoneNumber: string) => boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    label?: string | React.ReactNode;
    placeholder?: string;
    variant?: 'outlined' | 'filled' | 'standard';
    size?: 'small' | 'medium';
    fullWidth?: boolean;
    showCountryName?: boolean;
    formatPhoneNumber?: boolean;
    clearable?: boolean;
    sx?: SxProps<Theme>;
    inputSx?: SxProps<Theme>;
    selectSx?: SxProps<Theme>;
    borderRadius?: number | string;
    borderColor?: string;
    focusBorderColor?: string;
    maxWidth?: number | string;
    className?: string;
    inputClassName?: string;
    selectClassName?: string;
    id?: string;
    name?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    ariaLabel?: string;
    ariaDescribedby?: string;
}
//# sourceMappingURL=PhoneInputT1.types.d.ts.map