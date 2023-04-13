import { CompanyFromFundsListType } from './CompanyFromFundsListType'

export type FundFromFundsListType = {
	id: string
	name: string
	issuer: string
	price: number
	quantity: number
	totalPrice: number
	companies: CompanyFromFundsListType[]
}
