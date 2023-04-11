const defaultState: any = []

const ADD_FUND = 'ADD-FUND'

export const companiesListReducer = (
	state: any = defaultState,
	action: any
): any => {
	switch (action.type) {
		case ADD_FUND: {
			return state
		}
		default:
			return state
	}
}
