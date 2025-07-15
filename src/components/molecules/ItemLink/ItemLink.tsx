'use client';

import React, { useEffect, useState, useMemo, useCallback, useRef, useReducer, isValidElement } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import ArrowMenu from '../../assets/arrow-menu.svg';
import Ellipse from '../../assets/Ellipse55.svg';
import styles from '../../styles/common/ItemLink.module.scss';
import { useSmartRouter } from '../../util/router-adapter';
import { SmartTooltip } from '../MenuComponent/SmartTooltip';
import { MenuItemAction, MenuItemState } from './ItemLink.type';



const menuItemReducer = (state: MenuItemState, action: MenuItemAction): MenuItemState => {
  switch (action.type) {
    case 'SET_NAVIGATING':
      return { ...state, isNavigating: action.payload };
    case 'SET_HOVERED':
      return { ...state, isHovered: action.payload };
    case 'SET_FOCUSED':
      return { ...state, isFocused: action.payload };
    case 'ADD_RIPPLE':
      return { 
        ...state, 
        ripples: [...state.ripples, { 
          id: Date.now(), 
          x: action.payload.x, 
          y: action.payload.y 
        }] 
      };
    case 'REMOVE_RIPPLE':
      return { 
        ...state, 
        ripples: state.ripples.filter(r => r.id !== action.payload) 
      };
    case 'SET_PROGRESS':
      return { ...state, navigationProgress: action.payload };
    case 'SET_MOUSE_POSITION':
      return { ...state, mouseX: action.payload.x, mouseY: action.payload.y };
    case 'RESET_MOUSE_POSITION':
      return { ...state, mouseX: 0, mouseY: 0 };
    default:
      return state;
  }
};

// ========================================================================
// ANIMATION VARIANTS - Apple/Linear Style
// ========================================================================

const springConfig = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

const itemVariants = {
  idle: { 
    x: 0,
    scale: 1,
  },
  hover: { 
    x: 3,
    scale: 1.01,
  },
  tap: { 
    scale: 0.98,
  },
  focused: {
    scale: 1.02,
  }
};

const iconVariants = {
  idle: { 
    rotate: 0, 
    scale: 1,
  },
  hover: { 
    rotate: -2,
    scale: 1.05,
  },
  active: {
    rotate: 0,
    scale: 1.1,
  }
};

const arrowVariants = {
  closed: { 
    rotate: 180,
    scale: 1,
  },
  open: { 
    rotate: 0,
    scale: 1.1,
  }
};

const subMenuVariants = {
  closed: {
    height: 0,
    opacity: 0,
    scale: 0.95,
  },
  open: {
    height: "auto",
    opacity: 1,
    scale: 1,
  }
};

// ========================================================================
// UTILITY COMPONENTS - Premium Design
// ========================================================================

