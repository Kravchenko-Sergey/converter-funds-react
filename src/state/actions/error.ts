export const INPUT_ERRORS = 'INPUT-ERRORS'

export type ErrorActionsType = InputErrorsACType

type InputErrorsACType = ReturnType<typeof inputErrorsAC>
export const inputErrorsAC = (name: string) => {
	return {
		type: INPUT_ERRORS,
		payload: { name }
	} as const
}
