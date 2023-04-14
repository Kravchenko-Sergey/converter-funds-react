import { AppRootStateType } from '../index'
import { FundFromFundsListType } from '../../types/FundFromFundsListType'

export const selectFundsList = (state: AppRootStateType): FundFromFundsListType[] => state.fundsList
