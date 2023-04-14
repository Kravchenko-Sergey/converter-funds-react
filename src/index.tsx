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
				price: 154.75,
				shareInFund: 6.02
			},
			{
				id: v1(),
				name: 'Microsoft',
				price: 279.31,
				shareInFund: 5.54
			},
			{
				id: v1(),
				name: 'Alphabet',
				price: 98.95,
				shareInFund: 3.06
			},
			{
				id: v1(),
				name: 'Amazon',
				price: 256.5,
				shareInFund: 2.31
			},
			{
				id: v1(),
				name: 'Berkshire Hathaway',
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
				price: 70,
				shareInFund: 1.53
			},
			{
				id: v1(),
				name: 'ASML',
				price: 70,
				shareInFund: 1.19
			},
			{
				id: v1(),
				name: 'Samsung',
				price: 70,
				shareInFund: 1.17
			},
			{
				id: v1(),
				name: 'Roche',
				price: 70,
				shareInFund: 1.08
			},
			{
				id: v1(),
				name: 'Novo Nordisk',
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
				price: 89.47,
				shareInFund: 5.18
			},
			{
				id: v1(),
				name: 'Samsung',
				price: 42.93,
				shareInFund: 3.92
			},
			{
				id: v1(),
				name: 'Tencent',
				price: 40.6,
				shareInFund: 3.9
			},
			{
				id: v1(),
				name: 'Alibaba',
				price: 81.7,
				shareInFund: 2.71
			},
			{
				id: v1(),
				name: 'Meituan',
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
