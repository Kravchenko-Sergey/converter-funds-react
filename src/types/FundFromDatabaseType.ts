import { CompanyFromDatabaseFund } from './CompanyFromDatabaseFundType '

export type FundFromDatabaseType = {
	id: string
	name: string
	issuer: string
	price: number
	companies: CompanyFromDatabaseFund[]
}
