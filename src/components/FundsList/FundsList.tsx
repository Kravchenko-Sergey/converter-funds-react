import React from 'react'
import classes from './FundsList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../state/store'
import { FundFromFundsListType } from '../../index'
import { addFundAC } from '../../reducers/fundsListReducer'

type FundsListPropsType = {}

export const FundsList = ({}: FundsListPropsType) => {
	const fundsList = useSelector<AppRootStateType, FundFromFundsListType[]>(
		state => state.fundsList
	)

	const dispatch = useDispatch()

	return (
		<table className={classes.container}>
			<thead>
				<tr className={classes.item}>
					<th>Name</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>TotalPrice</th>
				</tr>
			</thead>
			<tbody>
				{fundsList.map(fund => (
					<tr key={fund.id} className={classes.item}>
						<td className={classes.property}>{fund.name}</td>
						<td className={classes.property}>{fund.price}</td>
						<td className={classes.property}>{fund.quantity}</td>
						<td className={classes.property}>{fund.totalPrice}</td>
						<td>
							<button>+</button>
						</td>
						<td>
							<button>-</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
