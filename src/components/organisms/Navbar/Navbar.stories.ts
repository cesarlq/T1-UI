import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'organisms/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

// Configuración base que se reutilizará
const baseArgs = {
  onReducerHandle: () => console.log('Menu toggle'),
  sidebarReduce: false,
};

export const Default: Story = {
  args: {
    ...baseArgs,
  },
};

export const WithUser: Story = {
  args: {
    ...baseArgs,
    user: {
      name: 'Juan Pérez',
      storeId: 123,
      email: 'juan@example.com',
    },
    stores: [
      { id: 1, name: 'Tienda Principal' },
      { id: 2, name: 'Tienda Secundaria' },
    ],
    currentStore: { id: 1, name: 'Tienda Principal' },
  },
};

export const FullFeatures: Story = {
  args: {
    ...baseArgs,
    user: {
      name: 'Juan Pérez',
      storeId: 123,
      email: 'juan@example.com',
    },
    stores: [
      { id: 1, name: 'Tienda Principal' },
      { id: 2, name: 'Tienda Secundaria' },
    ],
    currentStore: { id: 1, name: 'Tienda Principal' },
    showInfoBand: true,
    showBalance: true,
    showSearchInput: true,
  },
};