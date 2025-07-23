import { StatusAsyncThunkI } from './redux';
import { AliexpressShippingServiceResponseI, ResponseSheinI } from './response';
import { ResponseIntegrationsI, ShopifyStoreInfoI } from './responseIntegrations';
import { ResponseKidalI } from './responseKidal';
import { ResponseShopifyI } from './responseShopify';

export interface InitialStateOrders {
    selectedOrder: PurchaseDataI;
    getOrders: StatusAsyncThunkI;
    orders: ResponseKidalI<PurchaseDataI[]> | null;
    pages: number;
    getShopifyInfo: StatusAsyncThunkI;
    shopifyInfo: ShopifyDataI;
    synchronizeShopify: StatusAsyncThunkI;
    synchronizeResult: string;
    trackingData: TrackingDataI | null;
    getTrackingData: StatusAsyncThunkI;
    fireWoocommerceAction: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
        identifier: string;
        type: string;
    };
    woocommerceAction: ResponseIntegrationsI<any> | null;
    currentOrdersForGenerateMassiveGuide: PurchaseDataI[] | null;
    getSheinLogistics: StatusAsyncThunkI;
    sheinLogistics: null | ResponseSheinI<SheinLogisticsI[]>;
    exportSheinAddress: StatusAsyncThunkI;
    sheinAddressExported: ResponseSheinI<any> | null;
    getSheinLabel: StatusAsyncThunkI;
    sheinLabel: any;
    getShopifyStore: StatusAsyncThunkI;
    shopifyStore: ResponseShopifyI<ShopifyStoreInfoI> | null;
    updateShopifyOrder: StatusAsyncThunkI & {
        identifier: string;
    };
    shopifyOrderUpdated: ResponseShopifyI<any> | null;
    t1TrackingData: TrackingDataI | null;
    getT1TrackingData: StatusAsyncThunkI & {
        identifier: string;
    };
    getMassiveGuidesForDownload: StatusAsyncThunkI;
    massiveGuideForDownload: GetMassiveGuidesForDownloadResponseI | null;
    aliexpressShippingMethods: AliexpressShippingServiceResponseI | null;
    aliexpressShippingServices: StatusAsyncThunkI;
    aliexpressGuideCreation: StatusAsyncThunkI;
    aliexpressCreatedGuide: AliexpressShippingServiceResponseI | null;
}
export interface ShippingAddressI {
    zipCode: string;
    city: string;
    phoneNumber: string;
    notes: string;
    outdoorNumber: string;
    interiorNumber: string;
    borough: string;
    betweenStreets: string | null;
    suburb: string;
    stateCode: string | null;
    state: string;
    street: string;
    addressee: string | null;
}
export interface ClientDataI {
    id: string;
    fullname: string;
    email: string;
}
export interface OrderedProductI {
    colocationId: string;
    idProduct: string;
    colocationIds?: string[];
    name: string;
    sku: string;
    universal_id: string | null;
    totalSale: number;
    colocationStatus: ColocationStatusI;
    deliveryTrackId: string | null;
    deliveryCarrierId: string | null;
    deliveryCarrierName: string | null;
    deliveryType: string;
    productType: string;
    dimensions: DimensionsI[];
    idFulfillment: string | null;
    imageLinkThumbnail: string;
    clickAndCollect: string | null;
    statusInvoice: string;
    statusTrack?: string;
    tipo_envio?: string;
    carrierName?: string;
    trackingNumber?: string;
    trackingUrl?: string;
    action?: string;
    t1_shop_id?: number;
    order_id?: string;
    speed?: number;
    tracking_number?: string;
    shipmentProviderCode: string;
}
export interface PurchaseDataI {
    id: string;
    orderid: string;
    marketplace: string;
    storeName?: string;
    external_id?: string | null;
    sellerID: string;
    purchase_date: string;
    authorization_date: string;
    shippingAddress: ShippingAddressI;
    clientData: ClientDataI;
    orderedProductsList: OrderedProductI[];
    paquetes: PackageI[] | null;
    dataMarketplace?: DataMarketplaceI;
    showDetail: boolean;
    showDots: boolean;
    paymentData?: PaymentDataI | null;
    status?: any;
    dimensions?: DimensionsI[];
    dataGuia?: AxxiDataI;
    sameStatus?: boolean;
    remainingOrderedProductsList?: OrderedProductI[];
}
export interface DimensionsI {
    height: number;
    width: number;
    depth: number;
    weight: number;
}
export interface ColocationStatusI {
    id: string | number;
    name: string;
    reasonID: string | null;
    reasonName: string | null;
}
export interface ShopifyDataI {
    id: number;
    name: string;
    email: string;
    domain: string;
    province: string;
    country: string;
    address1: string;
    zip: string;
    city: string;
    source: string;
    phone: string;
    latitude: number;
    longitude: number;
    primary_locale: string;
    address2: string;
    created_at: string;
    updated_at: string;
    country_code: string;
    country_name: string;
    currency: string;
    customer_email: string;
    timezone: string;
    iana_timezone: string;
    shop_owner: string;
    money_format: string;
    money_with_currency_format: string;
    weight_unit: string;
    province_code: string;
    taxes_included: boolean;
    auto_configure_tax_inclusivity: boolean | null;
    tax_shipping: boolean;
    county_taxes: boolean;
    plan_display_name: string;
    plan_name: string;
    has_discounts: boolean;
    has_gift_cards: boolean;
    myshopify_domain: string;
    google_apps_domain: string | null;
    google_apps_login_enabled: boolean | null;
    money_in_emails_format: string;
    money_with_currency_in_emails_format: string;
    eligible_for_payments: boolean;
    requires_extra_payments_agreement: boolean;
    password_enabled: boolean;
    has_storefront: boolean;
    finances: boolean;
    primary_location_id: number;
    checkout_api_supported: boolean;
    multi_location_enabled: boolean;
    setup_required: boolean;
    pre_launch_enabled: boolean;
    enabled_presentment_currencies: string[];
    transactional_sms_disabled: boolean;
    marketing_sms_consent_enabled_at_checkout: boolean;
}
export interface TrackingDataI {
    data: Array<any>;
    total_filtrados: number;
    total_registros: number;
}
export type DimensionsType = 'custom' | 'self' | 'xlBox' | 'doubleBox' | 'jumboFolder';
export interface CancelOrderFormI {
    numberGuide: string;
    dateTime: string;
    messengerServices: string;
    reason: string;
    commerceId: number;
}
export interface BamakoDataI {
    id: string;
    orderid?: string;
    marketplace: string;
    sellerID: string;
    purchase_date: string;
    authorization_date: string;
    shippingAddress: ShippingAddressI;
    clientData: ClientDataI;
    orderedProductsList: OrderedProductI[];
    paquetes: PackageI[] | null;
    dataMarketplace?: DataMarketplaceI;
    paymentData?: PaymentDataI;
    status?: {
        id: string;
        name: string;
    };
    dimensions?: DimensionsI[];
    dataGuia?: AxxiDataI;
    remainingOrderedProductsList?: OrderedProductI[];
}
interface PackageI {
    paquete: PackageItemI[];
}
interface PackageItemI {
    colocationId: string;
    sku: string;
    quantity: number;
    showDetail?: boolean;
}
export interface DataMarketplaceI {
    orderTag?: number;
    api_id?: number;
    printOrderStatus?: number;
    sellerDeliveryTime?: string;
    orderCurrency?: string;
    storeDiscountTotalPrice?: number;
    promotionDiscountTotalPrice?: number;
    totalServiceCharge?: number;
    estimatedGrossIncome?: number;
    totalSaleTax?: number;
    requestDeliveryTime?: string;
    printingTime?: string;
    scheduleDeliveryTime?: string;
    orderMsgUpdateTime?: string;
    paymentTime?: string;
    warehouseDeliveryTime?: string;
    billNo?: string;
    salesArea?: number;
    stockMode?: number;
    salesSite?: string;
    storeCode?: number;
    expectedCollectTime?: string | null;
    collectLimitTime?: Date;
    shipping_deadline?: Date;
    performanceType?: string;
    unpackingStatus?: string | null;
    packageWaybillList?: PackageWaybillI[];
    settleActuallyPrice?: number;
    pickUpTime?: string;
    orderReceiptTime?: string | null;
    orderRejectionTime?: string | null;
    orderReportedLossTime?: string | null;
    orderReturnTime?: string | null;
    unProcessReason?: any[];
    packageInvoiceProblems?: PackageInvoiceProblemI[];
    orderGoodsInfoList?: OrderGoodsInfoI[];
    order_state?: string;
    shipping_tracking_url?: string;
    shipping_type_code?: string;
}
interface PaymentDataI {
    status: string | null;
    plan: string | null;
    paymentMethod: string | null;
    paymentDueDate: string | null;
    paymentReference: string | null;
    bank: string | null;
    binCard: string | null;
    cardLastDigits: string | null;
    cardType: string | null;
    bankAffiliation: string | null;
    paymentNoInstallments: number;
    paymentInstallments: number | null;
    subtotal: number;
    discount: number | null;
    couponAmount: number | null;
    shippingCosts: number;
    total: number;
    commissions: CommissionsI | null;
}
interface AxxiDataI {
    kind: string;
    carrier: string;
    colocations: string[];
    trackId: string;
    nueva_guia: boolean;
    url_file: string;
    fecha_estimada: Date | null;
    emailUsuario: string;
}
interface CommissionsI {
    marketplace: null | string;
    t1paginas: number | null;
    gatewayFixed: number | null;
    gatewayVariable: number | null;
    gatewaySurcharge: number | null;
    total: null | number;
}
interface PackageWaybillI {
    packageNo: string;
    packageLabel: string;
    sortingCode: string;
    expressSortingCode: string;
    isCutOffSeller: number;
}
interface PackageInvoiceProblemI {
    problemCode: string | null;
    problemDescEnglish: string;
    problemField: string | null;
    proposalEnglish: string | null;
    isOverLimitOrder: number | null;
}
interface OrderGoodsInfoI {
    goodsId: number;
    skuCode: string;
    skc: string;
    goodsSn: string;
    sellerSku: string;
    goodsStatus: number;
    newGoodsStatus: number;
    skuAttribute: SkuAttributeI[];
    spuPicURL: string;
    goodsWeight: number;
    storageTag: number;
    performanceTag: number;
    goodsExchangeTag: number;
    beExchangeEntityId: number;
    orderCurrency: string;
    sellerCurrencyPrice: number;
    orderCurrencyStoreCouponPrice: number;
    orderCurrencyPromotionPrice: number;
    commission: number;
    commissionRate: number;
    serviceCharge: number;
    performanceServiceCharge: number;
    estimatedIncome: number;
    spuName: string;
    saleTax: number;
    warehouseCode: string | null;
    warehouseName: string | null;
    sellerCurrencyDiscountPrice: number;
    unpackingGroupNo: string;
    unpackingGroupInvoiceStatus: string | null;
    variation_attributes: IntegrationAttributesI[];
}
export interface IntegrationAttributesI {
    name: string;
    id: string;
    value_id: string;
    value_name: string;
}
export interface SkuAttributeI {
    attrValueId: string;
    attrName: string;
    language: string;
}
export interface SheinLogisticsI {
    expressChannelCode: string;
    expressIdCode: string;
    site: string;
}
export interface AliexpressLogisticsI {
    deliveryMode: string;
    shipmentProviderCode: string;
    shipmentProviderName: string;
}
export interface OrdersButtonsI {
    item: PurchaseDataI;
    product: OrderedProductI;
}
export interface GetMassiveGuidesForDownloadResponseI {
    message: string;
    total_registros_procesados: number;
    s3_zip_url: string;
    execution_time_seconds: number;
}
export interface GetMassiveGuidesForDownloadRequestBodyI {
    pedido_comercio: string;
    guia: string;
    link_guia: string;
}
export {};
//# sourceMappingURL=orders.d.ts.map