// src/components/organisms/layoutMenu/LayoutMenu.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { MenuState } from './LayoutMenu.types';
import LayoutMenu from './LayoutMenu'

// Importar iconos de Lucide React
import {
  Home,
  LayoutDashboard,
  ShoppingCart,
  Package,
  TrendingUp,
  Users,
  Settings,
  FileText,
  BarChart3,
  CreditCard,
  Truck,
  Bell,
  HelpCircle,
  LogOut,
  User as UserIcon,
  Shield,
  Palette,
  Database,
  Search,
  Plus,
  ChevronRight,
  Store as StoreIcon,
  Building2,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Clock,
  Activity,
  AlertCircle,
  Check,
  X
} from 'lucide-react';
import { ProfileMenuItem, User } from '../../molecules/Profile/Profile.type';
import { Store } from '../../molecules/StoreSelector/StoreSelector.type';
import { MenuPath } from '../Sidebar/Sidebar.types';
import { T1SelectorProps } from '../../molecules/T1Selector/T1Selector.types';


// Datos de ejemplo
const sampleUser: User = {
  name: 'Carlos Rodríguez',
  email: 'carlos.rodriguez@tienda1.com',
  storeId: 'store-123'
};

const sampleStores: Store[] = [
  { id: 1, name: 'Tienda Principal' },
  { id: 2, name: 'Sucursal Norte' },
  { id: 3, name: 'Outlet Centro' },
  { id: 4, name: 'Tienda Online' },
  { id: 5, name: 'Pop-up Store' }
];

const profileMenuItems: ProfileMenuItem[] = [
  {
    id: 'profile',
    label: 'Mi Perfil',
    icon: <UserIcon size={16} />,
    href: '/profile',
    color: undefined
  },
  {
    id: 'account',
    label: 'Configuración de Cuenta',
    icon: <Settings size={16} />,
    href: '/account',
    color: undefined
  },
  {
    id: 'billing',
    label: 'Facturación',
    icon: <CreditCard size={16} />,
    href: '/billing',
    color: undefined
  },
  {
    id: 'notifications',
    label: 'Notificaciones',
    icon: <Bell size={16} />,
    href: '/notifications',
    color: undefined
  },
  {
    id: 'security',
    label: 'Seguridad',
    icon: <Shield size={16} />,
    href: '/security',
    divider: true,
    color: undefined
  },
  {
    id: 'help',
    label: 'Centro de Ayuda',
    icon: <HelpCircle size={16} />,
    href: 'https://help.tienda1.com',
    target: '_blank',
    color: undefined
  }
];

const menuPaths: MenuPath[] = [
  {
    type: 'STATIC_TITLE',
    text: 'NAVEGACIÓN PRINCIPAL',
  },
  {
    type: 'LINK',
    href: '/dashboard',
    text: 'Dashboard',
    icon: LayoutDashboard,
    activeIcon: LayoutDashboard,
    dataTourTarget: 'dashboard-link'
  },
  {
    type: 'LINK',
    href: '/orders',
    text: 'Órdenes',
    icon: ShoppingCart,
    activeIcon: ShoppingCart,
    hasNotification: true,
    subPaths: [
      { 
        href: '/orders/pending', 
        text: 'Pendientes',
        hasNotification: true,
        endAdornmentSubPath: 12
      },
      { href: '/orders/processing', text: 'En Proceso' },
      { href: '/orders/completed', text: 'Completadas' },
      { href: '/orders/cancelled', text: 'Canceladas' }
    ]
  },
  {
    type: 'LINK',
    href: '/products',
    text: 'Productos',
    icon: Package,
    activeIcon: Package,
    subPaths: [
      { href: '/products/list', text: 'Catálogo' },
      { href: '/products/categories', text: 'Categorías' },
      { href: '/products/inventory', text: 'Inventario' },
      { href: '/products/promotions', text: 'Promociones' }
    ]
  },
  {
    type: 'LINK',
    href: '/shipping',
    text: 'Envíos',
    icon: Truck,
    activeIcon: Truck,
    endAdornment: 22,
    subPaths: [
      { href: '/shipping/active', text: 'Envíos Activos' },
      { href: '/shipping/tracking', text: 'Rastreo' },
      { href: '/shipping/rates', text: 'Tarifas' },
      { href: '/shipping/zones', text: 'Zonas de Envío' }
    ]
  },
  {
    type: 'LINK',
    href: '/analytics',
    text: 'Analíticas',
    icon: BarChart3,
    activeIcon: BarChart3,
    subPaths: [
      { href: '/analytics/sales', text: 'Ventas' },
      { href: '/analytics/traffic', text: 'Tráfico' },
      { href: '/analytics/conversions', text: 'Conversiones' },
      { href: '/analytics/reports', text: 'Reportes' }
    ]
  },
  {
    type: 'LINK',
    href: '/customers',
    text: 'Clientes',
    icon: Users,
    activeIcon: Users
  },
  {
    type: 'STATIC_TITLE',
    text: 'CONFIGURACIÓN',
  },
  {
    type: 'LINK',
    href: '/settings',
    text: 'Configuración',
    icon: Settings,
    activeIcon: Settings,
    subPaths: [
      { href: '/settings/general', text: 'General' },
      { href: '/settings/payments', text: 'Métodos de Pago' },
      { href: '/settings/shipping', text: 'Opciones de Envío' },
      { href: '/settings/taxes', text: 'Impuestos' },
      { href: '/settings/notifications', text: 'Notificaciones' },
      { href: '/settings/integrations', text: 'Integraciones' }
    ]
  },
  {
    type: 'INFORMATIVE_TEXT',
    text: 'v2.1.0 • Última actualización: Hoy',
  }
];

