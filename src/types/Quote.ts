import { Product } from "./guide";

export interface GetQuotesFormI{
    destinyPostalCode: string
    originPostalCode: string
    length: number,
    height: number
    width: number
    weight: number
    insurance?: boolean
    packageValue?: number,
    numberPackages?: number
    products?: Product[]
    orderNumber?: number | string
    marketPlace?: string
}