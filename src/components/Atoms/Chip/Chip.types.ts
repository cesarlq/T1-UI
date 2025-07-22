import { ChipProps } from "@mui/material";


export interface ExtendedChipProps extends ChipProps {
  // Allow custom color definitions
  customColorDefinition?: Partial<ChipColorDefinition>;
  
  // Hover and interaction states
  hoverEffect?: boolean;
}


export interface ChipColorDefinition {
  backgroundColor: {
    filled: string;
    outlined: string;
  };
  color: {
    filled: string;
    outlined: string;
  };
  borderColor: {
    filled: string;
    outlined: string;
  };
}