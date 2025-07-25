import { SelectProps } from "@mui/material";

export interface SelectAtomProps extends Omit<SelectProps, 'children'> {
  children: React.ReactNode;
  className?: string;
}