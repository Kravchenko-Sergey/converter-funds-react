import React from 'react'
import { DeleteButton, Properties, Property, PropertyButtons } from './StyledFund'
import { Button } from '../../Header/Input/StyledInput'

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
