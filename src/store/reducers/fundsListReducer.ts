import {
	ADD_FUND,
	addFundAC,
	DECREMENT_FUND,
	DELETE_FUND,
	FundsListActionsType,
	INCREMENT_FUND,
	incrementFundAC,
	noEmptyErrorAC,
	noFundErrorAC,
	resetInputValueAC,
	SET_FUNDSLIST
} from '../actions'
import { FundFromFundsListType } from '../../types/FundFromFundsListType'
import { database } from '../../index'
import { databaseApi, fundsListAPI } from '../../api/database-api'
import { Dispatch } from 'redux'

export const initialState: FundFromFundsListType[] = []
export const fundsListReducer = (state: FundFromFundsListType[] = initialState, action: FundsListActionsType): any => {
	switch (action.type) {
		case SET_FUNDSLIST: {
			return action.payload.fundsList.map((fl: any) => ({ ...fl }))
		}
		case ADD_FUND: {
			const isFundInDB = database.find(fund => fund.name === action.payload.name)
			return [
				{
					id: action.payload.id,
					name: isFundInDB?.name,
					issuer: isFundInDB?.issuer,
					quantity: 1,
					price: isFundInDB?.price,
					totalPrice: isFundInDB?.price,
					companies: isFundInDB?.companies.map(company =>
						company
							? {
									...company,
									sumInFund: (isFundInDB.price / 100) * company.shareInFund,
									shareInPortfolio: ((isFundInDB.price / 100) * company.shareInFund) / (isFundInDB.price / 100),
									sumInPortfolio: (isFundInDB.price / 100) * company.shareInFund
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
			return state.filter(fund => fund.name !== action.payload.name)
		}
		default:
			return state
	}
}

export const setFundsListAC = (fundsList: any) => {
	return {
		type: SET_FUNDSLIST,
		fundsList
	}
}

export const fetchFundsListTC = (): any => (dispatch: Dispatch) => {
	fundsListAPI.getFundsList().then((res: any) => {
		dispatch(setFundsListAC(res.fundsList))
	})
}

export const addFundTC =
	(fundsList: any, inputValue: any, totalValue: any): any =>
	(dispatch: Dispatch): any => {
		databaseApi.getDatabase().then(res => {
			const isFundInDB = res.data.find((fund: any) => fund.name === inputValue)
			const isFundInFundList = fundsList.find((fund: any) => fund.name === inputValue)
			if (isFundInDB) {
				if (!isFundInFundList) {
					dispatch(addFundAC(inputValue.trim(), totalValue))
					dispatch(resetInputValueAC())
				} else {
					dispatch(incrementFundAC(inputValue.trim(), totalValue))
				}
			} else if (inputValue.trim() === '') {
				dispatch(noEmptyErrorAC())
			} else {
				dispatch(noFundErrorAC())
			}
		})
	}
