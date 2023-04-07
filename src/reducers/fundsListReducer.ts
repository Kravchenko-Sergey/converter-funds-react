import { database, FundFromFundsListType } from '../index'
import { v1 } from 'uuid'

const initialState: FundFromFundsListType[] = []

const ADD_FUND = 'ADD-FUND'
const INCREMENT_FUND = 'INCREMENT-FUND'
const DECREMENT_FUND = 'DECREMENT-FUND'
const DELETE_FUND = 'DELETE-FUND'

export const fundsListReducer = (
	state: FundFromFundsListType[] = initialState,
	action: ActionsType
): any => {
	switch (action.type) {
		case ADD_FUND: {
			const isFundInDB = database.find(
				fund => fund.name === action.payload.name
			)
			const isFundInFundList = state.find(
				fund => fund.name === action.payload.name
			)
			return isFundInDB
				? !isFundInFundList
					? [
							{
								id: action.payload.id,
								name: isFundInDB.name,
								issuer: isFundInDB.issuer,
								quantity: 1,
								price: isFundInDB.price,
								totalPrice: isFundInDB.price,
								companies: isFundInDB.companies
							},
							...state
					  ]
					: state.map(fund =>
							fund.id === isFundInFundList.id
								? {
										...fund,
										quantity: fund.quantity + 1,
										totalPrice: fund.price * (fund.quantity + 1),
										companies: fund.companies.map(company =>
											company ? { ...company } : company
										)
								  }
								: fund
					  )
				: state
		}
		case INCREMENT_FUND: {
			return state.map(fund =>
				fund.name === action.payload.name
					? {
							...fund,
							quantity: fund.quantity + 1,
							totalPrice: fund.price * (fund.quantity + 1)
					  }
					: fund
			)
		}
		case DECREMENT_FUND: {
			return state.map(fund =>
				fund.name === action.payload.name
					? {
							...fund,
							quantity: fund.quantity - 1,
							totalPrice: fund.price * (fund.quantity - 1)
					  }
					: fund
			)
		}
		case DELETE_FUND: {
			return state.filter(fund => fund.name !== action.payload.name)
		}
		default:
			return state
	}
}

type ActionsType =
	| AddFundACType
	| IncrementFundACType
	| DecrementFundACType
	| DeleteFundHandlerACType

type AddFundACType = ReturnType<typeof addFundAC>
export const addFundAC = (name: string) => {
	return {
		type: ADD_FUND,
		payload: { id: v1(), name }
	} as const
}

type IncrementFundACType = ReturnType<typeof incrementFundAC>
export const incrementFundAC = (name: string) => {
	return {
		type: INCREMENT_FUND,
		payload: { name }
	} as const
}

type DecrementFundACType = ReturnType<typeof decrementFundAC>
export const decrementFundAC = (name: string) => {
	return {
		type: DECREMENT_FUND,
		payload: { name }
	} as const
}

type DeleteFundHandlerACType = ReturnType<typeof deleteFundHandlerAC>
export const deleteFundHandlerAC = (name: string) => {
	return {
		type: DELETE_FUND,
		payload: { name }
	} as const
}
