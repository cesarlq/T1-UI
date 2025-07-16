// components/ItemLink/ItemLink.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { 
  Home, 
  Settings, 
  User, 
  Bell, 
  LogOut,
  Moon,
  Sun,
  Mail,
  Shield,
  Palette,
  Database,
  Lock,
  CreditCard,
  Users,
  Activity,
  FileText,
  HelpCircle
} from 'lucide-react';
import { ItemLink } from './ItemLink';

// Decorator para envolver en Router
const RouterDecorator = (Story: any) => (
  <MemoryRouter initialEntries={['/']}>
    <Story />
  </MemoryRouter>
);

// Styles para el preview
const styles = `
  .sidebar-container {
    background: #f8f9fa;
    padding: 16px;
    width: 280px;
    min-height: 400px;
    border-radius: 8px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .sidebar-container.dark {
    background: #1a1b1e;
    color: #fff;
  }
  
  .sidebar-container.reduced {
    width: 80px;
  }
  
  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .story-controls {
    margin-bottom: 20px;
    padding: 16px;
    background: #fff;
    border-radius: 8px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  
  .story-controls.dark {
    background: #2a2b2e;
    color: #fff;
  }
  
  .control-group {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .control-group label {
    font-size: 14px;
    font-weight: 500;
  }
`;

const meta: Meta<typeof ItemLink> = {
  title: 'organisms/ItemLink',
  component: ItemLink,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'ItemLink es un componente de navegación avanzado que soporta submenús, notificaciones, estados de carga y animaciones premium.'
      }
    }
  },
  decorators: [RouterDecorator],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Meta<typeof ItemLink>>;

