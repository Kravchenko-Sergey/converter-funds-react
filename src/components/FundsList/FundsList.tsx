import React, { useState } from 'react'
import Fund from './Fund/Fund'
import classes from './FundsList.module.css'

type FundsListPropsType = {
	funds: Array<any>
	database: Array<any>
}

function FundsList(props: FundsListPropsType) {
	const [value, setValue] = useState('')
	const fundsElements = props.funds.map(fund => (
		<Fund
			key={fund.id}
			name={fund.name}
			issuer={fund.issuer}
			price={fund.price}
			quantity={fund.quantity}
			image={fund.image}
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
