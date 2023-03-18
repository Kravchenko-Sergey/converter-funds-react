import React from 'react'
import { DatabaseType, FundsListType } from '../index'

type FundsListPropsType = {
	database: DatabaseType
	fundsList: FundsListType
}

export const FundsList = ({ database, fundsList }: FundsListPropsType) => {
	return (
		<div>
			{fundsList.map(fund => (
				<div key={fund.id}>
					<div>{fund.name}</div>
				</div>
			))}
		</div>
	)
}
