// components/ItemLink/components/SubMenuItem.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NotificationDot } from './NotificationDot';
import { RippleEffect } from './RippleEffect';
import styles from '@/styles/common/ItemLink.module.scss';
import type { SubPathItem, RippleType } from '../ItemLink.types';

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

export const SubMenuItem = React.memo(({
  subItem,
  index,
  isActive,
  isNavigating,
  openSubMenu,
  ripples,
  onRemoveRipple,
  onClick
}: SubMenuItemProps) => {
  return (
    <motion.button
      key={subItem.href}
      className={styles.subPath}
      data-active={isActive}
      onClick={onClick}
      disabled={isNavigating}
      tabIndex={openSubMenu ? 0 : -1}
      role="menuitem"
      aria-label={subItem.text}
      aria-current={isActive ? "page" : undefined}
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        transition: {
          delay: openSubMenu ? index * 0.05 : 0,
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
          {ripples.map(ripple => (
            <RippleEffect
              key={ripple.id}
              x={ripple.x}
              y={ripple.y}
              id={ripple.id}
              onComplete={onRemoveRipple}
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
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              mass: 0.8,
            }}
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
});

SubMenuItem.displayName = 'SubMenuItem';