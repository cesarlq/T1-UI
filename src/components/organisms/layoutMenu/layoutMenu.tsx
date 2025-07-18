import React, { useEffect, useCallback, useMemo, useRef } from 'react';
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

// Hook para persistir preferencias del usuario
const useMenuPreferences = (enabled: boolean = true) => {
  const [preferences, setPreferences] = React.useState<{
    isReduced?: boolean;
    lastViewport?: MenuState['viewport'];
  }>({});
  
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPreferences(JSON.parse(stored));
      }
    } catch (error) {
      console.warn('Failed to load menu preferences:', error);
    }
  }, [enabled]);
  
  const savePreferences = useCallback((prefs: typeof preferences) => {
    if (!enabled || typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch (error) {
      console.warn('Failed to save menu preferences:', error);
    }
  }, [enabled]);
  
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
  const { viewport, isMobile, dimensions } = useViewport(config.customBreakpoints);
  const { preferences, savePreferences } = useMenuPreferences(config.persistPreferences ?? true);
  
  // Referencias para evitar re-renderizados innecesarios
  const isInitialized = useRef(false);
  const userHasInteracted = useRef(false);
  const lastViewport = useRef(viewport);
  
  // Estado del menú para callbacks
  const menuState: MenuState = useMemo(() => ({
    isOpen,
    isReduced,
    viewport,
    width: dimensions.width,
    height: dimensions.height,
  }), [isOpen, isReduced, viewport, dimensions]);
  
  // Notificar cambios de estado
  useEffect(() => {
    menuCallbacks?.onMenuStateChange?.(menuState);
  }, [menuState, menuCallbacks]);
  
  // Inicialización y cambios de viewport
  useEffect(() => {
    if (sessionStorage.getItem('t1-sidebar-manually-closed') === 'true') {
      return;
    }
    // Solo ejecutar si:
    // 1. No se ha inicializado aún
    // 2. El viewport cambió Y el usuario no ha interactuado recientemente
    if (!isInitialized.current || (lastViewport.current !== viewport && !userHasInteracted.current)) {
      
      // Aplicar estado por defecto según viewport
      switch (viewport) {
        case 'mobile':
          setOpen(false);
          setReduced(false);
          break;
        case 'tablet':
          setOpen(true);
          // Usar preferencia guardada si existe, sino usar default
          setReduced(preferences.isReduced ?? true);
          break;
        case 'desktop':
          setOpen(true);
          // Usar preferencia guardada si existe, sino usar default
          setReduced(preferences.isReduced ?? false);
          break;
      }
      
      isInitialized.current = true;
      lastViewport.current = viewport;
    }
    
    // Reset el flag de interacción después de un tiempo
    if (userHasInteracted.current) {
      const timer = setTimeout(() => {
        userHasInteracted.current = false;
      }, 1000); // 1 segundo de "gracia" después de la interacción
      
      return () => clearTimeout(timer);
    }
  }, [viewport, setOpen, setReduced, preferences.isReduced]);
  
  // Guardar preferencias cuando cambie isReduced
  useEffect(() => {
    if (userHasInteracted.current && !isMobile) {
      savePreferences({
        isReduced,
        lastViewport: viewport,
      });
    }
  }, [isReduced, viewport, isMobile, savePreferences]);
  
  // Handlers con callbacks
const handleToggleOpen = useCallback(() => {
  userHasInteracted.current = true;
  
  // NUEVO: Marcar específicamente que fue una acción de cierre manual
  if (isOpen) {
    // Si estamos cerrando, marcar que fue intencional
    sessionStorage.setItem('t1-sidebar-manually-closed', 'true');
    // Remover la marca después de 2 segundos
    setTimeout(() => {
      sessionStorage.removeItem('t1-sidebar-manually-closed');
    }, 2000);
  }
  
  toggleOpen();
  menuCallbacks?.onToggleOpen?.(!isOpen);
}, [toggleOpen, isOpen, menuCallbacks]);
  
  const handleToggleReduce = useCallback(() => {
    userHasInteracted.current = true;
    toggleReduced();
    menuCallbacks?.onToggleReduced?.(!isReduced);
  }, [toggleReduced, isReduced, menuCallbacks]);
  
  // Handler para el toggle desde navbar/sidebar
  const handleToggleWithAnimation = useCallback(() => {
    if (isMobile) {
      handleToggleOpen();
    } else {
      handleToggleReduce();
    }
  }, [isMobile, handleToggleOpen, handleToggleReduce]);
  
  // TopBanner para móvil
  const MobileTopBanner: React.FC<{ className?: string }> = ({ className = '' }) => (
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
  );
  
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
        <Navbar
          {...navBarProps}
          className="navbar-fixed"
          shippingBannerTitle={navBarProps.shippingBannerTitle}
          isMobile={isMobile}
          texts={{
            logout: "Cerrar sesión",
            ...navBarProps.texts
          }}
          onReducerHandle={handleToggleWithAnimation}
          sidebarReduce={isReduced}
        />
        
        {/* Área de contenido */}
        <div className="content-area" style={{ 
          paddingTop: `calc(${theme.spacing(3)} + 60px)`, // Height del navbar
          paddingLeft: theme.spacing(3) ,
          paddingRight: theme.spacing(3) ,
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
  
  // Wrapper con AnimatePresence si las animaciones están habilitadas
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
