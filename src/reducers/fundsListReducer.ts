import { database, FundFromFundsListType } from '../index'
import { v1 } from 'uuid'

const initialState: FundFromFundsListType[] = []

const ADD_FUND = 'ADD-FUND'

export const fundsListReducer = (
	state: FundFromFundsListType[] = initialState,
	action: ActionsType
): any => {
	switch (action.type) {
		case ADD_FUND: {
			const isFundInDB = database.find(
				fund => fund.name === action.payload.name
			)
			const isFundInFundList = state.find(
				fund => fund.name === action.payload.name
			)
			console.log(isFundInFundList)
			return isFundInDB
				? !isFundInFundList
					? [
							{
								id: action.payload.id,
								name: isFundInDB.name,
								issuer: isFundInDB.issuer,
								quantity: 1,
								price: isFundInDB.price,
								totalPrice: isFundInDB.price
							},
							...state
					  ]
					: state.map(fund =>
							fund.id === isFundInFundList.id
								? {
										...fund,
										quantity: fund.quantity + 1,
										totalPrice: fund.price * (fund.quantity + 1)
								  }
								: fund
					  )
				: state
		}
		default:
			return state
	}
}

type ActionsType = AddFundACType

type AddFundACType = ReturnType<typeof addFundAC>
export const addFundAC = (name: string) => {
	return {
		type: ADD_FUND,
		payload: { id: v1(), name }
	} as const
}
