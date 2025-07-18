interface UseKeyboardNavigationProps {
    onItemClick: (e: any) => void;
    subPaths?: any[];
    openSubMenu?: boolean;
    onClickPath: (index: number) => void;
    index: number;
    filteredSubPaths: any[];
    itemRef: React.RefObject<HTMLElement>;
    safeText: string;
}
export declare const useKeyboardNavigation: ({ onItemClick, subPaths, openSubMenu, onClickPath, index, filteredSubPaths, itemRef, safeText }: UseKeyboardNavigationProps) => {
    handleKeyDown: (e: React.KeyboardEvent) => void;
};
export {};
//# sourceMappingURL=useKeyboardNavigation.d.ts.map