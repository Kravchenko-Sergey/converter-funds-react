import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchIcon from '../../../assets/images/search-magnifying-glass-svgrepo-com.svg'
import { selectError, selectInputValue } from '../../../state/selectors'
import { addFundAC, inputErrorsAC } from '../../../state/actions'
import { Button, Input2, InputBlock, Error } from './StyledInput'
import { onChangeInputValueAC, resetInputValueAC } from '../../../state/actions'

type InputPropsType = { totalValue: number }

export const Input = ({ totalValue }: InputPropsType) => {
	const inputValue = useSelector(selectInputValue)
	const error = useSelector(selectError)
	const dispatch = useDispatch()

	const onChangeHandler = (e: any) => {
		dispatch(onChangeInputValueAC(e.currentTarget.value))
	}

	const onKeyPressHandler = (e: any) => {
		if (e.charCode === 13) {
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
		<InputBlock>
			<Input2 value={inputValue} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} />
			<Button onClick={onClickHandler}>
				<img src={searchIcon} alt='searchIcon' />
			</Button>
			<Error>{error}</Error>
		</InputBlock>
	)
}
