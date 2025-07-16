// Tipo para identificar los items
export type T1ItemType = 'store' | 'shipping' | 'payment';

export interface T1SelectorProps {
  className?: string;
  // URLs base para construir links
  storeBaseUrl?: string;
  shippingBaseUrl?: string;
  paymentBaseUrl?: string;

  // Configuración de qué se muestra
  shipping?: boolean;
  payment?: boolean;
  store?: boolean;
  
  // ID del usuario/tienda para construir URLs
  storeId?: string;
  
  // Configuración visual
  ecosystemTitle?: string;
  
  // NUEVO: Orden de los items
  itemsOrder?: ('store' | 'shipping' | 'payment')[];
}