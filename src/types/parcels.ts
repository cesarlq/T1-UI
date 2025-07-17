import { StatusAsyncThunkI } from "./redux";
import { GeneralResponseI } from "./response";

export interface InitialStateParcelsI {
    getParcelsInfo: StatusAsyncThunkI
    parcels: null | GeneralResponseI<CourierI[]> & MappedServicesI
    updateParcelsStatus: StatusAsyncThunkI
}

export interface ServiceI {
    name: string;
    type: string;
    publicName: string;
}

export interface CourierI {
    id: number;
    name: string;
    status: boolean;
    classification: string;
    service: ServiceI[];
    keys_custom: CustomKeyI;
}

export interface CustomKeyI {
    onlycustom: boolean
    status: boolean,
    keys: Record<string, string | null>
}

export interface MappedServicesI {
    services: Record<string, string>
}

export interface CourierStatusFormI {
    name: string,
    status: boolean
}