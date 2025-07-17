import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import DoubleArrowIcon from '@/assets/inputs/double-arrow.svg?react';
import Search from '@/assets/svg-icons/search-input.svg?react';
import CheckIcon from '@/assets/svg-icons/CheckIcon.svg?react';
import PlusIconBlack from '@/assets/buttonIcons/plus-icon-black.svg?react';
import CustomInput from '../../Atoms/CustomInput/CustomInput';
import styles from './StoreSelector.module.scss';
import { StoreSelectorProps } from './StoreSelector.type';
import { getLetters } from '@/utils/storeSelector/storeSelector';

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

export function StoreSelector({
  className = '',
  stores = [],
  currentStore,
  onStoreChange = () => {},
  title = 'Mis tiendas',
  searchPlaceholder = '',
  newStoreText = 'Crear tienda',
  createStoreUrl = '',
  closeOnOutsideClick = true,
  closeOnStoreSelect = true,
  storeColors = ['#51AF70', '#4F6EE0', '#2180FF', '#6FCF97']
}: StoreSelectorProps) {

  const maxNameLength = 20;
  
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Click outside para cerrar
  useEffect(() => {
    if (!isOpen || !closeOnOutsideClick) return;

    const handleClickOutside = (event: MouseEvent) => {
      // Verificar si el click fue fuera del dropdown Y del trigger
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
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
  }, [isOpen, closeOnOutsideClick]);

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength)}...`;
  };


  const handleStoreSelect = (storeId: number) => {
    onStoreChange(storeId);
    if (closeOnStoreSelect) {
      setIsOpen(false);
    }
  };

  const filteredStores = stores.filter(store => 
    store.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className={`${styles.container} ${className}`}>
        {/* Botón trigger */}
        {currentStore && (
          <button
            ref={triggerRef}
            onClick={() => setIsOpen(!isOpen)}
            className={styles.triggerButton}
            type="button"
            aria-label="Seleccionar tienda"
            aria-expanded={isOpen}
          >
            <span
              className={styles.storeAvatar}
              style={{ backgroundColor: storeColors[0] }}
            >
              {getLetters(currentStore.name)}
            </span>
            
            <span className={styles.storeName}>
              {truncateText(currentStore.name, maxNameLength)}
            </span>
            
            <DoubleArrowIcon
              style={{width:'12px', minWidth:'12px', height:'auto'}}
              width={12}
              height={12}
            />
          </button>
        )}
      </div>

      {/* Portal para renderizar el dropdown fuera del navbar */}
      <Portal>
        {/* Overlay - solo en móvil */}
        {isOpen && (
          <div 
            className={styles.overlay}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Dropdown */}
        {isOpen && (
          <div
            ref={dropdownRef}
            className={`${styles.dropdown} ${styles.dropdownOpen}`}
          >
            <div className={styles.dropdownContent}>
              <span className={styles.title}>{title}</span>
              
              <CustomInput
                textFieldProps={{
                  className: styles.searchInput,
                  value: search,
                  onChange: (event: { target: { value: React.SetStateAction<string>; }; }) => setSearch(event.target.value),
                  placeholder: searchPlaceholder,
                  InputProps: {
                    endAdornment: <Search width={16} height={16} />,
                  },
                  inputProps: {
                    enterKeyHint: 'search',
                  }
                }}
              />
              
              <section className={styles.storesList}>
                {filteredStores.map((store, index) => {
                  const color = storeColors[index % storeColors.length];
                  const isSelected = currentStore?.id === store.id;
                  
                  return (
                    <button
                      key={store.id}
                      onClick={() => handleStoreSelect(store.id)}
                      className={`${styles.storeItem} ${isSelected ? styles.storeItemSelected : ''}`}
                      data-selected={isSelected}
                    >
                      <span
                        className={styles.storeAvatar}
                        style={{ backgroundColor: color }}
                      >
                        {getLetters(store.name)}
                      </span>
                      
                      <span className={styles.storeItemName}>{store.name}</span>
                      
                      {isSelected && (
                        <CheckIcon
                          height={20}
                          width={20}
                          className={styles.checkIcon}
                        />
                      )}
                    </button>
                  );
                })}
                
                {filteredStores.length === 0 && search && (
                  <div className={styles.noResults}>
                    No se encontraron tiendas
                  </div>
                )}
              </section>
              
              <a
                href={createStoreUrl}
                target='_blank'
                className={styles.newStoreLink}
              >
                <PlusIconBlack
                  width={16}
                  height={16}
                />
                <span>{newStoreText}</span>
              </a>
            </div>
          </div>
        )}
      </Portal>
    </>
  );
}