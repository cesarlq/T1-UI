import { TextFieldProps } from '@mui/material';

export interface CustomInputI extends Omit<TextFieldProps, 'children'> {
    label?: string;
    className?: string;
    flexDirectionRow?: boolean;
    textFieldProps?: Partial<TextFieldProps>;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    errorMessage?: string;
    hasChange?: boolean;
}
//# sourceMappingURL=CustomInput.types.d.ts.map