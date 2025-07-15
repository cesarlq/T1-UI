import { ButtonProps } from "@mui/material";

export interface ButtonAtomProps extends ButtonProps {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}
