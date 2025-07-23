import { StandardTextFieldProps } from '@mui/material';

export interface SearchInputI {
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
    textFieldProps?: StandardTextFieldProps;
    onClickButton?: (value: string) => void;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
}
//# sourceMappingURL=SearchInput.types.d.ts.map