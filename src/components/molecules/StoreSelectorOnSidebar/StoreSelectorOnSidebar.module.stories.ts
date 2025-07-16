import type { Meta, StoryObj } from '@storybook/react';
import { StoreSelectorOnSidebar } from './StoreSelectorOnSidebar';
import type { Store } from './StoreSelectorOnSidebar.type';

// Mock action function for stories
const action = (name: string) => (...args: any[]) => {
  console.log(`Action: ${name}`, args);
};

const meta: Meta<typeof StoreSelectorOnSidebar> = {
  title: 'molecules/StoreSelectorOnSidebar',
  component: StoreSelectorOnSidebar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'StoreSelectorOnSidebar component allows users to select from a list of stores with search functionality and the ability to create new stores.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes for the container'
    },
    stores: {
      control: 'object',
      description: 'Array of available stores'
    },
    currentStore: {
      control: 'object',
      description: 'Currently selected store'
    },
    onStoreChange: {
      action: 'store-changed',
      description: 'Callback function when a store is selected'
    },
    title: {
      control: 'text',
      description: 'Title displayed in the dropdown'
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the search input'
    },
    newStoreText: {
      control: 'text',
      description: 'Text for the create new store link'
    },
    createStoreUrl: {
      control: 'text',
      description: 'URL for creating a new store'
    },
    closeOnOutsideClick: {
      control: 'boolean',
      description: 'Whether to close dropdown when clicking outside'
    },
    closeOnStoreSelect: {
      control: 'boolean',
      description: 'Whether to close dropdown when selecting a store'
    },
    storeColors: {
      control: 'object',
      description: 'Array of colors for store avatars'
    }
  }
} satisfies Meta<typeof StoreSelectorOnSidebar>;

export default meta;
type Story = StoryObj<Meta<typeof StoreSelectorOnSidebar>>;

// Sample stores data
const sampleStores: Store[] = [
  { id: 1, name: 'Mi Tienda Principal' },
  { id: 2, name: 'Sucursal Norte' },
  { id: 3, name: 'Tienda Centro' },
  { id: 4, name: 'Outlet Mall' },
  { id: 5, name: 'Tienda Online' },
  { id: 6, name: 'Sucursal Sur' },
  { id: 7, name: 'Pop-up Store' },
  { id: 8, name: 'Warehouse Store' }
];

// Default story
export const Default: Story = {
  args: {
    stores: sampleStores,
    currentStore: sampleStores[0],
    title: 'Mis tiendas',
    searchPlaceholder: 'Buscar tienda...',
    newStoreText: 'Crear tienda',
    createStoreUrl: '/create-store',
    closeOnOutsideClick: true,
    closeOnStoreSelect: true,
    storeColors: ['#51AF70', '#4F6EE0', '#2180FF', '#6FCF97'],
    onStoreChange: action('store-changed')
  }
};

// Story with few stores
export const FewStores: Story = {
  args: {
    stores: sampleStores.slice(0, 3),
    currentStore: sampleStores[0],
    title: 'Mis tiendas',
    searchPlaceholder: 'Buscar tienda...',
    newStoreText: 'Crear tienda',
    createStoreUrl: '/create-store',
    closeOnOutsideClick: true,
    closeOnStoreSelect: true,
    storeColors: ['#51AF70', '#4F6EE0', '#2180FF', '#6FCF97'],
    onStoreChange: action('store-changed')
  }
};

// Story with many stores
export const ManyStores: Story = {
  args: {
    stores: [
      ...sampleStores,
      { id: 9, name: 'Tienda Express' },
      { id: 10, name: 'Mega Store' },
      { id: 11, name: 'Boutique Exclusiva' },
      { id: 12, name: 'Tienda de Barrio' },
      { id: 13, name: 'Centro Comercial' },
      { id: 14, name: 'Tienda Especializada' },
      { id: 15, name: 'Outlet Premium' }
    ],
    currentStore: sampleStores[2],
    title: 'Mis tiendas',
    searchPlaceholder: 'Buscar entre 15 tiendas...',
    newStoreText: 'Crear nueva tienda',
    createStoreUrl: '/create-store',
    closeOnOutsideClick: true,
    closeOnStoreSelect: true,
    storeColors: ['#51AF70', '#4F6EE0', '#2180FF', '#6FCF97'],
    onStoreChange: action('store-changed')
  }
};

