import type { Meta, StoryObj } from '@storybook/react';
import { T1ShippingBanner } from './T1ShippingBanner';

const meta = {
  title: 'molecules/T1ShippingBanner',
  component: T1ShippingBanner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    brandText: {
      control: 'text',
      description: 'Texto de la marca',
    },
    isMobile: {
      control: 'boolean',
      description: 'Modo móvil',
    },
    isReduced: {
      control: 'boolean',
      description: 'Estado colapsado del menú',
    },
    navigationPath: {
      control: 'text',
      description: 'Ruta de navegación',
    },
  },
} satisfies Meta<typeof T1ShippingBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Historia básica
export const Default: Story = {
  args: {
    brandText: 'envíos',
    isMobile: false,
    isReduced: false,
  },
};

// Historia en móvil
export const Mobile: Story = {
  args: {
    brandText: 'envíos',
    isMobile: true,
  },
};

// Historia con menú colapsado
export const Reduced: Story = {
  args: {
    brandText: 'envíos',
    isMobile: false,
    isReduced: true,
  },
};

// Historia con texto personalizado
export const CustomBrand: Story = {
  args: {
    brandText: 'logística',
    isMobile: false,
    isReduced: false,
  },
};

// Historia con handlers
export const WithHandlers: Story = {
  args: {
    brandText: 'envíos',
    isMobile: false,
    isReduced: false,
    onNavigate: (path) => {
      console.log('Navegando a:', path);
      alert(`Navegando a: ${path}`);
    },
    onToggleReduce: () => {
      console.log('Toggle reduce clicked');
      alert('Toggle reduce clicked');
    },
  },
};