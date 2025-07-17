import React, { useState, useRef, useEffect } from 'react';
import DoubleArrowIcon from '@/assets/inputs/double-arrow.svg?react';
import Search from '@/assets/svg-icons/search-input.svg?react';
import CheckIcon from '@/assets/svg-icons/CheckIcon.svg?react';
import PlusIconBlack from '@/assets/buttonIcons/plus-icon-black.svg?react';
import styles from './StoreSelectorOnSidebar.module.scss';
import CustomInput from '../../Atoms/CustomInput/CustomInput';
import { StoreSelectorProps } from './StoreSelectorOnSidebar.type';


export function StoreSelectorOnSidebar({
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
  
  const maxNameLength=20;
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  // Click outside para cerrar
  useEffect(() => {
    if (!isOpen || !closeOnOutsideClick) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeOnOutsideClick]);

  // Función para obtener las iniciales de la tienda
  const getLetters = (label: string): string => {
    if (!label) label = 'Sin nombre';
    const labelArrayPerSpaces = label.split(' ');
    if (labelArrayPerSpaces.length >= 2 && labelArrayPerSpaces[0][0] && labelArrayPerSpaces[1][0]) {
      return `${labelArrayPerSpaces[0][0].toUpperCase()}${labelArrayPerSpaces[1][0].toUpperCase()}`;
    } else {
      return `${label[0].toUpperCase()}${label[1] ? label[1].toUpperCase() : ''}`;
    }
  };

  // Manejar selección de tienda
  const handleStoreSelect = (storeId: number) => {
    onStoreChange(storeId);
    if (closeOnStoreSelect) {
      setIsOpen(false);
    }
  };

  // Filtrar tiendas por búsqueda
  const filteredStores = stores.filter(store => 
    store.name.toLowerCase().includes(search.toLowerCase())
  );

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength)}...`;
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {/* Botón trigger - solo se muestra si hay tienda actual */}
      {currentStore && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.triggerButton}
          type="button"
          aria-label="Seleccionar tienda"
          aria-expanded={isOpen}
        >
          {/* Avatar de la tienda actual */}
          <span
            className={styles.storeAvatar}
            style={{ backgroundColor: storeColors[0] }}
          >
            {getLetters(currentStore.name)}
          </span>
          
          {/* Nombre de la tienda (oculto en móvil) */}
          <span className={styles.storeName}>
            {truncateText(currentStore.name, maxNameLength)}
          </span>
          
          {/* Flecha */}
          <DoubleArrowIcon
            style={{width:'12px', minWidth:'12px', height:'auto'}}
            width={12}
            height={12}
          />
        </button>
      )}

      {/* Dropdown */}
      <div
        data-open={isOpen}
        className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : styles.dropdownClosed}`}
        ref={ref}
      >
        <div className={styles.dropdownContent}>
          {/* Título */}
          <span className={styles.title}>{title}</span>
          
          {/* Campo de búsqueda */}
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
          
          {/* Lista de tiendas */}
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
                  {/* Avatar de la tienda */}
                  <span
                    className={styles.storeAvatar}
                    style={{ backgroundColor: color }}
                  >
                    {getLetters(store.name)}
                  </span>
                  
                  {/* Nombre de la tienda */}
                  <span className={styles.storeItemName}>{store.name}</span>
                  
                  {/* Check icon si está seleccionada */}
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
            
            {/* Mensaje si no hay resultados */}
            {filteredStores.length === 0 && search && (
              <div className={styles.noResults}>
                No se encontraron tiendas
              </div>
            )}
          </section>
          
          {/* Link para crear nueva tienda */}
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
    </div>
  );
}