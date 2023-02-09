import React from 'react'
import './App.css'
import FundsList from './components/FundsList/FundsList'
import CompaniesList from './components/CompaniesList/CompaniesList'
import Header from './components/Header/Header'

export type DatabaseType = {
	id: string
	name: string
	issuer: string
	quantity: number
	price: number
	totalPrice: number
	composition: Array<CompaniesType>
}

export type FundsType = {
	id: string
	name: string
	issuer: string
	quantity: number
	price: number
	totalPrice: number
	composition: Array<CompaniesType>
}

export type CompaniesType = {
	id: string
	name: string
	shareInFund: number
	country: string
	sector: string
}

type AppPropsType = {
	database: Array<DatabaseType>
	funds: Array<FundsType>
	companies: Array<CompaniesType>
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
