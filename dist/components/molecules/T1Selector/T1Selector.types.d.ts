export type T1ItemType = 'store' | 'shipping' | 'payment';
export interface T1SelectorProps {
    className?: string;
    storeBaseUrl?: string;
    shippingBaseUrl?: string;
    paymentBaseUrl?: string;
    shipping?: boolean;
    payment?: boolean;
    store?: boolean;
    storeId?: string;
    ecosystemTitle?: string;
    itemsOrder?: ('store' | 'shipping' | 'payment')[];
}
//# sourceMappingURL=T1Selector.types.d.ts.map