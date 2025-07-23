import { ChipProps } from '@mui/material';

export interface ExtendedChipProps extends ChipProps {
    customColorDefinition?: Partial<ChipColorDefinition>;
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
//# sourceMappingURL=Chip.types.d.ts.map