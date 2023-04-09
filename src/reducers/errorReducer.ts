import { database } from '../index'

const DATABASE_MISSING_ERROR = 'DATABASE-MISSING-ERROR'

export const errorReducer = (
	state: string = '',
	action: DatabaseMissingErrorACType
): string => {
	switch (action.type) {
		case DATABASE_MISSING_ERROR: {
			const isFundInDB = database.find(
				fund => fund.name === action.payload.name
			)
			return isFundInDB ? '' : 'There is no such fund in the database'
		}
		default:
			return state
	}
}

type DatabaseMissingErrorACType = ReturnType<typeof DatabaseMissingErrorAC>
export const DatabaseMissingErrorAC = (name: string) => {
	return {
		type: DATABASE_MISSING_ERROR,
		payload: { name }
	} as const
}
