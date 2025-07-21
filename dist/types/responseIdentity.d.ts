export interface ResponseIdentityI<I> {
    metadata: {
        status: 'success';
        http_code: 200;
        date_time: string;
        message: 'ok';
    };
    data: I;
    pagination: Pagination;
}
interface Pagination {
    total_count: number;
    page: number;
    page_size: number;
}
export {};
//# sourceMappingURL=responseIdentity.d.ts.map