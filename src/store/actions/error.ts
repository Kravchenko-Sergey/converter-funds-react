export const NO_FUND_ERROR = 'NO-FUND-ERROR'
export const NO_EMPTY_ERROR = 'NO-EMPTY-ERROR'
export const RESET_ERROR = 'RESET-ERROR'

export type ErrorActionsType = ResetErrorACType | NoFundErrorACType | NoEmptyErrorACType

type NoFundErrorACType = ReturnType<typeof noFundErrorAC>
export const noFundErrorAC = () => {
	return {
		type: NO_FUND_ERROR
	} as const
}

type NoEmptyErrorACType = ReturnType<typeof noEmptyErrorAC>
export const noEmptyErrorAC = () => {
	return {
		type: NO_EMPTY_ERROR
	} as const
}

type ResetErrorACType = ReturnType<typeof resetErrorAC>
export const resetErrorAC = () => {
	return {
		type: RESET_ERROR
	} as const
}
