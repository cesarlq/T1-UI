// Interfaces
export interface Store {
  id: number;
  name: string;
}

export interface StoreSelectorProps {
  className?: string;
  stores?: Store[];
  currentStore?: Store;
  // Event handlers
  onStoreChange?: (storeId: number) => void;
  // Visual configuration
  title?: string;
  searchPlaceholder?: string;
  newStoreText?: string;
  showNewStoreLink?: boolean;
  // URLs
  createStoreUrl: string;
  // Behavior
  closeOnOutsideClick?: boolean;
  closeOnStoreSelect?: boolean;
  // Colors for store avatars
  storeColors?: string[];
}