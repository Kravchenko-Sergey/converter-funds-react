import React from 'react'
import styled from 'styled-components'
import { Input } from './Input/Input'

type HeaderPropsType = {
	totalValue: number
}

export const Header = ({ totalValue }: HeaderPropsType) => {
	return (
		<Wrapper>
			<Container>
				<h1>ConverterFunds</h1>
				<Input totalValue={totalValue} />
				<List>
					<Login>login</Login>
					<Logout>logout</Logout>
				</List>
			</Container>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: white;
`

const Container = styled.div`
	width: 80%;
	height: 70px;
	margin: 0 auto auto;
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	column-gap: 10px;
	align-items: center;
`

const List = styled.ul`
	list-style: none;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`

const Login = styled.li`
	grid-column: 4 / 5;
`

const Logout = styled.li`
	grid-column: 5 / 6;
`
