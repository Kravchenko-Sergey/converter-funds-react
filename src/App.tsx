import React, { useState } from 'react'
import './App.css'
import { FundsList } from './components/FundsList'
import { CompaniesList } from './components/CompaniesList'
import { store2 } from './index'
import { addFundAC } from './reducers/fundsListReducer'
import { useDispatch, useSelector } from 'react-redux'

function App() {
	const [value, setValue] = useState('')
	const fundsListDispatch = useDispatch()
	const fundsList = useSelector((state: any) => state.fundsListReducer)

	const addTask = (name: string) => {
		fundsListDispatch(addFundAC(name))
		console.log(name)
	}

	return (
		<div className='wrapper'>
			<div>
				<input
					type='text'
					value={value}
					onChange={e => {
						setValue(e.currentTarget.value)
					}}
				/>
				<button onClick={() => addTask(value)}>+</button>
			</div>
			<FundsList database={store2.database} fundsList={fundsList} />
			<CompaniesList companiesList={store2.companiesList} />
		</div>
	)
}

export default App
