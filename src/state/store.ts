import { createStore, combineReducers } from 'redux'
import { fundsListReducer } from '../reducers/fundsListReducer'
import { companiesListReducer } from '../reducers/companiesListReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
	fundsList: fundsListReducer,
	companiesList: companiesListReducer
})

export const store = createStore(rootReducer, composeWithDevTools())

// @ts-ignore
window.store = store
