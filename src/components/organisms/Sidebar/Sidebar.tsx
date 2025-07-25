'use client'; // Remover esta línea para Vite

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from './Sidebar.module.scss';
import { ItemLink } from '../ItemLink';
import { MenuPath, SidebarPropsI } from './Sidebar.types';
import BalanceBanner from '@/components/molecules/BalanceBanner';

export function Sidebar({
  className = '',
  menuPaths = [],
  TopBanner,
  BottomBanner,
  BalanceBannerComponent,
  showCreateButton = true,
  showInfoBand = false,
  showBalance = false,
  balanceBannerConfig,
  createButtonText = '+ Crear envío',
  createButtonPath = '/create',
  breakpointReduce = 1110,
  breakpointMobile = 768,
  currentUserId = '',
  restrictedPaths = [],
  stores = [],
  currentStore,
  onStoreChange = () => {},
  createStoreUrl = '',
  
  defaultAutoNavigateToFirstSubPath = false,
  
  // Props opcionales para override externo
  isOpen: externalIsOpen,
  isReduced: externalIsReduced,
  isMobile: externalIsMobile,
  onToggleOpen,
  onToggleReduce,
  onCreateClick,
  onNavigate,
  
  // NUEVAS PROPS para reemplazar Next.js
  currentPath = '/', // Reemplaza usePathname
  onPathChange, // Callback cuando se necesita cambiar la ruta
  onCustomNavigate, // Función personalizada de navegación
}: SidebarPropsI) {
  
  // Detectar si estamos en Storybook
  const isStorybook = typeof window !== 'undefined' && 
                     (window.location.href.includes('storybook') || 
                      window.parent !== window);
  
  // Función centralizada para manejar navegación
  const handleNavigation = (path: string, context?: { 
    isCreateButton?: boolean; 
    isMenuItem?: boolean; 
    menuItem?: MenuPath;
    fromMobile?: boolean;
  }) => {
    // Si hay función personalizada, usarla en lugar de las otras
    if (onCustomNavigate) {
      onCustomNavigate(path, context);
      return Promise.resolve(true);
    }
    
    // Usar onPathChange si está disponible
    if (onPathChange) {
      onPathChange(path);
    } else if (isStorybook) {
      // En Storybook, actualizar la URL para demo
      window.history.pushState({}, '', `${window.location.pathname}?story-path=${encodeURIComponent(path)}`);
      console.log('[Storybook] Navegación a:', path);
    }
    
    // Trigger callback de navegación
    onNavigate?.(path);
    return Promise.resolve(true);
  };

  // Mock de router para desarrollo/Storybook
  const mockRouter = {
    push: (path: string, context?: any) => handleNavigation(path, context),
    refresh: () => {
      if (isStorybook) {
        window.location.reload();
      } else {
        // En producción, el consumer debería manejar esto
        console.warn('Router refresh requested. Please handle this in your app.');
      }
    }
  };
  
  // Usar el currentPath prop en lugar de usePathname
  const pathname = currentPath;
  const router = mockRouter;
  
  const refSideBar = useRef<HTMLDivElement>(null);
  
  // Estados internos
  const [internalIsOpen, setInternalIsOpen] = useState(true);
  const [internalIsReduced, setInternalIsReduced] = useState(false);
  const [internalIsMobile, setInternalIsMobile] = useState(false);
  const [enlargeByHover, setEnlargeByHover] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  
  // Estados de navegación - MANEJADOS INTERNAMENTE
  const [activePath, setActivePath] = useState('');
  const [currentSubmenuOpen, setCurrentSubmenuOpen] = useState<number>(-1);
  const [activeSubPath, setActiveSubPath] = useState('');
  const [pendingNavigation, setPendingNavigation] = useState<string>('');

  // Determinar valores finales (externo tiene prioridad si se proporciona)
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const isReduced = externalIsReduced !== undefined ? externalIsReduced : internalIsReduced;
  const isMobile = externalIsMobile !== undefined ? externalIsMobile : internalIsMobile;

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      
      // Solo actualizar estados internos si no hay override externo
      if (externalIsMobile === undefined) {
        setInternalIsMobile(width <= breakpointMobile);
      }
      
      if (externalIsReduced === undefined && externalIsOpen === undefined) {
        if (width <= breakpointMobile) {
          setInternalIsOpen(false);
          setInternalIsReduced(false);
        } else if (width <= breakpointReduce) {
          setInternalIsOpen(true);
          setInternalIsReduced(true);
        } else {
          setInternalIsOpen(true);
          setInternalIsReduced(false);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpointMobile, breakpointReduce, externalIsMobile, externalIsReduced, externalIsOpen]);

  // Control del scroll del body en móvil
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isMobile]);

  // Click outside handler para móvil - solo si no hay control externo
  useEffect(() => {
    // Si hay control externo (onToggleOpen prop), no manejar click outside aquí
    if (!isOpen || !isMobile || onToggleOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (refSideBar.current && !refSideBar.current.contains(target)) {
        event.preventDefault();
        event.stopPropagation();
        handleToggleOpen(false);
      }
    };

    // Usar tanto mousedown como touchstart para mejor compatibilidad móvil
    document.addEventListener('mousedown', handleClickOutside, { passive: false });
    document.addEventListener('touchstart', handleClickOutside, { passive: false });
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, isMobile, onToggleOpen]);

  // Inicializar rutas activas basado en pathname
  useEffect(() => {
    if (!pathname) return;

    // Limpiar pendingNavigation cuando cambia el pathname
    setPendingNavigation('');

    // Buscar el item que coincide con la ruta actual
    let matchFound = false;

    // PASO 1: Buscar matches exactos primero (mayor prioridad)
    menuPaths.forEach((item, index) => {
      if (matchFound) return;

      // Verificar si es un item directo con match exacto
      if (item.href === pathname) {
        setActivePath(item.href);
        setActiveSubPath(item.href);
        setCurrentSubmenuOpen(index);
        matchFound = true;
        return;
      }

      // Verificar si es un subPath con match exacto
      if (item.subPaths) {
        const matchingSubPath = item.subPaths.find(subPath => subPath.href === pathname);
        if (matchingSubPath) {
          setActivePath(item.href || '');
          setActiveSubPath(pathname);
          setCurrentSubmenuOpen(index);
          matchFound = true;
          return;
        }
      }
    });

    // PASO 2: Si no hay match exacto y NO es la ruta raíz, buscar matches parciales
    if (!matchFound && pathname !== '/') {
      // Ordenar por longitud de href descendente para priorizar rutas más específicas
      const sortedMenuPaths = [...menuPaths].map((item, originalIndex) => ({ ...item, originalIndex }))
        .sort((a, b) => {
          const aMaxLength = Math.max(
            a.href?.length || 0,
            ...(a.subPaths?.map(sub => sub.href.length) || [0])
          );
          const bMaxLength = Math.max(
            b.href?.length || 0,
            ...(b.subPaths?.map(sub => sub.href.length) || [0])
          );
          return bMaxLength - aMaxLength;
        });

      sortedMenuPaths.forEach((item) => {
        if (matchFound) return;

        // Verificar match parcial en item principal (excluyendo raíz)
        if (item.href && item.href !== '/' && pathname.startsWith(item.href) && 
            (pathname.length === item.href.length || pathname[item.href.length] === '/')) {
          setActivePath(item.href);
          setActiveSubPath(pathname);
          setCurrentSubmenuOpen(item.originalIndex);
          matchFound = true;
          return;
        }

        // Verificar match parcial en subPaths (excluyendo raíz)
        if (item.subPaths) {
          const partialMatch = item.subPaths.find(subPath => {
            // Excluir explícitamente la ruta raíz de matches parciales
            if (subPath.href === '/') return false;
            
            // Solo hacer match parcial si:
            // 1. pathname empieza con subPath.href
            // 2. El siguiente carácter es '/' o es el final de la string
            // Esto evita matches como '/user' matcheando con '/users'
            return pathname.startsWith(subPath.href) && 
                   (pathname.length === subPath.href.length || 
                    pathname[subPath.href.length] === '/');
          });
          
          if (partialMatch) {
            setActivePath(item.href || '');
            setActiveSubPath(pathname);
            setCurrentSubmenuOpen(item.originalIndex);
            matchFound = true;
          }
        }
      });
    }

    if (!matchFound) {
      // Resetear estados si no hay match
      setActivePath('');
      setActiveSubPath('');
      setCurrentSubmenuOpen(-1);
    }
  }, [pathname, menuPaths]);

  // Handlers internos
  const handleToggleOpen = (newIsOpen: boolean) => {
    if (externalIsOpen === undefined) {
      setInternalIsOpen(newIsOpen);
    }
    onToggleOpen?.(newIsOpen);
  };

  const handleToggleReduce = (newIsReduced: boolean) => {
    if (externalIsReduced === undefined) {
      setInternalIsReduced(newIsReduced);
    }
    onToggleReduce?.(newIsReduced);
  };

  const handleToggleSidebar = () => {
    if (isMobile) {
      handleToggleOpen(!isOpen);
    } else {
      handleToggleReduce(!isReduced);
    }
  };

  const handleCreateClick = () => {
    if (onCreateClick) {
      onCreateClick();
    } else if (createButtonPath) {
      if (pathname === createButtonPath) {
        router.refresh();
      } else {
        handleNavigation(createButtonPath, { 
          isCreateButton: true, 
          fromMobile: isMobile 
        });
      }
    }
    
    if (isMobile) {
      setTimeout(() => {
        handleToggleOpen(false);
      }, 100);
    }
  };

  const handleExternalComponent = () => {
    if (isMobile) {
      setTimeout(() => {
        handleToggleOpen(false);
      }, 100);
    }
  };

  // Función para manejar navegación - simplificada para evitar conflictos de estado
  const handleInternalNavigation = (path: string) => {
    // Solo realizar la navegación, dejar que el useEffect maneje los estados activos
    const targetItem = menuPaths.find(item => item.href === path);
    
    // Realizar la navegación con contexto
    handleNavigation(path, { 
      isMenuItem: true, 
      menuItem: targetItem,
      fromMobile: isMobile 
    });
    
    if (isMobile) {
      setTimeout(() => handleToggleOpen(false), 100);
    }
  };

  // Función para manejar el cambio de activePath - simplificada
  const handleSetActivePath = (path: string) => {
    setActivePath(path);
  };

  // Función para manejar el cambio de activeSubPath - simplificada
  const handleSetActiveSubPath = (path: string) => {
    setActiveSubPath(path);
  };

  const handleMouseEnter = () => {
    if (isReduced) {
      setEnlargeByHover(true);
    }
  };

  const handleMouseLeave = () => {
    if (isReduced) {
      setEnlargeByHover(false);
    }
  };

  // Filtrar rutas restringidas
  const visibleMenuPaths = menuPaths.filter(path => 
    !path.href || !restrictedPaths.includes(path.href)
  );
    
  const shouldShowReduced = isReduced && !enlargeByHover;

  // Función para renderizar elementos del menú
  const renderMenuItem = (item: MenuPath, index: number) => {
    const itemType = typeof item.type === 'string' ? item.type : item.type?.toString();
    
    if (itemType === '0' || itemType === 'STATIC_TITLE') {
      if (!shouldShowReduced) {
        return (
          <div 
            key={`title-${index}`}
            className={styles.staticTitle}
            data-reduce={shouldShowReduced}
          >
            <span className={styles.titleText}>{item.text}</span>
          </div>
        );
      }
      return null;
    }

    if ((itemType === '3' || itemType === 'REACT_TSX') && item.component) {
      const Component = item.component;
      if (!shouldShowReduced) {
        return (
          <div 
            key={`component-${index}`}
            className={styles.reactComponent}
            data-reduce={shouldShowReduced}
          >
            <Component 
              currentUserId={currentUserId}
              onNavigate={handleInternalNavigation}
              stores={stores?.map(store => ({ id: store.id, name: store.name }))}
              currentStore={currentStore ? { id: currentStore.id, name: currentStore.name } : undefined}
              onStoreChange={onStoreChange}
              createStoreUrl={createStoreUrl}
              searchPlaceholder="Buscar tienda..."
              isMobile={isMobile}
              className="sidebar-store-selector"
            />
          </div>
        );
      }
      return null;
    }

    if(itemType === 'INFORMATIVE_TEXT'){
      if (!shouldShowReduced) {
        return (
          <p className={styles.informativeText} key={`informative-${index}`}>
            {item.text ? item.text : 'Configuración de tienda únicamente disponible para administradores.'}
          </p>
        );
      }
      return null;
    }

    if ((itemType === '1' || itemType === 'LINK') && item.href && item.href.trim() !== '') {
      return (
        <ItemLink
          {...item}
          href={item.href}
          text={item.text || ''}
          className={styles.itemLink}
          key={index}
          index={index}
          sidebarReduce={isReduced}
          enlargeByHover={enlargeByHover}
          onClickPath={setCurrentSubmenuOpen}
          openSubMenu={currentSubmenuOpen === index}
          activePath={activePath}
          setActivePath={handleSetActivePath}
          activeSubPath={activeSubPath}
          setActiveSubPath={handleSetActiveSubPath}
          mobile={isMobile}
          currentUserId={currentUserId}
          restrictedPaths={restrictedPaths}
          onNavigate={handleInternalNavigation}
          onToggleOpen={handleToggleOpen}
          autoNavigateToFirstSubPath={item.autoNavigateToFirstSubPath ?? defaultAutoNavigateToFirstSubPath}
          pendingNavigation={pendingNavigation}
        />
      );
    }

    return null;
  };

  return (
    <aside
      className={`${styles.container} ${className}`}
      data-reduce={shouldShowReduced}
      data-enlarge-by-hover={enlargeByHover}
      data-show-info-band={showInfoBand}
      data-open-side-bar={isOpen}
      ref={refSideBar}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <section className={styles.sideBar}>
        {/* Top Banner */}
        {TopBanner && (
          <div className={`${styles.topBanner} ${shouldShowReduced ? styles.bannerReduced : ''}`}>
            <TopBanner />
          </div>
        )}

        {/* Create Button */}
        {showCreateButton && (
          <Button
            onClick={handleCreateClick}
            className={styles.callToActionCreateGuide}
            data-reduce={shouldShowReduced}
          >
            {(!isReduced || enlargeByHover) ? createButtonText : <AddIcon />}
          </Button>
        )}

        {/* Balance Banner */}
        {BalanceBannerComponent && showBalance && !shouldShowReduced && (
          <div onClick={handleExternalComponent} className={styles.balanceBanner}>
            <BalanceBannerComponent />
          </div>
        )}
        
        {showBalance && !shouldShowReduced && balanceBannerConfig?.balance && (
          <div onClick={handleExternalComponent} className={styles.balanceBanner}>
            <BalanceBanner 
              balance={balanceBannerConfig.balance} 
              BALLANCE_PATH={balanceBannerConfig.BALLANCE_PATH}
            />
          </div>
        )}

        {/* Menu Items */}
        <ul className={styles.paths}>
          {visibleMenuPaths.map((item, index) => renderMenuItem(item, index))}
        </ul>
      </section>

      {/* Bottom Banner */}
      {BottomBanner && (
        <div className={styles.bottomBanner}>
          {React.isValidElement(BottomBanner) 
            ? BottomBanner 
            : typeof BottomBanner === 'function' 
              ? <BottomBanner /> 
              : BottomBanner}
        </div>
      )}
    </aside>
  );
}
