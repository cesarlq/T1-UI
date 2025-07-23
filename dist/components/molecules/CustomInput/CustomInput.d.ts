import { default as React } from '../../../../node_modules/react';
import { TextFieldProps } from '@mui/material';

export interface CustomInputI {
    label?: string;
    className?: string;
    flexDirectionRow?: boolean;
    textFieldProps: TextFieldProps;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    errorMessage?: string;
    hasChange?: boolean;
}
export default function CustomInput({ label, textFieldProps, children, style, className, flexDirectionRow, errorMessage, hasChange }: CustomInputI): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=CustomInput.d.ts.map