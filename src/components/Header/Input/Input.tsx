import React, { ChangeEvent, KeyboardEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchIcon from '../../../assets/images/search-magnifying-glass-svgrepo-com.svg'
import { selectError, selectFundsList, selectInputValue } from '../../../store/selectors'
import { addFundAC, incrementFundAC, noEmptyErrorAC, noFundErrorAC, resetErrorAC } from '../../../store/actions'
import { Button, Input2, InputBlock, Error } from './StyledInput'
import { onChangeInputValueAC, resetInputValueAC } from '../../../store/actions'
import { database } from '../../../index'

type InputPropsType = { totalValue: number }

export const Input = ({ totalValue }: InputPropsType) => {
	const fundsList = useSelector(selectFundsList)
	const inputValue = useSelector(selectInputValue)
	const error = useSelector(selectError)
	const dispatch = useDispatch()
	const isFundInDB = database.find(fund => fund.name === inputValue)
	const isFundInFundList = fundsList.find(fund => fund.name === inputValue)

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(onChangeInputValueAC(e.currentTarget.value))
		dispatch(resetErrorAC())
	}

	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') {
			if (isFundInDB) {
				if (!isFundInFundList) {
					dispatch(addFundAC(inputValue.trim(), totalValue))
					dispatch(resetInputValueAC())
				} else {
					dispatch(incrementFundAC(inputValue.trim(), totalValue))
				}
			} else if (inputValue.trim() === '') {
				dispatch(noEmptyErrorAC())
			} else {
				dispatch(noFundErrorAC())
			}
		}
	}

	const onClickHandler = () => {
		if (isFundInDB) {
			if (!isFundInFundList) {
				dispatch(addFundAC(inputValue.trim(), totalValue))
				dispatch(resetInputValueAC())
			} else {
				dispatch(incrementFundAC(inputValue.trim(), totalValue))
			}
		} else if (inputValue.trim() === '') {
			dispatch(noEmptyErrorAC())
		} else {
			dispatch(noFundErrorAC())
		}
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
