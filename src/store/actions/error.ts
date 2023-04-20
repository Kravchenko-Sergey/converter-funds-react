export const INPUT_ERRORS = 'INPUT-ERRORS'
const RESET_ERROR = 'RESET-ERROR'

export type ErrorActionsType = InputErrorsACType | ResetErrorACType

type InputErrorsACType = ReturnType<typeof inputErrorsAC>
export const inputErrorsAC = (name: string) => {
	return {
		type: INPUT_ERRORS,
		payload: { name }
	} as const
}
type ResetErrorACType = ReturnType<typeof resetErrorAC>
export const resetErrorAC = () => {
	return {
		type: RESET_ERROR
	} as const
}
