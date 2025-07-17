import { StaticImageData } from "next/image";
import { Product } from "./guide";

export interface QuoteI{
    parcel: StaticImageData; 
    service: string;
    deliveringType: string;
    date: string;
    extraCharge: number;
    priceRecollection: number;
    onSite: number;
}

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