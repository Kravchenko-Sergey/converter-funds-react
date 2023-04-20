import { ErrorActionsType, INPUT_ERRORS } from '../actions'
import { database } from '../../index'

export const errorReducer = (state: string = '', action: ErrorActionsType): string => {
	switch (action.type) {
		case INPUT_ERRORS: {
			const isFundInDB = database.find(fund => fund.name === action.payload.name)
			return action.payload.name.trim() === ''
				? 'value must not be empty'
				: isFundInDB
				? ''
				: 'There is no such fund in the database'
		}
		case 'RESET-ERROR': {
			return ''
		}
		default:
			return state
	}
}
