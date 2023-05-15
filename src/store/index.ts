import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { fundsListReducer } from './reducers'
import { companiesListReducer } from './reducers/companiesListReducer'
import { errorReducer } from './reducers'
import { inputValueReducer } from './reducers'
import thunk from 'redux-thunk'

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
	fundsList: fundsListReducer,
	companiesList: companiesListReducer,
	error: errorReducer,
	inputValue: inputValueReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const index = createStore(rootReducer, applyMiddleware(thunk))

export type AppDispatch = typeof index.dispatch

// @ts-ignore
window.store = index

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}
