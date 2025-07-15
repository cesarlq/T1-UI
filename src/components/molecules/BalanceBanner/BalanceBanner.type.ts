
export interface BalanceBannerI {
    className?: string,
    balance: balanceI,
    BALLANCE_PATH: string
}

export interface balanceI {
    monto_actual: number
    comercio_id: number
    comercio_id_t1paginas: string
    credito: boolean
}