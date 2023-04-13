import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchIcon from '../../../assets/images/search-magnifying-glass-svgrepo-com.svg'
import { selectError, selectInputValue } from '../../../state/selectors'
import { addFundAC, inputErrorsAC } from '../../../state/actions'
import { Button, Input2, InputBlock, Error } from './StyledInput'
import { onChangeInputValueAC, resetInputValueAC } from '../../../state/actions'

type InputPropsType = {
	totalValue: number
}

export const Input = ({ totalValue }: InputPropsType) => {
	const inputValue = useSelector(selectInputValue)
	const error = useSelector(selectError)
	const dispatch = useDispatch()
	return (
		<InputBlock>
			<Input2
				type='text'
				value={inputValue}
				onChange={e => {
					dispatch(onChangeInputValueAC(e.currentTarget.value))
				}}
				onKeyPress={(e: any) => {
					if (e.charCode === 13) {
						dispatch(addFundAC(inputValue, totalValue))
						dispatch(inputErrorsAC(inputValue))
						dispatch(resetInputValueAC())
					}
				}}
			/>
			<Button
				onClick={() => {
					dispatch(addFundAC(inputValue, totalValue))
					dispatch(inputErrorsAC(inputValue))
					dispatch(resetInputValueAC())
				}}
			>
				<img src={searchIcon} alt='searchIcon' />
			</Button>
			<Error>{error}</Error>
		</InputBlock>
	)
}
