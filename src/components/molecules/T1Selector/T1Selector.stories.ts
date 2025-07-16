import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { T1Selector } from './T1Selector';

const meta: Meta<typeof T1Selector> = {
  title: 'molecules/T1Selector',
  component: T1Selector,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    storeBaseUrl: {
      control: 'text',
    },
    shippingBaseUrl: {
      control: 'text',
    },
    paymentBaseUrl: {
      control: 'text',
    },
    shipping: {
      control: 'boolean',
    },
    payment: {
      control: 'boolean',
    },
    store: {
      control: 'boolean',
    },
    ecosystemTitle: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story por defecto
export const Default: Story = {
  args: {
    storeBaseUrl: 'https://tienda.ejemplo.com',
    shippingBaseUrl: 'https://envios.ejemplo.com',
    paymentBaseUrl: 'https://pagos.ejemplo.com',
    shipping: true,
    payment: true,
    store: true,
    ecosystemTitle: 'Ecosistema',
  },
};

// Story con diferentes configuraciones
export const OnlyStore: Story = {
  args: {
    storeBaseUrl: 'https://tienda.ejemplo.com',
    shipping: false,
    payment: false,
    store: true,
    ecosystemTitle: 'Mi Tienda',
  },
};