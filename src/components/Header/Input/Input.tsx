import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../../state/store'
import { addFundAC } from '../../../reducers/fundsListReducer'
import searchIcon from '../../../assets/images/search-magnifying-glass-svgrepo-com.svg'

type InputPropsType = {
	totalValue: number
}

export const Input = ({ totalValue }: InputPropsType) => {
	const [value, setValue] = useState('')
	const error = useSelector<AppRootStateType, string>(state => state.error)
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
					}
				}}
			/>
			<Button onClick={() => dispatch(addFundAC(value, totalValue))}>
				<img src={searchIcon} alt='searchIcon' />
			</Button>
			<Error>{error}</Error>
		</InputBlock>
	)
}

const InputBlock = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr 0.1fr;
	grid-template-rows: 1fr 0;
`
const Input2 = styled.input`
	padding: 10px 0 10px 10px;
	font-size: 16px;
	border: 2px solid cornflowerblue;
	border-radius: 5px 0 0 5px;
	&:focus {
		border: 2px solid cornflowerblue;
		outline: none;
	}
`

const Error = styled.div`
	padding: 0 0 0 10px;
	font-size: 14px;
	color: crimson;
`

export const Button = styled.button`
	color: white;
	background-color: cornflowerblue;
	border-style: none;
	border-radius: 0 5px 5px 0;
	&:hover {
		background-color: #3875ea;
		transition: 0.5s;
	}
	& img {
		width: 26px;
		height: 26px;
	}
`
