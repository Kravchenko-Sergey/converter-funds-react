import React from 'react'
import styled from 'styled-components'

export const Header = () => {
	return (
		<Wrapper>
			<Container>
				<h1>ConverterFunds</h1>
				<List>
					<li>login</li>
					<li>logout</li>
				</List>
			</Container>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: cornflowerblue;
`

const Container = styled.div`
	width: 80%;
	height: 70px;
	margin: 0 auto 30px auto;
	display: grid;
	grid-template-columns: 1.4fr 0.1fr;
	align-items: center;
`

const List = styled.ul`
	color: white;
	list-style: none;
	display: grid;
	grid-template-columns: 1fr 1fr;
`
