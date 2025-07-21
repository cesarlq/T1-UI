interface UseNavigationProps {
    dispatch: any;
    concatStoreId?: boolean;
    currentUserId?: string | number;
    setActiveSubPath: (path: string) => void;
    onNavigate?: (path: string) => void;
    mobile?: boolean;
    onToggleOpen?: (open: boolean) => void;
    triggerHaptic: (pattern: number | number[]) => void;
}
export declare const useNavigation: ({ dispatch, concatStoreId, currentUserId, setActiveSubPath, onNavigate, mobile, onToggleOpen, triggerHaptic }: UseNavigationProps) => {
    handleNavigation: (targetHref: string) => Promise<boolean | undefined>;
    cleanupNavigation: () => void;
};
export {};
//# sourceMappingURL=useNavigation.d.ts.map