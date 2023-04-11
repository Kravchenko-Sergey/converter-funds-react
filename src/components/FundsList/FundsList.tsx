import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../state/store'
import { FundFromFundsListType } from '../../index'
import { CompaniesList } from '../CompaniesList'
import {
	addFundAC,
	decrementFundAC,
	deleteFundHandlerAC,
	incrementFundAC
} from '../../reducers/fundsListReducer'
import styled from 'styled-components'
import { inputErrorsAC } from '../../reducers/errorReducer'
import { Button } from '../Header/Input/Input'

type FundsListPropsType = {
	totalValue: number
}

export const FundsList = ({ totalValue }: FundsListPropsType) => {
	const fundsList = useSelector<AppRootStateType, FundFromFundsListType[]>(
		state => state.fundsList
	)

	const dispatch = useDispatch()

	const addFund = (name: string, totalValue: number) => {
		dispatch(addFundAC(name, totalValue))
		dispatch(inputErrorsAC(name))
	}

	return (
		<Container>
			<Total>Total value: {totalValue.toFixed(2)}</Total>
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
				<Funds>
					{fundsList.map(fund => {
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
							<Properties key={fund.id}>
								<Property>{fund.name}</Property>
								<Property>{fund.issuer}</Property>
								<Property>{fund.price}</Property>
								<Property>{fund.quantity}</Property>
								<Property>{fund.totalPrice.toFixed(2)}</Property>
								<PropertyButtons>
									<Button onClick={incrementFundHandler}>+</Button>
									<Button onClick={decrementFundHandler}>-</Button>
									<DeleteButton onClick={deleteFundHandler}>
										delete
									</DeleteButton>
								</PropertyButtons>
							</Properties>
						)
					})}
				</Funds>
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

const PropertyButtons = styled.td`
	display: grid;
	grid-template-columns: 0.4fr 0.4fr 1.2fr;
	column-gap: 5px;
`

const DeleteButton = styled(Button)`
	padding: 4px 8px;
	background-color: crimson;
	border-radius: 5px;
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

const Properties = styled.tr`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`

const Property = styled.td``
