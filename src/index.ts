// src/index.ts
// Wrapper de compatibilidad para React antiguo

// Polyfill para React.Fragment en versiones antiguas
import React from 'react';

if (!React.Fragment) {
  (React as any).Fragment = ({ children }: any) => children;
}

// Import de estilos (side effect)
import './styles/index.css';

// Re-export de componentes con verificación de versión
export { default as AmountInput } from '@/components/Atoms/AmountInput/AmountInput';
export { default as Button } from '@/components/Atoms/Button/Button';
export { default as Card } from '@/components/Atoms/Card/Card';
export { default as CheckBox } from '@/components/Atoms/CheckBox/CheckBox';
export { default as Chip } from '@/components/Atoms/Chip/Chip';
export { default as CloseButton } from '@/components/Atoms/CloseButton/CloseButton';
export { default as CustomInput } from '@/components/Atoms/CustomInput/CustomInput';
export { default as DynamicSelector } from '@/components/Atoms/DynamicSelector/DynamicSelector';
export { PhoneInputT1} from '@/components/Atoms/PhoneInputT1';
export { Radio, RadioGroup, FormRadio } from '@/components/Atoms/Radio/Radio';
export { default as SearchInput } from '@/components/Atoms/Searchinput/SearchInput';
export { default as Select } from '@/components/Atoms/Select/Select';
export { Switch, FormSwitch } from '@/components/Atoms/Switch/Switch';

// Molecules
export { default as BalanceBanner } from '@/components/molecules/BalanceBanner/BalanceBanner';
export { default as CollapsibleCardT1 } from '@/components/molecules/CollapsibleCardT1/CollapsibleCardT1';
export { default as CustomPagination } from '@/components/molecules/CustomPagination/CustomPagination';
export { default as MenuProfile } from '@/components/molecules/Profile/MenuProfile';
export { default as Profile } from '@/components/molecules/Profile/Profile';
export { StoreSelector } from '@/components/molecules/StoreSelector/StoreSelector';
export { StoreSelectorOnSidebar } from '@/components/molecules/StoreSelectorOnSidebar/StoreSelectorOnSidebar';
export { T1Selector } from '@/components/molecules/T1Selector/T1Selector';
export { T1ShippingBanner } from '@/components/molecules/T1ShippingBanner/T1ShippingBanner';
export { default as Table } from '@/components/molecules/Table/Table';
export { default as TextFieldAndButton } from '@/components/molecules/TextFieldAndButton/TextFieldAndButton';

// Organisms
export { Navbar } from '@/components/organisms/Navbar/Navbar';
export { default as LayoutMenu } from '@/components/organisms/LayoutMenu/LayoutMenu';
export { ItemLink } from '@/components/organisms/ItemLink/ItemLink';
export { Sidebar } from '@/components/organisms/Sidebar/Sidebar';

// Types - Atoms
export type { AmountInputI } from '@/components/Atoms/AmountInput/AmountInput.types';
export type { ButtonAtomProps } from '@/components/Atoms/Button/Button.types';
export type { ExtendedCheckBoxProps } from '@/components/Atoms/CheckBox/CheckBox.types';
export type { ExtendedChipProps } from '@/components/Atoms/Chip/Chip.types';
export type { CloseButtonProps } from '@/components/Atoms/CloseButton/CloseButton.types';
export type { CustomInputI } from '@/components/Atoms/CustomInput/CustomInput.types';
export type { DynamicSelectorI } from '@/components/Atoms/DynamicSelector/DynamicSelector.types';
export type * from '@/components/Atoms/PhoneInputT1';
export type { RadioProps, RadioGroupProps, FormRadioProps } from '@/components/Atoms/Radio/Radio.types';
export type { SearchInputI } from '@/components/Atoms/Searchinput/SearchInput.types';
export type { SwitchProps, FormSwitchProps } from '@/components/Atoms/Switch/Switch.types';

// Types - Molecules
export type { BalanceBannerI } from '@/components/molecules/BalanceBanner/BalanceBanner.type';
export type { CollapsibleCardT1Props } from '@/components/molecules/CollapsibleCardT1/CollapsibleCardT1.type';
export type { CustomPaginationProps } from '@/components/molecules/CustomPagination/CustomPagination.types';
export type { ProfileProps } from '@/components/molecules/Profile/Profile.type';
export type { StoreSelectorProps } from '@/components/molecules/StoreSelector/StoreSelector.type';
export type { T1SelectorProps } from '@/components/molecules/T1Selector/T1Selector.types';
export type { T1ShippingBannerProps } from '@/components/molecules/T1ShippingBanner/T1ShippingBanner.types';
export type { TableProps } from '@/components/molecules/Table/Table.type';
export type { TextFieldAndButtonI } from '@/components/molecules/TextFieldAndButton/TextFieldAndButton.types';

// Types - Organisms
export type { NavbarPropsI } from '@/components/organisms/Navbar/Navbar.types';
export type { LayoutMenuProps, MenuState } from '@/components/organisms/LayoutMenu/LayoutMenu.types';
export type { ItemLinkProps } from '@/components/organisms/ItemLink/ItemLink.types';
export type { SidebarPropsI } from '@/components/organisms/Sidebar/Sidebar.types';

// Context
export { MenuProvider, useMenu } from '@/utils/menu/menuContext';

// Styles
export { default as theme } from '@/styles/theme';

// Icons
export * as Icons from './assets/iconsT1/icons';
export * as Logos from './assets/iconsT1/logos';
export * as MenuIcon from './assets/iconsT1/menuIcons';
export * as MenuIconActive from './assets/iconsT1/menuIcons/active';
export * as MenuIconInactive from './assets/iconsT1/menuIcons/inactive';

// Verificación de compatibilidad
export const checkCompatibility = () => {
  const reactVersion = React.version;
  const majorVersion = parseInt(reactVersion.split('.')[0]);
  
  if (majorVersion < 16) {
    console.warn(
      `@t1-org/t1components: React ${reactVersion} detectado. ` +
      `Esta librería está optimizada para React 16.8+. ` +
      `Algunas funcionalidades pueden no estar disponibles.`
    );
  }
  
  return {
    version: reactVersion,
    isCompatible: majorVersion >= 16,
    hasHooks: majorVersion > 16 || (majorVersion === 16 && parseInt(reactVersion.split('.')[1]) >= 8),
    hasFragments: majorVersion > 16 || (majorVersion === 16 && parseInt(reactVersion.split('.')[1]) >= 2)
  };
};

// Auto-check en desarrollo
if (process.env.NODE_ENV !== 'production') {
  checkCompatibility();
}