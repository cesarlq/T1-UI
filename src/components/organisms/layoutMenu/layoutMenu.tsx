import React, { useEffect, useCallback, useMemo, useRef, useLayoutEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Sidebar } from '../Sidebar/Sidebar';
import { Navbar } from '../Navbar/Navbar';
import { T1ShippingBanner } from '../../molecules/T1ShippingBanner';
import { useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuProvider, useMenu } from '@/utils/menu/menuContext';
import { LayoutMenuProps, MenuState } from './LayoutMenu.types';

const ANIMATION_DURATION = 300;
const STORAGE_KEY = 't1-menu-preferences';

const DEFAULT_BREAKPOINTS = {
  mobile: 750,
  tablet: 1110,
} as const;

const TRANSITIONS = {
  sidebar: {
    type: "spring",
    stiffness: 260,
    damping: 20,
    duration: ANIMATION_DURATION / 1000,
  },
  content: {
    type: "tween",
    ease: "easeInOut",
    duration: ANIMATION_DURATION / 1000,
  },
} as const;

// ============================================================================
// HOOKS
// ============================================================================

const useViewport = (customBreakpoints?: { mobile?: number; tablet?: number }) => {
  const theme = useTheme();
  const breakpoints = { ...DEFAULT_BREAKPOINTS, ...customBreakpoints };
  
  const isMobile = useMediaQuery(theme.breakpoints.down(breakpoints.mobile));
  const isTablet = useMediaQuery(theme.breakpoints.between(breakpoints.mobile, breakpoints.tablet));
  const isDesktop = useMediaQuery(theme.breakpoints.up(breakpoints.tablet));
  
  const viewport = useMemo<MenuState['viewport']>(() => {
    if (isMobile) return 'mobile';
    if (isTablet) return 'tablet';
    return 'desktop';
  }, [isMobile, isTablet]);
  
  const dimensions = useMemo(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  }), []);
  
  return { viewport, isMobile, isTablet, isDesktop, dimensions };
};

// Hook optimizado para persistir preferencias
const useMenuPreferences = (enabled: boolean = true) => {
  // 🔥 Inicializar con el valor correcto desde el principio
  const [preferences, setPreferences] = React.useState<{
    isReduced?: boolean;
    lastViewport?: MenuState['viewport'];
  }>(() => {
    if (!enabled || typeof window === 'undefined') return {};
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.warn('Failed to load menu preferences:', error);
      return {};
    }
  });
  
  // 🔥 Usar useRef para savePreferences para evitar re-renders
  const savePreferencesRef = useRef((prefs: typeof preferences) => {
    if (!enabled || typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
      setPreferences(prefs);
    } catch (error) {
      console.warn('Failed to save menu preferences:', error);
    }
  });
  
  // Actualizar la referencia cuando enabled cambie
  useEffect(() => {
    savePreferencesRef.current = (prefs: typeof preferences) => {
      if (!enabled || typeof window === 'undefined') return;
      
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
        setPreferences(prefs);
      } catch (error) {
        console.warn('Failed to save menu preferences:', error);
      }
    };
  }, [enabled]);
  
  const savePreferences = useCallback((prefs: typeof preferences) => {
    savePreferencesRef.current(prefs);
  }, []);
  
  return { preferences, savePreferences };
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