// Story with long store names
export const LongStoreNames: Story = {
  args: {
    stores: [
      { id: 1, name: 'Tienda Principal de Productos Especializados en Tecnología' },
      { id: 2, name: 'Sucursal Norte del Centro Comercial Plaza Mayor' },
      { id: 3, name: 'Boutique Exclusiva de Moda y Accesorios Premium' },
      { id: 4, name: 'Outlet de Productos de Temporada y Liquidación' },
      { id: 5, name: 'Tienda Online de Ventas Digitales y E-commerce' }
    ],
    currentStore: { id: 1, name: 'Tienda Principal de Productos Especializados en Tecnología' },
    title: 'Mis tiendas',
    searchPlaceholder: 'Buscar tienda...',
    newStoreText: 'Crear tienda',
    createStoreUrl: '/create-store',
    closeOnOutsideClick: true,
    closeOnStoreSelect: true,
    storeColors: ['#51AF70', '#4F6EE0', '#2180FF', '#6FCF97'],
    onStoreChange: action('store-changed')
  }
};

// Story with custom colors
export const CustomColors: Story = {
  args: {
    stores: sampleStores.slice(0, 6),
    currentStore: sampleStores[1],
    title: 'Mis tiendas',
    searchPlaceholder: 'Buscar tienda...',
    newStoreText: 'Crear tienda',
    createStoreUrl: '/create-store',
    closeOnOutsideClick: true,
    closeOnStoreSelect: true,
    storeColors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'],
    onStoreChange: action('store-changed')
  }
};

// Story with single store
export const SingleStore: Story = {
  args: {
    stores: [sampleStores[0]],
    currentStore: sampleStores[0],
    title: 'Mi tienda',
    searchPlaceholder: 'Buscar...',
    newStoreText: 'Crear segunda tienda',
    createStoreUrl: '/create-store',
    closeOnOutsideClick: true,
    closeOnStoreSelect: true,
    storeColors: ['#51AF70'],
    onStoreChange: action('store-changed')
  }
};

// Story with no current store selected
export const NoCurrentStore: Story = {
  args: {
    stores: sampleStores,
    currentStore: undefined,
    title: 'Seleccionar tienda',
    searchPlaceholder: 'Buscar tienda...',
    newStoreText: 'Crear primera tienda',
    createStoreUrl: '/create-store',
    closeOnOutsideClick: true,
    closeOnStoreSelect: true,
    storeColors: ['#51AF70', '#4F6EE0', '#2180FF', '#6FCF97'],
    onStoreChange: action('store-changed')
  }
};

// Story with custom behavior
export const CustomBehavior: Story = {
  args: {
    stores: sampleStores,
    currentStore: sampleStores[3],
    title: 'Cambiar tienda',
    searchPlaceholder: 'Filtrar por nombre...',
    newStoreText: '+ Agregar nueva tienda',
    createStoreUrl: 'https://example.com/new-store',
    closeOnOutsideClick: false,
    closeOnStoreSelect: false,
    storeColors: ['#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#9B59B6'],
    onStoreChange: action('store-changed')
  }
};

// Story with special characters in names
export const SpecialCharacters: Story = {
  args: {
    stores: [
      { id: 1, name: 'Tienda & Más' },
      { id: 2, name: 'Café "El Rincón"' },
      { id: 3, name: 'Store #1' },
      { id: 4, name: 'Tienda (Principal)' },
      { id: 5, name: 'Boutique Élite' },
      { id: 6, name: 'Tienda 100%' }
    ],
    currentStore: { id: 2, name: 'Café "El Rincón"' },
    title: 'Mis tiendas',
    searchPlaceholder: 'Buscar tienda...',
    newStoreText: 'Crear tienda',
    createStoreUrl: '/create-store',
    closeOnOutsideClick: true,
    closeOnStoreSelect: true,
    storeColors: ['#51AF70', '#4F6EE0', '#2180FF', '#6FCF97'],
    onStoreChange: action('store-changed')
  }
};

// Story with empty stores list
export const EmptyStores: Story = {
  args: {
    stores: [],
    currentStore: undefined,
    title: 'Sin tiendas',
    searchPlaceholder: 'No hay tiendas disponibles',
    newStoreText: 'Crear mi primera tienda',
    createStoreUrl: '/create-store',
    closeOnOutsideClick: true,
    closeOnStoreSelect: true,
    storeColors: ['#51AF70', '#4F6EE0', '#2180FF', '#6FCF97'],
    onStoreChange: action('store-changed')
  }
};
