import { FundsListType } from '../index'
import { v1 } from 'uuid'

const defaultState: any = []

const ADD_FUND = 'ADD-FUND'

export const companiesListReducer = (
	state: any = defaultState,
	action: any
): any => {
	switch (action.type) {
		case ADD_FUND: {
			const newFund = {
				id: v1(),
				name: 'VOO',
				issuer: 'Vanguard',
				price: 359.85
			}
			return [newFund, ...state]
		}
		default:
			return state
	}
}

type AddFundACType = ReturnType<typeof addFundAC>
export const addFundAC = () => {
	return {
		type: ADD_FUND
	} as const
}
