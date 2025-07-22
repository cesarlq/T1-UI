import { ReactNode } from 'react';
export interface DynamicSelectorItemI {
    extraData?: ReactNode;
    label: string;
    value: string | number;
}
export interface DynamicSelectorI {
    typeAdornment: 'checkbox' | 'radio';
    defaultLabel: string;
    options: DynamicSelectorItemI[];
    onChange: (value: string | number | string[] | number[]) => void;
    value?: string | number | string[] | number[];
    onClear: () => void;
    multiple?: boolean;
    className?: string;
    large?: boolean;
    disabled?: boolean;
    classNameButton?: string;
}
//# sourceMappingURL=DynamicSelector.types.d.ts.map