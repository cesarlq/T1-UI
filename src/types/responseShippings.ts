export interface ResponseShippingsI<I> {
    message: string,
    detail: Array<any>
}

export interface ResponseShippingsDataI<T = undefined> {
    data: T;
    count: number
    total_count: number
    page: number
    page_size: number
}