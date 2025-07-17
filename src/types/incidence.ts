import { StaticImageData } from "next/image";
import { StatusAsyncThunkI } from "./redux";
import { GeneralResponseI } from "./response";
import { UserI } from "./user";
import { ReactNode } from "react";

export interface InitialStateIncidence {
    getIncidences: StatusAsyncThunkI<{
        userInfo: UserI;
        pageSize: number;
        couriers?: string[];
        search: string;
        status?: string[];
        endDate: string;
        startDate: string;
        page: number;
    }>
    incidences: null | GeneralResponseI<IncidenceItemI[]> & IncidencesPaginationI
    getIncidenceDetailByGuide: StatusAsyncThunkI
    incidenceDetailByGuide: null | IncidenceDetailI
    createUserIncidence: StatusAsyncThunkI
    getBase64String: StatusAsyncThunkI
    base64Strings: string[] | null
    getCouriersLocations: StatusAsyncThunkI
    courierLocation: null | CourierOfficeDataI[]
    updateCourierIncidence: StatusAsyncThunkI
    getIncidencesCounters: StatusAsyncThunkI
    incidencesCounters: null | GeneralResponseI<IncidenceCountersI>
}

export interface IncidenceItemI {
    _id: string;
    incident_id: string;
    shipment_number: string;
    carrier_id: number;
    status: string
    type: string
    created_at: string;
    updated_at: string;
    carrier_name: string;
    origin: string
}

export interface IncidencesPaginationI {
    totalPages: number
    totalRecords: number
}

export interface ShippingDataItemI {
    title: string
    value: string
    width?: string
    link?: string
    isLink?: boolean
    extraData?: ReactNode
}

export interface IncidenceDetailI {
    _id: string;
    incident_id: string;
    guide_number: string;
    commerce_id: number;
    carrier_id: number;
    origin: string;
    type: string;
    priority: string;
    created_at: string;
    shipment_details: ShipmentDetailsI;
    timeline: TimelineEventI[];
    action_details: ActionDetailI[];
    status: string;
    status_mensajeria: string;
    deadline: string;
    audit_fields: AuditInfoI;
}

interface AuditInfoI {
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
}

interface ShipmentDetailsI {
    origin: AddressI;
    destination: AddressI;
    package: PackageI;
    cost: string;
}

interface AddressI {
    street: string;
    neighborhood: string;
    number: string;
    postalCode: string;
    municipality: string;
    state: string;
    contact: string;
    phone: string;
    email: string;
    company: string | null;
}

interface PackageI {
    weight: string;
    dimensions: DimensionsI;
    description: string;
    value: string;
    service: string;
    service_type: string;
}

interface DimensionsI {
    length: string;
    width: string;
    height: string;
}

export interface TimelineEventI {
    status: string;
    registered_in: string;
    actor: ActorI;
    notes: string;
}

interface ActorI {
    id: number;
    type: string;
    name: string;
}

interface ActionDetailI {
    type: string;
    address_change: AddressChangeI;
}

interface AddressChangeI {
    calle: string;
    colonia: string;
    código_Postal: string;
    estado: string;
}

export interface IncidenceAddressI {
    street: string;
    extNumber: string;
    intNumber: string;
    neighborhood: string;
    state: string;
    city: string;
    references: string;
    zip: string
    reason?: string,
}

export interface IncidenceFromCourierI extends Partial<IncidenceAddressI> {
    dataTimeDelivery?: string
}

export interface IncidenceFormI {
    incidentId?: string
    guideNumber: string,
    status?: string
    actionType: string,
    notes?: string
    address_change?: IncidenceAddressI
    package_damaged?: Record<string, string | number | string[] | File[] | File>
    package_opened_or_tampered?: Record<string, string | number | string[] | File[] | File>
    delivery_delay?: Record<string, string | number | string[] | File[] | File>
    wrong_address_delivery?: Record<string, string | number | string[] | File[] | File>
    return_to_origin?: Record<string, string | number | string[] | File[] | File>
    compensation_payment?: Record<string, string | number | string[] | File[] | File>
    failed_pickups?: Record<string, string | number | string[] | File[] | File>
    overweight?: Record<string, string | number | string[] | File[]>
    send_to_courier?: Record<string, string | number | string[] | File[] | File>
    package_lost?: Record<string, string | number | string[] | File[] | File>
    package_without_movement?: Record<string, string | number | string[] | File[] | File>
}

export interface IncidentFieldI {
    name?: string,
    type: string,
    label?: string,
    placeHolder?: string,
    required?: boolean,
    options?: IncidentFieldOptionI[]
    maxFiles?: number,
    maxSize?: number,
    multiple?: boolean
    accepts?: string
    middlePosition?: boolean,
    depends?: DependsI
    startAdornment?: string
    isSpecialFields?: boolean
    disabled?: boolean
}

export interface DependsI {
    fieldName: string,
    value: string
}

export interface IncidentFieldOptionI {
    value: number | string
    label: string
}

export interface GeoPositionalCoordinatesI {
    latitude: string | number,
    longitude: string | number
}

export interface DynamicBodyLocations {
    'DHL'?: GeoPositionalCoordinatesI,
    'FEDEX'?: {
        location: {
            address: {
                postalCode: string,
                countryCode: string
            }
        }
    }
    'UPS'?: {
        CP: string
    }
}

export type FedexOperationalHours = {
    begins: string;
    ends: string;
};

export type FedexHoursData = {
    dayOfWeek: string;
    operationalHoursType: string;
    operationalHours?: FedexOperationalHours;
};

export interface CourierOfficeDataI {
    officeName: string,
    address: string,
    distance?: string,
    geoCoordinates: GeoPositionalCoordinatesI,
    schedules?: string
    addressData: IncidenceAddressI
}

export interface CourierPercentageI {
    nombre_mensajeria: string;
    total_de_registros: number;
    total_de_incidencias: number;
    percentaje: number;
}

export interface IncidenceCountersI {
    total_de_guias: number;
    overall_percentaje: number;
    couriers: CourierPercentageI[];
    statusCount: {
        requires_action: number;
        pending: number;
        in_process: number;
        finalized: number;
    }
}

export interface IncidenceOptionByIncidenceTypeI {
    label: string,
    icon: StaticImageData
}

export interface FileIncidenceErrorsI {
    type?: boolean
    size?: boolean,
    length?: boolean
}

export interface SelectedInfoFromMapDataI {
    address: string,
    addressName: string,
    schedule?: string
}