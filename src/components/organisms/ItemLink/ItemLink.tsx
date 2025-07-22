'use client';

import React, { useEffect, useState, useMemo, useCallback, useRef, useReducer } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
// import ArrowMenu from '../../assets/arrow-menu.svg';
import { ChevronDown } from 'lucide-react'; // Usando lucide-react como alternativa
import styles from './ItemLink.module.scss';

// Componentes
import { RippleEffect } from './components/RippleEffect';
import { NotificationDot } from './components/NotificationDot';
import { NavigationSuccess } from './components/NavigationSuccess';
import { SubMenuItem } from './components/SubMenuItem';
import { MenuIcon } from './components/MenuIcon';

// Hooks
import { useNavigation } from './hooks/useNavigation';
import { useHaptic } from './hooks/useHaptic';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';

// Types & Reducer
import type { ItemLinkProps } from './ItemLink.types';
import { menuItemReducer } from './ItemLink.reducer';

// Animation variants
const springConfig = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

const itemVariants = {
  idle: { x: 0, scale: 1 },
  hover: { x: 3, scale: 1.01 },
  tap: { scale: 0.98 },
  focused: { scale: 1.02 }
};

const arrowVariants = {
  closed: { rotate: 180, scale: 1 },
  open: { rotate: 0, scale: 1.1 }
};

