import type { Meta, StoryObj } from '@storybook/react';
import CustomInput from './CustomInput';
import { ChangeEvent, useState } from 'react';
import { InputAdornment } from '@mui/material';
import { CheckCircleIcon, SearchIcon } from 'lucide-react';
import { CustomInputI } from './CustomInput.types';

const meta: Meta<typeof CustomInput> = {
  title: 'atoms/CustomInput',
  component: CustomInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CustomInput>;

// Story con estado para manejar el valor del input
const Template = (args: CustomInputI) => {
  const [value, setValue] = useState('');

  return (
    <CustomInput
      {...args}
      textFieldProps={{
        ...args.textFieldProps,
        value,
        onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
      }}
    />
  );
};

export const Default: Story = {
  render: () => (
    <Template
      label="Nombre"
      textFieldProps={{
        placeholder: 'Ingresa tu nombre',
        fullWidth: true,
        variant: 'outlined',
      }}
    />
  ),
};

export const WithError: Story = {
  render: () => (
    <Template
      label="Correo electrónico"
      errorMessage="El correo es inválido"
      textFieldProps={{
        placeholder: 'ejemplo@correo.com',
        fullWidth: true,
        variant: 'outlined',
        error: true,
      }}
    />
  ),
};

export const WithChangeIndicator: Story = {
  render: () => (
    <Template
      label="Teléfono"
      hasChange
      textFieldProps={{
        placeholder: 'Ingresa tu teléfono',
        fullWidth: true,
        variant: 'outlined',
      }}
    />
  ),
};


export const WithStartIcon: Story = {
  render: () => (
    <Template
      label="Buscar"
      textFieldProps={{
        placeholder: 'Buscar producto',
        fullWidth: true,
        variant: 'outlined',
        InputProps: {
          startAdornment: <SearchIcon color="gray" width={'20px'} style={{marginRight: '1rem'}}/>
        },
      }}
    />
  ),
};

export const WithEndIcon: Story = {
  render: () => (
    <Template
      label="Validado"
      textFieldProps={{
        placeholder: 'Campo validado',
        fullWidth: true,
        variant: 'outlined',
        InputProps: {
          endAdornment: <CheckCircleIcon width={'20px'} color="green" style={{marginLeft:'1rem'}}/>
        },
      }}
    />
  ),
};