import React from 'react'
import './App.css'
import FundsList from './components/FundsList/FundsList'
import CompaniesList from './components/CompaniesList/CompaniesList'
import Header from './components/Header/Header'

function App(props: any) {
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
