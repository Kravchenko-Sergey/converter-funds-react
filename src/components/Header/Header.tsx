import React from 'react'
import { Input } from './Input/Input'
import { Container, Wrapper, List, Login, Logout } from './StyledHeader'

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
