import React from 'react'
import { FundsList } from './components/FundsList/FundsList'
import styled, { createGlobalStyle } from 'styled-components'
import { Header } from './components/Header/Header'

export function App() {
	return (
		<Wrapper>
			<GlobalStyle />
			<Header />
			<FundsList />
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
