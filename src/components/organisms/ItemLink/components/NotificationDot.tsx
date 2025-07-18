// components/ItemLink/components/NotificationDot.tsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/common/ItemLink.module.scss';
import Ellipse from '@/assets/svg-icons/Ellipse55.svg?react';

const springConfig = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

export const NotificationDot = React.memo(() => (
  <motion.div 
    className={styles.notificationDot}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={springConfig}
  >
    {/* Si tienes el componente Ellipse */}
    <Ellipse height={4} width={4} />
    
    {/* O usa un div simple */}
    {/* <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: 'currentColor' }} /> */}
  </motion.div>
));

NotificationDot.displayName = 'NotificationDot';