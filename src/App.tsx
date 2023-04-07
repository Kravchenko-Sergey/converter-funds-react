import React, { useState } from 'react'
import './App.css'
import { CompaniesList } from './components/CompaniesList'
import { FundsList } from './components/FundsList/FundsList'
import { addFundAC } from './reducers/fundsListReducer'
import { useDispatch } from 'react-redux'

function App() {
	const [value, setValue] = useState('')

	const dispatch = useDispatch()

	const addFund = (name: string) => {
		dispatch(addFundAC(name))
	}

	return (
		<div className='wrapper'>
			<div className='container'>
				<input
					className='input'
					type='text'
					value={value}
					onChange={e => {
						setValue(e.currentTarget.value)
					}}
					onKeyPress={(e: any) => {
						if (e.charCode === 13) {
							addFund(value)
						}
					}}
				/>
				<button className='button' onClick={() => addFund(value)}>
					+
				</button>
			</div>
			<FundsList />
			{/*<CompaniesList />*/}
		</div>
	)
}

export default App
