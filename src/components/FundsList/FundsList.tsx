import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Fund } from './Fund/Fund'
import { selectFundsList } from '../../store/selectors'
import { decrementFundAC, deleteFundHandlerAC, incrementFundAC } from '../../store/actions'
import {
	Funds,
	FundsListTable,
	Titles,
	Total,
	Container,
	Title,
	CompaniesListTable,
	Companies,
	Company,
	Property,
	TitlesC
} from './StyledFundList'
import { fetchFundsListTC } from '../../store/reducers/fundsListReducer'

type FundsListPropsType = { totalValue: number }

export const FundsList = ({ totalValue }: FundsListPropsType) => {
	useEffect(() => {
		dispatch(fetchFundsListTC())
	}, [])

	const fundsList = useSelector(selectFundsList)
	const dispatch = useDispatch()

	const fundsElements = fundsList.map(fund => {
		const incrementFundHandler = () => {
			dispatch(incrementFundAC(fund.name, totalValue))
		}
		const decrementFundHandler = () => {
			dispatch(decrementFundAC(fund.name, totalValue))
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
			<CompaniesListTable>
				<thead>
					<TitlesC>
						<Title>Name</Title>
						<Title>Country</Title>
						<Title>Sector</Title>
						<Title>shareInFund</Title>
						<Title>shareInPortfolio</Title>
						<Title>sumInPortfolio</Title>
					</TitlesC>
				</thead>
				<Companies>
					{fundsList.map(fund =>
						fund.companies.map(company => (
							<Company key={company.id}>
								<Property>{company.name}</Property>
								<Property>{company.country}</Property>
								<Property>{company.sector}</Property>
								<Property>{company.shareInFund}</Property>
								<Property>{company.shareInPortfolio.toFixed(2)}</Property>
								<Property>{company.sumInPortfolio.toFixed(2)}</Property>
							</Company>
						))
					)}
				</Companies>
			</CompaniesListTable>
		</Container>
	)
}
