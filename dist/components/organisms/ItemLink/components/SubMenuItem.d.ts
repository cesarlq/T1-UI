import { default as React } from '../../../../../node_modules/react';
import { SubPathItem, RippleType } from '../ItemLink.types';

interface SubMenuItemProps {
    subItem: SubPathItem;
    index: number;
    isActive: boolean;
    isNavigating: boolean;
    openSubMenu: boolean;
    ripples: RippleType[];
    onRemoveRipple: (id: number) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const SubMenuItem: React.MemoExoticComponent<({ subItem, index, isActive, isNavigating, openSubMenu, ripples, onRemoveRipple, onClick }: SubMenuItemProps) => import("react/jsx-runtime").JSX.Element>;
export {};
//# sourceMappingURL=SubMenuItem.d.ts.map