// Componente wrapper para manejar el estado
const ItemLinkWrapper = ({ items, sidebarReduce = false, mobile = false, darkMode = false }) => {
  const [activePath, setActivePath] = useState('/dashboard');
  const [activeSubPath, setActiveSubPath] = useState('');
  const [openMenuIndex, setOpenMenuIndex] = useState(-1);
  const [pendingNavigation, setPendingNavigation] = useState('');

  const handleNavigate = (path: string) => {
    setPendingNavigation(path);
    setTimeout(() => {
      setActiveSubPath(path);
      setPendingNavigation('');
    }, 300);
  };

  return (
    <>
      <style>{styles}</style>
      <div className={`sidebar-container ${sidebarReduce ? 'reduced' : ''} ${darkMode ? 'dark' : ''}`}>
        <ul className="nav-list">
          {items.map((item, index) => (
            <ItemLink
              key={item.href || index}
              {...item}
              index={index}
              sidebarReduce={sidebarReduce}
              mobile={mobile}
              activePath={activePath}
              setActivePath={setActivePath}
              activeSubPath={activeSubPath}
              setActiveSubPath={setActiveSubPath}
              openSubMenu={openMenuIndex === index}
              onClickPath={setOpenMenuIndex}
              onNavigate={handleNavigate}
              pendingNavigation={pendingNavigation}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

// Historia: Item Simple
export const SimpleItem: Story = {
  render: () => (
    <ItemLinkWrapper 
      items={[
        {
          text: 'Dashboard',
          href: '/dashboard',
          icon: Home,
          activeIcon: Home,
        }
      ]}
    />
  ),
};

// Historia: Item con Notificación
export const WithNotification: Story = {
  render: () => (
    <ItemLinkWrapper 
      items={[
        {
          text: 'Messages',
          href: '/messages',
          icon: Mail,
          activeIcon: Mail,
          hasNotification: true,
          endAdornment: <span style={{ fontSize: '12px', opacity: 0.7 }}>5 new</span>
        }
      ]}
    />
  ),
};

// Historia: Item con Submenú
export const WithSubmenu: Story = {
  render: () => (
    <ItemLinkWrapper 
      items={[
        {
          text: 'Settings',
          href: '/settings',
          icon: Settings,
          activeIcon: Settings,
          subPaths: [
            { text: 'Profile', href: '/settings/profile', icon: User },
            { text: 'Security', href: '/settings/security', icon: Shield },
            { text: 'Appearance', href: '/settings/appearance', icon: Palette },
            { text: 'Data & Privacy', href: '/settings/privacy', icon: Database }
          ]
        }
      ]}
    />
  ),
};

// Historia: Navegación Completa
export const CompleteNavigation: Story = {
  render: () => (
    <ItemLinkWrapper 
      items={[
        {
          text: 'Dashboard',
          href: '/dashboard',
          icon: Home,
          activeIcon: Home,
        },
        {
          text: 'Users',
          href: '/users',
          icon: Users,
          activeIcon: Users,
          hasNotification: true,
        },
        {
          text: 'Analytics',
          href: '/analytics',
          icon: Activity,
          activeIcon: Activity,
        },
        {
          text: 'Documents',
          href: '/documents',
          icon: FileText,
          activeIcon: FileText,
          endAdornment: <span style={{ fontSize: '12px', opacity: 0.7 }}>PRO</span>
        },
        {
          text: 'Settings',
          href: '/settings',
          icon: Settings,
          activeIcon: Settings,
          subPaths: [
            { text: 'Profile', href: '/settings/profile', icon: User },
            { text: 'Security', href: '/settings/security', icon: Lock },
            { text: 'Billing', href: '/settings/billing', icon: CreditCard, hasNotification: true },
            { text: 'Appearance', href: '/settings/appearance', icon: Palette }
          ]
        },
        {
          text: 'Help & Support',
          href: '/help',
          icon: HelpCircle,
          activeIcon: HelpCircle,
        }
      ]}
    />
  ),
};

// Historia: Sidebar Reducido
export const ReducedSidebar: Story = {
  render: () => {
    const [isReduced, setIsReduced] = useState(true);
    
    return (
      <>
        <div className="story-controls">
          <div className="control-group">
            <input 
              type="checkbox" 
              id="reduce" 
              checked={isReduced}
              onChange={(e) => setIsReduced(e.target.checked)}
            />
            <label htmlFor="reduce">Sidebar Reducido</label>
          </div>
        </div>
        <ItemLinkWrapper 
          sidebarReduce={isReduced}
          items={[
            {
              text: 'Dashboard',
              href: '/dashboard',
              icon: Home,
              activeIcon: Home,
            },
            {
              text: 'Users',
              href: '/users',
              icon: Users,
              activeIcon: Users,
              hasNotification: true,
            },
            {
              text: 'Settings',
              href: '/settings',
              icon: Settings,
              activeIcon: Settings,
              subPaths: [
                { text: 'Profile', href: '/settings/profile' },
                { text: 'Security', href: '/settings/security' }
              ]
            }
          ]}
        />
      </>
    );
  },
};


// Historia: Playground Interactivo
export const Playground: Story = {
  render: () => {
    const [config, setConfig] = useState({
      sidebarReduce: false,
      mobile: false,
      darkMode: false,
      showNotifications: true,
      enlargeByHover: false,
    });

    return (
      <>
        <div className={`story-controls ${config.darkMode ? 'dark' : ''}`}>
          <div className="control-group">
            <input 
              type="checkbox" 
              id="reduce-playground" 
              checked={config.sidebarReduce}
              onChange={(e) => setConfig({...config, sidebarReduce: e.target.checked})}
            />
            <label htmlFor="reduce-playground">Reducido</label>
          </div>
          
          <div className="control-group">
            <input 
              type="checkbox" 
              id="mobile-playground" 
              checked={config.mobile}
              onChange={(e) => setConfig({...config, mobile: e.target.checked})}
            />
            <label htmlFor="mobile-playground">Mobile</label>
          </div>
          
          
          <div className="control-group">
            <input 
              type="checkbox" 
              id="notifications-playground" 
              checked={config.showNotifications}
              onChange={(e) => setConfig({...config, showNotifications: e.target.checked})}
            />
            <label htmlFor="notifications-playground">Notificaciones</label>
          </div>
          
          <div className="control-group">
            <input 
              type="checkbox" 
              id="enlarge-playground" 
              checked={config.enlargeByHover}
              onChange={(e) => setConfig({...config, enlargeByHover: e.target.checked})}
            />
            <label htmlFor="enlarge-playground">Expandir al Hover</label>
          </div>
        </div>

        <ItemLinkWrapper 
          {...config}
          items={[
            {
              text: 'Dashboard',
              href: '/dashboard',
              icon: Home,
              activeIcon: Home,
              enlargeByHover: config.enlargeByHover,
            },
            {
              text: 'Messages',
              href: '/messages',
              icon: Mail,
              activeIcon: Mail,
              hasNotification: config.showNotifications,
              endAdornment: config.showNotifications ? <span style={{ fontSize: '12px', opacity: 0.7 }}>12</span> : null,
              enlargeByHover: config.enlargeByHover,
            },
            {
              text: 'Analytics',
              href: '/analytics',
              icon: Activity,
              activeIcon: Activity,
              enlargeByHover: config.enlargeByHover,
            },
            {
              text: 'Settings',
              href: '/settings',
              icon: Settings,
              activeIcon: Settings,
              enlargeByHover: config.enlargeByHover,
              subPaths: [
                { text: 'Profile', href: '/settings/profile', icon: User },
                { text: 'Security', href: '/settings/security', icon: Shield, hasNotification: config.showNotifications },
                { text: 'Appearance', href: '/settings/appearance', icon: Palette }
              ]
            },
            {
              text: 'Logout',
              href: '/logout',
              icon: LogOut,
              activeIcon: LogOut,
              enlargeByHover: config.enlargeByHover,
            }
          ]}
        />
      </>
    );
  },
};
