export const SEARCH_PROVIDERS = 'SEARCH_PROVIDERS'
export const GET_PROVIDERS = 'GET_PROVIDERS'
export const PROVIDERS_ERROR = 'PROVIDERS_ERROR'

export interface Providers {
    type: typeof SEARCH_PROVIDERS | typeof GET_PROVIDERS,
    payload: Provider[]
}

export interface ProvidersError {
    type: typeof PROVIDERS_ERROR,
    payload: any
}

export type ProvidersDispatch = Providers | ProvidersError

export interface Provider {
    identifier: number,
    gender: string,
    name: string,
    specialty: string,
    address: AddressI
}

interface AddressI {
    street: string,
    city: string,
    state: string,
    postal_code: string,
    telephone_number: string
}