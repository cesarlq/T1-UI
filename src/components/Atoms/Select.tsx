import { SelectProps, Select } from '@mui/material';
import DropDow from '@/assets/svg-icons/DropDow.svg';
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
      IconComponent={DropDow}
    >
      {children}
    </Select>
  );
};

export default SelectAtom;
