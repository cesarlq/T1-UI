import { GeoPositionalCoordinatesI } from "./incidence";
import { AliexpressLogisticsI, SheinLogisticsI } from "./orders";
import { GetQuotesFormI } from "./Quote";
import { StatusAsyncThunkI } from "./redux";
import { GeneralResponseI, ResponseI } from "./response";

export interface InitialStateGuideI {
    createGuide: StatusAsyncThunkI
    getOptionsParcels: StatusAsyncThunkI,
    multiGetOptionParcels: Record<string, StatusAsyncThunkI>
    currentOrderNumberForLoading: string
    optionParcelsFromIndividualData: null | ParcelInfoI[],
    getOptionParcelsFromIndividualData: StatusAsyncThunkI
    getHistoryGuides: StatusAsyncThunkI
    getPickUp: StatusAsyncThunkI
    getTrackingGuidesStates: StatusAsyncThunkI
    getOriginInfoStateByPostalCode: StatusAsyncThunkI,
    getDestinationInfoStateByPostalCode: StatusAsyncThunkI,
    originStateInfo: null | StateInfoI
    destinationStateInfo: null | StateInfoI
    historyGuides: {
        detail: {
            total_filtrados: number,
            total_registros: number,
            data: ShippingHistoryI[]
        },
        message: string,
        success: boolean
    } | null
    pickUp: {
        detail: {
            total_filtrados: number,
            total_registros: number,
            data: PickupInfo[]
        },
        message: string,
        success: boolean
    } | null
    optionsParcels: null | ParcelInfoI[]
    errorsOptionParcels: null | ErrorMessageI[]
    currentStepOnCreateGuide: number
    currentOptionParcelsPayload: null | GetQuotesFormI,
    statesTrackingGuides: null | ResponseI<GuideByStateI[]>,
    getGuideDetail: StatusAsyncThunkI,
    getLots: {
        status: "idle" | "loading" | "succeeded" | "failed",
        error: null | string,
        data: LotI[]
    }
    getLotById: {
        status: "idle" | "loading" | "succeeded" | "failed",
        error: null | string,
        data: GuideTrackingI[]
    }
    postPickUp: {
        status: "idle" | "loading" | "succeeded" | "failed",
        error: null | string
        response: null | ResponseToPostPickupI
    }
    postCancelGuide: {
        status: "idle" | "loading" | "succeeded" | "failed",
        error: null | string
        response: null | any
    }
    postMassiveGuide: {
        status: "idle" | "loading" | "succeeded" | "failed",
        error: null | string
        response: null | any
    }
    guideGenerated: null | GeneralResponseI<GeneratedGuideI> | GeneralResponseI<GeneratedGuideI>[]
    trackingGuide: {
        status: "idle" | "loading" | "succeeded" | "failed",
        error: null | string
        response: null | TrackingGuideResponseI
    }

    trackingGuideByOrderNumber: {
        status: "idle" | "loading" | "succeeded" | "failed",
        error: null | string
        response: null | GuideDetailResponse
    }
    getNewBatch: {
        status: "idle" | "loading" | "succeeded" | "failed",
        error: null | string
        response: null | any
    },
    originColonies: ColonyI[] | null
    destinationColonies: ColonyI[] | null
    defaultColoniesSelected: ColonyI[] | null,
    currentTokensForCreateMassiveGuideByOrderNumber: Record<string, string>
    getMultiGuides: StatusAsyncThunkI
    multiGuides: GeneralResponseI<{ data: LinkAndGuideI[] }> | null
    getExcelInfoFromShippings: StatusAsyncThunkI
    excelInfo: { data: string } | null
    getGuide: StatusAsyncThunkI
    guide: null | GeneralResponseI<IndividualGuideInfoI>
}

