import { GET_PROVIDERS, Provider, ProvidersDispatch, PROVIDERS_ERROR, SEARCH_PROVIDERS } from "../action/types";

interface IntialState {
    loading: boolean,
    providers: Provider[] | [],
    error?: any
}

const initialState: IntialState = {
    loading: false,
    providers: []
}

const providersReducer = (state = initialState , action: ProvidersDispatch): IntialState => {
    switch (action.type) {
        case SEARCH_PROVIDERS:
            return {
                ...state,
                loading: false,
                providers: action.payload
            }

        case GET_PROVIDERS:
            return {
                ...state,
                loading: false,
                providers: action.payload
            }

        case PROVIDERS_ERROR:
            return {
                providers: [],
                loading: false,
                error: action.payload
            }
    
        default:
            return state
    }
}

export default providersReducer