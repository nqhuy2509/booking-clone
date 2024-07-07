import { createSlice } from '@reduxjs/toolkit'

export interface IUIState {
	isShowLoginDialog?: boolean
}

const initialState: IUIState = {
	isShowLoginDialog: false,
}

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		showLoginDialog: (state) => {
			state.isShowLoginDialog = true
		},
		hideLoginDialog: (state) => {
			state.isShowLoginDialog = false
		},
	},
})

export const { showLoginDialog, hideLoginDialog } = uiSlice.actions

export default uiSlice.reducer
