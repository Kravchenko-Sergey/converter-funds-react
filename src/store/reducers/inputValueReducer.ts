import { InputValueActionsType, ON_CHANGE_INPUT_VALUE, RESET_INPUT_VALUE } from '../actions'

export const inputValueReducer = (state: string = '', action: InputValueActionsType) => {
	switch (action.type) {
		case ON_CHANGE_INPUT_VALUE: {
			return action.payload.currentTargetValue
		}
		case RESET_INPUT_VALUE: {
			return ''
		}
		default:
			return state
	}
}
