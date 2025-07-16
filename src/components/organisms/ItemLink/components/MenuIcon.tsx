// components/ItemLink/components/MenuIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';
// import Image from 'next/image'; // Comentado para Vite
import styles from '@/styles/common/ItemLink.module.scss';

interface MenuIconProps {
  icon: any;
  isActive: boolean;
  isHovered: boolean;
  className?: string;
}

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

const springConfig = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

export const MenuIcon = React.memo(({ icon, isActive, isHovered, className }: MenuIconProps) => {
  // Función para determinar si un icono es un componente React o una imagen
  const isReactComponent = (iconComponent: any): boolean => {
    if (!iconComponent || (typeof iconComponent === 'object' && Object.keys(iconComponent).length === 0)) {
      return false;
    }
    
    return typeof iconComponent === 'function' || 
           (iconComponent && typeof iconComponent === 'object' && iconComponent.$$typeof) ||
           (iconComponent && typeof iconComponent === 'object' && iconComponent.render && typeof iconComponent.render === 'function');
  };

  const renderIcon = () => {
    if (!icon) return null;
    
    // Si es un componente React
    if (isReactComponent(icon)) {
      const IconComponent = icon;
      return <IconComponent className={className} />;
    }
    
    // Si es un objeto de imagen con src (para Vite, usar img normal)
    if (typeof icon === 'object' && icon.src) {
      return (
        <img
          src={icon.src || icon}
          alt=""
          height={20}
          width={20}
          className={className}
          aria-hidden="true"
        />
      );
    }
    
    // Fallback para otros tipos
    return (
      <img
        src={icon}
        alt=""
        height={20}
        width={20}
        className={className}
        aria-hidden="true"
      />
    );
  };

  return (
    <motion.div 
      className={styles.iconWrapper}
      variants={iconVariants}
      animate={isActive ? "active" : isHovered ? "hover" : "idle"}
      transition={springConfig}
    >
      {renderIcon()}
    </motion.div>
  );
});

MenuIcon.displayName = 'MenuIcon';