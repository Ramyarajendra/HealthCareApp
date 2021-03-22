import axios from 'axios'
import { Dispatch } from 'redux'
import { GET_PROVIDERS, ProvidersDispatch, PROVIDERS_ERROR, SEARCH_PROVIDERS } from './types'

export const searchProviders = (body: { name: string }) => async (dispatch: Dispatch<ProvidersDispatch>) => {
    try {
        const { data } = await axios.post('/api/providers', body)

        dispatch({
            type: SEARCH_PROVIDERS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PROVIDERS_ERROR,
            payload: error.message
        })
    }
}

export const getProviders = () => async (dispatch: Dispatch<ProvidersDispatch>) => {
    try {
        const { data } = await axios.get('/api/providers')

        dispatch({
            type: GET_PROVIDERS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PROVIDERS_ERROR,
            payload: error.message
        })
    }
}