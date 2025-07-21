import { balanceI } from '@/components/molecules/BalanceBanner';
import { ReactNode, ComponentType } from 'react';

// Interfaces existentes
export interface SubPath {
  href: string;
  text: string;
  hasNotification?: boolean;
  endAdornmentSubPath?: ReactNode | string;
}

export interface MenuPath {
  href?: string;
  text?: string;
  icon?: any;
  activeIcon?: any;
  subPaths?: SubPath[];
  concatStoreId?: boolean;
  endAdornment?: ReactNode;
  type?: string | any | 'INFORMATIVE_TEXT';
  component?: ComponentType<any>;
  hasNotification?: boolean;
  autoNavigateToFirstSubPath?: boolean;
  dataTourTarget?: string;
}

export interface SidebarPropsI {
  // Props existentes
  shippingBannerTitle?: string;
  className?: string;
  menuPaths?: MenuPath[];
  TopBanner?: ComponentType;
  BottomBanner?: ComponentType<{ className?: string }> | ReactNode;
  BalanceBannerComponent?: ComponentType<{ className?: string }>;
  showCreateButton?: boolean;
  showInfoBand?: boolean;
  showBalance?: boolean;
  balanceBannerConfig?: {
    balance: balanceI;
    BALLANCE_PATH: string;
  };
  createButtonText?: string;
  createButtonPath?: string;
  breakpointReduce?: number;
  breakpointMobile?: number;
  currentUserId?: string | number;
  restrictedPaths?: string[];
  stores?: any[];
  currentStore?: any;
  onStoreChange?: (storeId: number) => void;
  createStoreUrl?: string;
  
  defaultAutoNavigateToFirstSubPath?: boolean;
  
  // Props opcionales para override externo (solo si se necesita)
  isOpen?: boolean;
  isReduced?: boolean;
  isMobile?: boolean;
  onToggleOpen?: (isOpen: boolean) => void;
  onToggleReduce?: (isReduced: boolean) => void;
  onCreateClick?: () => void;
  onNavigate?: (path: string) => void;
  
  // NUEVAS PROPS para reemplazar dependencias de Next.js
  /**
   * La ruta actual de la aplicación. Reemplaza el uso de usePathname() de Next.js
   * @default '/'
   */
  currentPath?: string;
  
  /**
   * Callback que se ejecuta cuando el Sidebar necesita cambiar la ruta.
   * Reemplaza el uso de router.push() de Next.js
   * @param path - La nueva ruta a la que navegar
   */
  onPathChange?: (path: string) => void;
  
  /**
   * Función personalizada para manejar la navegación.
   * Si se proporciona, se usará en lugar de onPathChange para todas las navegaciones.
   * Útil para implementar lógica de navegación personalizada (ej: validaciones, confirmaciones, etc.)
   * @param path - La nueva ruta a la que navegar
   * @param context - Contexto adicional sobre la navegación
   */
  onCustomNavigate?: (path: string, context?: { 
    isCreateButton?: boolean; 
    isMenuItem?: boolean; 
    menuItem?: MenuPath;
    fromMobile?: boolean;
  }) => void;
}
