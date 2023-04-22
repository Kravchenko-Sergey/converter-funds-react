import React from 'react'
import { useSelector } from 'react-redux'
import { selectCompaniesList } from '../../store/selectors/selectCompaniesList'

export const CompaniesList = () => {
	const companiesList = useSelector(selectCompaniesList)
	return (
		<div>
			{companiesList.map(company => (
				<div key={company.id}>
					<div>{company.name}</div>
				</div>
			))}
		</div>
	)
}
