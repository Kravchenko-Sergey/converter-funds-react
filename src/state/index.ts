import { createStore, combineReducers, compose } from 'redux'
import { fundsListReducer } from './reducers/fundsListReducer'
import { companiesListReducer } from './reducers/companiesListReducer'
import { errorReducer } from './reducers/errorReducer'

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
	fundsList: fundsListReducer,
	companiesList: companiesListReducer,
	error: errorReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const index = createStore(rootReducer, composeEnhancers())

// @ts-ignore
window.store = index

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}
