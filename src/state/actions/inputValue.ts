export const RESET_INPUT_VALUE = 'RESET-INPUT-VALUE'
export const ON_CHANGE_INPUT_VALUE = 'ON-CHANGE-INPUT-VALUE'

export type InputValueActionsType = ResetInputValueType | OnChangeInputValueType

type ResetInputValueType = ReturnType<typeof resetInputValueAC>
export const resetInputValueAC = () => {
	return {
		type: RESET_INPUT_VALUE
	} as const
}

type OnChangeInputValueType = ReturnType<typeof onChangeInputValueAC>

export const onChangeInputValueAC = (currentTargetValue: string) => {
	return {
		type: ON_CHANGE_INPUT_VALUE,
		payload: { currentTargetValue }
	} as const
}
