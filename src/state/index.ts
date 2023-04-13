import { createStore, combineReducers, compose } from 'redux'
import { fundsListReducer } from './reducers'
import { companiesListReducer } from './reducers/companiesListReducer'
import { errorReducer } from './reducers'
import { inputValueReducer } from './reducers'

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
	fundsList: fundsListReducer,
	companiesList: companiesListReducer,
	error: errorReducer,
	inputValue: inputValueReducer
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
