// components/ItemLink/components/RippleEffect.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/common/ItemLink.module.scss';

interface RippleEffectProps {
  x: number;
  y: number;
  id: number;
  onComplete: (id: number) => void;
}

export const RippleEffect = React.memo(({ x, y, id, onComplete }: RippleEffectProps) => {
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

RippleEffect.displayName = 'RippleEffect';