import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import GridIcon from '@/assets/logos/t1-selector/grid-icon.svg?react';
import T1Logo from '@/assets/logos/T1.svg?react';
import Store from '@/assets/logos/t1-selector/store.svg?react';
import Shipping from '@/assets/logos/t1-selector/shipping.svg?react';
import Pay from '@/assets/logos/t1-selector/pay.svg?react';
import styles from './T1Selector.module.scss';
import { CloseButton } from '@/components/Atoms/CloseButton';
import { T1ItemType, T1SelectorProps } from './T1Selector.types';

// Componente Portal para renderizar fuera del navbar
const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;
  
  return ReactDOM.createPortal(
    children,
    document.body
  );
};

export function T1Selector({
  className = '',
  storeBaseUrl = '',
  shippingBaseUrl = '',
  paymentBaseUrl = '',
  shipping = true,
  payment = true,
  store = true,
  ecosystemTitle = 'Ecosistema',
  itemsOrder = ['store', 'shipping', 'payment'] // Orden por defecto
}: T1SelectorProps) {
  
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Mapa de items con su configuración
  const itemsMap: Record<T1ItemType, {
    isActive: boolean;
    icon: any;
    label: string;
    href: string | undefined;
  }> = {
    store: {
      isActive: store,
      icon: Store,
      label: 'Tienda',
      href: storeBaseUrl ? `${storeBaseUrl}` : undefined
    },
    shipping: {
      isActive: shipping,
      icon: Shipping,
      label: 'Envíos',
      href: shippingBaseUrl ? `${shippingBaseUrl}` : undefined
    },
    payment: {
      isActive: payment,
      icon: Pay,
      label: 'Pagos',
      href: paymentBaseUrl ? `${paymentBaseUrl}` : undefined
    }
  };

  // Ordenar los items según itemsOrder
  const orderedMenuItems = itemsOrder
    .filter(itemType => itemsMap[itemType] && itemsMap[itemType].isActive)
    .map(itemType => ({
      type: itemType,
      ...itemsMap[itemType]
    }));

  // Click outside para cerrar
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      // Verificar si el click fue fuera del modal Y del trigger
      if (
        modalRef.current && 
        !modalRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Pequeño delay para evitar que se cierre inmediatamente
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);


  return (
    <>
      <div className={`${styles.container} ${className}`}>
        {/* Botón para abrir/cerrar */}
        <button
          ref={triggerRef}
          onClick={() => setIsOpen(!isOpen)}
          className={styles.triggerButton}
          type="button"
          aria-label="Abrir selector T1"
          aria-expanded={isOpen}
        >
          <GridIcon
            width={17}
            height={17}
          />
        </button>
      </div>

      {/* Portal para renderizar el modal fuera del navbar */}
      <Portal>
        {/* Overlay for mobile */}
        {isOpen && (
          <div
            className={`${styles.overlay} ${styles.overlayVisible}`}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 9998
            }}
          />
        )}
        
        {/* Modal */}
        {isOpen && (
          <div
            className={`${styles.modal} ${styles.modalOpen}`}
            ref={modalRef}
          >
            {/* Botón cerrar en móvil */}
            <CloseButton
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            />

            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerContent}>
                <span className={styles.ecosystemTitle}>{ecosystemTitle}</span>
                <div className={styles.t1Logo}><T1Logo width={23} height={23} /></div>
              </div>
            </div>
            
            {/* Menu Items */}
            <div className={styles.menuItems}>
              {orderedMenuItems.map((item, index) => {
                const content = (
                  <>
                    <div className={styles.iconContainer}>
                      <item.icon 
                        width={56}
                        height={56}
                      />
                    </div>
                    <span className={`${styles.itemLabel} `}>
                      {item.label}
                    </span>
                  </>
                );

                // Si tiene href, es un link externo
                if (item.href) {
                  return (
                    <a
                      key={`${item.type}-${index}`}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.menuItem}
                      onClick={() => setIsOpen(false)} // Cerrar al hacer click
                    >
                      {content}
                    </a>
                  );
                } else {
                  // Sin href, solo visual
                  return (
                    <div
                      key={`${item.type}-${index}`}
                      className={styles.menuItem}
                    >
                      {content}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        )}
      </Portal>
    </>
  );
}