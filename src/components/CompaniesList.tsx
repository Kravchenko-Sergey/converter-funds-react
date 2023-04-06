import React from 'react'
import { CompanyFromFundsListType } from '../index'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../state/store'

type CompaniesListPropsType = {}

export const CompaniesList = ({}: CompaniesListPropsType) => {
	const companiesList = useSelector<
		AppRootStateType,
		CompanyFromFundsListType[]
	>(state => state.companiesList)

	const fundsListDispatch = useDispatch()

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
