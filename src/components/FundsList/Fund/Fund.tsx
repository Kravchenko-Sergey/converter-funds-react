import React, { useState } from 'react'
import classes from './Fund.module.css'

type FundPropsType = {
	name: string
	issuer: string
	price: number
	quantity: number
	image: string
}

function Fund(props: FundPropsType) {
	const [totalPriceFund, setTotalPriceFund] = useState(props.price)
	const [quantityFund, setQuantityFund] = useState(props.quantity)
	const handleIncreaseQuantityFunds = () => {
		setTotalPriceFund(totalPriceFund + props.price)
		setQuantityFund(quantityFund + 1)
	}
	const handleDecreaseQuantityFunds = () => {
		setTotalPriceFund(totalPriceFund !== 0 ? totalPriceFund - props.price : 0)
		setQuantityFund(quantityFund !== 0 ? quantityFund - 1 : 0)
	}
	return (
		<>
			<div className={classes.container}>
				<img
					className={classes.logo}
					src='https://static.wixstatic.com/media/1d5c4e_0c4f052cb0d64af29141fb78fd0d71ec~mv2.png/v1/fit/w_2500,h_1330,al_c/1d5c4e_0c4f052cb0d64af29141fb78fd0d71ec~mv2.png'
				/>

				<div className={classes.item}>{props.name}</div>
				<div className={classes.item}>{props.issuer}</div>
				<div className={classes.item}>{props.price}</div>
				<div className={classes.item}>{quantityFund}</div>
				<div className={classes.item}>{totalPriceFund.toFixed(2)}</div>
				<button
					className={classes.button}
					onClick={handleIncreaseQuantityFunds}
				>
					+
				</button>
				<button
					className={classes.button}
					onClick={handleDecreaseQuantityFunds}
				>
					-
				</button>
			</div>
		</>
	)
}

export default Fund
