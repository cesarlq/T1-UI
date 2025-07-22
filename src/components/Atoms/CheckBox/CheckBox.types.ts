import { CheckboxProps } from "@mui/material";

export interface ExtendedCheckBoxProps extends CheckboxProps {
    renderIcon?: (props: CheckboxProps) => React.ReactNode;
    children?: React.ReactNode; // Optional children
}