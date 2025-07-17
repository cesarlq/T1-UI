import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TextFieldAndButton from './TextFieldAndButton';

const meta = {
  title: 'molecules/TextFieldAndButton',
  component: TextFieldAndButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submitted' },
    className: {
      control: 'text',
      description: 'Clase CSS para el contenedor',
    },
    textFieldClassName: {
      control: 'text',
      description: 'Clase CSS para el TextField',
    },
  },
} satisfies Meta<typeof TextFieldAndButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Historia básica
export const Default: Story = {
  args: {
    onSubmit: (data) => {
      console.log('Search submitted:', data);
    },
    textFieldProps: {
      placeholder: 'Buscar...',
    },
  },
};

// Historia con placeholder personalizado
export const WithPlaceholder: Story = {
  args: {
    onSubmit: (data) => {
      console.log('Search submitted:', data);
    },
    textFieldProps: {
      placeholder: 'Buscar productos, categorías...',
    },
  },
};

// Historia con valor inicial
export const WithInitialValue: Story = {
  args: {
    onSubmit: (data) => {
      console.log('Search submitted:', data);
    },
    textFieldProps: {
      placeholder: 'Buscar...',
      value: 'Texto inicial',
    },
  },
};

// Historia deshabilitada
export const Disabled: Story = {
  args: {
    onSubmit: (data) => {
      console.log('Search submitted:', data);
    },
    textFieldProps: {
      placeholder: 'Buscar...',
      disabled: true,
    },
  },
};

// Historia con tamaño pequeño
export const Small: Story = {
  args: {
    onSubmit: (data) => {
      console.log('Search submitted:', data);
    },
    textFieldProps: {
      placeholder: 'Buscar...',
      size: 'small',
    },
  },
};

// Historia con ancho completo
export const FullWidth: Story = {
  args: {
    onSubmit: (data) => {
      console.log('Search submitted:', data);
    },
    textFieldProps: {
      placeholder: 'Buscar...',
      fullWidth: true,
    },
  },
  parameters: {
    layout: 'padded',
  },
};