
import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { MenuPath } from './Sidebar.types';
import { within, userEvent } from '@storybook/testing-library';

// Iconos de ejemplo (puedes reemplazar con tus iconos reales)
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AnalyticsIcon from '@mui/icons-material/Analytics';

// Datos de ejemplo para el menú
const menuPathsExample: MenuPath[] = [
  {
    type: 'STATIC_TITLE',
    text: 'NAVEGACIÓN PRINCIPAL',
  },
  {
    type: 'LINK',
    href: '/',
    text: 'Inicio',
    icon: HomeIcon,
    activeIcon: HomeIcon,
  },
  {
    type: 'LINK',
    href: '/dashboard',
    text: 'Dashboard',
    icon: DashboardIcon,
    activeIcon: DashboardIcon,
    hasNotification: true,
  },
  {
    type: 'LINK',
    href: '/orders',
    text: 'Órdenes',
    icon: ShoppingCartIcon,
    activeIcon: ShoppingCartIcon,
    subPaths: [
      { href: '/orders/pending', text: 'Pendientes', hasNotification: true },
      { href: '/orders/completed', text: 'Completadas' },
      { href: '/orders/cancelled', text: 'Canceladas' },
    ],
  },
  {
    type: 'LINK',
    href: '/analytics',
    text: 'Analíticas',
    icon: AnalyticsIcon,
    activeIcon: AnalyticsIcon,
    subPaths: [
      { href: '/analytics/sales', text: 'Ventas' },
      { href: '/analytics/traffic', text: 'Tráfico' },
      { href: '/analytics/conversions', text: 'Conversiones' },
    ],
  },
  {
    type: 'STATIC_TITLE',
    text: 'CONFIGURACIÓN',
  },
  {
    type: 'LINK',
    href: '/profile',
    text: 'Mi Perfil',
    icon: PersonIcon ,
    activeIcon: PersonIcon,
  },
  {
    type: 'LINK',
    href: '/settings',
    text: 'Configuración',
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
    subPaths: [
      { href: '/settings/general', text: 'General' },
      { href: '/settings/security', text: 'Seguridad' },
      { href: '/settings/notifications', text: 'Notificaciones' },
    ],
  },
  {
    type: 'INFORMATIVE_TEXT',
    text: 'Algunas funciones requieren permisos de administrador.',
  },
];

// Meta configuración
const meta = {
  title: 'organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Sidebar component para navegación principal de la aplicación. Soporta múltiples estados, responsive design y diferentes tipos de items.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPath: {
      control: 'select',
      options: ['/', '/dashboard', '/orders', '/orders/pending', '/analytics', '/profile', '/settings'],
      description: 'Ruta actual de la aplicación',
    },
    showCreateButton: {
      control: 'boolean',
      description: 'Mostrar/ocultar botón de crear',
    },
    showBalance: {
      control: 'boolean',
      description: 'Mostrar/ocultar el banner de balance',
    },
    showInfoBand: {
      control: 'boolean',
      description: 'Mostrar/ocultar banda informativa',
    },
    createButtonText: {
      control: 'text',
      description: 'Texto del botón de crear',
    },
    breakpointMobile: {
      control: 'number',
      description: 'Breakpoint para vista móvil (px)',
    },
    breakpointReduce: {
      control: 'number',
      description: 'Breakpoint para sidebar reducido (px)',
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story básica
export const Default: Story = {
  args: {
    menuPaths: menuPathsExample,
    currentPath: '/dashboard',
    showCreateButton: true,
    createButtonText: '+ Nuevo',
    createButtonPath: '/create',
    onNavigate: (path: string) => console.log('Navigate to:', path),
    onPathChange: (path: string) => console.log('Path changed to:', path),
  },
};


// Story con banners y balance
export const WithBannersAndBalance: Story = {
  args: {
    ...Default.args,
    showBalance: true,
    balanceBannerConfig: {
      balance: { amount: 1250.50, currency: 'USD' },
      BALLANCE_PATH: '/wallet',
    },
  },
};

// Story móvil
export const Mobile: Story = {
  args: {
    ...Default.args,
    isOpen: false,
    isMobile: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// Story reducida
export const Reduced: Story = {
  args: {
    ...Default.args,
    isReduced: true,
  },
};

// Story con rutas restringidas
export const WithRestrictedPaths: Story = {
  args: {
    ...Default.args,
    restrictedPaths: ['/analytics', '/settings'],
    currentUserId: 'user123',
  },
};


export const WithCustomComponent: Story = {
  args: {
    ...Default.args,
    menuPaths: [
      {
        type: 'STATIC_TITLE',
        text: 'TIENDAS',
      },
      {
        type: 'REACT_TSX',
      },
      ...menuPathsExample,
    ],
  },
};

// Story para testing de interacciones
export const InteractionTest: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Esperar a que el sidebar se renderice
    await new Promise(r => setTimeout(r, 500));
    
    // Click en Dashboard
    const dashboardItem = canvas.getByText('Dashboard');
    await userEvent.click(dashboardItem);
    
    // Click en Orders para abrir submenú
    const ordersItem = canvas.getByText('Órdenes');
    await userEvent.click(ordersItem);
    
    // Click en un subitem
    const pendingOrders = canvas.getByText('Pendientes');
    await userEvent.click(pendingOrders);
  },
};

// Story vacía (edge case)
export const Empty: Story = {
  args: {
    menuPaths: [],
    showCreateButton: false,
    showBalance: false,
    onNavigate: (path: string) => console.log('Navigate to:', path),
  },
};