export interface GuideI {
    content: string;
    weight: number;
    length: number;
    width: number;
    height: number;
    templateId?: string
    nameTemplate?: string
    saveTemplate?: boolean
    shipmentDays: number;
    insurance: boolean;
    packageValue: number;
    packageType: number;
    originName: string;
    originLastName: string;
    originEmail: string;
    originStreet: string;
    originNumber: string;
    originNeighborhood: string;
    originPhone: string;
    originState: string;
    originCity: string;
    originReferences: string;
    originPostalCode: string;
    originCompany?: string
    destinationName: string;
    destinationLastName: string;
    destinationEmail: string;
    destinationStreet: string;
    destinationExtNumber: string;
    destinationIntNumber: string;
    destinationNeighborhood: string;
    destinationPhone: string;
    destinationState: string;
    destinationCity: string;
    destinationReferences: string;
    destinationPostalCode: string;
    destinationCompany?: string
    generateCollection: boolean;
    parcelToken: string;
    originIntNumber: string;
    numberPackages: number;
    checkSaveDestinationData?: boolean
    checkSaveOriginData?: boolean
    destinationAddressIdToEdit?: string
    originAddressIdToEdit?: string
    originAddressNameToSaveOrEdit?: string
    destinationAddressNameToSaveOrEdit?: string
    products?: Product[]
}

export interface GuideOrderI {
    dimensions: DimensionsForGuideOrderI
    shipmentDays: number;
    packageValue: number;
    packageType: number;
    originAddress: AddressForGuideOrderI;
    destinationAddress: AddressForGuideOrderI;
    generateCollection: boolean;
    parcelToken: string;
    numberPackages: number;
    products?: Product[];
    orderNumber?: string;
    constGuide: number
    marketplace?: string;
    insurance?: boolean
}

export interface PickupInfo {
    id: number;
    numero_pickup: string;
    mensajeria_id: number;
    nombre_mensajeria: string;
    id_comercio: number;
    nombre_contacto: string;
    telefono: string;
    calle: string;
    numero: string;
    colonia: string;
    codigo_postal: string;
    municipio: string;
    estado: string;
    fecha_pickup: string | null; // Puede ser null o una fecha en formato de cadena
    hora_inicio: string;
    horario_cierre: string;
    cantidad_piezas: number;
    peso: number;
    largo: number;
    ancho: number;
    alto: number;
    referencias: string;
    localizacion: string;
    usuario_id: number;
    created_at: string; // Puede necesitar validación de fecha
    updated_at: string; // Puede necesitar validación de fecha
}


export interface AddressForGuideOrderI {
    name: string;
    lastName: string;
    email: string;
    street: string;
    extNumber: string;
    intNumber: string;
    neighborhood: string;
    phone: string;
    state: string;
    city: string;
    references: string;
    postalCode: string;
    content?: string;
    company?: string;
}

export interface DimensionsForGuideOrderI {
    weight: number;
    length: number;
    templateName?: string;
    width: number;
    height: number;
    favorite?: boolean
}


export interface OptionParcelDataI {
    codigo_postal_origen: string;
    codigo_postal_destino: string;
    peso: number;
    largo: number;
    alto: number;
    ancho: number;
    dias_embarque: number;
    seguro: boolean;
    valor_paquete: number;
    tipo_paquete: number;
    comercio_id: number;
    commerceId: number,
    productos: Product[]
}

export interface ShippingHistoryI {
    fecha_hora: string;
    num_orden: number;
    mensajeria: string;
    guia: string;
    codigo_mensajeria: string;
    estatus: string;
    estatus_generico: string;
    apellido_destino: string;
    correo_destino: string;
    direccion_destino: string;
    nombre_destino: string
    telefono_destino: string;
    notificaciones: number;
    pedido_comercio: string;
    link_rastreo: string;
    g_ret: null | string;
    link_documento: string;
    costo_total: number;
    name: string;
    seguro: number;
    valor_paquete: number;
    paq_adicional: number
    cancelada: boolean
}

export interface ParcelInfoI {
    nameParcel: string;
    serviceType: string;
    deadLine: string;
    totalCost: number;
    token: string
    extraCharge: number
    insuranceCost: number
    parcelCost: number
    extendedZone: number
    orderNumber?: number | string
    sheinLogistics?: SheinLogisticsI
}