const LoadingSpinner = React.memo(({ progress }: { progress?: number }) => {
  return (
    <div className={styles.loadingSpinner}>
      <svg width="16" height="16" viewBox="0 0 16 16">
        <circle 
          cx="8" 
          cy="8" 
          r="6" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeDasharray="30" 
          strokeDashoffset={progress ? 30 - (progress * 0.3) : 10}
          style={{
            transition: 'stroke-dashoffset 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        />
      </svg>
      {progress !== undefined && progress > 0 && (
        <div className={styles.progressText}>
          {Math.round(progress)}%
        </div>
      )}
    </div>
  );
});

const NotificationDot = React.memo(() => (
  <motion.div 
    className={styles.notificationDot}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={springConfig}
  >
    <Ellipse height={4} width={4} />
    
  </motion.div>
));

// Ripple Effect - GPU Optimized
const RippleEffect = React.memo(({ x, y, id, onComplete }: { 
  x: number; 
  y: number; 
  id: number;
  onComplete: (id: number) => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(id), 600);
    return () => clearTimeout(timer);
  }, [id, onComplete]);

  return (
    <motion.div
      className={styles.ripple}
      initial={{ scale: 0, opacity: 0.3 }}
      animate={{ scale: 4, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ 
        left: x, 
        top: y,
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
});

// Success Animation - Premium Feel
const NavigationSuccess = React.memo(() => (
  <motion.div 
    className={styles.successPulse}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1.2, opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className={styles.successInner} />
  </motion.div>
));

// ========================================================================
// MAIN COMPONENT - World-Class Implementation
// ========================================================================

export const ItemLink = React.memo(function ItemLink({
  className = '',
  href,
  text,
  icon,
  activeIcon,
  subPaths,
  concatStoreId,
  endAdornment,
  index,
  sidebarReduce,
  enlargeByHover = false,
  onClickPath,
  openSubMenu,
  activePath,
  setActivePath,
  activeSubPath,
  setActiveSubPath,
  mobile,
  currentUserId = '',
  restrictedPaths = [],
  onNavigate = () => {},
  onToggleOpen = () => {},
  type,
  component,
  autoNavigateToFirstSubPath = false,
  hasNotification = false,
  dataTourTarget = '',
  pendingNavigation = ''
}: ItemLinkProps) {
  
  // State & Refs
  const { push: routerPush, pathname, isReady } = useSmartRouter();
  const itemRef = useRef<HTMLLIElement>(null);
  const [state, dispatch] = useReducer(menuItemReducer, {
    isNavigating: false,
    isHovered: false,
    isFocused: false,
    ripples: [],
    navigationProgress: 0,
    mouseX: 0,
    mouseY: 0,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTimer = useRef<NodeJS.Timeout>();
  
  // Refs para control de navegación
  const navigationTimeoutRef = useRef<NodeJS.Timeout>();
  const progressIntervalRef = useRef<NodeJS.Timeout>();
  const isNavigationCancelledRef = useRef(false);

  // Motion values for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const magneticX = useTransform(mouseX, [-50, 50], [-2, 2]);
  const magneticY = useTransform(mouseY, [-50, 50], [-1, 1]);

  // Valores seguros
  const safeHref = href || '';
  const safeText = text || '';
  
  // Skip render para tipos especiales
  const itemType = typeof type === 'string' ? type : type?.toString();
  if (['STATIC_TITLE', 'REACT_TSX', '0', '3', 'INFORMATIVE_TEXT'].includes(itemType || '')) {
    return null;
  }

  // Memoized: Filtrar sub-rutas restringidas
  const filteredSubPaths = useMemo(() => {
    if (!subPaths) return [];
    return subPaths.filter(subPath => !restrictedPaths.includes(subPath.href));
  }, [subPaths, restrictedPaths]);

  // Memoized: Determinar si item está activo con limpieza inmediata
  const itemIsActive = useMemo(() => {
    // Si hay una navegación pendiente y no es hacia este item, desactivar inmediatamente
    if (pendingNavigation && pendingNavigation !== safeHref) {
      return false;
    }
    
    // Si tiene subPaths, el padre NUNCA se marca como activo
    if (subPaths && subPaths.length > 0) {
      return false; // El padre nunca se pinta cuando tiene hijos
    }
    
    // Si hay navegación pendiente hacia este item, activar inmediatamente
    if (pendingNavigation === safeHref) {
      return true;
    }
    
    // Solo para items sin subPaths
    return safeHref === pathname || safeHref === activeSubPath;
  }, [subPaths, pathname, activeSubPath, safeHref, pendingNavigation]);

  const hasActiveChild = useMemo(() => {
    if (!subPaths || subPaths.length === 0) return false;
    
    // Si hay una navegación pendiente hacia un subPath de este item, activar inmediatamente
    if (pendingNavigation && subPaths.some(subPath => subPath.href === pendingNavigation)) {
      return true;
    }
    
    // Si hay una navegación pendiente hacia otro lugar, desactivar inmediatamente
    if (pendingNavigation && !subPaths.some(subPath => subPath.href === pendingNavigation)) {
      return false;
    }
    
    return subPaths.some(subPath => 
      subPath.href === pathname || 
      subPath.href === activeSubPath ||
      (pathname.startsWith(subPath.href) && subPath.href !== '/')
    );
  }, [subPaths, pathname, activeSubPath, pendingNavigation]);

  // Determinar icono actual - considerar tanto si el item está activo como si tiene un hijo activo
  const currentIcon = ((itemIsActive || hasActiveChild) && activeIcon) ? activeIcon : icon;
  
  // Función para determinar si un icono es un componente React o una imagen
  const isReactComponent = (iconComponent: any): boolean => {
    // Verificar si es undefined, null o un objeto vacío
    if (!iconComponent || (typeof iconComponent === 'object' && Object.keys(iconComponent).length === 0)) {
      return false;
    }
    
    return typeof iconComponent === 'function' || 
           (iconComponent && typeof iconComponent === 'object' && iconComponent.$$typeof) ||
           (iconComponent && typeof iconComponent === 'object' && iconComponent.render && typeof iconComponent.render === 'function');
  };

  // Función para renderizar el icono correctamente
  const renderIcon = (IconComponent: any, className?: string) => {
    if (!IconComponent) return null;
    
    // Si es un componente React (como los de tu librería)
    if (isReactComponent(IconComponent)) {
      return <IconComponent className={className} />;
    }
    
    // Si es un objeto de imagen de Next.js (tiene src, width, height)
    if (typeof IconComponent === 'object' && IconComponent.src) {
      return (
        <Image
          src={IconComponent}
          alt=""
          height={20}
          width={20}
          className={className}
          aria-hidden="true"
          priority={itemIsActive}
        />
      );
    }
    
    // Fallback para otros tipos
    return (
      <Image
        src={IconComponent}
        alt=""
        height={20}
        width={20}
        className={className}
        aria-hidden="true"
        priority={itemIsActive}
      />
    );
  };
  // Función para limpiar navegaciones previas
  const cleanupNavigation = useCallback(() => {
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
      navigationTimeoutRef.current = undefined;
    }
    if (progressIntervalRef.current) {
      clearTimeout(progressIntervalRef.current);
      progressIntervalRef.current = undefined;
    }
    isNavigationCancelledRef.current = true;
  }, []);

  // Cleanup al desmontar el componente
  useEffect(() => {
    return () => {
      cleanupNavigation();
    };
  }, [cleanupNavigation]);

  // Haptic feedback mejorado
  const triggerHaptic = useCallback((pattern: number | number[] = 10) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  }, []);

  // Mouse movement handler para efecto magnético
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
    dispatch({ type: 'SET_MOUSE_POSITION', payload: { x, y } });
  }, [mouseX, mouseY]);

  // Ripple effect handler
  const handleRipple = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    dispatch({ type: 'ADD_RIPPLE', payload: { x, y } });
    triggerHaptic(5);
  }, [triggerHaptic]);

  // Navigation con animaciones premium y cancelación de navegaciones previas
  const handleSubPathNavigation = useCallback(async (subHref: string) => {
    // Cancelar cualquier navegación previa
    cleanupNavigation();
    isNavigationCancelledRef.current = false;
    
    dispatch({ type: 'SET_NAVIGATING', payload: true });
    dispatch({ type: 'SET_PROGRESS', payload: 0 });
    
    let finalSubHref = subHref;
    
    if (concatStoreId && currentUserId) {
      finalSubHref = subHref + currentUserId;
    }
    
    try {
      triggerHaptic([10, 20, 10]);
      
      // Animación de progreso suave con cancelación
      let progress = 0;
      const startTime = Date.now();
      const duration = 800;
      
      const updateProgress = () => {
        if (isNavigationCancelledRef.current) return;
        
        const elapsed = Date.now() - startTime;
        progress = Math.min((elapsed / duration) * 100, 90);
        dispatch({ type: 'SET_PROGRESS', payload: progress });
        
        if (progress < 90 && !isNavigationCancelledRef.current) {
          progressIntervalRef.current = setTimeout(updateProgress, 16);
        }
      };
      
      updateProgress();

      // Debounce la navegación para evitar múltiples llamadas rápidas
      await new Promise(resolve => {
        navigationTimeoutRef.current = setTimeout(resolve, 150);
      });
      
      if (isNavigationCancelledRef.current) return;

      await routerPush(finalSubHref);
      
      if (isNavigationCancelledRef.current) return;
      
      dispatch({ type: 'SET_PROGRESS', payload: 100 });
      
      setActiveSubPath(finalSubHref);
      onNavigate(finalSubHref);
      
      // Success feedback
      setShowSuccess(true);
      triggerHaptic([10, 50]);
      setTimeout(() => setShowSuccess(false), 600);
      
      // Cerrar sidebar en móvil con timing optimizado
      if (mobile && onToggleOpen) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            onToggleOpen(false);
          });
        });
      }
    } catch (error) {
      if (!isNavigationCancelledRef.current) {
        console.error('Error en navegación:', error);
        triggerHaptic([100, 50, 100]); // Error haptic pattern
      }
    } finally {
      if (!isNavigationCancelledRef.current) {
        setTimeout(() => {
          dispatch({ type: 'SET_NAVIGATING', payload: false });
          dispatch({ type: 'SET_PROGRESS', payload: 0 });
        }, 300);
      }
    }
  }, [concatStoreId, currentUserId, routerPush, setActiveSubPath, onNavigate, mobile, onToggleOpen, triggerHaptic, cleanupNavigation]);

  const handleDirectNavigation = useCallback(async (targetHref: string) => {
    // Cancelar cualquier navegación previa
    cleanupNavigation();
    isNavigationCancelledRef.current = false;
    
    dispatch({ type: 'SET_NAVIGATING', payload: true });
    dispatch({ type: 'SET_PROGRESS', payload: 0 });
    
    let finalHref = targetHref;
    
    if (concatStoreId && currentUserId) {
      finalHref = targetHref + currentUserId;
    }
    
    try {
      triggerHaptic([10, 20, 10]);
      
      // Progress animation con cancelación
      let progress = 0;
      const updateProgress = () => {
        if (isNavigationCancelledRef.current) return;
        
        progress = Math.min(progress + 20, 90);
        dispatch({ type: 'SET_PROGRESS', payload: progress });
        
        if (progress < 90 && !isNavigationCancelledRef.current) {
          progressIntervalRef.current = setTimeout(updateProgress, 100);
        }
      };
      
      updateProgress();

      // Debounce la navegación
      await new Promise(resolve => {
        navigationTimeoutRef.current = setTimeout(resolve, 150);
      });
      
      if (isNavigationCancelledRef.current) return;

      await routerPush(finalHref);
      
      if (isNavigationCancelledRef.current) return;
      
      dispatch({ type: 'SET_PROGRESS', payload: 100 });
      
      setActiveSubPath(finalHref);
      onNavigate(finalHref);
      
      setShowSuccess(true);
      triggerHaptic([10, 50]);
      setTimeout(() => setShowSuccess(false), 600);
      
      if (mobile && onToggleOpen) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            onToggleOpen(false);
          });
        });
      }
    } catch (error) {
      if (!isNavigationCancelledRef.current) {
        console.error('Error en navegación:', error);
        triggerHaptic([100, 50, 100]);
      }
    } finally {
      if (!isNavigationCancelledRef.current) {
        setTimeout(() => {
          dispatch({ type: 'SET_NAVIGATING', payload: false });
          dispatch({ type: 'SET_PROGRESS', payload: 0 });
        }, 300);
      }
    }
  }, [concatStoreId, currentUserId, routerPush, setActiveSubPath, onNavigate, mobile, onToggleOpen, triggerHaptic, cleanupNavigation]);

  const handleItemClick = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    handleRipple(e);
    
    if (state.isNavigating) return;

    if (subPaths && subPaths.length > 0) {
      if (mobile) {
        triggerHaptic(10);
        if (openSubMenu) {
          onClickPath(-1);
        } else {
          setActivePath(safeHref);
          onClickPath(index);
        }
        
        if (subPaths.some(subPath => subPath.href === pathname)) {
          setActiveSubPath(pathname);
        }
        return;
      } else {
        setActivePath(safeHref);
        onClickPath(index);
        
        if (autoNavigateToFirstSubPath && filteredSubPaths[0]) {
          await handleSubPathNavigation(filteredSubPaths[0].href);
        }
      }
      return;
    }

    setActivePath(safeHref);
    if (safeHref) {
      await handleDirectNavigation(safeHref);
    }
  }, [state.isNavigating, handleRipple, setActivePath, safeHref, onClickPath, index, subPaths, autoNavigateToFirstSubPath, mobile, filteredSubPaths, pathname, setActiveSubPath, handleSubPathNavigation, handleDirectNavigation, openSubMenu, triggerHaptic]);

  const handleSubPathClick = useCallback(async (e: React.MouseEvent, subHref: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    handleRipple(e);
    
    if (!state.isNavigating) {
      await handleSubPathNavigation(subHref);
    }
  }, [state.isNavigating, handleRipple, handleSubPathNavigation]);

  // Keyboard navigation mejorada (WCAG AAA)
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    // Announce action to screen readers
    const announceAction = (action: string) => {
      const announcement = document.getElementById('nav-announcer');
      if (announcement) {
        announcement.textContent = action;
      }
    };

    switch(e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        announceAction(`Navegando a ${safeText}`);
        handleItemClick(e as any);
        break;
      case 'ArrowRight':
        if (subPaths && !openSubMenu) {
          e.preventDefault();
          announceAction(`Abriendo submenú de ${safeText}`);
          onClickPath(index);
        }
        break;
      case 'ArrowLeft':
        if (subPaths && openSubMenu) {
          e.preventDefault();
          announceAction(`Cerrando submenú de ${safeText}`);
          onClickPath(-1);
        }
        break;
      case 'ArrowDown':
        if (openSubMenu && filteredSubPaths.length > 0) {
          e.preventDefault();
          const firstSubPath = itemRef.current?.querySelector('[role="menuitem"]') as HTMLElement;
          firstSubPath?.focus();
          announceAction(`Navegando a opciones de ${safeText}`);
        }
        break;
      case 'Escape':
        if (openSubMenu) {
          e.preventDefault();
          onClickPath(-1);
          announceAction(`Submenú cerrado`);
        }
        break;
    }
  }, [handleItemClick, subPaths, openSubMenu, onClickPath, index, filteredSubPaths, safeText]);

  // Focus management con IntersectionObserver
  useEffect(() => {
    if (itemIsActive && itemRef.current && !mobile) {
      const observer = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) {
          itemRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest',
            inline: 'nearest'
          });
        }
      }, { threshold: 1.0 });

      observer.observe(itemRef.current);
      return () => observer.disconnect();
    }
  }, [itemIsActive, mobile]);

  // Mouse handlers optimizados
  const handleMouseEnter = useCallback(() => {
    dispatch({ type: 'SET_HOVERED', payload: true });
    if (sidebarReduce && !enlargeByHover && !mobile) {
      tooltipTimer.current = setTimeout(() => setShowTooltip(true), 500);
    }
  }, [sidebarReduce, enlargeByHover, mobile]);

  const handleMouseLeave = useCallback(() => {
    dispatch({ type: 'SET_HOVERED', payload: false });
    dispatch({ type: 'RESET_MOUSE_POSITION' });
    mouseX.set(0);
    mouseY.set(0);
    if (tooltipTimer.current) {
      clearTimeout(tooltipTimer.current);
    }
    setShowTooltip(false);
  }, [mouseX, mouseY]);

  const handleFocus = useCallback(() => {
    dispatch({ type: 'SET_FOCUSED', payload: true });
  }, []);

  const handleBlur = useCallback(() => {
    dispatch({ type: 'SET_FOCUSED', payload: false });
  }, []);

  // Render con subPaths - Design Premium
  if (subPaths && subPaths.length > 0) {
    return (
      <motion.div 
        className={`${styles.itemSubPath} ${className}`} 
        data-reduce={sidebarReduce && !enlargeByHover}
        data-tour-target={dataTourTarget}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        // onMouseMove={handleMouseMove}
        role="menuitem"
        aria-expanded={openSubMenu}
        aria-haspopup="menu"
        aria-current={itemIsActive ? "page" : undefined}
        aria-label={safeText}
        style={{
          x: magneticX,
          y: magneticY,
        }}
      >
        <motion.li
          ref={itemRef}
          className={styles.linkContainer}
          data-active={itemIsActive}
          data-has-sub-paths={true}
          data-has-active-child={hasActiveChild}  // <-- NUEVA LÍNEA
          data-reduce={sidebarReduce && !enlargeByHover}
          onClick={handleItemClick}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex={0}
          initial="idle"
          animate={state.isHovered ? "hover" : state.isFocused ? "focused" : "idle"}
          whileTap="tap"
          variants={itemVariants}
          transition={springConfig}
        >
          {/* Ripple container */}
          <div className={styles.rippleContainer}>
            <AnimatePresence>
              {state.ripples.map(ripple => (
                <RippleEffect
                  key={ripple.id}
                  x={ripple.x}
                  y={ripple.y}
                  id={ripple.id}
                  onComplete={(id) => dispatch({ type: 'REMOVE_RIPPLE', payload: id })}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Success animation */}
          <AnimatePresence>
            {showSuccess && <NavigationSuccess />}
          </AnimatePresence>

          <div data-reduce={sidebarReduce && !enlargeByHover} className={styles.link}>
            {currentIcon && (
              <motion.div 
                className={styles.iconWrapper}
                variants={iconVariants}
                animate={itemIsActive ? "active" : state.isHovered ? "hover" : "idle"}
                transition={springConfig}
              >
                {renderIcon(currentIcon, styles.menuIcon)}
              </motion.div>
            )}
            
            {(!sidebarReduce || enlargeByHover) && (
              <motion.span 
                className={styles.menuText}
                animate={{ 
                  opacity: state.isNavigating ? 0.5 : 1,
                  x: state.isHovered ? 2 : 0
                }}
                transition={{ duration: 0.2 }}
              >
                {safeText}

                {hasNotification && !state.isNavigating && (
                  <NotificationDot  />
                )}
              </motion.span>
            )}
            
            {/* {state.isNavigating && (
              <LoadingSpinner progress={state.navigationProgress} />
            )} */}
            
            {endAdornment && !(sidebarReduce && !enlargeByHover) && (
              <motion.div 
                className={styles.endAdornment}
                animate={{ opacity: state.isHovered ? 1 : 0.7 }}
              >
                {endAdornment}
              </motion.div>
            )}
          </div>
          
          {/* Smart Tooltip */}
          <AnimatePresence>
            {showTooltip && sidebarReduce && !enlargeByHover && !mobile && (
              <SmartTooltip 
                content={safeText} 
                show={showTooltip}
                shortcuts={['⌘K', 'Space']}
              />
            )}
          </AnimatePresence>
          
          <motion.div
            className={styles.arrowWrapper}
            variants={arrowVariants}
            animate={openSubMenu ? "open" : "closed"}
            transition={springConfig}
          >
            <ArrowMenu
              className={styles.arrow}
              width={10}
              height={10}
              aria-hidden="true"
            />
          </motion.div>
        </motion.li>
        
        {/* Subpaths con animación premium */}
        {openSubMenu && 
          <AnimatePresence mode="wait">
            {(!sidebarReduce || enlargeByHover) && (
              <motion.nav 
                className={styles.subPaths}
                variants={subMenuVariants}
                initial="closed"
                animate={openSubMenu ? "open" : "closed"}
                exit="closed"
                transition={{ 
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                role="menu"
                aria-label={`Submenú de ${safeText}`}
              >
                {filteredSubPaths.map((subItem, subIndex) => {
                  const subItemHref = concatStoreId && currentUserId 
                    ? `${subItem.href}${currentUserId}` 
                    : subItem.href;
                  
                  const isSubItemActive = (() => {
                    // Si hay navegación pendiente hacia este subItem, activar inmediatamente
                    if (pendingNavigation === subItem.href) {
                      return true;
                    }
                    
                    // Si hay navegación pendiente hacia otro lugar, desactivar inmediatamente
                    if (pendingNavigation && pendingNavigation !== subItem.href) {
                      return false;
                    }
                    
                    // Lógica normal de activación
                    return subItemHref === activeSubPath || 
                           subItem.href === pathname ||
                           subItem.href === activeSubPath;
                  })();

                  return (
                    <motion.button
                      key={subItem.href}
                      className={styles.subPath}
                      data-active={isSubItemActive}
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubPathClick(e, subItem.href)}
                      disabled={state.isNavigating}
                      tabIndex={openSubMenu ? 0 : -1}
                      role="menuitem"
                      aria-label={subItem.text}
                      aria-current={isSubItemActive ? "page" : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: {
                          delay: openSubMenu ? subIndex * 0.05 : 0,
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        x: -20,
                        transition: {
                          duration: 0.2
                        }
                      }}
                      whileHover={{ x: 1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Ripple container */}
                      <div className={styles.rippleContainer}>
                        <AnimatePresence>
                          {state.ripples.map(ripple => (
                            <RippleEffect
                              key={ripple.id}
                              x={ripple.x}
                              y={ripple.y}
                              id={ripple.id}
                              onComplete={(id) => dispatch({ type: 'REMOVE_RIPPLE', payload: id })}
                            />
                          ))}
                        </AnimatePresence>
                      </div>

                      <span className={styles.subPathText}>
                        {subItem.text}
                        {subItem.hasNotification && <NotificationDot />}
                      </span>
                      
                      <div className={styles.subPathEndAdornment}>
                        
                        {subItem.endAdornmentSubPath && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={springConfig}
                          >
                            {React.isValidElement(subItem.endAdornmentSubPath) ? 
                              subItem.endAdornmentSubPath : 
                              <div className={styles.endAdornmentSubPath}>
                                {subItem.endAdornmentSubPath}
                              </div>
                            }
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </motion.nav>
            )}
          </AnimatePresence>
        }
        
      </motion.div>
    );
  }

  // Render item simple (sin subPaths) - Design Premium
  return (
    <motion.li
      ref={itemRef}
      data-tour-target={dataTourTarget}
      className={`${styles.linkContainer} ${className}`}
      data-active={itemIsActive}
      data-reduce={sidebarReduce && !enlargeByHover}
      data-has-sub-paths={false}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      // onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      role="menuitem"
      tabIndex={0}
      aria-current={itemIsActive ? "page" : undefined}
      aria-label={`Navegar a ${safeText}`}
      initial="idle"
      animate={state.isHovered ? "hover" : state.isFocused ? "focused" : "idle"}
      whileTap="tap"
      variants={itemVariants}
      transition={springConfig}
      style={{
        x: magneticX,
        y: magneticY,
      }}
    >
      {/* Ripple container */}
      <div className={styles.rippleContainer}>
        <AnimatePresence>
          {state.ripples.map(ripple => (
            <RippleEffect
              key={ripple.id}
              x={ripple.x}
              y={ripple.y}
              id={ripple.id}
              onComplete={(id) => dispatch({ type: 'REMOVE_RIPPLE', payload: id })}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Success animation */}
      <AnimatePresence>
        {showSuccess && <NavigationSuccess />}
      </AnimatePresence>

      <button
        data-reduce={sidebarReduce && !enlargeByHover}
        className={styles.link}
        onClick={handleItemClick}
        onKeyDown={handleKeyDown}
        disabled={state.isNavigating}
        aria-label={`Navegar a ${safeText}`}
        title={sidebarReduce && !enlargeByHover ? safeText : undefined}
      >
        {currentIcon && (
          <motion.div 
            className={styles.iconWrapper}
            variants={iconVariants}
            animate={itemIsActive ? "active" : state.isHovered ? "hover" : "idle"}
            transition={springConfig}
          >
            {renderIcon(currentIcon, styles.menuIcon)}
          </motion.div>
        )}
        
        {(!sidebarReduce || enlargeByHover) && (
          <motion.span 
            className={styles.menuText}
            animate={{ 
              opacity: state.isNavigating ? 0.5 : 1,
              x: state.isHovered ? 2 : 0
            }}
            transition={{ duration: 0.2 }}
          >
            {safeText}
            {hasNotification && !state.isNavigating && (
              <NotificationDot />
            )}
        
          </motion.span>
        )}
        
        {/* {state.isNavigating && (
          <LoadingSpinner progress={state.navigationProgress} />
        )} */}
        
        
        {endAdornment && !(sidebarReduce && !enlargeByHover) && (
          <motion.div 
            className={styles.endAdornment}
          >
            {endAdornment}
          </motion.div>
        )}
      </button>

      {/* Smart Tooltip */}
      <AnimatePresence>
        {showTooltip && sidebarReduce && !enlargeByHover && !mobile && (
          <SmartTooltip 
            content={safeText} 
            show={showTooltip}
            shortcuts={['⌘K', 'Space']}
          />
        )}
      </AnimatePresence>
    </motion.li>
  );
}, (prevProps, nextProps) => {
  // Memoización optimizada para máximo performance
  return (
    prevProps.openSubMenu === nextProps.openSubMenu &&
    prevProps.activePath === nextProps.activePath &&
    prevProps.activeSubPath === nextProps.activeSubPath &&
    prevProps.sidebarReduce === nextProps.sidebarReduce &&
    prevProps.enlargeByHover === nextProps.enlargeByHover &&
    prevProps.hasNotification === nextProps.hasNotification &&
    prevProps.href === nextProps.href &&
    prevProps.text === nextProps.text &&
    prevProps.icon === nextProps.icon &&
    prevProps.activeIcon === nextProps.activeIcon &&
    prevProps.mobile === nextProps.mobile &&
    JSON.stringify(prevProps.subPaths) === JSON.stringify(nextProps.subPaths)
  );
});

// Display name para debugging
ItemLink.displayName = 'ItemLink';
