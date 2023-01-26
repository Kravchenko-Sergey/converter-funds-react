const state = {
	database: [
		{
			name: 'voo',
			quantity: 0,
			totalPrice: 0,
			issuer: 'Vanguard',
			price: 374.52,
			composition: [
				{ name: 'Apple', shareInFund: 7.05, country: 'USA', sector: 'it' },
				{ name: 'Microsoft', shareInFund: 5.27, country: 'USA', sector: 'it' },
				{ name: 'Alphabet', shareInFund: 3.26, country: 'USA', sector: 'it' },
				{ name: 'Amazon', shareInFund: 2.76, country: 'USA', sector: 'ceil' },
				{ name: 'Tesla', shareInFund: 1.84, country: 'USA', sector: 'cars' }
			]
		},
		{
			name: 'spdw',
			quantity: 0,
			totalPrice: 0,
			issuer: 'SPDR',
			price: 30.22,
			composition: [
				{
					name: 'Nestle',
					shareInFund: 1.54,
					country: 'Russia',
					sector: 'financials'
				},
				{
					name: 'ASML Holding',
					shareInFund: 1.16,
					country: 'Russia',
					sector: 'industrial'
				},
				{
					name: 'Samsung',
					shareInFund: 1.15,
					country: 'Russia',
					sector: 'industrial'
				},
				{ name: 'Roche', shareInFund: 1.13, country: 'Russia', sector: 'it' },
				{
					name: 'Shell',
					shareInFund: 1.09,
					country: 'Russia',
					sector: 'financials'
				}
			]
		},
		{
			name: 'iemg',
			quantity: 0,
			totalPrice: 0,
			issuer: 'IShares',
			price: 48.68,
			composition: [
				{ name: 'TSM', shareInFund: 5.22, country: 'China', sector: 'it' },
				{
					name: 'Tencent',
					shareInFund: 3.07,
					country: 'China',
					sector: 'Communication'
				},
				{
					name: 'Samsung',
					shareInFund: 2.03,
					country: 'South Korea',
					sector: 'ceil'
				},
				{
					name: 'Alibaba',
					shareInFund: 3.01,
					country: 'China',
					sector: 'Consumer Discretionary'
				},
				{
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
			name: 'voo',
			quantity: 1,
			totalPrice: 0,
			issuer: 'Vanguard',
			price: 374.52,
			composition: [
				{ name: 'Apple', shareInFund: 7.05, country: 'USA', sector: 'it' },
				{ name: 'Microsoft', shareInFund: 5.27, country: 'USA', sector: 'it' },
				{ name: 'Alphabet', shareInFund: 3.26, country: 'USA', sector: 'it' },
				{ name: 'Amazon', shareInFund: 2.76, country: 'USA', sector: 'ceil' },
				{ name: 'Tesla', shareInFund: 1.84, country: 'USA', sector: 'cars' }
			]
		},
		{
			name: 'spdw',
			quantity: 1,
			totalPrice: 0,
			issuer: 'SPDR',
			price: 30.22,
			composition: [
				{
					name: 'Nestle',
					shareInFund: 1.54,
					country: 'Russia',
					sector: 'financials'
				},
				{
					name: 'ASML Holding',
					shareInFund: 1.16,
					country: 'Russia',
					sector: 'industrial'
				},
				{
					name: 'Samsung',
					shareInFund: 1.15,
					country: 'Russia',
					sector: 'industrial'
				},
				{ name: 'Roche', shareInFund: 1.13, country: 'Russia', sector: 'it' },
				{
					name: 'Shell',
					shareInFund: 1.09,
					country: 'Russia',
					sector: 'financials'
				}
			]
		}
	],
	companies: [
		{ name: 'Apple', shareInFund: 7.05, country: 'USA', sector: 'it' },
		{ name: 'Microsoft', shareInFund: 5.27, country: 'USA', sector: 'it' },
		{ name: 'Alphabet', shareInFund: 3.26, country: 'USA', sector: 'it' },
		{ name: 'Amazon', shareInFund: 2.76, country: 'USA', sector: 'ceil' },
		{ name: 'Tesla', shareInFund: 1.84, country: 'USA', sector: 'cars' }
	]
}

export default state