export interface ParcelSelectedI {
    name: string,
    token: string,
    service: string,
    sheinLogistics?: SheinLogisticsI,
}

export interface ParcelServiceInfoI {
    servicio: string;
    tipo_servicio: string;
    costo_mensajeria: number;
    costo_total: number;
    fecha_mensajeria_entrega: string;
    fecha_claro_entrega: string;
    dias_entrega: number;
    negociacion_id: number;
    porcentaje_negociacion: number;
    costo_negociacion: number;
    porcentaje_seguro: number;
    costo_seguro: number;
    costo_zona_extendida: number;
    valor_paquete: number | null;
    moneda: string;
    peso: number;
    peso_volumetrico: number;
    peso_unidades: string;
    largo: number;
    ancho: number;
    alto: number;
    costo_total_seguro: number;
    token: string;
}

export interface StateInfoI {
    status: boolean;
    error: string;
    c_estado: string;
    estado: string;
    municipio: string;
    ciudad: string;
    colonias: string[];
    code: number
    postalCode?: string
}

export interface GuideByStateI {
    _id: string;
    fecha_creacion: string;
    mensajeria: string;
    fecha_envio: string;
    estado: string;
    estatus_transito: string;
    dias_transito: string;
}

export interface StatesTrackingGuidesParamsI {
    endDate?: string,
    startDate?: string
    stateGuide: string
}

export interface LotI {
    numero_lote: number;
    status: string;
    nombre_archivo: string;
    codigo_status: number;
    fecha: string;
}

export interface GuideTrackingI {
    guia: string;
    id_orden: string;
    direccion_destino: string;
    fecha_carga: string;
    status: string;
    codigo_status: number;
    url_etiqueta: string;
    error: string;
    numero_fila: number;
}

export interface PickUpIGuide {
    mensajeria: string;
    nombre_contacto: string;
    apellidos_contacto: string;
    email: string;
    calle: string;
    numero: string;
    colonia: string;
    telefono: string;
    estado: string;
    municipio: string;
    codigo_postal: string;
    referencias: string;
    cantidad_piezas: number;
    peso: number;
    largo: number;
    ancho: number;
    alto: number;
    fecha: string;
    hora_inicio: string;
    horario_cierre: string;
}

export interface ResponsePickUpI {
    success: boolean;
    message: string;
    response: {
        detail: {
            recoleccion: {
                status: string;
                mensaje: string;
                location: string;
                pick_up: string;
                localizacion: string;
            };
        };
    };
}

export interface DataReqI {
    alto: number;
    ancho: number;
    apellidos_destino: string;
    apellidos_origen: string;
    calle_destino: string;
    calle_origen: string;
    codigo_postal_destino: string;
    codigo_postal_origen: string;
    colonia_destino: string;
    colonia_origen: string;
    contenido: string;
    dias_embarque: number;
    email_destino: string;
    email_origen: string;
    estado_destino: string;
    estado_origen: string;
    generar_recoleccion: boolean;
    id_orden: number;
    largo: number;
    municipio_destino: string;
    municipio_origen: string;
    nombre_destino: string;
    nombre_origen: string;
    numero_destino: string;
    numero_fila: number;
    numero_origen: string;
    peso: number;
    productos: Product[];
    referencias_destino: string;
    referencias_origen: string;
    seguro: boolean;
    telefono_destino: string;
    telefono_origen: string;
    tipo_paquete: number;
    valor_paquete: number;
}

export interface Product {
    codigo_sat: string;
    descripcion_sat: string;
    precio: number;
    alto: number
    ancho: number
    largo: number
    peso: number
}

export interface MassiveGuideReqI {
    commerceId: number;
    data: DataReqI[];
    id_seller: number;
    nombre_archivo: string;
    numero_lote: number;
}

export interface DateRangeI {
    0: Date;
    1: Date;
}

