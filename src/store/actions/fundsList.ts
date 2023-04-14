import { v1 } from 'uuid'

export const ADD_FUND = 'ADD-FUND'
export const INCREMENT_FUND = 'INCREMENT-FUND'
export const DECREMENT_FUND = 'DECREMENT-FUND'
export const DELETE_FUND = 'DELETE-FUND'

export type FundsListActionsType = AddFundACType | IncrementFundACType | DecrementFundACType | DeleteFundHandlerACType

type AddFundACType = ReturnType<typeof addFundAC>
export const addFundAC = (name: string, totalValue: number) => {
	return {
		type: ADD_FUND,
		payload: { id: v1(), name, totalValue }
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
