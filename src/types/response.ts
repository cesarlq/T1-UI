export interface ResponseI<I> {
    data: {
        success: boolean;
        message: string;
        detail: I;
        total?: number
        pagina?: string
        filtrados?: number
    }
    status: string
}

export interface GeneralResponseI<I> {
    success: boolean,
    message: string,
    detail: I,
    statusCode: number
}

export interface Response2I<I> {
    data: {
        success: boolean;
        message: string;
        detail: any;
    }
    status: string
}

export interface ResponseDataI<T = undefined> {
    metadata: {
        status: string;
        http_code: number;
        date_time: string;
        message: string;
    };
    data: T;
    pagination?: PaginationI
    paginated?: PaginationI
}

export interface PaginationI {
    total_count: number
    page: number
    page_size: number
}

export interface ResponseSheinI<T = undefined> {
    data: T;
    error: boolean;
    message: string;
    meta: {
        last_page: number;
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
    }
    statusCode: number;
    orderId: string;
}

export interface ResponseOnboardingAwsI<T = undefined> {
    http_code: string;
    message: string;
    status: string;
    validationResults: any;
    data: T;
    body: T;
}

export interface ResponseHudI<T, P = undefined> {
    data: T;
    pagination?: P
}

export interface PaginationHubI {
    current_page: number;
    limit: number;
    total_pages: number;
    total_records: number;
}
export interface ResponseAliexpressI<T = undefined> {
    data: T;
    error: boolean;
    message: string;
    meta: {
        last_page: number;
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
    }
    statusCode: number;
    orderId: string;
}

export interface AliexpressLinkI {
    appid: string
    openKeyId: string
    secretKey: string
    state: string
    code: string
}

export type AliexpressShippingServiceResponseI = Array<{
    deliveryMode: string;
    shipmentProviderCode: string;
    shipmentProviderName: string;
}>;

export interface AliexpressAddGuideResponseI {
    data: {
        request_id: string;
        result: {
            errorCode?: string;
            errorMessage?: string;
            success: boolean;
        };
    };
    metadata: {
        message: string;
        status: number;
        success: boolean;
    };
    pagination: {
        count: number;
        current_page: number;
        per_page: number;
        total: number;
        total_pages: number;
    };
}

export interface CsvValidationResponseI {
    valid: boolean;
    errors: string[];
    file: File
}

export interface FileItemResponseI {
    file: string;
    url: string;
    path: string;
}

export interface FilesDataResponseI {
    files: FileItemResponseI[];
}

export interface PaginationI {
    current_page: number
    limit: number
    total_pages: number
    total_records: number
}