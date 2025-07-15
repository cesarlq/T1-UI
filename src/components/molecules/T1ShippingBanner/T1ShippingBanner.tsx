import React, { memo, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

// Assets
import T1Logo from '../../assets/T1.svg';
import ReduceIcon from '../../assets/reduce-icon.svg';
import EnlargeIcon from '../../assets/enlarge-icon.svg';

// Estilos
import styles from '../../styles/common/T1ShippingBanner.module.scss';

// =============================================================================
// TYPES & INTERFACES
// =============================================================================

export interface T1ShippingBannerProps {
  className?: string;
  brandText?: string;
  isMobile?: boolean;
  
  // Comportamiento
  onNavigate?: () => void;
  onToggleReduce?: () => void;
  onToggleOpen?: () => void;
  
  // Estado
  isReduced?: boolean;
  isOpen?: boolean;
  
  // Props legacy para compatibilidad
  onReducerHandle?: () => void;
  sidebarReduce?: boolean;
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export const T1ShippingBanner = memo<T1ShippingBannerProps>(({
  className = '',
  brandText = 'envíos',
  isMobile = false,
  onNavigate,
  onToggleReduce,
  onToggleOpen,
  isReduced = false,
  isOpen = false,
  // Props legacy
  onReducerHandle,
  sidebarReduce = false
}) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [isHoveringToggle, setIsHoveringToggle] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  
  // Router con fallback para Storybook
  let router;
  try {
    router = useRouter();
  } catch (error) {
    router = {
      push: (path: string) => {
        console.log('Navigate to:', path);
        return Promise.resolve(true);
      }
    };
  }
  
  // Handler para navegación con loading state
  const handleNavigate = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    
    setIsNavigating(true);
    
    // Vibración sutil en móviles
    if ('vibrate' in navigator && isMobile) {
      navigator.vibrate(10);
    }
    
    // Callback externo
    onNavigate?.();
    
    // Pequeño delay para mostrar animación
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setIsNavigating(false);
  }, [onNavigate, isMobile]);
  
  // Handler para toggle con microinteracciones
  const handleToggleClick = useCallback(() => {
    // Vibración táctil en móviles
    if ('vibrate' in navigator && isMobile) {
      navigator.vibrate(5);
    }
    
    if (onReducerHandle) {
      // Compatibilidad legacy
      onReducerHandle();
    } else if (isMobile && onToggleOpen) {
      // En móvil: toggle del overlay
      onToggleOpen();
    } else if (!isMobile && onToggleReduce) {
      // En desktop: toggle del reduce
      onToggleReduce();
    }
  }, [isMobile, onToggleOpen, onToggleReduce, onReducerHandle]);
  
  // Determinar estado del botón (legacy vs nuevo)
  const buttonIsReduced = sidebarReduce !== undefined ? sidebarReduce : isReduced;
  
  return (
    <motion.div 
      className={clsx(styles.container, className)}
      data-testid="t1-shipping-banner"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Toggle button - solo en desktop */}
      {!isMobile && (
        <motion.button
          className={clsx(styles.toggleButton, styles.toogleIcon)}
          onClick={handleToggleClick}
          onMouseEnter={() => setIsHoveringToggle(true)}
          onMouseLeave={() => setIsHoveringToggle(false)}
          type="button"
          aria-label={buttonIsReduced ? "Expandir menú lateral" : "Colapsar menú lateral"}
          aria-expanded={!buttonIsReduced}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div 
            className={styles.iconWrapper}
            animate={{ 
              rotate: isHoveringToggle ? (buttonIsReduced ? -10 : 10) : 0 
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            {buttonIsReduced ? (
              <EnlargeIcon
                width={18}
                height={16}
                className={styles.icon}
                style={{ minWidth: '18px', minHeight: '16px' }}
              />
            ) : (
              <ReduceIcon
                width={18}
                height={16}
                className={styles.icon}
                style={{ minWidth: '18px', minHeight: '16px' }}
              />
            )}
          </motion.div>
          
          {/* Ripple effect */}
          <motion.span
            className={styles.ripple}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              backgroundColor: 'currentColor',
              width: '100%',
              height: '100%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          />
        </motion.button>
      )}
      
      {/* Logo y marca con microinteracciones */}
      <motion.button
        className={clsx(styles.logoBrand, {
          [styles.navigating]: isNavigating
        })}
        onClick={handleNavigate}
        onMouseEnter={() => setIsHoveringLogo(true)}
        onMouseLeave={() => setIsHoveringLogo(false)}
        type="button"
        aria-label={`Ir al dashboard de ${brandText}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Loading overlay con animación */}
        {/* <AnimatePresence>
          {isNavigating && (
            <motion.div 
              className={styles.loadingOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className={styles.spinner}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          )}
        </AnimatePresence> */}
          <div 
            className={styles.logoWrapper}
          >
            <T1Logo 
              className={styles.logo}
              style={{ minHeight: '25px', maxWidth: '27px', flexShrink: 0 }}
              width={27}
              height={25}
            />
          </div>
          
          <span 
            className={styles.brandText}
          >
            {brandText}
          </span>
        
      </motion.button>
      
    </motion.div>
  );
});

T1ShippingBanner.displayName = 'T1ShippingBanner';

// =============================================================================
// SIMPLE VERSION
// =============================================================================

export const SimpleT1Banner = memo<Pick<T1ShippingBannerProps, 'className' | 'brandText' | 'onNavigate'>>(({
  className = '',
  brandText = 'envíos',
  onNavigate,
}) => {
  const handleNavigate = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.();
  }, [onNavigate]);
  
  return (
    <button
      className={clsx(styles.simpleBanner, className)}
      onClick={handleNavigate}
      type="button"
      aria-label={`Ir al dashboard de ${brandText}`}
    >
      <div className={styles.logoWrapper}>
        <T1Logo
          width={27}
          height={25}
          className={styles.logo}
          style={{ minHeight: '25px', maxWidth: '27px', flexShrink: 0 }}
        />
      </div>
      <span className={styles.brandText}>
        {brandText}
      </span>
    </button>
  );
});

SimpleT1Banner.displayName = 'SimpleT1Banner';