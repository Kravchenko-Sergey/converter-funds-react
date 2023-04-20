import { ADD_FUND, DECREMENT_FUND, DELETE_FUND, FundsListActionsType, INCREMENT_FUND } from '../actions'
import { FundFromFundsListType } from '../../types/FundFromFundsListType'
import { database } from '../../index'

export const initialState: FundFromFundsListType[] = []

export const fundsListReducer = (state: FundFromFundsListType[] = initialState, action: FundsListActionsType): any => {
	switch (action.type) {
		case ADD_FUND: {
			const isFundInDB = database.find(fund => fund.name === action.payload.name)
			const isFundInFundList = state.find(fund => fund.name === action.payload.name)
			return isFundInDB
				? !isFundInFundList
					? [
							{
								id: action.payload.id,
								name: isFundInDB.name,
								issuer: isFundInDB.issuer,
								quantity: 1,
								price: isFundInDB.price,
								totalPrice: isFundInDB.price,
								companies: isFundInDB.companies.map(company =>
									company
										? {
												...company,
												sumInFund: (isFundInDB.price / 100) * company.shareInFund,
												shareInPortfolio:
													((isFundInDB.price / 100) * company.shareInFund) / (action.payload.totalValue / 100),
												sumInPortfolio: (isFundInDB.price / 100) * company.shareInFund
										  }
										: company
								)
							},
							...state
					  ]
					: state.map(fund =>
							fund.id === isFundInFundList.id
								? {
										...fund,
										quantity: fund.quantity + 1,
										totalPrice: fund.price * (fund.quantity + 1),
										companies: fund.companies.map(company => ({
											...company,
											sumInFund: (fund.totalPrice / 100) * company.shareInFund,
											shareInPortfolio:
												((fund.totalPrice / 100) * company.shareInFund) / (action.payload.totalValue / 100),
											sumInPortfolio: (fund.totalPrice / 100) * company.shareInFund
										}))
								  }
								: fund
					  )
				: state
		}
		case INCREMENT_FUND: {
			return state.map(fund =>
				fund.name === action.payload.name
					? {
							...fund,
							quantity: fund.quantity + 1,
							totalPrice: fund.price * (fund.quantity + 1),
							companies: fund.companies.map(company => ({
								...company,
								sumInFund: (fund.totalPrice / 100) * company.shareInFund,
								shareInPortfolio: ((fund.totalPrice / 100) * company.shareInFund) / (action.payload.totalValue / 100),
								sumInPortfolio: (fund.totalPrice / 100) * company.shareInFund
							}))
					  }
					: fund
			)
		}
		case DECREMENT_FUND: {
			return state.map(fund =>
				fund.name === action.payload.name
					? fund.quantity > 0
						? {
								...fund,
								quantity: fund.quantity - 1,
								totalPrice: fund.price * (fund.quantity - 1),
								companies: fund.companies.map(company => ({
									...company,
									sumInFund: (fund.totalPrice / 100) * company.shareInFund,
									shareInPortfolio: ((fund.totalPrice / 100) * company.shareInFund) / (action.payload.totalValue / 100),
									sumInPortfolio: (fund.totalPrice / 100) * company.shareInFund
								}))
						  }
						: fund
					: fund
			)
		}
		case DELETE_FUND: {
			return state.filter(fund => fund.name !== action.payload.name)
		}
		default:
			return state
	}
}
