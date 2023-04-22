import { database } from '../../index'
import { DECREMENT_FUND, DELETE_FUND, INCREMENT_FUND } from '../actions'

const defaultState: any = []

const ADD_FUND = 'ADD-FUND'

export const companiesListReducer = (state: any = defaultState, action: any): any => {
	switch (action.type) {
		case ADD_FUND: {
			const isFundInDB = database.find(fund => fund.name === action.payload.name)
			return isFundInDB?.companies.map(company => ({
				...company,
				sumInFund: (isFundInDB.price / 100) * company.shareInFund,
				shareInPortfolio: ((isFundInDB.price / 100) * company.shareInFund) / (isFundInDB.price / 100),
				sumInPortfolio: (isFundInDB.price / 100) * company.shareInFund
			}))
		}
		case INCREMENT_FUND: {
			return state
		}
		case DECREMENT_FUND: {
			return state
		}
		case DELETE_FUND: {
			return state
		}
		default:
			return state
	}
}
