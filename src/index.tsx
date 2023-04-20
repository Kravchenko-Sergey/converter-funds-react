import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'
import { index } from './store'
import { v1 } from 'uuid'

export const database = [
	{
		id: v1(),
		name: 'voo',
		issuer: 'Vanguard',
		price: 375.93,
		companies: [
			{
				id: v1(),
				name: 'Apple',
				country: 'USA',
				sector: 'Technology',
				price: 154.75,
				shareInFund: 6.02
			},
			{
				id: v1(),
				name: 'Microsoft',
				country: 'USA',
				sector: 'Technology',
				price: 279.31,
				shareInFund: 5.54
			},
			{
				id: v1(),
				name: 'Alphabet',
				country: 'USA',
				sector: 'Communication Services',
				price: 98.95,
				shareInFund: 3.06
			},
			{
				id: v1(),
				name: 'Amazon',
				country: 'USA',
				sector: 'Consumer Cyclical',
				price: 256.5,
				shareInFund: 2.31
			},
			{
				id: v1(),
				name: 'Berkshire Hathaway',
				country: 'USA',
				sector: 'Financial Services',
				price: 179.65,
				shareInFund: 1.73
			}
		]
	},
	{
		id: v1(),
		name: 'spdw',
		issuer: 'BlackRock',
		price: 32.14,
		companies: [
			{
				id: v1(),
				name: 'Nestle',
				country: 'Switzerland',
				sector: 'Consumer Defensive',
				price: 70,
				shareInFund: 1.53
			},
			{
				id: v1(),
				name: 'ASML',
				country: 'Netherlands',
				sector: 'Technology',
				price: 70,
				shareInFund: 1.19
			},
			{
				id: v1(),
				name: 'Samsung',
				country: 'South Korea',
				sector: 'Technology',
				price: 70,
				shareInFund: 1.17
			},
			{
				id: v1(),
				name: 'Roche',
				country: 'Switzerland',
				sector: 'Healthcare',
				price: 70,
				shareInFund: 1.08
			},
			{
				id: v1(),
				name: 'Novo Nordisk',
				country: 'Denmark',
				sector: 'Healthcare',
				price: 70,
				shareInFund: 1.05
			}
		]
	},
	{
		id: v1(),
		name: 'iemg',
		issuer: 'IShares',
		price: 48.69,
		companies: [
			{
				id: v1(),
				name: 'TSC',
				country: 'Taiwan',
				sector: 'Consumer Cyclical',
				price: 89.47,
				shareInFund: 5.18
			},
			{
				id: v1(),
				name: 'Samsung',
				country: 'South Korea',
				sector: 'Technology',
				price: 42.93,
				shareInFund: 3.92
			},
			{
				id: v1(),
				name: 'Tencent',
				country: 'China',
				sector: 'Communication Services',
				price: 40.6,
				shareInFund: 3.9
			},
			{
				id: v1(),
				name: 'Alibaba',
				country: 'China',
				sector: 'Consumer Cyclical',
				price: 81.7,
				shareInFund: 2.71
			},
			{
				id: v1(),
				name: 'Meituan',
				country: 'China',
				sector: 'Consumer Cyclical',
				price: 2223.1,
				shareInFund: 1.31
			}
		]
	}
]

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={index}>
		<App />
	</Provider>
)
