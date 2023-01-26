import React from 'react'
import classes from './Company.module.css'

type CompanyPropsType = {
	name: string
	shareInFund: number
	country: string
	sector: string
}

function Company(props: CompanyPropsType) {
	return (
		<>
			<div className={classes.container}>
				<img
					className={classes.logo}
					src='https://static.wixstatic.com/media/1d5c4e_0c4f052cb0d64af29141fb78fd0d71ec~mv2.png/v1/fit/w_2500,h_1330,al_c/1d5c4e_0c4f052cb0d64af29141fb78fd0d71ec~mv2.png'
				/>
				<div className={classes.item}>{props.name}</div>
				<div className={classes.item}>{props.country}</div>
				<div className={classes.item}>{props.sector}</div>
				<div className={classes.item}>{props.shareInFund}</div>
				<div className={classes.item}>12423</div>
			</div>
		</>
	)
}

export default Company
