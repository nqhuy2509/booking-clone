import { IResponseAPI } from '../interfaces/responseApi'
import { StayModel } from '../interfaces/stay.model'
import apiClient from './apiClient'

const stayApi = {
	getAllStay: async (type: string, keyword: string): Promise<IResponseAPI<[StayModel]>> => {
		return await apiClient.get(`api/v1/stays?type=${type}&keyword=${keyword}`)
	},
}

export default stayApi
