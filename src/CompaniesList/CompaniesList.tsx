import React from 'react'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '../state'
import { CompanyFromFundsListType } from '../types/CompanyFromFundsListType'

type CompaniesListPropsType = {}

export const CompaniesList = ({}: CompaniesListPropsType) => {
	const companiesList = useSelector<AppRootStateType, CompanyFromFundsListType[]>(state => state.companiesList)

	return (
		<div>
			{companiesList.map(company => (
				<div key={company.id}>
					<div>{company.name}</div>
					<div>{company.price}</div>
				</div>
			))}
		</div>
	)
}
