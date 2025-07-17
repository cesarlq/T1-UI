import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BREAKPOINTS, BreakpointKey, useResponsiveBreakpoints } from '../config/breakpoints';
import { useResponsiveTypography, TextVariant } from '../config/typography';
import { useResponsiveIcon, IconVariant, useMenuIconSize } from '../config/iconSizes';

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

export const useResponsiveDesign = () => {
  const theme = useTheme();
  const { getResponsiveValue: getBreakpointValue } = useResponsiveBreakpoints();
  const { getTypographyStyles } = useResponsiveTypography();
  const { getIconProps } = useResponsiveIcon();
  
  // Estados de dimensiones
  const [windowSize, setWindowSize] = useState<{ width: number | null; height: number | null }>({
    width: null,
    height: null,
  });

  // Media queries usando MUI
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));

  // Breakpoints personalizados
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.mobile - 1}px)`);
  const isTablet = useMediaQuery(`(min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${BREAKPOINTS.tablet - 1}px)`);
  const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.desktop}px)`);

  // Determinar breakpoint actual
  const getCurrentBreakpoint = (): BreakpointKey => {
    if (isXs) return 'xs';
    if (isSm) return 'sm';
    if (isMd) return 'md';
    if (isLg) return 'lg';
    if (isXl) return 'xl';
    return 'md'; // fallback
  };

  const currentBreakpoint = getCurrentBreakpoint();

  // Efecto para manejar resize
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 300);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Estado responsivo completo
  const responsiveState: ResponsiveState = {
    width: windowSize.width,
    height: windowSize.height,
    currentBreakpoint,
    isMobile,
    isTablet,
    isDesktop,
    isSmallScreen: isMobile,
    isLargeScreen: isDesktop,
  };

  // Funciones helper
  const getResponsiveTextStyles = (variant: TextVariant) => {
    return getTypographyStyles(variant);
  };

  const getResponsiveIconProps = (variant: IconVariant) => {
    return getIconProps(variant, currentBreakpoint);
  };

  const getResponsiveValue = <T,>(values: Partial<Record<BreakpointKey, T>>): T | undefined => {
    if (!windowSize.width) return undefined;
    
    return getBreakpointValue(values, windowSize.width);
  };

  // Configuración específica para menús
  const getMenuConfig = () => {
    const { getSidebarIconProps, getNavbarIconProps, getToggleIconProps } = useMenuIconSize(
      isMobile, 
      false // Este valor debería venir del estado del menú
    );

    return {
      sidebar: {
        iconProps: getSidebarIconProps(),
        textVariant: isMobile ? 'menuItem' : 'menuTitle' as TextVariant,
        spacing: isMobile ? 'responsive-sm' : 'responsive-md',
      },
      navbar: {
        iconProps: getNavbarIconProps(),
        textVariant: 'menuTitle' as TextVariant,
        height: isMobile ? '56px' : '60px',
      },
      toggle: {
        iconProps: getToggleIconProps(),
      }
    };
  };

  return {
    // Estado responsivo
    ...responsiveState,
    
    // Funciones helper
    getResponsiveTextStyles,
    getResponsiveIconProps,
    getResponsiveValue,
    getMenuConfig,
    
    // Breakpoints
    breakpoints: BREAKPOINTS,
    
    // Compatibilidad con el hook anterior
    isSmallScreen: isMobile,
  };
};

// Hook específico para componentes de menú
export const useMenuResponsive = (isMenuReduced: boolean = false) => {
  const responsive = useResponsiveDesign();
  const menuIconHook = useMenuIconSize(responsive.isMobile, isMenuReduced);
  
  return {
    ...responsive,
    menuIcons: menuIconHook,
    menuConfig: responsive.getMenuConfig(),
    
    // Configuraciones específicas del menú
    sidebarWidth: responsive.getResponsiveValue({
      xs: '274px',
      sm: '274px', 
      md: isMenuReduced ? '70px' : '250px',
      lg: isMenuReduced ? '70px' : '250px',
      xl: isMenuReduced ? '70px' : '250px',
    }) || '250px',
    
    navbarHeight: responsive.getResponsiveValue({
      xs: '56px',
      sm: '56px',
      md: '60px',
      lg: '60px',
      xl: '60px',
    }) || '60px',
  };
};

export default useResponsiveDesign;
