import { AuthModel } from '../../interfaces/auth.model'
import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/dist/createAction.d'
import { createSlice } from '@reduxjs/toolkit'

export interface IAuthState {
	email?: string
	isAuthenticated?: boolean
}

const initialState: IAuthState = {
	email: '',
	isAuthenticated: false,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthState: (state, action: PayloadAction<AuthModel>) => {
			state.email = action.payload.email
			state.isAuthenticated = true
		},
		logout: (state) => {
			state.email = ''
			state.isAuthenticated = false
		},
	},
})

export const { setAuthState, logout } = authSlice.actions

export default authSlice.reducer
