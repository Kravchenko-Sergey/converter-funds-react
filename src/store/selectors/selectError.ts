import { AppRootStateType } from '../index'

export const selectError = (state: AppRootStateType): string => state.error