function LayoutMenuContent({ 
  navBarProps, 
  sideBarProps, 
  menuCallbacks,
  children,
  config = {} 
}: LayoutMenuProps) {
  const theme = useTheme();
  const { isOpen, isReduced, setOpen, setReduced, toggleOpen, toggleReduced } = useMenu();
  const { viewport, isMobile, isTablet, isDesktop, dimensions } = useViewport(config.customBreakpoints);
  const { preferences, savePreferences } = useMenuPreferences(config.persistPreferences ?? true);
  
  // Referencias para evitar re-renderizados innecesarios
  const isInitializedRef = useRef(false);
  const userHasInteractedRef = useRef(false);
  const lastViewportRef = useRef<MenuState['viewport'] | null>(null);
  
  // 🔥 IMPORTANTE: Usar refs para valores que necesitamos en callbacks
  const preferencesRef = useRef(preferences);
  const viewportRef = useRef(viewport);
  
  // Actualizar refs cuando cambien los valores
  useEffect(() => {
    preferencesRef.current = preferences;
  }, [preferences]);
  
  useEffect(() => {
    viewportRef.current = viewport;
  }, [viewport]);
  
  // Estado del menú para callbacks
  const menuState: MenuState = useMemo(() => ({
    isOpen,
    isReduced,
    viewport,
    width: dimensions.width,
    height: dimensions.height,
  }), [isOpen, isReduced, viewport, dimensions]);
  
  // 🔥 SOLUCIÓN: Usar ref para menuCallbacks para evitar re-renders
  const menuCallbacksRef = useRef(menuCallbacks);
  menuCallbacksRef.current = menuCallbacks;

  // Notificar cambios de estado SIN incluir menuCallbacks en dependencias
  useEffect(() => {
    menuCallbacksRef.current?.onMenuStateChange?.(menuState);
  }, [menuState]);
  
  // 🔥 SOLUCIÓN: Usar useLayoutEffect para la inicialización
  useLayoutEffect(() => {
    // Solo ejecutar una vez
    if (isInitializedRef.current) return;
    isInitializedRef.current = true;
    
    // Verificar si el usuario cerró manualmente
    if (sessionStorage.getItem('t1-sidebar-manually-closed') === 'true') {
      return;
    }
    
    // Configuración inicial basada en viewport actual
    const currentViewport = viewportRef.current;
    const currentPreferences = preferencesRef.current;
    
    switch (currentViewport) {
      case 'mobile':
        setOpen(false);
        setReduced(false);
        break;
      case 'tablet':
        setOpen(true);
        setReduced(currentPreferences.isReduced ?? true);
        break;
      case 'desktop':
        setOpen(true);
        setReduced(currentPreferences.isReduced ?? false);
        break;
    }
    
    lastViewportRef.current = currentViewport;
  }, []); // Sin dependencias, solo se ejecuta una vez
  
  // 🔥 SOLUCIÓN: Manejar cambios de viewport SIN incluir setOpen y setReduced en dependencias
  useEffect(() => {
    // Skip si no está inicializado
    if (!isInitializedRef.current) return;
    
    // Skip si el usuario acaba de interactuar
    if (userHasInteractedRef.current) return;
    
    // Skip si el viewport no cambió
    if (lastViewportRef.current === viewport) return;
    
    // Verificar si el usuario cerró manualmente
    if (sessionStorage.getItem('t1-sidebar-manually-closed') === 'true') {
      return;
    }
    
    // Actualizar basado en el nuevo viewport
    switch (viewport) {
      case 'mobile':
        setOpen(false);
        setReduced(false);
        break;
      case 'tablet':
        setOpen(true);
        setReduced(preferences.isReduced ?? true);
        break;
      case 'desktop':
        setOpen(true);
        setReduced(preferences.isReduced ?? false);
        break;
    }
    
    lastViewportRef.current = viewport;
  }, [viewport]); // Solo viewport como dependencia
  
  // Resetear el flag de interacción del usuario
  useEffect(() => {
    if (!userHasInteractedRef.current) return;
    
    const timer = setTimeout(() => {
      userHasInteractedRef.current = false;
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [isReduced, isOpen]);
  
  // Guardar preferencias cuando cambie isReduced manualmente
  useEffect(() => {
    if (userHasInteractedRef.current && !isMobile) {
      savePreferences({
        isReduced,
        lastViewport: viewport,
      });
    }
  }, [isReduced, viewport, isMobile]); // Remover savePreferences de dependencias
  
  // 🔥 IMPORTANTE: Memoizar handlers para evitar re-renders en Navbar
  const handleToggleOpen = useCallback(() => {
    userHasInteractedRef.current = true;
    
    if (isOpen) {
      sessionStorage.setItem('t1-sidebar-manually-closed', 'true');
      setTimeout(() => {
        sessionStorage.removeItem('t1-sidebar-manually-closed');
      }, 2000);
    }
    
    toggleOpen();
    menuCallbacksRef.current?.onToggleOpen?.(!isOpen);
  }, [toggleOpen, isOpen]); // Remover menuCallbacks de dependencias
  
  const handleToggleReduce = useCallback(() => {
    userHasInteractedRef.current = true;
    toggleReduced();
    menuCallbacksRef.current?.onToggleReduced?.(!isReduced);
  }, [toggleReduced, isReduced]); // Remover menuCallbacks de dependencias
  
  const handleToggleWithAnimation = useCallback(() => {
    if (isMobile) {
      handleToggleOpen();
    } else {
      handleToggleReduce();
    }
  }, [isMobile, handleToggleOpen, handleToggleReduce]);
  
  // 🔥 IMPORTANTE: Memoizar el componente MobileTopBanner
  const MobileTopBanner = useCallback<React.FC<{ className?: string }>>(
    ({ className = '' }) => (
      <motion.div
        className={`${className} mt-3`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={TRANSITIONS.content}
      >
        <T1ShippingBanner
          brandText={sideBarProps.shippingBannerTitle || navBarProps.shippingBannerTitle}
          isMobile={true}
          isReduced={isReduced}
          isOpen={isOpen}
          onToggleOpen={handleToggleOpen}
        />
      </motion.div>
    ),
    [sideBarProps.shippingBannerTitle, navBarProps.shippingBannerTitle, isReduced, isOpen, handleToggleOpen]
  );
  
  // 🔥 IMPORTANTE: Usar useRef para handleToggleWithAnimation para evitar re-renders
  const handleToggleWithAnimationRef = useRef(handleToggleWithAnimation);
  
  // Actualizar la referencia cuando cambie la función
  useEffect(() => {
    handleToggleWithAnimationRef.current = handleToggleWithAnimation;
  }, [handleToggleWithAnimation]);
  
  // Función estable que usa la referencia
  const stableHandleToggleWithAnimation = useCallback(() => {
    handleToggleWithAnimationRef.current();
  }, []);
  
  // 🔥 IMPORTANTE: Memoizar las props del Navbar para evitar re-renders
  const navbarProps = useMemo(() => ({
    ...navBarProps,
    className: "navbar-fixed",
    shippingBannerTitle: navBarProps.shippingBannerTitle,
    isMobile,
    texts: {
      logout: "Cerrar sesión",
      ...navBarProps.texts
    },
    onReducerHandle: stableHandleToggleWithAnimation,
    sidebarReduce: isReduced,
  }), [navBarProps, isMobile, isReduced, stableHandleToggleWithAnimation]);
  
  return (
    <div className="layout-menu-container">
      {/* Sidebar con overlay para móvil */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.preventDefault();
              e.stopPropagation();
              handleToggleOpen();
            }}
            onTouchEnd={(e: React.TouchEvent<HTMLDivElement>) => {
              e.preventDefault();
              e.stopPropagation();
              handleToggleOpen();
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#000',
              zIndex: 10,
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
            }}
          />
        )}
      </AnimatePresence>
      
      <Sidebar
        {...sideBarProps}
        TopBanner={isMobile ? MobileTopBanner : undefined}
        isOpen={isOpen}
        isReduced={isReduced}
        isMobile={isMobile}
        onToggleOpen={handleToggleOpen}
        onToggleReduce={handleToggleReduce}
      />
      
      {/* Main content area */}
      <motion.main
        className={`main-content ${isReduced ? 'sidebar-reduced' : 'sidebar-expanded'}`}
        animate={{
          marginLeft: isMobile ? 0 : isOpen ? (isReduced ? '70px' : '280px') : 0,
        }}
        transition={TRANSITIONS.content}
        style={{
          minHeight: '100vh',
          position: 'relative',
          justifyItems: 'center'
        }}
      >
        <Navbar {...navbarProps} />
        
        {/* Área de contenido */}
        <div className="content-area" style={{ 
          paddingTop: `calc(${theme.spacing(3)} + 60px)`,
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
          maxHeight: '100vh',
          maxWidth: '100%',
          width: '100%'
        }}>
          {children}
        </div>
      </motion.main>
    </div>
  );
}

/**
 * Componente principal del Layout Menu
 * Provee el contexto y gestiona todo el estado del menú
 */
export default function LayoutMenu(props: LayoutMenuProps) {
  const { config = {} } = props;
  
  const content = (
    <MenuProvider>
      <LayoutMenuContent {...props} />
    </MenuProvider>
  );
  
  if (config.animations !== false) {
    return <AnimatePresence mode="wait">{content}</AnimatePresence>;
  }
  
  return content;
}
