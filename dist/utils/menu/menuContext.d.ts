import { ReactNode } from '../../../node_modules/react';

interface MenuContextType {
    isOpen: boolean;
    isReduced: boolean;
    setOpen: (open: boolean) => void;
    setReduced: (reduced: boolean) => void;
    toggleOpen: () => void;
    toggleReduced: () => void;
}
interface MenuProviderProps {
    children: ReactNode;
}
export declare function MenuProvider({ children }: MenuProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useMenu(): MenuContextType;
export {};
//# sourceMappingURL=menuContext.d.ts.map