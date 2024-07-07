import { RoomModel } from './room.model'

export interface BookingRequest {
	roomId: string
	startDate: Date
	endDate: Date
}

export interface BookingModel {
	id: string
	userId: string
	roomId: string
	startDate: string
	endDate: string
	status?: string
	createdAt: string
	updatedAt: string

	room?: RoomModel
}
