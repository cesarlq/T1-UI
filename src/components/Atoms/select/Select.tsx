import { SelectProps, Select } from '@mui/material';
import React from 'react';

export interface SelectAtomProps extends Omit<SelectProps, 'children'> {
  children: React.ReactNode;
  className?: string;
}

const SelectAtom: React.FC<SelectAtomProps> = ({ 
  children, 
  className, 
  disabled,
  ...props 
}) => {
  return (
    <Select
      {...props}
      disabled={disabled}
      className={className}
    >
      {children}
    </Select>
  );
};

export default SelectAtom;
