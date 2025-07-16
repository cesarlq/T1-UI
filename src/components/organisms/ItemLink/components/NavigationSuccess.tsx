// components/ItemLink/components/NavigationSuccess.tsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/common/ItemLink.module.scss';

export const NavigationSuccess = React.memo(() => (
  <motion.div 
    className={styles.successPulse}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1.2, opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className={styles.successInner} />
  </motion.div>
));

NavigationSuccess.displayName = 'NavigationSuccess';