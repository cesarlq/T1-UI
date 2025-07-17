import React$1 from 'react';
import { ButtonProps } from '@mui/material';

interface ButtonAtomProps extends ButtonProps {
    loading?: boolean;
    children: React.ReactNode;
    className?: string;
}

declare const ButtonAtom: React$1.FC<ButtonAtomProps>;

declare const version = "0.1.0";

export { ButtonAtom as Button, version };
