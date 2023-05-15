import React, { ChangeEvent, KeyboardEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchIcon from '../../../assets/images/search-magnifying-glass-svgrepo-com.svg'
import { selectError, selectInputValue } from '../../../store/selectors'
import { resetErrorAC } from '../../../store/actions'
import { Button, Input2, InputBlock, Error } from './StyledInput'
import { onChangeInputValueAC } from '../../../store/actions'
import { addFundTC } from '../../../store/reducers/fundsListReducer'

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
		e.code === 'Enter' && dispatch(addFundTC(inputValue, totalValue))
	}

	const onClickHandler = () => dispatch(addFundTC(inputValue, totalValue))

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
