import { AuthModel } from '../interfaces/auth.model'
import { IResponseAPI } from '../interfaces/responseApi'
import apiClient from './apiClient'

const authApi = {
	register: async (email: string, password: string) => {
		return await apiClient.post('api/v1/auth/register', { email, password })
	},
	verify: async (email: string, code: string) => {
		return await apiClient.post('api/v1/auth/verify', {
			email,
			code,
		})
	},
	login: async (email: string, password: string): Promise<IResponseAPI<AuthModel>> => {
		return await apiClient.post('api/v1/auth/login', { email, password })
	},
}

export default authApi
