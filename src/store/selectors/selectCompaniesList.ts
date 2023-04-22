import { AppRootStateType } from '../index'
import { CompanyFromFundsListType } from '../../types/CompanyFromFundsListType'
export const selectCompaniesList = (state: AppRootStateType): CompanyFromFundsListType[] => state.companiesList
