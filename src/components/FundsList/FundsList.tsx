import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CompaniesList } from '../../CompaniesList/CompaniesList'
import { Fund } from './Fund/Fund'
import { selectFundsList } from '../../store/selectors'
import { decrementFundAC, deleteFundHandlerAC, incrementFundAC } from '../../store/actions'
import { Funds, FundsListTable, Titles, Total, Container, Title } from './StyledFundList'

type FundsListPropsType = { totalValue: number }

export const FundsList = ({ totalValue }: FundsListPropsType) => {
	const fundsList = useSelector(selectFundsList)
	const dispatch = useDispatch()

	const fundsElements = fundsList.map(fund => {
		const incrementFundHandler = () => {
			dispatch(incrementFundAC(fund.name))
		}
		const decrementFundHandler = () => {
			dispatch(decrementFundAC(fund.name))
			fund.quantity === 1 && dispatch(deleteFundHandlerAC(fund.name))
		}
		const deleteFundHandler = () => {
			dispatch(deleteFundHandlerAC(fund.name))
		}
		return (
			<Fund
				key={fund.id}
				id={fund.id}
				name={fund.name}
				issuer={fund.issuer}
				price={fund.price}
				quantity={fund.quantity}
				totalPrice={fund.totalPrice}
				incrementFundHandler={incrementFundHandler}
				decrementFundHandler={decrementFundHandler}
				deleteFundHandler={deleteFundHandler}
			/>
		)
	})

	return (
		<Container>
			<Total>Total value: {totalValue}</Total>
			<FundsListTable>
				<thead>
					<Titles>
						<Title>Name</Title>
						<Title>Issuer</Title>
						<Title>Price</Title>
						<Title>Quantity</Title>
						<Title>TotalPrice</Title>
						<Title></Title>
					</Titles>
				</thead>
				<Funds>{fundsElements}</Funds>
			</FundsListTable>
			<CompaniesList />
		</Container>
	)
}
