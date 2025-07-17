import { balanceI } from "@/components/molecules/BalanceBanner/BalanceBanner.type";
import { ProfileMenuItem, User } from "@/components/molecules/Profile/Profile.type";
import { Store } from "@/components/molecules/StoreSelector/StoreSelector.type";
import { T1SelectorProps } from "@/components/molecules/T1Selector/T1Selector.types";

export interface NavbarPropsI {
  className?: string;
  showInfoBand?: boolean;
  showSearchInput?: boolean;
  showBalance?: boolean;
  user?: User | null;
  stores?: Store[];
  currentStore?: Store;
  
  // Solo el título del banner es configurable
  shippingBannerTitle?: string;
  
  // Configuración de items del menú del perfil
  profileMenuItems?: ProfileMenuItem[];
  
  // Event handlers
  onLogout?: () => void;
  onSearch?: (data: { search: string }) => void;
  onManageAccount?: (user: User) => void;
  onStoreChange?: (storeId: number) => void;
  onNavigate?: () => void;
  onReducerHandle: () => void ;
  sidebarReduce: boolean;
  
  // Prop para controlar si está en móvil
  isMobile?: boolean;

  // Component slots (solo los que realmente deben ser configurables)
  BalanceBannerComponent? : React.ComponentType<{ className?: string }> ;
  balanceBannerConfig?: {
    balance: balanceI,
    BALLANCE_PATH: string
  }
  T1Selector?: React.ComponentType<any>;
  SearchComponent?: React.ComponentType<any>;
  
  // Configuration for T1Selector
  t1SelectorConfig?: T1SelectorProps | null | undefined;
  itemsOrder?: ('store' | 'shipping' | 'payment')[];

  // Configuration
  searchPlaceholder?: string;
  trackingUrl?: string;
  accountUrl?: string;
  texts?: {
    logout?: string;
    searchPlaceholder?: string;
  };

  
  iconProfile?: string | undefined;
  colorProfile?: string
}