export interface SatProductI {
    _id: string;
    code: string;
    name: string;
    iva: string;
    ieps: boolean;
    __v: number;
}

export interface GeneratedGuideI {
    num_orden: number;
    guia: string;
    file: string;
    destino: string
    link_guia: string
    pedido_comercio: string
    costo: number
    multiguia: MultiGuideI[]
    fecha_creacion: string
    paqueteria: string
    token?: string
}

interface MultiGuideI {
    [x: string]: string;
    guia_master: string
    guia: string
    file: string
}

export interface TrackingGuideResponseI {
    success: boolean;
    message: string;
    error: null | string;
    details: TrackingGuideResponseDetailI[]
}

export interface TrackingGuideResponseDetailI {
    id_seller: number;
    codigo: string;
    descripcion: string;
    familia_interna: string;
    familia_generica: string;
    guia: string;
    fecha: string;
    recibe: string | null;
    direccion: string | null;
    fecha_estimada: string;
    id_mensajeria: number;
    hora: string;
    guia_retorno: string | null;

}

export interface GuideDetailResponse {
    success: boolean;
    message: string;
    error: null | string;
    detail: {
        id_seller: number;
        codigo: string;
        descripcion: string;
        familia_interna: string;
        familia_generica: string;
        guia: string;
        fecha: string;
        recibe: string;
        direccion: string;
        fecha_estimada: string;
        id_mensajeria: number;
        guia_retorno: null | string;
    };
}

export interface ColonyI {
    label: string
    id: number
    postalCode: string
}

export interface ResponseToPostPickupI {
    status: string;
    data: {
        success: boolean;
        message: string;
        detail: {
            recoleccion: {
                location: string;
                pick_up: string;
                localizacion: string;
            };
        };
    };
}

export interface CustomKeyI {
    key: Record<string, string>[]
    status: boolean
}

export interface SpecificRuleI {
    priority: number
    nameRule: string,
    date: string
    parcels: string[]
    status: boolean
}

export interface RowDataCSV {
    "Numero de pedido"?: string;
    "Municipio Dest."?: string;
    "Email Destinatario"?: string;
    "Num. Ext. Destinatario"?: string;
    "Num. Int. Destinatario"?: string;
    "Apellidos Destinatario"?: string;
    "Nombre Destinatario"?: string;
    "Colonia Destinatario"?: string;
    "Telefono Destinatario"?: string;
    "C.P. Dest."?: string;
    "Referencias Dest"?: string;
    "Calle Destinatario"?: string;
    "Estado Dest."?: string;
    "Contenido"?: string;
    "Compania Destinatario"?: string;
    "Municipio Remitente"?: string;
    "Email Remitente"?: string;
    "Num. ext . Remitente"?: string;
    "Num. Int. Remitente"?: string;
    "Apellidos Remitente"?: string;
    "Nombre Remitente"?: string;
    "Col. Remitente"?: string;
    "Telefono Remitente"?: string;
    "C.P. Remitente"?: string;
    "Refetencias Remitente"?: string;
    "Estado Remitente"?: string;
    "Calle Remitente"?: string;
    "Compania Remitente"?: string;
    "Alto(cm)"?: string;
    "Largo(cm)"?: string;
    "Peso(kg)*"?: string;
    "Ancho(cm)"?: string;
    "Valor del paquete(mxn)"?: string;
    "Codigo SAT"?: string;
    "Descripcion SAT"?: string;
    "Precio(mxn)"?: string;
    "Seguro"?: string;
}

export interface ErrorMessageI {
    pedido_comercio: string;
    message: string[];
}

export interface OauthConfigParcelI {
    clave: string;
    descripcion: string;
    value?: string
}

export interface OauthParcelApiFormI {
    onlyCustom: boolean
    status: boolean,
    carrier: string
    keys: OauthConfigParcelI[]
}

export interface KeysAndValueI {
    nameKey: string
    valueKey: string
}

