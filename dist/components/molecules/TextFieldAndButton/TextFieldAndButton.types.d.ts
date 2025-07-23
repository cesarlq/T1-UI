import { TextFieldProps } from '@mui/material';

export interface TextFieldAndButtonI {
    className?: string;
    textFieldClassName?: string;
    buttonClassName?: string;
    onSubmit: (data: {
        search: string;
    }) => void;
    textFieldProps?: TextFieldProps;
}
//# sourceMappingURL=TextFieldAndButton.types.d.ts.map