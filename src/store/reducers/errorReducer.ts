import { ErrorActionsType, NO_EMPTY_ERROR, NO_FUND_ERROR } from '../actions'

export const errorReducer = (state: string = '', action: ErrorActionsType): string => {
	switch (action.type) {
		case NO_FUND_ERROR: {
			return 'There is no such fund in the database'
		}
		case NO_EMPTY_ERROR: {
			return 'value must not be empty'
		}
		case 'RESET-ERROR': {
			return ''
		}
		default:
			return state
	}
}
