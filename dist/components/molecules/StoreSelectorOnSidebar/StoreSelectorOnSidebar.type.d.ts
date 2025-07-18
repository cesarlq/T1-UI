export interface Store {
    id: number;
    name: string;
}
export interface StoreSelectorProps {
    className?: string;
    stores?: Store[];
    currentStore?: Store;
    onStoreChange?: (storeId: number) => void;
    title?: string;
    searchPlaceholder?: string;
    newStoreText?: string;
    showNewStoreLink?: boolean;
    createStoreUrl: string;
    closeOnOutsideClick?: boolean;
    closeOnStoreSelect?: boolean;
    storeColors?: string[];
}
//# sourceMappingURL=StoreSelectorOnSidebar.type.d.ts.map