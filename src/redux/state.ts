import { v1 } from 'uuid'

const state = {
	database: [
		{
			id: v1(),
			name: 'voo',
			quantity: 0,
			totalPrice: 0,
			issuer: 'Vanguard',
			price: 374.52,
			composition: [
				{
					id: v1(),
					name: 'Apple',
					shareInFund: 7.05,
					country: 'USA',
					sector: 'it'
				},
				{
					id: v1(),
					name: 'Microsoft',
					shareInFund: 5.27,
					country: 'USA',
					sector: 'it'
				},
				{
					id: v1(),
					name: 'Alphabet',
					shareInFund: 3.26,
					country: 'USA',
					sector: 'it'
				},
				{
					id: v1(),
					name: 'Amazon',
					shareInFund: 2.76,
					country: 'USA',
					sector: 'ceil'
				},
				{
					id: v1(),
					name: 'Tesla',
					shareInFund: 1.84,
					country: 'USA',
					sector: 'cars'
				}
			]
		},
		{
			id: v1(),
			name: 'spdw',
			quantity: 0,
			totalPrice: 0,
			issuer: 'SPDR',
			price: 30.22,
			composition: [
				{
					id: v1(),
					name: 'Nestle',
					shareInFund: 1.54,
					country: 'Russia',
					sector: 'financials'
				},
				{
					id: v1(),
					name: 'ASML Holding',
					shareInFund: 1.16,
					country: 'Russia',
					sector: 'industrial'
				},
				{
					id: v1(),
					name: 'Samsung',
					shareInFund: 1.15,
					country: 'Russia',
					sector: 'industrial'
				},
				{
					id: v1(),
					name: 'Roche',
					shareInFund: 1.13,
					country: 'Russia',
					sector: 'it'
				},
				{
					id: v1(),
					name: 'Shell',
					shareInFund: 1.09,
					country: 'Russia',
					sector: 'financials'
				}
			]
		},
		{
			id: v1(),
			name: 'iemg',
			quantity: 0,
			totalPrice: 0,
			issuer: 'IShares',
			price: 48.68,
			composition: [
				{
					id: v1(),
					name: 'TSM',
					shareInFund: 5.22,
					country: 'China',
					sector: 'it'
				},
				{
					id: v1(),
					name: 'Tencent',
					shareInFund: 3.07,
					country: 'China',
					sector: 'Communication'
				},
				{
					id: v1(),
					name: 'Samsung',
					shareInFund: 2.03,
					country: 'South Korea',
					sector: 'ceil'
				},
				{
					id: v1(),
					name: 'Alibaba',
					shareInFund: 3.01,
					country: 'China',
					sector: 'Consumer Discretionary'
				},
				{
					id: v1(),
					name: 'Reliance Industries',
					shareInFund: 1.36,
					country: 'India',
					sector: 'Energy'
				}
			]
		}
	],
	funds: [
		{
			id: v1(),
			name: 'voo',
			quantity: 1,
			totalPrice: 0,
			issuer: 'Vanguard',
			price: 374.52,
			image: 'dddd',
			composition: [
				{
					id: v1(),
					name: 'Apple',
					shareInFund: 7.05,
					country: 'USA',
					sector: 'it'
				},
				{
					id: v1(),
					name: 'Microsoft',
					shareInFund: 5.27,
					country: 'USA',
					sector: 'it'
				},
				{
					id: v1(),
					name: 'Alphabet',
					shareInFund: 3.26,
					country: 'USA',
					sector: 'it'
				},
				{
					id: v1(),
					name: 'Amazon',
					shareInFund: 2.76,
					country: 'USA',
					sector: 'ceil'
				},
				{
					id: v1(),
					name: 'Tesla',
					shareInFund: 1.84,
					country: 'USA',
					sector: 'cars'
				}
			]
		},
		{
			id: v1(),
			name: 'spdw',
			quantity: 1,
			totalPrice: 0,
			issuer: 'SPDR',
			price: 30.22,
			image: 'dddd',
			composition: [
				{
					id: v1(),
					name: 'Nestle',
					shareInFund: 1.54,
					country: 'Russia',
					sector: 'financials'
				},
				{
					id: v1(),
					name: 'ASML Holding',
					shareInFund: 1.16,
					country: 'Russia',
					sector: 'industrial'
				},
				{
					id: v1(),
					name: 'Samsung',
					shareInFund: 1.15,
					country: 'Russia',
					sector: 'industrial'
				},
				{
					id: v1(),
					name: 'Roche',
					shareInFund: 1.13,
					country: 'Russia',
					sector: 'it'
				},
				{
					id: v1(),
					name: 'Shell',
					shareInFund: 1.09,
					country: 'Russia',
					sector: 'financials'
				}
			]
		}
	],
	companies: [
		{
			id: v1(),
			name: 'Apple',
			shareInFund: 7.05,
			country: 'USA',
			sector: 'it'
		},
		{
			id: v1(),
			name: 'Microsoft',
			shareInFund: 5.27,
			country: 'USA',
			sector: 'it'
		},
		{
			id: v1(),
			name: 'Alphabet',
			shareInFund: 3.26,
			country: 'USA',
			sector: 'it'
		},
		{
			id: v1(),
			name: 'Amazon',
			shareInFund: 2.76,
			country: 'USA',
			sector: 'ceil'
		},
		{
			id: v1(),
			name: 'Tesla',
			shareInFund: 1.84,
			country: 'USA',
			sector: 'cars'
		}
	]
}

export default state
