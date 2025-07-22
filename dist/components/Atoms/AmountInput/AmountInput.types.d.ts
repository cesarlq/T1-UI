import { StandardTextFieldProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';
export type FieldValues = Record<string, any>;
export interface AmountInputI<T extends FieldValues> extends UseControllerProps<T> {
    textFieldProps?: StandardTextFieldProps;
    currency?: string;
    label?: string;
    onChange?: any;
    tooltip?: string;
}
export interface NumericFormatProps {
    onChange: (event: {
        target: {
            name?: string;
            value?: number;
        };
    }) => void;
    name?: string;
    currency?: string;
    min?: number;
}
//# sourceMappingURL=AmountInput.types.d.ts.map