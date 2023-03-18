import { FundsListType, store2 } from '../index'
import { v1 } from 'uuid'

const defaultState: any = []

const ADD_FUND = 'ADD-FUND'

export const fundsListReducer = (
	state: FundsListType = defaultState,
	action: AddFundACType
): any => {
	switch (action.type) {
		case ADD_FUND: {
			const newFund = {
				id: v1(),
				name: action.payload.name
			}
			return store2.database.map(fund =>
				fund.name === action.payload.name ? [newFund, ...state] : state
			)
		}
		default:
			return state
	}
}

type AddFundACType = ReturnType<typeof addFundAC>
export const addFundAC = (name: string) => {
	return {
		type: ADD_FUND,
		payload: { name }
	} as const
}
