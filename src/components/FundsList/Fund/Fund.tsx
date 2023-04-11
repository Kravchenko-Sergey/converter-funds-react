import React from 'react'
import { Button } from '../../Header/Input/Input'
import styled from 'styled-components'

type FundPropsType = {
	id: string
	name: string
	issuer: string
	price: number
	quantity: number
	totalPrice: number
	incrementFundHandler: () => void
	decrementFundHandler: () => void
	deleteFundHandler: () => void
}

export const Fund = ({
	id,
	name,
	issuer,
	price,
	quantity,
	totalPrice,
	incrementFundHandler,
	decrementFundHandler,
	deleteFundHandler
}: FundPropsType) => {
	return (
		<Properties key={id}>
			<Property>{name}</Property>
			<Property>{issuer}</Property>
			<Property>{price}</Property>
			<Property>{quantity}</Property>
			<Property>{totalPrice.toFixed(2)}</Property>
			<PropertyButtons>
				<Button onClick={incrementFundHandler}>+</Button>
				<Button onClick={decrementFundHandler}>-</Button>
				<DeleteButton onClick={deleteFundHandler}>delete</DeleteButton>
			</PropertyButtons>
		</Properties>
	)
}

const Properties = styled.tr`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`

const Property = styled.td``

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
