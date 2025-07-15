import React, { useState } from 'react';
import { StoreSelector } from '../molecules/StoreSelector/StoreSelector';
import { T1ShippingBanner } from '../molecules/T1ShippingBanner/T1ShippingBanner';
import { NavbarPropsI } from '@/interfaces/menu';
import styles from '../../styles/common/Navbar.module.scss';
import { T1Selector } from '../molecules/T1Selector/T1Selector';
import { MenuProfile } from '../molecules/Profile/Profile';
import TextFieldAndButton from '../molecules/TextFieldAndButton/TextFieldAndButton';
import Image from 'next/image';
import MenuInActive from '../../assets/menus/inactive/menu-inactive.svg';
import BalanceBanner from '../molecules/BalanceBanner/BalanceBanner';

export function Navbar({
  className = '',
  showInfoBand = false,
  showBalance = false,
  showSearchInput = false,
  user = null,
  stores = [],
  currentStore,
  shippingBannerTitle = 'envíos',
  
  // Configuración de items del menú
  profileMenuItems,
  
  // Component slots
  BalanceBannerComponent = ({ className }) => <div className={className}>Balance Banner</div>,
  balanceBannerConfig,
  
  // Configuration
  searchPlaceholder = 'Número de rastreo',
  trackingUrl = '',
  accountUrl = '',
  t1SelectorConfig = {},
  texts = {
    logout: 'Cerrar sesión',
    searchPlaceholder: 'Número de rastreo'
  },

  // Profile Configuration
  iconProfile,
  colorProfile,

  // Props opcionales para override externo (compatibilidad)
  onLogout,
  onSearch,
  onStoreChange,
  onNavigate,
  onReducerHandle,
  sidebarReduce,
  isMobile
}: NavbarPropsI) {

  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);
  const profileOpen = Boolean(profileAnchor);

  // Handler interno para búsqueda
  const handleSearch = (data: { search: string }) => {
    if (trackingUrl) {
      window.open(`${trackingUrl}=${data.search}`, '_blank');
    }
    // Llamar callback externo si existe
    onSearch?.(data);
  };

  // Handler interno para cambio de tienda
  const handleStoreChange = (storeId: number) => {
    // Llamar callback externo
    onStoreChange?.(storeId);
  };

  // Handler interno para navegación
  const handleNavigation = () => {
    // Llamar callback externo
    onNavigate?.();
  };

  // Handler interno para logout
  const handleLogout = () => {
    // Llamar callback externo
    onLogout?.();
  };

  // Handler interno para toggle del menú
  const handleMenuToggle = () => {
    // Llamar callback externo si existe
    onReducerHandle?.();
  };

console.log(showBalance && !isMobile && !balanceBannerConfig);
  return (
    <nav
      className={`${className} ${styles.container}`}
      data-show-info-band={showInfoBand}
    >
      <div className={styles['navbar-left-section']}>
        <button
          className={styles['menu-toggle-button']}
          onClick={handleMenuToggle}
          type="button"
          aria-label="Toggle menu"
        >
          <MenuInActive
            width={17}
            height={17}
          />
        </button>
        
        <T1ShippingBanner
          className={styles['Banner-section']}
          onNavigate={handleNavigation}
          brandText={shippingBannerTitle}
          isMobile={Boolean(isMobile)}
          // Props legacy para compatibilidad
          onReducerHandle={handleMenuToggle}
          sidebarReduce={sidebarReduce}
        />
        
        <StoreSelector 
          className={styles['store-selector-desktop']}
          stores={stores}
          currentStore={currentStore}
          onStoreChange={handleStoreChange}
          createStoreUrl={accountUrl}      
        />
      </div>
      
      {showSearchInput && (
        <TextFieldAndButton
          onSubmit={handleSearch}
          textFieldClassName={styles.search}
          className={styles['search-section']}
          textFieldProps={{
            placeholder: texts.searchPlaceholder || searchPlaceholder,
          }}
        />
      )}
      
      <div className={styles['user-info-container']}>

        {showBalance && !isMobile && !balanceBannerConfig &&(
          <BalanceBannerComponent className={styles['balance-banner-desktop']} />
        )}

        {showBalance && !isMobile && balanceBannerConfig && (
            <BalanceBanner balance={balanceBannerConfig.balance} BALLANCE_PATH={balanceBannerConfig.BALLANCE_PATH}/>
        )}
        
        {t1SelectorConfig && 
          <T1Selector 
            className={className}
            storeId={user?.storeId?.toString() || ''}
            store={t1SelectorConfig?.store}
            shipping={t1SelectorConfig?.shipping}
            payment={t1SelectorConfig?.payment}
            storeBaseUrl={t1SelectorConfig?.storeBaseUrl || ''}
            shippingBaseUrl={t1SelectorConfig?.shippingBaseUrl || ''}
            paymentBaseUrl={t1SelectorConfig?.paymentBaseUrl || ''}
            ecosystemTitle={t1SelectorConfig?.ecosystemTitle || 'Ecosistema'}
            itemsOrder={t1SelectorConfig?.itemsOrder}
          />
        }
        
        <StoreSelector 
          className={styles['store-selector-mobile']}
          stores={stores}
          currentStore={currentStore}
          onStoreChange={handleStoreChange}
          createStoreUrl={accountUrl}        
        />
        
        {user && user.name && (
          <MenuProfile
            profileOpen={profileOpen}
            user={user}
            profileMenuItems={profileMenuItems}
            onLogout={handleLogout}
            textLogOut={texts.logout}
            onNavigate={handleNavigation}
            iconProfile={iconProfile}
            colorProfile={colorProfile}
          />
        )}
      </div>
    </nav>
  );
}