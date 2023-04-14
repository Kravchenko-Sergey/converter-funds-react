import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchIcon from '../../../assets/images/search-magnifying-glass-svgrepo-com.svg'
import { selectError, selectInputValue } from '../../../store/selectors'
import { addFundAC, inputErrorsAC, resetErrorAC } from '../../../store/actions'
import { Button, Input2, InputBlock, Error, List } from './StyledInput'
import { onChangeInputValueAC, resetInputValueAC } from '../../../store/actions'
import { database } from '../../../index'

type InputPropsType = { totalValue: number }

export const Input = ({ totalValue }: InputPropsType) => {
	const inputValue = useSelector(selectInputValue)
	const error = useSelector(selectError)
	const dispatch = useDispatch()

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(onChangeInputValueAC(e.currentTarget.value))
		dispatch(resetErrorAC())
	}

	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') {
			dispatch(addFundAC(inputValue, totalValue))
			dispatch(inputErrorsAC(inputValue))
			dispatch(resetInputValueAC())
		}
	}

	const onClickHandler = () => {
		dispatch(addFundAC(inputValue, totalValue))
		dispatch(inputErrorsAC(inputValue))
		dispatch(resetInputValueAC())
	}

	return (
		<>
			<InputBlock>
				<Input2
					value={inputValue}
					onChange={onChangeHandler}
					onKeyDown={onKeyDownHandler}
					placeholder='search for funds'
				/>
				<Button onClick={onClickHandler}>
					<img src={searchIcon} alt='searchIcon' />
				</Button>
				<Error>{error}</Error>
			</InputBlock>
		</>
	)
}