export interface OauthParcelAPiParams {
    status: boolean,
    carrier: string
    keys: KeysAndValueI[]
}

export interface LinkAndGuideI {
    guia: string,
    link_documento: string
}

export interface GuideDetailI {
    id: number;
    guia: string;
    bitacora_cotizacion_mensajeria_id: number;
    bitacora_mensajeria_origen_id: number;
    bitacora_mensajeria_destino_id: number;
    status_entrega: number;
    fecha_status_entrega: string | null;
    usuario_id: number;
    updated_usuario_id: number | null;
    created_at: string;
    updated_at: string | null;
    contenido: string;
    mensajeria_id: number;
    comercio_id: number;
    origen: number;
    notificacion: number;
    conciliado: number;
    estatus: number;
    numero_externo: string;
    facturado: number;
    clave_producto_sat: string;
    guia_padre: string | null;
    mensajeria_nombre: string
    peso_reportado: number | null;
    codigo_mensajeria: string | null;
    familia_interna: string | null;
    familia_externa: string | null;
}

export interface QuotationDetailI {
    id: number;
    mensajeria_id: number;
    comercio_id: number;
    tipo_servicio: string;
    servicio: string;
    costo: string;
    costo_cliente: number;
    costo_porcentaje: string;
    porcentaje: string;
    costo_convenio: string;
    porcentaje_seguro: number;
    valor_paquete: number;
    mensajeria_nombre: string
    moneda: string;
    codigo_postal_destino: string;
    codigo_postal_origen: string;
    peso: string;
    largo: string;
    ancho: string;
    alto: string;
    dias_embarque: string;
    seguro: number;
    fecha_liberacion: string;
    fecha_mensajeria_entrega: string;
    fecha_claro_entrega: string;
    fecha_cotizacion: string;
    usuario_id: number;
    updated_usuario_id: number | null;
    token: string;
    created_at: string;
    updated_at: string | null;
    negociacion_id: number;
    tipo_paquete: number;
    costo_adicional: number;
    costo_seguro: number;
    costo_zona_extendida: number;
    numero_externo: string;
    envio_internacional: number;
    pais_destino: string;
    peso_declarado: number;
    id_configuracion: number;
    peso_cotizado: number;
    peso_volumetrico: number;
    paquetes: number;
    origen: number;
}

export interface AddressGuideDetail {
    id: number;
    nombre: string;
    apellidos: string;
    email: string;
    calle: string;
    numero: string;
    colonia: string;
    municipio: string;
    telefono: string;
    estado: string;
    referencias: string;
    nombre_comercio: string | null;
    usuario_id: number;
    updated_usuario_id: number | null;
    created_at: string;
    updated_at: string | null;
}

export interface TrackingI {
    _id: string;
    id_estatus: number;
    num_orden: number;
    id_seller: number;
    id_mensajeria: number;
    codigo: string;
    guia: string;
    descripcion: string;
    fecha_hora: string;
    identificadorUnico: string;
    nombre_recibe: string;
    nombre_cliente: string;
    fecha_estimada: string;
    peso_paquete: string;
    unidad_peso_paquete: string;
    peso_envio: string;
    unidad_peso_envio: string;
    largo: string;
    alto: string;
    ancho: string;
    unidad_dimesiones: string;
    tracking_link: string;
    tracking_link_t1envios: string;
    familia_externa: string;
    familia_interna: string;
    notificaciones: number;
    fecha_alta: string;
    fecha_modificacion: string;
    valorPaquete_cotizacion: number;
    costo_porcentaje_cotizacion: string;
    numero_externo: string;
    envio_internacional: number;
    pais_destino: string;
    track_origin: string;
}

export interface IndividualGuideInfoI {
    guia: GuideDetailI;
    cotizacion: QuotationDetailI;
    origen: AddressGuideDetail;
    destino: AddressGuideDetail;
    tracking: TrackingI
    originGeoCoordinates: GeoPositionalCoordinatesI
    destinationGeoCoordinates: GeoPositionalCoordinatesI
}
