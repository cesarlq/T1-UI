import { PurchaseDataI } from './orders';

export interface ResponseKidalI<I> {
    data: PurchaseDataI[];
    metadata: {};
    pagination: {
        total_registros: number;
        page_size: number;
    };
    status: string;
}
//# sourceMappingURL=responseKidal.d.ts.map