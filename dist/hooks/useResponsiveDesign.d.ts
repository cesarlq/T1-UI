import { BreakpointKey } from '../config/breakpoints';
import { TextVariant } from '../config/typography';
import { IconVariant } from '../config/iconSizes';
export interface ResponsiveState {
    width: number | null;
    height: number | null;
    currentBreakpoint: BreakpointKey;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isSmallScreen: boolean;
    isLargeScreen: boolean;
}
export declare const useResponsiveDesign: () => {
    getResponsiveTextStyles: (variant: TextVariant) => any;
    getResponsiveIconProps: (variant: IconVariant) => any;
    getResponsiveValue: <T>(values: Partial<Record<BreakpointKey, T>>) => T | undefined;
    getMenuConfig: () => {
        sidebar: {
            iconProps: any;
            textVariant: any;
            spacing: string;
        };
        navbar: {
            iconProps: any;
            textVariant: TextVariant;
            height: string;
        };
        toggle: {
            iconProps: any;
        };
    };
    breakpoints: any;
    isSmallScreen: boolean;
    width: number | null;
    height: number | null;
    currentBreakpoint: BreakpointKey;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isLargeScreen: boolean;
};
export declare const useMenuResponsive: (isMenuReduced?: boolean) => {
    menuIcons: any;
    menuConfig: {
        sidebar: {
            iconProps: any;
            textVariant: any;
            spacing: string;
        };
        navbar: {
            iconProps: any;
            textVariant: TextVariant;
            height: string;
        };
        toggle: {
            iconProps: any;
        };
    };
    sidebarWidth: string;
    navbarHeight: string;
    getResponsiveTextStyles: (variant: TextVariant) => any;
    getResponsiveIconProps: (variant: IconVariant) => any;
    getResponsiveValue: <T>(values: Partial<Record<BreakpointKey, T>>) => T | undefined;
    getMenuConfig: () => {
        sidebar: {
            iconProps: any;
            textVariant: any;
            spacing: string;
        };
        navbar: {
            iconProps: any;
            textVariant: TextVariant;
            height: string;
        };
        toggle: {
            iconProps: any;
        };
    };
    breakpoints: any;
    isSmallScreen: boolean;
    width: number | null;
    height: number | null;
    currentBreakpoint: BreakpointKey;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isLargeScreen: boolean;
};
export default useResponsiveDesign;
//# sourceMappingURL=useResponsiveDesign.d.ts.map