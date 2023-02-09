import React, { useState } from 'react'
import Fund from './Fund/Fund'
import classes from './FundsList.module.css'
import { DatabaseType, FundsType } from '../../App'

type FundsListPropsType = {
	funds: Array<FundsType>
	database: Array<DatabaseType>
}

function FundsList(props: FundsListPropsType) {
	const fundsElements = props.funds.map(fund => (
		<Fund
			key={fund.id}
			name={fund.name}
			issuer={fund.issuer}
			price={fund.price}
			quantity={fund.quantity}
		/>
	))
	return (
		<>
			<div className={classes.container}>
				<div className={classes.title}>Состав портфеля</div>
				{fundsElements}
			</div>
		</>
	)
}

export default FundsList
