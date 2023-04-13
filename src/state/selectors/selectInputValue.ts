import { AppRootStateType } from '../index'

export const selectInputValue = (state: AppRootStateType): string => state.inputValue
