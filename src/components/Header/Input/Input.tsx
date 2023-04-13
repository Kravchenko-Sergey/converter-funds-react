import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchIcon from '../../../assets/images/search-magnifying-glass-svgrepo-com.svg'
import { selectError } from '../../../state/selectors'
import { addFundAC, inputErrorsAC } from '../../../state/actions'
import { Button, Input2, InputBlock, Error } from './StyledInput'

type InputPropsType = {
	totalValue: number
}

export const Input = ({ totalValue }: InputPropsType) => {
	const [value, setValue] = useState('')
	const error = useSelector(selectError)
	const dispatch = useDispatch()
	return (
		<InputBlock>
			<Input2
				type='text'
				value={value}
				onChange={e => {
					setValue(e.currentTarget.value)
				}}
				onKeyPress={(e: any) => {
					if (e.charCode === 13) {
						dispatch(addFundAC(value, totalValue))
						dispatch(inputErrorsAC(value))
					}
				}}
			/>
			<Button
				onClick={() => {
					dispatch(addFundAC(value, totalValue))
					dispatch(inputErrorsAC(value))
				}}
			>
				<img src={searchIcon} alt='searchIcon' />
			</Button>
			<Error>{error}</Error>
		</InputBlock>
	)
}
