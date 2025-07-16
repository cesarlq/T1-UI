import { Select } from '@mui/material';
import React from 'react';
import { SelectAtomProps } from './Select.types';


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
