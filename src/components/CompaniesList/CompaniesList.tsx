import React from 'react'
import Company from './Company/Company'
import classes from './CompaniesList.module.css'
import { CompaniesType } from '../../App'

type CompaniesListPropsType = {
	companies: Array<CompaniesType>
}

function CompaniesList(props: CompaniesListPropsType) {
	const companyElements = props.companies.map(company => (
		<Company
			key={company.id}
			name={company.name}
			shareInFund={company.shareInFund}
			country={company.country}
			sector={company.sector}
		/>
	))

	return (
		<>
			<div className={classes.container}>
				<div className={classes.title}>Крупнейшие компании</div>
				<div>{companyElements}</div>
			</div>
		</>
	)
}

export default CompaniesList
