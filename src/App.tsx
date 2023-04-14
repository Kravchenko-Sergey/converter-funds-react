import React from 'react'
import { FundsList } from './components/FundsList/FundsList'
import { Header } from './components/Header/Header'
import { useSelector } from 'react-redux'
import { selectFundsList } from './store/selectors'
import { GlobalStyle, Wrapper } from './StyledGlobal'

export function App() {
	const fundsList = useSelector(selectFundsList)

	const totalValue = Number(
		fundsList
			.reduce((acc, fund) => {
				return acc + fund.totalPrice
			}, 0)
			.toFixed(2)
	)

	return (
		<Wrapper>
			<GlobalStyle />
			<Header totalValue={totalValue} />
			<FundsList totalValue={totalValue} />
		</Wrapper>
	)
}
