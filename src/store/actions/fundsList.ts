import { v1 } from 'uuid'

export const ADD_FUND = 'ADD-FUND'
export const INCREMENT_FUND = 'INCREMENT-FUND'
export const DECREMENT_FUND = 'DECREMENT-FUND'
export const DELETE_FUND = 'DELETE-FUND'
export const SET_FUNDSLIST = 'SET-FUNDSLIST'

export type FundsListActionsType =
	| AddFundACType
	| IncrementFundACType
	| DecrementFundACType
	| DeleteFundHandlerACType
	| SetFundsListACType

type SetFundsListACType = ReturnType<typeof setFundsListAC>
export const setFundsListAC = (fundsList: any) => {
	return {
		type: SET_FUNDSLIST,
		payload: { fundsList }
	} as const
}

type AddFundACType = ReturnType<typeof addFundAC>
export const addFundAC = (fund: any, name: string, totalValue: number) => {
	return {
		type: ADD_FUND,
		payload: { fund, name, totalValue }
	} as const
}

type IncrementFundACType = ReturnType<typeof incrementFundAC>
export const incrementFundAC = (name: string, totalValue: number) => {
	return {
		type: INCREMENT_FUND,
		payload: { name, totalValue }
	} as const
}

type DecrementFundACType = ReturnType<typeof decrementFundAC>
export const decrementFundAC = (name: string, totalValue: number) => {
	return {
		type: DECREMENT_FUND,
		payload: { name, totalValue }
	} as const
}

type DeleteFundHandlerACType = ReturnType<typeof deleteFundHandlerAC>
export const deleteFundHandlerAC = (id: string) => {
	return {
		type: DELETE_FUND,
		payload: { id }
	} as const
}
