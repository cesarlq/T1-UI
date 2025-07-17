
export interface T1ShippingBannerProps {
  className?: string;
  brandText?: string;
  isMobile?: boolean;
  
  // Comportamiento
  onNavigate?: (path: string) => void | Promise<void>;
  onToggleReduce?: () => void;
  onToggleOpen?: () => void;
  
  // Estado
  isReduced?: boolean;
  isOpen?: boolean;
  
  // Props legacy para compatibilidad
  onReducerHandle?: () => void;
  sidebarReduce?: boolean;
  navigationPath?: string; // Ruta a navegar
}
