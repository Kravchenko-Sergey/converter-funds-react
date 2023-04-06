import React, { useReducer } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './state/store'
import { v1 } from 'uuid'

export type FundFromDatabaseType = {
	id: string
	name: string
	issuer: string
	price: number
	companies: CompanyFromDatabaseFund[]
}
export type CompanyFromDatabaseFund = {
	id: string
	name: string
	price: number
	shareInFund: number
}
export type FundFromFundsListType = {
	id: string
	name: string
	issuer: string
	price: number
	quantity: number
	totalPrice: number
	companies: CompanyFromFundsListType[]
}
export type CompanyFromFundsListType = {
	id: string
	name: string
	price: number
	totalPrice: number
	shareInFund: number
	shareInPortfolio: number
}

export const database = [
	{
		id: v1(),
		name: 'voo',
		issuer: 'Vanguard',
		price: 359.85,
		companies: [
			{
				id: v1(),
				name: 'Apple',
				price: 154.75,
				shareInFund: 6.6
			},
			{
				id: v1(),
				name: 'Microsoft',
				price: 279.31,
				shareInFund: 5.56
			},
			{
				id: v1(),
				name: 'Amazon',
				price: 98.95,
				shareInFund: 2.5
			},
			{
				id: v1(),
				name: 'NVIDIA',
				price: 256.5,
				shareInFund: 1.73
			},
			{
				id: v1(),
				name: 'Tesla',
				price: 179.65,
				shareInFund: 1.65
			}
		]
	},
	{
		id: v1(),
		name: 'spdw',
		issuer: 'BlackRock',
		price: 30.4,
		companies: [
			{
				id: v1(),
				name: 'Nestle',
				price: 70,
				shareInFund: 1.54
			},
			{
				id: v1(),
				name: 'ASML',
				price: 70,
				shareInFund: 1.21
			},
			{
				id: v1(),
				name: 'Samsung',
				price: 70,
				shareInFund: 1.13
			},
			{
				id: v1(),
				name: 'Novo Nordisk',
				price: 70,
				shareInFund: 1.09
			},
			{
				id: v1(),
				name: 'LVMH',
				price: 70,
				shareInFund: 1.07
			}
		]
	},
	{
		id: v1(),
		name: 'iemg',
		issuer: 'IShares',
		price: 46.57,
		companies: [
			{
				id: v1(),
				name: 'TSC',
				price: 89.47,
				shareInFund: 1.07
			},
			{
				id: v1(),
				name: 'Tencent',
				price: 42.93,
				shareInFund: 1.07
			},
			{
				id: v1(),
				name: 'Samsung',
				price: 40.6,
				shareInFund: 1.07
			},
			{
				id: v1(),
				name: 'Alibaba',
				price: 81.7,
				shareInFund: 1.07
			},
			{
				id: v1(),
				name: 'Reliance',
				price: 2223.1,
				shareInFund: 1.07
			}
		]
	}
]

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)
