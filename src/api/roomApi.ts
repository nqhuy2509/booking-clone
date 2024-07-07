import { IResponseAPI } from '../interfaces/responseApi'
import { RoomModel } from '../interfaces/room.model'
import apiClient from './apiClient'

const roomApi = {
	getAllRoomByStay: async (stayId: string): Promise<IResponseAPI<[RoomModel]>> => {
		return await apiClient.get(`api/v1/rooms/${stayId}?available=true`)
	},
	getRoomById: async (roomId: string): Promise<IResponseAPI<RoomModel>> => {
		return await apiClient.get(`api/v1/room/${roomId}`)
	},
}

export default roomApi