// Configuración del T1Selector
const t1SelectorConfig: T1SelectorProps = {
  storeBaseUrl: '/store',
  shipping: true,
  payment: true,
  store: true,
  shippingBaseUrl: '/shipping',
  paymentBaseUrl: '/payments',
  ecosystemTitle: 'Ecosistema T1',
  itemsOrder: ['store', 'shipping', 'payment']
};

// Meta configuración
const meta: Meta<typeof LayoutMenu> = {
  title: 'organisms/LayoutMenu',
  component: LayoutMenu,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
LayoutMenu es el componente principal de layout que integra Navbar y Sidebar con gestión avanzada de estado.

### Características principales:
- 🎯 **Gestión automática de viewport**: Se adapta automáticamente a desktop, tablet y móvil
- 💾 **Persistencia de preferencias**: Guarda el estado del sidebar en localStorage
- 🎨 **Animaciones fluidas**: Transiciones suaves con Framer Motion
- 📱 **Responsive avanzado**: Comportamiento diferente según el dispositivo
- 🔄 **Estado sincronizado**: Navbar y Sidebar comparten el mismo estado
- 🎛️ **Callbacks extensivos**: Control total sobre cambios de estado
- 🏗️ **Arquitectura modular**: Fácil de extender y personalizar

### Casos de uso:
- Aplicaciones de e-commerce con múltiples tiendas
- Dashboards administrativos complejos
- Plataformas SaaS multi-tenant
- Sistemas de gestión empresarial
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    navBarProps: {
      description: 'Propiedades para configurar el Navbar',
      control: { type: 'object' }
    },
    sideBarProps: {
      description: 'Propiedades para configurar el Sidebar',
      control: { type: 'object' }
    },
    menuCallbacks: {
      description: 'Callbacks para eventos del menú',
      control: { type: 'object' }
    },
    config: {
      description: 'Configuración general del layout',
      control: { type: 'object' }
    },
    children: {
      description: 'Contenido principal de la aplicación',
      control: { type: 'text' }
    }
  }
};

export default meta;
type Story = StoryObj<Meta<typeof LayoutMenu>>;

