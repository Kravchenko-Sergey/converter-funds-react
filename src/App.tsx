import React from 'react'
import './App.css'
import FundsList from './components/FundsList/FundsList'
import CompaniesList from './components/CompaniesList/CompaniesList'
import Header from './components/Header/Header'

type AppPropsType = {
	database: Array<object>
	funds: Array<object>
	companies: Array<object>
}

function App(props: AppPropsType) {
	return (
		<>
			<div className='wrapper'>
				<Header funds={props.funds} database={props.database} />
				<FundsList funds={props.funds} database={props.database} />
				<CompaniesList companies={props.companies} />
			</div>
		</>
	)
}

export default App