const subMenuVariants = {
  closed: { height: 0, opacity: 0, scale: 0.95 },
  open: { height: "auto", opacity: 1, scale: 1 }
};

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
  autoNavigateToFirstSubPath = false,
  hasNotification = false,
  dataTourTarget = '',
  pendingNavigation = ''
}: ItemLinkProps) {
  
  // Usar currentPath del Sidebar en lugar de location.pathname para evitar conflictos
  // El Sidebar ya maneja la sincronización con el router
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  
  // State & Refs
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
  const tooltipTimer = useRef<NodeJS.Timeout>();
  
  // Motion values for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Custom hooks
  const { triggerHaptic } = useHaptic();
  const { handleNavigation, cleanupNavigation } = useNavigation({
    dispatch,
    concatStoreId,
    currentUserId,
    setActiveSubPath,
    onNavigate,
    mobile,
    onToggleOpen,
    triggerHaptic
  });

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

  // Memoized: Determinar si item está activo
  const itemIsActive = useMemo(() => {
    if (pendingNavigation && pendingNavigation !== safeHref) {
      return false;
    }
    
    if (subPaths && subPaths.length > 0) {
      return false;
    }
    
    if (pendingNavigation === safeHref) {
      return true;
    }
    
    return safeHref === pathname || safeHref === activeSubPath;
  }, [subPaths, pathname, activeSubPath, safeHref, pendingNavigation]);

  const hasActiveChild = useMemo(() => {
    if (!subPaths || subPaths.length === 0) return false;
    
    if (pendingNavigation && subPaths.some(subPath => subPath.href === pendingNavigation)) {
      return true;
    }
    
    if (pendingNavigation && !subPaths.some(subPath => subPath.href === pendingNavigation)) {
      return false;
    }
    
    return subPaths.some(subPath => 
      subPath.href === pathname || 
      subPath.href === activeSubPath ||
      (pathname.startsWith(subPath.href) && subPath.href !== '/')
    );
  }, [subPaths, pathname, activeSubPath, pendingNavigation]);

  // Determinar icono actual
  const currentIcon = ((itemIsActive || hasActiveChild) && activeIcon) ? activeIcon : icon;

  // Cleanup al desmontar
  useEffect(() => {
    return () => {
      cleanupNavigation();
    };
  }, [cleanupNavigation]);

  // Mouse movement handler
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

  // Click handlers - simplificado para evitar conflictos de estado
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
          onClickPath(index);
        }
        return;
      } else {
        onClickPath(index);
        
        if (autoNavigateToFirstSubPath && filteredSubPaths[0]) {
          const success = await handleNavigation(filteredSubPaths[0].href);
          if (success) {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 600);
          }
        }
      }
      return;
    }

    // Solo navegar, dejar que el Sidebar maneje los estados activos
    if (safeHref) {
      const success = await handleNavigation(safeHref);
      if (success) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 600);
      }
    }
  }, [state.isNavigating, handleRipple, safeHref, onClickPath, index, subPaths, autoNavigateToFirstSubPath, mobile, filteredSubPaths, handleNavigation, triggerHaptic, openSubMenu]);

  const handleSubPathClick = useCallback(async (e: React.MouseEvent, subHref: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    handleRipple(e);
    
    if (!state.isNavigating) {
      const success = await handleNavigation(subHref);
      if (success) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 600);
      }
    }
  }, [state.isNavigating, handleRipple, handleNavigation]);

  // Keyboard navigation
  const { handleKeyDown } = useKeyboardNavigation({
    onItemClick: handleItemClick,
    subPaths,
    openSubMenu,
    onClickPath,
    index,
    filteredSubPaths,
    itemRef,
    safeText
  });

  // Focus management
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

  // Mouse handlers
  const handleMouseEnter = useCallback(() => {
    dispatch({ type: 'SET_HOVERED', payload: true });
  }, [sidebarReduce, enlargeByHover, mobile]);

  const handleMouseLeave = useCallback(() => {
    dispatch({ type: 'SET_HOVERED', payload: false });
    dispatch({ type: 'RESET_MOUSE_POSITION' });
    mouseX.set(0);
    mouseY.set(0);
    if (tooltipTimer.current) {
      clearTimeout(tooltipTimer.current);
    }
  }, [mouseX, mouseY]);

  const handleFocus = useCallback(() => {
    dispatch({ type: 'SET_FOCUSED', payload: true });
  }, []);

  const handleBlur = useCallback(() => {
    dispatch({ type: 'SET_FOCUSED', payload: false });
  }, []);

  // Render con subPaths
  if (subPaths && subPaths.length > 0) {
    return (
      <motion.div 
        className={`${styles.itemSubPath} ${className}`} 
        data-reduce={sidebarReduce && !enlargeByHover}
        data-tour-target={dataTourTarget}
        role="menuitem"
        aria-expanded={openSubMenu}
        aria-haspopup="menu"
        aria-current={itemIsActive ? "page" : undefined}
        aria-label={safeText}
      >
        <motion.li
          ref={itemRef}
          className={styles.linkContainer}
          data-active={itemIsActive}
          data-has-sub-paths={true}
          data-has-active-child={hasActiveChild}
          data-reduce={sidebarReduce && !enlargeByHover}
          onClick={handleItemClick}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          tabIndex={0}
          initial="idle"
          animate={state.isHovered ? "hover" : state.isFocused ? "focused" : "idle"}
          whileTap="tap"
          variants={itemVariants}
          transition={springConfig}
        >
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

          <AnimatePresence>
            {showSuccess && <NavigationSuccess />}
          </AnimatePresence>

          <div data-reduce={sidebarReduce && !enlargeByHover} className={styles.link}>
            {currentIcon && (
              <MenuIcon 
                icon={currentIcon}
                isActive={itemIsActive}
                isHovered={state.isHovered}
                className={styles.menuIcon}
              />
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
                {hasNotification && !state.isNavigating && <NotificationDot />}
              </motion.span>
            )}
            
            {endAdornment && !(sidebarReduce && !enlargeByHover) && (
              <motion.div 
                className={styles.endAdornment}
                animate={{ opacity: state.isHovered ? 1 : 0.7 }}
              >
                {endAdornment}
              </motion.div>
            )}
          </div>
          
          <motion.div
            className={styles.arrowWrapper}
            variants={arrowVariants}
            animate={openSubMenu ? "open" : "closed"}
            transition={springConfig}
          >
            <ChevronDown
              className={styles.arrow}
              width={10}
              height={10}
              aria-hidden="true"
            />
          </motion.div>
        </motion.li>
        
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
                    if (pendingNavigation === subItem.href) return true;
                    if (pendingNavigation && pendingNavigation !== subItem.href) return false;
                    
                    return subItemHref === activeSubPath || 
                           subItem.href === pathname ||
                           subItem.href === activeSubPath;
                  })();

                  return (
                    <SubMenuItem
                      key={subItem.href}
                      subItem={subItem}
                      index={subIndex}
                      isActive={isSubItemActive}
                      isNavigating={state.isNavigating}
                      openSubMenu={openSubMenu}
                      ripples={state.ripples}
                      onRemoveRipple={(id) => dispatch({ type: 'REMOVE_RIPPLE', payload: id })}
                      onClick={(e) => handleSubPathClick(e, subItem.href)}
                    />
                  );
                })}
              </motion.nav>
            )}
          </AnimatePresence>
        }
      </motion.div>
    );
  }

  // Render item simple (sin subPaths)
  return (
    <motion.li
      ref={itemRef}
      data-tour-target={dataTourTarget}
      className={`${styles.linkContainer} ${className}`}
      data-active={itemIsActive}
      data-reduce={sidebarReduce && !enlargeByHover}
      data-has-sub-paths={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
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
    >
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
          <MenuIcon 
            icon={currentIcon}
            isActive={itemIsActive}
            isHovered={state.isHovered}
            className={styles.menuIcon}
          />
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
            {hasNotification && !state.isNavigating && <NotificationDot />}
          </motion.span>
        )}
        
        {endAdornment && !(sidebarReduce && !enlargeByHover) && (
          <motion.div 
            className={styles.endAdornment}
          >
            {endAdornment}
          </motion.div>
        )}
      </button>
    </motion.li>
  );
}, (prevProps, nextProps) => {
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
    prevProps.pendingNavigation === nextProps.pendingNavigation &&
    JSON.stringify(prevProps.subPaths) === JSON.stringify(nextProps.subPaths)
  );
});

ItemLink.displayName = 'ItemLink';
