// src/Components/MenuComponent/SmartTooltip.tsx
'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../styles/common/SmartTooltip.module.scss';

interface SmartTooltipProps {
  content: string;
  show: boolean;
  shortcuts?: string[];
  description?: string;
  position?: 'right' | 'left' | 'top' | 'bottom';
}

export const SmartTooltip = React.memo(function SmartTooltip({
  content,
  show,
  shortcuts = [],
  description,
  position = 'right'
}: SmartTooltipProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`${styles.tooltip} ${styles[position]}`}
          initial={{ opacity: 0, scale: 0.95, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.95, x: -10 }}
          transition={{
            duration: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          role="tooltip"
          aria-live="polite"
        >
          <div className={styles.tooltipArrow} />
          <div className={styles.tooltipContent}>
            <div className={styles.tooltipTitle}>{content}</div>
            {description && (
              <div className={styles.tooltipDescription}>{description}</div>
            )}
            {shortcuts.length > 0 && (
              <div className={styles.tooltipShortcuts}>
                {shortcuts.map((shortcut, index) => (
                  <kbd key={index} className={styles.shortcutKey}>
                    {shortcut}
                  </kbd>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
