import { IResponseAPI } from '../interfaces/responseApi'
import { StayModel } from '../interfaces/stay.model'
import apiClient from './apiClient'

const stayApi = {
	getAllStay: async (): Promise<IResponseAPI<[StayModel]>> => {
		return await apiClient.get('api/v1/stays')
	},
}

export default stayApi
