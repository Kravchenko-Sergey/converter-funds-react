import React from 'react'
import { FundsList } from './components/FundsList/FundsList'
import styled, { createGlobalStyle } from 'styled-components'
import { Header } from './components/Header/Header'
import { useSelector } from 'react-redux'
import { AppRootStateType } from './state/store'
import { FundFromFundsListType } from './index'

export function App() {
	const fundsList = useSelector<AppRootStateType, FundFromFundsListType[]>(state => state.fundsList)
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

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
},
*::before,
*::after {
}

body {
  min-height: 100vh;
  font-family: Roboto, sans-serif;
}
`

const Wrapper = styled.div`
	margin: 0 auto;
`
