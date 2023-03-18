import { createStore, combineReducers } from 'redux'
import { fundsListReducer } from '../reducers/fundsListReducer'
import { companiesListReducer } from '../reducers/companiesListReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
	fundsListReducer,
	companiesListReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
