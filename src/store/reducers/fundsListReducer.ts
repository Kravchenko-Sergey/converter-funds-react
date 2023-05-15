import {
	ADD_FUND,
	addFundAC,
	DECREMENT_FUND,
	DELETE_FUND,
	deleteFundHandlerAC,
	FundsListActionsType,
	INCREMENT_FUND,
	incrementFundAC,
	noEmptyErrorAC,
	noFundErrorAC,
	resetInputValueAC,
	SET_FUNDSLIST
} from '../actions'
import { FundFromFundsListType } from '../../types/FundFromFundsListType'
import { databaseApi, fundsListAPI } from '../../api/database-api'
import { Dispatch } from 'redux'

export const initialState: FundFromFundsListType[] = []
export const fundsListReducer = (state: FundFromFundsListType[] = initialState, action: FundsListActionsType): any => {
	switch (action.type) {
		case SET_FUNDSLIST: {
			return action.payload.fundsList.map((fl: any) => ({ ...fl, quantity: 1, totalPrice: fl.price }))
		}
		case ADD_FUND: {
			return [
				{
					id: action.payload.fund?.id,
					name: action.payload.fund?.name,
					issuer: action.payload.fund?.issuer,
					quantity: 1,
					price: action.payload.fund?.price,
					totalPrice: action.payload.fund?.price,
					companies: action.payload.fund?.companies.map((company: any) =>
						company
							? {
									...company,
									sumInFund: (action.payload.fund.price / 100) * company.shareInFund,
									shareInPortfolio:
										((action.payload.fund.price / 100) * company.shareInFund) / (action.payload.fund.price / 100),
									sumInPortfolio: (action.payload.fund.price / 100) * company.shareInFund
							  }
							: company
					)
				},
				...state
			]
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
			return state.filter(fund => fund.id !== action.payload.id)
		}
		default:
			return state
	}
}

export const setFundsListAC = (fundsList: any) => {
	return {
		type: SET_FUNDSLIST,
		payload: { fundsList }
	}
}

export const fetchFundsListTC = (): any => (dispatch: Dispatch) => {
	fundsListAPI.getFundsList().then((res: any) => {
		console.log(res.data)
		dispatch(setFundsListAC(res.data))
	})
}

export const addFundTC =
	(inputValue: any, totalValue: any): any =>
	(dispatch: Dispatch): any => {
		databaseApi.getDatabase().then(res => {
			const isFundInDB = res.data.find((fund: any) => fund.name === inputValue)
			if (isFundInDB) {
				fundsListAPI.getFundsList().then(res => {
					const isFundInFundList = res.data.find((fund: any) => fund.name === inputValue)
					if (!isFundInFundList) {
						fundsListAPI.addFund(isFundInDB).then(res => {
							dispatch(addFundAC(isFundInDB, inputValue.trim(), totalValue))
							dispatch(resetInputValueAC())
						})
					} else {
						dispatch(incrementFundAC(inputValue.trim(), totalValue))
					}
				})
			} else if (inputValue.trim() === '') {
				dispatch(noEmptyErrorAC())
			} else {
				dispatch(noFundErrorAC())
			}
		})
	}

export const deleteFundTC =
	(fundId: any): any =>
	(dispatch: Dispatch) => {
		fundsListAPI.deleteFund(fundId).then(res => {
			dispatch(deleteFundHandlerAC(fundId))
		})
	}
