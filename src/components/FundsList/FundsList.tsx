import React from 'react'
import classes from './FundsList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../state/store'
import { FundFromFundsListType } from '../../index'
import { CompaniesList } from '../CompaniesList'
import {
	decrementFundAC,
	incrementFundAC
} from '../../reducers/fundsListReducer'

type FundsListPropsType = {}

export const FundsList = ({}: FundsListPropsType) => {
	const fundsList = useSelector<AppRootStateType, FundFromFundsListType[]>(
		state => state.fundsList
	)

	const dispatch = useDispatch()

	const totalValue = fundsList.reduce((acc, fund) => {
		return acc + fund.totalPrice
	}, 0)

	return (
		<>
			<div>{totalValue.toFixed(2)}</div>
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
					{fundsList.map(fund => {
						const incrementFundHandler = () => {
							dispatch(incrementFundAC(fund.name))
						}
						const decrementFundHandler = () => {
							dispatch(decrementFundAC(fund.name))
						}
						return (
							<tr key={fund.id} className={classes.item}>
								<td className={classes.property}>{fund.name}</td>
								<td className={classes.property}>{fund.price}</td>
								<td className={classes.property}>{fund.quantity}</td>
								<td className={classes.property}>
									{fund.totalPrice.toFixed(2)}
								</td>
								<td>
									<button onClick={incrementFundHandler}>+</button>
								</td>
								<td>
									<button onClick={decrementFundHandler}>-</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
			<CompaniesList />
		</>
	)
}
