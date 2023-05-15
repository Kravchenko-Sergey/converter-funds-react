export const ADD_COMPANIES = 'ADD-COMPANIES'

export type CompaniesListActionsType = AddCompaniesActionType
type AddCompaniesActionType = ReturnType<typeof addCompaniesAC>
export const addCompaniesAC = () => {
	return {
		type: ADD_COMPANIES
	} as const
}
