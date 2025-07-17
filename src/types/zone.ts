import { StatusAsyncThunkI } from "./redux";
import { PaginationI } from "./response";

export interface InitialStateZonesI {
    getZipsFromFile: StatusAsyncThunkI
    zipsFromFile: SegmentObjectI[] | null
    createZone: StatusAsyncThunkI
    deleteZones: StatusAsyncThunkI
    updateZone: StatusAsyncThunkI<ZoneDataForFormI & { id: string }>
    getZones: StatusAsyncThunkI
    zones: null | ZonesResponseI
    getCities: StatusAsyncThunkI
    cities: null | string[]
    getStates: StatusAsyncThunkI
    states: null | string[]
    validateFileFromZoneForm: StatusAsyncThunkI
    acceptedCSVFile: File | null
}

export type ZoneType = 'zip' | 'city' | 'state' | 'empty'

export interface ZoneDataForFormI {
    name: string
    typeZone: ZoneType
    segments: string[] | SegmentObjectI[]
    status: boolean | number
}

export interface SegmentObjectI {
    name: string
}

export interface ZoneI {
    id: string;
    name: string;
    segmentation: string;
    status: number | boolean;
    status_description: string;
    zip_codes?: string[];
    cities?: string[]
    states?: string[]
    coverage: string | number
    created_at: string
    updated_at: string
}

export interface ZonesResponseI {
    data: {
        body: {
            data: ZoneI[]
        },
        pagination: PaginationI
    }
}

export interface AutoCompleteValueI {
    label: string
    value: string
    id: number
}