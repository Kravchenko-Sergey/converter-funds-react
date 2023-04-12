import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../state/store'
import { FundFromFundsListType } from '../../index'
import { CompaniesList } from '../CompaniesList'
import { addFundAC, decrementFundAC, deleteFundHandlerAC, incrementFundAC } from '../../reducers/fundsListReducer'
import styled from 'styled-components'
import { inputErrorsAC } from '../../reducers/errorReducer'
import { Fund } from './Fund/Fund'

type FundsListPropsType = {
	totalValue: number
}

export const FundsList = ({ totalValue }: FundsListPropsType) => {
	const fundsList = useSelector<AppRootStateType, FundFromFundsListType[]>(state => state.fundsList)

	const dispatch = useDispatch()

	const addFund = (name: string, totalValue: number) => {
		dispatch(addFundAC(name, totalValue))
		dispatch(inputErrorsAC(name))
	}

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

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	grid-template-rows: 1fr 1fr 10fr;
	gap: 10px;
`

const Total = styled.div`
	display: grid;
	justify-content: center;
	align-items: center;
	grid-row: 2 / 3;
	grid-column: 2 / 3;
`

const FundsListTable = styled.table`
	grid-row: 3 / 4;
	grid-column: 2 / 3;
	border: 2px solid gray;
	padding: 10px;
	border-radius: 5px;
`

const Titles = styled.tr`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`

const Title = styled.td`
	margin: 0 0 10px 0;
	font-weight: 700;
`

const Funds = styled.tbody`
	display: grid;
	row-gap: 5px;
`
