import { NavbarPropsI } from "../Navbar/Navbar.types";
import { SidebarPropsI } from "../Sidebar/Sidebar.types";

export interface MenuCallbacks {
  onMenuStateChange?: (state: MenuState) => void;
  onToggleOpen?: (isOpen: boolean) => void;
  onToggleReduced?: (isReduced: boolean) => void;
  onViewportChange?: (viewport: MenuState['viewport']) => void;
}

export interface LayoutMenuProps {
  navBarProps: Omit<NavbarPropsI, 'onReducerHandle' | 'sidebarReduce' | 'isMobile'>;
  sideBarProps: Omit<SidebarPropsI, 'onToggleOpen' | 'onToggleReduce' | 'isOpen' | 'isReduced' | 'isMobile'>;
  menuCallbacks?: MenuCallbacks;
  children?: React.ReactNode;
  config?: {
    animations?: boolean;
    persistPreferences?: boolean;
    customBreakpoints?: {
      mobile?: number;
      tablet?: number;
    };
  };
}


export interface MenuState {
  isOpen: boolean;
  isReduced: boolean;
  viewport: 'mobile' | 'tablet' | 'desktop';
  width: number;
  height: number;
}

export interface User {
  name: string;
  email: string;
  storeId?: string;
}

export interface Store {
  id: number;
  name: string;
}

export interface t1SelectorConfigI {
  storeBaseUrl?: string;
  shipping?: boolean;
  payment?: boolean;
  store?: boolean;
  shippingBaseUrl?: string;
  paymentBaseUrl?: string;
  ecosystemTitle?: string;
  itemsOrder?: ('store' | 'shipping' | 'payment')[];
  menuItems?: Array<{
    icon: string | React.ReactNode;
    label: string;
    href?: string;
    onClick?: () => void;
    target?: '_blank' | '_self';
    isActive?: boolean;
  }>;
}

