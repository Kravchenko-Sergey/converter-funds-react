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

type FundsListPropsType = {}

export const FundsList = ({}: FundsListPropsType) => {
	const fundsList = useSelector<AppRootStateType, FundFromFundsListType[]>(
		state => state.fundsList
	)

	const dispatch = useDispatch()

	const [value, setValue] = useState('')
	const addFund = (name: string, totalValue: number) => {
		dispatch(addFundAC(name, totalValue))
	}

	const totalValue = fundsList.reduce((acc, fund) => {
		return acc + fund.totalPrice
	}, 0)

	return (
		<Container>
			<InputBlock>
				<Input
					className='input'
					type='text'
					value={value}
					onChange={e => {
						setValue(e.currentTarget.value)
					}}
					onKeyPress={(e: any) => {
						if (e.charCode === 13) {
							addFund(value, totalValue)
						}
					}}
				/>
				<Button className='button' onClick={() => addFund(value, totalValue)}>
					+
				</Button>
			</InputBlock>
			<Total>Total value: {totalValue.toFixed(2)}</Total>
			<FundsListTable>
				<thead>
					<Titles>
						<Title>Name</Title>
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
						}
						const deleteFundHandler = () => {
							dispatch(deleteFundHandlerAC(fund.name))
						}
						return (
							<Properties key={fund.id}>
								<Property>{fund.name}</Property>
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

const InputBlock = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr 0.1fr;
	column-gap: 10px;
	grid-row: 1 / 2;
	grid-column: 2 / 3;
`
const Input = styled.input`
	padding: 10px 0 10px 10px;
	font-size: 16px;
	border: 2px solid grey;
	border-radius: 5px;
`

const PropertyButtons = styled.td`
	display: grid;
	grid-template-columns: 0.4fr 0.4fr 1.2fr;
	column-gap: 5px;
`

const Button = styled.button`
	color: white;
	background-color: cornflowerblue;
	border-style: none;
	border-radius: 5px;
`

const DeleteButton = styled(Button)`
	padding: 4px 8px;
	background-color: darkred;
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
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`

const Property = styled.td``

////////APP//////////////

/*

.input {
	padding: 0 0 0 5px;
	border: 2px solid lightgrey;
	border-radius: 5px;
	flex: 1 1 90%;
}

.button {
	margin: 0 0 0 10px;
	padding: 10px 0;
	flex: 1 1 10%;
	border-style: none;
	border-radius: 5px;
	background-color: lightblue;
}*/

//////////FUNDLIST/////////////

/*
.container {
  margin: 20px auto;
  min-height: 155px;
  width: 500px;
  border: 2px solid lightgrey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.item {
  padding: 5px;
  display: flex;
}

.property {
  flex: 1 1 50%;
}

thead {
  width: 500px;
}

th {
  width: 107px;
  text-align: start;
}*/
