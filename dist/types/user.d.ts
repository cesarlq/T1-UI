import { ResponseIdentityI } from './responseIdentity';

export interface InitialStateUserI {
    getBalance: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    getIdentityUser: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    balance: null | BalanceResponse;
    getUserInfo: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    getPaymentCards: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    info: UserI;
    paymentCards: null | PaymentCardI[];
    increaseBalance: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    increaseBalanceWithExistingCard: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    increaseBalanceWithSPEI: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    increaseBalanceWithSPEIData: null | SpeiGeneratedDataI;
    getUserStores: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    stores: StoreI[];
    getUserStoreRelation: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    billingInfo: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
        response: UserBillingInfo | null;
    };
    userStoreRelation: ResponseIdentityI<UserStoreRelationI[]> | null;
    deletePaymentCard: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    getPlans: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    plans: PlanI | null;
    getUserServices: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    userServices: {
        data: UserServiceI[];
    } | null;
}
export interface InitialStateBilling {
    regime: ApiResponseRegimeI | null;
    getTaxRegime: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    cfdi: ApiResponseCFDI | null;
    getCFDI: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    getBillingDataValidation: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    uploadDataBilling: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    dataResponseBilling: BillingInfoI | null;
    dataResponseBillingDataValidation: DataBillingI | null;
    getBillingbyInvoice: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
        response: DatadashI | null;
    };
    dataResponseBillingbyInvoice: DatadashI | null;
    PostBilling: {
        message: any;
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
        response: null;
    };
    getBillingPdf: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    billingPdf: {
        response: string | null | {
            success: boolean;
            message: string;
            data: any;
        };
    };
    getBillingXml: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    billingXml: {
        response: string | null | {
            success: boolean;
            message: string;
            data: any;
        };
    };
    postBillingInfo: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
        response: UserBillingInfo | null;
    };
    getUserStoreRelation: {
        status: "idle" | "loading" | "succeeded" | "failed";
        error: null | string;
    };
    userStoreRelation: ResponseIdentityI<UserStoreRelationI[]> | null;
}
export interface UserI {
    name: string;
    email: string;
    token: string;
    storeId: number;
}
export interface PaymentCardI {
    token: string;
    clienteId: string;
    iin: string;
    marca: string;
    pan: string;
    terminacion: string;
    nombre: string;
    expiracionMes: string;
    expiracionAnio: string;
    default: boolean;
    cargoUnico: boolean;
    direccion: {
        creacion: string;
        cp: string;
        pais: string;
        estado: string;
        linea1: string;
        ciudad?: string;
        municipio?: string;
    };
    pais: string;
    producto: string;
    creacion: string;
    actualizacion: string;
}
export interface AddBalanceFormI {
    card: string;
    amount: number;
    cvv2: string;
    numberCard: number;
    deadLine: string;
    address: string;
    postalCode: string;
    neighborhood: string;
    city: string;
    cardholder: string;
    municipality: string;
    state: string;
}
export interface DeleteCardI {
    token: string;
}
export interface BalanceResponse {
    success: boolean;
    message: string;
    detail: {
        monto_actual: number;
        comercio_id: number;
        comercio_id_t1paginas: string;
        credito: boolean;
    };
}
export interface StoreI {
    role: string;
    id: number;
    name: string;
    service: any;
}
export interface Address {
    street: string;
    outdoor_number: string;
    interior_number: string;
    zip: string;
    suburb: string;
    town: string;
    state: string;
    country: string;
}
export interface Attachment {
    name: string;
    uri: string;
}
export interface BillingInfoI {
    data: never[];
    active: boolean;
    tax_regime: string;
    type: string;
    name: string;
    surename: string;
    surename2: string;
    legalrepresentative: string | null;
    rfc: string;
    business_name: string;
    address: Address;
    cfdi: string | null;
    phone: number;
    mail: string;
    attachments: Attachment;
    legal_representative: string | null;
}
export interface UserBillingInfo {
    data: BillingInfoI[];
}
export interface RegimenI {
    id: number;
    descripcion: string;
    clave: string;
}
export interface ApiResponseRegimeI {
    data: RegimenI[];
}
export interface ApiResponseCFDI {
    data: UsoCFDI[];
}
export interface UsoCFDI {
    id: string;
    descripcion: string;
    clave: string;
    tipoPersona: number;
}
export interface UserStoreRelationI {
    username: string;
    rol: string;
    service: any;
}
export interface SpeiGeneratedDataI {
    cargo: ChargeI;
}
interface ChargeI {
    tipo: string;
    id: string;
    monto: number;
    fecha: string;
    codigo: string;
    descripcion: string;
    cliente_id: string;
    prueba: boolean;
    orden_id: string;
    metodo_pago: string;
    estatus: string;
    cliente: UserDataForSpeiGeneratedI;
    riesgo: RiskI;
    transferencia: TransactionInfoForSpeiGeneratedI;
}
interface UserDataForSpeiGeneratedI {
    id: string;
    creacion: string;
    actualizacion: string;
    email: string;
    estado: string;
    nombre: string;
    id_externo: string;
    apellido_paterno: string;
}
interface RiskI {
    score: number;
    decision: string;
    procesador: string;
}
interface TransactionInfoForSpeiGeneratedI {
    formato: string;
    concepto: string;
    clabe: string;
    fecha_inicio: string;
    fecha_fin: string;
}
export interface DatadashI {
    Folio: number;
    Estado: string;
    Fecha: string;
    RFC: string;
    Cantidad: number;
    Comision: number;
}
export interface UserValidationI {
    _id: string;
    createdAt: string;
    cardTokens: any[];
    isActive: boolean;
    commerceId: string;
    monthlySales: string;
    howDidYouKnow: string;
    shippingType: string;
    serviceType: string;
    storeType: string;
    shippingQuantity: string;
    storeName: string;
    externalClientEmail: string;
    externalClientId: string;
    uuid: string;
    requireBilling: boolean;
    isRegisterInBillingAPI: boolean;
}
export interface DataValidationI {
    phone: string;
    mail: string;
    active: boolean;
    type: string;
    name: string;
    surename: string;
    surename2: string;
    legal_representative: string | null;
    business_name: string;
    rfc: string;
    address: Address;
    tax_regime: string | null;
    regimen_code: string;
    regimen_description: string;
    cfdi: string | null;
    cfdi_code: string;
    cfdi_description: string;
    attachments: Attachment;
    is_registered_in_t1envios_api: boolean;
    id_tax_regime: string | null;
    id_cfdi: string | null;
}
export interface DataBillingI {
    user: UserValidationI;
    data: [DataValidationI];
}
export interface PlanI {
    plan: string;
    routes: string[];
    storeId?: string;
}
export interface UserServiceI {
    service: string;
    signatureType: string;
    status: string;
    data?: {
        new_survey?: true;
    };
}
export {};
//# sourceMappingURL=user.d.ts.map