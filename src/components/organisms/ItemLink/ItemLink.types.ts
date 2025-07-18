// components/ItemLink/ItemLink.types.ts
import { ReactNode } from 'react';

export interface SubPathItem {
  href: string;
  text: string;
  icon?: any;
  hasNotification?: boolean;
  endAdornmentSubPath?: ReactNode;
}

export interface ItemLinkProps {
  className?: string;
  href?: string;
  text?: string;
  icon?: any;
  activeIcon?: any;
  subPaths?: SubPathItem[];
  concatStoreId?: boolean;
  endAdornment?: ReactNode;
  index: number;
  sidebarReduce?: boolean;
  enlargeByHover?: boolean;
  onClickPath: (index: number) => void;
  openSubMenu?: boolean;
  activePath?: string;
  setActivePath: (path: string) => void;
  activeSubPath?: string;
  setActiveSubPath: (path: string) => void;
  mobile?: boolean;
  currentUserId?: string | number;
  restrictedPaths?: string[];
  onNavigate?: (path: string) => void;
  onToggleOpen?: (open: boolean) => void;
  type?: string | number;
  component?: any;
  autoNavigateToFirstSubPath?: boolean;
  hasNotification?: boolean;
  dataTourTarget?: string;
  pendingNavigation?: string;
}

export interface RippleType {
  id: number;
  x: number;
  y: number;
}

export interface MenuItemState {
  isNavigating: boolean;
  isHovered: boolean;
  isFocused: boolean;
  ripples: RippleType[];
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