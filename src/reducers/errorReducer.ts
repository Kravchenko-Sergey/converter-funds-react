import { database } from '../index'

const INPUT_ERRORS = 'INPUT-ERRORS'

export const errorReducer = (state: string = '', action: ActionsType): string => {
	switch (action.type) {
		case INPUT_ERRORS: {
			const isFundInDB = database.find(fund => fund.name === action.payload.name)
			return action.payload.name.trim() === ''
				? 'value must not be empty'
				: isFundInDB
				? ''
				: 'There is no such fund in the database'
		}
		default:
			return state
	}
}

type ActionsType = InputErrorsACType
type InputErrorsACType = ReturnType<typeof inputErrorsAC>
export const inputErrorsAC = (name: string) => {
	return {
		type: INPUT_ERRORS,
		payload: { name }
	} as const
}
