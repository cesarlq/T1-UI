// ========================================================================
// TYPES & INTERFACES
// ========================================================================

import { MenuPath } from "@/components/organisms/Sidebar";

export interface ItemLinkProps extends MenuPath {
  className?: string;
  index: number;
  sidebarReduce: boolean;
  enlargeByHover?: boolean;
  onClickPath: (index: number) => void;
  openSubMenu: boolean;
  activePath: string;
  setActivePath: (path: string) => void;
  activeSubPath: string;
  setActiveSubPath: (path: string) => void;
  mobile: boolean;
  currentUserId?: string | number;
  restrictedPaths?: string[];
  onNavigate?: (path: string) => void;
  onToggleOpen?: (isOpen: boolean) => void;
  autoNavigateToFirstSubPath?: boolean;
  hasNotification?: boolean;
  dataTourTarget?: string;
  pendingNavigation?: string;
}

// State management optimizado
export interface MenuItemState {
  isNavigating: boolean;
  isHovered: boolean;
  isFocused: boolean;
  ripples: Array<{ id: number; x: number; y: number }>;
  navigationProgress: number;
  mouseX: number;
  mouseY: number;
}

export type MenuItemAction = 
  | { type: 'SET_NAVIGATING'; payload: boolean }
  | { type: 'SET_HOVERED'; payload: boolean }
  | { type: 'SET_FOCUSED'; payload: boolean }
  | { type: 'ADD_RIPPLE'; payload: { x: number; y: number } }
  | { type: 'REMOVE_RIPPLE'; payload: number }
  | { type: 'SET_PROGRESS'; payload: number }
  | { type: 'SET_MOUSE_POSITION'; payload: { x: number; y: number } }
  | { type: 'RESET_MOUSE_POSITION' };