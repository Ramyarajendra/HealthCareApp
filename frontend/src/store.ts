import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import providersReducer from './reducers/providerReducers'

const reducer = combineReducers({
    providersReducer
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export type RootStore = ReturnType<typeof reducer>

export default store