// Historia: Default
export const Default: Story = {
  args: {
    navBarProps: {
      user: sampleUser,
      stores: sampleStores,
      currentStore: sampleStores[0],
      shippingBannerTitle: 'envíos',
      profileMenuItems,
      showBalance: true,
      showSearchInput: true,
      searchPlaceholder: 'Buscar productos, órdenes...',
      t1SelectorConfig,
      texts: {
        logout: 'Cerrar sesión'
      },
      colorProfile: '#db3b2b'
    },
    sideBarProps: {
      menuPaths,
      shippingBannerTitle: 'envíos',
      showCreateButton: true,
      createButtonText: 'Nueva Orden',
      createButtonPath: '/orders/new',
      currentPath: '/dashboard',
      showBalance: true,
      balanceBannerConfig: {
        balance: {
          monto_actual: 125430.50,
          comercio_id: 123,
          comercio_id_t1paginas: 'store-123',
          credito: true
        },
        BALLANCE_PATH: '/billing/balance'
      }
    },
    config: {
      animations: true,
      persistPreferences: true
    },
    children: (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Bienvenido al Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Este es un ejemplo del componente LayoutMenu con todas sus funcionalidades.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Ventas Totales', value: '$125,430', trend: '+12%', icon: TrendingUp, color: 'text-green-600' },
            { title: 'Órdenes Nuevas', value: '48', trend: '+5%', icon: ShoppingCart, color: 'text-blue-600' },
            { title: 'Clientes Activos', value: '1,234', trend: '+8%', icon: Users, color: 'text-purple-600' },
            { title: 'Tasa de Conversión', value: '3.2%', trend: '-2%', icon: Activity, color: 'text-red-600' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <span className={`text-sm font-semibold ${stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trend}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
};

// Historia: Con Estado Controlado
export const ControlledState: Story = {
  render: () => {
    const [menuState, setMenuState] = useState<MenuState | null>(null);
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (message: string) => {
      const timestamp = new Date().toLocaleTimeString();
      setLogs(prev => [`[${timestamp}] ${message}`, ...prev.slice(0, 9)]);
    };

    const menuCallbacks = {
      onMenuStateChange: (state: MenuState) => {
        setMenuState(state);
        addLog(`Menu state changed: ${JSON.stringify(state)}`);
      },
      onToggleOpen: (isOpen: boolean) => {
        addLog(`Sidebar toggled: ${isOpen ? 'OPEN' : 'CLOSED'}`);
      },
      onToggleReduced: (isReduced: boolean) => {
        addLog(`Sidebar ${isReduced ? 'REDUCED' : 'EXPANDED'}`);
      },
      onViewportChange: (viewport: MenuState['viewport']) => {
        addLog(`Viewport changed to: ${viewport}`);
      }
    };

    return (
      <LayoutMenu
        navBarProps={{
          user: sampleUser,
          stores: sampleStores,
          currentStore: sampleStores[0],
          shippingBannerTitle: 'envíos',
          profileMenuItems,
          showBalance: true,
          showSearchInput: true,
          onSearch: (data) => addLog(`Search: "${data.search}"`),
          onStoreChange: (storeId) => addLog(`Store changed to ID: ${storeId}`),
          onLogout: () => addLog('User logged out'),
          texts: {
            logout: 'Cerrar sesión'
          }
        }}
        sideBarProps={{
          menuPaths,
          shippingBannerTitle: 'envíos',
          showCreateButton: true,
          createButtonText: 'Nueva Orden',
          createButtonPath: '/orders/new',
          currentPath: '/dashboard',
          onPathChange: (path) => addLog(`Navigation to: ${path}`),
          onCreateClick: () => addLog('Create button clicked')
        }}
        menuCallbacks={menuCallbacks}
        config={{
          animations: true,
          persistPreferences: true
        }}
      >
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Panel de Estado */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Estado Actual del Menú
              </h2>
              {menuState && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-gray-600">Sidebar:</span>
                    <span className={`font-semibold ${menuState.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                      {menuState.isOpen ? 'Abierto' : 'Cerrado'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-gray-600">Estado:</span>
                    <span className={`font-semibold ${menuState.isReduced ? 'text-orange-600' : 'text-blue-600'}`}>
                      {menuState.isReduced ? 'Reducido' : 'Expandido'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-gray-600">Viewport:</span>
                    <span className="font-semibold capitalize">{menuState.viewport}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-600">Dimensiones:</span>
                    <span className="font-mono text-sm">{menuState.width} x {menuState.height}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Panel de Logs */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Registro de Eventos
              </h2>
              <div className="h-64 overflow-y-auto">
                {logs.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    Los eventos aparecerán aquí...
                  </p>
                ) : (
                  <div className="space-y-2">
                    {logs.map((log, idx) => (
                      <div key={idx} className="text-sm font-mono text-gray-700 p-2 bg-gray-50 rounded">
                        {log}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </LayoutMenu>
    );
  }
};

// Historia: Modo Tablet
export const TabletMode: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'ipad'
    }
  },
  args: {
    ...Default.args,
    children: (
      <div className="p-6">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-blue-800 mb-2">
            Modo Tablet Activo
          </h2>
          <p className="text-blue-700">
            En tablets, el sidebar se mantiene abierto pero en estado reducido por defecto
            para optimizar el espacio de pantalla.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <div className="h-32 bg-gray-200 rounded mb-3"></div>
              <h3 className="font-semibold">Tarjeta {i + 1}</h3>
              <p className="text-sm text-gray-600">Contenido de ejemplo</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
};

// Historia: Modo Móvil
export const MobileMode: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone12'
    }
  },
  args: {
    ...Default.args,
    children: (
      <div className="p-4">
        <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-bold text-purple-800 mb-2">
            Modo Móvil Activo
          </h2>
          <p className="text-purple-700 text-sm">
            En dispositivos móviles, el sidebar funciona como un drawer con overlay.
            El banner de envíos se muestra dentro del sidebar.
          </p>
        </div>
        
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                <div className="flex-1">
                  <h3 className="font-semibold">Item {i + 1}</h3>
                  <p className="text-sm text-gray-600">Descripción breve</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
};

// Historia: Sin Animaciones
export const NoAnimations: Story = {
  args: {
    ...Default.args,
    config: {
      animations: false,
      persistPreferences: true
    },
    children: (
      <div className="p-8">
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-yellow-800 mb-2">
            Animaciones Desactivadas
          </h2>
          <p className="text-yellow-700">
            Las transiciones están deshabilitadas para mejorar el rendimiento
            o por preferencias de accesibilidad.
          </p>
        </div>
        <p className="text-gray-600">
          Prueba a abrir/cerrar el sidebar y cambiar entre estados para ver
          que los cambios son instantáneos.
        </p>
      </div>
    )
  }
};

// Historia: Breakpoints Personalizados
export const CustomBreakpoints: Story = {
  args: {
    ...Default.args,
    config: {
      animations: true,
      persistPreferences: true,
      customBreakpoints: {
        mobile: 600,
        tablet: 900
      }
    },
    children: (
      <div className="p-8">
        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-indigo-800 mb-2">
            Breakpoints Personalizados
          </h2>
          <div className="text-indigo-700">
            <p className="mb-2">Los breakpoints han sido modificados:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Móvil: &lt; 600px (default: 750px)</li>
              <li>Tablet: 600px - 900px (default: 750px - 1110px)</li>
              <li>Desktop: &gt; 900px (default: 1110px)</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-600">
          Redimensiona la ventana para ver cómo el layout responde con los nuevos breakpoints.
        </p>
      </div>
    )
  }
};

// Historia: Playground Interactivo
export const Playground: Story = {
  render: () => {
    const [config, setConfig] = useState({
      showBalance: true,
      showSearchInput: true,
      showCreateButton: true,
      animations: true,
      persistPreferences: true
    });

    const [customContent, setCustomContent] = useState('dashboard');

    const contentMap = {
      dashboard: (
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Dashboard Principal</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded mb-4"></div>
                <h3 className="font-semibold">Widget {i}</h3>
                <p className="text-sm text-gray-600">Información importante</p>
              </div>
            ))}
          </div>
        </div>
      ),
      orders: (
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Gestión de Órdenes</h1>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Orden
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cliente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[1, 2, 3, 4, 5].map(i => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap">#000{i}</td>
                    <td className="px-6 py-4 whitespace-nowrap">Cliente {i}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completado
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">${(i * 123.45).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
      products: (
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Catálogo de Productos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Producto {i + 1}</h3>
                  <p className="text-gray-600 text-sm mb-2">SKU: PRD-00{i + 1}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${(29.99 + i * 10).toFixed(2)}</span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    };

    return (
      <div>
        {/* Panel de Control */}
        <div className="bg-gray-100 p-6 border-b">
          <h2 className="text-lg font-bold mb-4">Panel de Control del Playground</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={config.showBalance}
                onChange={(e) => setConfig({ ...config, showBalance: e.target.checked })}
              />
              <span className="text-sm">Balance</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={config.showSearchInput}
                onChange={(e) => setConfig({ ...config, showSearchInput: e.target.checked })}
              />
              <span className="text-sm">Búsqueda</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={config.showCreateButton}
                onChange={(e) => setConfig({ ...config, showCreateButton: e.target.checked })}
              />
              <span className="text-sm">Botón Crear</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={config.animations}
                onChange={(e) => setConfig({ ...config, animations: e.target.checked })}
              />
              <span className="text-sm">Animaciones</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={config.persistPreferences}
                onChange={(e) => setConfig({ ...config, persistPreferences: e.target.checked })}
              />
              <span className="text-sm">Persistencia</span>
            </label>
            <select
              value={customContent}
              onChange={(e) => setCustomContent(e.target.value)}
              className="px-3 py-1 border rounded text-sm"
            >
              <option value="dashboard">Dashboard</option>
              <option value="orders">Órdenes</option>
              <option value="products">Productos</option>
            </select>
          </div>
        </div>

        {/* Layout Menu */}
        <LayoutMenu
          navBarProps={{
            user: sampleUser,
            stores: sampleStores,
            currentStore: sampleStores[0],
            shippingBannerTitle: 'envíos',
            profileMenuItems,
            showBalance: config.showBalance,
            showSearchInput: config.showSearchInput,
            t1SelectorConfig,
            texts: {
              logout: 'Cerrar sesión'
            }
          }}
          sideBarProps={{
            menuPaths,
            shippingBannerTitle: 'envíos',
            showCreateButton: config.showCreateButton,
            createButtonText: 'Nueva Orden',
            createButtonPath: '/orders/new',
            currentPath: `/${customContent}`,
            showBalance: config.showBalance
          }}
          config={{
            animations: config.animations,
            persistPreferences: config.persistPreferences
          }}
        >
          {contentMap[customContent as keyof typeof contentMap]}
        </LayoutMenu>
      </div>
    );
  }
};